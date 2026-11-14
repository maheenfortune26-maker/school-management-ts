import { UserRole } from "@/types";

export interface MenuItem {
  label: string;
  icon: string;
  href: string;
  visibleTo: UserRole[];
}

export interface MenuGroup {
  title: string;
  items: MenuItem[];
}

export const menuGroups: MenuGroup[] = [
  {
    title: "MENU",
    items: [
      {
        label: "Home",
        icon: "🏠",
        href: "/",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT, UserRole.PARENT],
      },
      {
        label: "Teachers",
        icon: "👩‍🏫",
        href: "/list/teachers",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER],
      },
      {
        label: "Students",
        icon: "🎓",
        href: "/list/students",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER],
      },
      {
        label: "Parents",
        icon: "👨‍👩‍👧",
        href: "/list/parents",
        visibleTo: [UserRole.ADMIN],
      },
      {
        label: "Subjects",
        icon: "📚",
        href: "/list/subjects",
        visibleTo: [UserRole.ADMIN],
      },
      {
        label: "Classes",
        icon: "🏫",
        href: "/list/classes",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER],
      },
      {
        label: "Lessons",
        icon: "📖",
        href: "/list/lessons",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER],
      },
      {
        label: "Exams",
        icon: "📝",
        href: "/list/exams",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT, UserRole.PARENT],
      },
      {
        label: "Assignments",
        icon: "📋",
        href: "/list/assignments",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT, UserRole.PARENT],
      },
      {
        label: "Results",
        icon: "📊",
        href: "/list/results",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT, UserRole.PARENT],
      },
      {
        label: "Attendance",
        icon: "✅",
        href: "/list/attendance",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT, UserRole.PARENT],
      },
      {
        label: "Events",
        icon: "📅",
        href: "/list/events",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT, UserRole.PARENT],
      },
      {
        label: "Announcements",
        icon: "📢",
        href: "/list/announcements",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT, UserRole.PARENT],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        label: "Profile",
        icon: "👤",
        href: "/profile",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT, UserRole.PARENT],
      },
      {
        label: "Settings",
        icon: "⚙️",
        href: "/settings",
        visibleTo: [UserRole.ADMIN],
      },
      {
        label: "Logout",
        icon: "🚪",
        href: "/logout",
        visibleTo: [UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT, UserRole.PARENT],
      },
    ],
  },
];

/** Returns only the items visible to the given role */
export function getMenuForRole(role: UserRole): MenuGroup[] {
  return menuGroups.map((group) => ({
    ...group,
    items: group.items.filter((item) => item.visibleTo.includes(role)),
  }));
}
