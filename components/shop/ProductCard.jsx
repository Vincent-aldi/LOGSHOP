import Link from "next/link";
import ProductThumbnail from "./ProductThumbnail";
import { formatRupiah } from "@/lib/products";

export default function ProductCard({ product }) {
  return (
    <Link href={`/shop/${product.id}`} className="group block focus-ring">
      <ProductThumbnail
        product={product}
        className="aspect-square rounded-2xl"
        iconSize="h-16 w-16"
      />
      <p className="mt-4 font-display text-base font-bold text-ink">
        {product.name}
      </p>
      <p className="mt-1 text-sm text-mute">{formatRupiah(product.price)}</p>
    </Link>
  );
}
