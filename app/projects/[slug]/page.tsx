import { getProject, getProjects } from "@/lib/content";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      {/* ── Nav ── */}
      <nav
        className="animate-fade-in sticky top-0 z-50 flex items-center justify-between px-16 h-16 border-b"
        style={{ background: "var(--bg)", borderColor: "var(--light)" }}
      >
        <a href="/" className="nav-id" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            className="w-[34px] h-[34px] rounded-full grid place-items-center text-white shrink-0"
            style={{
              background: "linear-gradient(135deg, var(--sage), var(--warm))",
              fontFamily: "var(--font-cormorant)",
              fontSize: "1rem",
              fontWeight: 300,
            }}
          >
            C
          </div>
          <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontWeight: 400, lineHeight: 1 }}>
            Chirag Shah
          </div>
        </a>

        <div className="flex items-center nav-links" style={{ gap: "0.15rem" }}>
          {[
            { label: "About", href: "/" },
            { label: "Work", href: "/work" },
            { label: "Writing", href: "/writing" },
            { label: "Connect", href: "/#connect" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                color: "var(--mid)",
                textDecoration: "none",
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                padding: "0.4rem 0.9rem",
                transition: "color 0.2s",
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="nav-right" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.75rem" }}>
          <div className="flex items-center gap-2 nav-status" style={{ fontSize: "0.6rem", color: "var(--sage)", letterSpacing: "0.06em" }}>
            <span className="animate-blink w-[5px] h-[5px] rounded-full" style={{ background: "var(--sage)" }} />
            Open to opportunities
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* ── Project ── */}
      <article className="animate-fade-up mx-auto px-16 pt-20 pb-24" style={{ maxWidth: "740px" }}>
        {/* Back link */}
        <a
          href="/#building"
          className="btn-ghost"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--mid)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "3rem",
            transition: "color 0.2s",
          }}
        >
          ← Back
        </a>

        {/* Header */}
        <div
          style={{
            marginBottom: "3rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid var(--light)",
          }}
        >
          {project.icon && (
            <div style={{ fontSize: "2.5rem", lineHeight: 1, marginBottom: "1rem" }}>
              {project.icon}
            </div>
          )}
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "var(--fg)",
              marginBottom: "0.75rem",
            }}
          >
            {project.title}
          </h1>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--mid)", marginBottom: "1.5rem" }}>
            {project.tagline}
          </p>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--fg)",
                textDecoration: "none",
                border: "1px solid var(--fg)",
                borderRadius: "2px",
                padding: "0.5rem 1rem",
                marginBottom: "1.5rem",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              Visit the project →
            </a>
          )}

          <div className="flex flex-wrap" style={{ gap: "0.5rem" }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.08em",
                  color: "var(--mid)",
                  border: "1px solid var(--light)",
                  borderRadius: "2px",
                  padding: "0.25rem 0.6rem",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {project.body.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.9,
                color: "var(--mid)",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </>
  );
}
