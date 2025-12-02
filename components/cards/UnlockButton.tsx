type UnlockButtonProps = {
  onClick?: () => void;
};

export default function UnlockButton({ onClick }: UnlockButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-10 py-3 rounded-full flex items-center gap-3
      text-white font-semibold text-sm cursor-pointer
      bg-gradient-to-b from-[rgba(95,0,35,0.98)] via-[rgba(70,0,25,0.98)] to-[rgba(40,0,18,0.98)]
      border border-[var(--pink-primary)]
      shadow-[0_0_28px_rgba(255,71,101,0.9)]
      transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--pink-primary)] focus:ring-offset-0"
    >
      {/* white eye badge */}
      <span
        className="flex items-center justify-center w-7 h-7 rounded-full
        bg-white text-[var(--pink-primary)] text-xs"
      >
        👁
      </span>
      <span>Unlock Now</span>
    </button>
  );
}
