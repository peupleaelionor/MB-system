'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { value: '+2 300', label: 'membres déjà transformés' },
  { value: '4,9/5', label: 'Note moyenne' },
  { value: '12 sem.', label: 'Pour changer d\'échelle' },
  { value: '100%', label: 'Orienté résultats' },
];

const radarPoints = [
  { label: 'MENTAL', x: 50, y: 8, score: 82 },
  { label: 'OFFER', x: 91, y: 35, score: 78 },
  { label: 'IMAGE', x: 78, y: 78, score: 85 },
  { label: 'ACTION', x: 22, y: 78, score: 80 },
  { label: 'MONEY CLARITY', x: 9, y: 35, score: 88 },
];

function MBScoreCard() {
  const cx = 110;
  const cy = 110;
  const r = 72;

  const toXY = (pct: { x: number; y: number }) => ({
    x: (pct.x / 100) * 220,
    y: (pct.y / 100) * 220,
  });

  const shapePoints = radarPoints
    .map(p => {
      const pt = toXY(p);
      const dx = pt.x - cx;
      const dy = pt.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const factor = (p.score / 100) * (r / dist);
      return `${cx + dx * factor},${cy + dy * factor}`;
    })
    .join(' ');

  const gridPoints = radarPoints
    .map(p => {
      const pt = toXY(p);
      return `${pt.x},${pt.y}`;
    })
    .join(' ');

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="premium-card rounded-2xl p-5 w-full max-w-[460px]"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="section-label mb-1">MB SCORE</div>
          <div className="flex items-end gap-2">
            <span className="text-5xl font-serif font-bold text-cream">87</span>
            <span className="text-[#A8A29A] text-lg mb-1">/100</span>
          </div>
          <div className="text-xs text-gold tracking-wider uppercase font-body">Niveau : Avancé</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-[#A8A29A] tracking-wider uppercase font-body mb-1">SYSTÈME EN CONSTRUCTION</div>
          <div className="text-xs text-cream/70 font-body">Ton système prend forme.</div>
        </div>
      </div>

      {/* Radar */}
      <div className="flex gap-4 mb-4">
        <div className="flex-shrink-0">
          <svg width="160" height="160" viewBox="0 0 220 220">
            {/* Grid lines */}
            {[0.3, 0.6, 1].map((factor, i) => (
              <polygon
                key={i}
                points={radarPoints
                  .map(p => {
                    const pt = toXY(p);
                    const dx = pt.x - cx;
                    const dy = pt.y - cy;
                    return `${cx + dx * factor},${cy + dy * factor}`;
                  })
                  .join(' ')}
                fill="none"
                stroke="rgba(201,164,92,0.12)"
                strokeWidth="1"
              />
            ))}
            {/* Axis lines */}
            {radarPoints.map((p, i) => {
              const pt = toXY(p);
              return (
                <line
                  key={i}
                  x1={cx}
                  y1={cy}
                  x2={pt.x}
                  y2={pt.y}
                  stroke="rgba(201,164,92,0.1)"
                  strokeWidth="1"
                />
              );
            })}
            {/* Score shape */}
            <polygon
              points={shapePoints}
              fill="rgba(201,164,92,0.12)"
              stroke="rgba(201,164,92,0.5)"
              strokeWidth="1.5"
            />
            {/* Labels */}
            {radarPoints.map((p, i) => {
              const pt = toXY(p);
              const dx = pt.x - cx;
              const dy = pt.y - cy;
              const lx = cx + dx * 1.28;
              const ly = cy + dy * 1.28;
              return (
                <text
                  key={i}
                  x={lx}
                  y={ly}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#A8A29A"
                  fontSize="7"
                  fontFamily="Inter, sans-serif"
                  fontWeight="500"
                >
                  {p.label.split(' ').length > 1 ? (
                    <>
                      <tspan x={lx} dy="-4">{p.label.split(' ')[0]}</tspan>
                      <tspan x={lx} dy="9">{p.label.split(' ').slice(1).join(' ')}</tspan>
                    </>
                  ) : p.label}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Steps */}
        <div className="flex-1 flex flex-col gap-2 justify-center">
          <div className="text-[10px] text-[#A8A29A] tracking-wider uppercase font-body mb-1">PROGRESSION</div>
          {[
            { label: 'Clarté', done: true },
            { label: 'Positionnement', done: true },
            { label: 'Offre', active: true },
            { label: 'Acquisition', done: false },
            { label: 'Scale', done: false },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                step.done ? 'bg-gold border-gold' : step.active ? 'border-gold' : 'border-[#2A2418]'
              }`}>
                {step.done && (
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 2.5" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {step.active && <div className="w-1.5 h-1.5 rounded-full bg-gold" />}
              </div>
              <span className={`text-xs font-body ${step.done ? 'text-cream' : step.active ? 'text-gold' : 'text-[#A8A29A]/40'}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="divider-gold mb-4" />

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-[#0B0B0B] rounded-xl p-3 border border-[#2A2418]">
          <div className="text-[10px] text-[#A8A29A] tracking-wider uppercase font-body mb-1">TRACTION</div>
          <div className="text-green text-lg font-body font-bold">+127%</div>
          <div className="text-[10px] text-[#A8A29A] font-body">vs mois dernier</div>
        </div>
        <div className="bg-[#0B0B0B] rounded-xl p-3 border border-[#2A2418]">
          <div className="text-[10px] text-[#A8A29A] tracking-wider uppercase font-body mb-1">FOCUS DU MOIS</div>
          <div className="text-cream text-xs font-body font-medium leading-tight">Créer une offre Signature</div>
          <div className="mt-2 h-1 bg-[#2A2418] rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-gold to-champagne rounded-full" />
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="bg-[#0B0B0B] rounded-xl p-3 border border-[#2A2418]">
        <div className="flex gap-2 items-start">
          <span className="text-gold text-lg font-serif leading-none">"</span>
          <div>
            <p className="text-[11px] text-cream/80 font-body italic leading-relaxed">
              La clarté attire. Le système convertit. La discipline scale.
            </p>
            <p className="text-[9px] text-[#A8A29A] tracking-widest uppercase font-body mt-1">MB SYSTÈME</p>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-[#A8A29A]/50 font-body mt-3 text-center italic">
        Illustration — résultats exemples, non contractuels
      </p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 bottom-0 radial-glow opacity-60" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[100px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px divider-gold" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-8"
            >
              MB SYSTÈME
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-[64px] font-bold leading-[1.1] mb-6"
            >
              Tu n&apos;es pas sans{' '}
              <span className="gold-text">potentiel.</span>
              <br />
              Tu es{' '}
              <span className="gold-text">sans système.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#A8A29A] text-lg leading-relaxed mb-10 max-w-xl"
            >
              Le MB Système transforme ton potentiel, ton image et tes idées
              en un système clair, structuré et vendable.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/score"
                className="btn-gold px-8 py-4 rounded-lg text-center inline-flex items-center justify-center gap-2"
              >
                Découvrir mon MB Score
                <span>→</span>
              </Link>
              <Link
                href="/systeme"
                className="btn-outline-gold px-8 py-4 rounded-lg text-center inline-flex items-center justify-center gap-2"
              >
                <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                  <span className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-current ml-0.5" />
                </span>
                Voir le système
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-6 sm:gap-8"
            >
              {/* Avatar group */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#050505] bg-gradient-to-br from-gold/40 to-gold/10"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-cream text-sm font-body font-semibold">+2 300</div>
                  <div className="text-[#A8A29A] text-xs font-body">membres transformés</div>
                </div>
              </div>

              {stats.slice(1).map((stat) => (
                <div key={stat.label}>
                  <div className="text-cream text-sm font-body font-semibold">{stat.value}</div>
                  <div className="text-[#A8A29A] text-xs font-body">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard */}
          <div className="flex justify-center lg:justify-end">
            <MBScoreCard />
          </div>
        </div>
      </div>
    </section>
  );
}
