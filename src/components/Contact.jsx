"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

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

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const whatsappNumber = "919508942108";
    const text = `Hello Aman,

You have a new message from your portfolio contact form:

*Name:* ${form.name}
*Email:* ${form.email}
*Subject:* ${form.subject}
*Message:* ${form.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp URL in a new tab/window
    window.open(whatsappUrl, "_blank");

    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          bottom: "-100px",
          left: "-150px",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          top: "0",
          right: "-50px",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span>◈</span> Contact
          </div>
          <h2 className="section-title">Let's work together</h2>
          <div className="section-divider" style={{ margin: "16px auto 0" }} />
          <p className="section-subtitle" style={{ margin: "20px auto 0" }}>
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 48,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Info */}
          <div>
            {[
              {
                icon: "✉️",
                label: "Email",
                value: "aman603raj@gmail.com",
                href: "mailto:aman603raj@gmail.com",
              },
              {
                icon: "📱",
                label: "Phone",
                value: "+91 9508942108",
                href: "tel:+919508942108",
              },
              {
                icon: "📍",
                label: "Location",
                value: "Gurugram, Haryana, India",
                href: null,
              },
            ].map((c, i) => (
              <div
                key={c.label}
                className="card reveal"
                style={{
                  display: "flex",
                  gap: 18,
                  marginBottom: 16,
                  transitionDelay: `${i * 0.1}s`,
                  padding: "20px 24px",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    flexShrink: 0,
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      style={{
                        color: "var(--accent-light)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        position: "relative",
                        zIndex: 2,
                      }}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        color: "var(--text-secondary)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      {c.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div
              className="card reveal"
              style={{ padding: "20px 24px", transitionDelay: "0.3s" }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 16,
                }}
              >
                Find me online
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  {
                    label: "GitHub",
                    icon: "⟨/⟩",
                    href: "https://github.com/amanraj603",
                  },
                  {
                    label: "LinkedIn",
                    icon: "in",
                    href: "https://linkedin.com/in/amanraj7604",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1, justifyContent: "center", fontSize: 13 }}
                  >
                    <span style={{ fontWeight: 800 }}>{s.icon}</span> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="card reveal contact-form-card"
            style={{ transitionDelay: "0.15s", padding: "36px 40px" }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 28,
              }}
            >
              Send a message
            </h3>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
                className="form-row"
              >
                <div>
                  <label
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      marginBottom: 6,
                      display: "block",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      marginBottom: 6,
                      display: "block",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    marginBottom: 6,
                    display: "block",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    marginBottom: 6,
                    display: "block",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="btn btn-primary"
                disabled={status === "sending"}
                style={{
                  justifyContent: "center",
                  fontSize: "0.95rem",
                  marginTop: 4,
                  opacity: status === "sending" ? 0.7 : 1,
                }}
              >
                {status === "sending"
                  ? "⏳ Sending..."
                  : status === "sent"
                    ? "✅ Message Sent!"
                    : "Send Message ↗"}
              </button>

              {status === "sent" && (
                <p
                  style={{
                    color: "#34d399",
                    fontSize: 13,
                    textAlign: "center",
                  }}
                >
                  Thanks! I'll get back to you soon 🎉
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .contact-form-card { padding: 24px 20px !important; }
        }
        @media (max-width: 480px) {
          .contact-form-card { padding: 20px 16px !important; }
        }
      `}</style>
    </section>
  );
}
