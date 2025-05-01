// lib/getBlurData.ts
import { getPlaiceholder } from "plaiceholder";
import fs from "fs";
import path from "path";

/**
 * Generates a base64 blurDataURL for a given image in the /public directory
 * @param imagePath - relative path starting from /public (e.g. "/images/hero.jpeg")
 */
export async function getBlurData(imagePath: string): Promise<string> {
  const fullPath = path.join(process.cwd(), "public", imagePath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Image not found at path: ${fullPath}`);
  }

  const imageBuffer = fs.readFileSync(fullPath);
  const { base64 } = await getPlaiceholder(imageBuffer);

  return base64;
}
