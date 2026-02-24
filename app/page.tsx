import Image from "next/image";
import { getAboutContent, getProjects } from "@/lib/content";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const about = getAboutContent();
  const projects = getProjects();

  return (
    <>
      {/* ── Nav ── */}
      <nav
        className="animate-fade-in sticky top-0 z-50 flex items-center justify-between px-16 h-16 border-b"
        style={{ background: "var(--bg)", borderColor: "var(--light)" }}
      >
        {/* Identity */}
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
            {(about.name || "Chirag Shah")[0]}
          </div>
          <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontWeight: 400, lineHeight: 1 }}>
            {about.name || "Chirag Shah"}
          </div>
        </a>

        {/* Links */}
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
              className={label === "About" ? "nav-link-active" : ""}
              style={{
                color: label === "About" ? "var(--fg)" : "var(--mid)",
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

        {/* Status + Theme */}
        <div className="flex items-center gap-3 nav-right">
          {about.status && (
            <div
              className="flex items-center gap-2 nav-status"
              style={{
                fontSize: "0.6rem",
                color: "var(--sage)",
                letterSpacing: "0.06em",
              }}
            >
              <span
                className="animate-blink w-[5px] h-[5px] rounded-full"
                style={{ background: "var(--sage)" }}
              />
              Open to opportunities
            </div>
          )}
          <ThemeToggle />
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        className="animate-fade-up grid items-center mx-auto px-16 hero-grid"
        style={{
          gridTemplateColumns: "1fr 420px",
          gap: 0,
          minHeight: "calc(100vh - 64px)",
          maxWidth: "1200px",
        }}
      >
        {/* Left: text */}
        <div className="hero-text" style={{ paddingRight: "5rem", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div
            className="hero-eyebrow flex items-center mb-6"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--sage)",
            }}
          >
            About
          </div>

          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.25,
              marginBottom: "2rem",
              color: "var(--fg)",
            }}
          >
            {about.heroHeading || "I build products at the intersection of data and human behavior."}
          </h1>

          {about.bio.slice(0, 2).map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "var(--mid)",
                maxWidth: "460px",
                marginBottom: "1.5rem",
              }}
            >
              {paragraph}
            </p>
          ))}

          {/* Details strip */}
          <div
            className="flex flex-wrap"
            style={{
              gap: "1.5rem",
              marginTop: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--light)",
            }}
          >
            {about.location && (
              <div className="flex flex-col" style={{ gap: "0.25rem" }}>
                <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--mid)" }}>
                  Based in
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--fg)", fontWeight: 400 }}>
                  {about.location}
                </span>
              </div>
            )}
            {about.yearsExperience && (
              <div className="flex flex-col" style={{ gap: "0.25rem" }}>
                <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--mid)" }}>
                  Experience
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--fg)", fontWeight: 400 }}>
                  {about.yearsExperience}+ years
                </span>
              </div>
            )}
            {about.specialization && (
              <div className="flex flex-col" style={{ gap: "0.25rem" }}>
                <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--mid)" }}>
                  Specialization
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--fg)", fontWeight: 400 }}>
                  {about.specialization}
                </span>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center" style={{ gap: "1rem", marginTop: "2.5rem" }}>
            <a
              href="/work"
              style={{
                background: "var(--fg)",
                color: "var(--bg)",
                fontFamily: "var(--font-jost)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 400,
                padding: "0.75rem 1.5rem",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "background 0.2s, transform 0.15s",
              }}
            >
              View my work
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-ghost"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--mid)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              Download resume
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="hero-photo" style={{ position: "relative", height: "560px", alignSelf: "center" }}>
          <div className="photo-frame">
            {about.photoUrl ? (
              <Image
                src={about.photoUrl}
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div
                className="w-full h-full flex flex-col items-center justify-center"
                style={{
                  background: "linear-gradient(160deg, #D4E0D5 0%, #C8B89A 60%, #B8A88A 100%)",
                  gap: "1rem",
                }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1C1B18" strokeWidth="1" style={{ opacity: 0.25 }}>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(28,27,24,0.35)",
                    fontFamily: "var(--font-jost)",
                  }}
                >
                  Your photo here
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Bio continued ── */}
      {about.bio.length > 2 && (
        <div
          className="animate-fade-up-late mx-auto px-16 pb-12"
          style={{ maxWidth: "1200px", borderTop: "1px solid var(--light)", paddingTop: "3rem" }}
        >
          <div className="grid bio-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            {about.bio.slice(2).map((paragraph, i) => (
              <p key={i} style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--mid)" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* ── Building ── */}
      <div
        id="building"
        className="animate-fade-up-late mx-auto px-16 pb-16"
        style={{ maxWidth: "1200px", borderTop: "1px solid var(--light)", paddingTop: "3.5rem" }}
      >
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--sage)",
              marginBottom: "0.6rem",
            }}
          >
            Building
          </div>
          <p style={{ fontSize: "0.95rem", color: "var(--mid)", lineHeight: 1.7 }}>
            Projects I&apos;ve built to solve real problems — with AI, data, and a bit of stubbornness.
          </p>
        </div>

        <div
          className="grid proj-grid"
          style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
        >
          {projects.map((project) => (
            <div
              key={project.slug}
              style={{
                background: "var(--card)",
                borderRadius: "6px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                boxShadow: "0 1px 4px rgba(27,38,49,0.08), 0 4px 16px rgba(27,38,49,0.06)",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    color: "var(--fg)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--mid)" }}>
                  {project.tagline}
                </p>
              </div>

              <div className="flex flex-wrap" style={{ gap: "0.4rem" }}>
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.55rem",
                      letterSpacing: "0.08em",
                      color: "var(--mid)",
                      border: "1px solid var(--light)",
                      borderRadius: "2px",
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center" style={{ gap: "1.25rem", marginTop: "auto" }}>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--fg)",
                      textDecoration: "none",
                    }}
                  >
                    Visit →
                  </a>
                )}
                <a
                  href={`/projects/${project.slug}`}
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--mid)",
                    textDecoration: "none",
                  }}
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Extras ── */}
      <div
        className="animate-fade-up-late mx-auto grid extras-grid"
        style={{
          borderTop: "1px solid var(--light)",
          maxWidth: "1200px",
          padding: "3.5rem 4rem",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "3rem",
        }}
      >
        {[
          {
            heading: "How I work",
            body: about.howIWork,
          },
          {
            heading: "What I care about",
            body: about.whatICareAbout,
          },
          {
            heading: "Currently",
            body: about.currently,
          },
        ].map(({ heading, body }) => (
          <div key={heading}>
            <h4
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--sage)",
                marginBottom: "1rem",
              }}
            >
              {heading}
            </h4>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--mid)" }}>
              {body as string}
            </p>
          </div>
        ))}
      </div>

      {/* ── Connect ── */}
      <div
        id="connect"
        className="animate-fade-up-late mx-auto px-16 pb-16"
        style={{
          maxWidth: "1200px",
          borderTop: "1px solid var(--light)",
          paddingTop: "1.75rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--mid)", opacity: 0.6 }}>
          Get in touch
        </span>
        {about.email && (
          <a
            href={`mailto:${about.email}`}
            style={{ fontSize: "0.72rem", letterSpacing: "0.08em", color: "var(--mid)", textDecoration: "none", transition: "color 0.2s" }}
          >
            Email
          </a>
        )}
        {about.linkedin && (
          <a
            href={about.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.72rem", letterSpacing: "0.08em", color: "var(--mid)", textDecoration: "none", transition: "color 0.2s" }}
          >
            LinkedIn
          </a>
        )}
      </div>
    </>
  );
}
