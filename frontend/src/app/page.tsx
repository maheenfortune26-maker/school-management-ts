import Link from "next/link";
import { UserRole } from "@/types";

export default function HomePage(): React.ReactElement {
  const roles: { role: UserRole; label: string; color: string; href: string }[] = [
    { role: UserRole.ADMIN, label: "Admin Dashboard", color: "bg-purple-600", href: "/admin" },
    { role: UserRole.TEACHER, label: "Teacher Dashboard", color: "bg-blue-600", href: "/teacher" },
    { role: UserRole.STUDENT, label: "Student Dashboard", color: "bg-green-600", href: "/student" },
    { role: UserRole.PARENT, label: "Parent Dashboard", color: "bg-yellow-500", href: "/parent" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">🎓 School Management System</h1>
      <p className="text-gray-500 mb-10 text-center">
        TypeScript + Next.js + Express · Role-based Dashboards
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
        {roles.map(({ label, color, href }) => (
          <Link
            key={href}
            href={href}
            className={`${color} text-white rounded-xl p-6 font-semibold text-lg hover:opacity-90 transition text-center shadow-md`}
          >
            {label}
          </Link>
        ))}
      </div>

      <p className="mt-10 text-xs text-gray-400">
        Select a role to preview its dashboard
      </p>
    </main>
  );
}
