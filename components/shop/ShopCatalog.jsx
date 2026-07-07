"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import FilterSidebar from "./FilterSidebar";
import SortBar from "./SortBar";
import ProductCard from "./ProductCard";

const PAGE_SIZE = 6;

export default function ShopCatalog() {
  const [selected, setSelected] = useState([]);
  const [sort, setSort] = useState("popular");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  function toggleCategory(cat) {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setVisibleCount(PAGE_SIZE);
  }

  function clearFilters() {
    setSelected([]);
    setVisibleCount(PAGE_SIZE);
  }

  function handleSortChange(value) {
    setSort(value);
    setVisibleCount(PAGE_SIZE);
  }

  const filtered = useMemo(() => {
    let list =
      selected.length === 0
        ? [...products]
        : products.filter((p) => selected.includes(p.category));

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list.sort((a, b) => b.id - a.id);
        break;
      default:
        list.sort((a, b) => a.popularity - b.popularity);
    }
    return list;
  }, [selected, sort]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="mx-auto max-w-content px-6 pb-24">
      <div className="flex flex-col gap-10 md:flex-row">
        <FilterSidebar
          selected={selected}
          onToggle={toggleCategory}
          onClear={clearFilters}
        />

        <div className="flex-1">
          <SortBar
            sort={sort}
            onSortChange={handleSortChange}
            count={filtered.length}
          />

          {visible.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center text-sm text-mute">
              Tidak ada produk yang cocok dengan filter ini.
            </p>
          )}

          {hasMore && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="rounded-full border border-ink px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
              >
                Desain Lainnya
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
