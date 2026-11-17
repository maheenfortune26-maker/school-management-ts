import Link from "next/link";

export default function HomePage() {
  const roles = [
    { label: "Admin Dashboard", color: "#7c3aed", href: "/admin" },
    { label: "Teacher Dashboard", color: "#2563eb", href: "/teacher" },
    { label: "Student Dashboard", color: "#16a34a", href: "/student" },
    { label: "Parent Dashboard", color: "#d97706", href: "/parent" },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    }}>
      <div style={{
        background: "white",
        borderRadius: "1.5rem",
        padding: "3rem",
        maxWidth: "500px",
        width: "100%",
        boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}>🎓</div>
        <h1 style={{
          fontSize: "1.8rem",
          fontWeight: "800",
          color: "#1e1b4b",
          marginBottom: "0.5rem",
        }}>
          School Management System
        </h1>
        <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "2rem" }}>
          TypeScript · Next.js · Express · Role-based Dashboards
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}>
          {roles.map(({ label, color, href }) => (
            <Link key={href} href={href} style={{
              background: color,
              color: "white",
              padding: "1rem",
              borderRadius: "0.75rem",
              fontWeight: "600",
              fontSize: "0.85rem",
              textDecoration: "none",
              display: "block",
            }}>
              {label}
            </Link>
          ))}
        </div>
        <p style={{ marginTop: "1.5rem", fontSize: "0.75rem", color: "#9ca3af" }}>
          Select a role to preview its dashboard
        </p>
      </div>
    </main>
  );
}