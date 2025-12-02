// // data/fakeTrends.ts

// // Tabs for the top filter bar
// export type TrendTag = "Hot Now" | "Fresh" | "Top Rated";

// export type Trend = {
//   id: number;
//   title: string;
//   category: string;
//   duration: string;
//   description: string;
//   confidence: number; // 0–100
//   boosts: number;
//   tag: TrendTag;
//  authorHandle: string;
//   isLocked?: boolean; // 👈 NEW
// };

// // MAIN FAKE TRENDS
// export const trends: Trend[] = [
//   {
//     id: 1,
//     title: "Retro Flip Phone Revival",
//     category: "Tech",
//     duration: "3 – 7 days",
//     description:
//       "Gen Z is ditching smartphones for dumb phones as a digital detox flex.",
//     confidence: 75,
//     boosts: 56,
//     tag: "Hot Now",
//     authorHandle: "@retroRevival",
//     // not locked
//   },
//   {
//     id: 2,
//     title: "Sleepy Girl Mocktail",
//     category: "Food & Drinks",
//     duration: "3 – 7 days",
//     description:
//       "Night-time drink with tart cherry juice and magnesium powder trending on TikTok.",
//     confidence: 72,
//     boosts: 47,
//     tag: "Hot Now",
//     authorHandle: "@nightowl_nutrition",
//     isLocked: true, // 👈 LOCKED
//   },
//   {
//     id: 3,
//     title: "Cortisol-Conscious Workouts",
//     category: "Fitness",
//     duration: "3 – 7 days",
//     description:
//       "Low-impact, stress-friendly workouts replacing HIIT culture across social feeds.",
//     confidence: 71,
//     boosts: 41,
//     authorHandle: "@fitnessGuru",
//     tag: "Fresh",
//   },
//   {
//     id: 4,
//     title: "Dopamine Decor",
//     category: "Lifestyle",
//     duration: "3 – 7 days",
//     description:
//       "Maximalist, colourful home decor focused on feel-good colours and playful spaces.",
//     confidence: 69,
//     boosts: 39,
//     tag: "Top Rated",
//     authorHandle: "@homeVibes",
//     isLocked: true, // 👈 LOCKED
//   },
//   {
//     id: 5,
//     title: "Butter Boards 2.0",
//     category: "Food & Drinks",
//     duration: "1 – 2 weeks",
//     description:
//       "After butter boards, now it's whipped feta boards & savoury spreads for content creators.",
//     confidence: 68,
//     boosts: 38,
//     tag: "Fresh",
//     authorHandle: "@foodieDelights",
//   },
//   {
//     id: 6,
//     title: "AI Radio Hosts",
//     category: "Tech",
//     duration: "1 – 3 days",
//     description:
//       "Local stations quietly testing AI-generated radio hosts for late-night segments.",
//     confidence: 80,
//     boosts: 63,
//     tag: "Top Rated",
//     authorHandle: "@aiRadioHost",
//   },
//   {
//     id: 7,
//     title: "Y2K Platform Sneakers",
//     category: "Fashion",
//     duration: "1 – 2 weeks",
//     description:
//       "Chunky early-2000s platform sneakers making a comeback in micro-influencer outfits.",
//     confidence: 66,
//     boosts: 35,
//     tag: "Hot Now",
//     authorHandle: "@fashionFlashback",
//   },
//   {
//     id: 8,
//     title: "Study-with-Me Live Rooms",
//     category: "Lifestyle",
//     duration: "3 – 7 days",
//     description:
//       "Live co-working streams where strangers keep each other accountable while studying.",
//     confidence: 64,
//     boosts: 32,
//     tag: "Fresh",
//     authorHandle: "@studyBuddy",
//   },
// ];

// // CATEGORIES SHOWN IN THE CHIP ROW
// export const categories: string[] = [
//   "All",
//   "Fashion",
//   "Food & Drinks",
//   "Tech",
//   "Lifestyle",
//   "Beauty",
//   "Fitness",
//   "Entertainment",
//   "Gaming",
//   "Travel",
// ];

// // STATS FOR HEADER PILL
// export const trendStats = {
//   totalTrends: trends.length,
//   unlocksAvailable: trends.filter((t) => t.isLocked).length, // 👈 matches locked items
// };



// data/fakeTrends.ts
// data/fakeTrends.ts

export type TrendTag = "hot" | "fresh" | "top_rated";

export type TrendCategory =
  | "All"
  | "Fashion"
  | "Food & Drinks"
  | "Tech"
  | "Lifestyle"
  | "Beauty"
  | "Fitness"
  | "Entertainment"
  | "Gaming"
  | "Travel";

export const categories: TrendCategory[] = [
  "All",
  "Fashion",
  "Food & Drinks",
  "Tech",
  "Lifestyle",
  "Beauty",
  "Fitness",
  "Entertainment",
  "Gaming",
  "Travel",
];

export type Trend = {
  id: string; // used in /trends/[id]

  title: string;
  description: string;
  category: Exclude<TrendCategory, "All">;
  duration: string; // e.g. "3 - 7 days"
  tag: TrendTag; // hot / fresh / top_rated

  confidence: number; // 0–100
  boosts: number;
  authorHandle: string;
  isLocked?: boolean;

  // Detail page fields
  timeLeft: string; // e.g. "3 days"
  submittedBy: string; // e.g. "@trendspoter"
  whyWillBlowUp: string;
  howToCapitalize: string;
  proofSources: string[];
  submittedAt: string; // simple date string
};

