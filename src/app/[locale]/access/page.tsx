import { Suspense } from 'react';
import AccessContent from '@/app/access/AccessContent';

type Props = { params: Promise<{ locale: 'fr' | 'en' }> };

export default async function AccessPage({ params }: Props) {
  const { locale } = await params;
  return (
    <div className="pt-24 pb-16 px-6 lg:px-8">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-gold animate-pulse font-body text-sm tracking-widest uppercase">
            {locale === 'en' ? 'Loading your access...' : 'Chargement de ton accès...'}
          </div>
        </div>
      }>
        <AccessContent locale={locale} />
      </Suspense>
    </div>
  );
}
