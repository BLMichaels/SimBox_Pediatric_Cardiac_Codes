#!/usr/bin/env node
/**
 * Generate a sample PDF using the colleague's Script34 from git HEAD
 * (not the local working-copy user.js).
 *
 * Usage: node scripts/generate-colleague-sample-pdf.mjs [outPath]
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outPath =
  process.argv[2] ||
  path.join(root, "sample-output", "Simulation_Debrief_Report_COLLEAGUE.pdf");

const sampleVars = {
  SimBegin1: "8/21/2026 at 14:31:41",
  One1: "0:05",
  Two1: "0:09",
  Three1: "0:17",
  Four1: "0:20",
  Five1: "0:33",
  Six1: "0:43<br>0:52",
  SimBegin2: "0:47",
  One2: "0:52",
  Two2: "0:53",
  Three2: "01:31",
  Four2: "0:56",
  Five2: "0:59",
  Six2: "0:59",
  SimBegin3: "01:17",
  One3: "01:29",
  Two3: "01:30",
  Three3: "01:31",
  Four3: "01:31",
  Five3: "01:32",
  Debrief: "01:36",
  compressionsString:
    "Initial compression started at: 0:09<br>" +
    "Compressions off: 00:25 | Compressions on: 00:29<br>" +
    "Compressions off: 00:43 | Compressions on: 00:45<br>" +
    "Compressions off: 00:52 | Compressions on: 01:00<br>" +
    "Compressions off: 01:08 | Compressions on: 01:13<br>" +
    "Stopped Compressions: 01:31"
};

let userJs = execSync("git show HEAD:story_content/user.js", {
  cwd: root,
  encoding: "utf8"
});

const start = userJs.indexOf("window.Script34 = function()");
if (start < 0) throw new Error("Script34 not found in HEAD user.js");
userJs = userJs.slice(start);
userJs = userJs.replace(/\r\n/g, "\n").replace(/\n\};\s*$/, "\n");

userJs = userJs.replace(
  /doc\.save\("Simulation_Debrief_Report\.pdf"\);/,
  "globalThis.__SAMPLE_PDF_DOC = doc;"
);

const jspdfCode = fs.readFileSync(path.join(root, "vendor/jspdf.umd.min.js"), "utf8");

const ctx = {
  window: {},
  self: {},
  globalThis: {},
  navigator: { userAgent: "node-colleague-sample-pdf" },
  atob: (s) => Buffer.from(s, "base64").toString("binary"),
  btoa: (s) => Buffer.from(s, "binary").toString("base64"),
  alert(msg) {
    throw new Error("alert: " + msg);
  },
  console,
  GetPlayer() {
    return {
      GetVar(name) {
        return sampleVars[name] != null ? sampleVars[name] : "";
      },
      SetVar() {}
    };
  }
};

ctx.window = ctx;
ctx.self = ctx;
ctx.globalThis = ctx;

vm.createContext(ctx);
vm.runInContext(jspdfCode, ctx);
vm.runInContext(userJs, ctx);
ctx.Script34();

const doc = ctx.__SAMPLE_PDF_DOC;
if (!doc) {
  throw new Error("PDF doc was not captured — doc.save replace may have failed");
}

const bytes = Buffer.from(doc.output("arraybuffer"));
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, bytes);
console.log(
  JSON.stringify(
    {
      ok: true,
      source: "HEAD:story_content/user.js (colleague Script34)",
      path: outPath,
      bytes: bytes.length,
      pages: doc.getNumberOfPages(),
      header: bytes.slice(0, 5).toString()
    },
    null,
    2
  )
);
