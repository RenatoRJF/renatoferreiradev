import { useQuery } from "@tanstack/react-query";
import { fetchProjectStats } from "@/utils/fetchProjectStats";

export function useOpenSourceStats(packageName: string) {
  return useQuery({
    queryKey: ["opensource-stats", packageName],
    queryFn: () => fetchProjectStats(packageName),
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
  });
}

