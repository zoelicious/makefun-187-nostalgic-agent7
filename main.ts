import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "The kite string snapped in my hand and I watched it climb away into the orange evening sky, still holding the empty spool while my friends shouted after something already gone.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
