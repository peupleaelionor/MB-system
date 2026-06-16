import { Suspense } from 'react';
import ScoreResult from '@/components/quiz/ScoreResult';

type Props = { params: Promise<{ locale: 'fr' | 'en' }> };

export default async function ScoreResultPage({ params }: Props) {
  const { locale } = await params;
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gold animate-pulse font-body text-sm tracking-widest uppercase">
          {locale === 'en' ? 'Calculating your profile...' : 'Calcul de ton profil...'}
        </div>
      </div>
    }>
      <ScoreResult locale={locale} />
    </Suspense>
  );
}
