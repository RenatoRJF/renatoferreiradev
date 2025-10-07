"use client";

import { useRouter } from "next/navigation";

import {
  KBarPortal,
  KBarSearch,
  KBarAnimator,
  KBarProvider,
  KBarPositioner,
} from "kbar";

import { getActions } from "./actions";
import { RenderResults } from "./RenderResults";

const CommandPalette = () => {
  const router = useRouter();

  return (
    <KBarProvider actions={getActions(router)}>
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <KBarAnimator className="w-full max-w-lg bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700">
            <KBarSearch className="w-full px-4 py-3 text-lg outline-none border-none bg-transparent placeholder-gray-400 text-white" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  );
};

export default CommandPalette;
