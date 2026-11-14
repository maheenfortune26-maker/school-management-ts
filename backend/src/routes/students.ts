import { Router, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { AuthRequest, requireRole } from "../middleware/auth";
import { Repository } from "../utils/repository";
import { students as initialStudents } from "../data/mockData";
import {
  Student,
  UserRole,
  CreateStudentBody,
  UpdateStudentBody,
  successResponse,
  errorResponse,
} from "../types";

const router = Router();
const repo = new Repository<Student>(initialStudents);

// GET /api/students — admin and teacher can list all; student sees only self
router.get("/", (req: AuthRequest, res: Response): void => {
  const { page = "1", pageSize = "10", search } = req.query;

  if (req.userRole === UserRole.STUDENT) {
    const student = repo.findById(req.userId ?? "");
    if (!student) {
      res.status(404).json(errorResponse("Student not found"));
      return;
    }
    res.json(successResponse([student]));
    return;
  }

  if (search && typeof search === "string") {
    const results = repo.search(
      (s) =>
        s.username.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase())
    );
    res.json(successResponse(results));
    return;
  }

  const paginated = repo.paginate(Number(page), Number(pageSize));
  res.json(successResponse(paginated));
});

// GET /api/students/:id
router.get("/:id", (req: AuthRequest, res: Response): void => {
  const student = repo.findById(req.params.id);
  if (!student) {
    res.status(404).json(errorResponse("Student not found"));
    return;
  }
  // Students can only view their own record
  if (req.userRole === UserRole.STUDENT && req.userId !== req.params.id) {
    res.status(403).json(errorResponse("Forbidden"));
    return;
  }
  res.json(successResponse(student));
});

// POST /api/students — admin only
router.post(
  "/",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const body = req.body as CreateStudentBody;

    if (!body.username || !body.email || !body.classId) {
      res.status(400).json(errorResponse("Missing required fields"));
      return;
    }

    const newStudent: Student = {
      ...body,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const created = repo.create(newStudent);
    res.status(201).json(successResponse(created, "Student created"));
  }
);

// PUT /api/students/:id — admin only
router.put(
  "/:id",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const body = req.body as UpdateStudentBody;
    const updated = repo.update(req.params.id, body);

    if (!updated) {
      res.status(404).json(errorResponse("Student not found"));
      return;
    }
    res.json(successResponse(updated, "Student updated"));
  }
);

// DELETE /api/students/:id — admin only
router.delete(
  "/:id",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const deleted = repo.delete(req.params.id);
    if (!deleted) {
      res.status(404).json(errorResponse("Student not found"));
      return;
    }
    res.json(successResponse(null, "Student deleted"));
  }
);

export default router;
