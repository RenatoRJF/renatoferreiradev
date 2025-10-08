import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const packageName = searchParams.get("package");

  if (!packageName) {
    return NextResponse.json(
      { error: "Package parameter is required" },
      { status: 400 }
    );
  }

  try {
    // Fetch package info from npm registry
    const packageResponse = await fetch(
      `https://registry.npmjs.org/${packageName}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!packageResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch npm package info" },
        { status: packageResponse.status }
      );
    }

    const packageData = await packageResponse.json();

    // Fetch download stats from npm API
    const downloadsResponse = await fetch(
      `https://api.npmjs.org/downloads/point/last-month/${packageName}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    let downloads = 0;
    
    if (downloadsResponse.ok) {
      const downloadsData = await downloadsResponse.json();
      downloads = downloadsData.downloads || 0;
    }

    return NextResponse.json({
      name: packageData.name || "",
      description: packageData.description || "",
      version: packageData["dist-tags"]?.latest || "Unknown",
      downloads,
      license: packageData.license || "Unknown",
      keywords: packageData.keywords || [],
      homepage: packageData.homepage || "",
      repository: packageData.repository?.url || "",
      lastPublished: packageData.time?.modified || packageData.time?.created,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch npm stats" },
      { status: 500 }
    );
  }
}

