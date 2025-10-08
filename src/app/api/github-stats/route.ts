import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const repo = searchParams.get("repo");

  if (!repo) {
    return NextResponse.json(
      { error: "Repository parameter is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub stats" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      name: data.name || "",
      description: data.description || "",
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
      openIssues: data.open_issues_count || 0,
      watchers: data.watchers_count || 0,
      language: data.language || "Unknown",
      homepage: data.homepage || "",
      topics: data.topics || [],
      lastUpdated: data.updated_at,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}

