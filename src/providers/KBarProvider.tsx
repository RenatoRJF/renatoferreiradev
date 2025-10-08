"use client";

import { useRouter } from "next/navigation";
import { KBarProvider as KBar } from "kbar";

import { getActions } from "@/components/CommandPalette/actions";

export default function KBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return <KBar actions={getActions(router)}>{children}</KBar>;
}

