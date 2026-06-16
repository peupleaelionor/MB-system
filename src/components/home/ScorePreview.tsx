'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type Locale = 'fr' | 'en';

const pillars = [
  { icon: '🧠', key: 'MENTAL', labelFr: 'Mental', labelEn: 'Mental', descFr: 'Clarté mentale, confiance et discipline intérieure.', descEn: 'Mental clarity, confidence and inner discipline.', score: 82 },
  { icon: '💎', key: 'OFFER', labelFr: 'Offer', labelEn: 'Offer', descFr: 'Offre claire, désirable et premium.', descEn: 'Clear, desirable and premium offer.', score: 78 },
  { icon: '👑', key: 'IMAGE', labelFr: 'Image', labelEn: 'Image', descFr: 'Positionnement, marque et autorité perçue.', descEn: 'Positioning, brand and perceived authority.', score: 85 },
  { icon: '🎯', key: 'ACTION', labelFr: 'Action', labelEn: 'Action', descFr: "Système d'acquisition, contenu et conversion.", descEn: 'Acquisition system, content and conversion.', score: 80 },
  { icon: '💰', key: 'CLARITY', labelFr: 'Money Clarity', labelEn: 'Money Clarity', descFr: 'Structuration financière et vision long terme.', descEn: 'Financial structure and long-term vision.', score: 88 },
];

const copy = {
  fr: {
    label: 'MB SCORE',
    heading1: 'Un score.',
    heading2: '5 piliers.',
    heading3Gold: '1 vision claire.',
    body: "Évalue où tu en es. Identifie tes leviers. Passe à l'action.",
    cta: 'Faire mon évaluation gratuite',
  },
  en: {
    label: 'MB SCORE',
    heading1: 'One score.',
    heading2: '5 pillars.',
    heading3Gold: '1 clear vision.',
    body: 'Assess where you stand. Identify your levers. Take action.',
    cta: 'Take my free assessment',
  },
};

export default function ScorePreview({ locale = 'fr' }: { locale?: Locale }) {
  const t = copy[locale];
  const base = locale === 'en' ? '/en' : '';

  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-6">{t.label}</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-4 leading-tight">
              {t.heading1}<br />
              {t.heading2}<br />
              <span className="gold-text">{t.heading3Gold}</span>
            </h2>
            <p className="text-[#A8A29A] text-base leading-relaxed mb-10">{t.body}</p>

            <Link
              href={`${base}/score`}
              className="btn-gold px-8 py-4 rounded-lg inline-flex items-center gap-2"
            >
              {t.cta}
              <span>→</span>
            </Link>
          </motion.div>

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
                  <p className="text-[#A8A29A] text-xs font-body">
                    {locale === 'en' ? pillar.descEn : pillar.descFr}
                  </p>
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
