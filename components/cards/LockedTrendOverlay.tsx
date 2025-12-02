import { FaEyeSlash } from "react-icons/fa";
import UnlockButton from "./UnlockButton";

type LockedTrendOverlayProps = {
  onUnlock?: () => void;
};

export default function LockedTrendOverlay({ onUnlock }: LockedTrendOverlayProps) {
  return (
    <div
      className="absolute inset-0 z-20 rounded-[24px]
      bg-[rgba(0,0,0,0.55)] backdrop-blur-[2px]
      flex items-center justify-center"
    >
      {/* center stack: icon → text → button */}
      <div className="flex flex-col items-center gap-4 text-center">
        {/* pink eye-slash icon */}
        <div className="relative">
             <FaEyeSlash className="w-8 h-8 text-[var(--pink-primary)]" />
             <div className="absolute inset-0 blur-sm bg-[var(--pink-primary)]/40 -z-10"></div>
        </div>

        <p className="text-[var(--pink-primary)] font-bold text-xl tracking-wide uppercase">
          Locked Trend
        </p>

        <UnlockButton onClick={onUnlock} />
      </div>
    </div>
  );
}
