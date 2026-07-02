"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <a href="#hero" onClick={() => handleNav("#hero")} style={{ textDecoration: "none" }}>
            <span style={{ fontSize: "1.3rem", fontWeight: 800, letterSpacing: "-0.03em", background: "var(--gradient-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              AR.
            </span>
          </a>

          {/* Desktop Links */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="nav-links-desktop">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "8px 14px", borderRadius: "var(--radius-full)",
                  fontSize: 13, fontWeight: 500, fontFamily: "inherit",
                  color: active === l.href.slice(1) ? "var(--accent-light)" : "var(--text-secondary)",
                  background: active === l.href.slice(1) ? "var(--accent-glow)" : "transparent",
                  transition: "var(--transition)",
                }}
                onMouseEnter={(e) => { if (active !== l.href.slice(1)) e.currentTarget.style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { if (active !== l.href.slice(1)) e.currentTarget.style.color = "var(--text-secondary)"; }}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {/* Theme Toggle */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              style={{
                width: 38, height: 38, borderRadius: "50%",
                background: "var(--bg-card)", border: "1px solid var(--border)",
                cursor: "pointer", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 16, transition: "var(--transition)",
                color: "var(--text-secondary)",
              }}
              title="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <a href="mailto:aman603raj@gmail.com" className="btn btn-primary" style={{ padding: "9px 20px", fontSize: 13 }}>
              Hire Me
            </a>

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMobileOpen(true)}
              style={{
                background: "none", border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)", padding: "8px 10px",
                cursor: "pointer", color: "var(--text-primary)", display: "none",
              }}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            position: "absolute", top: 20, right: 24,
            background: "none", border: "none", cursor: "pointer",
            color: "var(--text-primary)", fontSize: 24,
          }}
        >
          ✕
        </button>
        {navLinks.map((l) => (
          <button
            key={l.href}
            onClick={() => handleNav(l.href)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)",
              fontFamily: "inherit", transition: "var(--transition)",
            }}
          >
            {l.label}
          </button>
        ))}
        <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
          <a href="https://github.com/amanraj603" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 22 }}>⟨/⟩</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
