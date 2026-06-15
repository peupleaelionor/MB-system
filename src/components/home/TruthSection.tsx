'use client';

import { motion } from 'framer-motion';

export default function TruthSection() {
  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-3xl sm:text-4xl lg:text-[52px] font-bold text-cream leading-tight mb-8">
            Les millionnaires ne pensent pas seulement différemment.
            <br />
            <span className="gold-text">Ils se comportent différemment.</span>
          </p>

          <div className="divider-gold w-48 mx-auto mb-8" />

          <p className="text-[#A8A29A] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            MB Système ne te promet pas de devenir millionnaire. Il t&apos;aide à comprendre et appliquer
            les comportements des bâtisseurs : clarté, discipline, offre, image et exécution.
          </p>
          <p className="text-[#A8A29A]/50 text-sm font-body italic">
            Une compétence non structurée reste invisible.
            L&apos;argent suit rarement le chaos. Il suit la clarté, la valeur et l&apos;exécution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
