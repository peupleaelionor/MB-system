'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CheckoutButton from '@/components/ui/CheckoutButton';

const offers = [
  {
    key: 'starter' as const,
    name: 'MB Starter — 29€',
    items: [
      { title: 'Mini-guide MB Système', desc: 'Introduction complète aux 5 piliers du système.' },
      { title: '30 Règles de Comportement', desc: 'Les 30 règles que les bâtisseurs appliquent quotidiennement.' },
      { title: 'Checklist Money Builder', desc: 'Ta checklist hebdomadaire pour rester dans le système.' },
      { title: 'Plan d\'action 7 jours', desc: 'Un plan concret pour démarrer immédiatement.' },
    ],
  },
  {
    key: 'core' as const,
    name: 'MB Core — 97€',
    items: [
      { title: 'Manuel Complet MB Système', desc: 'Le guide référence en 150+ pages sur les 5 piliers.' },
      { title: 'Workbook Interactif', desc: 'Exercices pratiques pour chaque module du système.' },
      { title: '100 Money Moves', desc: '100 actions concrètes classées par impact et difficulté.' },
      { title: 'Scripts de Vente', desc: 'Les scripts pour vendre tes offres en message ou en live.' },
      { title: 'Plan 30 Jours', desc: 'Un calendrier jour par jour pour transformer tes habitudes.' },
      { title: 'Templates Professionnels', desc: 'Modèles d\'offres, de propositions, de bio et de posts.' },
    ],
  },
  {
    key: 'pro' as const,
    name: 'MB Pro — 197€',
    items: [
      { title: 'Tout MB Core inclus', desc: 'L\'intégralité du pack Core.' },
      { title: 'Générateur d\'Offre', desc: 'Outil interactif pour créer ton offre irrésistible en 30 min.' },
      { title: 'Bio Premium', desc: 'Template + guide pour une bio qui convertit instantanément.' },
      { title: 'Scripts DM', desc: 'Scripts de prospection directe pour LinkedIn, Instagram, email.' },
      { title: 'Calendrier de Contenu', desc: '90 jours de contenu planifié pour construire ton audience.' },
      { title: 'Prompts IA Exclusifs', desc: '50+ prompts pour accélérer ta production avec l\'IA.' },
    ],
  },
];

export default function IncludedSection() {
  const [openOffer, setOpenOffer] = useState<string | null>('core');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 border-t border-border bg-soft-dark/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold mb-6">
            Ce qui est inclus
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream mb-4">
            Ce que tu obtiens, exactement.
          </h2>
          <p className="text-gray-text">Pas de flou. Pas de surprise. Voici le contenu précis de chaque offre.</p>
        </motion.div>

        <div className="space-y-4">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                openOffer === offer.key ? 'border-gold/40' : 'border-border'
              } bg-soft-dark`}
            >
              <button
                onClick={() => setOpenOffer(openOffer === offer.key ? null : offer.key)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-cream font-heading font-semibold">{offer.name}</span>
                <span className={`text-gold transition-transform duration-300 ${openOffer === offer.key ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {openOffer === offer.key && (
                <div className="border-t border-border px-5 pb-5">
                  <div className="pt-4 space-y-3">
                    {offer.items.map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <span className="text-gold mt-0.5 flex-shrink-0 text-sm">→</span>
                        <div>
                          <p className="text-cream text-sm font-medium">{item.title}</p>
                          <p className="text-gray-text text-xs mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <CheckoutButton
                      product={offer.key}
                      className="w-full py-3 rounded-lg border border-gold text-gold font-semibold hover:bg-gold hover:text-background transition-all text-sm"
                    >
                      Obtenir {offer.name.split('—')[0].trim()}
                    </CheckoutButton>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
