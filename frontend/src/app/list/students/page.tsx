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

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/" style={{ color: "#6b7280", textDecoration: "none" }}>← Back</Link>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#1e1b4b" }}>Students</h1>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={{
          background: "#2563eb", color: "white", border: "none",
          padding: "0.5rem 1.25rem", borderRadius: "0.5rem",
          fontWeight: "600", cursor: "pointer", fontSize: "0.9rem",
        }}>
          {showForm ? "Cancel" : "+ Add Student"}
        </button>
      </div>

      {showForm && (
        <div style={{ background: "white", borderRadius: "1rem", padding: "1.5rem", marginBottom: "1.5rem", boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}>
          <h2 style={{ fontWeight: "700", marginBottom: "1rem", color: "#374151" }}>New Student</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { label: "Username", key: "username", placeholder: "john_doe" },
              { label: "Email", key: "email", placeholder: "john@school.edu" },
              { label: "Class", key: "classId", placeholder: "10-A" },
              { label: "Blood Type", key: "bloodType", placeholder: "A+" },
            ].map(f => (
              <div key={f.key}>
                <label style={{ fontSize: "0.8rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "4px" }}>{f.label}</label>
                <input
                  value={(form as any)[f.key]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  placeholder={f.placeholder}
                  style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "0.5rem", padding: "0.5rem 0.75rem", fontSize: "0.85rem", outline: "none" }}
                />
              </div>
            ))}
          </div>
          <button onClick={handleAdd} style={{
            marginTop: "1rem", background: "#2563eb", color: "white",
            border: "none", padding: "0.6rem 1.5rem", borderRadius: "0.5rem",
            fontWeight: "600", cursor: "pointer",
          }}>Save Student</button>
        </div>
      )}

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="🔍 Search by name or email..."
        style={{ width: "100%", maxWidth: "360px", border: "1px solid #d1d5db", borderRadius: "0.5rem", padding: "0.6rem 1rem", fontSize: "0.85rem", marginBottom: "1rem", outline: "none" }}
      />

      <div style={{ background: "white", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f9fafb" }}>
              {["Username", "Email", "Class", "Blood Type", "Gender", "Actions"].map(h => (
                <th key={h} style={{ padding: "0.75rem 1rem", textAlign: "left", fontSize: "0.8rem", fontWeight: "700", color: "#6b7280", borderBottom: "1px solid #e5e7eb" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "0.75rem 1rem", fontSize: "0.85rem", fontWeight: "600", color: "#111827" }}>{s.username}</td>
                <td style={{ padding: "0.75rem 1rem", fontSize: "0.85rem", color: "#6b7280" }}>{s.email}</td>
                <td style={{ padding: "0.75rem 1rem" }}>
                  <span style={{ background: "#dbeafe", color: "#1d4ed8", padding: "2px 8px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "600" }}>{s.classId}</span>
                </td>
                <td style={{ padding: "0.75rem 1rem", fontSize: "0.85rem", color: "#374151" }}>{s.bloodType}</td>
                <td style={{ padding: "0.75rem 1rem", fontSize: "0.85rem", color: "#374151" }}>{s.gender}</td>
                <td style={{ padding: "0.75rem 1rem" }}>
                  <button style={{ color: "#2563eb", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", marginRight: "0.75rem" }}>Edit</button>
                  <button onClick={() => setStudents(p => p.filter(x => x.id !== s.id))} style={{ color: "#dc2626", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ padding: "0.75rem 1rem", fontSize: "0.75rem", color: "#9ca3af" }}>
          Showing {filtered.length} of {students.length} students
        </p>
      </div>
    </div>
  );
}