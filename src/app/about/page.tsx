import type { Metadata } from "next";
import Title from "@/components/Title";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Renato Ferreira - A passionate full-stack developer exploring new technologies and ways of working.",
};

export default function About() {
  return (
    <>
      <Title>
        Life is a like a good song.
        <br />
        Play it and enjoy it.
      </Title>
    </>
  );
}
