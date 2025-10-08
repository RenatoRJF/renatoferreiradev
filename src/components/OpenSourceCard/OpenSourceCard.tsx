"use client";

import {
  Link,
  Star,
  Github,
  GitFork,
  Download,
  AlertCircle,
} from "lucide-react";

import { formatNumber } from "@/utils/formatNumber";
import { useOpenSourceStats } from "@/hooks/useOpenSourceStats";

import OpenSourceCardError from "./OpenSourceCardError";
import OpenSourceCardSkeleton from "./OpenSourceCardSkeleton";
import { OpenSourceCardProps } from "./OpenSourceCard.types";

export default function OpenSourceCard({ packageName }: OpenSourceCardProps) {
  const { data, isLoading, error } = useOpenSourceStats(packageName);

  if (isLoading) {
    return <OpenSourceCardSkeleton />;
  }

  if (error || !data) {
    return <OpenSourceCardError packageName={packageName} />;
  }

  return (
    <li className="space-y-4">
      <h4 className="text-lg font-bold text-white">{data.name}</h4>

      {data.description && (
        <p className="text-sm text-gray-300 leading-relaxed">
          {data.description}
        </p>
      )}

      <div className="flex items-center gap-4 flex-wrap">
        {data.githubUrl && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.githubUrl}
            className="flex items-center gap-2 text-sm text-white hover:text-yellow-400 transition-colors duration-200 group underline underline-offset-1"
          >
            <Github className="w-3 h-3 group-hover:animate-pulse transition-all duration-200" />
            GitHub
          </a>
        )}

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={data.npmUrl}
          className="flex items-center gap-2 text-sm text-white hover:text-yellow-400 transition-colors duration-200 group underline underline-offset-1"
        >
          <Link className="w-3 h-3 group-hover:animate-pulse transition-all duration-200" />
          npm
        </a>
      </div>

      <div className="flex items-center gap-6 flex-wrap text-xs text-gray-400">
        {data.stats.stars > 0 && (
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            <span>{formatNumber(data.stats.stars)} stars</span>
          </div>
        )}
        {data.stats.forks > 0 && (
          <div className="flex items-center gap-1">
            <GitFork className="w-3 h-3" />
            <span>{formatNumber(data.stats.forks)} forks</span>
          </div>
        )}
        {data.stats.openIssues > 0 && (
          <div className="flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{formatNumber(data.stats.openIssues)} issues</span>
          </div>
        )}
        {data.stats.downloads > 0 && (
          <div className="flex items-center gap-1">
            <Download className="w-3 h-3" />
            <span>{formatNumber(data.stats.downloads)} downloads/month</span>
          </div>
        )}
        {data.stats.version && (
          <div className="flex items-center gap-1">
            <span>v{data.stats.version}</span>
          </div>
        )}
      </div>
    </li>
  );
}
