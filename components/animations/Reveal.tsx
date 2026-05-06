'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main' | 'aside' | 'nav';
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  start?: string;
}

export default function Reveal({
  children,
  as = 'div',
  className,
  stagger,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 28,
  start = 'top 85%',
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      gsap.set(el, { opacity: 1 });
      gsap.set(el.querySelectorAll('[data-reveal-child]'), { opacity: 1 });
      return;
    }

    const offset: { x?: number; y?: number } = {};
    if (direction === 'up') offset.y = distance;
    if (direction === 'down') offset.y = -distance;
    if (direction === 'left') offset.x = distance;
    if (direction === 'right') offset.x = -distance;

    let target: Element | NodeListOf<Element> = el;
    let useStagger = false;
    if (stagger) {
      const children = el.querySelectorAll('[data-reveal-child]');
      if (children.length > 0) {
        target = children;
        useStagger = true;
        gsap.set(el, { opacity: 1 });
      }
    }

    gsap.set(target, { opacity: 0, ...offset });

    const ctx = gsap.context(() => {
      gsap.to(target, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        stagger: useStagger ? stagger : undefined,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none reverse',
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, direction, distance, duration, stagger, start]);

  const commonProps = {
    ref: ref as React.Ref<HTMLDivElement>,
    className,
    style: { opacity: 0 },
  };

  if (as === 'section') return <section {...commonProps}>{children}</section>;
  if (as === 'article') return <article {...commonProps}>{children}</article>;
  if (as === 'header') return <header {...commonProps}>{children}</header>;
  if (as === 'footer') return <footer {...commonProps}>{children}</footer>;
  if (as === 'main') return <main {...commonProps}>{children}</main>;
  if (as === 'aside') return <aside {...commonProps}>{children}</aside>;
  if (as === 'nav') return <nav {...commonProps}>{children}</nav>;
  return <div {...commonProps}>{children}</div>;
}
