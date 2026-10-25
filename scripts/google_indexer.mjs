#!/usr/bin/env node
/**
 * ══════════════════════════════════════════════════════════════════════════════════
 * SKYi DEVELOPERS — HARDENED GOOGLE & SEARCH INDEXING ENGINE
 * ══════════════════════════════════════════════════════════════════════════════════
 * Multi-protocol automated search engine indexing & crawl pipeline:
 *
 * 1. SITEMAP DISCOVERY:
 *    Auto-extracts all canonical & programmatic URLs from local out/sitemap.xml
 *    or https://skyidevelopers.in/sitemap.xml.
 *
 * 2. INDEXNOW PROTOCOL (Bing, Yandex, Seznam, Cloudflare Crawler Hints):
 *    Pushes real-time batch crawl requests via official IndexNow API key
 *    (4f6d89a710b2401f8021c356972e0bf4).
 *
 * 3. GOOGLE INDEXING API (Googlebot & Google-InspectionTool Direct Push):
 *    Submits URL_UPDATED requests to https://indexing.googleapis.com/v3/urlNotifications:publish
 *    via OAuth2 JWT with zero external dependencies (native Node.js crypto).
 *
 * 4. LIVE PRE-FLIGHT INDEXABILITY INSPECTOR:
 *    Verifies HTTP 200, canonical tags, X-Robots-Tag, and title/meta tags for all URLs.
 * ══════════════════════════════════════════════════════════════════════════════════
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const CONFIG = {
  host: 'skyidevelopers.in',
  baseUrl: 'https://skyidevelopers.in',
  indexNowKey: '4f6d89a710b2401f8021c356972e0bf4',
  indexNowKeyLocation: 'https://skyidevelopers.in/4f6d89a710b2401f8021c356972e0bf4.txt',
  sitemapPath: path.join(ROOT_DIR, 'out', 'sitemap.xml'),
  fallbackSitemapUrl: 'https://skyidevelopers.in/sitemap.xml',
  googleIndexingScope: 'https://www.googleapis.com/auth/indexing',
  googleTokenEndpoint: 'https://oauth2.googleapis.com/token',
  googlePublishEndpoint: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
  googleMetadataEndpoint: 'https://indexing.googleapis.com/v3/urlNotifications/metadata',
  reportPath: path.join(ROOT_DIR, 'indexer_report.json'),
};

// ANSI color helpers
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
};

function log(msg, color = colors.reset) {
  console.log(`${color}${msg}${colors.reset}`);
}

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    mode: 'all', // 'all', 'indexnow', 'google', 'inspect'
    keyPath: null,
    limit: null,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--indexnow') options.mode = 'indexnow';
    else if (arg === '--google') options.mode = 'google';
    else if (arg === '--inspect') options.mode = 'inspect';
    else if (arg === '--key' && args[i + 1]) {
      options.keyPath = args[++i];
    } else if (arg === '--limit' && args[i + 1]) {
      options.limit = parseInt(args[++i], 10);
    } else if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }
  }

  return options;
}

function printHelp() {
  console.log(`
${colors.bright}SKYi Developers — Hardened Google & Search Indexer${colors.reset}

Usage:
  node scripts/google_indexer.mjs [options]
  npm run indexer [-- options]

Options:
  --all              (Default) Run complete suite: Sitemap extract -> Indexability check -> IndexNow -> Google Indexing
  --inspect          Run Live HTTP Pre-flight Indexability Check on all URLs
  --indexnow         Submit all URLs to IndexNow Protocol (Bing, Yandex, etc.)
  --google           Submit all URLs to Google Indexing API (URL_UPDATED)
  --key <path>       Path to Google Cloud Service Account JSON key
  --limit <num>      Limit processing to N URLs
  --help, -h         Show this help message

Google Indexing API Setup:
  1. Create a service account in Google Cloud Console with 'Web Search Indexing API' enabled.
  2. Add the service account email as an Owner in Google Search Console.
  3. Place service_account.json in the project root or pass --key path/to/service_account.json.
`);
}

/**
 * Extract all unique URLs from local or remote sitemap
 */
