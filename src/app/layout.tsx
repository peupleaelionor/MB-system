import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "MB SYSTÈME — Millionaire Behavior System | Construis-toi comme un actif",
  description: "Le système premium pour adopter les comportements, la clarté et les réflexes des bâtisseurs. Transforme ton potentiel en offre vendable. Tu n'es pas sans potentiel. Tu es sans système.",
  keywords: ["millionaire behavior system", "MB système", "système", "offre vendable", "personal branding", "revenus", "bâtisseur", "clarté", "potentiel"],
  openGraph: {
    title: "MB SYSTÈME — Millionaire Behavior System",
    description: "Tu n'es pas sans potentiel. Tu es sans système. Construis-toi comme un actif.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-cream font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
