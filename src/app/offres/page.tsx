import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import OffresPage from '@/components/pricing/OffresPage';

export const metadata: Metadata = {
  title: 'Offres — MB SYSTÈME | Choisis ton niveau de construction',
  description: 'Choisis ton niveau de construction. MB Starter (29€), MB Core (97€), MB Pro (197€). Accès immédiat à tous les contenus.',
};

export default function Offres() {
  return (
    <>
      <Navbar />
      <main>
        <OffresPage />
      </main>
      <Footer />
    </>
  );
}
