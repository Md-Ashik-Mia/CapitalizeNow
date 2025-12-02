// data/fakeTrends.ts

// --- types ----------------------------------------------------

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
  id: string; // used for keys / unlocking
  title: string;
  description: string;
  category: Exclude<TrendCategory, "All">;
  duration: string; // e.g. "3 - 7 days"
  tag: TrendTag; // hot / fresh / top_rated

  confidence: number; // 0–100
  boosts: number;
  authorHandle: string;
  isLocked?: boolean;

  // Detail-style fields (even if we don’t use a slug page yet)
  timeLeft: string; // e.g. "3 days"
  submittedBy: string; // e.g. "@trendspoter"
  whyWillBlowUp: string;
  howToCapitalize: string;
  proofSources: string[];
  submittedAt: string; // simple date string
};

// --- fake data ------------------------------------------------

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
    timeLeft: "3 days",
    submittedBy: "@trendspoter",
    whyWillBlowUp:
      "Multiple TikTok creators are showing off 2000s-style flip phones as a status flex and distraction-free lifestyle choice.",
    howToCapitalize:
      "Create content comparing life with and without smartphones. Review the best modern flip phones and accessories.",
    proofSources: [
      "https://www.tiktok.com/@user123/video/1234567890",
      "https://www.tiktok.com/@user456/video/2345678901",
      "https://www.tiktok.com/@user789/video/3456789012",
    ],
    submittedAt: "10/02/2025",
  },
  {
    id: "sleepy-girl-mocktail",
    title: "Sleepy Girl Mocktail",
    description:
      "Night-time drink combining tart cherry juice and magnesium powder trending on TikTok.",
    category: "Food & Drinks",
    duration: "3 - 7 days",
    tag: "hot",
    confidence: 76,
    boosts: 312,
    authorHandle: "@trendspotter",
    timeLeft: "5 days",
    submittedBy: "@wellness_watch",
    whyWillBlowUp:
      "Wellness creators keep posting 'sleep routine' videos featuring this exact mocktail recipe.",
    howToCapitalize:
      "Cafés and bars can launch a non-alcoholic night-time menu item. Creators can make recipe breakdowns and myth-busting videos.",
    proofSources: [
      "https://www.tiktok.com/@user111/video/4567890123",
      "https://www.tiktok.com/@user222/video/5678901234",
    ],
    submittedAt: "10/01/2025",
  },
  {
    id: "cortisol-conscious-workouts",
    title: "Cortisol-Conscious Workouts",
    description:
      "Low-impact, stress-reducing exercise is replacing HIIT culture. Walking, pilates, and yoga are being rebranded as 'cortisol-friendly'.",
    category: "Fitness",
    duration: "3 - 7 days",
    tag: "hot",
    confidence: 75,
    boosts: 189,
    authorHandle: "@fitness_futures",
    timeLeft: "6 days",
    submittedBy: "@fitness_futures",
    whyWillBlowUp:
      "Wellness creators are pushing nervous-system friendly routines over hardcore HIIT — especially for burned-out millennials.",
    howToCapitalize:
      "Gyms and trainers can create 'cortisol-friendly' class formats and digital programs with calmer branding.",
    proofSources: [
      "https://www.tiktok.com/@fituser1/video/1111111111",
      "https://www.tiktok.com/@fituser2/video/2222222222",
    ],
    submittedAt: "09/29/2025",
  },
  {
    id: "dopamine-decor",
    title: "Dopamine Decor",
    description:
      "Maximalist, colourful home decor is replacing sad beige aesthetics. Think bold colours, clashing patterns, joy-inducing spaces.",
    category: "Lifestyle",
    duration: "3 - 7 days",
    tag: "fresh",
    confidence: 68,
    boosts: 143,
    authorHandle: "@interior_optimist",
    timeLeft: "9 days",
    submittedBy: "@interior_optimist",
    whyWillBlowUp:
      "Pinterest and TikTok boards tagged 'dopamine décor' are exploding as people want happier homes.",
    howToCapitalize:
      "Interior designers and creators can publish room makeovers, product roundups, and mood-boosting colour palettes.",
    proofSources: [
      "https://www.pinterest.com/search/pins/?q=dopamine%20decor",
    ],
    submittedAt: "09/25/2025",
  },
  {
    id: "protein-coffee-wave",
    title: "Protein Coffee Wave",
    description:
      "People are mixing protein powder with iced coffee for fitness hacks and meal-replacement breakfasts.",
    category: "Food & Drinks",
    duration: "1 - 2 weeks",
    tag: "hot",
    confidence: 71,
    boosts: 204,
    authorHandle: "@macro_maven",
    timeLeft: "11 days",
    submittedBy: "@macro_maven",
    whyWillBlowUp:
      "Every gym-tok creator is showing 'morning protein coffee' macros to squeeze more protein into a busy day.",
    howToCapitalize:
      "Cafés can offer ready-made protein lattes. Creators can do flavour tests and dietitian-approved recipes.",
    proofSources: [
      "https://www.tiktok.com/@macro/video/999999999",
    ],
    submittedAt: "09/22/2025",
  },
  {
    id: "y2k-platform-sneakers",
    title: "Y2K Platform Sneakers",
    description:
      "Chunky early-2000s platform sneakers are making a comeback in micro-influencer outfits.",
    category: "Fashion",
    duration: "1 - 2 weeks",
    tag: "top_rated",
    confidence: 79,
    boosts: 521,
    authorHandle: "@style_signal",
    timeLeft: "12 days",
    submittedBy: "@style_signal",
    whyWillBlowUp:
      "OOTD reels and TikToks are full of platform sneakers paired with baggy jeans and baby tees.",
    howToCapitalize:
      "Fashion brands can push capsule collections, while creators do 'how to style' and thrift-flip content.",
    proofSources: [
      "https://www.instagram.com/explore/tags/y2kplatforms/",
    ],
    submittedAt: "09/20/2025",
  },
  {
    id: "butter-boards-2",
    title: "Butter Boards 2.0",
    description:
      "After butter boards, now it’s whipped feta boards and savoury cheese foundations trending at dinner parties.",
    category: "Food & Drinks",
    duration: "1 - 2 weeks",
    tag: "top_rated",
    confidence: 65,
    boosts: 167,
    authorHandle: "@tablescapes_today",
    timeLeft: "14 days",
    submittedBy: "@tablescapes_today",
    whyWillBlowUp:
      "Party hosts love ultra-visual recipes perfect for Reels & TikTok; boards are cheap but look impressive.",
    howToCapitalize:
      "Food bloggers can create board recipes; cookware brands push platters and knives as bundles.",
    proofSources: [
      "https://www.instagram.com/explore/tags/butterboard/",
    ],
    submittedAt: "09/18/2025",
  },
];

// simple stats object for the LiveTrends header
export const trendStats = {
  totalTrends: trends.length,
  initialUnlocksAvailable: 5,
};
