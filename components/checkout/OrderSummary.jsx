"use client";

import { useCart } from "@/lib/cart-context";
import ProductThumbnail from "@/components/shop/ProductThumbnail";
import { formatRupiah } from "@/lib/products";

export default function OrderSummary() {
  const { items, removeItem, totalPrice } = useCart();

  return (
    <div>
      <h2 className="font-display text-lg font-bold text-ink">Desain Kamu</h2>

      <div className="mt-5 space-y-5">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <ProductThumbnail
              product={item}
              className="h-20 w-20 shrink-0 rounded-xl"
              iconSize="h-9 w-9"
            />
            <div className="flex-1">
              <p className="font-display text-base font-bold text-ink">
                {item.name}
              </p>
              <p className="mt-1 text-xs text-mute">Lisensi: Komersial</p>
              <p className="text-xs text-mute">PNG, SVG, AI</p>
              <p className="mt-2 font-display text-base font-bold text-ink">
                {formatRupiah(item.price * item.quantity)}
                {item.quantity > 1 && (
                  <span className="ml-1 text-xs font-normal text-mute">
                    ({item.quantity}x)
                  </span>
                )}
              </p>
            </div>
            <div className="flex flex-col items-end justify-between text-right">
              <span className="text-xs text-mute">by Desainer LOGSHOP</span>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="text-xs font-medium text-ink underline decoration-1 underline-offset-4 hover:text-mute focus-ring"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
        <span className="text-sm font-semibold text-ink">Total</span>
        <span className="font-display text-lg font-bold text-ink">
          {formatRupiah(totalPrice)}
        </span>
      </div>
    </div>
  );
}
