import { ApiResponse, UserRole } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

/**
 * Generic typed fetch wrapper.
 * T is the shape of `data` in the ApiResponse.
 */
export async function apiFetch<T>(
  path: string,
  role: UserRole,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-user-role": role,
      ...(options.headers ?? {}),
    },
  });

  const json: ApiResponse<T> = await res.json();
  return json;
}

export async function apiGet<T>(path: string, role: UserRole): Promise<ApiResponse<T>> {
  return apiFetch<T>(path, role);
}

export async function apiPost<T>(
  path: string,
  role: UserRole,
  body: unknown
): Promise<ApiResponse<T>> {
  return apiFetch<T>(path, role, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export async function apiPut<T>(
  path: string,
  role: UserRole,
  body: unknown
): Promise<ApiResponse<T>> {
  return apiFetch<T>(path, role, {
    method: "PUT",
    body: JSON.stringify(body),
  });
}

export async function apiDelete<T>(
  path: string,
  role: UserRole
): Promise<ApiResponse<T>> {
  return apiFetch<T>(path, role, { method: "DELETE" });
}
