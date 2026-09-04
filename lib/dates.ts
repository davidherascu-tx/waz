// lib/dates.ts
// Wandelt die deutschen Datumsangaben aus newsData.ts (z. B. "3. September 2026")
// in ein ISO-Datum um. Open Graph und die Sitemap benötigen ISO 8601 –
// deutsche Monatsnamen werden dort als ungültig verworfen.

const MONTHS: Record<string, number> = {
  januar: 0,
  februar: 1,
  'märz': 2,
  maerz: 2,
  april: 3,
  mai: 4,
  juni: 5,
  juli: 6,
  august: 7,
  september: 8,
  oktober: 9,
  november: 10,
  dezember: 11,
};

/**
 * Gibt das Datum als `Date` zurück oder `null`, wenn es nicht erkannt wurde.
 * Bewusst tolerant: ein nicht erkanntes Datum darf den Build nicht abbrechen.
 */
export function parseGermanDate(value: string): Date | null {
  const match = /^\s*(\d{1,2})\.\s*([A-Za-zÄÖÜäöüß]+)\s+(\d{4})\s*$/.exec(value);
  if (!match) return null;

  const [, day, monthName, year] = match;
  const month = MONTHS[monthName.toLowerCase()];
  if (month === undefined) return null;

  // 12:00 UTC vermeidet Zeitzonen-Verschiebungen über die Tagesgrenze.
  const date = new Date(Date.UTC(Number(year), month, Number(day), 12));
  return Number.isNaN(date.getTime()) ? null : date;
}

/** Liefert z. B. "2026-09-03T12:00:00.000Z" oder `undefined`. */
export function germanDateToISO(value: string): string | undefined {
  return parseGermanDate(value)?.toISOString();
}
