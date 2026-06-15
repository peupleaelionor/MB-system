'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    num: '01',
    key: 'BEHAVIOR',
    title: 'Comportements & discipline',
    desc: "Les 30 comportements des bâtisseurs. Pas de la motivation — de la reprogrammation concrète.",
  },
  {
    num: '02',
    key: 'CLARITY',
    title: 'Vision, choix & priorités',
    desc: "Objectifs précis, plan d'action, vision à 90 jours. Tu sais où tu vas et comment y aller.",
  },
  {
    num: '03',
    key: 'VALUE',
    title: 'Compétence → offre',
    desc: "Structure une offre que le marché veut payer. Pas une idée — un produit ou service clair et désirable.",
  },
  {
    num: '04',
    key: 'IMAGE',
    title: 'Confiance & perception',
    desc: "Profil, bio, positionnement. Les gens comprennent en 5 secondes ce que tu vaux.",
  },
  {
    num: '05',
    key: 'EXECUTION',
    title: 'Action, vente & amélioration',
    desc: "Plans d'action, templates, scripts. Tu n'attends plus d'être prêt — tu exécutes et tu t'améliores.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 px-6 lg:px-8 relative bg-[#0B0B0B]">
      <div className="divider-gold absolute top-0 left-0 right-0" />
      <div className="divider-gold absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="section-label">LA SOLUTION</div>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-4">
            MB Système remet tout dans l&apos;ordre.
          </h2>
          <p className="text-[#A8A29A] text-base max-w-xl mx-auto leading-relaxed">
            Un protocole en 5 piliers pour transformer ta façon de penser, de te présenter et de générer de la valeur.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`premium-card rounded-xl p-6 group hover:border-gold/30 transition-all duration-300 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold/30 text-xs font-body font-bold font-mono">{p.num}</span>
                <span className="text-[10px] font-body font-bold tracking-widest text-gold uppercase border border-gold/25 rounded px-2 py-0.5">
                  {p.key}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold-light transition-colors">{p.title}</h3>
              <p className="text-[#A8A29A] text-sm font-body leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
