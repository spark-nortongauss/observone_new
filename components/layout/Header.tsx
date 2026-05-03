'use client';
import MagneticButton from '../ui/MagneticButton';
const links = ['Platform', 'Solutions', 'Proof', 'Integrations', 'Company'];
export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-[#E5E5E5] bg-white/75 backdrop-blur-xl'>
      <div className='section-shell flex h-16 items-center justify-between'>
        <div className='flex items-center gap-3'><div className='h-8 w-8 rounded-lg bg-[#0b0b0b] text-[#D9FF35] grid place-items-center text-xs font-bold'>O1</div><span className='font-semibold'>ObservOne</span></div>
        <nav className='hidden md:flex items-center gap-7 text-sm text-[#808080]'>{links.map((link) => <a className='hover:text-black transition' href='#' key={link}>{link}</a>)}</nav>
        <div className='hidden md:flex items-center gap-4'><a className='text-sm text-[#808080] hover:text-black' href='#'>Sign in</a><MagneticButton label='Book Demo' /></div>
      </div>
    </header>
  );
}
