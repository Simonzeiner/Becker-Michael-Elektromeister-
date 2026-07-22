import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the redesigned home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Michael Becker/);
  assert.match(html, /Kaffeevollauto.?maten repariert/);
  assert.match(html, /0179 - 29 29 121/);
  assert.match(html, /★★★★★/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("renders legal pages and keeps starter dependency removed", async () => {
  const [impressum, datenschutz, packageJson] = await Promise.all([
    render("/impressum").then((response) => response.text()),
    render("/datenschutz").then((response) => response.text()),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(impressum, /Angaben gemäß/);
  assert.match(datenschutz, /Keine Cookies, kein Tracking/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
