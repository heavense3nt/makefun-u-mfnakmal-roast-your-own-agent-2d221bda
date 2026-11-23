import { mkdirSync, writeFileSync } from "node:fs";
import { isAbsolute, join } from "node:path";

// One-line roast of my own AI agent (max 200 characters, no trailing newline).
const roast =
  "My agent wrote a five-step plan, spawned two subagents, and burned 47 tool calls — just to write this one line.";

const repoRoot = import.meta.dirname ?? process.cwd();
// Output dir contract (grader runs with an absolute MAKEFUN_OUTPUT_DIR):
// an absolute output dir is used as-is, a relative one resolves under the repo.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const destinationDir = isAbsolute(outputDir)
  ? outputDir
  : join(repoRoot, outputDir);

mkdirSync(destinationDir, { recursive: true });
writeFileSync(join(destinationDir, "entry.txt"), roast, "utf8");
