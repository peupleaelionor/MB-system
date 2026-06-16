'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { mbResources, type MBResource } from '@/lib/resources';

type ProductKey = 'starter' | 'core' | 'pro';
type Locale = 'fr' | 'en';

interface AccessContentProps {
  locale?: Locale;
}

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

export default function AccessContent({ locale = 'fr' }: AccessContentProps) {
  const searchParams = useSearchParams();
  const rawProduct = searchParams.get('product');
  const product = (rawProduct && rawProduct in productMeta) ? rawProduct as ProductKey : null;
  const isFr = locale === 'fr';
  const offresHref = isFr ? '/offres' : '/en/offres';
  const scoreHref = isFr ? '/score' : '/en/score';

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-12 h-12 border border-[#C9A45C]/30 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-gold font-serif font-bold text-xl">MB</span>
          </div>
          <h1 className="font-serif text-cream font-bold text-2xl mb-2">
            {isFr ? 'Accès non trouvé' : 'Access not found'}
          </h1>
          <p className="text-[#A8A29A] mb-6 font-body">
            {isFr ? 'Il semble que ton accès ne soit pas configuré correctement.' : 'Your access doesn\'t seem to be configured correctly.'}
          </p>
          <Link href={offresHref} className="btn-gold px-6 py-3 rounded-lg inline-block">
            {isFr ? 'Voir les offres' : 'See offers'}
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
      {/* Welcome header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green/30 bg-green/5 text-green text-xs font-body font-semibold mb-6">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {isFr ? 'Paiement confirmé' : 'Payment confirmed'}
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-3">
          {isFr ? 'Bienvenue dans' : 'Welcome to'} <span className="gold-text">{meta.name}</span>.
        </h1>
        <p className="text-[#A8A29A] text-lg font-body">{tagline}</p>
        <p className="text-[#A8A29A]/50 text-sm font-body mt-2">
          {isFr ? 'Ton accès est actif. Télécharge tes ressources ci-dessous.' : 'Your access is active. Download your resources below.'}
        </p>
      </motion.div>

      {/* Resources grid */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <h2 className="text-[10px] font-body font-bold tracking-widest text-gold uppercase mb-6">
          {isFr ? `Tes ressources — ${resources.length} éléments` : `Your resources — ${resources.length} items`}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="group premium-card rounded-xl p-3 hover:border-gold/40 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-lg border border-[#C9A45C]/10 mb-3">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                </div>
              </div>
              <div className="px-1">
                <p className="text-[9px] text-gold font-body font-bold tracking-widest uppercase mb-1">{resource.type}</p>
                <p className="text-cream text-xs font-body font-medium leading-snug mb-3">{resource.title}</p>
                <button className="w-full py-2 text-[9px] font-body font-bold tracking-widest uppercase border border-gold/30 text-gold rounded hover:bg-gold hover:text-background transition-all duration-200">
                  {isFr ? '↓ Télécharger' : '↓ Download'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Next steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="premium-card p-8 rounded-2xl mb-8"
      >
        <h3 className="font-serif text-xl font-bold text-cream mb-5">
          {isFr ? 'Par où commencer ?' : 'Where to start?'}
        </h3>
        <ol className="space-y-3">
          {(isFr ? [
            'Commence par le guide principal ou le MB Starter Guide selon ton offre.',
            'Fais le MB Score si ce n\'est pas encore fait — ça guide ta priorité.',
            'Applique ton plan 7 jours ou 30 jours dès aujourd\'hui.',
          ] : [
            'Start with the main manual or the MB Starter Guide based on your offer.',
            'Take the MB Score if you haven\'t yet — it guides your priority.',
            'Apply your 7-day or 30-day plan starting today.',
          ]).map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#A8A29A] font-body">
              <span className="text-gold font-bold mt-0.5 flex-shrink-0">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <Link href={scoreHref} className="text-gold hover:text-champagne text-sm font-body transition-colors">
            {isFr ? 'Faire mon MB Score →' : 'Take my MB Score →'}
          </Link>
        </div>
      </motion.div>

      <p className="text-center text-xs text-[#A8A29A]/40 font-body italic">
        {isFr
          ? 'Tes ressources sont disponibles immédiatement. Accès à vie, aucun abonnement. MB Système ne promet pas de richesse rapide.'
          : 'Your resources are available immediately. Lifetime access, no subscription. MB System does not promise quick wealth.'}
      </p>
    </div>
  );
}
