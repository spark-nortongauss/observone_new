'use client';
import { useEffect, useState } from 'react';
export default function AnimatedCounter({ end }: { end: number }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const duration = 900;
    const start = performance.now();
    const loop = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(end * progress);
      if (progress < 1) requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }, [end]);
  return <span>{Number.isInteger(end) ? Math.round(value) : value.toFixed(2)}</span>;
}
