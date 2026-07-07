import Image from "next/image";

const designs = [
  {
    name: "Coffee",
    tag: "Food & Beverage",
    logo: "/coffe.png",
  },
  {
    name: "Transmove",
    tag: "Transportasi",
    logo: "/transpot.png",
  },
  {
    name: "Rasa Nusantara",
    tag: "Food",
    logo: "/food.png",
  },
  {
    name: "Belantara Studio",
    tag: "Kreatif",
    logo: "/kreatif.png",
  },
  {
    name: "Tech Nova",
    tag: "Company",
    logo: "/nova.png",
  },
  {
    name: "Finance Plus",
    tag: "Keuangan",
    logo: "/FINANCE.png",
  },
];

export default function LatestDesigns() {
  return (
    <section id="desain-terbaru" className="bg-smoke py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Desain Terbaru Kami
          </h2>
          <p className="mt-4 text-mute">
            Desain terbaru kami contoh gaya dan kualitas
            yang bisa Anda harapkan dari setiap desainer di LOGSHOP
          </p>
          <a
            href="#"
            className="mt-7 inline-block rounded-full border border-ink px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
          >
            Jelajahi Logo Lain
          </a>
        </div>

        {/* Logo Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((item) => (
            <div
              key={item.name}
              className="
                group
                rounded-3xl
                bg-white
                border
                border-gray-200
                p-10
                transition-all
                duration-300
                hover:border-blue-500
                hover:shadow-2xl
                hover:-translate-y-2
                "
            >
              <div className="flex h-60 items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="
                    max-h-52
                    w-auto
                    object-contain
                    transition
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>
              <h3 className="mt-8 text-center text-2xl font-bold text-gray-900">
                {item.name}
              </h3>
              <p className="mt-3 text-center text-sm uppercase tracking-[5px] text-gray-500">
                {item.tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}