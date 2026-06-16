'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { computeScores, getProfile } from '@/lib/scoring';
import type { Category } from '@/lib/scoring';
import CheckoutButton from '@/components/ui/CheckoutButton';

type Locale = 'fr' | 'en';

const categoryLabels: Record<Locale, Record<Category, string>> = {
  fr: { mental: 'Mental', offer: 'Offre', image: 'Image', action: 'Action', clarity: 'Clarté' },
  en: { mental: 'Mental', offer: 'Offer', image: 'Image', action: 'Action', clarity: 'Clarity' },
};

const categoryColors: Record<Category, string> = {
  mental: 'bg-purple-500',
  offer: 'bg-blue-500',
  image: 'bg-gold',
  action: 'bg-green',
  clarity: 'bg-champagne',
};

const copy = {
  fr: {
    profileBadge: 'Ton profil Money Builder',
    globalScore: 'Score MB Global',
    dimensions: 'Analyse par dimension',
    strengths: 'Tes forces',
    improvements: 'À travailler',
    rec: (r: string) => r === 'starter' ? 'Commence avec MB Starter' : r === 'pro' ? 'Passe au niveau supérieur avec MB Pro' : 'MB Core est fait pour toi',
    recBody: 'Basé sur ton profil, voici le produit qui va transformer tes comportements.',
    cta: (r: string) => r === 'starter' ? 'Obtenir MB Starter — 29€' : r === 'pro' ? 'Obtenir MB Pro — 197€' : 'Obtenir MB Core — 97€',
    seeOffers: 'Voir toutes les offres',
    redo: 'Refaire le diagnostic',
    notFound: 'Résultat non trouvé.',
  },
  en: {
    profileBadge: 'Your Money Builder profile',
    globalScore: 'Global MB Score',
    dimensions: 'Analysis by dimension',
    strengths: 'Your strengths',
    improvements: 'To work on',
    rec: (r: string) => r === 'starter' ? 'Start with MB Starter' : r === 'pro' ? 'Level up with MB Pro' : 'MB Core is made for you',
    recBody: 'Based on your profile, here is the product that will transform your behaviors.',
    cta: (r: string) => r === 'starter' ? 'Get MB Starter — €29' : r === 'pro' ? 'Get MB Pro — €197' : 'Get MB Core — €97',
    seeOffers: 'See all offers',
    redo: 'Redo the diagnostic',
    notFound: 'Result not found.',
  },
};

export default function ScoreResult({ locale = 'fr' }: { locale?: Locale }) {
  const searchParams = useSearchParams();
  const encoded = searchParams.get('data');
  const t = copy[locale];
  const base = locale === 'en' ? '/en' : '';

  const { scores, profile } = useMemo(() => {
    if (!encoded) return { scores: null, profile: null };
    try {
      const answers = JSON.parse(atob(encoded));
      const scores = computeScores(answers);
      const profile = getProfile(scores);
      return { scores, profile };
    } catch {
      return { scores: null, profile: null };
    }
  }, [encoded]);

  const overallScore = scores
    ? Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / 5)
    : 0;

  if (!scores || !profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#A8A29A] mb-4">{t.notFound}</p>
          <Link href={`${base}/score`} className="text-gold hover:text-champagne transition-colors">
            {t.redo}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold mb-4">
            {t.profileBadge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream mb-3">
            {profile.name}
          </h1>
          <p className="text-gold text-lg font-medium mb-4">{profile.tagline}</p>
          <p className="text-[#A8A29A] leading-relaxed">{profile.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-6 border border-gold/20 rounded-xl bg-[#11100D] text-center"
        >
          <p className="text-[#A8A29A] text-sm mb-2">{t.globalScore}</p>
          <div className="text-6xl font-serif font-bold gold-text mb-1">{overallScore}</div>
          <p className="text-[#A8A29A] text-xs">/ 100</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-6 border border-[#2A2418] rounded-xl bg-[#11100D]"
        >
          <h2 className="text-cream font-serif font-semibold mb-6">{t.dimensions}</h2>
          <div className="space-y-4">
            {(Object.entries(scores) as [Category, number][]).map(([cat, score], i) => (
              <div key={cat}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-cream text-sm">{categoryLabels[locale][cat]}</span>
                  <span className="text-gold text-sm font-medium">{score}%</span>
                </div>
                <div className="h-2 bg-[#2A2418] rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${categoryColors[cat]}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
          <div className="p-5 border border-green/20 rounded-xl bg-[#11100D]">
            <h3 className="text-green text-sm font-semibold mb-3">{t.strengths}</h3>
            <ul className="space-y-1">
              {profile.strengths.map((s) => (
                <li key={s} className="text-cream text-sm flex items-center gap-2">
                  <span className="text-green">+</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 border border-gold/20 rounded-xl bg-[#11100D]">
            <h3 className="text-gold text-sm font-semibold mb-3">{t.improvements}</h3>
            <ul className="space-y-1">
              {profile.improvements.map((s) => (
                <li key={s} className="text-cream text-sm flex items-center gap-2">
                  <span className="text-gold">→</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 border border-gold/30 rounded-xl bg-[#11100D] text-center"
        >
          <h2 className="text-cream font-serif font-bold text-xl mb-2">
            {t.rec(profile.recommendation)}
          </h2>
          <p className="text-[#A8A29A] text-sm mb-6">{t.recBody}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CheckoutButton
              product={profile.recommendation}
              className="px-6 py-3 bg-gold text-background font-semibold rounded-lg hover:bg-champagne transition-colors"
            >
              {t.cta(profile.recommendation)}
            </CheckoutButton>
            <Link
              href={`${base}/offres`}
              className="px-6 py-3 border border-[#2A2418] text-[#A8A29A] rounded-lg hover:text-cream hover:border-gold/40 transition-all text-center"
            >
              {t.seeOffers}
            </Link>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <Link href={`${base}/score`} className="text-[#A8A29A] hover:text-cream text-sm transition-colors">
            {t.redo}
          </Link>
        </div>
      </div>
    </div>
  );
}
