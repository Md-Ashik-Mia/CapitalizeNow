import { categories } from "@/data/fakeData";

export default function CategoriesTabs() {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-6 mb-8">
        <button className="bg-pink-500 px-4 py-2 rounded-full text-white text-sm">🔥 Hot Now</button>
        <button className="text-gray-400 hover:text-white">Fresh</button>
        <button className="text-gray-400 hover:text-white">Top Rated</button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 hover:bg-white/10 whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
