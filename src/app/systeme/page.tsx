import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Le Système — MB SYSTÈME',
  description: 'Découvrez les 5 piliers du Millionaire Behavior System et comment ils transforment vos comportements financiers.',
};

const pillars = [
  {
    number: "01",
    name: "BEHAVIOR",
    title: "Recâbler les comportements",
    description: "La transformation commence par tes automatismes. Les bâtisseurs ont des réflexes que la plupart des gens n'ont pas appris. MB Système te les installe.",
    modules: [
      "Les 30 règles de comportement des bâtisseurs",
      "Comment identifier et remplacer tes comportements limitants",
      "Le protocole de discipline matinale",
      "Les habitudes de prise de décision des hauts performeurs",
    ],
  },
  {
    number: "02",
    name: "CLARITY",
    title: "Installer la clarté financière",
    description: "Sans objectif précis, tu travailles dans le flou. Ce pilier te donne un cadre pour savoir exactement où tu vas et mesurer chaque progression.",
    modules: [
      "Définir ton objectif financier précis à 90 jours",
      "La méthode MB pour construire ton plan d'action",
      "Comment segmenter tes revenus : actifs vs passifs",
      "Le système de tracking mensuel simplifié",
    ],
  },
  {
    number: "03",
    name: "VALUE",
    title: "Construire une offre réelle",
    description: "Le marché ne paie pas du temps. Il paie des transformations. Ce pilier t'apprend à structurer et présenter une offre que les gens veulent payer.",
    modules: [
      "Identifier ta compétence monétisable principale",
      "Les 4 éléments d'une offre irrésistible",
      "Comment fixer ton prix sans t'auto-saboter",
      "Tester son offre en moins de 7 jours",
    ],
  },
  {
    number: "04",
    name: "IMAGE",
    title: "Affirmer une image premium",
    description: "Les gens te jugent en 5 secondes. Ton image professionnelle doit communiquer ta valeur avant même que tu ouvres la bouche.",
    modules: [
      "L'audit complet de ton image en ligne",
      "Rédiger une bio qui positionne et convertit",
      "Le personal branding sans artifice",
      "Comment créer du contenu qui attire des clients",
    ],
  },
  {
    number: "05",
    name: "EXECUTION",
    title: "Systématiser l'exécution",
    description: "L'idée ne vaut rien sans l'exécution. Ce pilier transforme tes intentions en actions systématiques avec des plans, des templates et des outils.",
    modules: [
      "Le plan d'exécution hebdomadaire MB",
      "Comment prioriser avec la matrice d'impact",
      "Éliminer la procrastination structurellement",
      "Les templates pour passer de l'idée au résultat",
    ],
  },
];

export default function SystemePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold mb-6">
            Le Système
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-cream mb-6 leading-tight">
            Le Millionaire Behavior System
          </h1>
          <p className="text-gray-text text-xl max-w-2xl mx-auto leading-relaxed">
            Un protocole en 5 piliers pour transformer tes comportements, clarifier tes objectifs et construire des revenus réels.
          </p>
        </div>

        {/* Pillars */}
        <div className="max-w-4xl mx-auto space-y-8 mb-20">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className="p-8 rounded-xl border border-border bg-soft-dark hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gold/30 text-sm font-mono font-bold">{pillar.number}</span>
                <span className="text-gold text-xs font-bold tracking-widest uppercase px-3 py-1 border border-gold/30 rounded">
                  {pillar.name}
                </span>
              </div>
              <h2 className="text-cream font-heading font-bold text-2xl mb-3">{pillar.title}</h2>
              <p className="text-gray-text mb-6 leading-relaxed">{pillar.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pillar.modules.map((mod) => (
                  <li key={mod} className="flex items-start gap-2 text-sm text-cream">
                    <span className="text-gold mt-1 flex-shrink-0">→</span>
                    {mod}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* For who */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="p-8 rounded-xl border border-gold/20 bg-soft-dark text-center">
            <h2 className="text-cream font-heading font-bold text-2xl mb-4">
              Pour qui est MB Système ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mt-6">
              {[
                { role: "Le Freelance", desc: "Qui veut structurer ses offres et arrêter de sous-facturer." },
                { role: "Le Créateur", desc: "Qui a des idées mais n'arrive pas à les monétiser." },
                { role: "Le Salarié", desc: "Qui veut construire des revenus complémentaires solides." },
              ].map((item) => (
                <div key={item.role} className="p-4 border border-border rounded-lg">
                  <p className="text-gold font-semibold text-sm mb-1">{item.role}</p>
                  <p className="text-gray-text text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-background font-semibold rounded-lg hover:bg-champagne transition-all duration-200"
          >
            Accéder au système →
          </Link>
          <p className="text-gray-text text-sm mt-4">À partir de 29€ — Accès immédiat</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
