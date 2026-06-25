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
    id: 'spitzenlastsituation-2026',
    title: 'Spitzenlastsituation – Gartenbewässerung bitte einstellen',
    date: '25. Juni 2026',
    pdf: '20260625_Spitzenlastsituation.pdf',
    excerpt: 'Aufgrund der aktuellen Witterungslage laufen die Anlagen zur Wasserversorgung an ihrer Belastungsgrenze. Wir bitten Sie, in den Spitzenzeiten von 7:00 – 11:00 Uhr und 15:00 – 22:00 Uhr auf Gartenbewässerung und Poolbefüllungen zu verzichten.',
    urgent: true,
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