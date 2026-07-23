"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import {
  initialPendingWorks,
  initialApplications,
  platformUsers as initialUsers,
  monthlyPlatformRevenue,
} from "@/lib/admin-data";
import PlatformStats from "./PlatformStats";
import CurationList from "./CurationList";
import ApplicationsTable from "./ApplicationsTable";
import UsersTable from "./UsersTable";
import RevenueChart from "@/components/dashboard/RevenueChart";

const tabs = [
  { key: "overview", label: "Ringkasan" },
  { key: "curation", label: "Kurasi Karya" },
  { key: "applications", label: "Pendaftaran Desainer" },
  { key: "users", label: "Pengguna" },
];

export default function AdminApp() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [pendingWorks, setPendingWorks] = useState(initialPendingWorks);
  const [applications, setApplications] = useState(initialApplications);
  const [users, setUsers] = useState(initialUsers);

  function handleApproveWork(id) {
    setPendingWorks((prev) => prev.filter((w) => w.id !== id));
  }
  function handleRejectWork(id) {
    setPendingWorks((prev) => prev.filter((w) => w.id !== id));
  }

  function handleApproveApplication(id) {
    setApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: "Disetujui" } : a))
    );
  }
  function handleRejectApplication(id) {
    setApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: "Ditolak" } : a))
    );
  }

  function handleToggleUserStatus(id) {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Aktif" ? "Ditangguhkan" : "Aktif" }
          : u
      )
    );
  }

  const pendingApplicationsCount = applications.filter(
    (a) => a.status === "Menunggu"
  ).length;

  return (
    <div className="mx-auto max-w-content px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-mute">
            Dashboard Admin
          </p>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">
            Halo, {user.email.split("@")[0]} 🛠️
          </h1>
        </div>
        <button
          type="button"
          onClick={logout}
          className="rounded-full border border-ink px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper focus-ring"
        >
          Logout
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          const badge =
            tab.key === "curation"
              ? pendingWorks.length
              : tab.key === "applications"
              ? pendingApplicationsCount
              : null;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              aria-pressed={isActive}
              className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-ring ${
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink hover:border-ink"
              }`}
            >
              {tab.label}
              {badge > 0 && (
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                    isActive ? "bg-paper text-ink" : "bg-ink text-paper"
                  }`}
                >
                  {badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-8 space-y-8">
        {activeTab === "overview" && (
          <>
            <PlatformStats />
            <RevenueChart data={monthlyPlatformRevenue} />
          </>
        )}

        {activeTab === "curation" && (
          <>
            <h2 className="font-display text-lg font-bold text-ink">
              Karya Menunggu Kurasi ({pendingWorks.length})
            </h2>
            <CurationList
              works={pendingWorks}
              onApprove={handleApproveWork}
              onReject={handleRejectWork}
            />
          </>
        )}

        {activeTab === "applications" && (
          <>
            <h2 className="font-display text-lg font-bold text-ink">
              Pendaftaran Desainer Baru
            </h2>
            <ApplicationsTable
              applications={applications}
              onApprove={handleApproveApplication}
              onReject={handleRejectApplication}
            />
          </>
        )}

        {activeTab === "users" && (
          <>
            <h2 className="font-display text-lg font-bold text-ink">
              Pengguna Platform ({users.length})
            </h2>
            <UsersTable users={users} onToggleStatus={handleToggleUserStatus} />
          </>
        )}
      </div>
    </div>
  );
}
