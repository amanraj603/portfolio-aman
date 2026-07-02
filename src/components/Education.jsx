"use client";
import { useEffect, useRef } from "react";

const EDU = [
  {
    degree: "B.E. in Computer Science Engineering",
    institution: "Chitkara University",
    period: "2021 – 2025",
    score: "CGPA: 9.28 / 10",
    icon: "🎓",
    color: "139, 92, 246",
    highlights: ["Data Structures & Algorithms", "Web Technologies", "Database Management", "Operating Systems"],
  },
  {
    degree: "12th Grade – CBSE",
    institution: "Keshav Saraswati Vidya Mandir",
    period: "2019 – 2021",
    score: "Percentage: 73.2%",
    icon: "📚",
    color: "59, 130, 246",
    highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
];

const CERTS = [
  { name: "React Developer Certification", issuer: "Placeholder", year: "2024", icon: "⚛", color: "139, 92, 246" },
  { name: "Next.js Advanced Course", issuer: "Placeholder", year: "2024", icon: "▲", color: "59, 130, 246" },
  { name: "JavaScript Algorithms & DS", issuer: "freeCodeCamp", year: "2023", icon: "🧩", color: "6, 182, 212" },
];

const ACHIEVEMENTS = [
  { icon: "🏆", title: "200+ LeetCode Solve", desc: "Solved 200+ DSA problems across arrays, trees, graphs, dynamic programming, and SQL." },
  { icon: "⚡", title: "30% Faster Page Loads", desc: "Optimized frontend performance using code splitting, lazy loading, memoization, and image optimization." },
  { icon: "💰", title: "25% Higher Conversions", desc: "Redesigned the Quick Checkout flow, reducing user friction and increasing successful purchases." },
  { icon: "👥", title: "10K+ Daily Active Users", desc: "Built and maintained production features serving 10K+ daily active users across multiple platforms." },
  { icon: "🎓", title: "9.28 CGPA", desc: "Graduated with a 9.28 CGPA in Computer Science Engineering from Chitkara University." },
  { icon: "🚀", title: "1.5+ Years Experience", desc: "Developed scalable full-stack applications using React, Next.js, Node.js, Rest APIs, JavaScript, and MongoDB." },
];

export default function EducationSection() {
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
    <section id="education" ref={ref} style={{ background: "var(--bg-secondary)" }}>
      <div className="glow-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)", top: "20%", right: "-80px" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* ─── Education ────────────────────────────── */}
        <div className="reveal" style={{ marginBottom: 60 }}>
          <div className="section-label"><span>◈</span> Education</div>
          <h2 className="section-title">Academic Background</h2>
          <div className="section-divider" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginBottom: 80 }}>
          {EDU.map((e, i) => (
            <div key={i} className="card reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  background: `rgba(${e.color},0.12)`,
                  border: `1px solid rgba(${e.color},0.25)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24,
                }}>
                  {e.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{e.degree}</h3>
                  <div style={{ color: `rgb(${e.color})`, fontWeight: 600, fontSize: "0.9rem" }}>{e.institution}</div>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-muted)", fontSize: 13 }}>📅 {e.period}</span>
                <span style={{ color: `rgb(${e.color})`, fontWeight: 700, fontSize: 13 }}>{e.score}</span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {e.highlights.map((h) => (
                  <span key={h} className="tech-badge" style={{ background: `rgba(${e.color},0.06)`, color: `rgb(${e.color})`, borderColor: `rgba(${e.color},0.2)` }}>{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ─── Certifications ────────────────────────── */}
        <div className="reveal" style={{ marginBottom: 40 }}>
          <div className="section-label"><span>◈</span> Certifications</div>
          <h2 className="section-title">Credentials</h2>
          <div className="section-divider" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 80 }}>
          {CERTS.map((c, i) => (
            <div key={i} className="card reveal" style={{ display: "flex", alignItems: "center", gap: 20, transitionDelay: `${i * 0.1}s`, padding: "20px 28px" }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                background: `rgba(${c.color},0.12)`,
                border: `1px solid rgba(${c.color},0.25)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20,
              }}>
                {c.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem" }}>{c.name}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 2 }}>{c.issuer}</div>
              </div>
              <span style={{ color: `rgb(${c.color})`, fontWeight: 700, fontSize: 13 }}>{c.year}</span>
            </div>
          ))}
        </div>

        {/* ─── Achievements ──────────────────────────── */}
        <div className="reveal" style={{ marginBottom: 40 }}>
          <div className="section-label"><span>◈</span> Achievements</div>
          <h2 className="section-title">Impact & Milestones</h2>
          <div className="section-divider" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{a.icon}</div>
              <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 6, fontSize: "0.95rem" }}>{a.title}</div>
              <div style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6 }}>{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