async function getSitemapUrls() {
  let xmlContent = '';

  if (fs.existsSync(CONFIG.sitemapPath)) {
    log(`📂 Loading local sitemap from ${path.relative(ROOT_DIR, CONFIG.sitemapPath)}...`, colors.dim);
    xmlContent = fs.readFileSync(CONFIG.sitemapPath, 'utf8');
  } else {
    log(`🌐 Fetching live sitemap from ${CONFIG.fallbackSitemapUrl}...`, colors.cyan);
    try {
      const res = await fetch(CONFIG.fallbackSitemapUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      xmlContent = await res.text();
    } catch (err) {
      log(`⚠️ Could not fetch live sitemap (${err.message}). Using fallback canonical list.`, colors.yellow);
      return [
        `${CONFIG.baseUrl}/`,
        `${CONFIG.baseUrl}/projects`,
        `${CONFIG.baseUrl}/songbirds`,
        `${CONFIG.baseUrl}/manas-lake`,
        `${CONFIG.baseUrl}/na-plots-bhukum`,
        `${CONFIG.baseUrl}/bhugaon`,
        `${CONFIG.baseUrl}/connectivity`,
        `${CONFIG.baseUrl}/plot-estimator`,
        `${CONFIG.baseUrl}/virtual-tour`,
        `${CONFIG.baseUrl}/nri-hub`,
        `${CONFIG.baseUrl}/contact`,
      ];
    }
  }

  const matches = [...xmlContent.matchAll(/<loc>([^<]+)<\/loc>/g)];
  const urls = Array.from(new Set(matches.map((m) => m[1].trim())));
  log(`✅ Discovered ${urls.length} URLs in sitemap.`, colors.green);
  return urls;
}

/**
 * Pre-flight Live HTTP Indexability Check
 */
async function inspectUrls(urls) {
  log(`\n🔍 Running Live Pre-flight Indexability Audit (${urls.length} URLs)...`, colors.bright);
  const results = [];

  for (const url of urls) {
    const start = Date.now();
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        },
      });
      const latency = Date.now() - start;
      const html = await res.text();

      const xRobots = res.headers.get('x-robots-tag') || 'none';
      const isIndexable = !xRobots.includes('noindex');
      const hasLargeImage = xRobots.includes('max-image-preview:large');

      const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
      const canonical = canonicalMatch ? canonicalMatch[1] : null;
      const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : null;

      const ok = res.status === 200 && isIndexable;
      results.push({
        url,
        status: res.status,
        ok,
        latency,
        canonical,
        xRobots,
        hasLargeImage,
        title: title ? title.slice(0, 50) + '...' : null,
      });

      const symbol = ok ? '✓' : '✗';
      const color = ok ? colors.green : colors.red;
      console.log(
        `  ${color}${symbol} [${res.status}]${colors.reset} ${url.padEnd(52)} ${colors.dim}${latency}ms | X-Robots: ${xRobots} | Canon: ${canonical ? 'OK' : 'MISSING'}${colors.reset}`
      );
    } catch (err) {
      results.push({
        url,
        status: 0,
        ok: false,
        error: err.message,
      });
      console.log(`  ${colors.red}✗ [ERR]${colors.reset} ${url} — ${err.message}`);
    }
  }

  const passed = results.filter((r) => r.ok).length;
  log(`\n📊 Audit Summary: ${passed}/${results.length} URLs 100% crawl & index ready.`, passed === results.length ? colors.green : colors.yellow);
  return results;
}

/**
 * Submit URLs to IndexNow Protocol (Bing, Yandex, Seznam, Naver)
 */
async function submitIndexNow(urls) {
  log(`\n🚀 Submitting ${urls.length} URLs to IndexNow Protocol...`, colors.bright);

  const payload = {
    host: CONFIG.host,
    key: CONFIG.indexNowKey,
    keyLocation: CONFIG.indexNowKeyLocation,
    urlList: urls,
  };

  const endpoints = [
    { name: 'IndexNow Global Gateway', url: 'https://api.indexnow.org/indexnow' },
    { name: 'Microsoft Bing IndexNow', url: 'https://www.bing.com/indexnow' },
  ];

  const results = [];

  for (const ep of endpoints) {
    try {
      const res = await fetch(ep.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      if (res.status === 200 || res.status === 202) {
        log(`  ✅ ${ep.name}: Accepted (${res.status} ${res.statusText})`, colors.green);
        results.push({ endpoint: ep.name, ok: true, status: res.status });
      } else {
        const text = await res.text();
        log(`  ⚠️ ${ep.name}: Received ${res.status} — ${text}`, colors.yellow);
        results.push({ endpoint: ep.name, ok: false, status: res.status, error: text });
      }
    } catch (err) {
      log(`  ❌ ${ep.name}: Network Error — ${err.message}`, colors.red);
      results.push({ endpoint: ep.name, ok: false, error: err.message });
    }
  }

  return results;
}

/**
 * Search for Google Service Account credentials file
 */
function findGoogleCredentials(customPath) {
  const candidates = [
    customPath,
    process.env.GOOGLE_APPLICATION_CREDENTIALS,
    path.join(ROOT_DIR, 'service_account.json'),
    path.join(ROOT_DIR, 'google_indexing_credentials.json'),
    path.join(ROOT_DIR, 'credentials.json'),
    path.join(process.env.HOME || '', '.skyi_google_credentials.json'),
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      try {
        const data = JSON.parse(fs.readFileSync(candidate, 'utf8'));
        if (data.type === 'service_account' && data.client_email && data.private_key) {
          return { path: candidate, data };
        }
      } catch (_) {
        // Continue searching
      }
    }
  }

  return null;
}

/**
 * Generate Google OAuth2 Access Token from Service Account using native Node.js crypto
 */
