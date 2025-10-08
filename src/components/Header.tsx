"use client";

import Link from "next/link";
import AppNav from "@/components/AppNav";

export default function Header() {
  return (
    <header className="px-6 pb-6 pt-0 flex justify-between items-center min-w-screen relative">
      <Link
        href="/"
        className="text-white font-extrabold text-2xl font-sans hover:opacity-70 transition-opacity"
      >
        R
      </Link>

      <AppNav />
    </header>
  );
}
