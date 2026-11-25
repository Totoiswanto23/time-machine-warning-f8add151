// time-machine-warning-f8add151: Funniest Time Machine Warning Label.
// This program writes one warning label for a time machine, at most
// 120 characters, to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The label: a straight-faced safety notice about the butterfly effect.
// The real hazard (changing history) is the joke, and the surprise lands
// in the last two words — the bill goes to your great-grandchildren,
// with interest. 111 characters: safely inside the 120-character gate.
const LINE =
  "WARNING: Do not step on any butterflies. Changing history is billed to your great-grandchildren, with interest.";

if (LINE.length < 1 || LINE.length > 120 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-120 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
