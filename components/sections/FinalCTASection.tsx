'use client';

import dynamic from 'next/dynamic';
import MagneticButton from '../ui/MagneticButton';

const NetworkGlobe = dynamic(() => import('../three/NetworkGlobe'), {
  ssr: false,
});

export default function FinalCTASection() {
  return (
    <section className='mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 lg:grid-cols-2'>
      <div>
        <h2 className='text-4xl font-semibold'>Ready to Transform Your Operations?</h2>
        <p className='mt-4 text-gray-600'>
          Book a live demo and see how ObservOne can help your team work smarter and deliver better outcomes.
        </p>
        <div className='mt-6 flex gap-3'>
          <MagneticButton label='Book a Live Technical Demo' />
          <MagneticButton label='See a Real Incident Replay' secondary />
        </div>
      </div>
      <NetworkGlobe />
    </section>
  );
}
