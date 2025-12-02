type UnlockButtonProps = {
  onClick?: () => void;
};

export default function UnlockButton({ onClick }: UnlockButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-6 py-2 rounded-full flex items-center gap-2
      text-white font-semibold text-sm cursor-pointer
      bg-black/80
      border border-[var(--pink-primary)]
      shadow-[0_0_15px_rgba(255,71,101,0.5)]
      transition hover:bg-[var(--pink-primary)]/20 focus:outline-none"
    >
      {/* white eye badge */}
      <span
        className="flex items-center justify-center w-5 h-5 rounded-full
        bg-white text-[var(--pink-primary)] text-[10px]"
      >
        <span className="translate-y-[1px]">👁</span>
      </span>
      <span>Unlock Now</span>
    </button>
  );
}
