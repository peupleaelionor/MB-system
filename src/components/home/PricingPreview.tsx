'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import CheckoutButton from '@/components/ui/CheckoutButton';

const offers = [
  {
    id: 'starter' as const,
    name: 'MB STARTER',
    price: 29,
    desc: "L'essentiel pour poser les premières fondations.",
    features: [
      'Accès au MB Score',
      'Mini-manuel MB',
      '30 règles Money Builder',
      'Checklist potentiel monétisable',
      'Plan 7 jours',
    ],
    cta: 'Choisir Starter',
    featured: false,
  },
  {
    id: 'core' as const,
    name: 'MB CORE',
    price: 97,
    desc: 'Le système complet pour passer à la vitesse supérieure.',
    badge: 'Le choix des ambitieux',
    features: [
      'Tout dans Starter',
      'Manuel complet MB',
      'Workbook complet',
      '100 Money Moves',
      'Scripts de vente',
      'Plan 30 jours',
      "Templates d'offre",
    ],
    cta: 'Choisir MB Core',
    featured: true,
  },
  {
    id: 'pro' as const,
    name: 'MB PRO',
    price: 197,
    desc: 'Les templates, scripts et outils avancés pour accélérer.',
    features: [
      'Tout dans Core',
      "Générateur d'offre",
      'Générateur de bio premium',
      'Scripts DM avancés',
      'Calendrier contenu 30 jours',
      'Prompts IA MB',
      'Modèles landing page',
    ],
    cta: 'Choisir MB Pro',
    featured: false,
  },
];

const pillars = [
  { label: 'Clarté & Positionnement', desc: 'Sache qui tu es et pourquoi on te choisit toi.' },
  { label: 'Offre & Conversion', desc: 'Une offre qui transforme et se vend naturellement.' },
  { label: 'Système & Exécution', desc: 'Des actions simples. Un système qui tourne pour toi.' },
];

export default function PricingPreview() {
  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="divider-gold absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24"
          >
            <div className="section-label mb-6">NOS OFFRES</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-4 leading-tight">
              Choisis ton niveau de{' '}
              <span className="gold-text">construction.</span>
            </h2>
            <p className="text-[#A8A29A] text-base leading-relaxed mb-10">
              Le MB Système est un parcours complet qui transforme ton potentiel
              en un système clair, structuré et vendable.
            </p>

            <div className="flex flex-col gap-5">
              {pillars.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-body font-semibold gold-text mb-0.5">{item.label}</div>
                    <p className="text-[#A8A29A] text-xs font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {offers.map((offer, i) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-xl overflow-hidden ${
                  offer.featured
                    ? 'border border-gold/60 shadow-gold'
                    : 'premium-card'
                }`}
                style={offer.featured ? {
                  background: 'linear-gradient(180deg, rgba(201,164,92,0.07) 0%, rgba(255,255,255,0.015) 100%)',
                } : undefined}
              >
                {offer.badge && (
                  <div className="bg-gold text-background text-[10px] font-body font-bold tracking-widest uppercase text-center py-2">
                    ★ {offer.badge}
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-xs font-body font-bold tracking-widest text-cream uppercase mb-1">{offer.name}</div>
                      <p className="text-[#A8A29A] text-xs font-body">{offer.desc}</p>
                    </div>
                    <div className="text-3xl font-serif font-bold text-cream ml-4">€{offer.price}</div>
                  </div>

                  <ul className="space-y-1.5 mb-5">
                    {offer.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs font-body text-[#A8A29A]">
                        <svg className="w-3 h-3 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <CheckoutButton
                    product={offer.id}
                    className={`w-full py-3 px-6 rounded-lg text-xs font-body font-bold tracking-widest uppercase ${
                      offer.featured ? 'btn-gold' : 'btn-outline-gold'
                    }`}
                  >
                    {offer.cta}
                  </CheckoutButton>
                </div>
              </motion.div>
            ))}

            <div className="text-center mt-2">
              <Link href="/offres" className="text-xs text-[#A8A29A] hover:text-gold font-body transition-colors">
                Voir la comparaison complète →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
