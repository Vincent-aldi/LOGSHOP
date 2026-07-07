const columns = [
  {
    title: "Perusahaan",
    links: ["Tentang LOGSHOP", "Hubungi Kami", "Karir Desainer"],
  },
  {
    title: "Legalitas",
    links: ["Syarat & Ketentuan Lisensi", "Kebijakan Privasi", "Plagiarisme"],
  },
  {
    title: "Bantuan",
    links: ["Cara Kerja Payment Gateway", "Panduan Format File Master"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold text-ink">LOGSHOP</p>
            <p className="mt-3 max-w-xs text-sm text-mute">
              Inspirasi identitas visual untuk bisnis Anda.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-ink">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-mute transition-colors hover:text-ink focus-ring"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-ink py-5 text-center text-xs text-paper/80">
        © {new Date().getFullYear()} LOGSHOP. All rights reserved.
      </div>
    </footer>
  );
}
