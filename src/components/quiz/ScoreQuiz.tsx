'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { questions } from '@/lib/scoring';

const pillars = [
  { key: 'MENTAL', label: 'Mental', desc: 'Clarté, mindset, confiance' },
  { key: 'OFFER', label: 'Offer', desc: 'Offre claire, désirable et premium' },
  { key: 'IMAGE', label: 'Image', desc: 'Positionnement, marque et autorité' },
  { key: 'ACTION', label: 'Action', desc: "Système d'exécution, contenu et conversion" },
  { key: 'MONEY CLARITY', label: 'Money Clarity', desc: 'Structuration financière et vision long terme' },
];

const questionPillar: Record<number, string> = {
  1: 'ACTION',
  2: 'MENTAL',
  3: 'IMAGE',
  4: 'OFFER',
  5: 'ACTION',
  6: 'MONEY CLARITY',
  7: 'IMAGE',
};

export default function ScoreQuiz() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState<string | null>(null);

  const question = questions[currentQ];
  const progress = (currentQ / questions.length) * 100;
  const isLast = currentQ === questions.length - 1;
  const activePillar = questionPillar[question.id];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && selected) handleNext();
      const map: Record<string, string> = { '1': 'a', '2': 'b', '3': 'c', '4': 'd' };
      if (map[e.key]) setSelected(map[e.key]);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected, currentQ]);

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = { ...answers, [question.id]: selected };
    setAnswers(newAnswers);
    if (isLast) {
      const encoded = btoa(JSON.stringify(newAnswers));
      router.push(`/score/result?data=${encoded}`);
    } else {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="pt-28 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left — Main quiz */}
            <div className="lg:col-span-3">
              <div className="section-label mb-4">MB SCORE</div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-3 leading-tight">
                Découvre ton profil<br />
                <span className="gold-text">Money Builder</span>
              </h1>
              <p className="text-[#A8A29A] text-sm font-body mb-10 max-w-md leading-relaxed">
                Réponds avec honnêteté. Ce diagnostic te donnera une clarté précieuse sur ton potentiel et les leviers à activer en priorité.
              </p>

              {/* Quiz card */}
              <div className="premium-card rounded-2xl p-6 mb-6">
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gold text-sm font-body font-medium">
                      Question {currentQ + 1} sur {questions.length}
                    </span>
                    <span className="text-[#A8A29A] text-xs font-body">
                      {Math.round(progress)}% complété
                    </span>
                  </div>
                  <div className="h-1 bg-[#2A2418] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gold to-champagne rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQ}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Category label */}
                    <div className="text-[10px] font-body font-bold tracking-widest text-gold uppercase mb-3">
                      {activePillar}
                    </div>

                    {/* Question */}
                    <h2 className="font-serif text-xl lg:text-2xl font-bold text-cream mb-6 leading-snug">
                      {question.question}
                    </h2>

                    {/* Answers */}
                    <div className="flex flex-col gap-2.5">
                      {question.answers.map((answer, i) => (
                        <button
                          key={answer.key}
                          onClick={() => setSelected(answer.key)}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3 group ${
                            selected === answer.key
                              ? 'border-gold bg-gold/8 text-cream'
                              : 'border-[#2A2418] hover:border-gold/30 text-[#A8A29A] hover:text-cream'
                          }`}
                        >
                          <div className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 text-xs font-body font-bold transition-all ${
                            selected === answer.key
                              ? 'border-gold bg-gold text-background'
                              : 'border-[#2A2418] text-[#A8A29A] group-hover:border-gold/40'
                          }`}>
                            {String.fromCharCode(65 + i)}
                          </div>
                          <span className="text-sm font-body leading-snug">{answer.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Confidentiality note */}
              <div className="flex items-center gap-2 text-[#A8A29A]/60 text-xs font-body mb-4">
                <svg className="w-3.5 h-3.5 text-gold/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Tes réponses sont 100% confidentielles et utilisées uniquement pour générer ton diagnostic personnalisé.
              </div>
            </div>

            {/* Right — Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Quote card */}
              <div className="premium-card rounded-2xl p-5">
                <div className="text-gold text-3xl font-serif leading-none mb-2">"</div>
                <p className="font-serif text-base text-cream italic leading-relaxed mb-3">
                  La clarté attire.<br />
                  Le système convertit.<br />
                  La discipline scale.
                </p>
                <div className="text-[10px] font-body tracking-widest text-[#A8A29A] uppercase">
                  MB SYSTÈME
                </div>
              </div>

              {/* 5 pillars */}
              <div className="premium-card rounded-2xl p-5">
                <div className="text-[10px] font-body font-bold tracking-widest text-[#A8A29A] uppercase mb-4">
                  TES 5 PILIERS
                </div>
                <div className="flex flex-col gap-3">
                  {pillars.map((p) => {
                    const isActive = p.key === activePillar;
                    return (
                      <div key={p.key} className={`flex items-center gap-3 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all ${
                          isActive ? 'border-gold bg-gold/10' : 'border-[#2A2418]'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-gold' : 'bg-[#2A2418]'}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-[10px] font-body font-bold tracking-widest uppercase mb-0.5 ${isActive ? 'text-gold' : 'text-[#A8A29A]'}`}>
                            {p.key}
                          </div>
                          <div className="text-[10px] text-[#A8A29A]/60 font-body truncate">{p.desc}</div>
                        </div>
                        <div className="w-12 h-0.5 bg-[#2A2418] rounded-full overflow-hidden flex-shrink-0">
                          {isActive && (
                            <motion.div
                              className="h-full bg-gold rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: '60%' }}
                              transition={{ duration: 0.5 }}
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Reminder */}
              <div className="premium-card rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-sm">
                    💎
                  </div>
                  <div className="text-[10px] font-body font-bold tracking-widest text-[#A8A29A] uppercase">RAPPEL</div>
                </div>
                <p className="text-[#A8A29A] text-xs font-body leading-relaxed">
                  Il n&apos;y a pas de bonnes ou de mauvaises réponses.
                  Il y a seulement ton point de départ.
                  <br /><br />
                  Ce score est là pour t&apos;élever, pas pour te juger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#050505]/98 backdrop-blur-xl border-t border-[#2A2418] z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="grid md:grid-cols-3 gap-4 items-center">
            {/* Left info */}
            <div className="hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <div className="text-cream text-[11px] font-body font-semibold">PRENDS TON TEMPS</div>
                  <div className="text-[#A8A29A] text-[10px] font-body">La précision dépend de ton honnêteté.</div>
                </div>
              </div>
            </div>

            {/* Center — CTA */}
            <div className="flex justify-center">
              <button
                onClick={handleNext}
                disabled={!selected}
                className={`px-12 py-3.5 rounded-lg text-xs font-body font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 ${
                  selected
                    ? 'btn-gold'
                    : 'bg-[#2A2418] text-[#A8A29A] cursor-not-allowed'
                }`}
              >
                {isLast ? 'Voir mon résultat' : 'Continuer'}
                {selected && <span>→</span>}
              </button>
            </div>

            {/* Right */}
            <div className="hidden md:flex justify-end">
              <Link href="/systeme" className="btn-outline-gold px-5 py-3 rounded-lg text-[11px] inline-flex items-center gap-1">
                Voir le système
              </Link>
            </div>
          </div>

          {selected && (
            <p className="text-center text-[10px] text-[#A8A29A]/40 font-body mt-2">
              Appuie sur Entrée ↵
            </p>
          )}
        </div>
      </div>

      {/* Bottom spacer for sticky bar */}
      <div className="h-24" />
    </div>
  );
}
