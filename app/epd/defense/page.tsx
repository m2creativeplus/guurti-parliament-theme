'use client';

import Link from 'next/link';
import { ArrowLeft, ShieldAlert, Crosshair, Database, Server, Terminal, Copy, Send } from 'lucide-react';
import { useState } from 'react';

export default function DefenseWarRoom() {
  const [claim, setClaim] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!claim) return;
    
    setIsProcessing(true);
    setResult(null);
    try {
      const response = await fetch('/api/defense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          disinformation_claim: claim
        })
      });
      const res = await response.json();
      setResult(res.defense_package);
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
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
            AI-POS <span className="text-sl-gold-400">•</span> Research Unit
          </h1>
          <p className="text-[#9B9AAD] text-sm mt-1 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-mora-green-400 animate-pulse" />
            Digital Diplomacy War Room · SDLA Narrative Defense Protocol (Active Vector DB)
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Input Terminal */}
        <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 shadow-[0_0_20px_rgba(56,142,60,0.02)]">
          <div className="flex items-center gap-2.5 mb-6 border-b border-white/5 pb-4">
            <Terminal className="w-5 h-5 text-sl-gold-400" />
            <h2 className="text-lg font-header font-bold text-white">Threat Ingestion Node</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#9B9AAD] text-xs font-bold uppercase tracking-wider mb-2">Target Disinformation / Hostile Claims:</label>
              <textarea 
                value={claim}
                onChange={(e) => setClaim(e.target.value)}
                placeholder="Paste hostile diplomatic narratives or external regional claims here..."
                className="w-full bg-zinc-950 border border-white/5 rounded-xl p-4 text-[#F0EEE8] font-mono text-xs leading-relaxed focus:outline-none focus:border-mora-green-500/50 h-40 resize-none placeholder-[#5A5870]"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={isProcessing || !claim}
              className="w-full bg-sl-gold-400 hover:bg-sl-gold-500 text-[#050507] py-4 rounded-xl font-bold flex justify-center items-center gap-2.5 transition-colors disabled:opacity-30 active:scale-95 shadow-lg shadow-sl-gold-400/10"
            >
              {isProcessing ? (
                <><div className="w-4 h-4 border-2 border-[#050507] border-t-transparent rounded-full animate-spin"></div> Vectorizing Claim & Querying DB...</>
              ) : (
                <><Crosshair className="w-4 h-4" /> Execute SDLA Precedent Match</>
              )}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] text-[#5A5870] font-mono uppercase tracking-wider">
             <div className="space-y-1">
               <p>System Status: <span className="text-mora-green-400">Online</span></p>
               <p>Vector Storage: <span className="text-sl-gold-400">LanceDB Connected</span></p>
             </div>
             <div className="text-right">
               <p>Corpus: 1991-2026 Archive</p>
               <p>Total Nodes: 4,192 Embeddings</p>
             </div>
          </div>
        </div>

        {/* Right: Output Result */}
        <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden min-h-[400px]">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-mora-green-500 to-transparent opacity-30 animate-pulse"></div>
          
          <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
            <div className="flex items-center gap-2.5">
              <Server className="w-5 h-5 text-sl-gold-400" />
              <h2 className="text-lg font-header font-bold text-white">Official Rebuke Payload</h2>
            </div>
            {result && (
              <button 
                onClick={() => navigator.clipboard.writeText(result.generated_rebuke)}
                className="text-[#9B9AAD] hover:text-white transition-colors"
                title="Copy Response to Clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>
            )}
          </div>

          {!result && !isProcessing && (
            <div className="h-64 flex flex-col items-center justify-center text-[#5A5870] gap-3">
              <ShieldAlert className="w-16 h-16 mb-2 opacity-25 text-mora-green-400" />
              <p className="font-sans text-sm">Awaiting Ingestion Threat Stream...</p>
            </div>
          )}

          {isProcessing && (
            <div className="h-64 flex flex-col gap-4 text-[#9B9AAD] font-mono text-xs justify-center pl-4 border-l border-mora-green-900/30">
              <p className="animate-pulse">{'>'} Parsing claim syntax & morphology...</p>
              <p className="animate-pulse">{'>'} Executing cosine similarity search (k=5)...</p>
              <p className="animate-pulse">{'>'} Resolving historical constitutional precedents...</p>
              <p className="animate-pulse text-sl-gold-400 font-bold">{'>'} Generating official diplomatic rebuttal...</p>
            </div>
          )}

          {result && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="bg-zinc-950 p-4 rounded-xl border border-white/5 font-mono text-xs">
                <h4 className="text-sl-gold-400 font-bold mb-2 uppercase tracking-wider text-[10px]">Retrieved SDLA Constitutional Precedent:</h4>
                <p className="text-[#9B9AAD] leading-relaxed">{result.historical_context_retrieved}</p>
              </div>

              <div className="bg-mora-green-950/10 p-5 rounded-xl border border-mora-green-500/20 shadow-[0_0_20px_rgba(56,142,60,0.04)]">
                <h4 className="text-mora-green-400 text-xs font-bold mb-3 flex items-center gap-2 tracking-wider">
                  <Send className="w-3.5 h-3.5" />
                  APPROVED REBUTTAL STATEMENT DRAFT:
                </h4>
                <div className="text-[#F0EEE8] font-mono text-xs leading-relaxed leading-6 whitespace-pre-wrap">
                  {result.generated_rebuke}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
