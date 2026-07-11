"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import {
  initialWorks,
  monthlyRevenue,
  recentTransactions,
  formatRupiah,
} from "@/lib/designer-data";
import StatsCards from "./StatsCards";
import RevenueChart from "./RevenueChart";
import WorksTable from "./WorksTable";
import RecentTransactions from "./RecentTransactions";
import UploadWorkForm from "./UploadWorkForm";

const tabs = [
  { key: "overview", label: "Ringkasan" },
  { key: "works", label: "Karya Saya" },
  { key: "earnings", label: "Pendapatan" },
];

export default function DashboardApp() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [works, setWorks] = useState(initialWorks);
  const [showUploadForm, setShowUploadForm] = useState(false);

  const availableBalance = recentTransactions
    .filter((t) => t.status === "Selesai")
    .reduce((sum, t) => sum + t.amount, 0);

  function handleAddWork(work) {
    setWorks((prev) => [work, ...prev]);
    setShowUploadForm(false);
  }

  function handleRemoveWork(id) {
    setWorks((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <div className="mx-auto max-w-content px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-mute">
            Dashboard Desainer
          </p>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink">
            Halo, {user.email.split("@")[0]} 👋
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

      <div className="mt-6 flex gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-ring ${
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink hover:border-ink"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 space-y-8">
        {activeTab === "overview" && (
          <>
            <StatsCards works={works} transactions={recentTransactions} />
            <RevenueChart data={monthlyRevenue} />
            <div>
              <h2 className="font-display text-lg font-bold text-ink">
                Transaksi Terbaru
              </h2>
              <div className="mt-4">
                <RecentTransactions transactions={recentTransactions} limit={4} />
              </div>
            </div>
          </>
        )}

        {activeTab === "works" && (
          <>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-display text-lg font-bold text-ink">
                Karya Saya ({works.length})
              </h2>
              {!showUploadForm && (
                <button
                  type="button"
                  onClick={() => setShowUploadForm(true)}
                  className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90 focus-ring"
                >
                  Upload Karya Baru
                </button>
              )}
            </div>

            {showUploadForm && (
              <UploadWorkForm
                onSubmit={handleAddWork}
                onCancel={() => setShowUploadForm(false)}
              />
            )}

            <WorksTable works={works} onRemove={handleRemoveWork} />
          </>
        )}

        {activeTab === "earnings" && (
          <>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-line bg-paper p-6 md:col-span-1">
                <p className="text-xs font-medium uppercase tracking-wide text-mute">
                  Saldo Tersedia
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-ink">
                  {formatRupiah(availableBalance)}
                </p>
                <button
                  type="button"
                  className="mt-6 w-full rounded-full bg-ink py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90 focus-ring"
                >
                  Tarik Dana
                </button>
                <p className="mt-3 text-xs text-mute">
                  Pencairan diproses 1-3 hari kerja ke rekening terdaftar.
                </p>
              </div>
              <div className="md:col-span-2">
                <RevenueChart data={monthlyRevenue} />
              </div>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-ink">
                Riwayat Transaksi
              </h2>
              <div className="mt-4">
                <RecentTransactions transactions={recentTransactions} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
