import Link from "next/link";

export default function TeacherDashboard() {
  const classes = [
    { name: "10-A", subject: "Mathematics", time: "08:00 – 09:00", students: 28, room: "R-101", status: "Upcoming" },
    { name: "10-B", subject: "Mathematics", time: "09:00 – 10:00", students: 30, room: "R-102", status: "Upcoming" },
    { name: "11-A", subject: "Calculus", time: "11:00 – 12:00", students: 25, room: "R-201", status: "Later" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#f8fafc" }}>
      <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.85rem" }}>← Back</Link>
          <span style={{ color: "#334155" }}>|</span>
          <span style={{ color: "#0ea5e9", fontWeight: 700, fontSize: "0.9rem" }}>👩‍🏫 Teacher Portal</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg,#0ea5e9,#38bdf8)", display: "flex", alignItems: "center", justifyContent: "center" }}>T</div>
          <div>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>Mr. Ali</p>
            <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0 }}>Mathematics Dept.</p>
          </div>
        </div>
      </div>

      <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>Good morning, Mr. Ali 👋</h1>
        <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "2rem" }}>You have 3 classes scheduled today</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { label: "My Classes", value: "3", color: "#0ea5e9" },
            { label: "Total Students", value: "83", color: "#6366f1" },
            { label: "Exams This Week", value: "2", color: "#f59e0b" },
            { label: "Pending Assignments", value: "5", color: "#10b981" },
          ].map(s => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${s.color}30`, borderRadius: "16px", padding: "1.25rem" }}>
              <div style={{ width: "40px", height: "4px", background: s.color, borderRadius: "2px", marginBottom: "0.75rem" }} />
              <p style={{ fontSize: "2rem", fontWeight: 800, color: s.color, margin: "0 0 0.25rem" }}>{s.value}</p>
              <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#cbd5e1", marginBottom: "1.25rem" }}>Today's Schedule</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {classes.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "1rem 1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(14,165,233,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>📚</div>
                  <div>
                    <p style={{ fontWeight: 700, color: "#f8fafc", fontSize: "0.9rem", margin: "0 0 2px" }}>{c.subject} — Class {c.name}</p>
                    <p style={{ color: "#64748b", fontSize: "0.8rem", margin: 0 }}>{c.time} · {c.room}</p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ color: "#94a3b8", fontSize: "0.8rem" }}>{c.students} students</span>
                  <span style={{ background: "rgba(14,165,233,0.15)", color: "#38bdf8", padding: "3px 10px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600 }}>{c.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}