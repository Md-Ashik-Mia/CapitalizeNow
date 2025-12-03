export default function CategoryChip({ children }:any) {
  return (
    <span className="px-3 py-1 rounded-full text-sm
        text-[var(--pink-primary)] bg-[rgba(255,71,101,0.1)]
        border border-[var(--pink-border)]">
      {children}
    </span>
  );
}
