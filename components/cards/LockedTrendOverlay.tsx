import { FaEyeSlash } from "react-icons/fa";
import UnlockButton from "./UnlockButton";

type LockedTrendOverlayProps = {
  onUnlock?: () => void;
};

export default function LockedTrendOverlay({
  onUnlock,
}: LockedTrendOverlayProps) {
  return (
    <div
      className="absolute inset-0 z-20 rounded-[24px]
      bg-[rgba(0,0,0,0.55)] backdrop-blur-[2px]
      flex items-center justify-center border border-[var(--pink-border)]"

    >
      {/* center stack: icon → text → button */}
      <div className="flex flex-col items-center mt-[-80px]  text-center">
        {/* pink eye-slash icon */}
        <div
          className="flex items-center justify-center  w-12 h-12 rounded-full
          bg-[var(--pink-primary)]
          shadow-[0_0_28px_rgba(255,71,101,0.9)]"
        >
          <FaEyeSlash className="w-6 h-6 text-black" />
        </div>

        <p className="text-[var(--pink-primary)] font-semibold text-lg tracking-tight">
          Locked Trend
        </p>

        <UnlockButton onClick={onUnlock} />
      </div>
    </div>
  );
}
