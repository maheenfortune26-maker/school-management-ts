import Link from "next/link";

export default function HomePage() {
  const roles = [
    { label: "Admin", sub: "Full system control", color: "#6366f1", icon: "⚙️", href: "/admin" },
    { label: "Teacher", sub: "Classes & exams", color: "#0ea5e9", icon: "👩‍🏫", href: "/teacher" },
    { label: "Student", sub: "Schedule & grades", color: "#10b981", icon: "🎓", href: "/student" },
    { label: "Parent", sub: "Child's progress", color: "#f59e0b", icon: "👨‍👩‍👧", href: "/parent" },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)", borderRadius: "50%" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "960px", width: "100%", textAlign: "center" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: "999px", padding: "6px 16px", marginBottom: "2rem" }}>
          <span style={{ width: "8px", height: "8px", background: "#6366f1", borderRadius: "50%", display: "inline-block" }} />
          <span style={{ color: "#a5b4fc", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em" }}>SCHOOL MANAGEMENT SYSTEM</span>
        </div>

        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, color: "#f8fafc", lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
          One Platform.<br />
          <span style={{ background: "linear-gradient(135deg, #6366f1, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Every Role.</span>
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "480px", margin: "0 auto 3rem" }}>
          A unified school management platform built with TypeScript, Next.js and Express.
        </p>

        {/* Role cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
          {roles.map(r => (
            <Link key={r.href} href={r.href} style={{ textDecoration: "none" }}>
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "1.75rem 1rem",
                cursor: "pointer",
                transition: "all 0.2s",
                backdropFilter: "blur(10px)",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLDivElement).style.borderColor = r.color; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{r.icon}</div>
                <div style={{ width: "32px", height: "3px", background: r.color, borderRadius: "2px", margin: "0 auto 0.75rem" }} />
                <p style={{ color: "#f8fafc", fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{r.label}</p>
                <p style={{ color: "#64748b", fontSize: "0.78rem" }}>{r.sub}</p>
              </div>
            </Link>
          ))}
        </div>

        <p style={{ color: "#334155", fontSize: "0.8rem" }}>
          TypeScript · Next.js 14 · Express · Role-based Access Control
        </p>
      </div>
    </main>
  );
}