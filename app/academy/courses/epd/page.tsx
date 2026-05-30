import React from "react";
import { Globe, Users, ArrowRight, Download, FileText, ArrowLeft, Building2 } from "lucide-react";
import Link from "next/link";

export default function EPDTrack() {
  const partners = [
    { country: "United Kingdom", tier: "Tier 1", status: "Active Engagement", rep: "APPG Somaliland" },
    { country: "Taiwan", tier: "Tier 1", status: "Strategic Alliance", rep: "Taipei Representative Office" },
    { country: "Ethiopia", tier: "Tier 2", status: "Security/Trade", rep: "Addis Ababa Consultative" },
    { country: "UAE", tier: "Tier 2", status: "Infrastructure", rep: "DP World Focus Group" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <Link href="/academy" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors text-sm font-medium">
        <ArrowLeft size={16} />
        Back to Academy Hub
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Globe size={12} />
            Foreign Affairs Committee
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">EPD Mastery Protocol</h1>
          <p className="text-lg text-zinc-400 leading-relaxed mb-6 max-w-2xl">
            Simulate and practice tier-1 diplomatic outreach. Access standardized briefing templates, protocol guides, and interactive partner dossiers.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
              <Building2 size={18} />
              Open Partner Dossiers
            </button>
            <button className="px-6 py-3 bg-[#0A0A0A] border border-zinc-800 hover:border-blue-500/50 text-white font-bold rounded-xl transition-all flex items-center gap-2">
              <FileText size={18} />
              Template Library
            </button>
          </div>
        </div>

        {/* EPD Intel Card */}
        <div className="w-full md:w-80 bg-[#0A0A0A] border border-blue-500/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -m-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
          
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
            <Users size={16} className="text-blue-400"/>
            Active Portfolio
          </h3>
          
          <div className="space-y-4 relative z-10">
            {partners.map((partner, i) => (
              <div key={i} className="flex justify-between items-center pb-3 border-b border-zinc-800 last:border-0 last:pb-0">
                <div>
                  <p className="text-white font-bold text-sm">{partner.country}</p>
                  <p className="text-zinc-500 text-xs">{partner.rep}</p>
                </div>
                <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-md ${
                  partner.tier === 'Tier 1' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {partner.tier}
                </span>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex justify-center items-center gap-1">
            View All Intel <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Interactive Simulation Grid */}
      <h2 className="text-2xl font-bold mt-12 mb-6">Simulation Scenarios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScenarioCard 
          id="SIM-01"
          title="Drafting an Introduction Letter"
          desc="Step-by-step interactive guide on drafting a sovereign-compliant introduction explicitly to a Tier-1 partner."
          time="30 mins"
          status="Available"
        />
        <ScenarioCard 
          id="SIM-02"
          title="MoFA Coordination Protocol"
          desc="Navigating internal communication and alignment with the Ministry of Foreign Affairs prior to external dispatch."
          time="45 mins"
          status="Locked"
        />
      </div>
    </div>
  );
}

interface ScenarioCardProps {
  id: string;
  title: string;
  desc: string;
  time: string;
  status: 'Available' | 'Locked' | 'Completed';
}

function ScenarioCard({ id, title, desc, time, status }: ScenarioCardProps) {
  return (
    <div className={`p-6 rounded-2xl border transition-all ${
      status === 'Available' ? 'bg-[#0A0A0A] border-blue-500/30 hover:border-blue-500 hover:-translate-y-1 shadow-xl shadow-blue-500/5' : 'bg-[#050505] border-zinc-900 opacity-70'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase bg-blue-500/10 px-2 py-1 rounded-md">
          {id}
        </span>
        <span className="text-white text-xs font-mono bg-zinc-800 px-2 py-1 rounded-md">{time}</span>
      </div>
      <h3 className={`text-xl font-bold mb-2 ${status === 'Available' ? 'text-white' : 'text-zinc-400'}`}>{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-6">{desc}</p>
      
      <button className={`w-full py-3 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2 ${
        status === 'Available' ? 'bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white border border-blue-500/20' : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'
      }`}>
        {status === 'Available' ? 'Start Simulation' : 'Locked'}
        {status === 'Available' && <ArrowRight size={16} />}
      </button>
    </div>
  );
}
