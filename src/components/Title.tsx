"use client";

import cx from "classnames";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface TitleProps {
  className?: string;
  children: ReactNode;
  gradient?: string;
}

const gradients = [
  "from-cyan-200 via-blue-600 to-purple-800",
  "from-green-200 via-emerald-600 to-teal-800",
  "from-purple-200 via-indigo-600 to-blue-800",
  "from-indigo-200 via-purple-600 to-pink-800",
  "from-teal-200 via-cyan-600 to-blue-800",
  "from-emerald-200 via-green-600 to-teal-800",
  "from-blue-200 via-cyan-600 to-purple-800",
  "from-violet-200 via-purple-600 to-indigo-800"
];

// Hash function to generate deterministic gradient based on route
function getGradientIndex(pathname: string): number {
  let hash = 0;
  for (let i = 0; i < pathname.length; i++) {
    const char = pathname.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash) % gradients.length;
}

export default function Title({ className, children, gradient }: TitleProps) {
  const pathname = usePathname();
  const selectedGradient = gradient || gradients[getGradientIndex(pathname)];
  
  return (
    <h1 
      className={cx(
        "text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold font-sans mb-4 leading-[40px] sm:leading-[48px] lg:leading-[56px] text-transparent bg-clip-text bg-gradient-to-r animate-fade-in drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]",
        selectedGradient, 
        className
      )}
    >
      {children}
    </h1>
  );
}
