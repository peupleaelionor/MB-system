'use client';

import { motion } from 'framer-motion';

type Locale = 'fr' | 'en';

const copy = {
  fr: {
    heading1: 'Le marché ne paie pas',
    heading2: 'ton potentiel brut.',
    body1: "Tu peux être intelligent, ambitieux, créatif, travailleur… et rester bloqué financièrement. Pas parce que tu n'as aucune valeur. Mais parce que ta valeur n'est pas encore structurée en offre claire.",
    body2: "Le marché ne paie pas ce que tu pourrais devenir. Il paie ce que tu sais clairement apporter aujourd'hui.",
    problems: [
      "Tu ne sais pas exactement quoi vendre.",
      "Ton image ne dit pas clairement ce que tu apportes.",
      "Tes idées restent dispersées, sans structure.",
      "Tu n'as pas de plan d'action concret.",
      "Tu veux gagner plus, mais tu avances sans système.",
    ],
  },
  en: {
    heading1: "The market doesn't pay",
    heading2: 'your raw potential.',
    body1: "You can be smart, ambitious, creative, hard-working… and still be financially stuck. Not because you have no value. But because your value isn't yet structured into a clear offer.",
    body2: "The market doesn't pay for what you could become. It pays for what you clearly deliver today.",
    problems: [
      "You don't know exactly what to sell.",
      "Your image doesn't clearly communicate what you bring.",
      "Your ideas remain scattered, without structure.",
      "You don't have a concrete action plan.",
      "You want to earn more, but you move forward without a system.",
    ],
  },
};

export default function ProblemSection({ locale = 'fr' }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="divider-gold absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-6 leading-tight">
              {t.heading1}<br />
              <span className="text-[#A8A29A]">{t.heading2}</span>
            </h2>
            <p className="text-[#A8A29A] text-base leading-relaxed mb-8">{t.body1}</p>
            <p className="text-[#A8A29A] text-base leading-relaxed">{t.body2}</p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {t.problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 premium-card rounded-xl"
              >
                <div className="w-2 h-2 rounded-full bg-gold/50 mt-1.5 flex-shrink-0" />
                <p className="text-cream text-sm font-body leading-relaxed">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
