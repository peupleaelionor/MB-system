'use client';

import { motion } from 'framer-motion';

type Locale = 'fr' | 'en';

const copy = {
  fr: {
    heading1: 'Les millionnaires ne pensent pas seulement différemment.',
    heading2Gold: 'Ils se comportent différemment.',
    body: "MB Système ne te promet pas de devenir millionnaire. Il t'aide à comprendre et appliquer les comportements des bâtisseurs : clarté, discipline, offre, image et exécution.",
    footnote: "Une compétence non structurée reste invisible. L'argent suit rarement le chaos. Il suit la clarté, la valeur et l'exécution.",
  },
  en: {
    heading1: "Millionaires don't just think differently.",
    heading2Gold: 'They behave differently.',
    body: "MB System doesn't promise to make you a millionaire. It helps you understand and apply builder behaviors: clarity, discipline, offer, image and execution.",
    footnote: "An unstructured skill stays invisible. Money rarely follows chaos. It follows clarity, value and execution.",
  },
};

export default function TruthSection({ locale = 'fr' }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-3xl sm:text-4xl lg:text-[52px] font-bold text-cream leading-tight mb-8">
            {t.heading1}
            <br />
            <span className="gold-text">{t.heading2Gold}</span>
          </p>

          <div className="divider-gold w-48 mx-auto mb-8" />

          <p className="text-[#A8A29A] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            {t.body}
          </p>
          <p className="text-[#A8A29A]/50 text-sm font-body italic">
            {t.footnote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
