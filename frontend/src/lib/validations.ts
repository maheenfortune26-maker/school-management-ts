import { z } from "zod";
import { Gender } from "@/types";

export const studentSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username too long"),
  email: z.string().email("Invalid email address"),
  gender: z.nativeEnum(Gender, { errorMap: () => ({ message: "Select a gender" }) }),
  address: z.string().min(5, "Address must be at least 5 characters"),
  classId: z.string().min(1, "Class is required"),
  gradeId: z.string().min(1, "Grade is required"),
  birthday: z.string().min(1, "Birthday is required"),
  bloodType: z.string().min(1, "Blood type is required"),
  img: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

export const teacherSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  gender: z.nativeEnum(Gender, { errorMap: () => ({ message: "Select a gender" }) }),
  address: z.string().min(5, "Address too short"),
  birthday: z.string().min(1, "Birthday is required"),
  subjects: z.array(z.string()).min(1, "Assign at least one subject"),
});

export type StudentFormData = z.infer<typeof studentSchema>;
export type TeacherFormData = z.infer<typeof teacherSchema>;
