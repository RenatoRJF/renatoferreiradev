import { FileText, Briefcase, FolderOpen, Github, Home } from "lucide-react";

// Define the actions
export const getActions = (router: { push: (path: string) => void }) => [
  {
    id: "home",
    name: "Home",
    shortcut: ["g", "h"],
    keywords: "home gh",
    perform: () => router.push("/"),
    icon: <Home className="w-4 h-4" />,
    section: "GO TO",
  },
  {
    id: "about",
    name: "About",
    shortcut: ["g", "a"],
    keywords: "ga about",
    perform: () => router.push("/about"),
    icon: <FileText className="w-4 h-4" />,
    section: "GO TO",
  },
  {
    id: "career",
    name: "Career",
    shortcut: ["g", "c"],
    keywords: "gc career work job",
    perform: () => router.push("/career"),
    icon: <Briefcase className="w-4 h-4" />,
    section: "GO TO",
  },
  {
    id: "projects",
    name: "Projects",
    shortcut: ["g", "p"],
    keywords: "gp projects portfolio work",
    perform: () => router.push("/projects"),
    icon: <FolderOpen className="w-4 h-4" />,
    section: "GO TO",
  },
  {
    id: "opensource",
    name: "Open Source",
    shortcut: ["g", "o"],
    keywords: "github open source go",
    perform: () => router.push("/opensource"),
    icon: <Github className="w-4 h-4" />,
    section: "GO TO",
  },
];
