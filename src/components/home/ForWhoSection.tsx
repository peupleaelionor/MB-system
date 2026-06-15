'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const forWho = [
  "Tu as du potentiel mais aucun système pour le monétiser",
  "Tu veux construire des revenus en dehors du salariat",
  "Tu sens que tu pourrais facturer plus mais tu ne sais pas comment",
  "Tu veux une image professionnelle qui reflète ta vraie valeur",
  "Tu es prêt à travailler intelligemment, pas juste dur",
];

const notForWho = [
  "Tu cherches un schéma de richesse rapide sans effort",
  "Tu n'es pas prêt à remettre en question tes habitudes",
  "Tu veux qu'on te dise que c'est facile",
  "Tu penses que le succès vient de la \"chance\"",
  "Tu n'as aucune envie de construire quelque chose de durable",
];

export default function ForWhoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream mb-4">
            C&apos;est pour toi ou pas ?
          </h2>
          <p className="text-gray-text text-lg">Soyons directs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Who */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-xl border border-green/20 bg-soft-dark"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-green/20 flex items-center justify-center">
                <span className="text-green text-xs font-bold">✓</span>
              </div>
              <h3 className="text-green font-heading font-semibold">C&apos;est pour toi si...</h3>
            </div>
            <ul className="space-y-3">
              {forWho.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-cream">
                  <span className="text-green mt-1 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For Who */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-xl border border-red-500/20 bg-soft-dark"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-red-400 text-xs font-bold">✗</span>
              </div>
              <h3 className="text-red-400 font-heading font-semibold">Ce n&apos;est pas pour toi si...</h3>
            </div>
            <ul className="space-y-3">
              {notForWho.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-text">
                  <span className="text-red-500/60 mt-1 flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
