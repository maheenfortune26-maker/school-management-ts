import Link from "next/link";

export default function ParentDashboard() {
  const results = [
    { subject: "Mathematics", grade: "A", marks: "92/100", status: "Pass" },
    { subject: "Physics", grade: "B+", marks: "85/100", status: "Pass" },
    { subject: "English", grade: "A-", marks: "88/100", status: "Pass" },
    { subject: "Chemistry", grade: "B", marks: "78/100", status: "Pass" },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>← Back</Link>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#1e1b4b" }}>Parent Dashboard</h1>
      </div>

      <div style={{ background: "white", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 1px 8px rgba(0,0,0,0.08)", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>🎓</div>
          <div>
            <p style={{ fontWeight: "700", color: "#111827", fontSize: "1rem" }}>John Doe</p>
            <p style={{ color: "#6b7280", fontSize: "0.85rem" }}>Class 10-A · Grade 10 · Roll No: 15</p>
          </div>
          <span style={{ marginLeft: "auto", background: "#dcfce7", color: "#15803d", padding: "4px 12px", borderRadius: "999px", fontSize: "0.8rem", fontWeight: "600" }}>
            92% Attendance
          </span>
        </div>
      </div>

      <div style={{ background: "white", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#374151", marginBottom: "1rem" }}>Exam Results</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f9fafb" }}>
              {["Subject", "Grade", "Marks", "Status"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.8rem", fontWeight: "700", color: "#6b7280", borderBottom: "1px solid #e5e7eb" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map(r => (
              <tr key={r.subject} style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "0.75rem 1rem", fontSize: "0.85rem", fontWeight: "600", color: "#111827" }}>{r.subject}</td>
                <td style={{ padding: "0.75rem 1rem" }}>
                  <span style={{ background: "#dbeafe", color: "#1d4ed8", padding: "2px 8px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "700" }}>{r.grade}</span>
                </td>
                <td style={{ padding: "0.75rem 1rem", fontSize: "0.85rem", color: "#374151" }}>{r.marks}</td>
                <td style={{ padding: "0.75rem 1rem" }}>
                  <span style={{ background: "#dcfce7", color: "#15803d", padding: "2px 8px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "600" }}>{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}