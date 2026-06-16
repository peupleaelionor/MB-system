'use client';

import { motion } from 'framer-motion';

type Locale = 'fr' | 'en';

const copy = {
  fr: {
    label: 'LA SOLUTION',
    heading: 'MB Système remet tout dans l\'ordre.',
    subheading: 'Un protocole en 5 piliers pour transformer ta façon de penser, de te présenter et de générer de la valeur.',
    pillars: [
      { num: '01', key: 'BEHAVIOR', title: 'Comportements & discipline', desc: "Les 30 comportements des bâtisseurs. Pas de la motivation — de la reprogrammation concrète." },
      { num: '02', key: 'CLARITY', title: 'Vision, choix & priorités', desc: "Objectifs précis, plan d'action, vision à 90 jours. Tu sais où tu vas et comment y aller." },
      { num: '03', key: 'VALUE', title: 'Compétence → offre', desc: "Structure une offre que le marché veut payer. Pas une idée — un produit ou service clair et désirable." },
      { num: '04', key: 'IMAGE', title: 'Confiance & perception', desc: "Profil, bio, positionnement. Les gens comprennent en 5 secondes ce que tu vaux." },
      { num: '05', key: 'EXECUTION', title: 'Action, vente & amélioration', desc: "Plans d'action, templates, scripts. Tu n'attends plus d'être prêt — tu exécutes et tu t'améliores." },
    ],
  },
  en: {
    label: 'THE SOLUTION',
    heading: 'MB System puts everything in order.',
    subheading: 'A 5-pillar protocol to transform how you think, present yourself and generate value.',
    pillars: [
      { num: '01', key: 'BEHAVIOR', title: 'Behaviors & discipline', desc: "The 30 builder behaviors. Not motivation — concrete reprogramming." },
      { num: '02', key: 'CLARITY', title: 'Vision, choices & priorities', desc: "Precise goals, action plan, 90-day vision. You know where you're going and how to get there." },
      { num: '03', key: 'VALUE', title: 'Skill → offer', desc: "Structure an offer the market wants to pay for. Not an idea — a clear, desirable product or service." },
      { num: '04', key: 'IMAGE', title: 'Confidence & perception', desc: "Profile, bio, positioning. People understand in 5 seconds what you're worth." },
      { num: '05', key: 'EXECUTION', title: 'Action, sales & improvement', desc: "Action plans, templates, scripts. You stop waiting to be ready — you execute and improve." },
    ],
  },
};

export default function SolutionSection({ locale = 'fr' }: { locale?: Locale }) {
  const t = copy[locale];

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
            <div className="section-label">{t.label}</div>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-4">
            {t.heading}
          </h2>
          <p className="text-[#A8A29A] text-base max-w-xl mx-auto leading-relaxed">
            {t.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.pillars.map((p, i) => (
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
