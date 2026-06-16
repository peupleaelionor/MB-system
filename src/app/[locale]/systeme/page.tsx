import Link from 'next/link';
import { ResourceLibrary } from '@/components/home/ResourceLibrary';

type Props = { params: Promise<{ locale: 'fr' | 'en' }> };

const copy = {
  fr: {
    label: 'LE SYSTÈME',
    title: 'Le Millionaire Behavior System',
    subtitle: 'Un protocole en 5 piliers pour transformer tes comportements, clarifier tes objectifs et construire des revenus réels.',
    pillars: [
      {
        num: '01', key: 'BEHAVIOR', title: 'Recâbler les comportements',
        desc: 'La transformation commence par tes automatismes. Les bâtisseurs ont des réflexes que la plupart des gens n\'ont pas appris.',
        modules: ['Les 30 règles de comportement des bâtisseurs', 'Identifier et remplacer tes comportements limitants', 'Le protocole de discipline matinale', 'Les habitudes de décision des hauts performeurs'],
      },
      {
        num: '02', key: 'CLARITY', title: 'Installer la clarté financière',
        desc: 'Sans objectif précis, tu travailles dans le flou. Ce pilier te donne un cadre pour savoir exactement où tu vas.',
        modules: ['Définir ton objectif financier précis à 90 jours', 'La méthode MB pour construire ton plan d\'action', 'Comment segmenter tes revenus', 'Le système de tracking mensuel simplifié'],
      },
      {
        num: '03', key: 'VALUE', title: 'Construire une offre réelle',
        desc: 'Le marché ne paie pas du temps. Il paie des transformations. Structure une offre que les gens veulent payer.',
        modules: ['Identifier ta compétence monétisable principale', 'Les 4 éléments d\'une offre irrésistible', 'Comment fixer ton prix sans t\'auto-saboter', 'Tester son offre en moins de 7 jours'],
      },
      {
        num: '04', key: 'IMAGE', title: 'Affirmer une image premium',
        desc: 'Les gens te jugent en 5 secondes. Ton image professionnelle doit communiquer ta valeur avant même que tu ouvres la bouche.',
        modules: ['L\'audit complet de ton image en ligne', 'Rédiger une bio qui positionne et convertit', 'Le personal branding sans artifice', 'Comment créer du contenu qui attire des clients'],
      },
      {
        num: '05', key: 'EXECUTION', title: 'Systématiser l\'exécution',
        desc: 'L\'idée ne vaut rien sans l\'exécution. Ce pilier transforme tes intentions en actions systématiques.',
        modules: ['Le plan d\'exécution hebdomadaire MB', 'Prioriser avec la matrice d\'impact', 'Éliminer la procrastination structurellement', 'Les templates pour passer de l\'idée au résultat'],
      },
    ],
    for_who: 'Pour qui est MB Système ?',
    profiles: [
      { role: 'Le Freelance', desc: 'Qui veut structurer ses offres et arrêter de sous-facturer.' },
      { role: 'Le Créateur', desc: 'Qui a des idées mais n\'arrive pas à les monétiser.' },
      { role: 'Le Salarié', desc: 'Qui veut construire des revenus complémentaires solides.' },
    ],
    cta: 'Accéder au système →',
    price_note: 'À partir de 29€ — Accès immédiat',
    disclaimer: 'MB Système ne promet pas de te rendre millionnaire. Il t\'aide à adopter les comportements des bâtisseurs.',
  },
  en: {
    label: 'THE SYSTEM',
    title: 'The Millionaire Behavior System',
    subtitle: 'A 5-pillar protocol to transform your behaviors, clarify your goals and build real income.',
    pillars: [
      {
        num: '01', key: 'BEHAVIOR', title: 'Rewire your behaviors',
        desc: 'Transformation starts with your automatic responses. Builders have reflexes most people never learned.',
        modules: ['The 30 builder behavior rules', 'Identify and replace limiting behaviors', 'The morning discipline protocol', 'Decision-making habits of high performers'],
      },
      {
        num: '02', key: 'CLARITY', title: 'Install financial clarity',
        desc: 'Without a precise goal, you work in the dark. This pillar gives you a framework to know exactly where you\'re going.',
        modules: ['Define your precise 90-day financial goal', 'The MB method for building your action plan', 'How to segment your income streams', 'The simplified monthly tracking system'],
      },
      {
        num: '03', key: 'VALUE', title: 'Build a real offer',
        desc: 'The market doesn\'t pay for time. It pays for transformations. Structure an offer people want to pay for.',
        modules: ['Identify your main monetizable skill', 'The 4 elements of an irresistible offer', 'How to price yourself without self-sabotage', 'Test your offer in less than 7 days'],
      },
      {
        num: '04', key: 'IMAGE', title: 'Claim a premium image',
        desc: 'People judge you in 5 seconds. Your professional image must communicate your value before you say a word.',
        modules: ['Full audit of your online image', 'Write a bio that positions and converts', 'Personal branding without artifice', 'How to create content that attracts clients'],
      },
      {
        num: '05', key: 'EXECUTION', title: 'Systematize execution',
        desc: 'An idea is worth nothing without execution. This pillar turns your intentions into systematic actions.',
        modules: ['The MB weekly execution plan', 'Prioritize with the impact matrix', 'Eliminate procrastination structurally', 'Templates to go from idea to result'],
      },
    ],
    for_who: 'Who is MB System for?',
    profiles: [
      { role: 'The Freelancer', desc: 'Who wants to structure offers and stop undercharging.' },
      { role: 'The Creator', desc: 'Who has ideas but can\'t monetize them.' },
      { role: 'The Employee', desc: 'Who wants to build solid additional income streams.' },
    ],
    cta: 'Access the system →',
    price_note: 'From €29 — Immediate access',
    disclaimer: 'MB System doesn\'t promise to make you a millionaire. It helps you adopt builder behaviors.',
  },
};

