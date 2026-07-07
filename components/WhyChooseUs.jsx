const reasons = [
  {
    title: "Desain Eksklusif",
    desc: "Karya visual orisinal yang tidak akan Anda temukan di tempat lain, dirancang langsung oleh desainer terpilih.",
    link: "Lihat Koleksi",
    icon: IconSpark,
  },
  {
    title: "Harga Terjangkau",
    desc: "Dapatkan nilai dan kualitas desain premium yang kompetitif tanpa harus mengorbankan identitas berharga bisnis Anda.",
    link: "Lihat Paket",
    icon: IconTag,
  },
  {
    title: "Lisensi Mudah & Aman",
    desc: "Penggunaan komersial sepenuhnya didukung hukum dan jaminan bebas dari konten hasil AI generatif yang tidak berizin.",
    link: "Cek Perincian Lisensi",
    icon: IconShield,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Mengapa Memilih LOGSHOP?
          </h2>
          <p className="mt-4 text-mute">
            Kami menghadirkan ekosistem desain logo terbaik, aman, dan
            profesional untuk mendukung identitas visual bisnis Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {reasons.map(({ title, desc, link, icon: Icon }) => (
            <div key={title} className="border-t border-ink pt-6">
              <Icon className="h-8 w-8 text-ink" />
              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{desc}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-ink underline decoration-1 underline-offset-4 focus-ring"
              >
                {link} &gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconSpark({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTag({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 12 L11 3 H20 V12 L12 20 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="15.5" cy="7.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function IconShield({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2 L20 5 V11 C20 16 16.5 19.5 12 22 C7.5 19.5 4 16 4 11 V5 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8.5 12 L11 14.5 L15.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
