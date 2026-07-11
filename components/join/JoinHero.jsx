export default function JoinHero() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-mute">
            Untuk Desainer
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
            Ubah Karya Desainmu Jadi Penghasilan
          </h1>
          <p className="mt-6 max-w-md text-base text-mute md:text-lg">
            Bergabunglah dengan ratusan desainer lain di LOGSHOP dan jual
            karya logo terbaikmu ke pelaku bisnis di seluruh Indonesia —
            tanpa perlu mencari klien sendiri.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#form-pendaftaran"
              className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-80 focus-ring"
            >
              Daftar Sekarang
            </a>
            <a
              href="#cara-kerja"
              className="rounded-full border border-ink px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
            >
              Lihat Cara Kerja
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Stat value="500+" label="Desainer Aktif" theme="dark" />
          <Stat value="10rb+" label="Logo Terjual" theme="light" />
          <Stat value="70%" label="Komisi Desainer" theme="dark" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, theme }) {
  return (
    <div
      className={`flex aspect-square flex-col items-center justify-center rounded-2xl px-3 text-center ${
        theme === "dark" ? "bg-ink text-paper" : "border border-line bg-smoke text-ink"
      }`}
    >
      <span className="font-display text-2xl font-bold md:text-3xl">
        {value}
      </span>
      <span className="mt-2 text-xs opacity-80">{label}</span>
    </div>
  );
}
