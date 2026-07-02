"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ background: "var(--bg-secondary)" }}>
      <div
        className="glow-orb"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          top: "50%",
          right: "-100px",
        }}
      />

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: Visual card */}
          <div className="reveal" style={{ position: "relative" }}>
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(59,130,246,0.1) 50%, rgba(6,182,212,0.08) 100%)",
                  padding: "40px 36px",
                }}
              >
                {/* Code snippet decoration */}
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 13,
                    background: "rgba(0,0,0,0.3)",
                    borderRadius: 12,
                    padding: "20px 24px",
                    lineHeight: 2,
                    border: "1px solid var(--border)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div>
                    <span style={{ color: "#a78bfa" }}>const</span>{" "}
                    <span style={{ color: "#60a5fa" }}>developer</span>{" "}
                    <span style={{ color: "#f8fafc" }}>= {"{"}</span>
                  </div>
                  <div style={{ paddingLeft: 16 }}>
                    <span style={{ color: "#34d399" }}>name</span>
                    <span style={{ color: "#f8fafc" }}>: </span>
                    <span style={{ color: "#fbbf24" }}>"Aman Raj"</span>
                    <span style={{ color: "#f8fafc" }}>,</span>
                  </div>
                  <div style={{ paddingLeft: 16 }}>
                    <span style={{ color: "#34d399" }}>role</span>
                    <span style={{ color: "#f8fafc" }}>: </span>
                    <span style={{ color: "#fbbf24" }}>
                      "Associate Software Engineer"
                    </span>
                    <span style={{ color: "#f8fafc" }}>,</span>
                  </div>
                  <div style={{ paddingLeft: 16 }}>
                    <span style={{ color: "#34d399" }}>exp</span>
                    <span style={{ color: "#f8fafc" }}>: </span>
                    <span style={{ color: "#fb923c" }}>1.5+ years</span>
                    <span style={{ color: "#f8fafc" }}>, </span>
                  </div>
                  <div style={{ paddingLeft: 16 }}>
                    <span style={{ color: "#34d399" }}>passion</span>
                    <span style={{ color: "#f8fafc" }}>: </span>
                    <span style={{ color: "#fbbf24" }}>
                      "Solving real world problems through tech"
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#f8fafc" }}>{"}"}</span>
                  </div>
                </div>

                {/* Mini stats */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginTop: 24,
                  }}
                >
                  {[
                    { icon: "⚡", label: "Fast Learner" },
                    { icon: "🎯", label: "Detail-Oriented" },
                    { icon: "🤝", label: "Team Player" },
                    { icon: "🚀", label: "Performance-Focused" },
                  ].map((t) => (
                    <div
                      key={t.label}
                      className="card"
                      style={{
                        padding: "12px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "rgba(0,0,0,0.2)",
                      }}
                    >
                      <span style={{ fontSize: 20 }}>{t.icon}</span>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                        }}
                      >
                        {t.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="section-label">
              <span>◈</span> About Me
            </div>
            <h2 className="section-title">
              Crafting digital experiences with{" "}
              <span className="gradient-text">purpose & precision</span>
            </h2>
            <div className="section-divider" />

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                marginBottom: 20,
              }}
            >
              I'm Associate Software Engineer at{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                Droom Technology
              </strong>{" "}
              in Gurugram, where I architect scalable component libraries and
              user-facing features that serve{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                10,000+ daily active users
              </strong>
              .
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                marginBottom: 32,
              }}
            >
              I specialize in building high-performance web applications using{" "}
              <strong style={{ color: "var(--accent-light)" }}>Next.js</strong>,{" "}
              <strong style={{ color: "var(--accent-light)" }}>React</strong>,
              and modern frontend tooling. I'm passionate about Core Web Vitals,
              clean architecture, and crafting UI that genuinely delights users.
            </p>

            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 32,
              }}
            >
              {[
                { icon: "📍", text: "Gurugram, Haryana" },
                { icon: "🎓", text: "B.E. CSE – 9.28 CGPA" },
                { icon: "💼", text: "Open to Opportunities" },
              ].map((i) => (
                <div
                  key={i.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "var(--text-secondary)",
                    fontSize: 14,
                  }}
                >
                  <span>{i.icon}</span>
                  <span>{i.text}</span>
                </div>
              ))}
            </div>

            <a href="mailto:aman603raj@gmail.com" className="btn btn-primary">
              Let's Connect ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
