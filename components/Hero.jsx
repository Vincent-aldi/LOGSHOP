export default function Hero() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-mute">
            {/* Marketplace Desain Logo */}
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Temukan Desain Visual Identitas Bisnis Anda
          </h1>
          <p className="mt-6 max-w-md text-base text-mute md:text-lg">
            Kami menyediakan ratusan pilihan desain logo yang bisa langsung
            Anda beli dan siap membuat brand Anda makin bersinar.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#desain-terbaru"
              className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-80 focus-ring"
            >
              Pilih Desainmu
            </a>
            <a
              href="#gaya-logo"
              className="rounded-full border border-ink px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
            >
              Lihat Gaya Logo
            </a>
          </div>
        </div>

        {/* Galeri visual hero — ganti properti `src` di bawah dengan
            gambar/mockup/foto produkmu sendiri. Taruh filenya di folder
            public/hero/ lalu tulis path-nya, contoh: "/hero/mockup-1.png" */}
        <HeroGallery
          items={[
            {
              src: "BN.png",
              alt: "Mockup desain logo utama",
              theme: "dark",
              span: "col-span-2 aspect-[2/1]",
            },
            {
              src: "card_name.png",
              alt: "Mockup kartu nama",
              theme: "light",
              span: "aspect-square",
            },
            {
              src: "moc_produk.png",
              alt: "Mockup kemasan produk",
              theme: "dark",
              span: "aspect-square",
            },
          ]}
        />
      </div>
    </section>
  );
}

function HeroGallery({ items }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div
          key={item.src}
          className={`flex items-center justify-center overflow-hidden rounded-2xl ${item.span} ${
            item.theme === "dark"
              ? "bg-ink"
              : "border border-line bg-smoke"
          }`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
