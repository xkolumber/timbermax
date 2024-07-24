"use client";

import imageCompression from "browser-image-compression";

export function getSecondPathValue(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  return parts[1] || null;
}

export const empty_three_values = ["", "", ""];
export const empty_five_values = ["", "", "", "", ""];

export async function CompressImages(files: FileList) {
  try {
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedFiles = await Promise.all(
      Array.from(files).map((file) => imageCompression(file, options))
    );

    return compressedFiles;
  } catch (error) {
    console.error("Error compressing images:", error);
    return null;
  }
}
