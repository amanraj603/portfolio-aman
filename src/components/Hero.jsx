"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const SOCIAL = [
  { label: "GitHub", icon: "⟨/⟩", href: "https://github.com/amanraj603" },
  {
    label: "LinkedIn",
    icon: "in",
    href: "https://linkedin.com/in/amanraj7604",
  },
  { label: "Email", icon: "✉", href: "mailto:aman603raj@gmail.com" },
];

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const words = [
      "Software Engineer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "React Developer",
      "Next.js Specialist",
      "UI/UX Enthusiast",
    ];
    let wi = 0,
      ci = 0,
      deleting = false;
    const el = document.getElementById("typewriter");
    if (!el) return;
    const type = () => {
      const word = words[wi % words.length];
      if (!deleting) {
        el.textContent = word.slice(0, ++ci);
        if (ci === word.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = word.slice(0, --ci);
        if (ci === 0) {
          deleting = false;
          wi++;
        }
      }
      setTimeout(type, deleting ? 60 : 100);
    };
    const t = setTimeout(type, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="hero-section bg-grid">
      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          top: "-100px",
          left: "-200px",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          bottom: "-100px",
          right: "-150px",
        }}
      />

      {/* Floating decorative blobs */}
      <div
        className="animate-blob animate-float"
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          background:
            "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(59,130,246,0.08))",
          top: "15%",
          right: "8%",
          zIndex: 0,
          opacity: 0.6,
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />
      <div
        className="animate-blob animate-delay-2"
        style={{
          position: "absolute",
          width: 180,
          height: 180,
          background:
            "linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.08))",
          bottom: "20%",
          left: "5%",
          zIndex: 0,
          borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          animation: "blob 10s ease-in-out infinite",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 48,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Text */}
          <div>
            <div
              className="section-label animate-float"
              style={{ animationDuration: "4s" }}
            >
              <span>✦</span> Available for opportunities
            </div>

            <h1
              ref={titleRef}
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
                marginBottom: 12,
              }}
            >
              Hi, I'm <span className="gradient-text">Aman Raj</span>
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 600,
                color: "var(--text-secondary)",
              }}
            >
              <span id="typewriter" style={{ color: "var(--accent-light)" }}>
                Frontend Engineer
              </span>
              <span
                style={{
                  width: 2,
                  height: "1.2em",
                  background: "var(--accent)",
                  display: "inline-block",
                  borderRadius: 1,
                  animation: "pulse-glow 1s ease-in-out infinite",
                }}
              />
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: 520,
                marginBottom: 40,
              }}
            >
              Associate Software Engineer at{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                Droom Technology
              </strong>
              , building production-grade web applications with modern
              JavaScript technologies, focusing on performance, scalability, and
              exceptional user experience. Experienced in developing responsive
              frontend interfaces, secure backend APIs, and end-to-end MERN
              applications that solve real business problems.
            </p>

            <div
              className="hero-btns"
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 48,
              }}
            >
              <a
                href="#projects"
                className="btn btn-primary"
                style={{ fontSize: "0.95rem" }}
              >
                View My Work ↓
              </a>
              <a
                href="/Aman_Raj_Resume.pdf"
                className="btn btn-secondary"
                style={{ fontSize: "0.95rem" }}
                download
              >
                Download CV
              </a>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: 12 }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 14,
                    transition: "var(--transition)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent-light)";
                    e.currentTarget.style.background = "var(--accent-glow)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "var(--bg-card)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: 24,
                marginTop: 48,
                paddingTop: 32,
                borderTop: "1px solid var(--border)",
                flexWrap: "wrap",
              }}
              className="hero-stats"
            >
              {[
                { value: "1.5+", label: "Years Exp." },
                { value: "10K+", label: "Daily Users" },
                { value: "200+", label: "DSA Solved" },
                { value: "30%", label: "Faster Load" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      background: "var(--gradient-text)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      marginTop: 2,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar */}
          <div
            style={{ position: "relative", flexShrink: 0 }}
            className="hero-avatar"
          >
            {/* Spinning ring */}
            <div
              className="animate-spin-slow"
              style={{
                position: "absolute",
                inset: -16,
                borderRadius: "50%",
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(var(--bg-primary), var(--bg-primary)), var(--gradient-hero)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            />
            <div
              className="animate-pulse-glow"
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(139,92,246,0.4)",
                position: "relative",
              }}
            >
              <Image
                src="/profile.png"
                alt="Aman Raj – Frontend Engineer"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: -12,
                right: -20,
                background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                borderRadius: "var(--radius)",
                padding: "10px 18px",
                boxShadow: "0 8px 32px rgba(139,92,246,0.4)",
              }}
              className="animate-float animate-delay-1"
            >
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 500,
                }}
              >
                Currently at
              </div>
              <div style={{ fontSize: 13, color: "white", fontWeight: 700 }}>
                Droom Technology
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "var(--text-muted)",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "fadeInUp 1.5s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-avatar { display: none; }
          .hero-grid > div:first-child { align-items: center; display: flex; flex-direction: column; }
          .hero-grid > div:first-child > div:first-child { margin: 0 auto; }
          .hero-grid > div:first-child p { text-align: center; }
          .hero-grid > div:first-child > div:nth-child(7) { justify-content: center; }
          .hero-grid > div:first-child > div:last-child { justify-content: center; }
          .hero-stats { justify-content: center; gap: 20px !important; margin-top: 32px !important; padding-top: 24px !important; }
        }
        @media (max-width: 480px) {
          .hero-stats { gap: 16px !important; }
          .hero-grid > div:first-child > div.hero-btns { flex-direction: column; align-items: center; width: 100%; }
          .hero-grid > div:first-child > div.hero-btns a { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
