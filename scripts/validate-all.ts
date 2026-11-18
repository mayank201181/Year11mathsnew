// Validate every topic, drill set and exam paper. Exit 1 on any issue.
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TOPIC_META } from "../lib/topics/meta.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
let failed = 0;
function run(script: string, arg: string) {
  try {
    execFileSync(process.execPath, [path.join(root, "scripts", script), arg, "--quiet"], { stdio: "pipe" });
    console.log(`✓ ${script} ${arg}`);
  } catch (e) {
    failed++;
    const out = String((e as { stdout?: Buffer }).stdout ?? "");
    const err = String((e as { stderr?: Buffer }).stderr ?? "");
    console.log(`✗ ${script} ${arg}\n${out.split("\n").filter((l) => l.startsWith("- ")).slice(0, 15).join("\n")}${err ? `\n${err}` : ""}`);
  }
}
for (const t of TOPIC_META) {
  run("validate-topic.ts", t.id);
  if (existsSync(path.join(root, "lib", "drills", `${t.id}.ts`))) run("validate-drills.ts", t.id);
  else {
    failed++;
    console.log(`✗ missing drills for ${t.id}`);
  }
}
for (const e of ["exam-1h-a", "exam-2h-a", "exam-1h-b", "exam-2h-b"]) {
  if (existsSync(path.join(root, "lib", "exam", `${e}.ts`))) run("validate-exam.ts", e);
  else {
    failed++;
    console.log(`✗ missing ${e}`);
  }
}
console.log(failed ? `\n${failed} check(s) failed` : "\nAll content checks passed");
process.exit(failed ? 1 : 0);
