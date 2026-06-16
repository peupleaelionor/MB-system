'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CheckoutButton from '@/components/ui/CheckoutButton';

type Locale = 'fr' | 'en';

const copy = {
  fr: {
    label: 'NOS OFFRES',
    heading: 'Choisis ton niveau de',
    headingGold: 'construction.',
    subtitle: 'Le MB Système est un parcours complet qui transforme ton potentiel en un système clair, structuré et vendable.',
    perLifetime: '/ accès à vie',
    noEngagement: 'Sans engagement. Annule quand tu veux.',
    compareOffers: 'Compare les offres',
    included: 'Inclus dans chaque offre',
    promise: 'NOTRE PROMESSE',
    promiseHeading1: "Ce n'est pas un raccourci.",
    promiseHeading2Gold: "C'est un système.",
    promiseBody: "MB Système n'est pas une promesse de richesse rapide. C'est un cadre premium pour bâtir une image forte, créer une offre irréprochable et exécuter avec constance.",
    testimonial: "Le MB Système m'a donné la clarté, la structure et la confiance pour passer de 0 à 5 chiffres.",
    testimonialAuthor: '— Membre MB Core',
    membersCount: '+2 300 membres déjà transformés',
    finalHeading1: 'Ton futur ne se souhaite pas.',
    finalHeading2: 'Il se',
    finalHeading2Gold: 'structure.',
    finalBody: "Rejoins le MB Système et construis la vie, l'image et la liberté que tu mérites.",
    finalCta: 'Choisir mon niveau de construction →',
    finalTrust: '14 jours garantis · Annule à tout moment',
    pillars: [
      { icon: '⬡', label: 'Clarté & Positionnement', desc: 'Sache qui tu es et pourquoi on te choisit toi.' },
      { icon: '◈', label: 'Offre & Conversion', desc: 'Une offre qui transforme et se vend naturellement.' },
      { icon: '⬙', label: 'Système & Exécution', desc: 'Des actions simples. Un système qui tourne pour toi.' },
    ],
    included4: [
      { icon: '📊', title: 'MB Score', desc: 'Ton diagnostic stratégique personnalisé.' },
      { icon: '📚', title: 'Bibliothèque de templates premium', desc: "Prêts à l'emploi et personnalisables." },
      { icon: '🔄', title: 'Mises à jour', desc: 'Accès à vie aux nouvelles ressources.' },
      { icon: '👥', title: 'Communauté privée', desc: 'Échange, entraide et opportunités.' },
    ],
    trust4: [
      { icon: '⚡', title: 'Accès immédiat', desc: "Démarre dès aujourd'hui." },
      { icon: '📊', title: 'Résultats mesurables', desc: 'Un système pensé pour la vraie vie.' },
      { icon: '🔄', title: 'Évolutif', desc: 'Commence petit. Monte en puissance.' },
      { icon: '🛡', title: 'Sécurisé', desc: 'Paiement 100% sécurisé.' },
    ],
    promises: [
      { icon: '✗', title: 'Pas de promesses irréalistes', desc: 'Pas de "deviens riche en 30 jours".' },
      { icon: '⚠', title: 'Travail et constance requis', desc: 'Toi + le système = transformation.' },
      { icon: '✓', title: 'Un chemin clair et éprouvé', desc: 'Des étapes. Des résultats. Répétables.' },
      { icon: '🎯', title: "Pour ceux qui passent à l'action", desc: 'Si tu appliques, tu obtiens.' },
    ],
    comparison: [
      { label: 'Accès au MB Score', starter: true, core: true, pro: true },
      { label: 'Modules de formation', starter: '6 modules', core: '12+ modules', pro: '12+ modules' },
      { label: 'Coaching en groupe', starter: false, core: true, pro: true },
      { label: 'Coaching 1:1', starter: false, core: false, pro: true },
      { label: 'Templates & outils premium', starter: true, core: true, pro: true },
      { label: 'Communauté privée', starter: true, core: true, pro: true },
      { label: 'Suivi & Accountability', starter: false, core: true, pro: true },
      { label: 'Support prioritaire', starter: 'Standard', core: 'Prioritaire', pro: 'VIP' },
    ],
    offers: [
      {
        id: 'starter' as const,
        name: 'MB STARTER',
        price: 29,
        subtitle: "L'essentiel pour poser les fondations solides.",
        badge: null,
        featured: false,
        features: ['Accès au MB Score', 'Modules fondamentaux', 'Templates premium', 'Communauté privée'],
        all: ['Mini-manuel MB', '30 règles Millionaire Behavior', 'Checklist potentiel monétisable', 'Plan 7 jours', 'Fiche "Mon premier système"', 'Guide MB Score', '20 Money Moves simples'],
        cta: 'Choisir Starter',
      },
      {
        id: 'core' as const,
        name: 'MB CORE',
        price: 97,
        subtitle: 'Le système complet pour passer à la vitesse supérieure.',
        badge: 'Le choix des ambitieux',
        featured: true,
        features: ['Tout dans Starter', 'Coaching en groupe hebdo', "Système d'offres & contenus", 'Suivi & accountability', 'Templates avancés'],
        all: ['Manuel complet MB Système', 'MB Workbook complet', '100 Money Moves', 'Scripts de vente', 'Scripts de positionnement', 'Plan 30 jours', "Templates d'offre", 'Guide image premium', 'Guide offre sans audience'],
        cta: 'Choisir MB Core',
      },
      {
        id: 'pro' as const,
        name: 'MB PRO',
        price: 197,
        subtitle: 'Accompagnement premium pour scaler à 6-7 chiffres.',
        badge: null,
        featured: false,
        features: ['Tout dans Core', 'Coaching 1:1 stratégique', 'Plan de croissance sur-mesure', 'Accès prioritaire', 'Mise en relation premium'],
        all: ["Générateur d'offre", 'Générateur de bio premium', 'Scripts DM avancés', 'Calendrier contenu 30 jours', 'Prompts IA MB', 'Modèles landing page', 'Système de lancement 7 jours', 'Kit internationalisation', 'Swipe file hooks FR/EN'],
        cta: 'Choisir MB Pro',
      },
    ],
  },
  en: {
    label: 'OUR OFFERS',
    heading: 'Choose your level of',
    headingGold: 'construction.',
    subtitle: 'MB System is a complete journey that transforms your potential into a clear, structured and sellable system.',
    perLifetime: '/ lifetime access',
    noEngagement: 'No commitment. Cancel anytime.',
    compareOffers: 'Compare offers',
    included: 'Included in every offer',
    promise: 'OUR PROMISE',
    promiseHeading1: "It's not a shortcut.",
    promiseHeading2Gold: "It's a system.",
    promiseBody: "MB System is not a promise of quick wealth. It's a premium framework for building a strong image, creating a flawless offer and executing with consistency.",
    testimonial: "MB System gave me the clarity, structure and confidence to go from 0 to 5 figures.",
    testimonialAuthor: '— MB Core member',
    membersCount: '+2,300 members already transformed',
    finalHeading1: 'Your future is not wished for.',
    finalHeading2: 'It is',
    finalHeading2Gold: 'structured.',
    finalBody: 'Join MB System and build the life, image and freedom you deserve.',
    finalCta: 'Choose my level of construction →',
    finalTrust: '14-day guarantee · Cancel anytime',
    pillars: [
      { icon: '⬡', label: 'Clarity & Positioning', desc: 'Know who you are and why they choose you.' },
      { icon: '◈', label: 'Offer & Conversion', desc: 'An offer that transforms and sells naturally.' },
      { icon: '⬙', label: 'System & Execution', desc: 'Simple actions. A system that runs for you.' },
    ],
    included4: [
      { icon: '📊', title: 'MB Score', desc: 'Your personalized strategic diagnostic.' },
      { icon: '📚', title: 'Premium template library', desc: 'Ready-to-use and customizable.' },
      { icon: '🔄', title: 'Updates', desc: 'Lifetime access to new resources.' },
      { icon: '👥', title: 'Private community', desc: 'Exchange, support and opportunities.' },
    ],
    trust4: [
      { icon: '⚡', title: 'Instant access', desc: 'Start today.' },
      { icon: '📊', title: 'Measurable results', desc: 'A system designed for real life.' },
      { icon: '🔄', title: 'Scalable', desc: 'Start small. Grow in power.' },
      { icon: '🛡', title: 'Secure', desc: '100% secure payment.' },
    ],
    promises: [
      { icon: '✗', title: 'No unrealistic promises', desc: 'No "get rich in 30 days".' },
      { icon: '⚠', title: 'Work and consistency required', desc: 'You + the system = transformation.' },
      { icon: '✓', title: 'A clear and proven path', desc: 'Steps. Results. Repeatable.' },
      { icon: '🎯', title: 'For those who take action', desc: 'If you apply, you get results.' },
    ],
    comparison: [
      { label: 'MB Score access', starter: true, core: true, pro: true },
      { label: 'Training modules', starter: '6 modules', core: '12+ modules', pro: '12+ modules' },
      { label: 'Group coaching', starter: false, core: true, pro: true },
      { label: '1:1 coaching', starter: false, core: false, pro: true },
      { label: 'Premium templates & tools', starter: true, core: true, pro: true },
      { label: 'Private community', starter: true, core: true, pro: true },
      { label: 'Tracking & accountability', starter: false, core: true, pro: true },
      { label: 'Priority support', starter: 'Standard', core: 'Priority', pro: 'VIP' },
    ],
    offers: [
      {
        id: 'starter' as const,
        name: 'MB STARTER',
        price: 29,
        subtitle: 'The essentials to lay solid foundations.',
        badge: null,
        featured: false,
        features: ['MB Score access', 'Core modules', 'Premium templates', 'Private community'],
        all: ['MB mini-manual', '30 Millionaire Behavior rules', 'Monetizable potential checklist', '7-day plan', '"My first system" sheet', 'MB Score guide', '20 simple Money Moves'],
        cta: 'Choose Starter',
      },
      {
        id: 'core' as const,
        name: 'MB CORE',
        price: 97,
        subtitle: 'The complete system to move to the next level.',
        badge: 'The ambitious choice',
        featured: true,
        features: ['Everything in Starter', 'Weekly group coaching', 'Offer & content system', 'Tracking & accountability', 'Advanced templates'],
        all: ['Complete MB System manual', 'Complete MB Workbook', '100 Money Moves', 'Sales scripts', 'Positioning scripts', '30-day plan', 'Offer templates', 'Premium image guide', 'Guide: offer without audience'],
        cta: 'Choose MB Core',
      },
      {
        id: 'pro' as const,
        name: 'MB PRO',
        price: 197,
        subtitle: 'Premium support to scale to 6-7 figures.',
        badge: null,
        featured: false,
        features: ['Everything in Core', 'Strategic 1:1 coaching', 'Custom growth plan', 'Priority access', 'Premium networking'],
        all: ['Offer generator', 'Premium bio generator', 'Advanced DM scripts', '30-day content calendar', 'MB AI prompts', 'Landing page templates', '7-day launch system', 'Internationalization kit', 'Hooks swipe file FR/EN'],
        cta: 'Choose MB Pro',
      },
    ],
  },
};

