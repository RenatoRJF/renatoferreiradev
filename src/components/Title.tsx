import cx from "classnames";
import { ReactNode } from "react";

interface TitleProps {
  className?: string;
  children: ReactNode;
  gradient?: string;
}

const gradients = [
  "from-cyan-200 via-blue-600 to-purple-800",
  "from-pink-200 via-red-600 to-orange-800", 
  "from-green-200 via-emerald-600 to-teal-800",
  "from-yellow-200 via-orange-600 to-red-800",
  "from-purple-200 via-pink-600 to-rose-800",
  "from-indigo-200 via-purple-600 to-pink-800",
  "from-teal-200 via-cyan-600 to-blue-800",
  "from-orange-200 via-red-600 to-pink-800"
];

export default function Title({ className, children, gradient }: TitleProps) {
  const randomGradient = gradient || gradients[Math.floor(Math.random() * gradients.length)];
  
  return (
    <h1 
      className={cx("text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold font-sans mb-4 leading-[40px] sm:leading-[48px] lg:leading-[56px] text-transparent bg-clip-text bg-gradient-to-r", randomGradient, className)}
      style={{
        animation: "fadeIn 0.3s ease-in-out",
        filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.3))"
      }}
    >
      {children}
    </h1>
  );
}
