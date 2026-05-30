'use client';

import Link from 'next/link';
import { ArrowLeft, Search, Target, Shield, Globe, Award, Filter, RefreshCw, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GrantCardProps {
  org: string;
  title: string;
  deadline: string;
  amount: string;
  matchScore: number;
  status: string;
  focus: string[];
  _id: string;
  onAudit: (id: string) => void;
}

export default function PGEUDashboard() {
  const [grants, setGrants] = useState<any[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const fetchGrants = async () => {
    try {
      const response = await fetch('/api/grants');
      const data = await response.json();
      setGrants(data.grants);
    } catch (error) {
      console.error(error);
      setGrants([]);
    }
  };

  useEffect(() => {
    fetchGrants();
  }, []);

  const handleSeed = async () => {
    setLoading(true);
    try {
      await fetch('/api/grants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          org: "UNDP / SIPS",
          title: "Somali Institutional Public Sector (SIPS) Project - Phase II",
          deadline: "2026-08-15",
          amount: "$2.5M allocation",
          matchScore: 94,
          status: "Eligibility Confirmed",
          focus: ["SDG 16", "Institutional Reform", "Digitalization"]
        })
      });
      await fetch('/api/grants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          org: "EU NDICI",
          title: "Horn of Africa Democratic Governance & Accountability Fund",
          deadline: "2026-10-01",
          amount: "€4.0M allocation",
          matchScore: 88,
          status: "Requires IPU Alignment",
          focus: ["Legislative Oversight", "Ex-Ante Scrutiny", "Transparency"]
        })
      });
      await fetchGrants();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAudit = async (id: string) => {
    try {
      const response = await fetch('/api/grants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'evaluate', id })
      });
      const res = await response.json();
      alert(`Audit Result: ${res.audit.message} (Score: ${res.audit.score}%)`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="mb-8 border-b border-slate-800 pb-8 flex items-center gap-6">
        <Link href="/epd" className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
          <ArrowLeft className="w-6 h-6 text-slate-400" />
        </Link>
        <div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            PGEU Intelligence Desk
          </h1>
          <p className="text-slate-400 mt-2 text-lg flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-400" />
            Parliamentary Global Engagement Unit • Grant Discovery & Compliance
          </p>
        </div>
      </header>

      {/* Main AI Command Bar */}
      <section className="mb-12">
        <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl p-2 shadow-2xl shadow-indigo-900/20 max-w-4xl flex items-center gap-4 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
          <div className="pl-4">
            <Search className="w-6 h-6 text-indigo-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search global funding windows (e.g., 'UNDP Democratic Governance', 'IPU SDG 16')..."
            className="w-full bg-transparent border-none text-white focus:outline-none placeholder-slate-500 py-4 text-lg"
            defaultValue="Find NDICI capacity-building grants for legislative digitization"
          />
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
            <RefreshCw className="w-5 h-5" />
            Scan Grants
          </button>
        </div>
      </section>

      {/* Results Grid */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
            Active Funding Windows
          </h2>
          <div className="flex gap-4">
            {grants && grants.length === 0 && (
              <button onClick={handleSeed} className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-bold">
                {loading ? 'Seeding...' : 'Seed Database'}
              </button>
            )}
            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <Filter className="w-5 h-5" />
              Filter by Organization
            </button>
          </div>
        </div>

        {grants === undefined ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {grants.map((grant: any) => (
              <GrantCard key={grant._id} {...grant} onAudit={handleAudit} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function GrantCard({ org, title, deadline, amount, matchScore, status, focus, _id, onAudit }: GrantCardProps) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-colors group">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-slate-800 text-amber-400 mb-4 inline-block">
            {org}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{title}</h3>
          <p className="text-slate-400 flex items-center gap-4">
            <span className="flex items-center gap-1"><Target className="w-4 h-4 text-slate-500" /> Deadline: {deadline}</span>
            <span className="flex items-center gap-1"><Award className="w-4 h-4 text-slate-500" /> {amount}</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-950 border border-slate-800 p-4 rounded-xl">
          <span className="text-3xl font-extrabold text-emerald-400">{matchScore}%</span>
          <span className="text-xs text-slate-500 font-medium">MATCH</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {focus.map((tag: string, i: number) => (
          <span key={i} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-md text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2">
          {matchScore > 90 ? (
            <Shield className="w-5 h-5 text-emerald-500" />
          ) : (
            <Shield className="w-5 h-5 text-amber-500" />
          )}
          <span className="text-sm font-medium text-slate-300">{status}</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => onAudit(_id)}
            className="border border-indigo-500/30 text-indigo-400 px-4 py-2 rounded-lg font-bold hover:bg-indigo-500/10 transition-colors text-sm"
          >
            Audit Eligibility
          </button>
          <button className="bg-white text-slate-950 px-4 py-2 rounded-lg font-bold hover:bg-slate-200 transition-colors text-sm">
            Draft Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
