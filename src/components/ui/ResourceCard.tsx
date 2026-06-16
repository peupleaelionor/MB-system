'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ResourceTier } from '@/lib/resources';

const tierBadge: Record<ResourceTier, { label: string; color: string }> = {
  starter: { label: 'Starter', color: 'text-[#A8A29A] border-[#A8A29A]/30' },
  core: { label: 'Core', color: 'text-gold border-gold/40' },
  pro: { label: 'Pro', color: 'text-[#E8D8B0] border-[#E8D8B0]/40' },
};

interface ResourceCardProps {
  id?: string;
  image: string;
  title: string;
  subtitle: string;
  type?: string;
  tier?: ResourceTier;
  index?: number;
}

export function ResourceCard({ image, title, subtitle, type, tier, index = 0 }: ResourceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-2xl border border-[#C9A45C]/18 bg-white/[0.025] p-3 shadow-card transition-all duration-300 hover:border-[#C9A45C]/50 hover:bg-white/[0.045] hover:shadow-gold"
    >
      <div className="overflow-hidden rounded-xl border border-[#C9A45C]/10">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        </div>
      </div>

      <div className="mt-4 px-1">
        <div className="flex items-center justify-between gap-2 mb-2">
          {type && (
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-body">
              {type}
            </p>
          )}
          {tier && (
            <span className={`text-[9px] uppercase tracking-widest font-body border rounded px-1.5 py-0.5 ${tierBadge[tier].color}`}>
              {tierBadge[tier].label}
            </span>
          )}
        </div>
        <h3 className="text-[15px] font-serif font-semibold text-[#F5F1E8] leading-snug">
          {title}
        </h3>
        <p className="mt-1 text-xs text-[#A8A29A] font-body leading-relaxed">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}