export const trends: Trend[] = [
  {
    id: "retro-flip-phone-revival",
    title: "Retro Flip Phone Revival",
    description:
      "Gen Z is ditching smartphones for dumb phones as a digital detox flex. Flip phones from 2000s are being sought after again.",
    category: "Tech",
    duration: "3 - 7 days",
    tag: "hot",
    confidence: 82,
    boosts: 474,
    authorHandle: "@tech_oracle",
    isLocked: false,
    timeLeft: "3 days",
    submittedBy: "@trendspoter",
    whyWillBlowUp:
      "Flip phones have become the ultimate digital detox flex. TikTok creators are showing off their 'dumb phone weekends', and nostalgia content is hitting millions of views.",
    howToCapitalize:
      "Create comparison content between smartphones and flip phones, review the best modern flip devices, and show your own 'flip phone challenge' week.",
    proofSources: [
      "https://www.tiktok.com/@user123/video/7345678901234567890",
      "https://www.reddit.com/r/trendwatch/comments/retro_flip_wave",
      "https://twitter.com/somecreator/status/1234567890",
    ],
    submittedAt: "10/08/2025",
  },
  {
    id: "cortisol-conscious-workouts",
    title: "Cortisol-Conscious Workouts",
    description:
      "Low-impact, stress-reducing exercise is replacing HIIT culture. Walking, Pilates, and yoga are being rebranded as 'cortisol-friendly'.",
    category: "Fitness",
    duration: "3 - 7 days",
    tag: "hot",
    confidence: 75,
    boosts: 41,
    authorHandle: "@fitness_futures",
    isLocked: false,
    timeLeft: "5 days",
    submittedBy: "@trendspoter",
    whyWillBlowUp:
      "Wellness influencers are shifting away from punishment-style workouts to longevity and nervous-system-friendly movement. This matches the broader mental health conversation.",
    howToCapitalize:
      "Package low-impact routines as 'cortisol-friendly' programs, film quiet morning walks, and explain how to recover from hustle culture using movement.",
    proofSources: [
      "https://www.instagram.com/p/fitnessexample1",
      "https://www.tiktok.com/@coach/video/7345678901234567890",
      "https://www.reddit.com/r/fitness/comments/cortisol_friendly",
    ],
    submittedAt: "10/08/2025",
  },
  {
    id: "sleepy-girl-mocktail",
    title: "Sleepy Girl Mocktail",
    description:
      "Night-time drink with tart cherry juice and magnesium powder trending on TikTok as a sleep hack.",
    category: "Food & Drinks",
    duration: "3 - 7 days",
    tag: "fresh",
    confidence: 69,
    boosts: 47,
    authorHandle: "@trendspotter",
    isLocked: true, // 🔒 example locked card
    timeLeft: "2 days",
    submittedBy: "@trendspoter",
    whyWillBlowUp:
      "Every few months a new 'sleep hack' drink goes viral. This one is easy to make, aesthetic, and taps both wellness and mocktail trends.",
    howToCapitalize:
      "Film ASMR-style night routines, experiment with variations of the mocktail, and interview experts about what actually helps sleep.",
    proofSources: [
      "https://www.tiktok.com/@user123/video/7345678901234567890",
      "https://www.youtube.com/watch?v=dummysleepmocktail",
      "https://www.reddit.com/r/supplements/comments/mocktail_trend",
    ],
    submittedAt: "09/27/2025",
  },
  {
    id: "dopamine-decor",
    title: "Dopamine Decor",
    description:
      "Maximalist, colourful home decor is replacing sad beige aesthetic. Think bold colours and joy-inducing interiors.",
    category: "Lifestyle",
    duration: "3 - 7 days",
    tag: "top_rated",
    confidence: 77,
    boosts: 58,
    authorHandle: "@homewave",
    isLocked: false,
    timeLeft: "6 days",
    submittedBy: "@trendspoter",
    whyWillBlowUp:
      "People are tired of ultra-minimal beige spaces. Bright colour palettes photograph well on social media and make strong thumbnails.",
    howToCapitalize:
      "Share before/after room transformations, colour palette breakdowns, and budget-friendly ways to inject bold colours into rentals.",
    proofSources: [
      "https://www.pinterest.com/search/pins/?q=dopamine%20decor",
      "https://www.tiktok.com/@decorcreator/video/7345678901234567890",
      "https://www.instagram.com/explore/tags/dopaminedecor/",
    ],
    submittedAt: "10/02/2025",
  },
  {
    id: "butter-boards-2-0",
    title: "Butter Boards 2.0",
    description:
      "After butter boards, now it’s whipped feta boards and cohesive flavour themes for content creators.",
    category: "Food & Drinks",
    duration: "1 - 2 weeks",
    tag: "fresh",
    confidence: 64,
    boosts: 39,
    authorHandle: "@foodforecast",
    isLocked: false,
    timeLeft: "9 days",
    submittedBy: "@trendspoter",
    whyWillBlowUp:
      "The original butter board trend proved people love interactive, easy-to-film appetiser formats. 2.0 is more aesthetic and flexible for creators.",
    howToCapitalize:
      "Create series around different board themes, show grocery hauls for them, and encourage viewers to recreate with a specific hashtag.",
    proofSources: [
      "https://www.tiktok.com/@chef/video/7345678901234567890",
      "https://www.instagram.com/p/butterboard2",
      "https://www.reddit.com/r/food/comments/butter_board_2_0",
    ],
    submittedAt: "09/30/2025",
  },
];


// Simple stats used by the LiveTrends header, etc.
export const trendStats = {
  total: trends.length,
  totalTrends: trends.length,

  unlocked: trends.filter((t) => !t.isLocked).length,
  unlockedTrends: trends.filter((t) => !t.isLocked).length,

  locked: trends.filter((t) => t.isLocked).length,
  lockedTrends: trends.filter((t) => t.isLocked).length,
};
