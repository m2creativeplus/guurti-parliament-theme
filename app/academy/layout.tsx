import { Shield, Book, Award, Bell, Globe } from "lucide-react";
import Link from "next/link";

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#D4AF37]/30">
      {/* Academy Sidebar / Top Nav */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-[#D4AF37]/20 z-50 px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#AA8B2E] rounded-lg flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
            <Shield className="text-black w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-[#D4AF37]">GUURTI ACADEMY</h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]/60 font-medium">Sovereign Excellence</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/academy" icon={<Shield size={18} />} label="Manifesto" active />
          <NavLink href="/academy/courses" icon={<Book size={18} />} label="Courses" />
          <NavLink href="/academy/badges" icon={<Award size={18} />} label="Sovereign Badges" />
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="hidden lg:flex items-center gap-2 group relative cursor-pointer mr-2">
            <Globe size={18} className="text-[#D4AF37]/80" />
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">English</span>
            <div className="absolute top-full right-0 mt-2 w-32 bg-[#0A0A0A] border border-zinc-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="p-2 space-y-1">
                <button className="w-full text-left px-3 py-2 text-sm text-[--sl-gold] bg-[#D4AF37]/10 rounded-lg font-medium">English</button>
                <button className="w-full text-left px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Soomaali</button>
                <button className="w-full text-left px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-arabic" dir="rtl">العربية</button>
              </div>
            </div>
          </div>

          <button className="p-2 hover:bg-white/5 rounded-full transition-colors relative">
            <Bell size={20} className="text-[#D4AF37]/80" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#D4AF37] rounded-full border border-black animate-pulse" />
          </button>
          <div className="h-8 w-[1px] bg-white/10 mx-2" />
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold">M. Awaleh</p>
              <p className="text-[10px] text-[#D4AF37]/60 uppercase tracking-wider">Honorary Scout</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-white/5 overflow-hidden flex items-center justify-center font-bold text-[#D4AF37]">
              MA
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}

function NavLink({ href, icon, label, active = false }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-2 text-sm font-medium transition-all hover:text-[#D4AF37] ${active ? 'text-[#D4AF37]' : 'text-zinc-400'}`}
    >
      {icon}
      {label}
    </Link>
  );
}
