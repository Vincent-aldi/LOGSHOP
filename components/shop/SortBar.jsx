const sortOptions = [
  { value: "popular", label: "Popular" },
  { value: "price-asc", label: "Harga Terendah" },
  { value: "price-desc", label: "Harga Tertinggi" },
  { value: "newest", label: "Terbaru" },
];

export default function SortBar({ sort, onSortChange, count }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3 rounded-full border border-line px-4 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-mute">
          Sort By
        </span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-transparent text-sm font-semibold text-ink focus:outline-none"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <p className="text-sm text-mute">Showing {count} Products</p>
    </div>
  );
}
