export default function GlassCard({ children, className = "" }) {
  return (
    <div className={
      `rounded-2xl border border-[var(--pink-border)]
       bg-[var(--card-bg)] backdrop-blur-xl
       shadow-[inset_0_0_25px_var(--inner-glow)]
       ${className}`
    }>
      {children}
    </div>
  );
}
