import type { Metadata } from "next";
import Title from "@/components/Title";
import OpenSourceCard from "@/components/OpenSourceCard";

import { openSourceProjects } from "./opensource-projects";

export const metadata: Metadata = {
  title: "Open Source",
  description: "Open source contributions by Renato Ferreira - Explore npm packages like web3-error-helper and other projects.",
};

export default function OpenSource() {
  return (
    <>
      <Title>Open Source</Title>

      <ul className="mt-8 space-y-12">
        {openSourceProjects.map((packageName) => (
          <OpenSourceCard key={packageName} packageName={packageName} />
        ))}
      </ul>
    </>
  );
}
