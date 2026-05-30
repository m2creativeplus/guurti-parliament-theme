"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, BrainCircuit, Check, X, ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";

const QUIZ_DATA = [
  {
    question: "According to the Constitution of the Republic of Somaliland, what is the primary mandate of the House of Elders (Guurti)?",
    options: [
      "Drafting the national budget and taxation laws.",
      "Reviewing legislation passed by the House of Representatives and maintaining peace and security.",
      "Appointing the Chief Justice of the Supreme Court.",
      "Commanding the National Armed Forces during peacetime."
    ],
    correct: 1,
    explanation: "The Guurti is the upper house, responsible for reviewing laws (except financial ones) and holds a special constitutional mandate for traditional peace-building and conflict resolution."
  },
  {
    question: "When sending official diplomatic correspondence to a Tier-1 non-recognizing state partner, which protocol is standard?",
    options: [
      "Use 'Republic of Somaliland' on all official letterheads and demand immediate recognition.",
      "Use 'Republic of Somaliland' but adopt a pragmatic 'cooperation first' tone focusing on mutual interests.",
      "Refer to Somaliland as a 'regional administration' to avoid diplomatic friction.",
      "Bypass the Ministry of Foreign Affairs and send directly from the Guurti Chairman."
    ],
    correct: 1,
    explanation: "Sovereignty is non-negotiable (always use the official name), but diplomatic strategy requires focusing on mutual pragmatic interests (trade, security) before formal recognition."
  },
  {
    question: "Which historic 1993 grand conference established the current bicameral parliamentary system of Somaliland?",
    options: [
      "The Burao Conference",
      "The Hargeisa Peace Accord",
      "The Borama Grand Conference",
      "The Erigavo Settlement"
    ],
    correct: 2,
    explanation: "The Borama Conference in 1993 (Shirweynihii Boorama) established the National Charter, created the bicameral system, and peacefully transferred power to a civilian government."
  },
  {
    question: "The Somaliland House of Elders (Guurti) has a constitutional term of 6 years. However, under what specific condition can this term be legally extended?",
    options: [
      "By a simple majority vote of the House of Representatives.",
      "By a presidential decree during a national holiday.",
      "Only if the National Electoral Commission (NEC) certifies that elections cannot be held due to security or instability.",
      "If the Supreme Court decides the Chairman's performance is exceptional."
    ],
    correct: 2,
    explanation: "Article 42 and 45 of the Constitution allow for term extensions only when the NEC and the Guurti themselves determine that external constraints (security, natural disasters) make elections impossible."
  },
  {
    question: "In the context of the 'Design is Policy' philosophy, what is the primary role of visual legitimacy in Somaliland's institutional trust?",
    options: [
      "To make government buildings look modern for tourists.",
      "To standardize aesthetic consistency as a signal of internal stability and administrative competence.",
      "To replace legal text with symbols for easier reading.",
      "To copy the design systems of neighboring states to appear integrated."
    ],
    correct: 1,
    explanation: "Visual consistency in logos, certificates, and letterheads acts as a trust signal, communicating that the administration is organized, stable, and distinct from chaotic neighbors."
  }
];

export default function InteractiveQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (idx === QUIZ_DATA[currentQ].correct) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < QUIZ_DATA.length - 1) {
      setCurrentQ(q => q + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 animate-in fade-in duration-700">
      <div className="w-full max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[--sl-gold]/10 border border-[--sl-gold]/30 mb-6 text-[--sl-gold]">
            <BrainCircuit size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">Legislative Assessment</h1>
          <p className="text-zinc-400">Test your mastery of constitutional mandates and diplomatic strategy.</p>
        </div>

        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div 
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0A0A0A] border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900">
                <motion.div 
                  className="h-full bg-[--sl-gold]"
                  initial={{ width: `${(currentQ / QUIZ_DATA.length) * 100}%` }}
                  animate={{ width: `${((currentQ + 1) / QUIZ_DATA.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[--sl-gold]">Question {currentQ + 1} of {QUIZ_DATA.length}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Score: {score}</span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
                {QUIZ_DATA[currentQ].question}
              </h2>

              <div className="space-y-4">
                {QUIZ_DATA[currentQ].options.map((opt, idx) => {
                  const isCorrectAnswer = idx === QUIZ_DATA[currentQ].correct;
                  const isSelected = selected === idx;
                  
                  let btnState = "bg-[#050505] border-zinc-800 hover:border-[--sl-gold]/50 text-zinc-300 hover:text-white";
                  if (showResult) {
                    if (isCorrectAnswer) btnState = "bg-emerald-500/10 border-emerald-500 text-emerald-400";
                    else if (isSelected) btnState = "bg-red-500/10 border-red-500 text-red-400";
                    else btnState = "bg-[#050505] border-zinc-800 opacity-50 text-zinc-500";
                  }

                  return (
                    <button
                      key={idx}
                      disabled={showResult}
                      onClick={() => handleSelect(idx)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${btnState}`}
                    >
                      <span className="pr-4">{opt}</span>
                      {showResult && isCorrectAnswer && <Check size={20} className="text-emerald-500 flex-shrink-0" />}
                      {showResult && isSelected && !isCorrectAnswer && <X size={20} className="text-red-500 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {showResult && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-8 pt-8 border-t border-zinc-800"
                  >
                    <div className={`p-4 rounded-xl text-sm ${selected === QUIZ_DATA[currentQ].correct ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-900 text-zinc-300'}`}>
                      <span className="font-bold block mb-1">Explanation:</span>
                      {QUIZ_DATA[currentQ].explanation}
                    </div>
                    
                    <button 
                      onClick={nextQuestion}
                      className="w-full mt-6 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
                    >
                      {currentQ < QUIZ_DATA.length - 1 ? 'Next Question' : 'View Results'}
                      <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0A0A0A] border border-[--sl-gold]/30 rounded-3xl p-12 text-center shadow-2xl shadow-[--sl-gold]/10"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[--sl-gold]/10 border border-[--sl-gold]/30 mb-8 text-[--sl-gold]">
                <Shield size={48} />
              </div>
              <h2 className="text-4xl font-black text-white mb-4">Assessment Complete</h2>
              <p className="text-xl text-zinc-400 mb-8">You scored <span className="text-[--sl-gold] font-bold">{score}</span> out of {QUIZ_DATA.length}</p>
              
              <div className="w-full bg-zinc-900 rounded-full h-4 mb-12 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#AA8B2E] to-[--sl-gold] h-full" 
                  style={{ width: `${(score / QUIZ_DATA.length) * 100}%` }} 
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={restartQuiz}
                  className="px-8 py-4 bg-[#050505] border border-zinc-800 hover:border-zinc-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <RotateCcw size={18} />
                  Retake Assessment
                </button>
                
                {score >= QUIZ_DATA.length - 1 && (
                  <Link 
                    href={`/academy/certificate?score=${score}&total=${QUIZ_DATA.length}`}
                    className="px-8 py-4 bg-[--sl-gold] hover:bg-[#AA8B2E] text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[--sl-gold]/20"
                  >
                    Claim Certificate
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
