"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "logshop-user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      // abaikan jika localStorage tidak tersedia
    }
    setHydrated(true);
  }, []);

  function login(email) {
    const nextUser = { email };
    setUser(nextUser);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    } catch (e) {
      // abaikan
    }
  }

  function logout() {
    setUser(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // abaikan
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, hydrated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth harus dipakai di dalam <AuthProvider>");
  }
  return ctx;
}
