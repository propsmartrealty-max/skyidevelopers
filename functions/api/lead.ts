interface LeadBody {
  name: string;
  phone?: string;
  email?: string;
  project?: string;
  visitDate?: string;
  visitTime?: string;
  pickupNeeded?: boolean;
  message?: string;
  utmSource?: string;
  honeypot?: string;
  durationMs?: number;
}

interface EventContext {
  request: Request;
  env?: Record<string, unknown>;
  params?: Record<string, unknown>;
}

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
};

export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

export async function onRequestPost(context: EventContext): Promise<Response> {
  try {
    const request = context.request;
    const clientIp = request.headers.get('cf-connecting-ip') || 'unknown';
    const body: LeadBody = await request.json();

    // Honeypot & bot detection
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return new Response(
        JSON.stringify({
          success: true,
          leadId: `SKYI-CF-${Date.now().toString(36).toUpperCase()}`,
          message: 'Thank you! Your inquiry has been received.',
        }),
        { status: 200, headers: CORS_HEADERS }
      );
    }

    const cleanName = (body.name || '').trim().slice(0, 70);
    const cleanPhone = (body.phone || '').replace(/[\s\-()+]/g, '').slice(0, 15);
    const cleanEmail = (body.email || '').trim().slice(0, 80);
    const cleanProject = (body.project || 'General Inquiry').slice(0, 80);

    if (!cleanName || cleanName.length < 2) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please enter a valid full name.' }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    if (!cleanPhone && !cleanEmail) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide phone number or email.' }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const leadRefId = `SKYI-EDGE-${Date.now().toString(36).toUpperCase()}`;

    // Dispatch lead email to propsmartrealty@gmail.com
    try {
      await fetch('https://formsubmit.co/ajax/propsmartrealty@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `⚡ CLOUDFLARE EDGE LEAD [${cleanName}] — ${cleanProject}`,
          _template: 'table',
          _captcha: 'false',
          'Lead Reference': leadRefId,
          'Customer Name': cleanName,
          'Mobile Phone': cleanPhone ? `+91 ${cleanPhone}` : 'Not Provided',
          'Email Address': cleanEmail || 'Not Provided',
          'Project Name': cleanProject,
          'Site Visit Date': body.visitDate || 'Not Scheduled',
          'Visit Time Slot': body.visitTime || 'Not Scheduled',
          'Cab Pickup Needed': body.pickupNeeded ? 'YES' : 'NO',
          'Client Message': body.message || 'Direct Enquiry',
          'Source Channel': body.utmSource || 'Cloudflare Edge Form',
          'Client Edge IP': clientIp,
          'Submission Timestamp': new Date().toISOString(),
        }),
      });
    } catch (dispatchErr) {
      console.error('[Lead Edge Dispatch Error]', dispatchErr);
    }

    return new Response(
      JSON.stringify({
        success: true,
        leadId: leadRefId,
        message: 'Thank you! Your VIP consultation request has been registered.',
      }),
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Server error',
      }),
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
