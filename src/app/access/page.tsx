import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AccessContent from './AccessContent';

export const metadata: Metadata = {
  title: 'Ton Accès MB — MB SYSTÈME',
  description: 'Accède à tous tes documents et outils MB Système.',
};

export default function AccessPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-gold animate-pulse">Chargement de ton accès...</div>
          </div>
        }>
          <AccessContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
