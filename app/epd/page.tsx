'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, FileText, Globe, Users, ShieldCheck, Calendar, CheckCircle,
  Coins, Scale, Swords, Network, AlertCircle, Cpu, Database,
  Activity, Radio, Target, Briefcase, BarChart, Server, Terminal, Play, Loader2
} from 'lucide-react';

// ─── AI-POS Agent Definitions (Full 8-Agent Structure) ───────────────────
const AIPOS_AGENTS = [
  {
    id: 'opportunity-scanner',
    title: 'Opportunity Scanner',
    description: 'Continuously scans global procurement portals and donor websites (24/7) for funding opportunities aligned with Guurti objectives.',
    href: '/epd/intelligence',
    icon: Target,
    color: 'emerald',
    status: 'ACTIVE',
    capability: 'Web Scraping + NLP Matching',
    knowledge: 'Global Donor Portals, UN Procurement, NGO Job Boards',
  },
  {
    id: 'donor-monitor',
    title: 'Donor Monitor',
    description: 'Tracks institutional strategies of major donors (World Bank, EU, USAID, AfDB) to predict funding cycles and strategic alignments.',
    href: '/epd/intelligence',
    icon: Coins,
    color: 'emerald',
    status: 'ACTIVE',
    capability: 'Strategic Analytics + Pattern Recognition',
    knowledge: 'Donor Country Strategies, EU NDICI, USAID Frameworks',
  },
  {
    id: 'proposal-writer',
    title: 'Proposal Writer',
    description: 'Auto-generates Expressions of Interest (EOIs), Concept Notes, and full funding proposals based on identified opportunities.',
    href: '/epd/generator',
    icon: FileText,
    color: 'gold',
    status: 'ACTIVE',
    capability: 'Generative AI + Template Engine',
    knowledge: 'LogFrames, Theory of Change, Budgeting Standards',
  },
  {
    id: 'diplomacy-agent',
    title: 'Diplomatic Attaché',
    description: 'Manages Strategic Friendship Groups and bilateral relations. Generates zero-draft MoUs and formal correspondence.',
    href: '/epd/friendship',
    icon: Globe,
    color: 'cyan',
    status: 'ACTIVE',
    capability: 'MoU Drafting + Bilateral Registry',
    knowledge: 'Diplomatic Master Suite, Recognition Milestones',
  },
  {
    id: 'compliance-checker',
    title: 'Compliance Checker',
    description: 'Audits all drafts and agreements against the Somaliland Constitution and IPU guidelines to ensure strict sovereignty alignment.',
    href: '/epd/scrutiny',
    icon: ShieldCheck,
    color: 'amber',
    status: 'ACTIVE',
    capability: 'Legal Scrutiny + Constitutional Auditing',
    knowledge: 'Somaliland Constitution, IPU Guidelines',
  },
  {
    id: 'digital-sovereignty',
    title: 'Digital Sovereignty Agent',
    description: 'Secures parliamentary digital sovereignty, governs GovTech interfaces, builds DPI metadata schemas, and manages semantic legislative databases.',
    href: '/epd',
    icon: Database,
    color: 'cyan',
    status: 'ACTIVE',
    capability: 'GovStack Design + DPI Architecture',
    knowledge: 'Sovereign Hosting, Metadata Governance, IPU Open Data Standards',
  },
  {
    id: 'public-finance',
    title: 'Public Finance Auditor',
    description: 'Strengthens ex-ante and ex-post committee debt scrutiny, aggregates donor procurement portfolios, and audits budget transparency.',
    href: '/epd',
    icon: Scale,
    color: 'amber',
    status: 'ACTIVE',
    capability: 'PFM Monitoring + Scrutiny Scopes',
    knowledge: 'IMF Frameworks, World Bank PFM Benchmarks, WFD Toolkits',
  },
  {
    id: 'research-unit',
    title: 'Research Unit & War Room',
    description: 'Conducts comparative analysis of parliamentary frameworks and defends Somaliland institutional legitimacy globally against disinformation.',
    href: '/epd/defense',
    icon: BarChart,
    color: 'rose',
    status: 'ACTIVE',
    capability: 'Data Synthesis + Narrative Defense Protocols',
    knowledge: 'Comparative Governance Benchmarks, SDLA Historical Corpus',
  },
];

