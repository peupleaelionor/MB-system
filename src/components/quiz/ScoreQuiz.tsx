'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { questions } from '@/lib/scoring';

type Locale = 'fr' | 'en';

const copy = {
  fr: {
    label: 'MB SCORE',
    heading1: 'Découvre ton profil',
    heading1Gold: 'Money Builder',
    subtitle: "Réponds avec honnêteté. Ce diagnostic te donnera une clarté précieuse sur ton potentiel et les leviers à activer en priorité.",
    questionOf: (current: number, total: number) => `Question ${current} sur ${total}`,
    completed: (pct: number) => `${pct}% complété`,
    confidentiality: 'Tes réponses sont 100% confidentielles et utilisées uniquement pour générer ton diagnostic personnalisé.',
    quoteText: 'La clarté attire.\nLe système convertit.\nLa discipline scale.',
    pillarsLabel: 'TES 5 PILIERS',
    reminderLabel: 'RAPPEL',
    reminderText: "Il n'y a pas de bonnes ou de mauvaises réponses. Il y a seulement ton point de départ.\n\nCe score est là pour t'élever, pas pour te juger.",
    takeYourTime: 'PRENDS TON TEMPS',
    takeYourTimeDesc: 'La précision dépend de ton honnêteté.',
    seeResult: 'Voir mon résultat',
    continueBtn: 'Continuer',
    pressEnter: 'Appuie sur Entrée ↵',
    seeSystem: 'Voir le système',
    pillars: [
      { key: 'MENTAL', desc: 'Clarté, mindset, confiance' },
      { key: 'OFFER', desc: 'Offre claire, désirable et premium' },
      { key: 'IMAGE', desc: 'Positionnement, marque et autorité' },
      { key: 'ACTION', desc: "Système d'exécution, contenu et conversion" },
      { key: 'MONEY CLARITY', desc: 'Structuration financière et vision long terme' },
    ],
  },
  en: {
    label: 'MB SCORE',
    heading1: 'Discover your',
    heading1Gold: 'Money Builder profile',
    subtitle: 'Answer honestly. This diagnostic will give you precious clarity on your potential and the levers to activate first.',
    questionOf: (current: number, total: number) => `Question ${current} of ${total}`,
    completed: (pct: number) => `${pct}% completed`,
    confidentiality: 'Your answers are 100% confidential and used only to generate your personalized diagnostic.',
    quoteText: 'Clarity attracts.\nThe system converts.\nDiscipline scales.',
    pillarsLabel: 'YOUR 5 PILLARS',
    reminderLabel: 'REMINDER',
    reminderText: "There are no right or wrong answers. There is only your starting point.\n\nThis score is here to elevate you, not to judge you.",
    takeYourTime: 'TAKE YOUR TIME',
    takeYourTimeDesc: 'Precision depends on your honesty.',
    seeResult: 'See my result',
    continueBtn: 'Continue',
    pressEnter: 'Press Enter ↵',
    seeSystem: 'See the system',
    pillars: [
      { key: 'MENTAL', desc: 'Clarity, mindset, confidence' },
      { key: 'OFFER', desc: 'Clear, desirable and premium offer' },
      { key: 'IMAGE', desc: 'Positioning, brand and authority' },
      { key: 'ACTION', desc: 'Acquisition system, content and conversion' },
      { key: 'MONEY CLARITY', desc: 'Financial structure and long-term vision' },
    ],
  },
};

const questionPillar: Record<number, string> = {
  1: 'ACTION',
  2: 'MENTAL',
  3: 'IMAGE',
  4: 'OFFER',
  5: 'ACTION',
  6: 'MONEY CLARITY',
  7: 'IMAGE',
};

export default function ScoreQuiz({ locale = 'fr' }: { locale?: Locale }) {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const t = copy[locale];
  const base = locale === 'en' ? '/en' : '';

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
      router.push(`${base}/score/result?data=${encoded}`);
    } else {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-28 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            <div className="lg:col-span-3">
              <div className="section-label mb-4">{t.label}</div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-3 leading-tight">
                {t.heading1}<br />
                <span className="gold-text">{t.heading1Gold}</span>
              </h1>
              <p className="text-[#A8A29A] text-sm font-body mb-10 max-w-md leading-relaxed">
                {t.subtitle}
              </p>

              <div className="premium-card rounded-2xl p-6 mb-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gold text-sm font-body font-medium">
                      {t.questionOf(currentQ + 1, questions.length)}
                    </span>
                    <span className="text-[#A8A29A] text-xs font-body">
                      {t.completed(Math.round(progress))}
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
                    <div className="text-[10px] font-body font-bold tracking-widest text-gold uppercase mb-3">
                      {activePillar}
                    </div>

                    <h2 className="font-serif text-xl lg:text-2xl font-bold text-cream mb-6 leading-snug">
                      {question.question}
                    </h2>

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

              <div className="flex items-center gap-2 text-[#A8A29A]/60 text-xs font-body mb-4">
                <svg className="w-3.5 h-3.5 text-gold/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                {t.confidentiality}
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="premium-card rounded-2xl p-5">
                <div className="text-gold text-3xl font-serif leading-none mb-2">&quot;</div>
                <p className="font-serif text-base text-cream italic leading-relaxed mb-3">
                  {t.quoteText.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < 2 && <br />}</span>
                  ))}
                </p>
                <div className="text-[10px] font-body tracking-widest text-[#A8A29A] uppercase">MB SYSTÈME</div>
              </div>

              <div className="premium-card rounded-2xl p-5">
                <div className="text-[10px] font-body font-bold tracking-widest text-[#A8A29A] uppercase mb-4">
                  {t.pillarsLabel}
                </div>
                <div className="flex flex-col gap-3">
                  {t.pillars.map((p) => {
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

              <div className="premium-card rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-sm">💎</div>
                  <div className="text-[10px] font-body font-bold tracking-widest text-[#A8A29A] uppercase">{t.reminderLabel}</div>
                </div>
                <p className="text-[#A8A29A] text-xs font-body leading-relaxed">
                  {t.reminderText.split('\n\n').map((para, i) => (
                    <span key={i}>{para}{i === 0 && <><br /><br /></>}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#050505]/98 backdrop-blur-xl border-t border-[#2A2418] z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="grid md:grid-cols-3 gap-4 items-center">
            <div className="hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-gold/30 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <div className="text-cream text-[11px] font-body font-semibold">{t.takeYourTime}</div>
                  <div className="text-[#A8A29A] text-[10px] font-body">{t.takeYourTimeDesc}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleNext}
                disabled={!selected}
                className={`px-12 py-3.5 rounded-lg text-xs font-body font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 ${
                  selected ? 'btn-gold' : 'bg-[#2A2418] text-[#A8A29A] cursor-not-allowed'
                }`}
              >
                {isLast ? t.seeResult : t.continueBtn}
                {selected && <span>→</span>}
              </button>
            </div>

            <div className="hidden md:flex justify-end">
              <Link href={`${base}/systeme`} className="btn-outline-gold px-5 py-3 rounded-lg text-[11px] inline-flex items-center gap-1">
                {t.seeSystem}
              </Link>
            </div>
          </div>

          {selected && (
            <p className="text-center text-[10px] text-[#A8A29A]/40 font-body mt-2">{t.pressEnter}</p>
          )}
        </div>
      </div>

      <div className="h-24" />
    </div>
  );
}
