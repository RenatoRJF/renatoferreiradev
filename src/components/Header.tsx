"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const routes = [
  { name: "About", pathname: "/about" },
  { name: "Career", pathname: "/career" },
  { name: "Other projects", pathname: "/projects" },
  { name: "Open Source", pathname: "/opensource" },
] as const;

export default function Header() {
  const pathname = usePathname();
  
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
    </header>
  );
}
