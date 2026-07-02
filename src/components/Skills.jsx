"use client";
import { useEffect, useRef } from "react";

const SKILLS = {
  Languages: [
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "TypeScript", level: 88 },
    { name: "Java", level: 75 },
    { name: "C++", level: 70 },
  ],
  Frontend: [
    { name: "Next.js", level: 95 },
    { name: "React.js", level: 95 },
    { name: "Redux Toolkit", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    { name: "HTML5 / CSS3", level: 98 },
    { name: "MUI / Bootstrap", level: 85 },
  ],
  "Backend & APIs": [
    { name: "Node.js", level: 78 },
    { name: "Express.js", level: 75 },
    { name: "GraphQL", level: 82 },
    { name: "REST APIs", level: 92 },
    { name: "Strapi CMS", level: 72 },
  ],
  Database: [
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 75 },
  ],
  Tools: [
    { name: "Git / GitHub", level: 92 },
    { name: "Figma / Zeplin", level: 80 },
    { name: "ESLint", level: 88 },
    { name: "Performance Opt.", level: 85 },
  ],
};

const COLORS = {
  Languages: "139, 92, 246",
  Frontend: "59, 130, 246",
  "Backend & APIs": "6, 182, 212",
  Database: "52, 211, 153",
  Tools: "251, 191, 36",
};

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            // Animate progress bars
            e.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
              const target = bar.getAttribute("data-level");
              setTimeout(() => { bar.style.width = target + "%"; }, 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}>
      <div className="glow-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", top: "0", left: "-150px" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span>◈</span> Skills & Expertise
          </div>
          <h2 className="section-title">Tech I work with</h2>
          <div className="section-divider" style={{ margin: "16px auto 0" }} />
          <p className="section-subtitle" style={{ margin: "20px auto 0" }}>
            A curated stack refined through building production applications at scale.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {Object.entries(SKILLS).map(([category, skills], ci) => {
            const rgb = COLORS[category];
            return (
              <div
                key={category}
                className="card reveal"
                style={{ transitionDelay: `${ci * 0.1}s` }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `rgba(${rgb}, 0.15)`,
                    border: `1px solid rgba(${rgb}, 0.3)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16,
                  }}>
                    {category === "Languages" ? "{ }" : category === "Frontend" ? "⟨⟩" : category === "Backend & APIs" ? "⚙" : category === "Database" ? "◉" : "🛠"}
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: `rgb(${rgb})` }}>{category}</h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, alignItems: "center" }}>
                        <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)" }}>{skill.name}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: `rgb(${rgb})` }}>{skill.level}%</span>
                      </div>
                      <div style={{
                        height: 4, borderRadius: 2,
                        background: "rgba(255,255,255,0.06)",
                        overflow: "hidden",
                      }}>
                        <div
                          className="skill-bar-fill"
                          data-level={skill.level}
                          style={{
                            height: "100%", width: "0%",
                            borderRadius: 2,
                            background: `linear-gradient(90deg, rgba(${rgb},0.7), rgb(${rgb}))`,
                            transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
                            boxShadow: `0 0 8px rgba(${rgb},0.4)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill chips */}
        <div className="reveal" style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 20, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>Also familiar with</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {["SSR/SSG", "Context API", "Code Splitting", "Lazy Loading", "Memoization", "Core Web Vitals", "Responsive Design", "Figma", "JSON-driven UI", "Multi-step Forms"].map((chip) => (
              <span key={chip} className="skill-badge">{chip}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
