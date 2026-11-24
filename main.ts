import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Real-Life Patch Notes: one-line patch note, max 160 chars.
const ENTRY =
  "v2.4.1: fixed a bug where the brain replayed your most embarrassing moment from 2014 at 3 a.m. instead of sleeping.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
