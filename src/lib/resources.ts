export type ResourceTier = 'starter' | 'core' | 'pro';

export interface MBResource {
  id: string;
  tier: ResourceTier;
  title: string;
  subtitle: string;
  image: string;
  type: string;
  downloadPath: string;
}

export const mbResources: MBResource[] = [
  {
    id: 'starter-guide',
    tier: 'starter',
    title: 'MB Starter Guide',
    subtitle: 'Pose les fondations de ton système',
    image: '/covers/mb-starter-guide.png',
    type: 'Guide',
    downloadPath: '/downloads/mb-starter-guide.pdf',
  },
  {
    id: '30-regles',
    tier: 'starter',
    title: '30 Règles',
    subtitle: 'Millionaire Behavior',
    image: '/covers/30-regles-millionaire-behavior.png',
    type: 'Cartes',
    downloadPath: '/downloads/30-regles-millionaire-behavior.pdf',
  },
  {
    id: 'mb-systeme-manuel',
    tier: 'core',
    title: 'MB SYSTÈME',
    subtitle: 'Le manuel pour construire ton potentiel comme un actif',
    image: '/covers/mb-systeme-manuel.png',
    type: 'Manuel',
    downloadPath: '/downloads/mb-systeme-manuel.pdf',
  },
  {
    id: 'mb-workbook',
    tier: 'core',
    title: 'MB Workbook',
    subtitle: 'Clarifier. Structurer. Construire.',
    image: '/covers/mb-workbook.png',
    type: 'Workbook',
    downloadPath: '/downloads/mb-workbook.pdf',
  },
  {
    id: '100-money-moves',
    tier: 'core',
    title: '100 Money Moves',
    subtitle: 'Idées propres pour créer de la valeur',
    image: '/covers/100-money-moves.png',
    type: 'Bibliothèque',
    downloadPath: '/downloads/100-money-moves.pdf',
  },
  {
    id: 'sales-scripts',
    tier: 'core',
    title: 'MB Sales Scripts',
    subtitle: 'Vendre sans forcer',
    image: '/covers/mb-sales-scripts.png',
    type: 'Scripts',
    downloadPath: '/downloads/mb-sales-scripts.pdf',
  },
  {
    id: 'prompts-ia',
    tier: 'pro',
    title: 'Prompts IA MB',
    subtitle: 'Créer plus vite, penser plus clair',
    image: '/covers/prompts-ia-mb.png',
    type: 'Prompts',
    downloadPath: '/downloads/prompts-ia-mb.pdf',
  },
  {
    id: 'calendrier-contenu',
    tier: 'pro',
    title: 'Calendrier Contenu',
    subtitle: '30 jours pour publier avec système',
    image: '/covers/calendrier-contenu.png',
    type: 'Calendrier',
    downloadPath: '/downloads/calendrier-contenu.pdf',
  },
  {
    id: 'generateur-offre',
    tier: 'pro',
    title: "Générateur d'Offre",
    subtitle: 'Transformer une idée en offre vendable',
    image: '/covers/generateur-offre.png',
    type: 'Template',
    downloadPath: '/downloads/generateur-offre.pdf',
  },
  {
    id: 'kit-internationalisation',
    tier: 'pro',
    title: 'Kit Internationalisation',
    subtitle: 'FR / EN — vendre plus loin',
    image: '/covers/kit-internationalisation.png',
    type: 'Kit',
    downloadPath: '/downloads/kit-internationalisation.pdf',
  },
];

export const starterResources = mbResources.filter(r => r.tier === 'starter');
export const coreResources = mbResources.filter(r => r.tier === 'core');
export const proResources = mbResources.filter(r => r.tier === 'pro');

export const contentFileMap: Record<string, string> = {
  'starter-guide': 'mb-starter-guide',
  '30-regles': '30-regles-millionaire-behavior',
  'mb-systeme-manuel': 'manuel-mb-systeme',
  'mb-workbook': 'mb-workbook',
  '100-money-moves': '100-money-moves',
  'sales-scripts': 'sales-scripts',
  'prompts-ia': 'prompts-ia-mb',
  'calendrier-contenu': 'calendrier-contenu',
  'generateur-offre': 'generateur-offre',
  'kit-internationalisation': 'kit-internationalisation',
};
