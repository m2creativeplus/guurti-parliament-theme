import React from "react";
import { Gavel, CheckCircle, Lock, Play, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AcademyTrackCard } from "@/components/AcademyTrackCard";

export default function LegislativeTrack() {
  const modules = [
    {
      id: 1,
      title: "Constitutional Mandates 101",
      duration: "45 mins",
      status: "completed",
      type: "video",
    },
    {
      id: 2,
      title: "The Bicameral Process",
      duration: "1h 15m",
      status: "in-progress",
      type: "video",
    },
    {
      id: 3,
      title: "Bill Drafting Frameworks",
      duration: "2h 30m",
      status: "locked",
      type: "document",
    },
    {
      id: 4,
      title: "Mediation & Traditional Dispute Resolution",
      duration: "3h 0m",
      status: "locked",
      type: "interactive",
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <Link href="/academy" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[--sl-gold] transition-colors text-sm font-medium">
        <ArrowLeft size={16} />
        Back to Academy Hub
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[--sl-gold]/10 border border-[--sl-gold]/20 text-[--sl-gold] text-xs font-bold tracking-widest uppercase mb-4">
            <Gavel size={12} fill="currentColor" />
            Core Track
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Legislative Excellence</h1>
          <p className="text-lg text-zinc-400 leading-relaxed mb-6 max-w-2xl">
            Master the constitutional mandates, parliamentary procedures, and the sophisticated frameworks required to draft and review national legislation effectively.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[--sl-gold]" />
              15% Completed
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <FileText size={16} />
              4 Modules
            </div>
          </div>
        </div>

        {/* Progress Card */}
        <div className="w-full md:w-80 bg-[#0A0A0A] border border-[--sl-gold]/20 rounded-2xl p-6 shadow-2xl shadow-[--sl-gold]/5">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Track Progress</h3>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-black text-[--sl-gold]">15</span>
            <span className="text-zinc-500 font-bold mb-1">%</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-2 mb-6">
            <div className="bg-gradient-to-r from-[#AA8B2E] to-[--sl-gold] h-2 rounded-full" style={{ width: '15%' }} />
          </div>
          <button className="w-full py-3 bg-[--sl-gold] hover:bg-[#AA8B2E] text-black font-bold flex justify-center items-center gap-2 rounded-xl transition-all shadow-lg shadow-[--sl-gold]/20">
            <Play size={16} fill="currentColor" />
            Resume Module 2
          </button>
        </div>
      </div>

      {/* Module List */}
      <div className="mt-12 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
        {modules.map((mod) => (
          <div 
            key={mod.id} 
            className={`flex items-center justify-between p-6 rounded-2xl border transition-all ${
              mod.status === 'locked' 
                ? 'bg-[#050505] border-zinc-900 opacity-60' 
                : mod.status === 'in-progress'
                  ? 'bg-[#0A0A0A] border-[--sl-gold]/30 shadow-lg shadow-[--sl-gold]/5'
                  : 'bg-[#0A0A0A] border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                mod.status === 'completed' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                mod.status === 'in-progress' ? 'bg-[--sl-gold]/10 border-[--sl-gold]/30 text-[--sl-gold]' :
                'bg-zinc-900 border-zinc-800 text-zinc-500'
              }`}>
                {mod.status === 'completed' ? <CheckCircle size={20} /> :
                 mod.status === 'locked' ? <Lock size={20} /> :
                 <Play size={20} fill="currentColor" className="ml-1" />}
              </div>
              
              <div>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Module {mod.id}</p>
                <h3 className={`text-lg font-bold ${mod.status === 'locked' ? 'text-zinc-400' : 'text-white'}`}>
                  {mod.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-zinc-500">{mod.duration}</span>
              {mod.status !== 'locked' && (
                <button className="px-4 py-2 border border-zinc-700 hover:border-zinc-500 text-white text-sm font-medium rounded-lg transition-colors">
                  {mod.status === 'completed' ? 'Review' : 'Continue'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
