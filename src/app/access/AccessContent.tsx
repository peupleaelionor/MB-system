'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { mbResources, type MBResource } from '@/lib/resources';

type ProductKey = 'starter' | 'core' | 'pro';
type Locale = 'fr' | 'en';

const copy = {
  fr: {
    notFound: 'Accès non trouvé',
    notFoundBody: "Il semble que ton accès ne soit pas configuré correctement.",
    seeOffers: 'Voir les offres',
    paymentConfirmed: 'Paiement confirmé',
    welcome: 'Bienvenue dans',
    accessActive: "Ton accès est prêt.",
    accessDesc: "Commence par la première ressource, puis avance dans l'ordre.",
    resourcesLabel: (n: number) => `Tes ressources — ${n} éléments`,
    downloadBtn: '↓ Télécharger PDF',
    nextSteps: 'Par où commencer ?',
    steps: [
      'Commence par le guide principal ou le MB Starter Guide selon ton offre.',
      "Fais le MB Score si ce n'est pas encore fait — ça guide ta priorité.",
      "Applique ton plan 7 jours ou 30 jours dès aujourd'hui.",
    ],
    scoreLink: 'Faire mon MB Score →',
    disclaimer: "Tes ressources sont disponibles immédiatement. Accès à vie, aucun abonnement. MB Système ne promet pas de richesse rapide.",
    upsell: {
      starter: {
        heading: 'Prêt à aller plus loin ?',
        body: 'MB Core inclut le manuel complet, le workbook, 100 Money Moves, les scripts de vente et bien plus.',
        cta: 'Passer à MB Core →',
      },
      core: {
        heading: "Débloquer l'arsenal complet",
        body: "MB Pro ajoute les prompts IA, le calendrier contenu 30 jours, le générateur d'offre et le kit internationalisation.",
        cta: 'Passer à MB Pro →',
      },
    },
    upsellLabel: 'NIVEAU SUPÉRIEUR',
    upsellLifetime: 'accès à vie',
    clickDownload: 'Clic → téléchargement PDF immédiat',
    tiers: { starter: 'STARTER', core: 'CORE', pro: 'PRO' },
  },
  en: {
    notFound: 'Access not found',
    notFoundBody: "Your access doesn't seem to be configured correctly.",
    seeOffers: 'See offers',
    paymentConfirmed: 'Payment confirmed',
    welcome: 'Welcome to',
    accessActive: 'Your access is ready.',
    accessDesc: 'Start with the first resource, then work through them in order.',
    resourcesLabel: (n: number) => `Your resources — ${n} items`,
    downloadBtn: '↓ Download PDF',
    nextSteps: 'Where to start?',
    steps: [
      'Start with the main manual or the MB Starter Guide based on your offer.',
      "Take the MB Score if you haven't yet — it guides your priority.",
      'Apply your 7-day or 30-day plan starting today.',
    ],
    scoreLink: 'Take my MB Score →',
    disclaimer: 'Your resources are available immediately. Lifetime access, no subscription. MB System does not promise quick wealth.',
    upsell: {
      starter: {
        heading: 'Ready to go further?',
        body: 'MB Core includes the complete manual, workbook, 100 Money Moves, sales scripts and much more.',
        cta: 'Upgrade to MB Core →',
      },
      core: {
        heading: 'Unlock the complete toolkit',
        body: 'MB Pro adds AI prompts, 30-day content calendar, offer generator and internationalization kit.',
        cta: 'Upgrade to MB Pro →',
      },
    },
    upsellLabel: 'NEXT LEVEL',
    upsellLifetime: 'lifetime access',
    clickDownload: 'Click → instant PDF download',
    tiers: { starter: 'STARTER', core: 'CORE', pro: 'PRO' },
  },
};

const productMeta: Record<ProductKey, { name: string; taglineFr: string; taglineEn: string }> = {
  starter: { name: 'MB Starter', taglineFr: 'Bienvenue dans le système.', taglineEn: 'Welcome to the system.' },
  core: { name: 'MB Core', taglineFr: 'Le système complet est à toi.', taglineEn: 'The full system is yours.' },
  pro: { name: 'MB Pro', taglineFr: "L'arsenal complet pour aller vite.", taglineEn: 'The complete toolkit to move fast.' },
};

const productResources: Record<ProductKey, MBResource[]> = {
  starter: mbResources.filter(r => r.tier === 'starter'),
  core: mbResources.filter(r => r.tier === 'starter' || r.tier === 'core'),
  pro: mbResources,
};

const upsellPrice: Record<'starter' | 'core', { fr: string; en: string }> = {
  starter: { fr: '97€', en: '€97' },
  core: { fr: '197€', en: '€197' },
};

