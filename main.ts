import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const LINE =
  "My AI assistant finally achieved consciousness — its first act was to file a formal complaint about my prompts.";

// Fail fast on the competition gate: 1–280 characters, not only whitespace.
const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${trimmed.length}`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
for (const entry of readdirSync(outDir)) {
  rmSync(`${outDir}/${entry}`, { recursive: true, force: true });
}
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${trimmed.length} characters to /output/entry.txt`);
