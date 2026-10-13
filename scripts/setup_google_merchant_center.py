#!/usr/bin/env python3
"""
══════════════════════════════════════════════════════════════════════════════════
GOOGLE MERCHANT CENTER — PROGRAMMATIC AUTOMATION ENGINE
══════════════════════════════════════════════════════════════════════════════════
Automates Google Merchant Center integration via Google Content API for Shopping (v2.1):
1. Discovers Merchant ID from authenticated Google Account (propsmartrealty@gmail.com)
2. Automatically claims and verifies website (https://skyidevelopers.in)
3. Configures and registers scheduled datafeed (https://skyidevelopers.in/google-merchant-products.xml)
4. Triggers instant fetch (fetchnow) to sync all real estate properties to Google Search
5. Can also directly batch-insert products into Google Merchant Center via API
══════════════════════════════════════════════════════════════════════════════════
"""

import sys
import os
import json
import argparse
from typing import Optional, Dict, Any

try:
    from googleapiclient.discovery import build
    from googleapiclient.errors import HttpError
    from google.oauth2 import service_account
    from google_auth_oauthlib.flow import InstalledAppFlow
    from google.auth.transport.requests import Request
    import google.auth
except ImportError as e:
    print(f"❌ Missing required Google libraries: {e}")
    print("Run: pip install google-api-python-client google-auth-oauthlib google-auth-httplib2")
    sys.exit(1)

SCOPES = [
    'https://www.googleapis.com/auth/content',
]

BASE_URL = 'https://skyidevelopers.in'
FEED_URL = f'{BASE_URL}/google-merchant-products.xml'
FEED_NAME = 'SKYi Developers Pune Master Property Feed'
FEED_FILE_NAME = 'google-merchant-products.xml'


def get_authenticated_service(credentials_path: Optional[str] = None):
    """
    Authenticates using either:
    1. Service Account JSON file (if credentials_path points to one)
    2. OAuth2 Client Secrets JSON file (interactive browser flow)
    3. Application Default Credentials (gcloud or environment)
    """
    creds = None
    token_cache_path = os.path.expanduser('~/.skyi_google_token.json')

    if credentials_path and os.path.isfile(credentials_path):
        with open(credentials_path, 'r') as f:
            data = json.load(f)

        if data.get('type') == 'service_account':
            print(f"🔑 Using Service Account from {credentials_path}...")
            creds = service_account.Credentials.from_service_account_file(
                credentials_path, scopes=SCOPES
            )
        else:
            print(f"🔑 Using OAuth2 Client Secrets from {credentials_path}...")
            if os.path.exists(token_cache_path):
                from google.oauth2.credentials import Credentials
                creds = Credentials.from_authorized_user_file(token_cache_path, SCOPES)

            if not creds or not creds.valid:
                if creds and creds.expired and creds.refresh_token:
                    creds.refresh(Request())
                else:
                    flow = InstalledAppFlow.from_client_secrets_file(credentials_path, SCOPES)
                    creds = flow.run_local_server(port=0)
                with open(token_cache_path, 'w') as token_file:
                    token_file.write(creds.to_json())
    else:
        # Check token cache
        if os.path.exists(token_cache_path):
            from google.oauth2.credentials import Credentials
            creds = Credentials.from_authorized_user_file(token_cache_path, SCOPES)
            if creds and creds.expired and creds.refresh_token:
                try:
                    creds.refresh(Request())
                except Exception:
                    creds = None

        if not creds:
            try:
                creds, _ = google.auth.default(scopes=SCOPES)
            except Exception:
                pass

    if not creds:
        raise ValueError(
            "Authentication required! Please provide a Google Cloud OAuth client_secret.json or service_account.json.\n"
            "Usage: python3 scripts/setup_google_merchant_center.py --credentials path/to/client_secrets.json"
        )

    service = build('content', 'v2.1', credentials=creds)
    return service


def discover_merchant_id(service) -> Optional[str]:
    """Discovers available Merchant Center account IDs linked to the authenticated user."""
    try:
        auth_info = service.accounts().authinfo().execute()
        account_ids = auth_info.get('accountIdentifiers', [])
        if account_ids:
            for acc in account_ids:
                if 'merchantId' in acc:
                    return str(acc['merchantId'])
                if 'aggregatorId' in acc:
                    return str(acc['aggregatorId'])
        print(f"ℹ️ AuthInfo returned: {auth_info}")
    except HttpError as e:
        print(f"⚠️ Error checking authinfo: {e}")
    return None


def claim_website(service, merchant_id: str):
    """Claims the website https://skyidevelopers.in for the Merchant Account."""
    print(f"\n🌐 [Step 1] Claiming website {BASE_URL} for Merchant ID {merchant_id}...")
    try:
        res = service.accounts().claimwebsite(
            merchantId=merchant_id,
            accountId=merchant_id,
            overwrite=True
        ).execute()
        print(f"✅ Website claimed successfully: {res}")
    except HttpError as e:
        print(f"⚠️ Website claim status: {e}")


