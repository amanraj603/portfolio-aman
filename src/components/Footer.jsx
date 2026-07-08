"use client";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scroll = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{
      background: "var(--bg-primary)",
      borderTop: "1px solid var(--border)",
      padding: "48px 0 32px",
    }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 32, alignItems: "center", marginBottom: 40, flexWrap: "wrap" }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ fontSize: "1.6rem", fontWeight: 900, background: "var(--gradient-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 8 }}>
              AR.
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: 13, maxWidth: 220 }}>
              Building exceptional web experiences with modern technologies.
            </p>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scroll(l.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: 13, color: "var(--text-muted)", padding: "4px 10px",
                  borderRadius: 6, fontFamily: "inherit", transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-light)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            {[
              { label: "GitHub", icon: "⟨/⟩", href: "https://github.com/amanraj603" },
              { label: "LinkedIn", icon: "in", href: "https://linkedin.com/in/amanraj7604" },
              { label: "Email", icon: "✉", href: "mailto:aman603raj@gmail.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-muted)", textDecoration: "none",
                  fontWeight: 700, fontSize: 14, transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>© {new Date().getFullYear()} Aman Raj. All rights reserved.</span>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Built with Next.js & ❤️</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-grid > div:last-child { justify-content: center !important; }
          .footer-grid > div:first-child p { margin: 0 auto; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
