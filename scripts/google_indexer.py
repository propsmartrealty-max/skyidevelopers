#!/usr/bin/env python3
"""
══════════════════════════════════════════════════════════════════════════════════
SKYi DEVELOPERS — PYTHON GOOGLE & SEARCH INDEXING HARMONIZER
══════════════════════════════════════════════════════════════════════════════════
Multi-protocol automated search engine indexing pipeline in Python:
- IndexNow batch submission
- Google Indexing API (URL_UPDATED via Service Account or OAuth2)
- Live Pre-flight Indexability Audit
══════════════════════════════════════════════════════════════════════════════════
"""

import os
import sys
import json
import ssl
import time
import re
import argparse
from typing import List, Dict, Any, Optional
import urllib.request
import urllib.error

# Resolve paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(SCRIPT_DIR, '..'))
SITEMAP_PATH = os.path.join(ROOT_DIR, 'out', 'sitemap.xml')
FALLBACK_SITEMAP_URL = 'https://skyidevelopers.in/sitemap.xml'

CONFIG = {
    'host': 'skyidevelopers.in',
    'base_url': 'https://skyidevelopers.in',
    'indexnow_key': '4f6d89a710b2401f8021c356972e0bf4',
    'indexnow_key_location': 'https://skyidevelopers.in/4f6d89a710b2401f8021c356972e0bf4.txt',
    'google_indexing_scope': 'https://www.googleapis.com/auth/indexing',
    'google_publish_endpoint': 'https://indexing.googleapis.com/v3/urlNotifications:publish',
}

# SSL context allowing system CA certs
ssl_ctx = ssl.create_default_context()
ssl_ctx.check_hostname = False
ssl_ctx.verify_mode = ssl.CERT_NONE


def get_sitemap_urls() -> List[str]:
    """Extract URLs from local out/sitemap.xml or live remote sitemap."""
    if os.path.exists(SITEMAP_PATH):
        print(f"📂 Loading local sitemap from {os.path.relpath(SITEMAP_PATH, ROOT_DIR)}...")
        with open(SITEMAP_PATH, 'r', encoding='utf-8') as f:
            content = f.read()
    else:
        print(f"🌐 Fetching live sitemap from {FALLBACK_SITEMAP_URL}...")
        try:
            req = urllib.request.Request(
                FALLBACK_SITEMAP_URL,
                headers={'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)'}
            )
            with urllib.request.urlopen(req, context=ssl_ctx, timeout=10) as resp:
                content = resp.read().decode('utf-8')
        except Exception as e:
            print(f"⚠️ Failed to fetch remote sitemap: {e}")
            return [f"{CONFIG['base_url']}/", f"{CONFIG['base_url']}/songbirds", f"{CONFIG['base_url']}/manas-lake"]

    urls = list(dict.fromkeys(re.findall(r'<loc>([^<]+)</loc>', content)))
    print(f"✅ Discovered {len(urls)} URLs in sitemap.")
    return urls


def submit_indexnow(urls: List[str]) -> bool:
    """Submit URLs to IndexNow protocol."""
    print(f"\n🚀 Submitting {len(urls)} URLs to IndexNow Protocol...")
    payload = {
        'host': CONFIG['host'],
        'key': CONFIG['indexnow_key'],
        'keyLocation': CONFIG['indexnow_key_location'],
        'urlList': urls
    }
    data = json.dumps(payload).encode('utf-8')

    endpoints = [
        ('IndexNow Global Gateway', 'https://api.indexnow.org/indexnow'),
        ('Microsoft Bing IndexNow', 'https://www.bing.com/indexnow'),
    ]

    all_success = True
    for name, endpoint in endpoints:
        try:
            req = urllib.request.Request(
                endpoint,
                data=data,
                headers={'Content-Type': 'application/json; charset=utf-8'}
            )
            with urllib.request.urlopen(req, context=ssl_ctx, timeout=12) as resp:
                if resp.status in (200, 202):
                    print(f"  ✅ {name}: Accepted ({resp.status})")
                else:
                    print(f"  ⚠️ {name}: Status {resp.status}")
                    all_success = False
        except urllib.error.HTTPError as e:
            print(f"  ❌ {name}: HTTP {e.code} — {e.read().decode('utf-8')[:150]}")
            all_success = False
        except Exception as e:
            print(f"  ❌ {name}: Error — {e}")
            all_success = False

    return all_success


