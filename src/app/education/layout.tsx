import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "Renato Ferreira's educational background - University degrees, Master's in Blockchain, and AI studies.",
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

