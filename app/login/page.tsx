"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f0e8] px-4 text-[#1d2a32]">
      <div className="w-full max-w-md rounded-[18px] border border-[#d9d1c4] bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-extrabold">PolymarketAIAgent Login</h1>
        <p className="mt-2 text-sm leading-6 text-[#5e6f79]">
          Sign in with GitHub to access the private dashboard.
        </p>

        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard/overview" })}
          className="mt-5 w-full rounded-[12px] border border-[#0f7b78] bg-[#0f7b78] px-4 py-3 font-bold text-white transition hover:brightness-105"
        >
          Continue with GitHub
        </button>
      </div>
    </main>
  );
}
