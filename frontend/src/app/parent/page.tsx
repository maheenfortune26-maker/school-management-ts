import Link from "next/link";

export default function ParentDashboard() {
  const results = [
    { subject: "Mathematics", grade: "A", marks: 92, color: "#6366f1" },
    { subject: "Physics", grade: "B+", marks: 85, color: "#0ea5e9" },
    { subject: "English", grade: "A−", marks: 88, color: "#10b981" },
    { subject: "Chemistry", grade: "B", marks: 78, color: "#f59e0b" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#f8fafc" }}>
      <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.85rem" }}>← Back</Link>
          <span style={{ color: "#334155" }}>|</span>
          <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.9rem" }}>👨‍👩‍👧 Parent Portal</span>
        </div>
      </div>

      <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>Child's Progress Report</h1>
        <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "2rem" }}>Academic Year 2026 — Term 1</p>

        {/* Child card */}
        <div style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(14,165,233,0.1))", border: "1px solid rgba(99,102,241,0.3)", borderRadius: "16px", padding: "1.5rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg,#6366f1,#0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: 800 }}>J</div>
            <div>
              <p style={{ fontWeight: 800, fontSize: "1.1rem", margin: "0 0 4px" }}>John Doe</p>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem", margin: 0 }}>Class 10-A · Grade 10 · Roll No: 15</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ color: "#10b981", fontWeight: 700, fontSize: "1.25rem", margin: "0 0 2px" }}>92%</p>
            <p style={{ color: "#64748b", fontSize: "0.8rem", margin: 0 }}>Attendance</p>
          </div>
        </div>

        {/* Results */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#cbd5e1", marginBottom: "1.25rem" }}>Exam Results</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {results.map(r => (
              <div key={r.subject} style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", padding: "1rem 1.25rem" }}>
                <div style={{ width: "4px", height: "40px", background: r.color, borderRadius: "2px" }} />
                <p style={{ flex: 1, fontWeight: 600, color: "#f8fafc", margin: 0 }}>{r.subject}</p>
                <div style={{ flex: 2, background: "rgba(255,255,255,0.05)", borderRadius: "999px", height: "6px", overflow: "hidden" }}>
                  <div style={{ width: `${r.marks}%`, height: "100%", background: r.color, borderRadius: "999px" }} />
                </div>
                <span style={{ color: "#94a3b8", fontSize: "0.85rem", width: "50px", textAlign: "right" }}>{r.marks}/100</span>
                <span style={{ background: `${r.color}20`, color: r.color, padding: "3px 10px", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 700, width: "40px", textAlign: "center" }}>{r.grade}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}