import { getWorkRoles } from "@/lib/content";
import ThemeToggle from "@/components/ThemeToggle";

export default function Work() {
  const roles = getWorkRoles();
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
              className={label === "Work" ? "nav-link-active" : ""}
              style={{
                color: label === "Work" ? "var(--fg)" : "var(--mid)",
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

      {/* ── Header ── */}
      <div className="animate-fade-up mx-auto px-16 pt-20 pb-12" style={{ maxWidth: "1200px" }}>
        <div
          className="hero-eyebrow flex items-center mb-6"
          style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--sage)" }}
        >
          Experience
        </div>
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
            fontWeight: 300,
            lineHeight: 1.25,
            color: "var(--fg)",
          }}
        >
          Eight years building products
          <br />
          <em style={{ color: "var(--mid)", fontStyle: "italic" }}>
            across insurance, fintech, and proptech —
          </em>
          <br />
          <em style={{ color: "var(--mid)", fontStyle: "italic" }}>
            with direct ownership as a founder and operator.
          </em>
        </h1>
      </div>

      {/* ── Timeline ── */}
      <div className="animate-fade-up-late mx-auto px-16 pb-24" style={{ maxWidth: "1200px" }}>
        {roles.map((role) => (
          <div
            key={role.company + role.title}
            className="grid timeline-row"
            style={{
              gridTemplateColumns: "200px 1fr",
              gap: "4rem",
              paddingTop: "3rem",
              paddingBottom: "3rem",
              borderTop: "1px solid var(--light)",
            }}
          >
            {/* Left: meta */}
            <div className="flex flex-col" style={{ gap: "0.4rem", paddingTop: "0.25rem" }}>
              <span style={{ fontSize: "0.7rem", color: "var(--mid)", letterSpacing: "0.04em" }}>
                {role.period}
              </span>
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--mid)", opacity: 0.6 }}>
                {role.location}
              </span>
              {role.owner && (
                <span
                  style={{
                    marginTop: "0.5rem",
                    display: "inline-block",
                    fontSize: "0.55rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--bg)",
                    background: "var(--fg)",
                    borderRadius: "2px",
                    padding: "0.25rem 0.6rem",
                    width: "fit-content",
                  }}
                >
                  Owner
                </span>
              )}
              {role.skills.length > 0 && (
                <div className="flex flex-wrap" style={{ gap: "0.4rem", marginTop: "1rem" }}>
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.04em",
                        color: "var(--fg)",
                        border: "1px solid var(--mid)",
                        borderRadius: "2px",
                        padding: "0.3rem 0.7rem",
                        whiteSpace: "nowrap",
                        opacity: 0.75,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Right: content */}
            <div>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 400, color: "var(--fg)", marginBottom: "0.25rem" }}>
                {role.company}
              </h2>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--sage)", marginBottom: "1rem" }}>
                {role.title}
              </div>
              <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--mid)", maxWidth: "620px" }}>
                {role.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
