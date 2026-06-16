'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type Locale = 'fr' | 'en';

const copy = {
  fr: {
    heading1: 'Ton futur ne se souhaite pas.',
    heading2: 'Il se',
    heading2Gold: 'structure.',
    body: "Rejoins le MB Système et construis la vie, l'image et la liberté que tu mérites.",
    cta1: 'Découvrir mon MB Score maintenant →',
    cta2: 'Voir les offres',
    trust: ['Accès immédiat', 'Paiement unique', '14 jours garantis'],
  },
  en: {
    heading1: 'Your future is not wished for.',
    heading2: 'It is',
    heading2Gold: 'structured.',
    body: 'Join MB System and build the life, image and freedom you deserve.',
    cta1: 'Discover my MB Score now →',
    cta2: 'See offers',
    trust: ['Instant access', 'One-time payment', '14-day guarantee'],
  },
};

export default function FinalCTA({ locale = 'fr' }: { locale?: Locale }) {
  const t = copy[locale];
  const base = locale === 'en' ? '/en' : '';

  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] border-t border-[#2A2418]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold/4 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-serif text-4xl lg:text-5xl font-bold text-cream leading-tight mb-2">
              {t.heading1}
            </p>
            <p className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-8">
              {t.heading2} <span className="gold-text">{t.heading2Gold}</span>
            </p>
            <p className="text-[#A8A29A] text-base font-body leading-relaxed">
              {t.body}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <Link
              href={`${base}/score`}
              className="btn-gold px-8 py-4 rounded-lg text-center inline-flex items-center justify-center gap-2"
            >
              {t.cta1}
            </Link>
            <Link
              href={`${base}/offres`}
              className="btn-outline-gold px-8 py-4 rounded-lg text-center inline-flex items-center justify-center"
            >
              {t.cta2}
            </Link>

            <div className="flex items-center justify-center gap-6 pt-2">
              {t.trust.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-[#A8A29A] text-xs font-body">
                  <svg className="w-3 h-3 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
