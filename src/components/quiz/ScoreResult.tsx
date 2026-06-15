'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { computeScores, getProfile } from '@/lib/scoring';
import type { Category } from '@/lib/scoring';
import CheckoutButton from '@/components/ui/CheckoutButton';

const categoryLabels: Record<Category, string> = {
  mental: 'Mental',
  offer: 'Offre',
  image: 'Image',
  action: 'Action',
  clarity: 'Clarté',
};

const categoryColors: Record<Category, string> = {
  mental: 'bg-purple-500',
  offer: 'bg-blue-500',
  image: 'bg-gold',
  action: 'bg-green',
  clarity: 'bg-champagne',
};

export default function ScoreResult() {
  const searchParams = useSearchParams();
  const encoded = searchParams.get('data');

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
          <p className="text-gray-text mb-4">Résultat non trouvé.</p>
          <Link href="/score" className="text-gold hover:text-champagne transition-colors">
            Refaire le diagnostic
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold mb-4">
            Ton profil Money Builder
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-cream mb-3">
            {profile.name}
          </h1>
          <p className="text-gold text-lg font-medium mb-4">{profile.tagline}</p>
          <p className="text-gray-text leading-relaxed">{profile.description}</p>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-6 border border-gold/20 rounded-xl bg-soft-dark text-center"
        >
          <p className="text-gray-text text-sm mb-2">Score MB Global</p>
          <div className="text-6xl font-heading font-bold gold-gradient mb-1">{overallScore}</div>
          <p className="text-gray-text text-xs">/ 100</p>
        </motion.div>

        {/* Category Scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-6 border border-border rounded-xl bg-soft-dark"
        >
          <h2 className="text-cream font-heading font-semibold mb-6">Analyse par dimension</h2>
          <div className="space-y-4">
            {(Object.entries(scores) as [Category, number][]).map(([cat, score], i) => (
              <div key={cat}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-cream text-sm">{categoryLabels[cat]}</span>
                  <span className="text-gold text-sm font-medium">{score}%</span>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
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

        {/* Strengths & Improvements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
          <div className="p-5 border border-green/20 rounded-xl bg-soft-dark">
            <h3 className="text-green text-sm font-semibold mb-3">Tes forces</h3>
            <ul className="space-y-1">
              {profile.strengths.map((s) => (
                <li key={s} className="text-cream text-sm flex items-center gap-2">
                  <span className="text-green">+</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 border border-gold/20 rounded-xl bg-soft-dark">
            <h3 className="text-gold text-sm font-semibold mb-3">À travailler</h3>
            <ul className="space-y-1">
              {profile.improvements.map((s) => (
                <li key={s} className="text-cream text-sm flex items-center gap-2">
                  <span className="text-gold">→</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 border border-gold/30 rounded-xl bg-soft-dark text-center"
        >
          <h2 className="text-cream font-heading font-bold text-xl mb-2">
            {profile.recommendation === 'starter' ? 'Commence avec MB Starter' :
             profile.recommendation === 'pro' ? 'Passe au niveau supérieur avec MB Pro' :
             'MB Core est fait pour toi'}
          </h2>
          <p className="text-gray-text text-sm mb-6">
            Basé sur ton profil, voici le produit qui va transformer tes comportements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CheckoutButton
              product={profile.recommendation}
              className="px-6 py-3 bg-gold text-background font-semibold rounded-lg hover:bg-champagne transition-colors"
            >
              {profile.recommendation === 'starter' ? 'Obtenir MB Starter — 29€' :
               profile.recommendation === 'pro' ? 'Obtenir MB Pro — 197€' :
               'Obtenir MB Core — 97€'}
            </CheckoutButton>
            <Link
              href="/pricing"
              className="px-6 py-3 border border-border text-gray-text rounded-lg hover:text-cream hover:border-gold/40 transition-all text-center"
            >
              Voir toutes les offres
            </Link>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <Link href="/score" className="text-gray-text hover:text-cream text-sm transition-colors">
            Refaire le diagnostic
          </Link>
        </div>
      </div>
    </div>
  );
}
