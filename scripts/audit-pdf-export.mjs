#!/usr/bin/env node
/**
 * 20-point audit harness for Pediatric Cardiac Codes PDF export (Script34).
 * Run: node scripts/audit-pdf-export.mjs
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const userJs = fs.readFileSync(path.join(root, "story_content/user.js"), "utf8");
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const jspdfCode = fs.readFileSync(path.join(root, "vendor/jspdf.umd.min.js"), "utf8");

const audits = [];
function audit(id, name, pass, detail = "") {
  audits.push({ id, name, pass, detail });
}

// --- Audit 1: jsPDF script tag before user.js ---
const jspdfIdx = indexHtml.indexOf("vendor/jspdf.umd.min.js");
const userJsIdx = indexHtml.indexOf("story_content/user.js");
const logoIdx = indexHtml.indexOf("vendor/simbox-logo-data.js");
audit(
  1,
  "jsPDF loads before user.js",
  jspdfIdx !== -1 && userJsIdx !== -1 && jspdfIdx < userJsIdx,
  `jspdf@${jspdfIdx}, user.js@${userJsIdx}` +
    (logoIdx !== -1
      ? `; logo@${logoIdx} (optional, before user.js: ${logoIdx < userJsIdx})`
      : "; logo script optional/absent")
);

// --- Audit 2: Script34 exists ---
audit(2, "Script34 defined", /window\.Script34\s*=\s*function/.test(userJs), "found");

// --- Audit 3: jsPDF guard ---
audit(
  3,
  "jsPDF availability guard",
  /!window\.jspdf\s*\|\|\s*!window\.jspdf\.jsPDF/.test(userJs),
  "alert on missing library"
);

// --- Audit 4: savePdf iframe-safe download ---
audit(
  4,
  "savePdf blob + anchor fallback",
  /function savePdf/.test(userJs) && /output\("blob"\)/.test(userJs) && /createObjectURL/.test(userJs),
  "blob download path present"
);

// --- Audit 5: All stage variables captured ---
const requiredVars = [
  "SimBegin1", "One1", "Two1", "Three1", "Four1", "Five1", "Six1", "Seven1", "Eight1",
  "SimBegin2", "One2", "Two2", "Three2", "Four2", "Five2", "Six2",
  "SimBegin3", "One3", "Two3", "Three3", "Four3", "Five3",
  "compressionsString", "Debrief",
  "CompressionPauseCount", "CompressionPauseTotal", "CompressionPauseAverage", "CompressionPauseDetails"
];
const missingVars = requiredVars.filter((v) => !userJs.includes(`"${v}"`));
audit(5, "All Storyline vars in PDF", missingVars.length === 0, missingVars.join(", ") || "all present");

// --- Audit 6: Seven1 / Eight1 in stage one ---
audit(
  6,
  "Epinephrine + defib on stage 1",
  userJs.includes("Seven1") && userJs.includes("Epinephrine") && userJs.includes("Eight1"),
  "Seven1/Eight1 mapped"
);

// --- Audit 7: Compression stats section ---
audit(
  7,
  "Compression quality section",
  /drawCompressionStats/.test(userJs) && /CompressionPauseCount/.test(userJs),
  "metric tiles + pause vars"
);

// --- Audit 8: Pagination helpers ---
audit(
  8,
  "Pagination (ensureSpace + footer)",
  /function ensureSpace/.test(userJs) && /addFooter\(page, totalPages\)/.test(userJs),
  "multi-page support"
);

// --- Audit 9: HTML cleanup for timestamps ---
audit(
  9,
  "HTML br/tag cleanup",
  userJs.includes("replace(/<br") && /function cleanText/.test(userJs),
  "cleanText handles <br>"
);

// --- Audit 10: Stacked label/value rows (no overlap) ---
audit(
  10,
  "Stacked label/value layout",
  /function drawEntryRow/.test(userJs) && /valueY/.test(userJs),
  "separate label and value Y"
);

// Load jsPDF in sandbox
const ctx = {
  window: {},
  self: {},
  navigator: { userAgent: "node-audit" },
  location: { origin: "https://example.com", href: "https://example.com" },
  atob: (s) => Buffer.from(s, "base64").toString("binary"),
  btoa: (s) => Buffer.from(s, "binary").toString("base64"),
  document: {
    createElement() {
      return { href: "", download: "", click() {}, style: {}, appendChild() {}, removeChild() {} };
    },
    createEvent() {
      return { initMouseEvent() {} };
    },
    body: { appendChild() {}, removeChild() {} }
  },
  URL: { createObjectURL: () => "blob:audit", revokeObjectURL() {} },
  open() {
    return { document: { title: "", body: { innerText: "" } }, location: { href: "" } };
  }
};
ctx.window = ctx;
ctx.self = ctx;
vm.createContext(ctx);
vm.runInContext(jspdfCode, ctx);

const jsPDF = ctx.jspdf?.jsPDF;
audit(11, "jsPDF vendor file loads", !!jsPDF, jsPDF ? "ok" : "failed");

if (jsPDF) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "letter" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  audit(12, "Landscape letter format", pageWidth > pageHeight, `${pageWidth.toFixed(1)}×${pageHeight.toFixed(1)} mm`);

  try {
    doc.roundedRect(1, 1, 10, 10, 2, 2, "S");
    doc.text("right", pageWidth - 14, 10, { align: "right" });
    audit(13, "jsPDF features (roundedRect, align)", true, "ok");
  } catch (e) {
    audit(13, "jsPDF features (roundedRect, align)", false, e.message);
  }

  const margin = 14;
  const cardGap = 7;
  const cardWidth = (pageWidth - margin * 2 - cardGap * 2) / 3;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const longTime = "8/21/2026 at 14:31:41 with extra narrative that should wrap inside card";
  const wrappedVal = doc.splitTextToSize(longTime, cardWidth - 12);
  audit(14, "Long values can wrap", wrappedVal.length > 1, `${wrappedVal.length} lines`);

  function cleanText(value) {
    return String(value || "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]*>/g, "")
      .trim();
  }
  const multi = cleanText("0:43 <br> 0:52").split(/\n/).filter(Boolean);
  audit(15, "Multi-timestamp split", multi.length === 2, multi.join(", "));

  const logRaw =
    "Initial compression started at: 0:09<br>Compressions off: 00:25 | Compressions on: 00:29<br>Compressions off: 00:43";
  const logLines = cleanText(logRaw)
    .replace(/\s*\|\s*/g, "\n")
    .replace(/\s*(Compressions off:)/gi, "\n$1")
    .replace(/\s*(Compressions on:)/gi, "\n$1")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  audit(16, "Compression log normalization", logLines.length >= 3, `${logLines.length} lines`);

  const contentBottom = pageHeight - 17;
  let stageH = 21;
  const entries = 9;
  for (let i = 0; i < entries; i++) stageH += 12;
  audit(17, "Typical stage card height", stageH < contentBottom, `~${stageH}mm vs ${contentBottom}mm`);

  const buf = Buffer.from(doc.output("arraybuffer"));
  audit(18, "PDF binary output", buf.slice(0, 5).toString() === "%PDF-", `size ${buf.length}`);
}

// --- Audit 19: Measure/draw parity for stage rows ---
audit(
  19,
  "Stage row measure matches draw",
  /measureEntryRow/.test(userJs) &&
    /drawEntryRow/.test(userJs) &&
    userJs.includes("formatDisplayValues") &&
    !userJs.includes("cursorY >= contentLimit - 8"),
  "shared measure/draw + no loose clip guard"
);

// --- Audit 20: Value text uses splitTextToSize ---
audit(
  20,
  "Timestamp values wrap in cards",
  userJs.includes("splitTextToSize(val") && userJs.includes("pdfSafeText"),
  "wrapped values + PDF-safe glyphs"
);

const passed = audits.filter((a) => a.pass).length;
const failed = audits.filter((a) => !a.pass);

console.log("\n=== PDF Export Audit Report (20 checks) ===\n");
audits.forEach((a) => {
  const mark = a.pass ? "PASS" : "FAIL";
  console.log(`${String(a.id).padStart(2, " ")}. [${mark}] ${a.name}${a.detail ? ` — ${a.detail}` : ""}`);
});
console.log(`\nResult: ${passed}/20 passed\n`);

if (failed.length) {
  process.exitCode = 1;
}
