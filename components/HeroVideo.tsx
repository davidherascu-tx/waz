'use client';

// components/HeroVideo.tsx
//
// Das Hintergrundvideo der Startseite ist rund 8,5 MB groß. Früher wurde es bei
// jedem Seitenaufruf automatisch geladen – auch über Mobilfunk. Diese Komponente
// zeigt zuerst nur das Standbild (rund 36 KB) und lädt das Video ausschließlich
// nach, wenn genug Platz vorhanden ist und der Nutzer keine reduzierten
// Animationen eingestellt hat.

import Image from 'next/image';
import { useEffect, useState } from 'react';

const DESKTOP_QUERY = '(min-width: 1024px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export default function HeroVideo() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);

    // Datensparmodus des Browsers respektieren, sofern verfügbar.
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;

    const update = () => {
      setShowVideo(desktop.matches && !reducedMotion.matches && !connection?.saveData);
    };

    update();
    desktop.addEventListener('change', update);
    reducedMotion.addEventListener('change', update);

    return () => {
      desktop.removeEventListener('change', update);
      reducedMotion.removeEventListener('change', update);
    };
  }, []);

  return (
    <>
      {/* Standbild: wird immer ausgeliefert und ist auf Mobilgeräten das
          LCP-Element. `priority` sorgt dafür, dass es sofort geladen wird.
          Hinweis: Das alte Standbild war ein Screenshot der Startseite MIT
          eingebrannter Überschrift. Solange das Video sofort darüber lief,
          fiel das nicht auf – als dauerhaftes Standbild erzeugte es
          doppelten Text. hero_poster.webp zeigt nur das Wasser. */}
      <Image
        src="/hero_poster.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="(max-width: 1400px) 100vw, 1400px"
        className="absolute inset-0 object-cover"
      />

      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          poster="/hero_poster.webp"
          className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[9000ms]"
        >
          <source src="/wassertropfen.mp4" type="video/mp4" />
          <track kind="captions" srcLang="de" label="Keine Tonspur" />
        </video>
      )}
    </>
  );
}
