import Hero from '@/components/home/Hero';
import ProblemSection from '@/components/home/ProblemSection';
import TruthSection from '@/components/home/TruthSection';
import SolutionSection from '@/components/home/SolutionSection';
import ScorePreview from '@/components/home/ScorePreview';
import PricingPreview from '@/components/home/PricingPreview';
import ManifestoSection from '@/components/home/ManifestoSection';
import FAQ from '@/components/home/FAQ';
import { ResourceLibrary } from '@/components/home/ResourceLibrary';
import FinalCTA from '@/components/home/FinalCTA';

type Props = { params: Promise<{ locale: 'fr' | 'en' }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <Hero locale={locale} />
      <ProblemSection locale={locale} />
      <TruthSection locale={locale} />
      <SolutionSection locale={locale} />
      <ScorePreview locale={locale} />
      <PricingPreview locale={locale} />
      <ResourceLibrary locale={locale} />
      <ManifestoSection locale={locale} />
      <FAQ locale={locale} />
      <FinalCTA locale={locale} />
    </>
  );
}
