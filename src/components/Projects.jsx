"use client";
import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    title: "DevConnect",
    description:
      "A full-stack developer networking platform enabling users to create profiles, send connection requests with matched developers. Built with secure authentication, REST APIs, and a scalable MERN architecture.",
    tags: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    link: "https://github.com/amanraj603/devTinder",
    demo: "",
    gradient:
      "linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.2) 100%)",
    accent: "139, 92, 246",
    icon: "🤝",
    features: [
      "JWT Authentication",
      "Connection Requests",
      "Real-time Chat",
      "Responsive UI",
    ],
  },
  {
    title: "Quiz App",
    description:
      "A full-stack quiz platform with dynamic question generation, real-time score calculation, and efficient database management. Features a clean, responsive UI for seamless user experience across all devices.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/amanraj603",
    demo: "",
    gradient:
      "linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.2) 100%)",
    accent: "139, 92, 246",
    icon: "📝",
    features: [
      "Dynamic Q&A Engine",
      "Real-time Scoring",
      "MongoDB Integration",
      "Responsive UI",
    ],
  },
  {
    title: "ToDo App",
    description:
      "A task management application demonstrating scalable state management and clean architecture principles. Built with React and Redux Toolkit, showcasing best practices for modern frontend development.",
    tags: ["React", "Redux Toolkit", "Tailwind CSS"],
    link: "https://github.com/amanraj603",
    demo: "",
    gradient:
      "linear-gradient(135deg, rgba(59,130,246,0.3) 0%, rgba(6,182,212,0.2) 100%)",
    accent: "59, 130, 246",
    icon: "✅",
    features: [
      "Redux State Mgmt",
      "CRUD Operations",
      "Clean Architecture",
      "Responsive Design",
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref}>
      <div
        className="glow-orb"
        style={{
          width: 450,
          height: 450,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          top: "10%",
          right: "-100px",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ marginBottom: 60 }}>
          <div className="section-label">
            <span>◈</span> Featured Projects
          </div>
          <h2 className="section-title">Things I've built</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Selected projects showcasing my frontend and full-stack
            capabilities.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
            gap: 28,
          }}
          className="projects-grid"
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="card reveal"
              style={{
                padding: 0,
                overflow: "hidden",
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Card header */}
              <div
                style={{
                  background: p.gradient,
                  padding: "40px 36px 32px",
                  borderBottom: "1px solid var(--border)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative circles */}
                <div
                  style={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: `rgba(${p.accent},0.1)`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -30,
                    left: "30%",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: `rgba(${p.accent},0.07)`,
                  }}
                />

                <div style={{ position: "relative" }}>
                  <div style={{ fontSize: 44, marginBottom: 16 }}>{p.icon}</div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      marginBottom: 8,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "24px 36px 28px" }}>
                {/* Features */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                    marginBottom: 20,
                  }}
                >
                  {p.features.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "var(--text-secondary)",
                        fontSize: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: `rgb(${p.accent})`,
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 24,
                  }}
                >
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="tech-badge"
                      style={{
                        background: `rgba(${p.accent},0.08)`,
                        color: `rgb(${p.accent})`,
                        borderColor: `rgba(${p.accent},0.2)`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: 12 }}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1, justifyContent: "center", fontSize: 13 }}
                  >
                    ⟨/⟩ GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      className="btn btn-primary"
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        fontSize: 13,
                        background: `linear-gradient(135deg, rgba(${p.accent},0.9), rgba(${p.accent},0.7))`,
                      }}
                    >
                      ↗ Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal" style={{ textAlign: "center", marginTop: 48 }}>
          <div
            className="card"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 24,
              padding: "28px 40px",
              background:
                "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(59,130,246,0.05))",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 4,
                }}
              >
                More projects on GitHub
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
                Explore all my open source work and side projects
              </div>
            </div>
            <a
              href="https://github.com/amanraj603"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View GitHub →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
