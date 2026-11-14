import { Router, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { AuthRequest, requireRole } from "../middleware/auth";
import { Repository } from "../utils/repository";
import { exams as initialExams } from "../data/mockData";
import {
  Exam,
  UserRole,
  CreateExamBody,
  UpdateExamBody,
  successResponse,
  errorResponse,
} from "../types";

const router = Router();
const repo = new Repository<Exam>(initialExams);

// All roles can view exams
router.get("/", (_req: AuthRequest, res: Response): void => {
  res.json(successResponse(repo.findAll()));
});

router.get("/:id", (req: AuthRequest, res: Response): void => {
  const exam = repo.findById(req.params.id);
  if (!exam) {
    res.status(404).json(errorResponse("Exam not found"));
    return;
  }
  res.json(successResponse(exam));
});

// Admin and teachers can create exams
router.post(
  "/",
  requireRole(UserRole.ADMIN, UserRole.TEACHER),
  (req: AuthRequest, res: Response): void => {
    const body = req.body as CreateExamBody;
    if (!body.title || !body.lessonId || !body.startTime || !body.endTime) {
      res.status(400).json(errorResponse("Missing required fields"));
      return;
    }
    const newExam: Exam = {
      ...body,
      id: uuidv4(),
      startTime: new Date(body.startTime),
      endTime: new Date(body.endTime),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    res.status(201).json(successResponse(repo.create(newExam), "Exam created"));
  }
);

router.put(
  "/:id",
  requireRole(UserRole.ADMIN, UserRole.TEACHER),
  (req: AuthRequest, res: Response): void => {
    const updated = repo.update(req.params.id, req.body as UpdateExamBody);
    if (!updated) {
      res.status(404).json(errorResponse("Exam not found"));
      return;
    }
    res.json(successResponse(updated, "Exam updated"));
  }
);

router.delete(
  "/:id",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const deleted = repo.delete(req.params.id);
    if (!deleted) {
      res.status(404).json(errorResponse("Exam not found"));
      return;
    }
    res.json(successResponse(null, "Exam deleted"));
  }
);

export default router;
