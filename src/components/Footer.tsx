import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6 sm:py-8 mt-16">
      <div className="max-w-[800px] mx-auto px-4 sm:px-8">
        <div className="flex justify-center">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/renatoferreiradev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-xs"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/RenatoRJF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-xs"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