// ─── APPROVAL MATRIX ──────────────────────────────────────────────────────
const APPROVAL_MATRIX = [
  { type: 'Donor Proposals', approver: 'Proposal Writer + Executive', risk: 'Medium' },
  { type: 'Diplomatic Letters / MoUs', approver: 'Chairman Office', risk: 'High' },
  { type: 'Media Statements', approver: 'Media Office', risk: 'Medium' },
  { type: 'International MoUs', approver: 'Compliance Checker + Legal', risk: 'Critical' },
  { type: 'Legislative Drafts', approver: 'Compliance Checker', risk: 'High' },
  { type: 'Investment Agreements', approver: 'Compliance Checker + Human Sign-off', risk: 'Critical' },
];

const COLOR_VARIANTS: Record<string, { card: string; badge: string; icon: string; dot: string }> = {
  emerald: { card: 'border-mora-green-500/30 hover:border-mora-green-500/60 hover:shadow-mora-green-900/20', badge: 'bg-mora-green-500/10 text-mora-green-400', icon: 'text-mora-green-400', dot: 'bg-mora-green-500' },
  gold:    { card: 'border-sl-gold-400/30 hover:border-sl-gold-400/60 hover:shadow-sl-gold-700/20', badge: 'bg-sl-gold-400/10 text-sl-gold-400', icon: 'text-sl-gold-400', dot: 'bg-sl-gold-400' },
  cyan:    { card: 'border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-900/20', badge: 'bg-cyan-500/10 text-cyan-400', icon: 'text-cyan-400', dot: 'bg-cyan-500' },
  amber:   { card: 'border-amber-500/30 hover:border-amber-500/60 hover:shadow-amber-900/20', badge: 'bg-amber-500/10 text-amber-400', icon: 'text-amber-400', dot: 'bg-amber-500' },
  rose:    { card: 'border-rose-500/30 hover:border-rose-500/60 hover:shadow-rose-900/20', badge: 'bg-rose-500/10 text-rose-400', icon: 'text-rose-400', dot: 'bg-rose-500' },
};

const RISK_COLORS: Record<string, string> = {
  Medium:   'text-amber-400 bg-amber-500/10 border-amber-500/20',
  High:     'text-orange-400 bg-orange-500/10 border-orange-500/20',
  Critical: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
};

