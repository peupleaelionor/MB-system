import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingCards from '@/components/pricing/PricingCards';

export const metadata: Metadata = {
  title: 'Pricing — MB SYSTÈME',
  description: 'Choisis le niveau de MB Système qui correspond à ton ambition. De 29€ à 197€.',
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-semibold mb-6">
            Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-cream mb-4">
            Choisis ton niveau
          </h1>
          <p className="text-gray-text text-lg">
            Un investissement une fois. Un système pour toujours.
          </p>
        </div>

        {/* Cards */}
        <PricingCards />

        {/* Bottom info */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-text text-sm mb-6">
            <span className="flex items-center gap-1.5"><span className="text-green">✓</span> Paiement sécurisé Stripe</span>
            <span className="flex items-center gap-1.5"><span className="text-green">✓</span> Accès immédiat</span>
            <span className="flex items-center gap-1.5"><span className="text-green">✓</span> Garantie 14 jours</span>
          </div>
          <p className="text-gray-text text-xs">
            MB SYSTÈME ne promet pas de vous rendre millionnaire. Il vous donne les comportements, outils et systèmes des bâtisseurs.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
