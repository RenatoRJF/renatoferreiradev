"use client";

import {
  KBarPortal,
  KBarSearch,
  KBarAnimator,
  KBarPositioner,
} from "kbar";

import { RenderResults } from "./RenderResults";

const CommandPalette = () => {
  return (
    <KBarPortal>
      <KBarPositioner className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
        <KBarAnimator className="w-full max-w-lg bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700">
          <KBarSearch className="w-full px-4 py-3 text-sm outline-none border-none bg-transparent placeholder-gray-400 text-white" />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

export default CommandPalette;
