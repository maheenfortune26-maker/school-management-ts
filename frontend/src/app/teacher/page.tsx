import Link from "next/link";

export default function TeacherDashboard() {
  const classes = [
    { name: "10-A", subject: "Mathematics", time: "08:00 - 09:00", students: 28 },
    { name: "10-B", subject: "Mathematics", time: "09:00 - 10:00", students: 30 },
    { name: "11-A", subject: "Calculus", time: "11:00 - 12:00", students: 25 },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>← Back</Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#1e1b4b" }}>Teacher Dashboard</h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { label: "My Classes", value: "3", color: "#dbeafe", text: "#1d4ed8" },
          { label: "My Students", value: "83", color: "#ede9fe", text: "#6d28d9" },
          { label: "Exams This Week", value: "2", color: "#dcfce7", text: "#15803d" },
          { label: "Assignments Due", value: "5", color: "#fef9c3", text: "#a16207" },
        ].map(s => (
          <div key={s.label} style={{ background: s.color, borderRadius: "1rem", padding: "1.25rem" }}>
            <p style={{ fontSize: "2rem", fontWeight: "800", color: s.text }}>{s.value}</p>
            <p style={{ fontSize: "0.85rem", fontWeight: "600", color: s.text }}>{s.label}</p>
          </div>
        ))}
      </div>

      <div style={{ background: "white", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#374151", marginBottom: "1rem" }}>Today's Classes</h2>
        {classes.map(c => (
          <div key={c.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 0", borderBottom: "1px solid #f3f4f6" }}>
            <div>
              <p style={{ fontWeight: "600", color: "#111827", fontSize: "0.9rem" }}>{c.subject} — Class {c.name}</p>
              <p style={{ color: "#6b7280", fontSize: "0.8rem" }}>{c.time}</p>
            </div>
            <span style={{ background: "#dbeafe", color: "#1d4ed8", padding: "4px 12px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "600" }}>
              {c.students} students
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}