export default function EPDCommandCenter() {
  const [stats, setStats] = useState<{ totalCount: number; totalValueUsd: number } | null>(null);
  const [isAutomating, setIsAutomating] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    fetch('/data/latest.json')
      .then(res => res.json())
      .then((data: any) => {
        const count = data.for_mahmoud?.length || 0;
        const totalVal = data.for_mahmoud?.reduce((acc: number, curr: any) => acc + (curr.value_usd || 0), 0) || 0;
        setStats({ totalCount: count, totalValueUsd: totalVal });
      })
      .catch(err => console.error('Error fetching EPD stats:', err));
  }, []);

  const triggerAIWorkflow = () => {
    setIsAutomating(true);
    setLogs([]);

    const logSteps = [
      { text: '[INGESTION] Scanning UNDP Transformational Governance (STGP) & EU NDICI procurement portals...', delay: 0 },
      { text: '[INGESTION] Identified active high-value pipeline: €102M NDICI Governance & $76.37M AfDB Infrastructure...', delay: 1000 },
      { text: '[FACT-CHECK] Matching programmatic criteria against Sierra Leone post-conflict & Kenya PSC models...', delay: 2000 },
      { text: '[BENCHMARK] Success parameters mapped: Stability Actor framing (100% fit), PFM Oversight (95% fit)...', delay: 3000 },
      { text: '[COMPLIANCE] Triggering Ex-Ante Compliance Check against Somaliland Constitution (Articles 61 & 12)...', delay: 4000 },
      { text: '[SOVEREIGNTY] IPU Compliance Index verified: 98/100. No sovereignty leaks identified.', delay: 5000 },
      { text: '[SUCCESS] Autonomous workflow complete. Dynamic opportunity payload loaded to EPD proposal writer.', delay: 6000 }
    ];

    logSteps.forEach((step) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step.text]);
        if (step.delay === 6000) {
          setIsAutomating(false);
        }
      }, step.delay);
    });
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#F0EEE8] font-body selection:bg-mora-green-500/30">

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 border-b border-mora-green-900/50 bg-[#050507]/90 backdrop-blur-xl px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-sl-gold-400/10 border-2 border-sl-gold-400 rounded-full flex items-center justify-center text-2xl font-arabic text-sl-gold-400">
            ع
          </div>
          <div>
            <h1 className="text-xl font-header font-bold tracking-widest text-white uppercase">
              AI-POS <span className="text-sl-gold-400">•</span> Golaha Guurtida
            </h1>
            <p className="text-mora-green-100/60 text-xs tracking-wider uppercase">Autonomous Institutional Intelligence Platform</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-mora-green-500/20 bg-mora-green-500/5 text-xs text-mora-green-400">
            <Radio className="w-3 h-3 animate-pulse" />
            8 AI Agents Online
          </div>
          <Link href="/epd/intelligence" className="flex items-center gap-2 bg-sl-gold-400 hover:bg-sl-gold-500 text-[#050507] px-5 py-2.5 rounded-xl font-bold transition-all text-sm shadow-lg shadow-sl-gold-400/20">
            <Target className="w-4 h-4" /> Opportunities
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8 space-y-16">

        {/* ── Dynamic Strategic Metrics Bar ─────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0A0A0F]/60 backdrop-blur-xl border border-mora-green-900/30 p-6 rounded-2xl">
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-[#181828]/50 pb-4 md:pb-0 pr-6">
            <div className="w-12 h-12 rounded-xl bg-mora-green-500/10 flex items-center justify-center text-mora-green-400 shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#9B9AAD] uppercase tracking-wider font-bold">Active Opportunities</p>
              <p className="text-2xl font-bold text-white mt-1">
                {stats ? `${stats.totalCount} Programs` : 'Loading...'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-[#181828]/50 pb-4 md:pb-0 pr-6">
            <div className="w-12 h-12 rounded-xl bg-sl-gold-400/10 flex items-center justify-center text-sl-gold-400 shrink-0">
              <Coins className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#9B9AAD] uppercase tracking-wider font-bold">Capital Pipeline</p>
              <p className="text-2xl font-bold text-sl-gold-400 mt-1">
                {stats ? `$${(stats.totalValueUsd / 1000000).toFixed(2)}M` : 'Loading...'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-[#008A51] shrink-0">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <p className="text-xs text-[#9B9AAD] uppercase tracking-wider font-bold">Guurti Oversight Status</p>
              <p className="text-2xl font-bold text-emerald-400 mt-1">Active</p>
            </div>
          </div>
        </section>

        {/* ── Real AI Automation Ingestion Workstation ─────────────────────── */}
        <section className="bg-[#0A0A0F]/80 border border-mora-green-900/30 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-sl-gold-400 to-transparent opacity-20"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
            <div>
              <h2 className="text-lg font-header font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-sl-gold-400" />
                Autonomous AI Discovery & Ingestion Pipeline
              </h2>
              <p className="text-xs text-[#9B9AAD] mt-1">Trigger n8n/Convex-backed multi-agent ingestion pipeline to scan, fact-check, and audit global funding avenues.</p>
            </div>
            
            <button 
              onClick={triggerAIWorkflow}
              disabled={isAutomating}
              className="bg-mora-green-600 hover:bg-mora-green-500 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2.5 transition-all active:scale-95 disabled:opacity-30 self-stretch lg:self-auto justify-center"
            >
              {isAutomating ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Ingestion Sequence Executing...</>
              ) : (
                <><Play className="w-4 h-4 fill-current" /> Run Ingestion & Fact-Check Pipeline</>
              )}
            </button>
          </div>

          <div className="bg-black border border-white/5 p-5 rounded-xl font-mono text-[11px] leading-relaxed text-[#9B9AAD] min-h-[160px] max-h-60 overflow-y-auto flex flex-col justify-end">
            {logs.length > 0 ? (
              logs.map((log, idx) => (
                <div key={idx} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                  <span className="text-[#5A5870] font-bold">[{new Date().toLocaleTimeString()}]</span>{' '}
                  <span className={log.includes('[SUCCESS]') ? 'text-mora-green-400 font-bold' : log.includes('[FACT-CHECK]') ? 'text-sl-gold-400' : 'text-[#F0EEE8]'}>
                    {log}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-[#5A5870] italic flex flex-col items-center justify-center py-6 h-full gap-2 font-sans text-sm">
                <Terminal className="w-8 h-8 opacity-20 text-mora-green-400" />
                <p>Click "Run Ingestion & Fact-Check Pipeline" to trigger active automation.</p>
              </div>
            )}
            {isAutomating && (
              <div className="w-4 h-4 border-2 border-sl-gold-400 border-t-transparent rounded-full animate-spin mt-2 shrink-0 self-start"></div>
            )}
          </div>
        </section>

        {/* ── 8 AI-POS Agent Cards ──────────────────────────── */}
        <section>
          <SectionLabel color="mora" label="AI Command Panel — 8 Autonomous Agents Active" />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {AIPOS_AGENTS.map((agent) => {
              const c = COLOR_VARIANTS[agent.color] || COLOR_VARIANTS.emerald;
              const Icon = agent.icon;
              return (
                <Link
                  key={agent.id}
                  href={agent.href}
                  className={`group relative flex flex-col bg-[#0A0A0F] border rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl ${c.card}`}
                >
                  {/* Status badge */}
                  <div className={`absolute top-4 right-4 flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded-full border ${c.badge} border-current/20`}>
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${c.dot}`} />
                    {agent.status}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-[#13131E] border border-[#181828] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-6 h-6 ${c.icon}`} />
                  </div>

                  <h3 className="text-lg font-header font-bold text-white mb-2">{agent.title}</h3>
                  <p className="text-[#9B9AAD] text-sm leading-relaxed mb-4 flex-1">{agent.description}</p>

                  <div className="space-y-2 border-t border-[#181828] pt-4">
                    <div className="flex items-start gap-2 text-xs">
                      <Network className="w-3 h-3 text-[#5A5870] mt-0.5 shrink-0" />
                      <span className="text-[#9B9AAD]"><span className="text-[#F0EEE8] font-medium">Capabilities:</span> {agent.capability}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                      <Database className="w-3 h-3 text-[#5A5870] mt-0.5 shrink-0" />
                      <span className="text-[#9B9AAD]"><span className="text-[#F0EEE8] font-medium">Knowledge:</span> {agent.knowledge}</span>
                    </div>
                  </div>

                  <div className={`mt-4 flex items-center gap-1 text-sm font-bold ${c.icon} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    Launch Agent <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── System Architecture Diagram ─────────────────────── */}
        <section>
          <SectionLabel color="gold" label="AI-POS Architecture" />
          <div className="bg-[#0A0A0F] border border-[#181828] rounded-2xl p-8">
            <div className="flex flex-col items-center gap-4">
              {/* Orchestrator */}
              <div className="flex items-center gap-3 px-8 py-4 bg-mora-green-900/30 border border-mora-green-500/50 rounded-2xl shadow-[0_0_30px_rgba(27,94,32,0.15)]">
                <Cpu className="w-6 h-6 text-mora-green-400" />
                <div>
                  <p className="font-bold text-mora-green-300">Command Center Engine</p>
                  <p className="text-xs text-mora-green-500">Next.js Middleware + Convex Triggers · Routes all tasks, approvals & priorities</p>
                </div>
              </div>
              {/* Connector line */}
              <div className="w-px h-8 bg-gradient-to-b from-mora-green-500/50 to-transparent" />
              {/* Memory Layer */}
              <div className="flex items-center gap-3 px-6 py-3 bg-[#13131E] border border-[#181828] rounded-xl">
                <Database className="w-5 h-5 text-sl-gold-400" />
                <div>
                  <p className="font-bold text-[#F0EEE8] text-sm">Institutional Memory (SDLA)</p>
                  <p className="text-xs text-[#5A5870]">Convex Schema · Canonical truth, diplomatic positions, grant history</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Human Approval Matrix ──────────────────────────── */}
        <section>
          <SectionLabel color="amber" label="Human Approval Matrix — Communication Chain of Command" />
          <div className="bg-[#0A0A0F] border border-[#181828] rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[#181828] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <p className="text-sm text-[#9B9AAD]">Every external output must pass the approval chain below before transmission.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#181828] text-[#5A5870] text-xs uppercase tracking-wider">
                    <th className="text-left px-6 py-3">Communication Type</th>
                    <th className="text-left px-6 py-3">Required Approver</th>
                    <th className="text-left px-6 py-3">Risk Level</th>
                    <th className="text-left px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {APPROVAL_MATRIX.map((row, i) => (
                    <tr key={i} className="border-b border-[#181828]/50 last:border-0 hover:bg-[#13131E] transition-colors">
                      <td className="px-6 py-4 font-bold text-[#F0EEE8]">{row.type}</td>
                      <td className="px-6 py-4 text-[#9B9AAD]">{row.approver}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold border ${RISK_COLORS[row.risk]}`}>
                          {row.risk}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-xs text-mora-green-400 hover:text-mora-green-300 font-bold transition-colors">
                          Review Draft →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ color, label }: { color: string; label: string }) {
  const lineColors: Record<string, string> = {
    mora: 'bg-mora-green-500', gold: 'bg-sl-gold-400', amber: 'bg-amber-500',
    emerald: 'bg-emerald-500',
  };
  return (
    <h2 className="text-xl font-header font-bold mb-6 flex items-center gap-3">
      <span className={`w-1.5 h-7 rounded-full ${lineColors[color] ?? 'bg-mora-green-500'}`} />
      {label}
    </h2>
  );
}
