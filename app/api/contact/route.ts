// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Diese Route verarbeitet Formulardaten und darf nie statisch vorgerendert werden.
export const dynamic = 'force-dynamic';

// Empfänger und Absender kommen aus der Umgebung, damit sie ohne Code-Änderung
// angepasst werden können. Die Fallbacks entsprechen dem bisherigen Verhalten.
const MAIL_TO = process.env.CONTACT_MAIL_TO ?? 'david.herascu@gmail.com';
const MAIL_FROM = process.env.CONTACT_MAIL_FROM ?? 'WAZ Webseite <onboarding@resend.dev>';

// Grenzen für Anhänge – verhindert, dass ein einzelner Request den Server
// mit hunderten Megabyte im Arbeitsspeicher blockiert.
const MAX_FILES = 5;
const MAX_TOTAL_ATTACHMENT_BYTES = 10 * 1024 * 1024; // 10 MB

/**
 * Der Resend-Client wird erst beim tatsächlichen Aufruf erzeugt.
 * Zuvor stand `new Resend(...)` auf Modulebene – ohne gesetzten API-Key ist der
 * gesamte Produktions-Build daran gescheitert ("Missing API key").
 */
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

/**
 * Maskiert HTML-Sonderzeichen. Ohne diese Umwandlung könnte jemand über das
 * öffentliche Kontaktformular beliebiges HTML (Links, gefälschte Hinweise)
 * in die Mail einschleusen, die beim WAZ ankommt.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Liest ein Feld aus dem Formular als getrimmten String. */
function field(formData: FormData, name: string, maxLength = 5000): string {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  try {
    const resend = getResendClient();
    if (!resend) {
      console.error('RESEND_API_KEY ist nicht gesetzt – Kontaktformular deaktiviert.');
      return NextResponse.json(
        { success: false, error: 'Der E-Mail-Versand ist derzeit nicht konfiguriert.' },
        { status: 503 },
      );
    }

    const formData = await request.formData();

    const name = field(formData, 'name', 200);
    const kundennummer = field(formData, 'kundennummer', 100);
    const email = field(formData, 'email', 200);
    const telefon = field(formData, 'telefon', 100);
    const betreff = field(formData, 'betreff', 200);
    const nachricht = field(formData, 'nachricht', 10000);

    // Pflichtfelder prüfen – vorher konnten leere oder fehlende Felder als
    // "null" in der Mail landen.
    if (!name || !email || !betreff || !nachricht) {
      return NextResponse.json(
        { success: false, error: 'Bitte füllen Sie Name, E-Mail, Betreff und Nachricht aus.' },
        { status: 400 },
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' },
        { status: 400 },
      );
    }

    const files = formData.getAll('dateianhang').filter((f): f is File => f instanceof File);
    const attachments: { filename: string; content: Buffer }[] = [];
    let totalBytes = 0;

    for (const file of files) {
      if (file.size === 0) continue;

      if (attachments.length >= MAX_FILES) {
        return NextResponse.json(
          { success: false, error: `Es sind maximal ${MAX_FILES} Dateien erlaubt.` },
          { status: 400 },
        );
      }

      totalBytes += file.size;
      if (totalBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
        return NextResponse.json(
          { success: false, error: 'Die Anhänge dürfen zusammen höchstens 10 MB groß sein.' },
          { status: 413 },
        );
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        // Pfadanteile aus dem Dateinamen entfernen.
        filename: file.name.replace(/[\\/]/g, '_').slice(0, 200) || 'anhang',
        content: buffer,
      });
    }

    // Alle Nutzereingaben werden maskiert, bevor sie in das HTML wandern.
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      telefon: telefon ? escapeHtml(telefon) : 'Nicht angegeben',
      kundennummer: kundennummer ? escapeHtml(kundennummer) : 'Nicht angegeben',
      betreff: escapeHtml(betreff),
      nachricht: escapeHtml(nachricht),
    };

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
              <tr><td style="padding: 6px 0; color: #64748b; width: 130px;">Name / Firma:</td><td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${safe.name}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">E-Mail:</td><td style="padding: 6px 0;"><a href="mailto:${safe.email}" style="color: #0067B0; font-weight: 600;">${safe.email}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Telefon:</td><td style="padding: 6px 0; color: #0f172a;">${safe.telefon}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;">Kundennummer:</td><td style="padding: 6px 0; color: #0f172a;">${safe.kundennummer}</td></tr>
            </table>
          </div>
          <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
            <h2 style="color: #0f172a; font-size: 16px; font-weight: 700; margin: 0 0 8px 0;">Betreff: <span style="color: #0067B0;">${safe.betreff}</span></h2>
            <div style="background-color: #f1f5f9; padding: 16px; border-radius: 6px; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin-top: 12px; border-left: 4px solid #0067B0;">${safe.nachricht}</div>
            ${attachments.length > 0 ? `<div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0;"><p style="color: #64748b; font-size: 13px; margin: 0;">📎 <strong>${attachments.length} Datei(en)</strong> wurden an diese E-Mail angehängt.</p></div>` : ''}
          </div>
        </div>
      </div>
    `;

    // Resend Senden-Befehl
    const { data, error } = await resend.emails.send({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: `Neue Kontaktanfrage: ${betreff}`,
      html: htmlContent,
      attachments,
    });

    // Echte Resend-Fehler abfangen
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
