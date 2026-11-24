// The One-Line Cat Joke That Lands (u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
// A single cat joke, one line: the cat's useless job, celebrated anyway.
// Why it wins: it pairs the cat's one destructive habit with the deadpan
// corporate praise of "employee of the month", and the "every month" twist
// makes the reward feel permanent and unearned — exactly how cat owners see it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_BEATS = [
  "My cat's only job is knocking things off tables,",
  "and somehow she's employee of the month every month.",
];
const MAX_CHARS = 200;

export function buildEntryLine(): string {
  return ENTRY_BEATS.join(" ");
}

export const ENTRY_LINE = buildEntryLine();

function charCount(text: string): number {
  return [...text].length;
}

function isValidEntry(text: string): boolean {
  const n = charCount(text);
  return n >= 1 && n <= MAX_CHARS && text.trim().length > 0;
}

if (!isValidEntry(ENTRY_LINE)) {
  throw new Error(`Entry invalid: ${charCount(ENTRY_LINE)} chars (max ${MAX_CHARS})`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
