export default function ConfidenceBar({ value }) {
  return (
    <div className="w-full bg-[rgba(255,255,255,0.12)] h-2 rounded-full">
      <div
        className="h-full bg-[var(--pink-primary)] rounded-full transition-all"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
