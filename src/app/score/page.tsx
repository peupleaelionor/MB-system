import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScoreQuiz from '@/components/quiz/ScoreQuiz';

export const metadata: Metadata = {
  title: 'MB Score — Diagnostic Money Builder Gratuit',
  description: '7 questions pour découvrir ton profil Money Builder et comprendre ce qui te bloque vraiment.',
};

export default function ScorePage() {
  return (
    <>
      <Navbar />
      <main>
        <ScoreQuiz />
      </main>
      <Footer />
    </>
  );
}
