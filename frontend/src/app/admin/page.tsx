import Link from "next/link";

interface StatCard {
  label: string;
  value: number;
  color: string;
  href: string;
}

const stats: StatCard[] = [
  { label: "Students", value: 1240, color: "bg-blue-100 text-blue-700", href: "/list/students" },
  { label: "Teachers", value: 86, color: "bg-purple-100 text-purple-700", href: "/list/teachers" },
  { label: "Parents", value: 980, color: "bg-green-100 text-green-700", href: "/list/parents" },
  { label: "Staff", value: 24, color: "bg-yellow-100 text-yellow-700", href: "#" },
];

export default function AdminDashboard(): React.ReactElement {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <Link key={s.label} href={s.href}>
            <div className={`rounded-xl p-5 ${s.color} hover:scale-105 transition`}>
              <p className="text-3xl font-bold">{s.value.toLocaleString()}</p>
              <p className="text-sm font-medium mt-1">{s.label}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick links */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Add Student", href: "/list/students" },
            { label: "Add Teacher", href: "/list/teachers" },
            { label: "Post Announcement", href: "/list/announcements" },
            { label: "View Exams", href: "/list/exams" },
          ].map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              {a.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
