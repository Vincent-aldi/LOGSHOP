const statusStyle = {
  Aktif: "bg-ink text-paper",
  Ditangguhkan: "border border-red-300 text-red-500",
};

export default function UsersTable({ users, onToggleStatus }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-smoke text-xs uppercase tracking-wide text-mute">
            <th className="px-5 py-3 font-medium">Nama</th>
            <th className="px-5 py-3 font-medium">Email</th>
            <th className="px-5 py-3 font-medium">Role</th>
            <th className="px-5 py-3 font-medium">Bergabung</th>
            <th className="px-5 py-3 font-medium">Status</th>
            <th className="px-5 py-3 font-medium text-right">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b border-line last:border-0">
              <td className="px-5 py-4 font-medium text-ink">{u.name}</td>
              <td className="px-5 py-4 text-mute">{u.email}</td>
              <td className="px-5 py-4 text-mute">{u.role}</td>
              <td className="px-5 py-4 text-mute">{u.joined}</td>
              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[u.status]}`}
                >
                  {u.status}
                </span>
              </td>
              <td className="px-5 py-4 text-right">
                <button
                  type="button"
                  onClick={() => onToggleStatus(u.id)}
                  className="text-xs font-semibold text-mute hover:text-ink focus-ring"
                >
                  {u.status === "Aktif" ? "Tangguhkan" : "Aktifkan"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