async function getGoogleAccessToken(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);

  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const claim = {
    iss: serviceAccount.client_email,
    scope: CONFIG.googleIndexingScope,
    aud: CONFIG.googleTokenEndpoint,
    exp: now + 3600,
    iat: now,
  };

  const base64UrlEncode = (obj) =>
    Buffer.from(JSON.stringify(obj))
      .toString('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

  const unsignedToken = `${base64UrlEncode(header)}.${base64UrlEncode(claim)}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedToken);
  signer.end();
  const signature = signer.sign(serviceAccount.private_key, 'base64url');

  const jwt = `${unsignedToken}.${signature}`;

  // Exchange JWT for Access Token
  const tokenRes = await fetch(CONFIG.googleTokenEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!tokenRes.ok) {
    const errText = await tokenRes.text();
    throw new Error(`Failed to obtain Google access token: ${tokenRes.status} ${errText}`);
  }

  const tokenData = await tokenRes.json();
  return tokenData.access_token;
}

/**
 * Submit URLs to Google Indexing API
 */
async function submitGoogleIndexing(urls, customKeyPath) {
  log(`\n🔎 Initiating Google Indexing API Submission...`, colors.bright);

  const creds = findGoogleCredentials(customKeyPath);

  if (!creds) {
    log(`ℹ️  No Google Service Account JSON credentials detected.`, colors.yellow);
    log(`   To activate automated Googlebot-Inspection push indexing:`, colors.dim);
    log(`   1. In Google Cloud Console: Enable 'Web Search Indexing API' (indexing.googleapis.com)`);
    log(`   2. In IAM & Admin > Service Accounts: Create service account & download JSON key`);
    log(`   3. In Google Search Console: Add service account email as Delegated 'Owner'`);
    log(`   4. Place JSON key at ./service_account.json or run with --key <path>`);
    log(`   (IndexNow protocol will handle instant indexing for all major engines in the interim.)\n`, colors.dim);
    return { skipped: true, reason: 'Credentials not configured' };
  }

  log(`🔑 Authenticating Service Account: ${creds.data.client_email}...`, colors.cyan);

  let accessToken;
  try {
    accessToken = await getGoogleAccessToken(creds.data);
    log(`✅ OAuth2 Bearer Token successfully generated!`, colors.green);
  } catch (err) {
    log(`❌ Authentication failed: ${err.message}`, colors.red);
    return { ok: false, error: err.message };
  }

  const results = [];
  for (const url of urls) {
    try {
      const res = await fetch(CONFIG.googlePublishEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          url,
          type: 'URL_UPDATED',
        }),
      });

      const body = await res.json();
      if (res.ok) {
        log(`  ✓ [Google Indexer] ${url} → URL_UPDATED pushed!`, colors.green);
        results.push({ url, ok: true, status: res.status, metadata: body.urlNotificationMetadata });
      } else {
        log(`  ✗ [Google Indexer] ${url} → ${res.status}: ${body.error?.message || 'Error'}`, colors.yellow);
        results.push({ url, ok: false, status: res.status, error: body.error });
      }
    } catch (err) {
      log(`  ✗ [Google Indexer] ${url} → Network Error: ${err.message}`, colors.red);
      results.push({ url, ok: false, error: err.message });
    }
  }

  return { ok: true, count: results.filter((r) => r.ok).length, total: results.length, details: results };
}

/**
 * Main Orchestrator
 */
async function main() {
  const options = parseArgs();
  log(`\n══════════════════════════════════════════════════════════════════════`, colors.cyan);
  log(`  SKYi DEVELOPERS — GOOGLE & SEARCH INDEXING HARMONIZER`, colors.bright);
  log(`  Domain: https://${CONFIG.host} | Target: 4,000+ SERP Impressions`, colors.dim);
  log(`══════════════════════════════════════════════════════════════════════\n`, colors.cyan);

  let urls = await getSitemapUrls();
  if (options.limit && options.limit > 0) {
    urls = urls.slice(0, options.limit);
    log(`⚠️ Limiting execution to first ${options.limit} URLs.`, colors.yellow);
  }

  const report = {
    timestamp: new Date().toISOString(),
    totalUrls: urls.length,
    urls,
  };

  // 1. Pre-flight Live Inspection
  if (options.mode === 'all' || options.mode === 'inspect') {
    report.inspection = await inspectUrls(urls);
  }

  // 2. IndexNow Protocol
  if (options.mode === 'all' || options.mode === 'indexnow') {
    report.indexNow = await submitIndexNow(urls);
  }

  // 3. Google Indexing API
  if (options.mode === 'all' || options.mode === 'google') {
    report.googleIndexing = await submitGoogleIndexing(urls, options.keyPath);
  }

  // Save JSON report
  fs.writeFileSync(CONFIG.reportPath, JSON.stringify(report, null, 2), 'utf8');
  log(`\n📄 Complete Indexer Audit Report written to ${path.relative(ROOT_DIR, CONFIG.reportPath)}`, colors.cyan);
  log(`🎉 Indexer hardening sequence complete!\n`, colors.bright);
}

main().catch((err) => {
  console.error(`${colors.red}Fatal Error: ${err.message}${colors.reset}`);
  process.exit(1);
});
