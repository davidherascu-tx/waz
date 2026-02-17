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

// ─── Hilfsfunktion ────────────────────────────────────────────
function isNavGroup(item: NavLeaf | NavGroup): item is NavGroup {
  return 'sub' in item && Array.isArray((item as NavGroup).sub);
}

// ─── SubItemList – 3. Ebene ───────────────────────────────────
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

// ─── MegaMenu ─────────────────────────────────────────────────
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
      {/* Blue top accent */}
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
            {/* Column heading */}
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0067B0] mb-4 pb-2 border-b border-[#0067B0]/12">
              {col.heading}
            </p>

            <ul className="space-y-0.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  {isNavGroup(item) && item.sub ? (
                    <div className="mt-2 mb-1">
                      {/* Parent label – no dots, just bold */}
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

// ─── SimpleDropdown ───────────────────────────────────────────
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

  // Flatten all child links
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

  // Simple leaf link
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
          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180 text-[#0067B0]' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="pb-3 pl-2 space-y-0">
          {children.map((child) => (
            <MobileChild key={child.label} item={child} />
          ))}
        </div>
      )}
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

  // Has 3rd level
  return (
    <div className="border-l-2 border-slate-100 ml-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-2.5 pl-3 text-[15px] font-medium text-slate-700 hover:text-[#0067B0] transition-colors"
      >
        {item.label}
        <svg
          className={`w-4 h-4 mr-2 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180 text-[#0067B0]' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pl-4 pb-2 space-y-0">
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
      )}
    </div>
  );
}

// ─── Haupt-Navbar ─────────────────────────────────────────────
export default function Navbar() {
  const [activeIdx, setActiveIdx]   = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile on route change / resize
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
        @keyframes slideDown {
          from { opacity:0; max-height:0; }
          to   { opacity:1; max-height:600px; }
        }
        .mobile-drawer { animation: slideDown .25s ease-out forwards; overflow: hidden; }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/97 backdrop-blur-xl shadow-lg shadow-slate-900/8 border-b border-slate-100'
            : 'bg-white border-b border-slate-100'
        }`}
      >

        {/* ── Top utility bar ─────────────────────────────────── */}
        <div className="hidden lg:block bg-slate-50 border-b border-slate-100">
          <div className="max-w-[1400px] mx-auto px-6 h-9 flex items-center justify-end gap-6 text-xs text-slate-500">
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
              Mo–Mi 8–16 · Do 8–18 · Fr 8–14
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

        {/* ── Main nav row ────────────────────────────────────── */}
        <nav className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-[#0067B0] to-[#00a8e0] rounded-xl flex items-center justify-center shadow-md shadow-[#0067B0]/25">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="leading-none">
              <span className="block text-sm font-extrabold text-slate-900 tracking-tight">WAZ</span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-wide">Blankenfelde-Mahlow</span>
            </div>
          </Link>

          {/* Desktop nav items */}
          <div className="hidden lg:flex items-center gap-0.5">
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
            {/* Kundenportal */}
            <a
              href="/kundenportal"
              className="hidden lg:flex items-center gap-2 px-4 py-2 border-2 border-[#0067B0] text-[#0067B0] text-sm font-bold rounded-xl hover:bg-[#0067B0]/5 transition-all"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Kundenportal
            </a>

            {/* Aktuelles CTA */}
            <a
              href="/archiv"
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#0067B0] hover:bg-[#004e87] text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-[#0067B0]/20 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Aktuelles
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 rounded-xl hover:bg-slate-100 transition-colors gap-[5px]"
              aria-label="Menü"
            >
              <span className={`block w-6 h-[2px] bg-slate-700 rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-[2px] bg-slate-700 rounded-full transition-all duration-200 ${mobileOpen ? 'opacity-0 w-0' : ''}`} />
              <span className={`block w-6 h-[2px] bg-slate-700 rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </nav>

        {/* ── Mobile drawer ────────────────────────────────────── */}
        {mobileOpen && (
          <div className="mobile-drawer lg:hidden bg-white border-t border-slate-100 max-h-[80vh] overflow-y-auto">
            <div className="px-5 py-2">
              {navItems.map((item) => (
                <MobileSection key={item.label} item={item as MobileItem} />
              ))}
            </div>

            {/* Mobile bottom actions */}
            <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="/kundenportal"
                className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-[#0067B0] text-[#0067B0] text-sm font-bold rounded-2xl hover:bg-[#0067B0]/5 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Kundenportal
              </a>
              <a
                href="/archiv"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#0067B0] text-white text-sm font-bold rounded-2xl hover:bg-[#004e87] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Aktuelles
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}