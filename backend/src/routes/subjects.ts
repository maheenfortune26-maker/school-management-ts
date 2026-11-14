import { Router, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { AuthRequest, requireRole } from "../middleware/auth";
import { Repository } from "../utils/repository";
import { subjects as initialSubjects } from "../data/mockData";
import {
  Subject,
  UserRole,
  CreateSubjectBody,
  UpdateSubjectBody,
  successResponse,
  errorResponse,
} from "../types";

const router = Router();
const repo = new Repository<Subject>(initialSubjects);

router.get("/", (_req: AuthRequest, res: Response): void => {
  res.json(successResponse(repo.findAll()));
});

router.get("/:id", (req: AuthRequest, res: Response): void => {
  const subject = repo.findById(req.params.id);
  if (!subject) {
    res.status(404).json(errorResponse("Subject not found"));
    return;
  }
  res.json(successResponse(subject));
});

router.post(
  "/",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const body = req.body as CreateSubjectBody;
    if (!body.name) {
      res.status(400).json(errorResponse("Subject name is required"));
      return;
    }
    const newSubject: Subject = {
      ...body,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    res.status(201).json(successResponse(repo.create(newSubject), "Subject created"));
  }
);

router.put(
  "/:id",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const updated = repo.update(req.params.id, req.body as UpdateSubjectBody);
    if (!updated) {
      res.status(404).json(errorResponse("Subject not found"));
      return;
    }
    res.json(successResponse(updated, "Subject updated"));
  }
);

router.delete(
  "/:id",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const deleted = repo.delete(req.params.id);
    if (!deleted) {
      res.status(404).json(errorResponse("Subject not found"));
      return;
    }
    res.json(successResponse(null, "Subject deleted"));
  }
);

export default router;
