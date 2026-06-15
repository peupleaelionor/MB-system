'use client';

import { motion } from 'framer-motion';
import CheckoutButton from '@/components/ui/CheckoutButton';

const plans = [
  {
    key: 'starter' as const,
    name: 'MB Starter',
    price: '29€',
    tagline: 'Pour commencer proprement',
    description: 'Les bases du système pour démarrer immédiatement avec les bons comportements.',
    features: [
      { title: 'Mini-guide MB Système', desc: 'Introduction complète aux 5 piliers' },
      { title: '30 Règles de Comportement', desc: 'Les règles des bâtisseurs au quotidien' },
      { title: 'Checklist Money Builder', desc: 'Ta checklist hebdomadaire' },
      { title: 'Plan d\'action 7 jours', desc: 'Démarre immédiatement avec un plan concret' },
    ],
    highlighted: false,
    cta: 'Obtenir MB Starter',
  },
  {
    key: 'core' as const,
    name: 'MB Core',
    price: '97€',
    tagline: 'Le système complet',
    badge: 'Recommandé',
    description: 'Le programme complet pour transformer tes comportements en 30 jours.',
    features: [
      { title: 'Manuel Complet MB Système', desc: '150+ pages sur les 5 piliers' },
      { title: 'Workbook Interactif', desc: 'Exercices pratiques par module' },
      { title: '100 Money Moves', desc: '100 actions classées par impact' },
      { title: 'Scripts de Vente', desc: 'Scripts pour vendre tes offres' },
      { title: 'Plan 30 Jours', desc: 'Calendrier de transformation complet' },
      { title: 'Templates Professionnels', desc: 'Offres, propositions, bio, posts' },
    ],
    highlighted: true,
    cta: 'Obtenir MB Core',
  },
  {
    key: 'pro' as const,
    name: 'MB Pro',
    price: '197€',
    tagline: 'Pour passer au niveau supérieur',
    description: 'Tout Core plus les outils avancés pour accélérer ton exécution.',
    features: [
      { title: 'Tout MB Core inclus', desc: 'L\'intégralité du pack Core' },
      { title: 'Générateur d\'Offre', desc: 'Crée ton offre en 30 minutes' },
      { title: 'Bio Premium', desc: 'Template + guide de conversion' },
      { title: 'Scripts DM', desc: 'Prospection LinkedIn, Instagram, email' },
      { title: 'Calendrier Contenu 90j', desc: 'Contenu planifié pour 3 mois' },
      { title: '50+ Prompts IA', desc: 'Accélère ta production avec l\'IA' },
    ],
    highlighted: false,
    cta: 'Obtenir MB Pro',
  },
];

export default function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`relative rounded-xl p-6 flex flex-col ${
            plan.highlighted
              ? 'border border-gold bg-soft-dark shadow-[0_0_40px_rgba(201,164,92,0.12)]'
              : 'border border-border bg-soft-dark'
          }`}
        >
          {plan.badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-background text-xs font-bold rounded-full whitespace-nowrap">
              {plan.badge}
            </div>
          )}

          <div className="mb-6">
            <h3 className={`font-heading font-bold text-xl mb-1 ${plan.highlighted ? 'text-cream' : 'text-cream'}`}>
              {plan.name}
            </h3>
            <p className="text-gray-text text-sm mb-4">{plan.tagline}</p>
            <div className="flex items-baseline gap-1 mb-3">
              <span className={`text-5xl font-heading font-bold ${plan.highlighted ? 'gold-gradient' : 'text-cream'}`}>
                {plan.price}
              </span>
              <span className="text-gray-text text-sm">/ une fois</span>
            </div>
            <p className="text-gray-text text-xs">{plan.description}</p>
          </div>

          <div className="flex-grow mb-6">
            <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">Ce qui est inclus</p>
            <ul className="space-y-3">
              {plan.features.map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <span className="text-gold text-sm mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <p className="text-cream text-sm font-medium">{f.title}</p>
                    <p className="text-gray-text text-xs">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <CheckoutButton
            product={plan.key}
            className={`w-full py-3.5 rounded-lg font-semibold transition-all duration-200 ${
              plan.highlighted
                ? 'bg-gold text-background hover:bg-champagne'
                : 'border border-border text-cream hover:border-gold/40 hover:text-gold'
            }`}
          >
            {plan.cta}
          </CheckoutButton>
        </motion.div>
      ))}
    </div>
  );
}
