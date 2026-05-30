import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface AcademyTrackCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  stats: string;
  progress: number;
  color: "yellow" | "blue" | "emerald";
  href: string;
}

export function AcademyTrackCard({ 
  title, 
  desc, 
  icon, 
  stats, 
  progress, 
  color,
  href 
}: AcademyTrackCardProps) {
  const colorMap = {
    yellow: 'text-[--sl-gold] border-[--sl-gold]/20 bg-[--sl-gold]/5',
    blue: 'text-blue-400 border-blue-500/20 bg-blue-500/5',
    emerald: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
  };

  return (
    <Link href={href} className="group relative bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 hover:border-[--sl-gold]/30 transition-all hover:-translate-y-1 shadow-2xl block">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${colorMap[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[--sl-gold] transition-colors">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-6">
        {desc}
      </p>
      
      <div className="space-y-3 pt-6 border-t border-zinc-800/50">
        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          <span>{stats}</span>
          <span className="text-[--sl-gold]">{progress}% Complete</span>
        </div>
        <div className="w-full bg-zinc-800/50 h-1 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#AA8B2E] to-[--sl-gold] rounded-full transition-all duration-1000" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>
    </Link>
  );
}
