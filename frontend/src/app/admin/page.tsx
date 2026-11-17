import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Students", value: "1,240", change: "+12%", icon: "🎓", color: "#6366f1" },
    { label: "Teachers", value: "86", change: "+3%", icon: "👩‍🏫", color: "#0ea5e9" },
    { label: "Parents", value: "980", change: "+8%", icon: "👨‍👩‍👧", color: "#10b981" },
    { label: "Staff", value: "24", change: "0%", icon: "🏫", color: "#f59e0b" },
  ];

  const recentActivity = [
    { text: "New student John Doe enrolled in Class 10-A", time: "2 min ago", dot: "#10b981" },
    { text: "Teacher Mr. Ali updated exam schedule", time: "15 min ago", dot: "#6366f1" },
    { text: "Parent Mrs. Smith viewed report card", time: "1 hr ago", dot: "#0ea5e9" },
    { text: "Assignment submitted by Class 11-B", time: "2 hr ago", dot: "#f59e0b" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#f8fafc" }}>
      {/* Topbar */}
      <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.85rem" }}>← Back</Link>
          <span style={{ color: "#334155" }}>|</span>
          <span style={{ color: "#6366f1", fontWeight: 700, fontSize: "0.9rem" }}>⚙️ Admin Panel</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem" }}>A</div>
          <div>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#f8fafc", margin: 0 }}>Admin</p>
            <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0 }}>admin@school.edu</p>
          </div>
        </div>
      </div>

      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>Dashboard Overview</h1>
        <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "2rem" }}>Wednesday, November 2026</p>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", marginBottom: "2rem" }}>
          {stats.map(s => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: `radial-gradient(circle, ${s.color}20 0%, transparent 70%)` }} />
              <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{s.icon}</div>
              <p style={{ fontSize: "2rem", fontWeight: 800, color: "#f8fafc", margin: "0 0 0.25rem" }}>{s.value}</p>
              <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 0.5rem" }}>{s.label}</p>
              <span style={{ fontSize: "0.75rem", color: "#10b981", background: "rgba(16,185,129,0.1)", padding: "2px 8px", borderRadius: "999px" }}>{s.change} this month</span>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {/* Attendance chart */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1.5rem", color: "#cbd5e1" }}>Weekly Attendance</h2>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "12px", height: "140px" }}>
              {[{ day: "Mon", p: 88 }, { day: "Tue", p: 76 }, { day: "Wed", p: 92 }, { day: "Thu", p: 70 }, { day: "Fri", p: 85 }].map(d => (
                <div key={d.day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "0.7rem", color: "#6366f1" }}>{d.p}%</span>
                  <div style={{ width: "100%", background: "rgba(255,255,255,0.05)", borderRadius: "8px 8px 0 0", height: "100px", display: "flex", alignItems: "flex-end" }}>
                    <div style={{ width: "100%", background: "linear-gradient(180deg,#6366f1,#8b5cf6)", borderRadius: "8px 8px 0 0", height: `${d.p}%`, transition: "height 0.3s" }} />
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "#64748b" }}>{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1.5rem", color: "#cbd5e1" }}>Recent Activity</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {recentActivity.map((a, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: a.dot, marginTop: "5px", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: "0.85rem", color: "#cbd5e1", margin: "0 0 2px" }}>{a.text}</p>
                    <p style={{ fontSize: "0.75rem", color: "#475569", margin: 0 }}>{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ marginTop: "1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem", color: "#cbd5e1" }}>Quick Actions</h2>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[
              { label: "Add Student", href: "/list/students", color: "#6366f1" },
              { label: "Add Teacher", href: "/list/teachers", color: "#0ea5e9" },
              { label: "Post Announcement", href: "#", color: "#10b981" },
              { label: "View Exams", href: "#", color: "#f59e0b" },
              { label: "Manage Classes", href: "#", color: "#8b5cf6" },
            ].map(a => (
              <Link key={a.label} href={a.href} style={{
                background: `${a.color}15`, border: `1px solid ${a.color}40`,
                color: a.color, padding: "0.5rem 1.25rem",
                borderRadius: "8px", fontSize: "0.85rem",
                fontWeight: 600, textDecoration: "none",
              }}>
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}