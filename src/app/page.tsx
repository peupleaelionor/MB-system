import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ProblemSection from '@/components/home/ProblemSection';
import TruthSection from '@/components/home/TruthSection';
import SolutionSection from '@/components/home/SolutionSection';
import ScoreCTA from '@/components/home/ScoreCTA';
import PricingPreview from '@/components/home/PricingPreview';
import ForWhoSection from '@/components/home/ForWhoSection';
import IncludedSection from '@/components/home/IncludedSection';
import TrustSection from '@/components/home/TrustSection';
import FAQ from '@/components/home/FAQ';
import FinalCTA from '@/components/home/FinalCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MB SYSTÈME — Construis-toi comme un actif',
  description: 'Tu n\'es pas sans potentiel. Tu es sans système. Le programme premium pour adopter les comportements des bâtisseurs.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <TruthSection />
        <SolutionSection />
        <ScoreCTA />
        <PricingPreview />
        <ForWhoSection />
        <IncludedSection />
        <TrustSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
