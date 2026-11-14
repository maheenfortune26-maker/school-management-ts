import { Request, Response, NextFunction } from "express";
import { UserRole } from "../types";

// Extend Express Request to carry role info
export interface AuthRequest extends Request {
  userRole?: UserRole;
  userId?: string;
}

/**
 * Simulates auth — in a real app this would verify a JWT (e.g., Clerk token).
 * Reads role from the x-user-role header for demo purposes.
 */
export function authenticate(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void {
  const roleHeader = req.headers["x-user-role"] as string | undefined;
  const userId = req.headers["x-user-id"] as string | undefined;

  if (!roleHeader || !Object.values(UserRole).includes(roleHeader as UserRole)) {
    res.status(401).json({ success: false, message: "Unauthorized", data: null });
    return;
  }

  req.userRole = roleHeader as UserRole;
  req.userId = userId;
  next();
}

/**
 * Factory: returns middleware that restricts access to specified roles.
 */
export function requireRole(...roles: UserRole[]) {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.userRole || !roles.includes(req.userRole)) {
      res
        .status(403)
        .json({ success: false, message: "Forbidden: insufficient role", data: null });
      return;
    }
    next();
  };
}
