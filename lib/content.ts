import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface AboutContent {
  name: string;
  heroHeading: string;
  location: string;
  yearsExperience: string;
  specialization: string;
  status: boolean;
  photoUrl: string;
  email: string;
  linkedin: string;
  howIWork: string;
  whatICareAbout: string;
  currently: string;
  bio: string[];
}

export function getAboutContent(): AboutContent {
  const raw = fs.readFileSync(path.join(contentDir, "about.md"), "utf-8");
  const { data, content } = matter(raw);

  const bio = content
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return {
    name:             data.name            ?? "",
    heroHeading:      data.heroHeading     ?? "",
    location:         data.location        ?? "",
    yearsExperience:  data.yearsExperience ?? "",
    specialization:   data.specialization  ?? "",
    status:           data.status          ?? false,
    photoUrl:         data.photoUrl        ?? "",
    email:            data.email           ?? "",
    linkedin:         data.linkedin        ?? "",
    howIWork:         data.howIWork        ?? "",
    whatICareAbout:   data.whatICareAbout  ?? "",
    currently:        data.currently       ?? "",
    bio,
  };
}

export interface WorkRole {
  company: string;
  title: string;
  period: string;
  location: string;
  owner: boolean;
  skills: string[];
  summary: string;
}

export interface WritingArticle {
  slug: string;
  title: string;
  body: string[];
}

export function getWritingArticles(): Pick<WritingArticle, "slug" | "title">[] {
  const dir = path.join(contentDir, "writing");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title ?? "",
      };
    });
}

export function getWritingArticle(slug: string): WritingArticle | null {
  const filePath = path.join(contentDir, "writing", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const body = content
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return { slug, title: data.title ?? "", body };
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  url: string;
  status: string;
  tech: string[];
  icon: string;
  body: string[];
}

export function getProjects(): Omit<Project, "body">[] {
  const dir = path.join(contentDir, "projects");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug:    file.replace(/\.md$/, ""),
        title:   data.title   ?? "",
        tagline: data.tagline ?? "",
        url:     data.url     ?? "",
        status:  data.status  ?? "",
        tech:    data.tech    ?? [],
        icon:    data.icon    ?? "",
      };
    });
}

export function getProject(slug: string): Project | null {
  const filePath = path.join(contentDir, "projects", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const body = content
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return {
    slug,
    title:   data.title   ?? "",
    tagline: data.tagline ?? "",
    url:     data.url     ?? "",
    status:  data.status  ?? "",
    tech:    data.tech    ?? [],
    icon:    data.icon    ?? "",
    body,
  };
}

export function getWorkRoles(): WorkRole[] {
  const workDir = path.join(contentDir, "work");
  const files = fs
    .readdirSync(workDir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(workDir, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      company:  data.company  ?? "",
      title:    data.title    ?? "",
      period:   data.period   ?? "",
      location: data.location ?? "",
      owner:    data.owner    ?? false,
      skills:   data.skills   ?? [],
      summary:  content.trim(),
    };
  });
}
