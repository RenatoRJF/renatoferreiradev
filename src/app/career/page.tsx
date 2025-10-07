import { Link } from "lucide-react";

import Title from "@/components/Title";

import { careerHistory } from "./career-history";

export default function Career() {
  return (
    <>
      <Title>Career</Title>

      <ul className="mt-8 space-y-8">
        {careerHistory.map((job, index) => (
          <li key={index} className="space-y-2">
            <h4 className="text-lg font-bold text-white">{job.title}</h4>

            <div className="flex items-center gap-2">
              {job.companyUrl ? (
                <a
                  target="_blank"
                  href={job.companyUrl}
                  className="flex items-center gap-2 text-sm text-white hover:text-yellow-400 transition-colors duration-200 group"
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  <Link className="w-3 h-3 group-hover:animate-pulse transition-all duration-200" />
                  {job.company}
                </a>
              ) : (
                <span className="text-sm text-white">{job.company}</span>
              )}
              {job.location && (
                <span className="text-sm text-gray-400">• {job.location}</span>
              )}
            </div>

            <div className="text-sm text-gray-400">{job.period}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
