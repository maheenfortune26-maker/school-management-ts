import Link from "next/link";

export default function StudentDashboard() {
  const schedule = [
    { subject: "Mathematics", teacher: "Mr. Ali", time: "08:00 – 09:00", room: "R-101", color: "#6366f1" },
    { subject: "Physics", teacher: "Ms. Sara", time: "09:00 – 10:00", room: "R-102", color: "#0ea5e9" },
    { subject: "English", teacher: "Mr. Ahmed", time: "11:00 – 12:00", room: "R-103", color: "#10b981" },
    { subject: "Chemistry", teacher: "Ms. Fatima", time: "13:00 – 14:00", room: "Lab-1", color: "#f59e0b" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#f8fafc" }}>
      <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.85rem" }}>← Back</Link>
          <span style={{ color: "#334155" }}>|</span>
          <span style={{ color: "#10b981", fontWeight: 700, fontSize: "0.9rem" }}>🎓 Student Portal</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg,#10b981,#34d399)", display: "flex", alignItems: "center", justifyContent: "center" }}>J</div>
          <div>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>John Doe</p>
            <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0 }}>Class 10-A · Roll 15</p>
          </div>
        </div>
      </div>

      <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>Hello, John 👋</h1>
        <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "2rem" }}>Here's your academic overview for today</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { label: "Attendance", value: "92%", color: "#10b981" },
            { label: "Avg Grade", value: "A−", color: "#6366f1" },
            { label: "Exams Left", value: "3", color: "#f59e0b" },
            { label: "Due Today", value: "2", color: "#ef4444" },
          ].map(s => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${s.color}30`, borderRadius: "16px", padding: "1.25rem" }}>
              <div style={{ width: "40px", height: "4px", background: s.color, borderRadius: "2px", marginBottom: "0.75rem" }} />
              <p style={{ fontSize: "2rem", fontWeight: 800, color: s.color, margin: "0 0 0.25rem" }}>{s.value}</p>
              <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#cbd5e1", marginBottom: "1.25rem" }}>Today's Classes</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {schedule.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "1rem 1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: "4px", height: "40px", background: s.color, borderRadius: "2px" }} />
                  <div>
                    <p style={{ fontWeight: 700, color: "#f8fafc", fontSize: "0.9rem", margin: "0 0 2px" }}>{s.subject}</p>
                    <p style={{ color: "#64748b", fontSize: "0.8rem", margin: 0 }}>{s.teacher} · {s.time}</p>
                  </div>
                </div>
                <span style={{ background: "rgba(255,255,255,0.05)", color: "#94a3b8", padding: "3px 12px", borderRadius: "999px", fontSize: "0.78rem" }}>{s.room}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}