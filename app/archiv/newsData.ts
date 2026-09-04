// app/archiv/newsData.ts

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  pdf: string;
  excerpt: string;
  urgent?: boolean;
};

export const newsItems: NewsItem[] = [
  {
    id: 'zvv-einladung-september-2026',
    title: '2. Zweckverbandversammlung 2026',
    date: '3. September 2026',
    pdf: 'Einladung_2_ZVV_2026.pdf',
    excerpt: 'Die 2. Sitzung der Verbandsversammlung des WAZ Blankenfelde-Mahlow findet am Dienstag, den 22.09.2026 um 18:00 Uhr im Haus des Wassers, Glasower Damm 92, statt. Die vollständige Tagesordnung entnehmen Sie bitte der Bekanntmachung.',
  },
  {
    id: 'kinderwassertag-2026',
    title: 'Kinderwassertag 2026',
    date: '13. Mai 2026',
    pdf: 'Kinderwassertag_2026.pdf',
    excerpt: 'Einladung zum 18. Kinderwassertag im Wasserwerk Ludwigsfelde am 5. Juni 2026. Ein buntes Programm mit Spielen und Experimenten für Kitas und Schulen.',
  },
  {
    id: 'fruehjahrsspuelung-2026',
    title: 'Frühjahrsspülung 2026',
    date: '10. Februar 2026',
    pdf: 'Frühjahrsspülung 2026.pdf',
    excerpt: 'Termine und wichtige Hinweise zur turnusmäßigen Rohrnetzspülung in Blankenfelde, Mahlow, Diedersdorf und Jühnsdorf. Während der Spülung kann es zu Druckschwankungen kommen.',
  }
];
