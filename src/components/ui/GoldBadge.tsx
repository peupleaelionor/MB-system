interface GoldBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function GoldBadge({ children, className = '' }: GoldBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border border-gold/40 bg-gold/10 text-gold ${className}`}
    >
      {children}
    </span>
  );
}
