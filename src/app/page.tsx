"use client";

import { Command } from "lucide-react";

import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <div>
        <Title gradient="from-emerald-400 via-teal-500 to-cyan-600">Renato Ferreira</Title>

        <p className="text-gray-300 text-lg font-medium mt-6 mb-8 max-w-2xl leading-relaxed">
          Passionate full-stack developer with a strong frontend focus,
          exploring the worlds of Blockchain and AI to craft impactful digital
          products.
        </p>

        <div className="flex items-center space-x-1 mt-8 text-gray-400">
          <span className="text-sm">Press</span>

          <Command className="w-4 h-4 bg-gray-700 p-1 rounded" />

          <span className="text-sm">+</span>

          <span className="text-[10px] font-mono bg-gray-700 px-[6px] py-[1px] rounded">
            K
          </span>

          <span className="text-sm">for quick usage</span>
        </div>
      </div>
    </div>
  );
}
