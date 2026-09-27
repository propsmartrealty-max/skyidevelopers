/**
 * Security & Data Sanitization Utilities
 * Level-3 Defensive Engineering Helpers
 */

/**
 * Sanitizes user text input by stripping HTML tags, script tags, javascript: URIs,
 * SQL injection markers, and control characters to prevent Cross-Site Scripting (XSS).
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  return input
    // eslint-disable-next-line no-control-regex
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // Remove null bytes & ASCII control characters
    .replace(/[\u200B-\u200D\uFEFF\u202A-\u202E]/g, '') // Remove zero-width spaces & bidirectional override characters
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove <script> tags
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '') // Remove <style> tags
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove <iframe> tags
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '') // Remove <object> tags
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '') // Remove <embed> tags
    .replace(/<[^>]+>/g, '') // Remove generic HTML tags
    .replace(/\[\/?(url|link|b|i|u|img|code)[\s\S]*?\]/gi, '') // Remove BBCode tags
    .replace(/javascript:/gi, '') // Remove inline JS protocol
    .replace(/data:/gi, '') // Remove inline data protocol
    .replace(/vbscript:/gi, '') // Remove vbscript protocol
    .replace(/on\w+\s*=/gi, '') // Remove inline event attributes like onload=, onclick=
    .replace(/(\b)(union|select|insert|update|delete|drop|alter|exec|xp_)(\b)/gi, '') // Strip SQL injection verbs if nakedly present
    .replace(/\s{2,}/g, ' ') // Collapse multiple whitespace runs
    .trim();
}

/**
 * Known disposable and throwaway temporary email domains often used by automated spambots.
 */
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'tempmail.com', 'mailinator.com', 'guerrillamail.com', '10minutemail.com',
  'yopmail.com', 'sharklasers.com', 'trashmail.com', 'dispostable.com',
  'getairmail.com', 'temp-mail.org', 'fakemailgenerator.com', 'throwawaymail.com',
  'maildrop.cc', 'inboxkitten.com', 'crazymailing.com', 'mohmal.com',
  'generator.email', 'dropmail.me', '10mail.org', 'burnermail.io',
  'tempmailo.com', '10minute.email', 'mailnesia.com', 'mytrashmail.com'
]);

/**
 * High-confidence spam keywords in lead submissions.
 */
const SPAM_KEYWORDS = [
  'crypto', 'cryptocurrency', 'bitcoin', 'btc', 'ethereum', 'eth', 'usdt',
  'casino', 'betting', 'viagra', 'cialis', 'backlinks', 'seo ranking service',
  'guest post', 'traffic generator', 'hack', 'whatsapp marketing software',
  'telegram blast', 'porno', 'xxx', 'escort', 'dating service', 'adult chat',
  'darkweb', 'buy followers', 'instagram bot', 'fast loan approval no credit',
  'poker', 'roulette', 'lottery winner', 'binance', 'invest $', 'earn $ per day'
];

/**
 * Repetitive or invalid phone number patterns.
 */
const FAKE_PHONE_PATTERNS = [
  '0000000000', '1111111111', '2222222222', '3333333333', '4444444444',
  '5555555555', '6666666666', '7777777777', '8888888888', '9999999999',
  '1234567890', '0123456789', '9876543210', '0987654321', '1231231234',
  '9999999990', '8888888880', '7777777770', '6666666660'
];

export interface SpamCheckParams {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  honeypot?: string;
  durationMs?: number;
}

export interface SpamCheckResult {
  isSpam: boolean;
  reason?: string;
}

/**
 * Evaluates whether a form submission is automated spam or abusive traffic.
 */
