// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// ─── Typ-Definitionen ─────────────────────────────────────────
type NavLeaf  = { label: string; href: string };
type NavGroup = { label: string; sub?: NavLeaf[] };
type Column   = { heading: string; items: (NavLeaf | NavGroup)[] };
type NavItem  = {
  label: string;
  href?: string;
  children?: NavLeaf[];
  mega?: boolean;
  columns?: Column[];
};

// ─── Menüstruktur ─────────────────────────────────────────────
const navItems: NavItem[] = [
  {
    label: 'Über uns',
    children: [
      { label: 'Haus des Wassers',            href: '/ueber-uns/haus-des-wassers' },
      { label: 'Chronik des WAZ',             href: '/ueber-uns/chronik' },
      { label: 'Wasserzeitung – 30 Jahre WAZ',href: '/ueber-uns/wasserzeitung' },
      { label: 'Verbandsversammlung',         href: '/ueber-uns/verbandsversammlung' },
      { label: 'Stellenausschreibungen',      href: '/ueber-uns/stellenausschreibungen' },
    ],
  },
  {
    label: 'Service',
    mega: true,
    columns: [
      {
        heading: 'Satzungen',
        items: [
          { label: 'Allgemein', href: '/service/satzungen/allgemein' },
          {
            label: 'Trinkwasser',
            sub: [
              { label: 'Gebühren',           href: '/service/satzungen/trinkwasser/gebuehren' },
              { label: 'Technische Satzung', href: '/service/satzungen/trinkwasser/technisch' },
              { label: 'Beitrag',            href: '/service/satzungen/trinkwasser/beitrag' },
              { label: 'Kostenerstattung',   href: '/service/satzungen/trinkwasser/kosten' },
            ],
          },
          {
            label: 'Schmutzwasser',
            sub: [
              { label: 'Gebühren',           href: '/service/satzungen/schmutzwasser/gebuehren' },
              { label: 'Beitrag',            href: '/service/satzungen/schmutzwasser/beitrag' },
              { label: 'Technische Satzung', href: '/service/satzungen/schmutzwasser/technisch' },
            ],
          },
        ],
      },
      {
        heading: 'Amtsblatt & Dokumente',
        items: [
          { label: 'Amtsblatt Aktuell',    href: '/service/amtsblatt/aktuell' },
          { label: 'Amtsblätter Archiv',   href: '/service/amtsblatt/archiv' },
          { label: 'Beiträge und Gebühren',href: '/service/beitraege-gebuehren' },
          { label: 'Daten WAZ',            href: '/service/daten-waz' },
          {
            label: 'Formulare / Merkblätter',
            sub: [
              { label: 'Allgemein',     href: '/service/formulare/allgemein' },
              { label: 'Trinkwasser',   href: '/service/formulare/trinkwasser' },
              { label: 'Schmutzwasser', href: '/service/formulare/schmutzwasser' },
            ],
          },
        ],
      },
      {
        heading: 'Online-Services',
        items: [
          { label: 'Online-Zählerstand',     href: '/service/zaehlerstand' },
          { label: 'Leitungsauskunft online', href: '/service/leitungsauskunft' },
          {
            label: 'Installateursuche',
            sub: [
              { label: 'Installateurverzeichnis', href: '/service/installateure' },
            ],
          },
        ],
      },
      {
        heading: 'Informationen',
        items: [
          { label: 'Kinderwassertag 2025', href: '/service/info/kinderwassertag' },
          { label: 'Smartmeter',           href: '/service/info/smartmeter' },
        ],
      },
    ],
  },
  { label: 'Fragen & Antworten', href: '/faq' },
  { label: 'Kontakt',            href: '/kontakt' },
];

function isNavGroup(item: NavLeaf | NavGroup): item is NavGroup {
  return 'sub' in item && Array.isArray((item as NavGroup).sub);
}