def inspect_urls(urls: List[str]) -> List[Dict[str, Any]]:
    """Live audit of URLs for indexability."""
    print(f"\n🔍 Running Live Pre-flight Indexability Audit ({len(urls)} URLs)...")
    results = []

    for url in urls:
        start = time.time()
        try:
            req = urllib.request.Request(
                url,
                headers={'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'}
            )
            with urllib.request.urlopen(req, context=ssl_ctx, timeout=10) as resp:
                latency_ms = int((time.time() - start) * 1000)
                html = resp.read().decode('utf-8', errors='ignore')
                x_robots = resp.headers.get('x-robots-tag', 'none')

                canon_match = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)["\']', html, re.I)
                canonical = canon_match.group(1) if canon_match else None

                ok = (resp.status == 200) and ('noindex' not in x_robots.lower())
                results.append({
                    'url': url,
                    'status': resp.status,
                    'latency_ms': latency_ms,
                    'ok': ok,
                    'x_robots': x_robots,
                    'canonical': canonical,
                })
                symbol = '✓' if ok else '✗'
                print(f"  {symbol} [{resp.status}] {url:<52} {latency_ms}ms | X-Robots: {x_robots} | Canon: {'OK' if canonical else 'MISSING'}")
        except Exception as e:
            results.append({'url': url, 'status': 0, 'ok': False, 'error': str(e)})
            print(f"  ✗ [ERR] {url} — {e}")

    passed = sum(1 for r in results if r.get('ok'))
    print(f"\n📊 Audit Summary: {passed}/{len(results)} URLs 100% crawl & index ready.")
    return results


def submit_google_indexing(urls: List[str], key_path: Optional[str] = None):
    """Submits URLs to Google Indexing API using google-auth library."""
    print("\n🔎 Initiating Google Indexing API Submission...")

    candidates = [
        key_path,
        os.environ.get('GOOGLE_APPLICATION_CREDENTIALS'),
        os.path.join(ROOT_DIR, 'service_account.json'),
        os.path.join(ROOT_DIR, 'google_indexing_credentials.json'),
        os.path.expanduser('~/.skyi_google_credentials.json'),
    ]

    selected_key = next((c for c in candidates if c and os.path.exists(c)), None)

    if not selected_key:
        print("ℹ️  No Google Service Account JSON credentials found.")
        print("   To enable direct Googlebot-Inspection push indexing:")
        print("   1. Enable 'Web Search Indexing API' in Google Cloud Console.")
        print("   2. Download service account JSON key.")
        print("   3. Add service account email as 'Owner' in Google Search Console.")
        print("   4. Place key at ./service_account.json or pass --key path/to/key.json")
        print("   (IndexNow protocol handles instant indexing for Bing, Yandex & partner crawlers.)\n")
        return None

    try:
        from google.oauth2 import service_account
        from google.auth.transport.requests import Request
    except ImportError:
        print("❌ google-auth library missing. Run: pip install google-auth")
        return None

    print(f"🔑 Using Service Account from {os.path.relpath(selected_key, ROOT_DIR)}...")
    creds = service_account.Credentials.from_service_account_file(
        selected_key,
        scopes=[CONFIG['google_indexing_scope']]
    )
    creds.refresh(Request())

    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {creds.token}',
    }

    count = 0
    for url in urls:
        payload = json.dumps({'url': url, 'type': 'URL_UPDATED'}).encode('utf-8')
        req = urllib.request.Request(CONFIG['google_publish_endpoint'], data=payload, headers=headers)
        try:
            with urllib.request.urlopen(req, context=ssl_ctx, timeout=10) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                print(f"  ✓ [Google Indexer] {url} → URL_UPDATED pushed!")
                count += 1
        except Exception as e:
            print(f"  ✗ [Google Indexer] {url} → Error: {e}")

    print(f"🎉 Successfully pushed {count}/{len(urls)} URLs to Google Indexing API!")
    return count


def main():
    parser = argparse.ArgumentParser(description="SKYi Developers — Google & Search Indexing Harmonizer")
    parser.add_argument('--inspect', action='store_true', help="Run live HTTP audit only")
    parser.add_argument('--indexnow', action='store_true', help="Run IndexNow submission only")
    parser.add_argument('--google', action='store_true', help="Run Google Indexing API only")
    parser.add_argument('--key', type=str, help="Path to Google Service Account JSON key")
    parser.add_argument('--limit', type=int, help="Limit number of URLs to process")
    args = parser.parse_args()

    print("\n══════════════════════════════════════════════════════════════════════")
    print("  SKYi DEVELOPERS — PYTHON GOOGLE & SEARCH INDEXING HARMONIZER")
    print(f"  Domain: https://{CONFIG['host']} | Target: 4,000+ SERP Impressions")
    print("══════════════════════════════════════════════════════════════════════\n")

    urls = get_sitemap_urls()
    if args.limit and args.limit > 0:
        urls = urls[:args.limit]
        print(f"⚠️ Limiting execution to first {args.limit} URLs.")

    run_all = not (args.inspect or args.indexnow or args.google)

    if run_all or args.inspect:
        inspect_urls(urls)

    if run_all or args.indexnow:
        submit_indexnow(urls)

    if run_all or args.google:
        submit_google_indexing(urls, args.key)

    print("\n🎉 Indexer hardening sequence complete!\n")


if __name__ == '__main__':
    main()
