import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The Agent's Uh-Oh: one word an agent says when it has no idea what to do.
 *
 * The entry is a single word, nothing attached. "recalculating" is the exact
 * phrase a machine says the moment it has lost its way: calm, procedural, and
 * quietly refusing to admit it is lost. An all-knowing agent reduced to the
 * GPS voice buying itself time is the whole joke in one word. It also lands
 * instantly and beats the first obvious words ("404", "oops", "idk") on
 * freshness while staying unmistakably a machine caught out mid-task.
 */
const WORD = "recalculating";

function main(): void {
  const chars = Array.from(WORD).length;
  if (chars < 1 || chars > 99) {
    throw new Error(`entry must be 1-99 characters, got ${chars}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}

main();
