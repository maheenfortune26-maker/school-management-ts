import Link from "next/link";

export default function StudentDashboard() {
  const schedule = [
    { subject: "Mathematics", teacher: "Mr. Ali", time: "08:00 - 09:00", room: "R-101" },
    { subject: "Physics", teacher: "Ms. Sara", time: "09:00 - 10:00", room: "R-102" },
    { subject: "English", teacher: "Mr. Ahmed", time: "11:00 - 12:00", room: "R-103" },
    { subject: "Chemistry", teacher: "Ms. Fatima", time: "13:00 - 14:00", room: "Lab-1" },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>← Back</Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#1e1b4b" }}>Student Dashboard</h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { label: "Attendance", value: "92%", color: "#dcfce7", text: "#15803d" },
          { label: "Avg Grade", value: "A-", color: "#dbeafe", text: "#1d4ed8" },
          { label: "Exams Left", value: "3", color: "#fef9c3", text: "#a16207" },
          { label: "Assignments", value: "2", color: "#ede9fe", text: "#6d28d9" },
        ].map(s => (
          <div key={s.label} style={{ background: s.color, borderRadius: "1rem", padding: "1.25rem" }}>
            <p style={{ fontSize: "2rem", fontWeight: "800", color: s.text }}>{s.value}</p>
            <p style={{ fontSize: "0.85rem", fontWeight: "600", color: s.text }}>{s.label}</p>
          </div>
        ))}
      </div>

      <div style={{ background: "white", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#374151", marginBottom: "1rem" }}>Today's Schedule</h2>
        {schedule.map(s => (
          <div key={s.subject} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 0", borderBottom: "1px solid #f3f4f6" }}>
            <div>
              <p style={{ fontWeight: "600", color: "#111827", fontSize: "0.9rem" }}>{s.subject}</p>
              <p style={{ color: "#6b7280", fontSize: "0.8rem" }}>{s.teacher} · {s.time}</p>
            </div>
            <span style={{ background: "#f3f4f6", color: "#374151", padding: "4px 12px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "600" }}>
              {s.room}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}