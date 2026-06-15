'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const pillars = [
  { icon: '🧠', key: 'MENTAL', label: 'Mental', desc: 'Clarté mentale, confiance et discipline intérieure.', score: 82 },
  { icon: '💎', key: 'OFFER', label: 'Offer', desc: 'Offre claire, désirable et premium.', score: 78 },
  { icon: '👑', key: 'IMAGE', label: 'Image', desc: 'Positionnement, marque et autorité perçue.', score: 85 },
  { icon: '🎯', key: 'ACTION', label: 'Action', desc: "Système d'acquisition, contenu et conversion.", score: 80 },
  { icon: '💰', key: 'CLARITY', label: 'Money Clarity', desc: 'Structuration financière et vision long terme.', score: 88 },
];

export default function ScorePreview() {
  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-6">MB SCORE</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-4 leading-tight">
              Un score.<br />
              5 piliers.<br />
              <span className="gold-text">1 vision claire.</span>
            </h2>
            <p className="text-[#A8A29A] text-base leading-relaxed mb-10">
              Évalue où tu en es. Identifie tes leviers. Passe à l&apos;action.
            </p>

            <Link
              href="/score"
              className="btn-gold px-8 py-4 rounded-lg inline-flex items-center gap-2"
            >
              Faire mon évaluation gratuite
              <span>→</span>
            </Link>
          </motion.div>

          {/* Right — Pillar cards */}
          <div className="grid grid-cols-1 gap-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="premium-card rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 text-lg">
                  {pillar.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gold tracking-widest uppercase font-body font-semibold">
                      {pillar.key}
                    </span>
                    <span className="text-cream text-sm font-body font-bold">{pillar.score}/100</span>
                  </div>
                  <p className="text-[#A8A29A] text-xs font-body">{pillar.desc}</p>
                  <div className="mt-2 h-0.5 bg-[#2A2418] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pillar.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-gold/60 to-gold rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
