import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScoreResult from '@/components/quiz/ScoreResult';

export const metadata: Metadata = {
  title: 'Ton Profil MB — Résultat de ton Diagnostic',
  description: 'Découvre ton profil Money Builder et les prochaines étapes pour construire ton système.',
};

export default function ScoreResultPage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-gold animate-pulse">Calcul de ton profil...</div>
          </div>
        }>
          <ScoreResult />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
