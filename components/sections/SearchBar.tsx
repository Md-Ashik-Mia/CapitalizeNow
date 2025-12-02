type Props = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function SearchBar({ search, onSearchChange }: Props) {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex items-center gap-3 px-5 py-3 rounded-xl
        border border-[var(--pink-border)]
        bg-[rgba(20,0,15,0.4)] backdrop-blur-md
        shadow-[0_0_20px_rgba(255,71,101,0.2)]
        text-gray-300">

        <span className="text-[var(--pink-primary)] text-lg">🔍</span>

        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Trends..."
          className="bg-transparent outline-none w-full text-gray-300 placeholder:text-gray-500"
        />
      </div>
    </div>
  );
}
