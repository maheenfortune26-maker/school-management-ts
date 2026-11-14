"use client";

import { useState } from "react";
import Table, { Column } from "@/components/Table";
import StudentForm from "@/components/StudentForm";
import { Student } from "@/types";
import { StudentFormData } from "@/lib/validations";

// Mock data for the UI demo
const MOCK_STUDENTS: Student[] = [
  {
    id: "s1",
    username: "john_doe",
    email: "john@school.edu",
    role: "student" as Student["role"],
    gender: "male" as Student["gender"],
    address: "123 Main St",
    classId: "10-A",
    gradeId: "Grade 10",
    birthday: "2008-03-15",
    bloodType: "A+",
  },
  {
    id: "s2",
    username: "jane_smith",
    email: "jane@school.edu",
    role: "student" as Student["role"],
    gender: "female" as Student["gender"],
    address: "456 Oak Ave",
    classId: "10-A",
    gradeId: "Grade 10",
    birthday: "2008-07-22",
    bloodType: "B+",
  },
];

const columns: Column<Student>[] = [
  { header: "Username", accessor: "username" },
  { header: "Email", accessor: "email", hideOnMobile: true },
  { header: "Class", accessor: "classId" },
  { header: "Blood Type", accessor: "bloodType", hideOnMobile: true },
  {
    header: "Gender",
    accessor: (s) => (
      <span className="capitalize">{s.gender}</span>
    ),
  },
];

export default function StudentsPage(): React.ReactElement {
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = students.filter(
    (s) =>
      s.username.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  function handleCreate(data: StudentFormData): void {
    const newStudent: Student = {
      ...data,
      id: `s${Date.now()}`,
      role: "student" as Student["role"],
    };
    setStudents((prev) => [...prev, newStudent]);
    setShowForm(false);
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Students</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
        >
          {showForm ? "Cancel" : "+ Add Student"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">New Student</h2>
          <StudentForm onSubmit={handleCreate} />
        </div>
      )}

      {/* Search */}
      <div className="mb-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email…"
          className="w-full md:w-80 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="bg-white rounded-xl shadow">
        <Table<Student>
          columns={columns}
          data={filtered}
          renderActions={(student) => (
            <div className="flex gap-2">
              <button className="text-blue-600 hover:underline text-xs">Edit</button>
              <button
                className="text-red-500 hover:underline text-xs"
                onClick={() =>
                  setStudents((prev) => prev.filter((s) => s.id !== student.id))
                }
              >
                Delete
              </button>
            </div>
          )}
        />
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Showing {filtered.length} of {students.length} students
      </p>
    </div>
  );
}
