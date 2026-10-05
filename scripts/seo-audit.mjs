import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Checks publicly served pages. Google indexing and rankings require Search Console.
const origin = "https://logicgridops.com";
const requiredPaths = ["/", "/services", "/systems/web", "/systems/automation", "/systems/ai", "/work/younis-b-azeem", "/legal/privacy", "/legal/terms"];
const reportDirectory = fileURLToPath(new URL("../.seo-reports/", import.meta.url));
const checks = [];
const check = (id, passed, detail) => checks.push({ id, passed: Boolean(passed), detail });
const normalize = (value) => new URL(value).href.replace(/\/$/, "");
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const attr = (tag, name) => decode(tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, "i"))?.[1] ?? "");
const meta = (html, name) => [...html.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => tag).find((tag) => attr(tag, "name").toLowerCase() === name || attr(tag, "property").toLowerCase() === name);
const content = (html, name) => attr(meta(html, name) ?? "", "content");

async function request(url, options = {}) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await fetch(url, { headers: { "user-agent": "LogicGridOps-SEO-Audit/1.0" }, ...options, signal: AbortSignal.timeout(20000) });
      if (response.status >= 500 && attempt === 0) {
        await response.body?.cancel();
        continue;
      }
      return response;
    } catch (error) {
      if (attempt === 1) throw error;
    }
  }
}

async function textResponse(url) {
  const response = await request(url);
  const text = await response.text();
  if (text.length > 2_000_000) throw new Error(`Response exceeds audit size limit: ${url}`);
  return { response, text };
}

