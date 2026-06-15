'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const values = [
  { key: 'CLARTÉ', desc: 'Nous disons les choses telles qu\'elles sont.' },
  { key: 'EXIGENCE', desc: 'Nous visons l\'excellence dans les détails.' },
  { key: 'SYSTÈME', desc: 'Nous ne comptons pas sur la motivation.' },
  { key: 'IMPACT', desc: 'Nous construisons pour laisser une empreinte.' },
];

export default function ManifestoSection() {
  return (
    <section className="py-24 px-6 lg:px-8 relative bg-[#0B0B0B]">
      <div className="divider-gold absolute top-0 left-0 right-0" />
      <div className="divider-gold absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-6">NOTRE MANIFESTE</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-cream mb-6 leading-tight">
              Moins de bruit.<br />
              <span className="gold-text">Plus de système.</span>
            </h2>
            <p className="text-[#A8A29A] text-base leading-relaxed mb-8">
              Nous croyons qu&apos;un petit nombre d&apos;hommes et de femmes bien structurés
              peuvent changer leur vie, leur entourage et le monde.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.key} className="premium-card rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-gold text-[10px] font-body font-bold tracking-widest uppercase">{v.key}</span>
                  </div>
                  <p className="text-[#A8A29A] text-xs font-body leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/manifeste"
              className="inline-flex items-center gap-2 mt-8 text-xs font-body font-semibold text-gold tracking-widest uppercase hover:text-champagne transition-colors"
            >
              Lire le manifeste complet
              <span>→</span>
            </Link>
          </motion.div>

          {/* Right — quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="premium-card rounded-2xl p-8">
              <div className="text-gold text-5xl font-serif leading-none mb-4">"</div>
              <blockquote className="font-serif text-2xl lg:text-3xl text-cream font-bold leading-tight mb-6">
                Ton futur ne se souhaite pas.
                <br />
                Il se <span className="gold-text">structure.</span>
              </blockquote>
              <div className="divider-gold mb-6" />
              <p className="text-[#A8A29A] text-sm font-body leading-relaxed">
                Rejoins le MB Système et construis la vie, l&apos;image et la liberté que tu mérites.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/score" className="btn-gold px-6 py-3 rounded-lg text-xs inline-flex items-center gap-2">
                  Découvrir mon MB Score →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
