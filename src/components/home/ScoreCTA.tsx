'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ScoreCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 relative bg-[#0B0B0B]">
      <div className="divider-gold absolute top-0 left-0 right-0" />
      <div className="divider-gold absolute bottom-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-6">GRATUIT — 2 MINUTES</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-4 leading-tight">
              Découvre ton profil{' '}
              <span className="gold-text">Money Builder</span>
            </h2>
            <p className="text-[#A8A29A] text-base font-body leading-relaxed mb-8">
              7 questions. Un diagnostic précis. Tu sais exactement où tu en es
              et ce que tu dois changer en premier.
            </p>
            <Link href="/score" className="btn-gold px-8 py-4 rounded-lg inline-flex items-center gap-2">
              Faire mon MB Score →
            </Link>
            <p className="text-[#A8A29A]/50 text-xs font-body mt-3">Aucune inscription requise.</p>
          </motion.div>

          {/* Mock quiz preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="premium-card rounded-2xl p-6 relative">
              <div className="section-label mb-3">MB SCORE</div>

              <div className="mb-5">
                <div className="flex justify-between mb-2">
                  <span className="text-[#A8A29A] text-xs font-body">Question 1 sur 7</span>
                  <span className="text-gold text-xs font-body">14% complété</span>
                </div>
                <div className="h-1 bg-[#2A2418] rounded-full overflow-hidden">
                  <div className="h-full w-[14%] bg-gradient-to-r from-gold to-champagne rounded-full" />
                </div>
              </div>

              <p className="font-serif text-base text-cream font-bold mb-4">
                Quand tu veux gagner plus, ton premier réflexe est :
              </p>

              <div className="flex flex-col gap-2.5">
                {[
                  { key: 'A', label: 'Je cherche une opportunité concrète à tester.' },
                  { key: 'B', label: 'Je réfléchis à une idée mais je tarde à agir.', selected: true },
                  { key: 'C', label: 'Je cherche plus d\'informations.' },
                ].map((opt) => (
                  <div
                    key={opt.key}
                    className={`flex items-center gap-3 p-3 rounded-lg border text-xs font-body transition-all ${
                      opt.selected
                        ? 'border-gold bg-gold/8 text-cream'
                        : 'border-[#2A2418] text-[#A8A29A]'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 font-bold ${
                      opt.selected ? 'border-gold bg-gold text-background' : 'border-[#2A2418]'
                    }`}>
                      {opt.key}
                    </div>
                    {opt.label}
                  </div>
                ))}
              </div>

              {/* Fade overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-16 rounded-b-2xl bg-gradient-to-t from-[#11100D] to-transparent flex items-end justify-center pb-3">
                <Link href="/score" className="text-gold text-xs font-body font-semibold hover:text-champagne transition-colors">
                  + 6 autres questions →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
