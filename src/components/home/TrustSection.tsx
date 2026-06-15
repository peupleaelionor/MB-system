'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    icon: "📋",
    title: "Du contenu concret",
    description: "Pas de théories vagues. Des outils, des templates, des plans d'action prêts à utiliser.",
  },
  {
    icon: "🎯",
    title: "Un système, pas des conseils",
    description: "Un protocole structuré en 5 piliers. Chaque pilier s'appuie sur le suivant.",
  },
  {
    icon: "⚡",
    title: "Applicable immédiatement",
    description: "Pas de prérequis. Tu ouvres, tu lis, tu appliques. Résultats mesurables en 7 jours.",
  },
  {
    icon: "🔒",
    title: "Accès permanent",
    description: "Un paiement unique. Accès à vie. Mises à jour incluses.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="divider-gold absolute left-0 right-0 opacity-0" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-cream mb-4">
            Pas une promesse magique.{' '}
            <span className="gold-text">Une structure.</span>
          </h2>
          <p className="text-[#A8A29A] text-base font-body max-w-2xl mx-auto leading-relaxed">
            MB Système ne te promet pas de devenir millionnaire. Il te donne les outils pour te comporter comme quelqu&apos;un qui construit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="premium-card p-6 rounded-xl hover:border-gold/30 transition-all duration-300"
            >
              <div className="text-2xl mb-4">{pillar.icon}</div>
              <h3 className="font-serif text-lg font-bold text-cream mb-2">{pillar.title}</h3>
              <p className="text-[#A8A29A] text-sm font-body leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center premium-card p-6 rounded-xl border border-gold/20"
        >
          <div className="text-gold text-sm font-body font-bold tracking-widest uppercase mb-2">
            Garantie satisfaction 14 jours
          </div>
          <p className="text-[#A8A29A] text-sm font-body">
            Si tu appliques le système pendant 14 jours et que tu ne vois aucun changement, on te rembourse. Pas de questions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
