import { Router, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { AuthRequest, requireRole } from "../middleware/auth";
import { Repository } from "../utils/repository";
import { announcements as initialAnnouncements } from "../data/mockData";
import {
  Announcement,
  UserRole,
  CreateAnnouncementBody,
  UpdateAnnouncementBody,
  successResponse,
  errorResponse,
} from "../types";

const router = Router();
const repo = new Repository<Announcement>(initialAnnouncements);

// Everyone can read announcements
router.get("/", (req: AuthRequest, res: Response): void => {
  const { classId } = req.query;
  if (classId && typeof classId === "string") {
    const filtered = repo.search(
      (a) => !a.classId || a.classId === classId
    );
    res.json(successResponse(filtered));
    return;
  }
  res.json(successResponse(repo.findAll()));
});

router.get("/:id", (req: AuthRequest, res: Response): void => {
  const item = repo.findById(req.params.id);
  if (!item) {
    res.status(404).json(errorResponse("Announcement not found"));
    return;
  }
  res.json(successResponse(item));
});

router.post(
  "/",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const body = req.body as CreateAnnouncementBody;
    if (!body.title || !body.description) {
      res.status(400).json(errorResponse("Title and description are required"));
      return;
    }
    const newItem: Announcement = {
      ...body,
      id: uuidv4(),
      date: new Date(body.date),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    res.status(201).json(successResponse(repo.create(newItem), "Announcement created"));
  }
);

router.put(
  "/:id",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const updated = repo.update(req.params.id, req.body as UpdateAnnouncementBody);
    if (!updated) {
      res.status(404).json(errorResponse("Announcement not found"));
      return;
    }
    res.json(successResponse(updated, "Announcement updated"));
  }
);

router.delete(
  "/:id",
  requireRole(UserRole.ADMIN),
  (req: AuthRequest, res: Response): void => {
    const deleted = repo.delete(req.params.id);
    if (!deleted) {
      res.status(404).json(errorResponse("Announcement not found"));
      return;
    }
    res.json(successResponse(null, "Announcement deleted"));
  }
);

export default router;
