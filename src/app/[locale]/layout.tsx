import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';
  return {
    title: isFr
      ? 'MB SYSTÈME — Millionaire Behavior System | Construis-toi comme un actif'
      : 'MB SYSTEM — Millionaire Behavior System | Build yourself like an asset',
    description: isFr
      ? 'Le système premium pour adopter les comportements, la clarté et les réflexes des bâtisseurs. Transforme ton potentiel en offre vendable.'
      : 'The premium system to adopt builder behaviors, clarity and reflexes. Transform your potential into a sellable offer.',
    alternates: {
      languages: { fr: '/', en: '/en' },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'fr' | 'en')) notFound();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar locale={locale as 'fr' | 'en'} />
      <main>{children}</main>
      <Footer locale={locale as 'fr' | 'en'} />
    </NextIntlClientProvider>
  );
}
