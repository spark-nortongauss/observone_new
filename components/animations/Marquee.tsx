'use client';

import { useEffect, useRef } from 'react';

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  itemClassName?: string;
}

export default function Marquee({ items, speed = 40, className, itemClassName }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.style.animation = 'none';
    } else {
      const distance = el.scrollWidth / 2;
      el.style.setProperty('--marquee-distance', `${distance}px`);
      el.style.setProperty('--marquee-duration', `${distance / speed}s`);
    }
  }, [items, speed]);

  return (
    <div
      className={`relative overflow-hidden ${className ?? ''}`}
      role="region"
      aria-label="Integrations marquee"
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />
      <div ref={trackRef} className="marquee-track flex gap-3 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`flex-shrink-0 rounded-xl border border-[#E4E4E0] bg-[#F8F8F6] px-4 py-2 text-sm text-[#555] ${itemClassName ?? ''}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
