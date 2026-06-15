export type Category = 'mental' | 'offer' | 'image' | 'action' | 'clarity';

export interface Scores {
  mental: number;
  offer: number;
  image: number;
  action: number;
  clarity: number;
}

export interface Profile {
  name: string;
  tagline: string;
  description: string;
  strengths: string[];
  improvements: string[];
  recommendation: 'starter' | 'core' | 'pro';
}

export const questions = [
  {
    id: 1,
    question: "Quand tu veux gagner plus, ton premier réflexe est :",
    answers: [
      { label: "Chercher un meilleur job", key: 'a' },
      { label: "Chercher une nouvelle idée", key: 'b' },
      { label: "Vendre une compétence que j'ai déjà", key: 'c' },
      { label: "Attendre d'être prêt", key: 'd' },
    ],
  },
  {
    id: 2,
    question: "Ton plus gros blocage aujourd'hui :",
    answers: [
      { label: "Je ne sais pas quoi vendre", key: 'a' },
      { label: "Je manque de confiance", key: 'b' },
      { label: "Je ne sais pas me présenter", key: 'c' },
      { label: "Je commence mais je ne termine pas", key: 'd' },
    ],
  },
  {
    id: 3,
    question: "Si on regarde ton profil en ligne, on comprend :",
    answers: [
      { label: "Très clairement ce que je fais", key: 'a' },
      { label: "À peu près ce que je fais", key: 'b' },
      { label: "Pas vraiment ce que je fais", key: 'c' },
      { label: "Rien — je n'ai pas d'image claire", key: 'd' },
    ],
  },
  {
    id: 4,
    question: "Tu as déjà essayé de vendre une offre ?",
    answers: [
      { label: "Oui, plusieurs fois avec succès", key: 'a' },
      { label: "Oui, mais sans structure claire", key: 'b' },
      { label: "Non, mais j'aimerais le faire", key: 'c' },
      { label: "Je ne sais même pas quoi vendre", key: 'd' },
    ],
  },
  {
    id: 5,
    question: "Quand tu as une idée :",
    answers: [
      { label: "Je teste rapidement, j'ajuste ensuite", key: 'a' },
      { label: "Je réfléchis longtemps avant d'agir", key: 'b' },
      { label: "Je l'abandonne souvent", key: 'c' },
      { label: "J'en parle mais je ne la lance pas", key: 'd' },
    ],
  },
  {
    id: 6,
    question: "Ton niveau de clarté sur l'argent :",
    answers: [
      { label: "Je sais exactement mon objectif financier", key: 'a' },
      { label: "J'ai une idée vague", key: 'b' },
      { label: "Je suis perdu sur le sujet", key: 'c' },
      { label: "Je veux juste gagner plus, sans plan précis", key: 'd' },
    ],
  },
  {
    id: 7,
    question: "Ton rapport à l'image professionnelle :",
    answers: [
      { label: "Je sais me positionner et me présenter", key: 'a' },
      { label: "Je peux largement mieux faire", key: 'b' },
      { label: "Je n'ose pas trop me montrer", key: 'c' },
      { label: "Je n'ai pas travaillé mon image du tout", key: 'd' },
    ],
  },
];

type AnswerKey = 'a' | 'b' | 'c' | 'd';
type ScoreMap = Partial<Record<Category, number>>;

const scoringMap: Record<number, Record<AnswerKey, ScoreMap>> = {
  1: {
    a: { mental: 1 },
    b: { offer: 2, mental: 1 },
    c: { offer: 3 },
    d: { mental: -1 },
  },
  2: {
    a: { offer: 0, clarity: 1 },
    b: { mental: 1 },
    c: { image: 1 },
    d: { action: 1 },
  },
  3: {
    a: { image: 3 },
    b: { image: 2 },
    c: { image: 1 },
    d: { image: 0 },
  },
  4: {
    a: { offer: 3 },
    b: { offer: 2 },
    c: { offer: 1 },
    d: { clarity: 0 },
  },
  5: {
    a: { action: 3 },
    b: { mental: 2 },
    c: { action: 0 },
    d: { action: 1 },
  },
  6: {
    a: { clarity: 3 },
    b: { clarity: 2 },
    c: { clarity: 0 },
    d: { clarity: 1 },
  },
  7: {
    a: { image: 3 },
    b: { image: 2 },
    c: { image: 1 },
    d: { image: 0 },
  },
};

export function computeScores(answers: Record<number, AnswerKey>): Scores {
  const scores: Scores = { mental: 0, offer: 0, image: 0, action: 0, clarity: 0 };

  Object.entries(answers).forEach(([qId, answer]) => {
    const qNum = parseInt(qId);
    const scoreMap = scoringMap[qNum]?.[answer];
    if (scoreMap) {
      Object.entries(scoreMap).forEach(([cat, pts]) => {
        scores[cat as Category] += pts;
      });
    }
  });

  // Normalize to 0-100
  const maxPerCategory = 3;
  const questionCounts: Record<Category, number> = {
    mental: 3,
    offer: 3,
    image: 3,
    action: 2,
    clarity: 3,
  };

  const normalized: Scores = { mental: 0, offer: 0, image: 0, action: 0, clarity: 0 };
  (Object.keys(scores) as Category[]).forEach((cat) => {
    const max = maxPerCategory * questionCounts[cat];
    normalized[cat] = Math.max(0, Math.round((scores[cat] / max) * 100));
  });

  return normalized;
}

