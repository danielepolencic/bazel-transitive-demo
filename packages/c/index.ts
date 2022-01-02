import { readFileSync } from "fs";
import { join } from "path";

export const c = `c: ${readFileSync(join(__dirname, "c.txt"))}`;
