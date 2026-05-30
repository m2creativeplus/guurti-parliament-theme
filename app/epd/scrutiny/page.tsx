'use client';

import Link from 'next/link';
import { ArrowLeft, Scale, UploadCloud, AlertTriangle, CheckCircle, FileSearch, Loader2, ShieldAlert } from 'lucide-react';
import { useState } from 'react';

export default function ScrutinyDashboard() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleSimulateUpload = async () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);
    
    // Simulate parsing delay
    setTimeout(async () => {
      try {
        const response = await fetch('/api/scrutiny', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            agreement_title: "Berbera Corridor Logistics Expansion Agreement",
            investment_value: "$15.4M",
            investor_origin: "Foreign"
          })
        });
        const res = await response.json();
        setAnalysisResult(res.analysis);
      } catch (error) {
        console.error(error);
      } finally {
        setIsAnalyzing(false);
      }
    }, 2000);
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
            AI-POS <span className="text-sl-gold-400">•</span> Compliance Checker
          </h1>
          <p className="text-[#9B9AAD] text-sm mt-1 flex items-center gap-2">
            <Scale className="w-4 h-4 text-sl-gold-400" />
            Ex-Ante Scrutiny Gatekeeper · Foreign Treaty & Investment Oversight
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Upload Interface */}
        <div className="bg-zinc-900/50 border border-white/5 hover:border-mora-green-500/30 p-8 rounded-2xl flex flex-col items-center justify-center min-h-[400px] transition-all group">
          <div className="w-20 h-20 bg-mora-green-500/10 rounded-full flex items-center justify-center mb-6 border border-mora-green-500/20 group-hover:border-mora-green-500/50 group-hover:scale-105 transition-all">
            <UploadCloud className="w-10 h-10 text-mora-green-400" />
          </div>
          <h2 className="text-xl font-header font-bold mb-2 text-center text-white">Upload Strategic Agreement</h2>
          <p className="text-[#9B9AAD] text-sm text-center mb-8 max-w-sm">
            Securely upload treaty drafts, international bilateral agreements, or procurement portfolios (PDF/DOCX) for immediate ex-ante sovereignty checks.
          </p>
          <div className="flex gap-4 w-full max-w-md">
            <button 
              onClick={handleSimulateUpload}
              disabled={isAnalyzing}
              className="flex-1 bg-sl-gold-400 hover:bg-sl-gold-500 text-[#050507] py-4 rounded-xl font-bold flex justify-center items-center gap-2.5 transition-all active:scale-95 disabled:opacity-30"
            >
              {isAnalyzing ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Performing Ex-Ante Checks...</>
              ) : (
                <><FileSearch className="w-5 h-5" /> Analyze Example Portfolio ($15.4M)</>
              )}
            </button>
          </div>
        </div>

        {/* Right: Analysis Results */}
        <div className={`bg-zinc-900/50 border p-8 rounded-2xl transition-all duration-500 min-h-[400px] ${
          analysisResult 
            ? (analysisResult.risk_level === 'High' 
                ? 'border-rose-500/40 shadow-[0_0_25px_rgba(244,63,94,0.06)] bg-rose-950/5' 
                : 'border-mora-green-500/40 shadow-[0_0_25px_rgba(56,142,60,0.06)] bg-mora-green-950/5') 
            : 'border-white/5'
        }`}>
          <h2 className="text-xl font-header font-bold mb-6 flex items-center gap-3 text-white">
            <span className="w-1.5 h-6 rounded-full bg-sl-gold-400" />
            AI-POS Sovereignty Risk Assessment
          </h2>
          
          {!analysisResult && !isAnalyzing && (
            <div className="h-64 flex flex-col items-center justify-center text-[#5A5870] pb-12 gap-3">
              <ShieldAlert className="w-16 h-16 mb-2 opacity-25 text-mora-green-400" />
              <p className="font-sans text-sm">Awaiting document ingest...</p>
            </div>
          )}

          {isAnalyzing && (
            <div className="h-64 flex flex-col items-center justify-center text-sl-gold-400 pb-12 gap-4">
              <div className="w-12 h-12 border-4 border-sl-gold-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="animate-pulse font-mono text-xs tracking-wider uppercase">Cross-referencing Somaliland Constitution (Articles 61 & 12)...</p>
            </div>
          )}

          {analysisResult && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between bg-zinc-950 p-4 rounded-xl border border-white/5">
                <span className="text-[#9B9AAD] text-sm font-bold uppercase tracking-wider">Overall Risk Score</span>
                <div className={`flex items-center gap-2 font-bold text-xs px-3.5 py-1.5 rounded-full border ${
                  analysisResult.risk_level === 'High' 
                    ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' 
                    : 'bg-mora-green-500/10 border-mora-green-500/20 text-mora-green-400'
                }`}>
                  {analysisResult.risk_level === 'High' ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                  {analysisResult.risk_level.toUpperCase()} RISK
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#5A5870] mb-2 uppercase tracking-wider">Executive Summary</h4>
                <p className="text-[#F0EEE8] text-sm leading-relaxed bg-zinc-950/60 border border-white/5 p-4 rounded-xl">
                  {analysisResult.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-rose-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Flagged Constitutional Concerns
                </h4>
                <ul className="space-y-3">
                  {analysisResult.flagged_clauses.map((clause: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-[#F0EEE8] text-sm bg-rose-500/5 p-4 rounded-xl border border-rose-500/10 font-sans leading-relaxed">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-rose-500 shrink-0"></div>
                      {clause}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/5 mt-8">
                <div className="bg-sl-gold-400/5 border border-sl-gold-400/20 text-sl-gold-400 p-4 rounded-xl text-sm font-bold flex items-center justify-between gap-4">
                  <span className="uppercase tracking-wider text-xs">Action Directive:</span>
                  <span className="text-[#F0EEE8] font-mono text-xs text-right bg-zinc-950 border border-white/5 px-3 py-1.5 rounded-lg">{analysisResult.recommendation}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