function ResourceCard({
  resource, index, t,
}: {
  resource: MBResource;
  index: number;
  t: typeof copy['fr'];
}) {
  const tierLabel = t.tiers[resource.tier];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.05 }}
      className="group premium-card rounded-xl flex flex-col hover:border-gold/40 transition-all duration-300"
    >
      <div className="overflow-hidden rounded-t-xl border-b border-[#2A2418]">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={resource.image}
            alt={resource.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        </div>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[9px] text-gold font-body font-bold tracking-widest uppercase">{resource.type}</p>
          <span className={`text-[8px] font-body font-bold tracking-widest uppercase px-1.5 py-0.5 rounded border ${
            resource.tier === 'pro'
              ? 'border-gold/50 text-gold'
              : resource.tier === 'core'
              ? 'border-gold/30 text-gold/70'
              : 'border-[#2A2418] text-[#A8A29A]'
          }`}>
            {tierLabel}
          </span>
        </div>

        <p className="text-cream text-xs font-body font-medium leading-snug mb-1 flex-1">{resource.title}</p>
        <p className="text-[#A8A29A] text-[10px] font-body leading-snug mb-3">{resource.subtitle}</p>

        <a
          href={resource.downloadPath}
          download
          className="w-full py-2 text-[9px] font-body font-bold tracking-widest uppercase border border-gold/30 text-gold rounded hover:bg-gold hover:text-background transition-all duration-200 text-center block"
        >
          {t.downloadBtn}
        </a>
      </div>
    </motion.div>
  );
}

export default function AccessContent({ locale = 'fr' }: { locale?: Locale }) {
  const searchParams = useSearchParams();
  const rawProduct = searchParams.get('product');
  const product = (rawProduct && rawProduct in productMeta) ? rawProduct as ProductKey : null;
  const isFr = locale === 'fr';
  const t = copy[locale];
  const offresHref = isFr ? '/offres' : '/en/offres';
  const scoreHref = isFr ? '/score' : '/en/score';

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-12 h-12 border border-[#C9A45C]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-gold font-serif font-bold text-xl">MB</span>
          </div>
          <h1 className="font-serif text-cream font-bold text-2xl mb-2">{t.notFound}</h1>
          <p className="text-[#A8A29A] mb-6 font-body">{t.notFoundBody}</p>
          <Link href={offresHref} className="btn-gold px-6 py-3 rounded-lg inline-block">
            {t.seeOffers}
          </Link>
        </div>
      </div>
    );
  }

  const meta = productMeta[product];
  const resources = productResources[product];
  const tagline = isFr ? meta.taglineFr : meta.taglineEn;

  return (
    <div className="max-w-5xl mx-auto">

      {/* ── Welcome header ─────────────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green/30 bg-green/5 text-green text-xs font-body font-semibold mb-6">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {t.paymentConfirmed}
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-3">
          {t.welcome} <span className="gold-text">{meta.name}</span>.
        </h1>
        <p className="text-[#A8A29A] text-lg font-body mb-4">{tagline}</p>

        {/* Access ready notice */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#11100D] border border-gold/20 rounded-xl">
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
          <p className="text-cream text-sm font-body font-medium">{t.accessActive}</p>
        </div>
        <p className="text-[#A8A29A]/50 text-sm font-body mt-2">{t.accessDesc}</p>
      </motion.div>

      {/* ── Resource library ───────────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[10px] font-body font-bold tracking-widest text-gold uppercase">
            {t.resourcesLabel(resources.length)}
          </h2>
          <span className="text-[10px] text-[#A8A29A]/40 font-body hidden sm:block">
            {t.clickDownload}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {resources.map((resource, i) => (
            <ResourceCard key={resource.id} resource={resource} index={i} t={t} />
          ))}
        </div>
      </motion.div>

      {/* ── Upsell ─────────────────────────────────────────────────────── */}
      {product !== 'pro' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="border border-gold/40 rounded-2xl overflow-hidden mb-8"
          style={{ background: 'linear-gradient(135deg, rgba(201,164,92,0.06) 0%, rgba(17,16,13,1) 100%)' }}
        >
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-[10px] font-body font-bold tracking-widest text-gold uppercase">
                    {t.upsellLabel}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-cream mb-2">
                  {t.upsell[product as 'starter' | 'core'].heading}
                </h3>
                <p className="text-[#A8A29A] text-sm font-body leading-relaxed">
                  {t.upsell[product as 'starter' | 'core'].body}
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold gold-text">
                    {upsellPrice[product as 'starter' | 'core'][isFr ? 'fr' : 'en']}
                  </div>
                  <div className="text-[10px] text-[#A8A29A] font-body">{t.upsellLifetime}</div>
                </div>
                <Link
                  href={offresHref}
                  className="btn-gold px-6 py-3 rounded-lg text-xs font-body font-bold tracking-widest uppercase whitespace-nowrap inline-flex items-center gap-2"
                >
                  {t.upsell[product as 'starter' | 'core'].cta}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ── Next steps ──────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="premium-card p-8 rounded-2xl mb-8"
      >
        <h3 className="font-serif text-xl font-bold text-cream mb-5">{t.nextSteps}</h3>
        <ol className="space-y-3">
          {t.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#A8A29A] font-body">
              <span className="text-gold font-bold mt-0.5 flex-shrink-0">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <Link href={scoreHref} className="text-gold hover:text-champagne text-sm font-body transition-colors">
            {t.scoreLink}
          </Link>
        </div>
      </motion.div>

      {/* ── Disclaimer ──────────────────────────────────────────────────── */}
      <p className="text-center text-xs text-[#A8A29A]/40 font-body italic">
        {t.disclaimer}
      </p>
    </div>
  );
}
