"use client";
import { useEffect, useRef } from "react";

const EXPERIENCE = [
  {
    company: "Droom Technology Pvt. Ltd",
    role: "Associate Software Engineer",
    period: "Oct 2025 – Present",
    location: "Gurugram, Haryana",
    type: "Full-Time",
    color: "139, 92, 246",
    highlights: [
      "Architected reusable component libraries, scalable forms, and configurable workflows reducing development effort by 35%.",
      "Spearheaded Cart Checkout modernization & Quick Checkout, cutting checkout friction by 40% and boosting payment conversions by 25%.",
      "Deployed production features across Corporate, Affiliate, Rental, Insurance, myBiz & GigHub Collab platforms serving 10K+ daily users.",
      "Optimized performance via code splitting, lazy loading & memoization — 30% faster page loads, boosted Core Web Vitals.",
      "Collaborated cross-functionally on payment integrations & booking workflows, driving a 20% rise in transaction success rates.",
    ],
    stack: ["Next.js", "React.js", "Redux Toolkit", "GraphQL", "REST APIs", "TypeScript"],
  },
  {
    company: "Droom Technology Pvt. Ltd",
    role: "Software Engineer Intern",
    period: "Oct 2024 – Aug 2025",
    location: "Gurugram, Haryana",
    type: "Internship",
    color: "59, 130, 246",
    highlights: [
      "Engineered 10+ high-performance responsive web applications and reusable component libraries with Next.js & React.js.",
      "Implemented Context API & Redux Toolkit state management improving session persistence and reducing form abandonment.",
      "Built multi-step rental booking flows, custom date pickers, and JSON-driven UI rendering — reducing hardcoded logic by 90%.",
    ],
    stack: ["Next.js", "React.js", "Context API", "Redux Toolkit", "CSS3", "REST APIs"],
  },
];

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} style={{ background: "var(--bg-secondary)" }}>
      <div className="glow-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", bottom: 0, right: "-100px" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ marginBottom: 60 }}>
          <div className="section-label"><span>◈</span> Work Experience</div>
          <h2 className="section-title">Where I've worked</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Building products that reach real users at scale.</p>
        </div>

        <div style={{ position: "relative", paddingLeft: 48 }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: 16, top: 0, bottom: 0,
            width: 2,
            background: "linear-gradient(to bottom, rgba(139,92,246,0.8), rgba(59,130,246,0.3), transparent)",
            borderRadius: 1,
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                className="reveal"
                style={{ position: "relative", transitionDelay: `${i * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: "absolute",
                  left: -40, top: 28,
                  width: 16, height: 16, borderRadius: "50%",
                  background: `rgb(${exp.color})`,
                  border: "3px solid var(--bg-secondary)",
                  boxShadow: `0 0 12px rgba(${exp.color}, 0.6)`,
                  zIndex: 1,
                }} />

                <div className="card">
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)" }}>{exp.role}</h3>
                        <span style={{
                          padding: "3px 10px", borderRadius: "var(--radius-full)",
                          fontSize: 11, fontWeight: 700,
                          background: `rgba(${exp.color},0.12)`,
                          color: `rgb(${exp.color})`,
                          border: `1px solid rgba(${exp.color},0.25)`,
                        }}>{exp.type}</span>
                      </div>
                      <div style={{ color: `rgb(${exp.color})`, fontWeight: 600, fontSize: "0.95rem" }}>{exp.company}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ color: "var(--text-secondary)", fontSize: 13, fontWeight: 600 }}>{exp.period}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 3 }}>📍 {exp.location}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} style={{ display: "flex", gap: 12, color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                        <span style={{ color: `rgb(${exp.color})`, flexShrink: 0, marginTop: 3 }}>▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {exp.stack.map((s) => (
                      <span key={s} className="tech-badge" style={{ background: `rgba(${exp.color},0.08)`, color: `rgb(${exp.color})`, borderColor: `rgba(${exp.color},0.2)` }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #experience .container > div:last-child { padding-left: 28px !important; }
        }
      `}</style>
    </section>
  );
}