function blocksRoot(robots) {
  const groups = [];
  let group;
  let hasRules = false;
  for (const line of robots.split(/\r?\n/)) {
    const match = line.replace(/#.*/, "").trim().match(/^([^:]+):\s*(.*)$/);
    if (!match) continue;
    const key = match[1].toLowerCase();
    const value = match[2].trim();
    if (key === "user-agent") {
      if (!group || hasRules) { group = { agents: [], rules: [] }; groups.push(group); hasRules = false; }
      group.agents.push(value.toLowerCase());
    } else if (group && (key === "allow" || key === "disallow")) {
      group.rules.push({ key, value }); hasRules = true;
    }
  }
  const google = groups.filter((item) => item.agents.includes("googlebot"));
  const applicable = google.length ? google : groups.filter((item) => item.agents.includes("*"));
  return applicable.some((item) => item.rules.some((rule) => rule.key === "disallow" && ["/", "/*", "/*$", "/$"].includes(rule.value)) && !item.rules.some((rule) => rule.key === "allow" && ["/", "/$"].includes(rule.value)));
}

function schemaTypes(value) {
  if (!value || typeof value !== "object") return [];
  return [value["@type"], ...Object.values(value).filter((item) => typeof item === "object").flatMap((item) => Array.isArray(item) ? item.flatMap(schemaTypes) : schemaTypes(item))].flat().filter(Boolean);
}

async function auditPage(url) {
  const { response, text: html } = await textResponse(url);
  const prefix = new URL(url).pathname;
  check(`${prefix}:status`, response.status === 200, `HTTP ${response.status}`);
  check(`${prefix}:destination`, normalize(response.url) === normalize(url), response.url);
  check(`${prefix}:html`, /text\/html/i.test(response.headers.get("content-type") ?? ""), "Expected HTML");
  const title = decode(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim();
  check(`${prefix}:title`, title.length > 0, title || "Missing title");
  check(`${prefix}:description`, content(html, "description").trim().length > 0, "Page description present");
  const canonicals = [...html.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => tag).filter((tag) => attr(tag, "rel").toLowerCase() === "canonical");
  const canonical = attr(canonicals[0] ?? "", "href");
  let canonicalMatches = false;
  try { canonicalMatches = normalize(canonical) === normalize(url); } catch { /* Report invalid URL below. */ }
  check(`${prefix}:canonical`, canonicals.length === 1 && canonicalMatches, canonical || "Missing canonical");
  check(`${prefix}:h1`, [...html.matchAll(/<h1\b/gi)].length === 1, "Expected one main heading");
  const robots = [content(html, "robots"), content(html, "googlebot"), response.headers.get("x-robots-tag") ?? ""].join(",");
  check(`${prefix}:indexable`, !/\b(noindex|none)\b/i.test(robots), robots || "No indexing restriction");
  const types = [];
  let validSchema = true;
  for (const [, tag, json] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (attr(tag, "type") !== "application/ld+json") continue;
    try { types.push(...schemaTypes(JSON.parse(json))); } catch { validSchema = false; }
  }
  check(`${prefix}:schema`, validSchema && types.includes("Organization"), "Valid Organization structured data");
  if (prefix.startsWith("/systems/")) check(`${prefix}:service-schema`, types.includes("Service"), "Service structured data present");
  check(`${prefix}:social-image`, Boolean(content(html, "og:image")), "Social preview image declared");
  return { url, title };
}

async function audit() {
  const { response: robotsResponse, text: robots } = await textResponse(`${origin}/robots.txt`);
  check("robots:status", robotsResponse.status === 200, `HTTP ${robotsResponse.status}`);
  check("robots:crawl", !blocksRoot(robots), "Homepage accessible to Googlebot");
  check("robots:sitemap", robots.split(/\r?\n/).some((line) => line.trim() === `Sitemap: ${origin}/sitemap.xml`), "Canonical sitemap advertised");

  const { response: sitemapResponse, text: xml } = await textResponse(`${origin}/sitemap.xml`);
  check("sitemap:status", sitemapResponse.status === 200, `HTTP ${sitemapResponse.status}`);
  check("sitemap:format", /<urlset\b/.test(xml), "Expected a URL sitemap");
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, value]) => decode(value.trim()));
  const safeLocations = locations.filter((value) => { try { const url = new URL(value); return url.origin === origin && !url.search && !url.hash && !url.username && !url.password; } catch { return false; } });
  check("sitemap:urls", locations.length > 0 && safeLocations.length === locations.length, "Only canonical HTTPS URLs on this domain");
  check("sitemap:duplicates", new Set(safeLocations.map(normalize)).size === safeLocations.length, "No duplicate URLs");
  check("sitemap:required", requiredPaths.every((route) => safeLocations.some((url) => normalize(url) === normalize(`${origin}${route}`))), "All core pages listed");
  check("sitemap:limit", safeLocations.length <= 200, "Audit supports up to 200 pages; expand deliberately if exceeded");
  const pages = [];
  const pending = [...new Set(safeLocations)].slice(0, 200);
  // Limit concurrency so monitoring doesn't overload the site.
  await Promise.all(Array.from({ length: Math.min(3, pending.length) }, async () => {
    while (pending.length) {
      const url = pending.shift();
      try { pages.push(await auditPage(url)); } catch (error) { check(`${new URL(url).pathname}:fetch`, false, error.message); }
    }
  }));
  check("pages:unique-titles", new Set(pages.map((page) => page.title.toLowerCase())).size === pages.length, "Titles distinct across pages");
  for (const suffix of ["/", "/services?q=ai", "/sitemap.xml"]) {
    const response = await request(`https://www.logicgridops.com${suffix}`, { redirect: "manual" });
    const location = response.headers.get("location");
    const expected = `${origin}${suffix}`;
    const actual = location ? new URL(location, "https://www.logicgridops.com").href : "";
    check(`www:${suffix}`, [301, 308].includes(response.status) && actual === expected, `HTTP ${response.status}, ${actual || "missing redirect"}`);
    await response.body?.cancel();
  }
  const image = await request(`${origin}/opengraph-image`);
  const imageBytes = Buffer.from(await image.arrayBuffer());
  const png = imageBytes.length >= 24 && imageBytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  check("social:image", image.status === 200 && png && imageBytes.readUInt32BE(16) === 1200 && imageBytes.readUInt32BE(20) === 630, "Expected 1200×630 PNG preview");
  const missing = await request(`${origin}/__seo-audit-missing-page`);
  check("pages:404", missing.status === 404, `Unknown page returns HTTP ${missing.status}`);
  await missing.body?.cancel();
}

try { await audit(); } catch (error) { check("audit:request", false, error.message); }
checks.sort((a, b) => a.id.localeCompare(b.id));
const failures = checks.filter((item) => !item.passed);
const fingerprint = createHash("sha256").update(JSON.stringify(failures.map(({ id, detail }) => ({ id, detail })))).digest("hex");
let previous;
try { previous = JSON.parse(await readFile(path.join(reportDirectory, "latest.json"), "utf8")); } catch { /* First run. */ }
const report = {
  checkedAt: new Date().toISOString(), origin,
  scope: "Public technical checks only; Google indexing, rankings and enquiries are not measured.",
  passed: failures.length === 0, fingerprint,
  changed: previous ? fingerprint !== previous.fingerprint : null,
  recovered: previous ? !previous.passed && failures.length === 0 : false,
  checks,
};
await mkdir(reportDirectory, { recursive: true });
if (previous) await writeFile(path.join(reportDirectory, "previous.json"), `${JSON.stringify(previous, null, 2)}\n`);
await writeFile(path.join(reportDirectory, "latest.json"), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ passed: report.passed, checks: checks.length, failures, changed: report.changed, recovered: report.recovered, report: path.join(reportDirectory, "latest.json"), scope: report.scope }, null, 2));
process.exitCode = report.passed ? 0 : 1;
