import { cp, mkdir, rm, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "github-pages");
const basePath = "/Becker-Michael-Elektromeister-/";
const pages = ["/", "/impressum", "/datenschutz"];

function withBasePath(html) {
  return html
    .replace(/<link rel="modulepreload"[^>]+>/g, "")
    .replace(/<script>self\.__VINEXT_RSC_PARAMS__=[\s\S]*?<\/script>/g, "")
    .replace(/<script>self\.__VINEXT_RSC_NAV__=[\s\S]*?<\/script>/g, "")
    .replace(/<script id="_R_">[\s\S]*$/g, "")
    .replaceAll('href="/assets/', `href="${basePath}assets/`)
    .replaceAll('src="/assets/', `src="${basePath}assets/`)
    .replaceAll('href="/images/', `href="${basePath}images/`)
    .replaceAll('src="/images/', `src="${basePath}images/`)
    .replaceAll('href="/"', `href="${basePath}"`)
    .replaceAll('href="/favicon.svg"', `href="${basePath}favicon.svg"`)
    .replaceAll('href="/impressum"', `href="${basePath}impressum/"`)
    .replaceAll('href="/datenschutz"', `href="${basePath}datenschutz/"`)
    .replaceAll('href="#', `href="${basePath}#`)
    .replaceAll('import("/assets/', `import("${basePath}assets/`)
    .replaceAll('"/assets/', `"${basePath}assets/`)
    .replaceAll('"/images/', `"${basePath}images/`)
    .replaceAll(
      'content="https://www.saeco-becker.de/',
      `content="https://simonzeiner.github.io${basePath}`,
    );
}

async function renderPage(route) {
  const workerUrl = new URL(`../dist/server/index.js?export=${Date.now()}${route}`, import.meta.url);
  const worker = (await import(workerUrl.href)).default;
  const response = await worker.fetch(
    new Request(`https://www.saeco-becker.de${route}`, {
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

  const html = withBasePath(await response.text());
  const target = route === "/" ? out : path.join(out, route);
  await mkdir(target, { recursive: true });
  await writeFile(path.join(target, "index.html"), html);
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(path.join(root, "dist/client"), out, { recursive: true });

for (const page of pages) {
  await renderPage(page);
}

await writeFile(path.join(out, ".nojekyll"), "");
await copyFile(path.join(out, "index.html"), path.join(out, "404.html"));

console.log(out);
