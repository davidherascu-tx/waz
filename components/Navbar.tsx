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

// --- DESKTOP KOMPONENTEN ---
function SubItemList({ items }: { items: NavLeaf[] }) {
  return (
    <ul className="mt-1 ml-0 border-l-2 border-[#0067B0]/20 pl-4 space-y-1">
      {items.map((sub) => (
        <li key={sub.label}>
          <Link href={sub.href} className="block text-sm text-slate-500 hover:text-[#0067B0] transition-colors py-0.5 leading-snug">
            {sub.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MegaMenu({ columns }: { columns: Column[] }) {
  return (
    <div className="absolute top-full mt-3 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 overflow-hidden z-50 animate-fade-in-center" style={{ width: '860px', left: '50%' }}>
      <div className="h-[3px] bg-gradient-to-r from-[#0067B0] via-[#00a8e0] to-[#00C2E0]" />
      <div className="grid p-6 gap-0" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {columns.map((col, ci) => (
          <div key={ci} className={[ci > 0 ? 'pl-6' : '', ci < columns.length - 1 ? 'pr-6 border-r border-slate-100' : ''].join(' ')}>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0067B0] mb-4 pb-2 border-b border-[#0067B0]/12">{col.heading}</p>
            <ul className="space-y-0.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  {isNavGroup(item) && item.sub ? (
                    <div className="mt-2 mb-1">
                      <span className="block text-[15px] font-semibold text-slate-800 py-1">{item.label}</span>
                      <SubItemList items={item.sub} />
                    </div>
                  ) : (
                    <Link href={(item as NavLeaf).href} className="block text-[15px] text-slate-600 hover:text-[#0067B0] hover:bg-[#0067B0]/5 rounded-lg px-2 py-1.5 -mx-2 transition-all">
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
    <div className="absolute top-full mt-3 w-64 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 overflow-hidden z-50 animate-fade-in-center" style={{ left: '50%' }}>
      <div className="h-[3px] bg-gradient-to-r from-[#0067B0] to-[#00C2E0]" />
      <ul className="p-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="block px-4 py-2.5 text-[15px] text-slate-600 hover:text-[#0067B0] hover:bg-[#0067B0]/5 rounded-xl transition-all">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── MOBILE KOMPONENTEN MIT ÜBERKATEGORIEN ───
type MobileItem = {
  label: string;
  href?: string;
  sub?: NavLeaf[];
  children?: NavLeaf[];
  columns?: Column[];
};

function MobileSection({ item }: { item: MobileItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.columns?.length || !!item.children?.length;

  if (!hasChildren && item.href) {
    return (
      <Link href={item.href} className="flex items-center justify-between py-4 text-[17px] font-extrabold text-slate-800 border-b border-slate-100 active:text-[#0067B0] transition-colors">
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-4 text-[17px] font-extrabold text-slate-800 active:text-[#0067B0] transition-colors">
        {item.label}
        <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${open ? 'bg-[#0067B0]/10' : 'bg-slate-50'}`}>
          <svg className={`w-5 h-5 text-[#0067B0] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[2500px] mb-4' : 'max-h-0'}`}>
        <div className="bg-slate-50 rounded-2xl p-3 space-y-6">
          {item.columns ? (
            item.columns.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-2.5">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0067B0] ml-2 border-b border-[#0067B0]/10 pb-1.5 inline-block">
                  {col.heading}
                </h4>
                <div className="space-y-2">
                  {col.items.map((child, cIdx) => (
                    <MobileChild key={cIdx} item={child as MobileItem} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="space-y-2">
              {item.children?.map((child, idx) => (
                <MobileChild key={idx} item={child as MobileItem} />
              ))}
            </div>
          )}
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
      <Link href={item.href} className="flex items-center px-4 py-3.5 text-[15px] font-bold text-slate-700 bg-white rounded-xl shadow-sm border border-slate-100/60 active:text-[#0067B0] transition-all">
        {item.label}
      </Link>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100/60 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full p-3.5 text-[15px] font-bold text-slate-700 active:text-[#0067B0] transition-colors">
        {item.label}
        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180 text-[#0067B0]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="px-4 pb-3 pt-1 space-y-1 border-t border-slate-50 bg-slate-50/50">
          {item.sub!.map((s) => (
            <Link key={s.label} href={s.href} className="block py-2.5 text-sm font-medium text-slate-500 active:text-[#0067B0] transition-colors border-b border-slate-100/50 last:border-0">
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── HAUPT-NAVBAR ─────────────────────────────────────────────
export default function Navbar() {
  const [activeIdx, setActiveIdx]   = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const [scrolled, setScrolled]     = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
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
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileOpen]);

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
        @keyframes ddFadeInCenter {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .animate-fade-in-center { 
          animation: ddFadeInCenter .15s ease-out forwards; 
        }
      `}</style>

      {/* NEU: Schwebe-Effekt durch max-w, left-1/2, top-Abstand und rounded-2xl */}
      <header
        className={`fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 w-[96%] max-w-[1400px] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${
          mobileOpen ? 'rounded-t-2xl rounded-b-none' : 'rounded-2xl'
        } ${
          scrolled || mobileOpen 
            ? 'bg-white/95 backdrop-blur-xl top-3 md:top-4' 
            : 'bg-white top-4 md:top-6'
        } ${isScrollingDown && !mobileOpen ? '-translate-y-[150%] lg:translate-y-0' : 'translate-y-0'}`}
      >

        {/* ── Top utility bar (Desktop) ── */}
        <div className={`hidden lg:block bg-slate-50 transition-all duration-500 ease-in-out overflow-hidden rounded-t-2xl ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 border-b border-slate-100'}`}>
          <div className="w-full px-6 h-full flex items-center justify-end gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#0067B0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              03379 3768-60
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#0067B0] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Di: 13:00 - 16:00 Uhr und Do: 09:00 - 12:00 Uhr & 13:00 - 18:00 Uhr
            </span>
            <span className="text-slate-300">|</span>
            <a href="/service/zaehlerstand" className="flex items-center gap-1.5 text-[#0067B0] font-semibold hover:text-[#004e87] transition-colors">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>
              Zählerstand melden
            </a>
          </div>
        </div>

        {/* ── Main nav row ── */}
        <nav className={`relative w-full px-5 lg:px-6 flex items-center justify-between transition-all duration-500 ease-in-out ${scrolled || mobileOpen ? 'h-16' : 'h-20 lg:h-24'}`}>
          
          <Link href="/" className="flex items-center shrink-0 z-50" onClick={() => setMobileOpen(false)}>
            <img src="/waz_logo_menu.webp" alt="WAZ Blankenfelde-Mahlow" className={`hidden lg:block w-auto object-contain transition-all duration-500 ease-in-out ${scrolled ? 'h-9' : 'h-12'}`} />
            <img src="/waz_logo.webp" alt="WAZ Logo" className={`block lg:hidden w-auto object-contain transition-all duration-500 ${scrolled || mobileOpen ? 'h-8' : 'h-10'}`} />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => {
              const hasDropdown = !!(item.children || item.columns);
              const isActive = activeIdx === i;
              return (
                <div key={item.label} className="relative" onMouseEnter={() => hasDropdown && enter(i)} onMouseLeave={leave}>
                  {item.href && !hasDropdown ? (
                    <Link href={item.href} className="flex items-center px-4 py-2 text-[15px] font-semibold text-slate-700 hover:text-[#0067B0] rounded-xl hover:bg-[#0067B0]/5 transition-all">
                      {item.label}
                    </Link>
                  ) : (
                    <button className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-semibold rounded-xl transition-all duration-150 ${isActive ? 'text-[#0067B0] bg-[#0067B0]/8' : 'text-slate-700 hover:text-[#0067B0] hover:bg-[#0067B0]/5'}`}>
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180 text-[#0067B0]' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                  {isActive && <div onMouseEnter={() => enter(i)} onMouseLeave={leave}>{item.columns ? <MegaMenu columns={item.columns} /> : item.children ? <SimpleDropdown items={item.children} /> : null}</div>}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a href="/kundenportal" className="hidden lg:flex items-center gap-2 px-4 py-2 border-2 border-[#0067B0] text-[#0067B0] text-sm font-bold rounded-xl hover:bg-[#0067B0]/5 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Kundenportal
            </a>
            <a href="/archiv" className="hidden lg:flex items-center gap-2 px-4 py-2 bg-[#0067B0] hover:bg-[#004e87] text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-[#0067B0]/20 hover:-translate-y-0.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
              Aktuelles
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative flex flex-col justify-center items-center w-11 h-11 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors z-50 border border-slate-200"
              aria-label="Menü"
            >
              <div className="w-5 flex flex-col gap-[5px] items-end">
                <span className={`h-[2.5px] bg-current rounded-full transition-all duration-300 ease-out ${mobileOpen ? 'w-5 rotate-45 translate-y-[7.5px]' : 'w-5'}`} />
                <span className={`h-[2.5px] bg-current rounded-full transition-all duration-300 ease-out ${mobileOpen ? 'opacity-0 translate-x-2' : 'w-4'}`} />
                <span className={`h-[2.5px] bg-current rounded-full transition-all duration-300 ease-out ${mobileOpen ? 'w-5 -rotate-45 -translate-y-[7.5px]' : 'w-3'}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* ── Mobile drawer ── */}
        <div 
          className={`lg:hidden absolute top-full left-[-1px] right-[-1px] bg-white border border-slate-200 border-t-0 shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out flex flex-col overflow-hidden rounded-b-2xl ${
            mobileOpen ? 'h-[calc(100dvh-120px)] opacity-100 visible' : 'h-0 opacity-0 invisible'
          }`}
        >
          <div className="flex-1 overflow-y-auto px-5 py-4 pb-12">
            {navItems.map((item) => (
              <MobileSection key={item.label} item={item as MobileItem} />
            ))}
          </div>

          <div className="shrink-0 p-4 bg-slate-50 border-t border-slate-200 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.02)] rounded-b-2xl">
            <a href="/kundenportal" onClick={() => setMobileOpen(false)} className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3 border-2 border-[#0067B0]/20 bg-white text-[#0067B0] text-[13px] font-bold rounded-2xl active:bg-blue-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Portal
            </a>
            <a href="/archiv" onClick={() => setMobileOpen(false)} className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3 bg-[#0067B0] text-white text-[13px] font-bold rounded-2xl active:bg-[#004e87] transition-colors shadow-md shadow-[#0067B0]/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              News
            </a>
          </div>
        </div>

      </header>
    </>
  );
}