import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export const PRODUCTS = {
  starter: {
    name: 'MB Starter',
    price: 2900,
    description: 'Mini-guide, 30 règles, checklist, plan 7 jours',
  },
  core: {
    name: 'MB Core',
    price: 9700,
    description: 'Manuel complet, workbook, 100 Money Moves, scripts, plan 30 jours',
  },
  pro: {
    name: 'MB Pro',
    price: 19700,
    description: 'Tout Core + générateur offre, bio premium, scripts DM, prompts IA',
  },
} as const;

export type ProductKey = keyof typeof PRODUCTS;
