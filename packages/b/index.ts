import { c } from "@monorepo/packages/c";
import { readFileSync } from "fs";
import { join } from "path";

export const b = `b: ${readFileSync(join(__dirname, "b.txt"))} ${c}`;
