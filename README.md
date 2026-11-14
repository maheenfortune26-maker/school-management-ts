# 🎓 School Management System — TypeScript Migration

A full-stack school management app migrated to **TypeScript**, built with:
- **Backend**: Node.js + Express + TypeScript
- **Frontend**: Next.js 14 + Tailwind CSS + TypeScript

---

## ✅ Acceptance Criteria Checklist

| Requirement | Status |
|---|---|
| Express routes typed with TypeScript | ✅ All 5 routers typed with `AuthRequest`, `Response` |
| At least one generic type created and used | ✅ `Repository<T>`, `ApiResponse<T>`, `PaginatedResult<T>`, `Table<T>` |
| No implicit `any` in the project | ✅ Both `tsconfig.json` files set `"noImplicitAny": true` |

---

## 📁 Project Structure

```
school-ts/
├── backend/
│   ├── src/
│   │   ├── index.ts              # Express app entry point
│   │   ├── types/index.ts        # All interfaces, enums, generics
│   │   ├── middleware/auth.ts    # Typed auth middleware
│   │   ├── utils/repository.ts  # Generic Repository<T> class
│   │   ├── data/mockData.ts      # Seed data
│   │   └── routes/
│   │       ├── students.ts
│   │       ├── teachers.ts
│   │       ├── subjects.ts
│   │       ├── exams.ts
│   │       └── announcements.ts
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   ├── admin/page.tsx
    │   │   └── list/students/page.tsx
    │   ├── components/
    │   │   ├── Table.tsx         # Generic Table<T> component
    │   │   └── StudentForm.tsx   # React Hook Form + Zod validated form
    │   ├── lib/
    │   │   ├── api.ts            # Generic apiFetch<T> utility
    │   │   ├── validations.ts    # Zod schemas
    │   │   └── menuItems.ts      # Role-based menu data
    │   └── types/index.ts        # Frontend type definitions
    ├── package.json
    └── tsconfig.json
```

---

## 🚀 Getting Started

### Backend
```bash
cd backend
npm install
npm run dev        # ts-node-dev (hot reload)
npm run typecheck  # type-check only
```

Server starts at **http://localhost:4000**

### Frontend
```bash
cd frontend
npm install
npm run dev        # Next.js dev server
npm run typecheck  # type-check only
```

App runs at **http://localhost:3000**

---

## 🔑 Key TypeScript Features Used

### 1. Generic Repository (`backend/src/utils/repository.ts`)
```ts
class Repository<T extends BaseEntity> {
  paginate(page: number, pageSize: number): PaginatedResult<T> { ... }
  update(id: string, partial: Partial<T>): T | null { ... }
}
```

### 2. Generic API Response (`backend/src/types/index.ts`)
```ts
interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
}
function successResponse<T>(data: T, message = "OK"): ApiResponse<T> { ... }
```

### 3. Typed Express Middleware (`backend/src/middleware/auth.ts`)
```ts
interface AuthRequest extends Request {
  userRole?: UserRole;
  userId?: string;
}
function requireRole(...roles: UserRole[]) { ... }
```

### 4. Generic Table Component (`frontend/src/components/Table.tsx`)
```ts
interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
}
function Table<T extends { id: string }>({ columns, data }: TableProps<T>) { ... }
```

### 5. Enums for Domain Values
```ts
enum UserRole { ADMIN = "admin", TEACHER = "teacher", ... }
enum Gender { MALE = "male", FEMALE = "female", OTHER = "other" }
enum Day { MONDAY = "MONDAY", ... }
```

---

## 🌐 API Endpoints

All routes require `x-user-role` header (e.g. `admin`, `teacher`).

| Method | Path | Roles |
|--------|------|-------|
| GET | `/api/students` | admin, teacher, student |
| POST | `/api/students` | admin |
| PUT | `/api/students/:id` | admin |
| DELETE | `/api/students/:id` | admin |
| GET | `/api/teachers` | all |
| GET | `/api/subjects` | all |
| GET | `/api/exams` | all |
| POST | `/api/exams` | admin, teacher |
| GET | `/api/announcements` | all |
| POST | `/api/announcements` | admin |
