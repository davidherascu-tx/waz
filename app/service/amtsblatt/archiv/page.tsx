// app/service/amtsblatt/archiv/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Alle Amtsblätter hier eintragen. 
// WICHTIG: Im Dateinamen (file) müssen Schrägstriche "/" durch Unterstriche "_" ersetzt werden!
const amtsblaetter = [
  // 2025
  { title: "Amtsblatt WAZ Nr. 01/2025 vom 16.04.2025", date: "2025-04-16", file: "Amtsblatt WAZ Nr. 01_2025 vom 16.04.2025.pdf" },
  
  // 2024
  { title: "Amtsblatt WAZ Nr. 03/2024 vom 27.11.2024", date: "2024-11-27", file: "Amtsblatt WAZ Nr. 03_2024 vom 27.11.2024.pdf" },
  { title: "Amtsblatt WAZ Nr. 02/2024 vom 27.11.2024", date: "2024-11-27", file: "Amtsblatt WAZ Nr. 02_2024 vom 27.11.2024.pdf" },
  { title: "Amtsblatt WAZ Nr. 01/2024 vom 02.10.2024", date: "2024-10-02", file: "Amtsblatt WAZ Nr. 01_2024 vom 02.10.2024.pdf" },

  // 2023
  { title: "Amtsblatt WAZ Nr. 03/2023 vom 30.11.2023", date: "2023-11-30", file: "Amtsblatt WAZ Nr. 03_2023 vom 30.11.2023.pdf" },
  { title: "Amtsblatt WAZ Nr. 02/2023 vom 30.11.2023", date: "2023-11-30", file: "Amtsblatt WAZ Nr. 02_2023 vom 30.11.2023.pdf" },
  { title: "Amtsblatt WAZ Nr. 01/2023 vom 20.07.2023", date: "2023-07-20", file: "Amtsblatt WAZ Nr. 01_2023 vom 20.07.2023.pdf" },

  // 2022
  { title: "Amtsblatt WAZ Nr. 04/2022 vom 06.12.2022", date: "2022-12-06", file: "Amtsblatt WAZ Nr. 04_2022 vom 06.12.2022.pdf" },
  { title: "Amtsblatt WAZ Nr. 03/2022 vom 01.12.2022", date: "2022-12-01", file: "Amtsblatt WAZ Nr. 03_2022 vom 01.12.2022.pdf" },
  { title: "Amtsblatt WAZ Nr. 02/2022 vom 22.09.2022", date: "2022-09-22", file: "Amtsblatt WAZ Nr. 02_2022 vom 22.09.2022.pdf" },
  { title: "Amtsblatt WAZ Nr. 01/2022 vom 29.04.2022", date: "2022-04-29", file: "Amtsblatt WAZ Nr. 01_2022 vom 29.04.2022.pdf" },

  // 2021
  { title: "Amtsblatt WAZ Nr. 04/2021 vom 18.11.2021", date: "2021-11-18", file: "Amtsblatt WAZ Nr. 04_2021 vom 18.11.2021.pdf" },
  { title: "Amtsblatt WAZ Nr. 03/2021 vom 27.09.2021", date: "2021-09-27", file: "Amtsblatt WAZ Nr. 03_2021 vom 27.09.2021.pdf" },
  { title: "Amtsblatt WAZ Nr. 02/2021 vom 19.04.2021", date: "2021-04-19", file: "Amtsblatt WAZ Nr. 02_2021 vom 19.04.2021.pdf" },
  { title: "Amtsblatt WAZ Nr. 01/2021 vom 03.02.2021", date: "2021-02-03", file: "Amtsblatt WAZ Nr. 01_2021 vom 03.02.2021.pdf" },

  // 2020
  { title: "Amtsblatt WAZ Nr. 02/2020 vom 18.11.2020", date: "2020-11-18", file: "Amtsblatt WAZ Nr. 02_2020 vom 18.11.2020.pdf" },
  { title: "Amtsblatt WAZ Nr. 01/2020 vom 15.10.2020", date: "2020-10-15", file: "Amtsblatt WAZ Nr. 01_2020 vom 15.10.2020.pdf" },

  // 2019
  { title: "Amtsblatt WAZ Nr. 03/2019 vom 21.11.2019", date: "2019-11-21", file: "Amtsblatt WAZ Nr. 03_2019 vom 21.11.2019.pdf" },
  { title: "Amtsblatt WAZ Nr. 02/2019 vom 02.08.2019", date: "2019-08-02", file: "Amtsblatt WAZ Nr. 02_2019 vom 02.08.2019.pdf" },
  { title: "Amtsblatt WAZ Nr. 01/2019 vom 22.02.2019", date: "2019-02-22", file: "Amtsblatt WAZ Nr. 01_2019 vom 22.02.2019.pdf" },

  // 2018
  { title: "Amtsblatt WAZ Nr. 02/2018 vom 23.11.2018", date: "2018-11-23", file: "Amtsblatt WAZ Nr. 02_2018 vom 23.11.2018.pdf" },
  { title: "Amtsblatt WAZ Nr. 01/2018 vom 22.11.2018", date: "2018-11-22", file: "Amtsblatt WAZ Nr. 01_2018 vom 22.11.2018.pdf" },

  // 2017
  { title: "Amtsblatt WAZ Nr. 02/2017 vom 23.11.2017", date: "2017-11-23", file: "Amtsblatt WAZ Nr. 02_2017 vom 23.11.2017.pdf" },
  { title: "Amtsblatt WAZ Nr. 01/2017 vom 27.01.2017", date: "2017-01-27", file: "Amtsblatt WAZ Nr. 01_2017 vom 27.01.2017.pdf" },

  // 2016
  { title: "Amtsblatt WAZ Nr. 03/2016 vom 17.11.2016", date: "2016-11-17", file: "Amtsblatt WAZ Nr. 03_2016 vom 17.11.2016.pdf" },
  { title: "Amtsblatt WAZ Nr. 02/2016 vom 25.05.2016", date: "2016-05-25", file: "Amtsblatt WAZ Nr. 02_2016 vom 25.05.2016.pdf" },
  { title: "Amtsblatt WAZ Nr. 01/2016 vom 04.02.2016", date: "2016-02-04", file: "Amtsblatt WAZ Nr. 01_2016 vom 04.02.2016.pdf" },

  // 2015
  { title: "Amtsblatt WAZ Nr. 02/2015 vom 18.12.2015", date: "2015-12-18", file: "Amtsblatt WAZ Nr. 02_2015 vom 18.12.2015.pdf" },
  { title: "Amtsblatt WAZ Nr. 01/2015 vom 18.09.2015", date: "2015-09-18", file: "Amtsblatt WAZ Nr. 01_2015 vom 18.09.2015.pdf" },
];