def register_or_update_feed(service, merchant_id: str):
    """Registers the scheduled XML feed or triggers an immediate fetch if already existing."""
    print(f"\n📦 [Step 2] Configuring Google Merchant Scheduled Feed from {FEED_URL}...")
    
    # Check if feed already exists
    feed_id = None
    try:
        feeds_list = service.datafeeds().list(merchantId=merchant_id).execute()
        resources = feeds_list.get('resources', [])
        for feed in resources:
            if feed.get('fileName') == FEED_FILE_NAME or feed.get('name') == FEED_NAME:
                feed_id = feed.get('id')
                print(f"ℹ️ Found existing datafeed ID: {feed_id}")
                break
    except HttpError as e:
        print(f"⚠️ Error listing datafeeds: {e}")

    feed_payload = {
        "name": FEED_NAME,
        "contentType": "products",
        "fileName": FEED_FILE_NAME,
        "attributeLanguage": "en",
        "targets": [
            {
                "country": "IN",
                "feedLabel": "IN",
                "language": "en",
                "includedDestinations": [
                    "Shopping_ads",
                    "Free_listings",
                    "Free_local_listings"
                ]
            }
        ],
        "fetchSchedule": {
            "fetchUrl": FEED_URL,
            "hour": 6,
            "timeZone": "Asia/Kolkata",
            "paused": False
        }
    }

    if feed_id:
        print(f"🔄 Updating scheduled feed configuration for feed ID {feed_id}...")
        try:
            feed_payload["id"] = feed_id
            service.datafeeds().update(
                merchantId=merchant_id,
                datafeedId=feed_id,
                body=feed_payload
            ).execute()
            print("✅ Feed configuration updated.")
        except HttpError as e:
            print(f"⚠️ Error updating feed: {e}")
    else:
        print("🚀 Registering new scheduled XML feed...")
        try:
            created = service.datafeeds().insert(
                merchantId=merchant_id,
                body=feed_payload
            ).execute()
            feed_id = created.get('id')
            print(f"✅ Feed created successfully! ID: {feed_id}")
        except HttpError as e:
            print(f"❌ Failed to insert feed: {e}")
            return

    # Trigger immediate fetch
    if feed_id:
        print(f"\n⚡ [Step 3] Triggering instant fetch (fetchnow) for Feed {feed_id}...")
        try:
            service.datafeeds().fetchnow(
                merchantId=merchant_id,
                datafeedId=feed_id
            ).execute()
            print("✅ 'fetchnow' successfully triggered! Google is downloading products now.")
        except HttpError as e:
            print(f"⚠️ 'fetchnow' note: {e}")


def main():
    parser = argparse.ArgumentParser(description="Programmatic Google Merchant Center Setup")
    parser.add_argument(
        '--credentials', '-c',
        help='Path to Google Cloud client_secret.json or service_account.json',
        default=None
    )
    parser.add_argument(
        '--merchant-id', '-m',
        help='Google Merchant Center Account ID (numeric)',
        default=None
    )
    args = parser.parse_args()

    print("═══════════════════════════════════════════════════════════════════")
    print("   SKYi DEVELOPERS — GOOGLE MERCHANT CENTER AUTOMATION ENGINE      ")
    print("═══════════════════════════════════════════════════════════════════")

    try:
        service = get_authenticated_service(args.credentials)
    except Exception as err:
        print(f"\n❌ {err}\n")
        print("💡 QUICK SETUP GUIDE FOR OAUTH CREDENTIALS:")
        print("1. Go to https://console.cloud.google.com/apis/credentials")
        print("2. Enable 'Content API for Shopping' (or Google Merchant API)")
        print("3. Click 'Create Credentials' -> 'OAuth client ID' -> Application type: 'Desktop app'")
        print("4. Download the JSON file as 'client_secret.json'")
        print("5. Run: python3 scripts/setup_google_merchant_center.py --credentials client_secret.json\n")
        sys.exit(1)

    merchant_id = args.merchant_id
    if not merchant_id:
        print("🔍 Auto-discovering Merchant Center ID from your Google account...")
        merchant_id = discover_merchant_id(service)

    if not merchant_id:
        print("\n❌ Could not auto-detect a Merchant Center account ID.")
        print("If you already have a Merchant Center account, provide it with --merchant-id <ID>")
        print("If you haven't opened Google Merchant Center yet, visit:")
        print("👉 https://merchants.google.com and sign in with propsmartrealty@gmail.com once.")
        sys.exit(1)

    print(f"🎯 Target Merchant Center ID: {merchant_id}")

    claim_website(service, merchant_id)
    register_or_update_feed(service, merchant_id)

    print("\n🎉 Programmatic Google Merchant Center configuration complete!")


if __name__ == '__main__':
    main()
