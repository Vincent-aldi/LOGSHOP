const steps = [
  {
    number: "01",
    title: "Isi Formulir Pendaftaran",
    desc: "Lengkapi data diri, keahlian, dan link portofoliomu di formulir bawah ini.",
  },
  {
    number: "02",
    title: "Kurasi Tim LOGSHOP",
    desc: "Tim kami meninjau portofoliomu dalam 2-3 hari kerja untuk memastikan kualitas.",
  },
  {
    number: "03",
    title: "Upload Karya",
    desc: "Setelah disetujui, unggah desain logo ke dashboard dan tentukan harganya sendiri.",
  },
  {
    number: "04",
    title: "Mulai Terima Order",
    desc: "Karyamu tampil di katalog dan siap dibeli — komisi masuk otomatis tiap transaksi.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="bg-paper py-24">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Cara Kerja
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-ink pt-6">
              <span className="font-display text-3xl font-bold text-ink/20">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
