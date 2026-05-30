import React from "react";
import { BookOpen, Mic, PlayCircle, History, ArrowLeft, Volume2, Star } from "lucide-react";
import Link from "next/link";

export default function HeritageTrack() {
  const archives = [
    {
      id: 1,
      title: "The Borama Conference (1993)",
      speaker: "Sheikh Ibrahim Sheikh Madar",
      date: "May 1993",
      duration: "42:15",
      type: "audio"
    },
    {
      id: 2,
      title: "Establishing the Upper House",
      speaker: "Haji Abdi Warabe",
      date: "August 1997",
      duration: "1:15:30",
      type: "video"
    },
    {
      id: 3,
      title: "Conflict Resolution in Sanaag",
      speaker: "Sultan Said Sultan Abdisalam",
      date: "October 1994",
      duration: "55:00",
      type: "audio"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <Link href="/academy" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors text-sm font-medium">
        <ArrowLeft size={16} />
        Back to Academy Hub
      </Link>

      {/* Header */}
      <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-emerald-500/20 p-8 md:p-12">
        <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
            <History size={12} />
            Heritage Archive
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Voices of Wisdom:<br/>
            <span className="text-emerald-400">The Somaliland Peace Process</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            A digitized, curated archive of the historical speeches, negotiations, and peace-building strategies employed by the founding elders of the Guurti.
          </p>
        </div>
      </div>

      {/* Featured Player */}
      <div className="bg-gradient-to-vr from-[#0A0A0A] to-[#050505] border border-zinc-800 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
        <div className="w-full md:w-1/3 aspect-square bg-emerald-500/5 rounded-2xl border border-emerald-500/20 flex items-center justify-center relative group cursor-pointer overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
           <div className="relative z-10 w-20 h-20 bg-emerald-500 text-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-emerald-500/20">
             <PlayCircle size={40} className="ml-1" />
           </div>
        </div>
        
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
            <Star size={12} fill="currentColor"/> Now Playing
          </div>
          <div>
            <h2 className="text-3xl font-black text-white mb-2">The Ogo Conference Debates</h2>
            <p className="text-zinc-400 text-lg">Reconciling the Northern clans prior to the Borama grand conference.</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-zinc-500">
              <span>12:45</span>
              <span>1:30:00</span>
            </div>
            <div className="w-full bg-zinc-800 h-2 rounded-full cursor-pointer">
              <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '15%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Digitzed Archives List */}
      <div className="space-y-6 pt-8">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Volume2 className="text-emerald-400" />
          The National Audio Archive
        </h3>
        
        <div className="grid grid-cols-1 gap-4">
          {archives.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-5 bg-[#0A0A0A] border border-zinc-800 hover:border-emerald-500/30 rounded-2xl transition-all group">
               <div className="flex items-center gap-5">
                 <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                   <PlayCircle size={20} />
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-lg leading-snug">{item.title}</h4>
                   <p className="text-zinc-500 text-sm">{item.speaker} • {item.date}</p>
                 </div>
               </div>
               
               <div className="text-sm font-mono text-zinc-600 bg-zinc-900 px-3 py-1 rounded-lg">
                 {item.duration}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
