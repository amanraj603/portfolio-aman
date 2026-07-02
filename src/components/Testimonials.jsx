"use client";
import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote: "Aman consistently delivered high-quality features ahead of schedule. His attention to performance optimization and clean code made a measurable difference across our platforms.",
    author: "Tech Lead",
    role: "Senior Engineer, Droom Technology",
    avatar: "TL",
    color: "139, 92, 246",
  },
  {
    quote: "One of the most proactive interns we've had — he independently architected reusable systems that our whole team adopted. A true team player with excellent technical depth.",
    author: "Engineering Manager",
    role: "Product Engineering, Droom Technology",
    avatar: "EM",
    color: "59, 130, 246",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const cur = TESTIMONIALS[active];

  return (
    <section id="testimonials" ref={ref}>
      <div className="glow-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)", top: "20%", left: "-100px" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label" style={{ justifyContent: "center" }}><span>◈</span> Testimonials</div>
          <h2 className="section-title">What people say</h2>
          <div className="section-divider" style={{ margin: "16px auto 0" }} />
        </div>

        <div className="reveal" style={{ maxWidth: 720, margin: "0 auto" }}>
          <div className="card" style={{
            textAlign: "center", padding: "48px 52px",
            background: "linear-gradient(135deg, rgba(139,92,246,0.06), rgba(59,130,246,0.04))",
          }}>
            <div style={{ fontSize: 56, lineHeight: 1, color: `rgb(${cur.color})`, marginBottom: 28, opacity: 0.6 }}>"</div>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.85, fontStyle: "italic", marginBottom: 36 }}>
              {cur.quote}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: `linear-gradient(135deg, rgba(${cur.color},0.6), rgba(${cur.color},0.3))`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 800, fontSize: 14, color: "white",
                border: `2px solid rgba(${cur.color},0.4)`,
              }}>
                {cur.avatar}
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem" }}>{cur.author}</div>
                <div style={{ color: "var(--text-muted)", fontSize: 13 }}>{cur.role}</div>
              </div>
            </div>

            {/* Dots */}
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 32 }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? 24 : 8, height: 8,
                    borderRadius: 4, border: "none", cursor: "pointer",
                    background: i === active ? "var(--accent)" : "var(--border)",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