export function getProfile(scores: Scores): Profile {
  const sorted = (Object.entries(scores) as [Category, number][]).sort(([, a], [, b]) => b - a);
  const top = sorted[0][0];
  const second = sorted[1][0];
  const avg = Object.values(scores).reduce((a, b) => a + b, 0) / 5;

  const profiles: Record<string, Profile> = {
    strategic: {
      name: "Le Stratège",
      tagline: "Tu penses juste. Tu dois passer à l'action.",
      description: "Tu as un mental solide et une vraie clarté sur tes objectifs. Ta réflexion est structurée, tu sais ce que tu veux. Ce qui te freine ? Passer à l'exécution concrète et construire ton offre.",
      strengths: ["Mental fort", "Clarté financière", "Vision long terme"],
      improvements: ["Construire une offre concrète", "Accélérer l'exécution", "Affirmer ton image"],
      recommendation: 'core',
    },
    creator: {
      name: "Le Créateur",
      tagline: "Tu déborderdes d'idées. Il te faut une structure.",
      description: "Tu génères des idées en permanence. Tu as l'énergie créative. Mais sans système pour structurer et monétiser tes idées, elles restent dans ta tête. Il est temps de construire une offre claire.",
      strengths: ["Créativité", "Vision", "Énergie"],
      improvements: ["Structurer une offre", "Créer un système de vente", "Prioriser et exécuter"],
      recommendation: 'core',
    },
    seller: {
      name: "Le Vendeur",
      tagline: "Tu sais convaincre. Il te faut un système.",
      description: "Tu as le relationnel, tu sais te présenter, tu crées de la confiance naturellement. Ce qui te manque : une structure solide pour convertir cette énergie en revenus récurrents.",
      strengths: ["Image forte", "Relationnel", "Confiance"],
      improvements: ["Structurer les offres", "Systématiser la vente", "Clarifier les objectifs financiers"],
      recommendation: 'pro',
    },
    builder: {
      name: "Le Bâtisseur",
      tagline: "Tu agis. Il te faut la bonne direction.",
      description: "Tu es dans l'action, tu n'as pas peur de te lancer. Mais parfois tu construis sans stratégie claire. Avec la bonne structure, ton énergie peut produire des résultats exponentiels.",
      strengths: ["Action", "Exécution", "Persévérance"],
      improvements: ["Stratégie d'offre", "Image professionnelle", "Clarté financière"],
      recommendation: 'core',
    },
    connector: {
      name: "Le Connecteur",
      tagline: "Tu attires les gens. Il te faut une offre.",
      description: "Les gens t'aiment et te font confiance. Tu as une présence naturelle. Ce qui te bloque : tu n'as pas encore une offre claire à leur proposer. C'est le chaînon manquant.",
      strengths: ["Présence", "Image", "Réseau"],
      improvements: ["Clarifier l'offre", "Structurer la valeur", "Créer des revenus systématiques"],
      recommendation: 'core',
    },
    visionary: {
      name: "Le Visionnaire",
      tagline: "Tu vois grand. Il te faut l'exécution.",
      description: "Tu as une vision claire, un mental de fer, des idées qui peuvent changer ta vie. Mais tu restes au niveau de l'idée. L'exécution est ton talon d'Achille — et MB Système est fait pour ça.",
      strengths: ["Vision", "Mental", "Ambition"],
      improvements: ["Passer à l'exécution", "Construire une offre", "Systématiser les actions"],
      recommendation: 'pro',
    },
    executor: {
      name: "L'Exécutant",
      tagline: "Tu fais. Il te faut la stratégie.",
      description: "Tu n'as pas peur du travail. Tu avances, tu exécutes, tu livres. Mais sans stratégie claire, tu travailles beaucoup pour des résultats limités. Le bon système peut multiplier ton impact.",
      strengths: ["Exécution", "Discipline", "Fiabilité"],
      improvements: ["Développer la stratégie", "Construire une image forte", "Clarifier les objectifs"],
      recommendation: 'starter',
    },
  };

  // Profile matching logic
  if (top === 'mental' && second === 'clarity') return profiles.strategic;
  if (top === 'mental' && second === 'offer') return profiles.visionary;
  if (top === 'offer' && scores.mental < 40) return profiles.creator;
  if (top === 'image' && second === 'action') return profiles.seller;
  if (top === 'image' && second === 'clarity') return profiles.connector;
  if (top === 'action' && scores.offer < 40) return profiles.builder;
  if (top === 'action' && scores.mental < 40) return profiles.executor;
  if (avg < 35) return profiles.creator;
  if (top === 'clarity') return profiles.strategic;
  if (top === 'image') return profiles.connector;

  return profiles.builder;
}

export function encodeAnswers(answers: Record<number, string>): string {
  return Buffer.from(JSON.stringify(answers)).toString('base64');
}

export function decodeAnswers(encoded: string): Record<number, string> {
  try {
    return JSON.parse(Buffer.from(encoded, 'base64').toString('utf-8'));
  } catch {
    return {};
  }
}