export default function AmtsblattArchivPage() {
  
  // 1. Gruppieren nach Jahr
  const groupedByYear = amtsblaetter.reduce((acc, doc) => {
    const year = new Date(doc.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(doc);
    return acc;
  }, {} as Record<string, typeof amtsblaetter>);

  // 2. Jahre absteigend sortieren (2025, 2024...)
  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800 pt-32 lg:pt-52">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 w-full flex-grow mb-24">
        
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Service</span>
            <span>&rsaquo;</span>
            <span className="uppercase tracking-wider font-bold text-[#0067B0]">Amtsblatt</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Archiv
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Hier finden Sie alle veröffentlichten Amtsblätter des Zweckverbandes, sortiert nach Jahrgängen.
          </p>
        </header>

        <div className="space-y-16">
          {sortedYears.map((year) => (
            <section key={year} className="relative">
              {/* Jahreszahl als Hintergrund-Element oder Überschrift */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl font-extrabold text-[#0067B0]">{year}</h2>
                <div className="h-px bg-slate-200 flex-grow" />
              </div>

              <div className="grid gap-4">
                {groupedByYear[year].map((doc, index) => (
                  <div 
                    key={index}
                    className="group bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      {/* PDF Icon */}
                      <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-[#0067B0]/10 group-hover:text-[#0067B0] flex items-center justify-center shrink-0 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      
                      <div>
                        <h3 className="text-base font-bold text-slate-800 group-hover:text-[#0067B0] transition-colors leading-snug">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-slate-400 mt-1">
                          Veröffentlicht am {formatDate(doc.date)}
                        </p>
                      </div>
                    </div>

                    <a 
                      href={`/service/amtsblatt/archiv/${doc.file}`}
                      target="_blank"
                      download
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-600 font-bold rounded-xl hover:bg-[#0067B0] hover:text-white transition-all text-sm group-hover:shadow-md shrink-0 w-full sm:w-auto"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}