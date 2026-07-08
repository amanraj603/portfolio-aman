"use client";
import { useState, useEffect, useRef } from "react";

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
  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileOpen]);

  const handleNav = (href) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="container nav-inner">

          {/* Logo */}
          <a href="#hero" onClick={() => handleNav("#hero")} className="nav-logo">
            <span>AR.</span>
          </a>

          {/* Desktop Links – centered */}
          <div className="nav-links-desktop">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className={`nav-link ${active === l.href.slice(1) ? "active" : ""}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="nav-controls">
            {/* Theme Toggle */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              className="theme-btn"
              title="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Hire Me – always visible */}
            <a
              href="mailto:aman603raj@gmail.com"
              className="btn btn-primary hire-btn"
            >
              Hire Me
            </a>

            {/* Hamburger – mobile only */}
            <button
              ref={hamburgerRef}
              className={`hamburger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* ── Dropdown Menu (mobile only) ── */}
        <div
          ref={dropdownRef}
          className={`nav-dropdown ${mobileOpen ? "open" : ""}`}
          aria-hidden={!mobileOpen}
        >
          <div className="nav-dropdown-inner">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className={`dropdown-link ${active === l.href.slice(1) ? "active" : ""}`}
              >
                <span className="dropdown-dot" />
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        /* ── Nav shell ── */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 500;
          transition: var(--transition);
          max-width: 100vw;
        }
        nav.scrolled {
          background: rgba(10,10,15,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        [data-theme="light"] nav.scrolled {
          background: rgba(250,250,250,0.9);
        }

        /* ── Nav inner row ── */
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
          gap: 8px;
        }

        /* Logo */
        .nav-logo {
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-logo span {
          display: block;
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
        }

        /* Desktop nav links */
        .nav-links-desktop {
          display: flex;
          gap: 4px;
          align-items: center;
          flex: 1;
          justify-content: center;
        }
        .nav-link {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 500;
          font-family: inherit;
          color: var(--text-secondary);
          transition: var(--transition);
          white-space: nowrap;
        }
        .nav-link:hover { color: var(--text-primary); }
        .nav-link.active {
          color: var(--accent-light);
          background: var(--accent-glow);
        }

        /* Right controls */
        .nav-controls {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-shrink: 0;
        }

        /* Theme button */
        .theme-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: var(--transition);
          color: var(--text-secondary);
          flex-shrink: 0;
        }
        .theme-btn:hover {
          border-color: var(--accent);
          background: var(--accent-glow);
        }

        /* Hire Me button */
        .hire-btn {
          padding: 9px 20px;
          font-size: 13px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Hamburger (hidden on desktop) */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: none;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          cursor: pointer;
          padding: 8px;
          flex-shrink: 0;
          transition: var(--transition);
        }
        .hamburger span {
          display: block;
          width: 18px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.2s ease;
          transform-origin: center;
        }
        /* Animate to X when open */
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .hamburger:hover { border-color: var(--accent); }
        .hamburger:hover span { background: var(--accent-light); }

        /* ── Dropdown Menu ── */
        .nav-dropdown {
          display: none;          /* hidden on desktop */
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.3s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.25s ease;
          background: rgba(10,10,15,0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        [data-theme="light"] .nav-dropdown {
          background: rgba(250,250,250,0.96);
        }
        .nav-dropdown.open {
          max-height: 400px;
          opacity: 1;
        }

        .nav-dropdown-inner {
          display: flex;
          flex-direction: column;
          padding: 8px 16px 12px;
          gap: 4px;
        }

        .dropdown-link {
          display: flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          text-align: left;
          transition: var(--transition);
          letter-spacing: -0.01em;
          width: 100%;
        }
        .dropdown-link:hover {
          color: var(--text-primary);
          background: var(--bg-card-hover);
        }
        .dropdown-link.active {
          color: var(--accent-light);
          background: var(--accent-glow);
        }
        .dropdown-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          opacity: 0.5;
          transition: opacity 0.2s ease;
        }
        .dropdown-link.active .dropdown-dot,
        .dropdown-link:hover .dropdown-dot {
          opacity: 1;
        }

        /* ─── Tablet & Mobile: show hamburger + dropdown ─── */
        @media (max-width: 768px) {
          .nav-links-desktop { display: none; }
          .hamburger          { display: flex; }
          .nav-dropdown       { display: block; }   /* allow it to animate */
          .nav-inner          { height: 60px; padding: 0 16px; }
          .hire-btn           { padding: 7px 14px; font-size: 12px; }
        }

        /* ─── Mobile (≤ 480px): tighten spacing ─── */
        @media (max-width: 480px) {
          .nav-inner          { padding: 0 12px; gap: 6px; }
          .nav-logo span      { font-size: 1.15rem; }
          .theme-btn          { width: 34px; height: 34px; font-size: 14px; }
          .hamburger          { width: 36px; height: 36px; }
          .nav-controls       { gap: 6px; }
          .hire-btn           { padding: 6px 12px; font-size: 11px; }
        }

        /* ─── Tiny phones (≤ 360px) ─── */
        @media (max-width: 360px) {
          .nav-inner          { padding: 0 10px; gap: 4px; }
          .nav-logo span      { font-size: 1rem; }
          .theme-btn          { width: 32px; height: 32px; font-size: 13px; }
          .hamburger          { width: 34px; height: 34px; }
          .nav-controls       { gap: 4px; }
          .hire-btn           { padding: 6px 10px; font-size: 10.5px; }
        }
      `}</style>
    </>
  );
}
