import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    { label: "Students", value: "1,240", color: "#dbeafe", text: "#1d4ed8", href: "/list/students" },
    { label: "Teachers", value: "86", color: "#ede9fe", text: "#6d28d9", href: "/list/teachers" },
    { label: "Parents", value: "980", color: "#dcfce7", text: "#15803d", href: "#" },
    { label: "Staff", value: "24", color: "#fef9c3", text: "#a16207", href: "#" },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>← Back</Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#1e1b4b" }}>Admin Dashboard</h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
        {stats.map((s) => (
          <Link key={s.label} href={s.href} style={{ textDecoration: "none" }}>
            <div style={{ background: s.color, borderRadius: "1rem", padding: "1.25rem" }}>
              <p style={{ fontSize: "2rem", fontWeight: "800", color: s.text }}>{s.value}</p>
              <p style={{ fontSize: "0.85rem", fontWeight: "600", color: s.text, marginTop: "0.25rem" }}>{s.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ background: "white", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 1px 8px rgba(0,0,0,0.08)", marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#374151", marginBottom: "1rem" }}>Quick Actions</h2>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {[
            { label: "👨‍🎓 Add Student", href: "/list/students" },
            { label: "👩‍🏫 Add Teacher", href: "/list/teachers" },
            { label: "📢 Announcements", href: "#" },
            { label: "📝 View Exams", href: "#" },
          ].map((a) => (
            <Link key={a.label} href={a.href} style={{
              background: "#f3f4f6", color: "#374151", padding: "0.5rem 1rem",
              borderRadius: "0.5rem", fontSize: "0.85rem", fontWeight: "500", textDecoration: "none",
            }}>
              {a.label}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ background: "white", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#374151", marginBottom: "1rem" }}>Weekly Attendance</h2>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "0.75rem", height: "120px" }}>
          {[
            { day: "Mon", present: 90, absent: 10 },
            { day: "Tue", present: 85, absent: 15 },
            { day: "Wed", present: 92, absent: 8 },
            { day: "Thu", present: 78, absent: 22 },
            { day: "Fri", present: 88, absent: 12 },
          ].map((d) => (
            <div key={d.day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <div style={{ width: "100%" }}>
                <div style={{ background: "#6366f1", borderRadius: "4px 4px 0 0", height: `${d.present}px` }} />
                <div style={{ background: "#fca5a5", borderRadius: "0 0 4px 4px", height: `${d.absent}px` }} />
              </div>
              <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>{d.day}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "0.75rem" }}>
          <span style={{ fontSize: "0.75rem", color: "#6366f1" }}>■ Present</span>
          <span style={{ fontSize: "0.75rem", color: "#fca5a5" }}>■ Absent</span>
        </div>
      </div>
    </div>
  );
}