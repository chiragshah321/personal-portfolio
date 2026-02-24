import { getWritingArticles } from "@/lib/content";
import ThemeToggle from "@/components/ThemeToggle";

export default function Writing() {
  const articles = getWritingArticles();

  return (
    <>
      {/* ── Nav ── */}
      <nav
        className="animate-fade-in sticky top-0 z-50 flex items-center justify-between px-16 h-16 border-b"
        style={{ background: "var(--bg)", borderColor: "var(--light)" }}
      >
        <a href="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.75rem" }}>
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

        <div className="flex items-center" style={{ gap: "0.15rem" }}>
          {[
            { label: "About", href: "/" },
            { label: "Work", href: "/work" },
            { label: "Writing", href: "/writing" },
            { label: "Contact", href: "/#connect" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={label === "Writing" ? "nav-link-active" : ""}
              style={{
                color: label === "Writing" ? "var(--fg)" : "var(--mid)",
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

        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.75rem" }}>
          <div className="flex items-center gap-2" style={{ fontSize: "0.6rem", color: "var(--sage)", letterSpacing: "0.06em" }}>
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
          Writing
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
          Essays on thinking,
          <br />
          <em style={{ color: "var(--mid)", fontStyle: "italic" }}>
            decisions, and the examined life.
          </em>
        </h1>
      </div>

      {/* ── Article list ── */}
      <div className="animate-fade-up-late mx-auto px-16 pb-24" style={{ maxWidth: "1200px" }}>
        {articles.map((article, i) => (
          <a
            key={article.slug}
            href={`/writing/${article.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              className="group flex items-center justify-between"
              style={{
                borderTop: "1px solid var(--light)",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                cursor: "pointer",
              }}
            >
              <div className="flex items-baseline gap-6">
                <span
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    color: "var(--mid)",
                    opacity: 0.5,
                    minWidth: "1.5rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.35rem",
                    fontWeight: 400,
                    color: "var(--fg)",
                    transition: "color 0.2s",
                  }}
                >
                  {article.title}
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "var(--mid)",
                  opacity: 0.4,
                  transition: "opacity 0.2s, transform 0.2s",
                  display: "inline-block",
                }}
              >
                →
              </span>
            </div>
          </a>
        ))}
        <div style={{ borderTop: "1px solid var(--light)" }} />
      </div>
    </>
  );
}
