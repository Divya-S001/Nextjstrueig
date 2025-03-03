"use client";

import { useAuth } from "../contexts/AuthContext";

export default function ProtectedPage() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center py-20">
      <h1 className="text-3xl font-bold mb-4 text-black">
        Welcome, {user?.name} ({user?.role})
      </h1>
      <button
        onClick={logout}
        className="bg-blue-500 text-black px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
