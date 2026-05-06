'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'Platform', sub: ['Operations Command Center', 'Incident Intelligence', 'Automation Engine', 'Executive Insights'] },
  { label: 'Solutions', sub: ['Telecom & ISP', 'Data Centers', 'Smart Buildings', 'Transportation'] },
  { label: 'Proof', sub: null },
  { label: 'Integrations', sub: null },
  { label: 'Company', sub: ['About', 'Careers', 'Blog', 'Contact'] },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#E4E4E0] bg-white/90 shadow-[0_1px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl'
          : 'bg-white/0'
      }`}
    >
      <div className="section-shell flex h-[68px] items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="ObservOne">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0a0a0a] text-[10px] font-bold tracking-wider text-[#D9FF35] transition group-hover:scale-105">
            O1
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-[#111]">ObservOne</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.sub && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-[#555] transition hover:bg-[#F4F4F2] hover:text-[#111]">
                {item.label}
                {item.sub && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </button>

              {item.sub && activeDropdown === item.label && (
                <div className="absolute left-0 top-full mt-1 w-52 rounded-2xl border border-[#E4E4E0] bg-white p-1.5 shadow-elevated">
                  {item.sub.map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-[#555] transition hover:bg-[#F4F4F2] hover:text-[#111]"
                    >
                      {s}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-60 transition" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-[#666] transition hover:text-[#111]">
            Sign in
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 rounded-xl bg-[#0a0a0a] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1a1a1a] active:scale-[0.98]"
          >
            Book a Demo
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden rounded-lg p-2 text-[#555] hover:bg-[#F4F4F2]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E4E4E0] bg-white px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a key={item.label} href="#" className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#555] hover:bg-[#F4F4F2] hover:text-[#111] transition">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-[#E4E4E0] pt-4">
            <a href="#" className="rounded-xl px-3 py-2.5 text-sm text-[#666] hover:bg-[#F4F4F2] transition">Sign in</a>
            <a href="#" className="flex items-center justify-center gap-1.5 rounded-xl bg-[#0a0a0a] py-3 text-sm font-medium text-white">
              Book a Demo <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
