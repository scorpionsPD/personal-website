// Render scripts/og-cards.html into public/og/*.jpg (1200x630) with the local
// Google Chrome in headless mode, over the DevTools protocol. No downloads.
// Usage: node --experimental-websocket scripts/render-og-cards.mjs
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const template = `file://${path.join(root, "scripts", "og-cards.html")}`;
const outDir = path.join(root, "public", "og");
const cards = { home: "pradeep-dahiya", vamiq: "vamiq", onq: "onq", axos: "axos", writing: "writing" };
const chromePath = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 9417;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "og-chrome-"));

fs.mkdirSync(outDir, { recursive: true });
const chrome = spawn(
  chromePath,
  ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "--no-first-run", "--hide-scrollbars", "--allow-file-access-from-files", "about:blank"],
  { stdio: "ignore" }
);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let pageWs;
for (let i = 0; i < 60 && !pageWs; i++) {
  try {
    const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
    pageWs = list.find((t) => t.type === "page")?.webSocketDebuggerUrl;
  } catch {
    // Chrome is still starting
  }
  if (!pageWs) await sleep(200);
}
const ws = new WebSocket(pageWs);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m);
    pending.delete(m.id);
  }
};
const send = (method, params = {}) =>
  new Promise((r) => {
    const i = ++id;
    pending.set(i, r);
    ws.send(JSON.stringify({ id: i, method, params }));
  });

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
for (const [card, file] of Object.entries(cards)) {
  await send("Page.navigate", { url: `${template}?card=${card}` });
  await sleep(1200);
  const shot = await send("Page.captureScreenshot", { format: "jpeg", quality: 86, clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } });
  fs.writeFileSync(path.join(outDir, `${file}.jpg`), Buffer.from(shot.result.data, "base64"));
  console.log(`og/${file}.jpg`);
}
ws.close();
chrome.kill();
