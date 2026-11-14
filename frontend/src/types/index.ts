// ─── Enums (mirrored from backend) ────────────────────────────────────────────

export enum UserRole {
  ADMIN = "admin",
  TEACHER = "teacher",
  STUDENT = "student",
  PARENT = "parent",
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

// ─── Generic API response (matches backend shape) ─────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
  error?: string;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ─── Domain types ──────────────────────────────────────────────────────────────

export interface Student {
  id: string;
  username: string;
  email: string;
  role: UserRole.STUDENT;
  gender: Gender;
  address: string;
  classId: string;
  gradeId: string;
  birthday: string;
  bloodType: string;
  img?: string;
}

export interface Teacher {
  id: string;
  username: string;
  email: string;
  role: UserRole.TEACHER;
  gender: Gender;
  address: string;
  subjects: string[];
  classes: string[];
  birthday: string;
  img?: string;
}

export interface Subject {
  id: string;
  name: string;
  teacherIds: string[];
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  classId?: string;
}

export interface Exam {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  lessonId: string;
}

// ─── Form schemas (used with Zod) ──────────────────────────────────────────────

export type StudentFormValues = {
  username: string;
  email: string;
  gender: Gender;
  address: string;
  classId: string;
  gradeId: string;
  birthday: string;
  bloodType: string;
  img?: string;
};

export type TeacherFormValues = {
  username: string;
  email: string;
  gender: Gender;
  address: string;
  birthday: string;
  subjects: string[];
};
