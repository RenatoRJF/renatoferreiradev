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

      <div className="mt-8 flex gap-8">
        <div className="w-80 h-80 bg-gray-800 rounded-md flex-shrink-0"></div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Hey, I&apos;m <span className="text-white font-semibold">Renato Ferreira</span>.
          </p>
          
          <p>
            I started my journey as a{" "}
            <span className="text-white font-semibold">full-stack software engineer</span>{" "}
            back in 2013, driven by a deep passion for building things on the web.
            I&apos;m originally from Brazil, and now based in Schiedam, Netherlands,
            where I&apos;ve lived with my wife since 2019. Throughout my career,
            I&apos;ve worked with startups and large companies, focusing mainly on{" "}
            <span className="text-white font-semibold">frontend development</span>{" "}
            while keeping a strong foundation in the{" "}
            <span className="text-white font-semibold">backend</span>.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-6 text-gray-300 leading-relaxed">
        <h2 className="text-xl font-bold text-white">Bio</h2>
        
        <p>
          I love exploring new technologies and bringing them to life in real
          projects. I&apos;ve been passionate about{" "}
          <span className="text-white font-semibold">blockchain</span>,{" "}
          <span className="text-white font-semibold">crypto</span>, and{" "}
          <span className="text-white font-semibold">AI</span> for quite a while
          — areas where I&apos;ve developed strong expertise and plan to go even
          deeper.
        </p>

        <p>
          When I&apos;m not coding, you&apos;ll probably find me playing{" "}
          <span className="text-white font-semibold">piano</span> or{" "}
          <span className="text-white font-semibold">guitar</span>,{" "}
          <span className="text-white font-semibold">singing</span>, or recording
          music in my home studio. I&apos;m also a winter lover who enjoys{" "}
          <span className="text-white font-semibold">snowboarding</span>,{" "}
          <span className="text-white font-semibold">working out</span>,{" "}
          <span className="text-white font-semibold">traveling</span>, and{" "}
          <span className="text-white font-semibold">meeting new people</span>{" "}
          along the way.
        </p>
      </div>
    </>
  );
}
