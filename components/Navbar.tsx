import Link from 'next/link';

export default function Navbar() {
  return (
    // "top-6", "left-1/2", "-translate-x-1/2" und "rounded-full" sorgen für den schwebenden Kapsel-Effekt
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl bg-white/90 backdrop-blur-md shadow-lg z-50 rounded-full px-8 py-4 flex justify-between items-center transition-all">
      <div className="font-bold text-xl md:text-2xl text-blue-900 tracking-tight">
        WAZ <span className="text-blue-500 hidden sm:inline">Blankenfelde-Mahlow</span>
      </div>
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link href="#start" className="hover:text-blue-600 transition">Start</Link>
        <Link href="#leistungen" className="hover:text-blue-600 transition">Leistungen</Link>
        <Link href="#aktuelles" className="hover:text-blue-600 transition">Aktuelles</Link>
        <Link href="#kontakt" className="hover:text-blue-600 transition">Kontakt</Link>
      </div>
    </nav>
  );
}