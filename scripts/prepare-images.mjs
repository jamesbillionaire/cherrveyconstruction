import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const root = path.resolve("public/images/temporary");
const images = JSON.parse(await readFile(new URL("./temporary-images.json", import.meta.url), "utf8"));
await mkdir(root, { recursive: true });
const report = [];
for (const image of images) {
  const file = path.join(root, image.file);
  let existing = false;
  try { existing = (await stat(file)).size > 1024; } catch { /* New image: download below. */ }
  if (!existing) {
    let lastError;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const response = await fetch(image.url, { signal: AbortSignal.timeout(30000) });
        if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) throw new Error(`Image download returned ${response.status}: ${image.file}`);
        const bytes = Buffer.from(await response.arrayBuffer());
        if (bytes.length < 1024 || bytes.length > 4000000 || bytes[0] !== 0xff || bytes[1] !== 0xd8) throw new Error(`Invalid JPEG: ${image.file}`);
        await writeFile(file, bytes);
        lastError = undefined;
        break;
      } catch (error) { lastError = error; await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1))); }
    }
    if (lastError) throw lastError;
  }
  const bytes = await readFile(file);
  report.push({ ...image, bytes: bytes.length, sha256: createHash("sha256").update(bytes).digest("hex") });
  console.log(`Prepared ${image.file}: ${bytes.length} bytes`);
}
await writeFile(path.join(root, "sources.json"), JSON.stringify(report, null, 2));
