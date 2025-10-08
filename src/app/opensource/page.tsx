import Title from "@/components/Title";
import OpenSourceCard from "@/components/OpenSourceCard";

import { openSourceProjects } from "./opensource-projects";

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
