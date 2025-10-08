interface GitHubStats {
  name: string;
  description: string;
  stars: number;
  forks: number;
  openIssues: number;
  watchers: number;
  language: string;
  homepage: string;
  topics: string[];
  lastUpdated: string;
}

interface NpmStats {
  name: string;
  description: string;
  version: string;
  downloads: number;
  license: string;
  keywords: string[];
  homepage: string;
  repository: string;
  lastPublished: string;
}

export interface ProjectData {
  name: string;
  description: string;
  githubUrl: string;
  npmUrl: string;
  stats: {
    stars: number;
    forks: number;
    openIssues: number;
    downloads: number;
    version: string;
  };
}

function extractGithubRepo(repositoryUrl: string): string | null {
  const repoMatch = repositoryUrl.match(/github\.com\/([^/]+\/[^/.]+)/);
  return repoMatch ? repoMatch[1] : null;
}

export async function fetchProjectStats(packageName: string): Promise<ProjectData> {
  // Fetch npm data first to get the GitHub repo
  const npmResponse = await fetch(`/api/npm-stats?package=${packageName}`);
  const npm: NpmStats | undefined = npmResponse.ok
    ? await npmResponse.json()
    : undefined;

  // Extract GitHub repo from npm repository URL
  let github: GitHubStats | undefined;
  let githubRepo: string | null = null;

  if (npm?.repository) {
    githubRepo = extractGithubRepo(npm.repository);
    if (githubRepo) {
      const githubResponse = await fetch(`/api/github-stats?repo=${githubRepo}`);
      github = githubResponse.ok ? await githubResponse.json() : undefined;
    }
  }

  // Transform data into a clean structure
  return {
    name: github?.name || npm?.name || packageName,
    description: github?.description || npm?.description || "",
    githubUrl: githubRepo ? `https://github.com/${githubRepo}` : "",
    npmUrl: `https://www.npmjs.com/package/${packageName}`,
    stats: {
      stars: github?.stars || 0,
      forks: github?.forks || 0,
      openIssues: github?.openIssues || 0,
      downloads: npm?.downloads || 0,
      version: npm?.version || "",
    },
  };
}

