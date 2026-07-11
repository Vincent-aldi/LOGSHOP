const benefits = [
  {
    title: "Penghasilan Tambahan",
    desc: "Dapatkan komisi hingga 70% dari setiap karya yang terjual, dibayarkan langsung ke rekeningmu.",
    icon: IconWallet,
  },
  {
    title: "Jangkauan Pembeli Luas",
    desc: "Karyamu ditampilkan ke ribuan pelaku bisnis yang aktif mencari desain logo setiap harinya.",
    icon: IconGlobe,
  },
  {
    title: "Proses Mudah & Fleksibel",
    desc: "Upload karya kapan saja, atur harga sendiri, dan pantau penjualan lewat dashboard desainer.",
    icon: IconLayers,
  },
  {
    title: "Portofolio yang Diakui",
    desc: "Bangun reputasi sebagai desainer terpercaya lewat rating dan ulasan dari pembeli nyata.",
    icon: IconBadge,
  },
];

export default function JoinBenefits() {
  return (
    <section className="bg-smoke py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Kenapa Bergabung dengan LOGSHOP?
          </h2>
          <p className="mt-4 text-mute">
            Kami membangun ekosistem yang adil bagi desainer — fokus saja
            pada karyamu, biar kami yang urus sisanya.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-line bg-paper p-6">
              <Icon className="h-8 w-8 text-ink" />
              <h3 className="mt-5 font-display text-lg font-bold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconWallet({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10 H21" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.5" cy="14.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

function IconGlobe({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12 H21 M12 3 C15 6.5 15 17.5 12 21 C9 17.5 9 6.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function IconLayers({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3 L21 8 L12 13 L3 8 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M3 13 L12 18 L21 13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 17.5 L12 22.5 L21 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function IconBadge({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 14 L7 22 L12 19 L17 22 L15.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
