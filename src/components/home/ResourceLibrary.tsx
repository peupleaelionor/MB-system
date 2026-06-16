'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ResourceCard } from '@/components/ui/ResourceCard';
import { mbResources } from '@/lib/resources';

interface ResourceLibraryProps {
  locale?: 'fr' | 'en';
  compact?: boolean;
}

const copy = {
  fr: {
    label: 'BIBLIOTHÈQUE MB',
    title: 'Des ressources premium pour construire avec système.',
    subtitle: 'Guides, workbooks, scripts, prompts et plans d\'action conçus pour transformer ton potentiel en structure claire et vendable.',
    cta: 'Voir les offres →',
  },
  en: {
    label: 'MB LIBRARY',
    title: 'Premium resources to build with system.',
    subtitle: 'Guides, workbooks, scripts, prompts and action plans designed to turn your potential into clear, sellable structure.',
    cta: 'See offers →',
  },
};

export function ResourceLibrary({ locale = 'fr', compact = false }: ResourceLibraryProps) {
  const t = copy[locale];
  const offresHref = locale === 'en' ? '/en/offres' : '/offres';

  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center mb-6">{t.label}</div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-6 max-w-3xl mx-auto leading-tight">
            {t.title}
          </h2>
          <p className="text-[#A8A29A] text-base max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <div className={`grid gap-5 ${
          compact
            ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
            : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
        }`}>
          {mbResources.map((resource, i) => (
            <ResourceCard key={resource.id} {...resource} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href={offresHref}
            className="btn-gold px-8 py-4 rounded-lg inline-flex items-center gap-2 text-xs"
          >
            {t.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
