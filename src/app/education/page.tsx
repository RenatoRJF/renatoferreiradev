import type { Metadata } from "next";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import Title from "@/components/Title";

export const metadata: Metadata = {
  title: "Education",
  description: "Renato Ferreira's educational background - University degree, Master's, and professional certifications.",
};

export default function Education() {
  return (
    <>
      <Title>Education</Title>

      <div className="mt-8 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            University
          </h2>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Artificial Intelligence and Digital Automation
              </h3>
              <p className="text-gray-300">UniFECAF, Brazil</p>
              <p className="text-sm text-gray-400">
                September 2024 - Present <span className="text-green-400">(In Progress)</span>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Systems Analysis and Development
              </h3>
              <p className="text-gray-300">UNIBRATEC, Brazil</p>
              <p className="text-sm text-gray-400">2013 - 2015</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Master&apos;s Degree
          </h2>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Blockchain and Crypto International
            </h3>
            <p className="text-gray-300">Nuclio School, Spain</p>
            <p className="text-sm text-gray-400">October 2022 - June 2023</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Certifications
          </h2>
          <p className="text-gray-400 text-sm">Content to be added...</p>
        </section>
      </div>
    </>
  );
}

