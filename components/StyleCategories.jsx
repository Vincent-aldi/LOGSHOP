import Image from "next/image";

const styles = [
  {
    name: "Desain Minimalis",
    image: "/ele.png",
  },
  {
    name: "Desain Ilustrasi",
    image: "/kot.png",
  },
  {
    name: "Desain Corporate / Luxury",
    image: "/lux.png",
  },
];

export default function StyleCategories() {
  return (
    <section id="gaya-logo" className="bg-smoke py-24">
      <div className="mx-auto max-w-content px-6 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Pilih Gaya Logomu
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-mute">
          Pilih gaya logo yang sesuai kebutuhanmu, tunggu apalagi pesan
          sekarang.
        </p>
        <a
          href="/shop"
          className="mt-7 inline-block rounded-full border border-ink px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
        >
          Lihat Semua
        </a>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {styles.map((s) => (
            <a
              key={s.name}
              href="#"
              className="
                group
                rounded-3xl
                bg-white
                p-10
                shadow-sm
                border
                border-gray-200
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <div className="relative h-72 w-full">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="
                    object-contain
                    p-4
                    transition-all
                    duration-500
                    group-hover:scale-110
                    "
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">{s.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
