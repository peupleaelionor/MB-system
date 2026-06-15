import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Le Manifeste Money Builder — MB SYSTÈME',
  description: 'Notre manifeste : pourquoi nous avons créé MB Système et ce que nous défendons.',
};

const principles = [
  {
    number: "01",
    title: "Le potentiel ne vaut rien sans système.",
    body: "Le monde est rempli de personnes brillantes qui sont cassées. Pas parce qu'elles manquent de talent. Parce qu'elles n'ont pas de structure. MB Système remet la structure au centre.",
  },
  {
    number: "02",
    title: "On ne construit pas sa vie par accident.",
    body: "Les résultats que tu vois chez les bâtisseurs ne sont pas de la chance. Ce sont des comportements répétés, des systèmes installés, des décisions prises différemment. Tu peux apprendre ça.",
  },
  {
    number: "03",
    title: "L'argent est un résultat de comportements, pas de vœux.",
    body: "Nous refusons la culture du \"visualise et ça viendra\". L'argent vient de la valeur créée, des offres structurées, des comportements reproductibles. Pas de la loi de l'attraction.",
  },
  {
    number: "04",
    title: "Ton image est ton premier produit.",
    body: "Avant que quelqu'un achète ce que tu fais, il doit comprendre qui tu es. Une image claire, professionnelle et cohérente n'est pas de la vanité — c'est du marketing intelligent.",
  },
  {
    number: "05",
    title: "L'exécution bat l'inspiration.",
    body: "Les idées ne changent pas ta vie. Les actions systématiques le font. MB Système est construit pour les gens qui veulent agir, pas juste s'inspirer.",
  },
  {
    number: "06",
    title: "On ne promet pas le millionnaire. On installe le comportement.",
    body: "MB = Millionaire Behavior. Pas Millionaire Guarantee. Nous sommes honnêtes : le système fonctionne si tu l'appliques. Les résultats dépendent de toi.",
  },
];

export default function ManifestePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold mb-6">
            Manifeste
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-cream mb-6 leading-tight">
            Le Manifeste{' '}
            <span className="gold-gradient">Money Builder</span>
          </h1>
          <p className="text-gray-text text-xl leading-relaxed">
            Ce que nous croyons. Ce que nous construisons. Pourquoi rien de tout ça ne ressemble à ce que tu as vu avant.
          </p>
        </div>

        {/* Opening statement */}
        <div className="max-w-3xl mx-auto mb-16">
          <blockquote className="text-2xl sm:text-3xl font-heading font-bold text-cream leading-tight border-l-2 border-gold pl-6">
            &ldquo;Construis-toi comme un actif.&rdquo;
          </blockquote>
          <p className="text-gray-text mt-6 text-lg leading-relaxed">
            Un actif prend de la valeur. Il produit. Il est structuré. Il résiste. Ce n&apos;est pas une métaphore — c&apos;est un mode opératoire. MB Système te donne les outils pour te construire de cette façon.
          </p>
        </div>

        {/* Principles */}
        <div className="max-w-3xl mx-auto space-y-8 mb-20">
          {principles.map((p) => (
            <div key={p.number} className="flex gap-6">
              <span className="text-gold/30 text-sm font-mono font-bold pt-1 flex-shrink-0">{p.number}</span>
              <div>
                <h2 className="text-cream font-heading font-bold text-xl mb-3">{p.title}</h2>
                <p className="text-gray-text leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="max-w-3xl mx-auto text-center p-10 border border-gold/20 rounded-2xl bg-soft-dark">
          <p className="text-2xl font-heading font-bold text-cream mb-4">
            On est fait pour les bâtisseurs.
          </p>
          <p className="text-gray-text mb-8 leading-relaxed">
            Pas les rêveurs. Pas les chercheurs de formule magique. Ceux qui savent qu&apos;ils peuvent construire quelque chose de solide — et qui cherchent juste le bon système pour le faire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/score"
              className="px-8 py-4 bg-gold text-background font-semibold rounded-lg hover:bg-champagne transition-all"
            >
              Faire mon MB Score Gratuit
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 border border-border text-gray-text rounded-lg hover:text-cream hover:border-gold/40 transition-all"
            >
              Voir les offres
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
