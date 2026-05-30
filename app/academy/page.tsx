import React from "react";
import { ArrowRight, BookOpen, Globe, Gavel, Play, Star } from "lucide-react";
import Link from "next/link";
import { AcademyTrackCard } from "@/components/AcademyTrackCard";

export default function AcademyLanding() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/10 bg-[#0A0A0A] p-12 lg:p-16">
        <div className="absolute top-0 right-0 -m-20 w-80 h-80 bg-[#D4AF37]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 -m-20 w-60 h-60 bg-blue-500/5 blur-[100px] rounded-full" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-6">
            <Star size={12} fill="currentColor" />
            Bicameral Intelligence
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            The Sovereign <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F1D279] to-[#D4AF37]">Academy</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-10">
            Empowering the Republic of Somaliland's House of Elders with advanced legislative mastery, strategic diplomacy, and parliamentary heritage.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-[#D4AF37] hover:bg-[#AA8B2E] text-black font-bold rounded-xl transition-all shadow-xl shadow-[#D4AF37]/10 flex items-center gap-2 group">
              Begin Training
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-2">
              <Play size={18} fill="currentColor" />
              Watch Manifesto
            </button>
          </div>
        </div>
      </section>

      {/* Main Tracks */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Training Tracks</h2>
            <p className="text-zinc-500 text-sm mt-1">Select a core competency to refine your legislative impact.</p>
          </div>
          <Link href="/academy/courses" className="text-[#D4AF37] text-sm font-semibold hover:underline">View all tracks →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AcademyTrackCard 
            title="Legislative Excellence"
            desc="Constitutional mandates, parliamentary procedure, and bill drafting frameworks."
            icon={<Gavel size={24} />}
            stats="12 Modules • Certifiable"
            progress={15}
            color="yellow"
            href="/academy/courses/legislative"
          />
          <AcademyTrackCard 
            title="EPD Mastery"
            desc="External Partnerships Department strategy, diplomatic protocol, and tier-1 outreach."
            icon={<Globe size={24} />}
            stats="8 Modules • Interactive"
            progress={0}
            color="blue"
            href="/academy/courses/epd"
          />
          <AcademyTrackCard 
            title="Sovereign History"
            desc="The 'Voices of Wisdom' archive. Understanding the traditional peace-building of the Guurti."
            icon={<BookOpen size={24} />}
            stats="24 Series • Heritage"
            progress={45}
            color="emerald"
            href="/academy/courses/heritage"
          />
        </div>
      </section>

      {/* Latest Wisdom Bits */}
      <section className="bg-gradient-to-br from-[#0A0A0A] to-[#0A0A02] rounded-3xl border border-[#D4AF37]/5 p-8">
        <div className="flex items-center gap-4 mb-8">
          <Star className="text-[#D4AF37]" size={20} fill="currentColor" />
          <h3 className="text-xl font-bold uppercase tracking-tight text-[#D4AF37]">The Council's Digest</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#D4AF37]/20 transition-all cursor-pointer group">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mb-2 block">New Insight</span>
            <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">Refining Regional Security Protocols</h4>
            <p className="text-sm text-zinc-400">Analysis of the Guurti's role in the 2026 East African Stability Charter.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#D4AF37]/20 transition-all cursor-pointer group">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mb-2 block">Heritage Spotlight</span>
            <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">The Ogo Conference Records</h4>
            <p className="text-sm text-zinc-400">Digitized recordings of the historic peace negotiations between traditional elders.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
