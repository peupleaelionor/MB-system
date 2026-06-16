import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = { params: Promise<{ locale: 'fr' | 'en' }> };

const copy = {
  fr: {
    label: 'MANIFESTE',
    title: 'Le Manifeste',
    title_gold: 'Money Builder',
    intro: "Ce que nous croyons. Ce que nous construisons. Pourquoi rien de tout ça ne ressemble à ce que tu as vu avant.",
    quote: '"Construis-toi comme un actif."',
    quote_body: "Un actif prend de la valeur. Il produit. Il est structuré. Il résiste. Ce n'est pas une métaphore — c'est un mode opératoire. MB Système te donne les outils pour te construire de cette façon.",
    principles: [
      { num: "01", title: "Le potentiel ne vaut rien sans système.", body: "Le monde est rempli de personnes brillantes qui sont bloquées. Pas parce qu'elles manquent de talent. Parce qu'elles n'ont pas de structure. MB Système remet la structure au centre." },
      { num: "02", title: "On ne construit pas sa vie par accident.", body: "Les résultats que tu vois chez les bâtisseurs ne sont pas de la chance. Ce sont des comportements répétés, des systèmes installés, des décisions prises différemment. Tu peux apprendre ça." },
      { num: "03", title: "L'argent est un résultat de comportements, pas de vœux.", body: "Nous refusons la culture du \"visualise et ça viendra\". L'argent vient de la valeur créée, des offres structurées, des comportements reproductibles." },
      { num: "04", title: "Ton image est ton premier produit.", body: "Avant que quelqu'un achète ce que tu fais, il doit comprendre qui tu es. Une image claire, professionnelle et cohérente n'est pas de la vanité — c'est du marketing intelligent." },
      { num: "05", title: "L'exécution bat l'inspiration.", body: "Les idées ne changent pas ta vie. Les actions systématiques le font. MB Système est construit pour les gens qui veulent agir, pas juste s'inspirer." },
      { num: "06", title: "On ne promet pas le millionnaire. On installe le comportement.", body: "MB = Millionaire Behavior. Pas Millionaire Guarantee. Le système fonctionne si tu l'appliques. Les résultats dépendent de toi." },
    ],
    closing: "On est fait pour les bâtisseurs.",
    closing_body: "Pas les rêveurs. Pas les chercheurs de formule magique. Ceux qui savent qu'ils peuvent construire quelque chose de solide — et qui cherchent juste le bon système pour le faire.",
    cta_score: 'Faire mon MB Score Gratuit',
    cta_offers: 'Voir les offres',
  },
  en: {
    label: 'MANIFESTO',
    title: 'The',
    title_gold: 'Money Builder Manifesto',
    intro: "What we believe. What we build. Why none of this looks like anything you've seen before.",
    quote: '"Build yourself like an asset."',
    quote_body: "An asset appreciates in value. It produces. It is structured. It endures. This is not a metaphor — it is an operating mode. MB System gives you the tools to build yourself this way.",
    principles: [
      { num: "01", title: "Potential is worthless without a system.", body: "The world is full of brilliant people who are stuck. Not because they lack talent. Because they lack structure. MB System puts structure back at the center." },
      { num: "02", title: "You don't build your life by accident.", body: "The results you see in builders are not luck. They are repeated behaviors, installed systems, decisions made differently. You can learn this." },
      { num: "03", title: "Money is a result of behaviors, not wishes.", body: "We reject the 'visualize and it will come' culture. Money comes from value created, structured offers, reproducible behaviors." },
      { num: "04", title: "Your image is your first product.", body: "Before anyone buys what you do, they must understand who you are. A clear, professional and consistent image is not vanity — it is smart marketing." },
      { num: "05", title: "Execution beats inspiration.", body: "Ideas don't change your life. Systematic actions do. MB System is built for people who want to act, not just get inspired." },
      { num: "06", title: "We don't promise millionaire. We install the behavior.", body: "MB = Millionaire Behavior. Not Millionaire Guarantee. We are honest: the system works if you apply it. Results depend on you." },
    ],
    closing: "We are built for builders.",
    closing_body: "Not dreamers. Not magic formula seekers. Those who know they can build something solid — and who just need the right system to do it.",
    cta_score: 'Take my free MB Score',
    cta_offers: 'See offers',
  },
};

export default async function ManifestePage({ params }: Props) {
  const { locale } = await params;
  const t = copy[locale];
  const scoreHref = locale === 'en' ? '/en/score' : '/score';
  const offresHref = locale === 'en' ? '/en/offres' : '/offres';

  return (
    <div className="pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <div className="section-label justify-center mb-6">{t.label}</div>
        <h1 className="font-serif text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
          {t.title}{' '}
          <span className="gold-text">{t.title_gold}</span>
        </h1>
        <p className="text-[#A8A29A] text-xl leading-relaxed">{t.intro}</p>
      </div>

      <div className="max-w-3xl mx-auto mb-16">
        <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-cream leading-tight border-l-2 border-gold pl-6 mb-6">
          {t.quote}
        </blockquote>
        <p className="text-[#A8A29A] text-lg leading-relaxed">{t.quote_body}</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10 mb-20">
        {t.principles.map((p) => (
          <div key={p.num} className="flex gap-6">
            <span className="text-gold/30 text-sm font-body font-bold font-mono pt-1 flex-shrink-0">{p.num}</span>
            <div>
              <h2 className="font-serif text-xl font-bold text-cream mb-3">{p.title}</h2>
              <p className="text-[#A8A29A] leading-relaxed">{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center p-10 premium-card rounded-2xl">
        <p className="font-serif text-2xl font-bold text-cream mb-4">{t.closing}</p>
        <p className="text-[#A8A29A] mb-8 leading-relaxed">{t.closing_body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={scoreHref} className="btn-gold px-8 py-4 rounded-lg inline-flex items-center gap-2">
            {t.cta_score}
          </Link>
          <Link href={offresHref} className="btn-outline-gold px-8 py-4 rounded-lg inline-flex items-center gap-2">
            {t.cta_offers}
          </Link>
        </div>
      </div>
    </div>
  );
}
