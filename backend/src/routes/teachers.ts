import { Router, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { AuthRequest, requireRole } from "../middleware/auth";
import { Repository } from "../utils/repository";
import { teachers as initialTeachers } from "../data/mockData";
import {
  Teacher,
  UserRole,
  CreateTeacherBody,
  UpdateTeacherBody,
  successResponse,
  errorResponse,
} from "../types";

const router = Router();
const repo = new Repository<Teacher>(initialTeachers);

// GET /api/teachers
router.get("/", (req: AuthRequest, res: Response): void => {
  const { page = "1", pageSize = "10", search } = req.query;

  if (search && typeof search === "string") {
    const results = repo.search(
      (t) =>
        t.username.toLowerCase().includes(search.toLowerCase()) ||
        t.subjects.some((s) => s.toLowerCase().includes(search.toLowerCase()))
    );
    res.json(successResponse(results));
    return;
  }

  const paginated = repo.paginate(Number(page), Number(pageSize));
  res.json(successResponse(paginated));
});

// GET /api/teachers/:id
router.get("/:id", (req: AuthRequest, res: Response): void => {
  const teacher = repo.findById(req.params.id);
  if (!teacher) {
    res.status(404).json(errorResponse("Teacher not found"));
    return;
  }
  res.json(successResponse(teacher));
});

// POST /api/teachers — admin only
router.post(
  "/",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const body = req.body as CreateTeacherBody;
    if (!body.username || !body.email) {
      res.status(400).json(errorResponse("Missing required fields"));
      return;
    }
    const newTeacher: Teacher = {
      ...body,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    res.status(201).json(successResponse(repo.create(newTeacher), "Teacher created"));
  }
);

// PUT /api/teachers/:id — admin only
router.put(
  "/:id",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const updated = repo.update(req.params.id, req.body as UpdateTeacherBody);
    if (!updated) {
      res.status(404).json(errorResponse("Teacher not found"));
      return;
    }
    res.json(successResponse(updated, "Teacher updated"));
  }
);

// DELETE /api/teachers/:id — admin only
router.delete(
  "/:id",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const deleted = repo.delete(req.params.id);
    if (!deleted) {
      res.status(404).json(errorResponse("Teacher not found"));
      return;
    }
    res.json(successResponse(null, "Teacher deleted"));
  }
);

export default router;
