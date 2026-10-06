import { fileURLToPath } from "node:url";
import path from "node:path";
import { authorizedClient, property, safeError, writePrivateJson } from "./common.mjs";

const output = fileURLToPath(new URL("../../.seo-reports/direct-gsc/", import.meta.url));
const apiRoot = "https://www.googleapis.com/webmasters/v3";
const sitePath = `${apiRoot}/sites/${encodeURIComponent(property)}`;
const inspectedUrls = ["https://logicgridops.com/", "https://www.logicgridops.com/", "https://logicgridops.com/systems/web", "https://logicgridops.com/systems/automation", "https://logicgridops.com/systems/ai"];

function shiftDay(day, offset) {
  const date = new Date(`${day}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + offset);
  return date.toISOString().slice(0, 10);
}

function summarize(rows = []) {
  const clicks = rows.reduce((total, row) => total + row.clicks, 0);
  const impressions = rows.reduce((total, row) => total + row.impressions, 0);
  return { clicks, impressions, ctr: impressions ? clicks / impressions : null, averagePosition: impressions ? rows.reduce((total, row) => total + row.position * row.impressions, 0) / impressions : null };
}

try {
  const client = await authorizedClient();
  // Fixed Google API hosts and a fixed property: no external report destinations.
  const request = async (url, data) => (await client.request({ url, method: data ? "POST" : "GET", ...(data ? { data } : {}), timeout: 20000, retry: true, retryConfig: { retry: 2 } })).data;
  const sites = await request(`${apiRoot}/sites`);
  const site = sites.siteEntry?.find((item) => item.siteUrl === property);
  if (!site || site.permissionLevel === "siteUnverifiedUser") throw new Error("The authorized Google account does not have verified access to sc-domain:logicgridops.com. Sign in with its owner account.");

  // Search Console dates use Pacific time. A final-data probe identifies freshness;
  // dataState=final excludes preliminary rows. If no marker exists, use a three-day
  // lag and label it as a fallback, never as confirmed freshness.
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  const probe = await request(`${sitePath}/searchAnalytics/query`, { startDate: shiftDay(today, -9), endDate: today, dimensions: ["date"], dataState: "all", type: "web", rowLimit: 10 });
  const firstIncomplete = probe.metadata?.first_incomplete_date;
  const end = firstIncomplete ? shiftDay(firstIncomplete, -1) : shiftDay(today, -3);
  const start = shiftDay(end, -27);
  const previousEnd = shiftDay(start, -1);
  const previousStart = shiftDay(previousEnd, -27);
  const query = (from, to, dimensions, rowLimit = 1000) => request(`${sitePath}/searchAnalytics/query`, { startDate: from, endDate: to, ...(dimensions ? { dimensions } : {}), dataState: "final", type: "web", rowLimit });
  const [current, previous, queries, pages, sitemaps] = await Promise.all([
    query(start, end), query(previousStart, previousEnd), query(start, end, ["query"]), query(start, end, ["page"]), request(`${sitePath}/sitemaps`)
  ]);
  const inspections = [];
  // Five inspections per run, below normal per-property daily quota.
  for (const url of inspectedUrls) {
    try {
      const data = await request("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", { inspectionUrl: url, siteUrl: property, languageCode: "en-US" });
      inspections.push({ url, result: data.inspectionResult?.indexStatusResult ?? null, inspectionLink: data.inspectionResult?.inspectionResultLink ?? null });
    } catch (error) { inspections.push({ url, error: safeError(error) }); }
  }
  const report = {
    checkedAt: new Date().toISOString(), property, permission: site.permissionLevel,
    source: "Google Search Console API directly; no paid intermediary", dateBasis: "America/Los_Angeles",
    range: { start, end, days: 28 }, comparison: { start: previousStart, end: previousEnd, days: 28 },
    freshness: { firstIncompleteDate: firstIncomplete ?? null, dateSelection: firstIncomplete ? "Google metadata" : "Three-day fallback; freshness not confirmed" },
    current: summarize(current.rows), previous: summarize(previous.rows),
    queries: queries.rows ?? [], pages: pages.rows ?? [],
    rowLimits: { queries: 1000, pages: 1000 },
    caveats: ["Search Console omits some anonymized queries and may return only top rows. Query/page totals are not a substitute for the ungrouped summary.", "URL Inspection describes Google's stored indexed version, not a live-page test. One indexed variant does not prove every page is indexed.", "No automatic indexing requests or sitemap writes are performed."],
    sitemaps: sitemaps.sitemap ?? [], inspections,
    complete: inspections.every((item) => !item.error)
  };
  await writePrivateJson(path.join(output, "latest.json"), report);
  await writePrivateJson(path.join(output, `${report.checkedAt.replace(/[:.]/g, "-")}.json`), report);
  console.log(JSON.stringify({ property, range: report.range, current: report.current, complete: report.complete, inspectionErrors: inspections.filter((item) => item.error), report: path.join(output, "latest.json") }, null, 2));
  process.exitCode = report.complete ? 0 : 1;
} catch (error) {
  console.error(safeError(error)); process.exitCode = 1;
}
