import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2418] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex flex-col leading-none mb-5 group">
              <span className="text-cream font-serif font-bold text-2xl tracking-wider group-hover:text-gold transition-colors">MB</span>
              <span className="text-[#A8A29A] text-[9px] font-body tracking-[0.25em] uppercase">SYSTÈME</span>
              <span className="text-[#A8A29A]/50 text-[7px] font-body tracking-[0.15em] uppercase mt-0.5">Millionaire Behavior System</span>
            </Link>
            <p className="text-[#A8A29A] text-sm font-body leading-relaxed max-w-xs mb-4">
              Construis-toi comme un actif. Le système pour adopter les comportements, la clarté et les réflexes des bâtisseurs.
            </p>
            <p className="text-[#A8A29A]/40 text-xs font-body italic">
              MB Système ne promet pas de richesse rapide. Il donne une structure pour agir avec clarté.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cream text-xs font-body font-bold tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'MB Score Gratuit', href: '/score' },
                { label: 'Le Système', href: '/systeme' },
                { label: 'Offres', href: '/offres' },
                { label: 'Manifeste', href: '/manifeste' },
                { label: 'Accéder à mon compte', href: '/access' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#A8A29A] hover:text-gold text-sm font-body transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-cream text-xs font-body font-bold tracking-widest uppercase mb-5">Légal</h4>
            <ul className="space-y-3">
              {['Mentions légales', 'Politique de confidentialité', 'CGV', 'Contact'].map((item) => (
                <li key={item}>
                  <span className="text-[#A8A29A] text-sm font-body cursor-default">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-gold mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A8A29A]/50 text-xs font-body">
            © 2026 MB SYSTÈME. Tous droits réservés.
          </p>
          <p className="text-[#A8A29A]/40 text-xs font-body">
            MB = Millionaire Behavior · Money Builder
          </p>
        </div>
      </div>
    </footer>
  );
}

