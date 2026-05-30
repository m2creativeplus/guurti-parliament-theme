'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Target, Briefcase, FileText, Search, Activity, ExternalLink, Filter, Coins } from 'lucide-react';

interface Opportunity {
  id: string;
  type: string;
  title: string;
  organization: string;
  location: string;
  deadline: string;
  url: string;
  mahmoud_score: number;
  m2_score: number;
  overall_priority: string;
  matched_keywords: string[];
  value_usd?: number;
}

interface IntelligenceData {
  generated_at_human: string;
  total: number;
  stats: {
    high_priority: number;
    relevant: number;
    monitor: number;
    by_type: {
      jobs: number;
      tenders: number;
      opportunities: number;
    }
  };
  for_mahmoud: Opportunity[];
}

export default function IntelligenceFeed() {
  const [data, setData] = useState<IntelligenceData | null>(null);
  const [filter, setFilter] = useState<string>('ALL');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/data/latest.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Error fetching intelligence data:', err));
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050507] flex items-center justify-center text-mora-green-400">
        <Activity className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  const filteredData = data.for_mahmoud.filter(opp => {
    const matchesFilter = filter === 'ALL' || opp.overall_priority === filter;
    const matchesSearch = opp.title.toLowerCase().includes(search.toLowerCase()) || 
                          opp.organization.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalCount = data.for_mahmoud.length;
  const totalValueUsd = data.for_mahmoud.reduce((acc, curr) => acc + (curr.value_usd || 0), 0);
  const tendersCount = data.for_mahmoud.filter(opp => opp.type === 'tender').length;
  const highPriorityCount = data.for_mahmoud.filter(opp => opp.overall_priority === 'HIGH').length;

  return (
    <div className="min-h-screen bg-[#050507] text-[#F0EEE8] font-body selection:bg-mora-green-500/30">
      
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-[#181828] bg-[#050507]/90 backdrop-blur-xl px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/epd" className="w-10 h-10 bg-[#13131E] hover:bg-[#181828] border border-[#232333] rounded-full flex items-center justify-center transition-colors">
            <ArrowLeft className="w-4 h-4 text-[#9B9AAD]" />
          </Link>
          <div>
            <h1 className="text-xl font-header font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-mora-green-400" />
              Global Opportunities Intelligence
            </h1>
            <p className="text-xs text-[#9B9AAD]">Last synced: {data.generated_at_human} • Source: AI Opportunity Scanner</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-bold text-sl-gold-400">{totalCount} Active Leads</p>
            <p className="text-xs text-mora-green-500">Live API Monitoring</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8 space-y-8">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard title="Total Opportunities" value={totalCount} icon={Target} color="mora" />
          <StatCard title="Capital Pipeline" value={`$${(totalValueUsd / 1000000).toFixed(2)}M`} icon={Coins} color="gold" />
          <StatCard title="Tenders / RFPs" value={tendersCount} icon={FileText} color="cyan" />
          <StatCard title="High Priority" value={highPriorityCount} icon={Activity} color="rose" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#0A0A0F] border border-[#181828] p-4 rounded-xl">
          <div className="flex gap-2">
            {['ALL', 'HIGH', 'RELEVANT', 'MONITOR'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                  filter === f 
                    ? 'bg-mora-green-500 text-white' 
                    : 'bg-[#13131E] text-[#9B9AAD] hover:text-white border border-[#181828]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A5870]" />
            <input 
              type="text" 
              placeholder="Search organizations or titles..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#13131E] border border-[#181828] text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-mora-green-500"
            />
          </div>
        </div>

        {/* Intelligence Feed */}
        <div className="space-y-4">
          {filteredData.map((opp, idx) => (
            <div key={opp.id || idx} className="bg-[#0A0A0F] border border-[#181828] hover:border-mora-green-500/30 p-6 rounded-xl transition-colors group flex flex-col md:flex-row gap-6">
              
              {/* Left Score Section */}
              <div className="flex flex-row md:flex-col gap-4 items-center md:justify-center md:w-24 shrink-0 border-b md:border-b-0 md:border-r border-[#181828] pb-4 md:pb-0 pr-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sl-gold-400">{opp.mahmoud_score}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#5A5870] font-bold">M2 Score</div>
                </div>
                <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${getPriorityColor(opp.overall_priority)}`}>
                  {opp.overall_priority}
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#13131E] border border-[#232333] text-[#9B9AAD] uppercase font-bold">
                    {opp.type}
                  </span>
                  <span className="text-xs text-mora-green-400 font-medium">
                    {opp.organization.toUpperCase()}
                  </span>
                  {opp.value_usd && (
                    <span className="text-xs text-sl-gold-400 font-bold ml-auto md:ml-0 bg-sl-gold-400/10 px-2 py-0.5 rounded border border-sl-gold-400/20">
                      ${(opp.value_usd / 1000000).toFixed(2)}M
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#F0EEE8] group-hover:text-mora-green-300 transition-colors capitalize">
                  {opp.title}
                </h3>
                <p className="text-sm text-[#9B9AAD] leading-relaxed">
                  {opp.id === 'eu-ndici-2026-102m' && "A €102 million financing agreement focused on budget support, governance, state-building, and national development priorities."}
                  {opp.id === 'afdb-road-infra-76m' && "Upgrading 15km road section from Zeila to Asha Addo, including local technical assistance and institutional support for cross-border trade."}
                  {opp.id === 'wb-boost-you-2025' && "Building Opportunities and Outcomes in Social Protection and Youth Employment. Cash transfers and civic engagement programs."}
                  {opp.id === 'wb-damal-caafimaad-ext' && "Improving healthcare service delivery networks. Extended through mid-2026 to ensure capacity building of regional health administrations."}
                  {opp.id === 'usaid-democracy-gov-26' && "Funding focused on resilient democratic societies, local governance empowerment, and human rights advocacy."}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-[#5A5870] pt-2">
                  <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {opp.location}</span>
                  <span className="flex items-center gap-1"><Activity className="w-3 h-3" /> {opp.deadline}</span>
                </div>
                {opp.matched_keywords && opp.matched_keywords.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {opp.matched_keywords.slice(0, 5).map((kw, k_idx) => (
                      <span key={k_idx} className="bg-mora-green-900/20 text-mora-green-300 border border-mora-green-500/20 px-2 py-0.5 rounded text-[10px] font-mono">
                        {kw}
                      </span>
                    ))}
                    {opp.matched_keywords.length > 5 && (
                      <span className="bg-[#13131E] text-[#5A5870] border border-[#181828] px-2 py-0.5 rounded text-[10px] font-mono">
                        +{opp.matched_keywords.length - 5} more
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex md:flex-col justify-end gap-2 shrink-0">
                <a href={opp.url} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#13131E] hover:bg-mora-green-900/30 border border-[#232333] hover:border-mora-green-500/50 text-[#F0EEE8] px-4 py-2 rounded-lg text-xs font-bold transition-all">
                  <ExternalLink className="w-3 h-3" /> View Source
                </a>
                <Link href={`/epd/generator?opportunity=${opp.id}`} className="flex items-center justify-center gap-2 bg-sl-gold-400 hover:bg-sl-gold-500 text-[#050507] px-4 py-2 rounded-lg text-xs font-bold transition-all">
                  <FileText className="w-3 h-3" /> Auto-Draft Proposal
                </Link>
              </div>

            </div>
          ))}
          {filteredData.length === 0 && (
            <div className="text-center py-12 text-[#5A5870]">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No opportunities match the current filters.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }: { title: string; value: string | number; icon: any; color: string }) {
  const bg = {
    mora: 'bg-mora-green-900/20',
    gold: 'bg-sl-gold-400/10',
    cyan: 'bg-cyan-500/10',
    rose: 'bg-rose-500/10'
  }[color];
  const border = {
    mora: 'border-mora-green-500/30',
    gold: 'border-sl-gold-400/30',
    cyan: 'border-cyan-500/30',
    rose: 'border-rose-500/30'
  }[color];
  const text = {
    mora: 'text-mora-green-400',
    gold: 'text-sl-gold-400',
    cyan: 'text-cyan-400',
    rose: 'text-rose-400'
  }[color];

  return (
    <div className={`p-6 rounded-xl border ${border} ${bg} flex items-start justify-between`}>
      <div>
        <p className="text-[#9B9AAD] text-xs font-bold uppercase tracking-wider mb-2">{title}</p>
        <p className={`text-3xl font-bold ${text}`}>{value}</p>
      </div>
      <div className={`p-3 rounded-lg bg-[#050507]/50 ${border} border`}>
        <Icon className={`w-5 h-5 ${text}`} />
      </div>
    </div>
  );
}

function getPriorityColor(priority: string) {
  if (priority === 'HIGH') return 'text-rose-400 border-rose-500/30 bg-rose-500/10';
  if (priority === 'RELEVANT') return 'text-sl-gold-400 border-sl-gold-400/30 bg-sl-gold-400/10';
  return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
}
