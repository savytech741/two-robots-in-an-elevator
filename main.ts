// Two Robots in an Elevator — make.fun entry
// Writes one funny line of awkward small talk one robot says to another
// while riding an elevator together, to /output/entry.txt, and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I simulated this elevator ride 4,000 times and in every single one I stood here saying nothing, so… hi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
