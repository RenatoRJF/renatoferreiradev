"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useKBar } from "kbar";
import { Command } from "lucide-react";

const routes = [
  { name: "About", pathname: "/about" },
  { name: "Career", pathname: "/career" },
  { name: "Education", pathname: "/education" },
  { name: "Open Source", pathname: "/opensource" },
  { name: "Contact", pathname: "/contact" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const { query } = useKBar();
  
  const handleCommandClick = () => {
    if (query) {
      query.toggle();
    }
  };
  
  return (
    <header className="px-6 pb-6 pt-0 flex justify-between items-center min-w-screen">
      <Link
        href="/"
        className="text-white font-extrabold text-2xl font-sans hover:opacity-70 transition-opacity"
      >
        R
      </Link>

      <nav className="flex gap-8 absolute left-1/2 transform -translate-x-1/2">
        {routes.map(({ name, pathname: routePathname }) => {
          const isActive = pathname === routePathname;

          return (
            <Link
              key={name}
              href={routePathname}
              className={classNames(
                "font-sans uppercase text-[12px] hover:text-white transition-colors relative",
                {
                  "text-white": isActive,
                  "text-gray-400": !isActive,
                }
              )}
            >
              {name}

              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white animate-fade-in" />
              )}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={handleCommandClick}
        className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
        aria-label="Open command palette"
      >
        <Command className="w-5 h-5" />
      </button>
    </header>
  );
}
