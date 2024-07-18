"use client";
export function getSecondPathValue(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  return parts[1] || null;
}
