export default function SearchBar() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-black/30 border border-pink-400/40 rounded-xl px-4 py-3 max-w-lg w-full flex items-center">
        <span className="text-gray-400 mr-3">🔍</span>
        <input
          placeholder="Search Trends..."
          className="bg-transparent outline-none text-gray-300 w-full"
        />
      </div>
    </div>
  );
}
