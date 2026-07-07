import { categories } from "@/lib/products";

export default function FilterSidebar({ selected, onToggle, onClear }) {
  return (
    <aside className="w-full shrink-0 md:w-56">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
          Filters
        </h3>
        {selected.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs text-mute underline decoration-1 underline-offset-4 hover:text-ink focus-ring"
          >
            Clear filters
          </button>
        )}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink">
        Categories
      </p>
      <ul className="mt-3 space-y-3">
        {categories.map((cat) => {
          const checked = selected.includes(cat);
          return (
            <li key={cat}>
              <label className="flex cursor-pointer items-center gap-3 text-sm text-ink/90">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(cat)}
                  className="h-4 w-4 rounded-none border border-ink accent-black focus-ring"
                />
                {cat}
              </label>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