export function isSpamSubmission(params: SpamCheckParams): SpamCheckResult {
  // 1. Honeypot check (Bots fill hidden fields)
  if (params.honeypot && params.honeypot.trim().length > 0) {
    return { isSpam: true, reason: 'Honeypot trap triggered' };
  }

  // 2. Velocity check (Human cannot fill a 4-field form in < 1.2 seconds)
  if (typeof params.durationMs === 'number' && params.durationMs > 0 && params.durationMs < 1200) {
    return { isSpam: true, reason: 'Submission velocity too fast (automated bot)' };
  }

  const name = (params.name || '').trim();
  const email = (params.email || '').toLowerCase().trim();
  const phone = (params.phone || '').replace(/[\s\-()+]/g, '');
  const message = (params.message || '').toLowerCase().trim();

  // 3. Fake / Repetitive Phone Number Check
  if (phone) {
    if (FAKE_PHONE_PATTERNS.includes(phone)) {
      return { isSpam: true, reason: 'Blacklisted repetitive phone number' };
    }

    // Check if phone has fewer than 4 unique digits (e.g. 9999989999)
    const uniqueDigits = new Set(phone.split('')).size;
    if (phone.length === 10 && uniqueDigits < 4) {
      return { isSpam: true, reason: 'Insufficient digit entropy in phone number' };
    }
  }

  // 4. Disposable Email Domain Check
  if (email && email.includes('@')) {
    const domain = email.split('@')[1];
    if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
      return { isSpam: true, reason: 'Disposable temporary email domain' };
    }
  }

  // 5. Spam Keyword / Link / Cyrillic blast in Name Field
  if (name) {
    if (/(https?:\/\/|www\.|\.com|\.ru|\.xyz|\.top|\.io|\.tk|\.ml|\.ga|\.cf|\.gq|\.click|\.buzz)/i.test(name)) {
      return { isSpam: true, reason: 'URL link injected in Name field' };
    }

    if (name.length > 70) {
      return { isSpam: true, reason: 'Name length exceeds allowable threshold' };
    }

    // Cyrillic character spam detection in name
    if (/[\u0400-\u04FF]{3,}/.test(name)) {
      return { isSpam: true, reason: 'Non-regional Cyrillic character payload in Name' };
    }

    // Gibberish consecutive consonant sequence check (e.g., asdfghjkl)
    if (/([bcdfghjklmnpqrstvwxyz]{6,})/i.test(name.replace(/\s+/g, ''))) {
      return { isSpam: true, reason: 'High consonant entropy / keyboard mash in Name' };
    }
  }

  // 6. Spam Keyword & Link Farming in Message or Requirements
  if (message) {
    for (const keyword of SPAM_KEYWORDS) {
      if (message.includes(keyword)) {
        return { isSpam: true, reason: `Spam keyword detected: ${keyword}` };
      }
    }

    // Reject message if it contains more than 1 distinct URL (link farming)
    const urlMatches = message.match(/https?:\/\/[^\s]+/g);
    if (urlMatches && urlMatches.length > 1) {
      return { isSpam: true, reason: 'Multiple outbound hyperlinks in message body' };
    }

    // Cyrillic blast in message
    if (/[\u0400-\u04FF]{5,}/.test(message)) {
      return { isSpam: true, reason: 'Non-regional Cyrillic character blast in Message' };
    }
  }

  return { isSpam: false };
}

/**
 * Safe wrapper for localStorage that gracefully handles blocked storage in
 * restricted browser environments (e.g. Incognito mode, Safari ITP, embedded webviews).
 */
export const safeLocalStorage = {
  getItem(key: string): string | null {
    if (typeof window === 'undefined') return null;
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem(key: string, value: string): boolean {
    if (typeof window === 'undefined') return false;
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  removeItem(key: string): boolean {
    if (typeof window === 'undefined') return false;
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
};

/**
 * Safe wrapper for sessionStorage with defensive try-catch guards.
 */
export const safeSessionStorage = {
  getItem(key: string): string | null {
    if (typeof window === 'undefined') return null;
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem(key: string, value: string): boolean {
    if (typeof window === 'undefined') return false;
    try {
      sessionStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  },
  removeItem(key: string): boolean {
    if (typeof window === 'undefined') return false;
    try {
      sessionStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
};