function CheckIcon({ filled }: { filled?: boolean }) {
  if (!filled) return <span className="text-[#2A2418]">—</span>;
  return (
    <svg className="w-4 h-4 text-gold mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function OffresPage({ locale = 'fr' }: { locale?: Locale }) {
  const t = copy[locale];
  const base = locale === 'en' ? '/en' : '';

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 px-6 lg:px-8 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-6">{t.label}</div>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-cream mb-4 leading-tight">
            {t.heading}{' '}<span className="gold-text">{t.headingGold}</span>
          </h1>
          <p className="text-[#A8A29A] text-lg max-w-xl leading-relaxed">{t.subtitle}</p>
        </div>
      </section>

      <section className="pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {t.pillars.map((p, i) => (
              <div key={i} className="premium-card rounded-xl p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-lg flex-shrink-0">
                  {p.icon}
                </div>
                <div>
                  <div className="text-sm font-body font-semibold gold-text mb-1">{p.label}</div>
                  <p className="text-[#A8A29A] text-xs font-body">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {t.offers.map((offer, i) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl overflow-hidden flex flex-col ${
                  offer.featured ? 'border border-gold/70 shadow-gold' : 'premium-card'
                }`}
                style={offer.featured ? {
                  background: 'linear-gradient(180deg, rgba(201,164,92,0.08) 0%, rgba(17,16,13,1) 100%)',
                } : undefined}
              >
                {offer.badge && (
                  <div className="bg-gold text-background text-[10px] font-body font-bold tracking-widest uppercase text-center py-2.5">
                    ★ {offer.badge}
                  </div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <div className="text-xs font-body font-bold tracking-widest text-cream uppercase mb-2">{offer.name}</div>
                  <p className="text-[#A8A29A] text-xs font-body mb-6">{offer.subtitle}</p>
                  <div className="flex items-end gap-1 mb-6">
                    <span className="text-4xl font-serif font-bold text-cream">€{offer.price}</span>
                    <span className="text-[#A8A29A] text-sm font-body mb-1">{t.perLifetime}</span>
                  </div>
                  <ul className="space-y-2 mb-8 flex-1">
                    {offer.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs font-body text-[#A8A29A]">
                        <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <CheckoutButton
                    product={offer.id}
                    className={`w-full py-3.5 px-6 rounded-lg text-xs font-body font-bold tracking-widest uppercase ${
                      offer.featured ? 'btn-gold' : 'btn-outline-gold'
                    }`}
                  >
                    {offer.cta}
                  </CheckoutButton>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-[#A8A29A]/40 font-body mt-6">{t.noEngagement}</p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="divider-gold mb-12" />
          <h2 className="text-[10px] font-body font-bold tracking-widest text-[#A8A29A] uppercase mb-8">
            {t.compareOffers}
          </h2>
          <div className="premium-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 gap-0">
              <div className="p-4 border-b border-[#2A2418]" />
              {['MB STARTER', 'MB CORE', 'MB PRO'].map((name, i) => (
                <div key={name} className={`p-4 text-center border-b border-[#2A2418] ${i === 1 ? 'bg-gold/5' : ''}`}>
                  <div className="text-xs font-body font-bold tracking-widest text-cream uppercase">{name}</div>
                </div>
              ))}
              {t.comparison.map((row, ri) => (
                <>
                  <div key={`label-${ri}`} className="p-4 text-xs font-body text-[#A8A29A] border-b border-[#2A2418]">
                    {row.label}
                  </div>
                  {(['starter', 'core', 'pro'] as const).map((tier, ti) => (
                    <div key={`${ri}-${tier}`} className={`p-4 text-center border-b border-[#2A2418] ${ti === 1 ? 'bg-gold/5' : ''}`}>
                      {typeof row[tier] === 'boolean' ? (
                        row[tier] ? <CheckIcon filled /> : <CheckIcon />
                      ) : (
                        <span className="text-xs font-body text-cream">{row[tier] as string}</span>
                      )}
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 bg-[#0B0B0B]">
        <div className="divider-gold mb-0" />
        <div className="max-w-7xl mx-auto py-12">
          <h2 className="text-[10px] font-body font-bold tracking-widest text-[#A8A29A] uppercase mb-8">
            {t.included}
          </h2>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {t.included4.map((item) => (
              <div key={item.title} className="premium-card rounded-xl p-4">
                <div className="text-xl mb-3">{item.icon}</div>
                <div className="text-xs font-body font-semibold text-cream mb-1">{item.title}</div>
                <p className="text-[#A8A29A] text-xs font-body">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {t.trust4.map((item) => (
              <div key={item.title} className="flex gap-3 items-start">
                <span className="text-gold text-lg">{item.icon}</span>
                <div>
                  <div className="text-xs font-body font-semibold text-cream mb-0.5">{item.title}</div>
                  <p className="text-[#A8A29A] text-xs font-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-6">{t.promise}</div>
              <h2 className="font-serif text-4xl font-bold text-cream mb-4 leading-tight">
                {t.promiseHeading1}
                <br />
                <span className="gold-text">{t.promiseHeading2Gold}</span>
              </h2>
              <p className="text-[#A8A29A] text-sm font-body leading-relaxed mb-6">{t.promiseBody}</p>
              <div className="grid grid-cols-2 gap-4">
                {t.promises.map((item) => (
                  <div key={item.title} className="premium-card rounded-xl p-4">
                    <div className="text-gold text-sm mb-2">{item.icon}</div>
                    <div className="text-xs font-body font-semibold text-cream mb-1">{item.title}</div>
                    <p className="text-[#A8A29A] text-xs font-body">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="premium-card rounded-2xl p-8 border border-gold/20">
              <div className="text-gold text-4xl font-serif mb-4">&quot;</div>
              <p className="font-serif text-lg text-cream italic leading-relaxed mb-6">{t.testimonial}</p>
              <div className="text-[#A8A29A] text-xs font-body tracking-wider uppercase">{t.testimonialAuthor}</div>
              <div className="divider-gold my-6" />
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#050505] bg-gradient-to-br from-gold/40 to-gold/10" />
                  ))}
                </div>
                <div className="text-[#A8A29A] text-xs font-body">{t.membersCount}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 bg-[#0B0B0B] border-t border-[#2A2418]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-3xl lg:text-4xl font-bold text-cream mb-3">{t.finalHeading1}</p>
          <p className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            {t.finalHeading2} <span className="gold-text">{t.finalHeading2Gold}</span>
          </p>
          <p className="text-[#A8A29A] text-sm font-body mb-8">{t.finalBody}</p>
          <Link href={`${base}/score`} className="btn-gold px-10 py-4 rounded-lg inline-flex items-center gap-2 text-xs">
            {t.finalCta}
          </Link>
          <p className="text-[#A8A29A]/40 text-xs font-body mt-4">{t.finalTrust}</p>
        </div>
      </section>
    </div>
  );
}
