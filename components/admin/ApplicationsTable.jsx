const statusStyle = {
  Menunggu: "border border-line text-mute",
  Disetujui: "bg-ink text-paper",
  Ditolak: "border border-red-300 text-red-500",
};

export default function ApplicationsTable({ applications, onApprove, onReject }) {
  if (applications.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line p-10 text-center text-sm text-mute">
        Belum ada pendaftaran desainer baru.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-smoke text-xs uppercase tracking-wide text-mute">
            <th className="px-5 py-3 font-medium">Nama</th>
            <th className="px-5 py-3 font-medium">Email</th>
            <th className="px-5 py-3 font-medium">Kategori</th>
            <th className="px-5 py-3 font-medium">Portofolio</th>
            <th className="px-5 py-3 font-medium">Status</th>
            <th className="px-5 py-3 font-medium text-right">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((a) => (
            <tr key={a.id} className="border-b border-line last:border-0 align-top">
              <td className="px-5 py-4 font-medium text-ink">{a.name}</td>
              <td className="px-5 py-4 text-mute">{a.email}</td>
              <td className="px-5 py-4 text-mute">
                <div className="flex flex-wrap gap-1">
                  {a.categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-line px-2 py-0.5 text-xs"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-5 py-4 text-mute">{a.portfolio}</td>
              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[a.status]}`}
                >
                  {a.status}
                </span>
              </td>
              <td className="px-5 py-4">
                {a.status === "Menunggu" ? (
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => onApprove(a.id)}
                      className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-paper transition-opacity hover:opacity-90 focus-ring"
                    >
                      Setujui
                    </button>
                    <button
                      type="button"
                      onClick={() => onReject(a.id)}
                      className="rounded-full border border-ink px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
                    >
                      Tolak
                    </button>
                  </div>
                ) : (
                  <span className="block text-right text-xs text-mute">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