export default async function SystemePage({ params }: Props) {
  const { locale } = await params;
  const t = copy[locale];
  const offresHref = locale === 'en' ? '/en/offres' : '/offres';

  return (
    <div className="pt-24 pb-0 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="section-label justify-center mb-6">{t.label}</div>
        <h1 className="font-serif text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">{t.title}</h1>
        <p className="text-[#A8A29A] text-xl max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-5 mb-20">
        {t.pillars.map((pillar) => (
          <div key={pillar.num} className="premium-card rounded-xl p-8 hover:border-gold/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gold/30 text-xs font-body font-bold font-mono">{pillar.num}</span>
              <span className="text-[10px] font-body font-bold tracking-widest text-gold uppercase border border-gold/25 rounded px-2 py-0.5">{pillar.key}</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-cream mb-3">{pillar.title}</h2>
            <p className="text-[#A8A29A] mb-6 leading-relaxed">{pillar.desc}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pillar.modules.map((mod) => (
                <li key={mod} className="flex items-start gap-2 text-sm text-cream/80 font-body">
                  <span className="text-gold mt-1 flex-shrink-0">→</span>{mod}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mb-20">
        <div className="premium-card p-8 rounded-2xl text-center">
          <h2 className="font-serif text-2xl font-bold text-cream mb-6">{t.for_who}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {t.profiles.map((item) => (
              <div key={item.role} className="p-4 border border-[#2A2418] rounded-xl">
                <p className="text-gold font-body font-semibold text-sm mb-1">{item.role}</p>
                <p className="text-[#A8A29A] text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center pb-20">
        <p className="text-[#A8A29A]/50 text-sm font-body italic mb-8">{t.disclaimer}</p>
        <Link href={offresHref} className="btn-gold px-8 py-4 rounded-lg inline-flex items-center gap-2">
          {t.cta}
        </Link>
        <p className="text-[#A8A29A] text-sm font-body mt-4">{t.price_note}</p>
      </div>

      <ResourceLibrary locale={locale} />
    </div>
  );
}
