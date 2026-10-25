import { NextResponse } from 'next/server';
import { sanitizeInput, isSpamSubmission } from '../../../utils/security';
import { logger } from '../../../utils/logger';
import { checkRateLimit } from '../../../utils/rateLimiter';
import { sendLeadEmailNotification } from '../../../utils/emailService';

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  project?: string;
  visitDate?: string;
  visitTime?: string;
  pickupNeeded?: boolean;
  message?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  honeypot?: string;
  durationMs?: number;
}

export async function POST(request: Request) {
  try {
    // 0. Cloudflare & Proxy IP Extraction with Sliding-Window Rate Limiting
    const cfIp = request.headers.get('cf-connecting-ip');
    const realIp = request.headers.get('x-real-ip');
    const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
    const clientIp = cfIp || realIp || forwardedFor || 'unknown-client';

    const rateLimit = checkRateLimit(clientIp, 5, 10 * 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        { success: false, error: 'Too many lead submissions. Please wait 10 minutes before submitting again.' },
        { status: 429 }
      );
    }

    const body: LeadPayload = await request.json();

    // 1. Anti-Spam & Honeypot Evaluation
    const spamCheck = isSpamSubmission({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
      honeypot: body.honeypot,
      durationMs: body.durationMs,
    });

    if (spamCheck.isSpam) {
      logger.warn(`[Anti-Spam Filter] Blocked lead submission from IP ${clientIp}. Reason: ${spamCheck.reason}`, {
        name: body.name,
        email: body.email,
        phone: body.phone,
      });

      // Return a silent mock success to avoid teaching spambots how to evade filters
      return NextResponse.json(
        {
          success: true,
          leadId: `SKYI-SEC-${Date.now().toString(36).toUpperCase()}`,
          message: 'Thank you! Your inquiry has been received.',
        },
        { status: 200 }
      );
    }

    // 2. Sanitize inputs and enforce length boundaries
    const sanitizedName = sanitizeInput(body.name || '').slice(0, 70);
    let sanitizedPhone = sanitizeInput(body.phone || '').replace(/[\s\-()+]/g, '').slice(0, 15);
    if (sanitizedPhone.startsWith('91') && sanitizedPhone.length === 12) {
      sanitizedPhone = sanitizedPhone.slice(2);
    } else if (sanitizedPhone.startsWith('0') && sanitizedPhone.length === 11) {
      sanitizedPhone = sanitizedPhone.slice(1);
    }
    const sanitizedEmail = sanitizeInput(body.email || '').slice(0, 80);
    const sanitizedProject = sanitizeInput(body.project || 'General Inquiry').slice(0, 80);
    const sanitizedMessage = sanitizeInput(body.message || '').slice(0, 600);
    const utmSource = sanitizeInput(body.utmSource || 'Direct Website Visit').slice(0, 80);

    // 3. Validate mandatory fields
    if (!sanitizedName || sanitizedName.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid full name (minimum 2 characters).' },
        { status: 400 }
      );
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const hasValidPhone = Boolean(sanitizedPhone && phoneRegex.test(sanitizedPhone));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasValidEmail = Boolean(sanitizedEmail && emailRegex.test(sanitizedEmail));

    if (!hasValidPhone && !hasValidEmail) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid 10-digit mobile number or email address.' },
        { status: 400 }
      );
    }

    // 4. Log lead creation
    const leadRefId = `SKYI-${Date.now().toString(36).toUpperCase()}`;
    logger.log(`[Serverless Lead Engine] Lead Received ${leadRefId}`, {
      name: sanitizedName,
      phone: sanitizedPhone,
      email: sanitizedEmail,
      project: sanitizedProject,
      message: sanitizedMessage,
      source: utmSource,
    });

    // 4. Dispatch Email Alert to propsmartrealty@gmail.com
    try {
      await sendLeadEmailNotification({
        leadId: leadRefId,
        name: sanitizedName,
        phone: sanitizedPhone || 'Not Provided',
        email: sanitizedEmail,
        project: sanitizedProject,
        visitDate: body.visitDate,
        visitTime: body.visitTime,
        pickupNeeded: body.pickupNeeded,
        message: sanitizedMessage,
        source: utmSource,
      });
    } catch (err) {
      logger.error('[Email Dispatch Error]', err);
    }

    // 5. Return success response
    return NextResponse.json(
      {
        success: true,
        leadId: leadRefId,
        message: 'Thank you! Your VIP consultation request has been registered. Our advisor will reach out within 20 minutes.',
      },
      { status: 200 }
    );
  } catch (error) {
    logger.error('[Serverless Lead Engine Error]', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected server error occurred. Please try again or reach out on WhatsApp.' },
      { status: 500 }
    );
  }
}
