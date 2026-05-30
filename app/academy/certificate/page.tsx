"use client";

import React from "react";
import { Download, Award, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CertificateContent() {
  const searchParams = useSearchParams();
  const score = searchParams.get("score") || "0";
  const total = searchParams.get("total") || "0";
  const date = new Date().toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6 animate-in fade-in duration-1000">
      
      <div className="w-full max-w-5xl mb-8 flex justify-between items-center print:hidden">
        <Link href="/academy/quiz" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[--sl-gold] transition-colors text-sm font-medium">
          <ArrowLeft size={16} />
          Back to Assessment
        </Link>
        <button 
          onClick={() => window.print()}
          className="px-6 py-3 bg-[--sl-gold] hover:bg-[#AA8B2E] text-black font-bold rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-[--sl-gold]/20"
        >
          <Download size={18} />
          Print / Save Document
        </button>
      </div>

      {/* The Certificate - Printable Area */}
      <div id="certificate-print" className="w-full max-w-5xl bg-white text-black p-2 md:p-8 rounded-sm shadow-2xl relative print:shadow-none print:p-0">
        
        {/* Inner Gold Border */}
        <div className="w-full h-full border-[12px] border-[#D4AF37] p-8 md:p-16 relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
          
          {/* Corner Ornaments */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#006233]" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#006233]" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#D21034]" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#D21034]" />

          {/* Header */}
          <div className="text-center mb-16 relative z-10">
             <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-[#D4AF37] mb-8 bg-white shadow-lg">
               <Shield size={48} className="text-[#006233]" />
             </div>
             <h1 className="text-2xl md:text-3xl font-black uppercase tracking-[0.3em] text-[#006233] mb-2 font-serif">
               Republic of Somaliland
             </h1>
             <h2 className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-[#D21034] mb-8 font-serif">
               House of Elders (Guurti)
             </h2>
             <div className="flex items-center justify-center gap-4 mb-8">
               <div className="h-[2px] w-16 bg-[#D4AF37]" />
               <Award size={24} className="text-[#D4AF37]" />
               <div className="h-[2px] w-16 bg-[#D4AF37]" />
             </div>
             <h3 className="text-4xl md:text-6xl font-black text-black tracking-tight mb-4 font-serif">
               Certificate of Legislative Excellence
             </h3>
          </div>

          {/* Body */}
          <div className="text-center max-w-3xl mx-auto space-y-8 relative z-10">
            <p className="text-xl italic text-gray-600 font-serif">This is to proudly certify that</p>
            
            <div className="py-4 border-b-2 border-black inline-block px-12">
              <span className="text-4xl md:text-5xl font-black text-black">Mahmoud Awaleh</span>
            </div>

            <p className="text-xl leading-relaxed text-gray-800 font-serif px-8">
              Has successfully completed the comprehensive assessment in <strong className="text-black">Constitutional Mandates & Diplomatic Protocol</strong> with a mastery score of <strong className="text-[#AA8B2E]">{score}/{total}</strong>, demonstrating a sovereign commitment to the democratic advancement of the Republic of Somaliland.
            </p>
          </div>

          {/* Signatures */}
          <div className="mt-24 flex justify-between items-end px-12 relative z-10">
            <div className="text-center">
              <div className="font-signature text-4xl text-gray-800 mb-2">Saleban M. Adan</div>
              <div className="w-48 h-[1px] bg-black mb-2" />
              <p className="text-sm font-bold uppercase tracking-widest text-[#006233]">Chairman of the Guurti</p>
            </div>
            
            {/* National Seal Placeholder */}
            <div className="w-32 h-32 rounded-full border-4 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] bg-white opacity-90 shadow-2xl rotate-12">
              <div className="text-center">
                <Shield size={32} className="mx-auto mb-1" />
                <span className="text-[8px] font-black uppercase tracking-widest block">Official Seal</span>
              </div>
            </div>

            <div className="text-center">
              <div className="font-signature text-3xl text-gray-800 mb-2">{date}</div>
              <div className="w-48 h-[1px] bg-black mb-2" />
              <p className="text-sm font-bold uppercase tracking-widest text-[#D21034]">Date of Issuance</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default function CertificateGenerator() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[--sl-gold]">Loading Sovereign Document...</div>}>
      <CertificateContent />
    </Suspense>
  );
}
