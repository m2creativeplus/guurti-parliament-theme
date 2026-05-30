'use client';

import Link from 'next/link';
import { ArrowLeft, Globe, FileText, Send, Building2, CheckCircle2, Copy } from 'lucide-react';
import { useState } from 'react';

export default function FriendshipGroupsDashboard() {
  const [draftResult, setDraftResult] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (target: string, type: string, points: string[]) => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/diplomacy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          target_parliament: target,
          document_type: type,
          key_points: points
        })
      });
      const res = await response.json();
      setDraftResult(res.draft_content);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#F0EEE8] font-body p-8 selection:bg-mora-green-500/30">
      {/* Header */}
      <header className="mb-12 border-b border-mora-green-900/45 pb-8 flex items-center gap-6">
        <Link href="/epd" className="p-2.5 bg-zinc-900/60 border border-white/5 hover:border-mora-green-500/40 rounded-xl transition-all">
          <ArrowLeft className="w-5 h-5 text-mora-green-400" />
        </Link>
        <div>
          <h1 className="text-3xl font-header font-bold text-white tracking-widest uppercase flex items-center gap-3">
            AI-POS <span className="text-sl-gold-400">•</span> Diplomatic Attaché
          </h1>
          <p className="text-[#9B9AAD] text-sm mt-1 flex items-center gap-2">
            <Globe className="w-4 h-4 text-mora-green-400 animate-spin" style={{ animationDuration: '10s' }} />
            Bilateral Parliamentary Relations & Sovereignty Consolidation
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Active Groups */}
        <div className="space-y-6">
          <h2 className="text-xl font-header font-bold text-white flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 rounded-full bg-sl-gold-400" />
            Target Parliaments
          </h2>

          {/* Knesset Card */}
          <div className="bg-zinc-900/50 border border-white/5 hover:border-mora-green-500/30 p-6 rounded-2xl transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-zinc-950 rounded-xl border border-white/5 group-hover:border-mora-green-500/30 transition-all shrink-0">
                  <Building2 className="w-6 h-6 text-sl-gold-400" />
                </div>
                <div>
                  <h3 className="text-lg font-header font-bold text-white">The Knesset (Israel)</h3>
                  <span className="text-xs text-mora-green-400 flex items-center gap-1.5 mt-1 font-medium bg-mora-green-500/5 px-2 py-0.5 rounded border border-mora-green-500/10">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Recognition Consolidation Phase
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[#9B9AAD] text-sm leading-relaxed mb-6">
              Strategic priority following December 2025 recognition milestones. Oversight focusses on bilateral cooperation in cybersecurity, agritech, and GovTech institutional integrations.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => handleGenerate("Knesset", "Icebreaker Letter", ["Digital transformation of parliament (GovTech)", "Cybersecurity cooperation", "Agritech & water management"])}
                disabled={isGenerating}
                className="flex items-center gap-2 bg-sl-gold-400 hover:bg-sl-gold-500 text-[#050507] px-4 py-2.5 rounded-lg font-bold transition-all text-xs shadow-lg shadow-sl-gold-400/10 disabled:opacity-30"
              >
                <FileText className="w-4 h-4" /> Draft Bilateral Icebreaker
              </button>
            </div>
          </div>

          {/* UK Parliament Card */}
          <div className="bg-zinc-900/50 border border-white/5 hover:border-mora-green-500/30 p-6 rounded-2xl transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-zinc-950 rounded-xl border border-white/5 group-hover:border-mora-green-500/30 transition-all shrink-0">
                  <Building2 className="w-6 h-6 text-sl-gold-400" />
                </div>
                <div>
                  <h3 className="text-lg font-header font-bold text-white">UK Parliament</h3>
                  <span className="text-xs text-amber-400 flex items-center gap-1.5 mt-1 font-medium bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">
                    <Globe className="w-3.5 h-3.5 animate-pulse" /> APPG Engagement Phase
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[#9B9AAD] text-sm leading-relaxed mb-6">
              Activating the All-Party Parliamentary Group (APPG) for Somaliland at Westminster to initiate formal debate sequences regarding security partnerships and trade sovereignty.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => handleGenerate("UK Parliament", "MoU", ["APPG expansion", "Democratic institution building", "Diaspora engagement"])}
                disabled={isGenerating}
                className="flex items-center gap-2 bg-zinc-900 border border-white/5 hover:border-mora-green-500/30 text-white px-4 py-2.5 rounded-lg font-bold transition-all text-xs disabled:opacity-30"
              >
                <FileText className="w-4 h-4 text-mora-green-400" /> Draft APPG Memorandum
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: AI Drafting Terminal */}
        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden flex flex-col h-[600px] sticky top-8">
          <div className="bg-zinc-950 p-4 border-b border-white/5 flex justify-between items-center shrink-0">
            <h3 className="font-header font-bold text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-mora-green-500 animate-pulse"></span>
              AI Diplomatic Drafting Terminal
            </h3>
            {draftResult && (
              <button 
                onClick={() => navigator.clipboard.writeText(draftResult)}
                className="text-[#9B9AAD] hover:text-white transition-colors"
                title="Copy to Clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="p-6 flex-1 overflow-y-auto font-mono text-xs leading-relaxed text-[#9B9AAD] whitespace-pre-wrap">
            {isGenerating ? (
              <div className="flex items-center gap-3 text-mora-green-400 font-sans font-medium text-sm">
                <div className="w-4 h-4 border-2 border-mora-green-500 border-t-transparent rounded-full animate-spin"></div>
                Formulating diplomatic draft based on EPD Master Suite guidelines...
              </div>
            ) : draftResult ? (
              <div className="bg-zinc-950 p-6 rounded-xl border border-white/5 text-[#F0EEE8] font-mono leading-relaxed leading-7">
                {draftResult}
              </div>
            ) : (
              <div className="text-[#5A5870] flex flex-col items-center justify-center h-full gap-4 text-center">
                <Send className="w-12 h-12 opacity-25 text-mora-green-400" />
                <p className="font-sans text-sm">Select a target parliament to generate sovereign diplomatic correspondence.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
