import type { Metadata } from "next";
import Title from "@/components/Title";

export const metadata: Metadata = {
  title: "Other Projects",
  description: "Discover other projects by Renato Ferreira - A collection of personal projects and side work.",
};

export default function Projects() {
  return (
    <>
      <Title>Other Projects</Title>
      <p className="text-white">This is the Other projects page content.</p>
    </>
  );
}
