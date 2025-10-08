"use client";

import Link from "next/link";
import { useKBar } from "kbar";
import { useState } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { Menu, X, Command } from "lucide-react";

const routes = [
  { name: "About", pathname: "/about" },
  { name: "Career", pathname: "/career" },
  { name: "Education", pathname: "/education" },
  { name: "Open Source", pathname: "/opensource" },
  { name: "Contact", pathname: "/contact" },
] as const;

export default function AppNav() {
  const { query } = useKBar();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 lg:gap-8 absolute left-1/2 transform -translate-x-1/2">
        {routes.map(({ name, pathname: routePathname }) => {
          const isActive = pathname === routePathname;

          return (
            <Link
              key={name}
              href={routePathname}
              className={classNames(
                "font-sans uppercase text-[10px] md:text-[11px] lg:text-[12px] hover:text-white transition-colors relative",
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 py-4 px-6 z-50">
          <div className="flex flex-col gap-4">
            {routes.map(({ name, pathname: routePathname }) => {
              const isActive = pathname === routePathname;

              return (
                <Link
                  key={name}
                  href={routePathname}
                  onClick={() => setMobileMenuOpen(false)}
                  className={classNames(
                    "font-sans uppercase text-sm hover:text-white transition-colors py-2 border-b border-gray-800 relative",
                    {
                      "text-white": isActive,
                      "text-gray-400": !isActive,
                    }
                  )}
                >
                  {name}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-full bg-white" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      )}

      {/* Right Side Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => query?.toggle()}
          className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
          aria-label="Open command palette"
        >
          <Command className="w-5 h-5" />
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-md cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>
    </>
  );
}

