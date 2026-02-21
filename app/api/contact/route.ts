// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const kundennummer = formData.get('kundennummer') as string;
    const email = formData.get('email') as string;
    const telefon = formData.get('telefon') as string;
    const betreff = formData.get('betreff') as string;
    const nachricht = formData.get('nachricht') as string;

    const files = formData.getAll('dateianhang') as File[];
    const attachments = [];

    for (const file of files) {
      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0067B0; padding: 30px 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800;">Neue Kontaktanfrage</h1>
          <p style="color: #93c5fd; margin: 8px 0 0 0; font-size: 14px; text-transform: uppercase;">WAZ Blankenfelde-Mahlow Webseite</p>
        </div>
        <div style="padding: 30px 40px; background-color: #f8fafc;">
          <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h2 style="color: #0f172a; font-size: 16px; font-weight: 700; margin: 0 0 16px 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Absender Details</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 6px 0; color: #64748b; width: 130px;">Name / Firma:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">E-Mail:</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #0067B0; font-weight: 600;">${email}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Telefon:</td><td style="padding: 6px 0; color: #0f172a;">${telefon || 'Nicht angegeben'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Kundennummer:</td><td style="padding: 6px 0; color: #0f172a;">${kundennummer || 'Nicht angegeben'}</td></tr>
            </table>
          </div>
          <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
            <h2 style="color: #0f172a; font-size: 16px; font-weight: 700; margin: 0 0 8px 0;">Betreff: <span style="color: #0067B0;">${betreff}</span></h2>
            <div style="background-color: #f1f5f9; padding: 16px; border-radius: 6px; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin-top: 12px; border-left: 4px solid #0067B0;">${nachricht}</div>
            ${attachments.length > 0 ? `<div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0;"><p style="color: #64748b; font-size: 13px; margin: 0;">📎 <strong>${attachments.length} Datei(en)</strong> wurden an diese E-Mail angehängt.</p></div>` : ''}
          </div>
        </div>
      </div>
    `;

    // Resend Senden-Befehl
    const { data, error } = await resend.emails.send({
      from: 'WAZ Webseite <onboarding@resend.dev>',
      to: 'david.herascu@gmail.com',
      replyTo: email,
      subject: `Neue Kontaktanfrage: ${betreff}`,
      html: htmlContent,
      attachments: attachments,
    });

    // NEU: Echte Resend-Fehler abfangen!
    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error('Server Catch Error:', error);
    return NextResponse.json({ success: false, error: 'Interner Server Fehler' }, { status: 500 });
  }
}