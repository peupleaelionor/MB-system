'use client';

import { motion } from 'framer-motion';

const problems = [
  "Tu ne sais pas exactement quoi vendre.",
  "Ton image ne dit pas clairement ce que tu apportes.",
  "Tes idées restent dispersées, sans structure.",
  "Tu n'as pas de plan d'action concret.",
  "Tu veux gagner plus, mais tu avances sans système.",
];

export default function ProblemSection() {
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
              Le marché ne paie pas<br />
              <span className="text-[#A8A29A]">ton potentiel brut.</span>
            </h2>
            <p className="text-[#A8A29A] text-base leading-relaxed mb-8">
              Tu peux être intelligent, ambitieux, créatif, travailleur… et rester bloqué financièrement.
              Pas parce que tu n&apos;as aucune valeur. Mais parce que ta valeur n&apos;est pas encore
              structurée en offre claire.
            </p>
            <p className="text-[#A8A29A] text-base leading-relaxed">
              Le marché ne paie pas ce que tu <em>pourrais</em> devenir. Il paie ce que tu sais clairement apporter aujourd&apos;hui.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {problems.map((problem, i) => (
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
