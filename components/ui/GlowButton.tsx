export default function GlowButton({ children }) {
  return (
    <button className="px-5 py-2 rounded-full text-white bg-[var(--pink-primary)]
      shadow-[0px_0px_20px_rgba(255,71,101,0.5)]
      hover:opacity-90">
      {children}
    </button>
  );
}
