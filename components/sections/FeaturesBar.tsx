// components/sections/FeaturesBar.tsx

const tickerItems = [
  "Before TikTok exploded, the trends were already here.",
  "Influencers, imagine if you did a video before Stanley Cups went viral.",
  "Creators who spot trends early own the next wave.",
  "No brands. No ads. Just pure, community-powered trend intel.",
];

export default function FeaturesBar() {
  return (
    <div
      className="max-w-5xl mx-auto mt-12 px-0 py-3
      border border-[var(--pink-border)] rounded-2xl
      bg-[rgba(30,0,10,0.35)] backdrop-blur-md
      shadow-[0_0_25px_rgba(255,71,101,0.15)]
      overflow-hidden ticker"
    >
      <div className="ticker-track">
        {/* duplicate list twice for seamless loop */}
        {[...Array(2)].map((_, loopIndex) => (
          <div key={loopIndex} className="flex items-center gap-10 pr-10">
            {tickerItems.map((text, i) => (
              <div
                key={`${loopIndex}-${i}`}
                className="flex items-center gap-3 whitespace-nowrap text-sm text-gray-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--pink-primary)]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
