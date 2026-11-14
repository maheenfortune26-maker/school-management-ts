import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { authenticate } from "./middleware/auth";
import studentsRouter from "./routes/students";
import teachersRouter from "./routes/teachers";
import subjectsRouter from "./routes/subjects";
import examsRouter from "./routes/exams";
import announcementsRouter from "./routes/announcements";

dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 4000;

// ─── Global Middleware ────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── Health check (no auth required) ─────────────────────────────────────────
app.get("/", (_req: Request, res: Response): void => {
  res.json({ message: "School Management API — TypeScript Edition 🎓", status: "ok" });
});

// ─── All routes require authentication ───────────────────────────────────────
app.use("/api", authenticate);

app.use("/api/students", studentsRouter);
app.use("/api/teachers", teachersRouter);
app.use("/api/subjects", subjectsRouter);
app.use("/api/exams", examsRouter);
app.use("/api/announcements", announcementsRouter);

// ─── 404 handler ─────────────────────────────────────────────────────────────
app.use((_req: Request, res: Response): void => {
  res.status(404).json({ success: false, message: "Route not found", data: null });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

export default app;
