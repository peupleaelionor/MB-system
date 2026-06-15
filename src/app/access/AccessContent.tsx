'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ProductKey = 'starter' | 'core' | 'pro';

const products: Record<ProductKey, {
  name: string;
  tagline: string;
  files: { title: string; desc: string; type: string }[];
}> = {
  starter: {
    name: 'MB Starter',
    tagline: 'Bienvenue dans le système.',
    files: [
      { title: 'Mini-guide MB Système', desc: 'Introduction aux 5 piliers du système', type: 'PDF' },
      { title: '30 Règles de Comportement', desc: 'Les règles des bâtisseurs au quotidien', type: 'PDF' },
      { title: 'Checklist Money Builder', desc: 'Ta checklist hebdomadaire à imprimer', type: 'PDF' },
      { title: 'Plan d\'Action 7 Jours', desc: 'Ton plan de démarrage immédiat', type: 'PDF' },
    ],
  },
  core: {
    name: 'MB Core',
    tagline: 'Le système complet est à toi.',
    files: [
      { title: 'Manuel Complet MB Système', desc: '150+ pages sur les 5 piliers', type: 'PDF' },
      { title: 'Workbook Interactif', desc: 'Exercices et templates par module', type: 'PDF' },
      { title: '100 Money Moves', desc: '100 actions classées par impact', type: 'PDF' },
      { title: 'Scripts de Vente', desc: 'Scripts pour vendre tes offres', type: 'PDF' },
      { title: 'Plan 30 Jours', desc: 'Calendrier de transformation complet', type: 'PDF' },
      { title: 'Templates Professionnels', desc: 'Modèles offres, bio, posts', type: 'ZIP' },
    ],
  },
  pro: {
    name: 'MB Pro',
    tagline: 'L\'arsenal complet pour aller vite.',
    files: [
      { title: 'Manuel Complet MB Système', desc: '150+ pages sur les 5 piliers', type: 'PDF' },
      { title: 'Workbook Interactif', desc: 'Exercices et templates par module', type: 'PDF' },
      { title: '100 Money Moves', desc: '100 actions classées par impact', type: 'PDF' },
      { title: 'Scripts de Vente', desc: 'Scripts pour vendre tes offres', type: 'PDF' },
      { title: 'Plan 30 Jours', desc: 'Calendrier de transformation complet', type: 'PDF' },
      { title: 'Templates Professionnels', desc: 'Modèles offres, bio, posts', type: 'ZIP' },
      { title: 'Générateur d\'Offre', desc: 'Outil pour créer ton offre en 30 min', type: 'PDF' },
      { title: 'Bio Premium', desc: 'Template et guide de conversion', type: 'PDF' },
      { title: 'Scripts DM', desc: 'Prospection LinkedIn, Instagram, email', type: 'PDF' },
      { title: 'Calendrier Contenu 90 Jours', desc: 'Contenu planifié pour 3 mois', type: 'PDF' },
      { title: '50+ Prompts IA', desc: 'Accélère ta production avec l\'IA', type: 'PDF' },
    ],
  },
};

export default function AccessContent() {
  const searchParams = useSearchParams();
  const rawProduct = searchParams.get('product');
  const product = (rawProduct && rawProduct in products) ? rawProduct as ProductKey : null;

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-12 h-12 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-400 text-xl">!</span>
          </div>
          <h1 className="text-cream font-heading font-bold text-2xl mb-2">Accès non trouvé</h1>
          <p className="text-gray-text mb-6">Il semble que ton accès ne soit pas configuré correctement.</p>
          <Link href="/pricing" className="px-6 py-3 bg-gold text-background font-semibold rounded-lg hover:bg-champagne transition-colors">
            Voir les offres
          </Link>
        </div>
      </div>
    );
  }

  const productData = products[product];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="w-16 h-16 border border-gold/40 rounded-xl flex items-center justify-center mx-auto mb-4">
          <span className="text-gold text-2xl font-heading font-bold">MB</span>
        </div>
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-green/30 bg-green/5 text-green text-xs font-semibold mb-4">
          ✓ Paiement confirmé
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-cream mb-2">
          {productData.name} activé
        </h1>
        <p className="text-gray-text text-lg">{productData.tagline}</p>
      </motion.div>

      {/* Files */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-cream font-heading font-semibold text-sm uppercase tracking-wider mb-4">
          Tes ressources — {productData.files.length} éléments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {productData.files.map((file, i) => (
            <motion.div
              key={file.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="flex items-center justify-between p-4 border border-border rounded-xl bg-soft-dark hover:border-gold/30 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xs font-bold">{file.type}</span>
                </div>
                <div>
                  <p className="text-cream text-sm font-medium">{file.title}</p>
                  <p className="text-gray-text text-xs">{file.desc}</p>
                </div>
              </div>
              <button className="text-gold/40 group-hover:text-gold transition-colors flex-shrink-0 ml-2">
                ↓
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Next steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 p-6 border border-gold/20 rounded-xl bg-soft-dark"
      >
        <h3 className="text-cream font-heading font-semibold mb-4">Par où commencer ?</h3>
        <ol className="space-y-2">
          <li className="flex items-start gap-3 text-sm text-gray-text">
            <span className="text-gold font-bold mt-0.5 flex-shrink-0">1.</span>
            Commence par le guide principal ou le mini-guide selon ton offre.
          </li>
          <li className="flex items-start gap-3 text-sm text-gray-text">
            <span className="text-gold font-bold mt-0.5 flex-shrink-0">2.</span>
            Fais le MB Score si ce n&apos;est pas encore fait — ça guide ta priorité.
          </li>
          <li className="flex items-start gap-3 text-sm text-gray-text">
            <span className="text-gold font-bold mt-0.5 flex-shrink-0">3.</span>
            Applique ton plan 7 jours ou 30 jours dès aujourd&apos;hui.
          </li>
        </ol>
        <div className="mt-4">
          <Link href="/score" className="text-gold hover:text-champagne text-sm transition-colors">
            Faire mon MB Score →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
