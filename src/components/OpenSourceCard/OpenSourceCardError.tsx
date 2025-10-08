import { AlertCircle } from "lucide-react";

import { OpenSourceCardErrorProps } from "./OpenSourceCard.types";

export default function OpenSourceCardError({ packageName }: OpenSourceCardErrorProps) {
  return (
    <li className="space-y-4">
      <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-4 h-4 text-red-400" />
          <h4 className="text-sm font-semibold text-red-400">
            Failed to Load Package
          </h4>
        </div>
        <p className="text-xs text-gray-400">
          Unable to fetch data for{" "}
          <span className="font-mono text-white">{packageName}</span>. Please
          try again later.
        </p>
      </div>
    </li>
  );
}

