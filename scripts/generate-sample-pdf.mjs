#!/usr/bin/env node
/**
 * Generate a sample Pediatric Cardiac Codes debrief PDF with mock Storyline data.
 * Usage: node scripts/generate-sample-pdf.mjs [outPath]
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outPath =
  process.argv[2] ||
  path.join(root, "sample-output", "Simulation_Debrief_Report_SAMPLE.pdf");

const sampleVars = {
  SimBegin1: "8/21/2026 at 14:31:41",
  One1: "0:05",
  Two1: "0:09",
  Three1: "0:17",
  Four1: "0:20",
  Five1: "0:33",
  Six1: "0:43<br>0:52",
  Seven1: "0:36",
  Eight1: "0:39",
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
    "Stopped Compressions: 01:31",
  CompressionPauseCount: "4",
  CompressionPauseTotal: "00:19",
  CompressionPauseAverage: "00:05",
  CompressionPauseDetails:
    "Gap 1: 00:25-00:29 = 00:04 between compressions<br>" +
    "Gap 2: 00:43-00:45 = 00:02 between compressions<br>" +
    "Gap 3: 00:52-01:00 = 00:08 between compressions<br>" +
    "Gap 4: 01:08-01:13 = 00:05 between compressions"
};

const jspdfCode = fs.readFileSync(path.join(root, "vendor/jspdf.umd.min.js"), "utf8");
const logoCode = fs.readFileSync(path.join(root, "vendor/simbox-logo-data.js"), "utf8");
let userJs = fs.readFileSync(path.join(root, "story_content/user.js"), "utf8");

const start = userJs.indexOf("window.Script34 = function()");
if (start < 0) throw new Error("Script34 not found");
userJs = userJs.slice(start);
// Storyline packages sometimes append a stray `};` after Script34
userJs = userJs.replace(/\r\n/g, "\n").replace(/\n\};\s*$/, "\n");
userJs = userJs.replace(
  /window\.Script34 = function\(\)\s*\{\s*\(async function \(\) \{/,
  "window.Script34 = function() {\n  return (async function () {"
);

// Capture the jsPDF doc instead of downloading
userJs = userJs.replace(
  /savePdf\(doc,\s*"Simulation_Debrief_Report_"\s*\+\s*reportDate\s*\+\s*"\.pdf"\s*\);/,
  "globalThis.__SAMPLE_PDF_DOC = doc;"
);

const capturedBlobs = [];
const ctx = {
  window: {},
  self: {},
  globalThis: {},
  navigator: { userAgent: "node-sample-pdf" },
  location: { origin: "https://example.com", href: "https://example.com/" },
  atob: (s) => Buffer.from(s, "base64").toString("binary"),
  btoa: (s) => Buffer.from(s, "binary").toString("base64"),
  URL: {
    createObjectURL: (blob) => {
      capturedBlobs.push(blob);
      return "blob:sample";
    },
    revokeObjectURL() {}
  },
  open() {
    return null;
  },
  setTimeout: (fn) => {
    if (typeof fn === "function") fn();
    return 0;
  },
  alert: (msg) => {
    throw new Error("alert: " + msg);
  },
  document: {
    createElement() {
      return {
        href: "",
        download: "",
        rel: "",
        style: {},
        click() {},
        appendChild() {},
        removeChild() {}
      };
    },
    body: {
      appendChild() {},
      removeChild() {}
    }
  },
  GetPlayer() {
    return {
      GetVar(name) {
        return sampleVars[name] != null ? sampleVars[name] : "";
      },
      SetVar() {}
    };
  },
  console
};

ctx.window = ctx;
ctx.self = ctx;
ctx.globalThis = ctx;

vm.createContext(ctx);
vm.runInContext(jspdfCode, ctx);
vm.runInContext(logoCode, ctx);
vm.runInContext(userJs, ctx);

await Promise.resolve(ctx.Script34());
// Script34 is async IIFE - give microtasks a tick
await new Promise((r) => setImmediate(r));
await new Promise((r) => setImmediate(r));
await new Promise((r) => setTimeout(r, 50));

const doc = ctx.__SAMPLE_PDF_DOC;
if (!doc) {
  throw new Error("PDF doc was not captured — savePdf replace may have failed");
}

const bytes = Buffer.from(doc.output("arraybuffer"));
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, bytes);
console.log(JSON.stringify({
  ok: true,
  path: outPath,
  bytes: bytes.length,
  pages: doc.getNumberOfPages(),
  header: bytes.slice(0, 5).toString()
}, null, 2));
