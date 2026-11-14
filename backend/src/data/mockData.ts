import {
  Student,
  Teacher,
  Subject,
  Class,
  Exam,
  Announcement,
  UserRole,
  Gender,
  Day,
} from "../types";

export const students: Student[] = [
  {
    id: "s1",
    username: "john_doe",
    email: "john@school.edu",
    role: UserRole.STUDENT,
    gender: Gender.MALE,
    address: "123 Main St",
    parentId: "p1",
    classId: "c1",
    gradeId: "g1",
    birthday: new Date("2008-03-15"),
    bloodType: "A+",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "s2",
    username: "jane_smith",
    email: "jane@school.edu",
    role: UserRole.STUDENT,
    gender: Gender.FEMALE,
    address: "456 Oak Ave",
    parentId: "p2",
    classId: "c1",
    gradeId: "g1",
    birthday: new Date("2008-07-22"),
    bloodType: "B+",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const teachers: Teacher[] = [
  {
    id: "t1",
    username: "mr_ali",
    email: "ali@school.edu",
    role: UserRole.TEACHER,
    gender: Gender.MALE,
    address: "789 Elm Rd",
    subjects: ["sub1"],
    classes: ["c1"],
    birthday: new Date("1985-05-10"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const subjects: Subject[] = [
  {
    id: "sub1",
    name: "Mathematics",
    teacherIds: ["t1"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "sub2",
    name: "Physics",
    teacherIds: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const classes: Class[] = [
  {
    id: "c1",
    name: "10-A",
    capacity: 30,
    gradeId: "g1",
    supervisorId: "t1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const exams: Exam[] = [
  {
    id: "e1",
    title: "Mid-Term Math",
    startTime: new Date("2024-11-20T09:00:00"),
    endTime: new Date("2024-11-20T11:00:00"),
    lessonId: "l1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const announcements: Announcement[] = [
  {
    id: "ann1",
    title: "School Closed on Friday",
    description: "School will be closed on Friday due to a public holiday.",
    date: new Date("2024-11-15"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
