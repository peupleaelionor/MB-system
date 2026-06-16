'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Locale = 'fr' | 'en';

const copy = {
  fr: {
    label: 'QUESTIONS FRÉQUENTES',
    heading: 'Tu as des questions.\nVoici les réponses.',
    faqs: [
      { q: "À qui s'adresse MB Système ?", a: "MB Système s'adresse aux personnes ambitieuses qui veulent clarifier leur potentiel, créer une offre vendable et construire un système d'action. Salariés frustrés, freelances, jeunes entrepreneurs, créateurs, étudiants, reconversions." },
      { q: 'Est-ce que MB Système promet de devenir riche ?', a: "Non. MB Système ne promet pas de richesse rapide. Il donne une structure pour clarifier ton potentiel, créer une offre, améliorer ton image et passer à l'action. Les résultats dépendent de ton engagement et de ton exécution." },
      { q: "Est-ce adapté si je n'ai pas encore d'idée ?", a: "Oui. Le système aide justement à identifier tes compétences, ressources et idées possibles, et à les transformer en pistes monétisables concrètes." },
      { q: "Que se passe-t-il après l'achat ?", a: "Accès immédiat à tous tes contenus : guides, workbooks, scripts, templates et plans d'action. Accès à vie, sans abonnement caché." },
      { q: "Puis-je l'utiliser si je suis salarié ?", a: "Oui. MB Système aide un salarié à clarifier ses compétences, son image professionnelle et ses pistes de revenus complémentaires ou de transition." },
      { q: 'Est-ce adapté aux freelances ?', a: "Oui. Les freelances peuvent l'utiliser pour clarifier leur offre, améliorer leur positionnement, créer des scripts de vente et construire une image plus forte." },
    ],
  },
  en: {
    label: 'FREQUENTLY ASKED QUESTIONS',
    heading: 'You have questions.\nHere are the answers.',
    faqs: [
      { q: 'Who is MB System for?', a: "MB System is for ambitious people who want to clarify their potential, create a sellable offer and build an action system. Frustrated employees, freelancers, young entrepreneurs, creators, students, career changers." },
      { q: 'Does MB System promise to make you rich?', a: "No. MB System does not promise quick wealth. It provides a structure to clarify your potential, create an offer, improve your image and take action. Results depend on your commitment and execution." },
      { q: "Is it suitable if I don't have an idea yet?", a: "Yes. The system helps you identify your skills, resources and possible ideas, and transform them into concrete monetizable paths." },
      { q: 'What happens after purchase?', a: "Immediate access to all your content: guides, workbooks, scripts, templates and action plans. Lifetime access, no hidden subscription." },
      { q: 'Can I use it if I am employed?', a: "Yes. MB System helps an employee clarify their skills, professional image and paths for additional income or career transition." },
      { q: 'Is it suitable for freelancers?', a: "Yes. Freelancers can use it to clarify their offer, improve their positioning, create sales scripts and build a stronger image." },
    ],
  },
};

export default function FAQ({ locale = 'fr' }: { locale?: Locale }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = copy[locale];

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="section-label mb-6 justify-center">{t.label}</div>
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-cream text-center mb-12">
          {t.heading.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h2>

        <div className="flex flex-col gap-3">
          {t.faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? 'border border-gold/30 bg-[#0B0B0B]'
                  : 'premium-card'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left gap-4 group"
              >
                <span className={`text-sm font-body font-medium transition-colors ${
                  openIndex === i ? 'text-cream' : 'text-[#A8A29A] group-hover:text-cream'
                }`}>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gold text-xl flex-shrink-0 font-light"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <div className="divider-gold mb-4" />
                      <p className="text-[#A8A29A] text-sm font-body leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
