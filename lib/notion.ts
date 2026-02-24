if (!process.env.NOTION_TOKEN) {
  throw new Error("Missing NOTION_TOKEN environment variable");
}

export interface AboutPage {
  name: string;
  location: string;
  yearsExperience: string;
  specialization: string;
  heroHeading: string;
  status: boolean;
  photoUrl: string;
  bio1: string;
  bio2: string;
  howIWork: string;
  whatICareAbout: string;
  currently: string;
}

export async function getAboutPage(databaseId: string): Promise<AboutPage> {
  const res = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(`Notion API error: ${res.status}`);
  }

  const data = await res.json();
  const props = data.results?.[0]?.properties ?? {};

  const location =
    props.Location?.rich_text?.[0]?.plain_text ?? "";

  const yearsExperience =
    props.YearsExperience?.rich_text?.[0]?.plain_text ?? "";

  const specialization =
    props.Specialization?.rich_text?.[0]?.plain_text ?? "";

  // HeroHeading is the title field in the database
  const heroHeading =
    props.HeroHeading?.title?.[0]?.plain_text ?? "";

  const status = props.Status?.checkbox ?? false;

  const photoFile = props.Photo?.files?.[0];
  const photoUrl =
    (photoFile?.type === "external"
      ? photoFile.external?.url
      : photoFile?.type === "file"
        ? photoFile.file?.url
        : undefined) ?? "";

  const rt = (key: string) => props[key]?.rich_text?.[0]?.plain_text ?? "";

  const name           = rt("Name");
  const bio1           = rt("Bio1");
  const bio2           = rt("Bio2");
  const howIWork       = rt("HowIWork");
  const whatICareAbout = rt("WhatICareAbout");
  const currently      = rt("Currently");

  return {
    name,
    location,
    yearsExperience,
    specialization,
    heroHeading,
    status,
    photoUrl,
    bio1,
    bio2,
    howIWork,
    whatICareAbout,
    currently,
  };
}
