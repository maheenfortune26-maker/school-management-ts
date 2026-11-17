"use client";
import { useState } from "react";
import Link from "next/link";

const MOCK = [
  { id: "s1", username: "john_doe", email: "john@school.edu", classId: "10-A", bloodType: "A+", gender: "Male" },
  { id: "s2", username: "jane_smith", email: "jane@school.edu", classId: "10-A", bloodType: "B+", gender: "Female" },
  { id: "s3", username: "ali_raza", email: "ali@school.edu", classId: "10-B", bloodType: "O+", gender: "Male" },
];

export default function StudentsPage() {
  const [students, setStudents] = useState(MOCK);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", classId: "", bloodType: "", gender: "Male" });

  const filtered = students.filter(s =>
    s.username.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase())
  );

  function handleAdd() {
    if (!form.username || !form.email) return;
    setStudents(prev => [...prev, { ...form, id: `s${Date.now()}` }]);
    setForm({ username: "", email: "", classId: "", bloodType: "", gender: "Male" });
    setShowForm(false);
  }

  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "0.6rem 0.75rem", fontSize: "0.85rem", color: "#f8fafc", outline: "none", boxSizing: "border-box" as const };
  const labelStyle = { fontSize: "0.78rem", fontWeight: 600 as const, color: "#94a3b8", display: "block" as const, marginBottom: "4px" };

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#f8fafc" }}>
      <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/admin" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.85rem" }}>← Dashboard</Link>
          <span style={{ color: "#334155" }}>|</span>
          <span style={{ color: "#6366f1", fontWeight: 700, fontSize: "0.9rem" }}>🎓 Students</span>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={{ background: showForm ? "rgba(239,68,68,0.15)" : "rgba(99,102,241,0.15)", border: `1px solid ${showForm ? "rgba(239,68,68,0.4)" : "rgba(99,102,241,0.4)"}`, color: showForm ? "#ef4444" : "#a5b4fc", padding: "0.5rem 1.25rem", borderRadius: "8px", fontWeight: 600, cursor: "pointer", fontSize: "0.85rem" }}>
          {showForm ? "✕ Cancel" : "+ Add Student"}
        </button>
      </div>

      <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>All Students</h1>
        <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "2rem" }}>{students.length} students enrolled</p>

        {showForm && (
          <div style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "16px", padding: "1.5rem", marginBottom: "1.5rem" }}>
            <h2 style={{ fontWeight: 700, marginBottom: "1.25rem", color: "#a5b4fc", fontSize: "0.95rem" }}>New Student</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { label: "Username", key: "username", placeholder: "john_doe" },
                { label: "Email", key: "email", placeholder: "john@school.edu" },
                { label: "Class ID", key: "classId", placeholder: "10-A" },
                { label: "Blood Type", key: "bloodType", placeholder: "A+" },
              ].map(f => (
                <div key={f.key}>
                  <label style={labelStyle}>{f.label}</label>
                  <input value={(form as any)[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} placeholder={f.placeholder} style={inputStyle} />
                </div>
              ))}
            </div>
            <button onClick={handleAdd} style={{ marginTop: "1rem", background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "white", border: "none", padding: "0.6rem 1.5rem", borderRadius: "8px", fontWeight: 700, cursor: "pointer", fontSize: "0.85rem" }}>
              Save Student
            </button>
          </div>
        )}

        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍  Search students..." style={{ ...inputStyle, maxWidth: "340px", marginBottom: "1rem" }} />

        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                {["Student", "Email", "Class", "Blood Type", "Gender", "Actions"].map(h => (
                  <th key={h} style={{ padding: "0.9rem 1.25rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 700, color: "#475569", borderBottom: "1px solid rgba(255,255,255,0.06)", letterSpacing: "0.05em" }}>{h.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding: "1rem 1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700 }}>
                        {s.username[0].toUpperCase()}
                      </div>
                      <span style={{ fontWeight: 600, fontSize: "0.88rem" }}>{s.username}</span>
                    </div>
                  </td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.85rem", color: "#64748b" }}>{s.email}</td>
                  <td style={{ padding: "1rem 1.25rem" }}><span style={{ background: "rgba(99,102,241,0.15)", color: "#a5b4fc", padding: "3px 10px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600 }}>{s.classId}</span></td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.85rem", color: "#94a3b8" }}>{s.bloodType}</td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.85rem", color: "#94a3b8" }}>{s.gender}</td>
                  <td style={{ padding: "1rem 1.25rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <button style={{ background: "rgba(14,165,233,0.1)", color: "#38bdf8", border: "1px solid rgba(14,165,233,0.2)", padding: "4px 12px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}>Edit</button>
                      <button onClick={() => setStudents(p => p.filter(x => x.id !== s.id))} style={{ background: "rgba(239,68,68,0.1)", color: "#f87171", border: "1px solid rgba(239,68,68,0.2)", padding: "4px 12px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: "0.75rem 1.25rem", borderTop: "1px solid rgba(255,255,255,0.06)", color: "#475569", fontSize: "0.78rem" }}>
            Showing {filtered.length} of {students.length} students
          </div>
        </div>
      </div>
    </div>
  );
}