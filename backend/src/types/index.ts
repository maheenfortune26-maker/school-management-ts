// ─── Enums ────────────────────────────────────────────────────────────────────

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

export enum Day {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
}

// ─── Generic API Response wrapper ─────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
  error?: string;
}

// Generic helper to build a success response
export function successResponse<T>(data: T, message = "OK"): ApiResponse<T> {
  return { success: true, data, message };
}

// Generic helper to build an error response
export function errorResponse<T = null>(
  message: string,
  error?: string
): ApiResponse<T> {
  return { success: false, data: null, message, error };
}

// ─── Generic Paginated Result ─────────────────────────────────────────────────

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ─── Domain interfaces ────────────────────────────────────────────────────────

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends BaseEntity {
  username: string;
  email: string;
  role: UserRole;
  gender: Gender;
  phone?: string;
  address: string;
  img?: string;
}

export interface Admin extends User {
  role: UserRole.ADMIN;
}

export interface Teacher extends User {
  role: UserRole.TEACHER;
  subjects: string[];
  classes: string[];
  birthday: Date;
}

export interface Student extends User {
  role: UserRole.STUDENT;
  parentId: string;
  classId: string;
  gradeId: string;
  birthday: Date;
  bloodType: string;
}

export interface Parent extends User {
  role: UserRole.PARENT;
  studentIds: string[];
}

export interface Subject extends BaseEntity {
  name: string;
  teacherIds: string[];
}

export interface Class extends BaseEntity {
  name: string;
  capacity: number;
  gradeId: string;
  supervisorId: string;
}

export interface Lesson extends BaseEntity {
  name: string;
  day: Day;
  startTime: Date;
  endTime: Date;
  subjectId: string;
  classId: string;
  teacherId: string;
}

export interface Exam extends BaseEntity {
  title: string;
  startTime: Date;
  endTime: Date;
  lessonId: string;
}

export interface Assignment extends BaseEntity {
  title: string;
  startDate: Date;
  dueDate: Date;
  lessonId: string;
}

export interface Announcement extends BaseEntity {
  title: string;
  description: string;
  date: Date;
  classId?: string; // null = school-wide
}

export interface Event extends BaseEntity {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  classId?: string;
}

export interface Attendance extends BaseEntity {
  date: Date;
  present: boolean;
  studentId: string;
  lessonId: string;
}

// ─── Request body types ───────────────────────────────────────────────────────

export type CreateStudentBody = Omit<Student, keyof BaseEntity>;
export type UpdateStudentBody = Partial<CreateStudentBody>;

export type CreateTeacherBody = Omit<Teacher, keyof BaseEntity>;
export type UpdateTeacherBody = Partial<CreateTeacherBody>;

export type CreateSubjectBody = Omit<Subject, keyof BaseEntity>;
export type UpdateSubjectBody = Partial<CreateSubjectBody>;

export type CreateClassBody = Omit<Class, keyof BaseEntity>;
export type UpdateClassBody = Partial<CreateClassBody>;

export type CreateExamBody = Omit<Exam, keyof BaseEntity>;
export type UpdateExamBody = Partial<CreateExamBody>;

export type CreateAnnouncementBody = Omit<Announcement, keyof BaseEntity>;
export type UpdateAnnouncementBody = Partial<CreateAnnouncementBody>;