function SubItemList({ items }: { items: NavLeaf[] }) {
  return (
    <ul className="mt-1 ml-0 border-l-2 border-[#0067B0]/20 pl-4 space-y-1">
      {items.map((sub) => (
        <li key={sub.label}>
          <Link
            href={sub.href}
            className="block text-sm text-slate-500 hover:text-[#0067B0] transition-colors py-0.5 leading-snug"
          >
            {sub.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MegaMenu({ columns }: { columns: Column[] }) {
  return (
    <div
      className="absolute top-full mt-2 bg-white rounded-2xl shadow-2xl shadow-slate-900/12 border border-slate-100 overflow-hidden z-50"
      style={{
        width: '860px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'ddFadeIn .15s ease-out forwards',
      }}
    >
      <div className="h-[3px] bg-gradient-to-r from-[#0067B0] via-[#00a8e0] to-[#00C2E0]" />

      <div className="grid p-6 gap-0" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {columns.map((col, ci) => (
          <div
            key={ci}
            className={[
              ci > 0 ? 'pl-6' : '',
              ci < columns.length - 1 ? 'pr-6 border-r border-slate-100' : '',
            ].join(' ')}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0067B0] mb-4 pb-2 border-b border-[#0067B0]/12">
              {col.heading}
            </p>

            <ul className="space-y-0.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  {isNavGroup(item) && item.sub ? (
                    <div className="mt-2 mb-1">
                      <span className="block text-[15px] font-semibold text-slate-800 py-1">
                        {item.label}
                      </span>
                      <SubItemList items={item.sub} />
                    </div>
                  ) : (
                    <Link
                      href={(item as NavLeaf).href}
                      className="block text-[15px] text-slate-600 hover:text-[#0067B0] hover:bg-[#0067B0]/5 rounded-lg px-2 py-1.5 -mx-2 transition-all"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimpleDropdown({ items }: { items: NavLeaf[] }) {
  return (
    <div
      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl shadow-slate-900/12 border border-slate-100 overflow-hidden z-50"
      style={{ animation: 'ddFadeInSimple .15s ease-out forwards' }}
    >
      <div className="h-[3px] bg-gradient-to-r from-[#0067B0] to-[#00C2E0]" />
      <ul className="p-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block px-4 py-2.5 text-[15px] text-slate-600 hover:text-[#0067B0] hover:bg-[#0067B0]/5 rounded-xl transition-all"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Mobile Menu ──────────────────────────────────────────────
type MobileItem = {
  label: string;
  href?: string;
  sub?: NavLeaf[];
  children?: NavLeaf[];
  columns?: Column[];
};

function MobileSection({ item }: { item: MobileItem }) {
  const [open, setOpen] = useState(false);

  const children: MobileItem[] = item.columns
    ? item.columns.flatMap((col) =>
        col.items.map((i) => ({
          label: i.label,
          href: isNavGroup(i) ? undefined : (i as NavLeaf).href,
          sub:  isNavGroup(i) ? (i as NavGroup).sub : undefined,
        }))
      )
    : item.children ?? [];

  const hasChildren = children.length > 0;

  if (!hasChildren && item.href) {
    return (
      <Link
        href={item.href}
        className="flex items-center justify-between py-4 text-base font-semibold text-slate-800 border-b border-slate-100 hover:text-[#0067B0] transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-base font-semibold text-slate-800 hover:text-[#0067B0] transition-colors"
      >
        {item.label}
        <svg
          className={`w-5 h-5 text-[#0067B0] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[1000px] pb-3' : 'max-h-0'}`}>
        <div className="pl-2 space-y-0">
          {children.map((child) => (
            <MobileChild key={child.label} item={child} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileChild({ item }: { item: MobileItem }) {
  const [open, setOpen] = useState(false);
  const hasSub = item.sub && item.sub.length > 0;

  if (!hasSub && item.href) {
    return (
      <Link
        href={item.href}
        className="flex items-center py-2.5 pl-3 text-[15px] text-slate-600 hover:text-[#0067B0] transition-colors border-l-2 border-slate-100 hover:border-[#0067B0] ml-2"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-l-2 border-slate-100 ml-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2.5 pl-3 text-[15px] font-medium text-slate-700 hover:text-[#0067B0] transition-colors"
      >
        {item.label}
        <svg
          className={`w-4 h-4 mr-2 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180 text-[#0067B0]' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] pb-2' : 'max-h-0'}`}>
        <div className="pl-4 space-y-0">
          {item.sub!.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="block py-2 text-sm text-slate-500 hover:text-[#0067B0] transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [activeIdx, setActiveIdx]   = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // States für Scroll-Verhalten
  const [scrolled, setScrolled]     = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Allgemeiner Scroll-Status für Styling
      setScrolled(currentScrollY > 20);

      // Bestimmen, in welche Richtung gescrollt wird (nur auslösen nach 50px Scroll)
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsScrollingDown(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const enter = (i: number) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveIdx(i);
  };
  const leave = () => {
    leaveTimer.current = setTimeout(() => setActiveIdx(null), 130);
  };

  return (
    <>
      <style>{`
        @keyframes ddFadeIn {
          from { opacity:0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity:1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes ddFadeInSimple {
          from { opacity:0; transform: translateY(-8px); }
          to   { opacity:1; transform: translateY(0); }
        }
      `}</style>

      {/* Die Magie passiert hier: 
        isScrollingDown && !mobileOpen ? '-translate-y-full lg:translate-y-0' 
        -> Schiebt die Navbar nach oben weg, ABER lg:translate-y-0 verhindert das auf dem Desktop!
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled || mobileOpen
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/10 border-b border-slate-100'
            : 'bg-white border-b border-slate-100'
        } ${isScrollingDown && !mobileOpen ? '-translate-y-full lg:translate-y-0' : 'translate-y-0'}`}
      >

        {/* ── Top utility bar ── */}
        <div 
          className={`hidden lg:block bg-slate-50 transition-all duration-500 ease-in-out overflow-hidden ${
            scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 border-b border-slate-100'
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-end gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#0067B0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03379 3768-60
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#0067B0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Di: 13:00 - 16:00 Uhr und Do: 09:00 - 12:00 Uhr & 13:00 - 18:00 Uhr
            </span>
            <span className="text-slate-300">|</span>
            <a href="/service/zaehlerstand" className="flex items-center gap-1.5 text-[#0067B0] font-semibold hover:text-[#004e87] transition-colors">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
              Zählerstand melden
            </a>
          </div>
        </div>

        {/* ── Main nav row ── */}
        <nav 
          className={`relative max-w-[1400px] mx-auto px-6 flex items-center justify-between transition-all duration-500 ease-in-out ${
            scrolled || mobileOpen ? 'h-16' : 'h-24'
          }`}
        >

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 z-50">
            <img 
              src="/waz_logo_menu.webp" 
              alt="WAZ Blankenfelde-Mahlow" 
              className={`hidden lg:block w-auto object-contain transition-all duration-500 ease-in-out ${
                scrolled ? 'h-10' : 'h-14'
              }`} 
            />
            <img 
              src="/waz_logo.webp" 
              alt="WAZ Logo" 
              className={`block lg:hidden w-auto object-contain transition-all duration-500 ${
                scrolled || mobileOpen ? 'h-8' : 'h-10'
              }`} 
            />
          </Link>

          {/* Desktop nav items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => {
              const hasDropdown = !!(item.children || item.columns);
              const isActive    = activeIdx === i;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && enter(i)}
                  onMouseLeave={leave}
                >
                  {item.href && !hasDropdown ? (
                    <Link
                      href={item.href}
                      className="flex items-center px-4 py-2 text-[15px] font-semibold text-slate-700 hover:text-[#0067B0] rounded-xl hover:bg-[#0067B0]/5 transition-all"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-semibold rounded-xl transition-all duration-150 ${
                        isActive
                          ? 'text-[#0067B0] bg-[#0067B0]/8'
                          : 'text-slate-700 hover:text-[#0067B0] hover:bg-[#0067B0]/5'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180 text-[#0067B0]' : 'text-slate-400'}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {isActive && (
                    <div onMouseEnter={() => enter(i)} onMouseLeave={leave}>
                      {item.columns ? (
                        <MegaMenu columns={item.columns} />
                      ) : item.children ? (
                        <SimpleDropdown items={item.children} />
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="/kundenportal"
              className="hidden lg:flex items-center gap-2 px-4 py-2 border-2 border-[#0067B0] text-[#0067B0] text-sm font-bold rounded-xl hover:bg-[#0067B0]/5 transition-all"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Kundenportal
            </a>

            <a
              href="/archiv"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#0067B0] hover:bg-[#004e87] text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-[#0067B0]/20 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Aktuelles
            </a>

            {/* NEUES ANIMIERTES BURGER-MENU */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative flex flex-col justify-center items-center w-11 h-11 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors z-50 shadow-sm border border-slate-100"
              aria-label="Menü"
            >
              <div className="w-5 flex flex-col gap-[5px] items-end">
                <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${mobileOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5'}`} />
                <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${mobileOpen ? 'opacity-0 translate-x-2' : 'w-4'}`} />
                <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ease-out ${mobileOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-3'}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* ── Mobile drawer ── */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-400 ease-in-out origin-top overflow-hidden ${
            mobileOpen ? 'max-h-[85vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="overflow-y-auto max-h-[85vh]">
            <div className="px-5 py-2">
              {navItems.map((item) => (
                <MobileSection key={item.label} item={item as MobileItem} />
              ))}
            </div>

            <div className="px-5 py-6 bg-slate-50 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="/kundenportal"
                className="flex items-center justify-center gap-2 w-full py-4 border-2 border-[#0067B0] text-[#0067B0] text-[15px] font-bold rounded-2xl hover:bg-[#0067B0]/5 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Kundenportal
              </a>
              <a
                href="/archiv"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#0067B0] text-white text-[15px] font-bold rounded-2xl hover:bg-[#004e87] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Aktuelles
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Dunkles Overlay im Hintergrund bei offenem Mobile-Menü */}
      <div 
        onClick={() => setMobileOpen(false)}
        className={`lg:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: scrolled ? '64px' : '96px' }}
      />
    </>
  );
}