'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  {
    label: 'Platform',
    sub: [
      { name: 'Operations Command Center', desc: 'Unified NOC dashboard' },
      { name: 'Incident Intelligence', desc: 'AI root cause analysis' },
      { name: 'Automation Engine', desc: 'Runbook auto-execution' },
      { name: 'Executive Insights', desc: 'Business impact reporting' },
    ],
  },
  {
    label: 'Solutions',
    sub: [
      { name: 'Telecom & ISP', desc: 'Service assurance at scale' },
      { name: 'Data Centers', desc: 'Cross-layer correlation' },
      { name: 'Smart Buildings', desc: 'OT/IT convergence' },
      { name: 'Transportation', desc: 'Safety-critical uptime' },
    ],
  },
  { label: 'Customers', sub: null },
  { label: 'Integrations', sub: null },
  {
    label: 'Resources',
    sub: [
      { name: 'Documentation', desc: 'Developer guides & APIs' },
      { name: 'Blog', desc: 'Engineering & operations' },
      { name: 'Case Studies', desc: 'Customer outcomes' },
      { name: 'Webinars', desc: 'On-demand sessions' },
    ],
  },
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
      role="banner"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#E4E4E0] bg-white/85 shadow-[0_1px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl'
          : 'bg-white/0'
      }`}
    >
      <div className="section-shell flex h-[68px] items-center justify-between">
        <a href="#" className="group flex items-center gap-2.5" aria-label="ObservOne home">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0a0a0a] text-[10px] font-bold tracking-wider text-[#D9FF35] transition group-hover:scale-105">
            O1
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-[#111]">ObservOne</span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.sub && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-[#555] transition hover:bg-[#F4F4F2] hover:text-[#111]"
                aria-expanded={activeDropdown === item.label}
                aria-haspopup={item.sub ? 'true' : 'false'}
              >
                {item.label}
                {item.sub && <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden />}
              </button>

              {item.sub && activeDropdown === item.label && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-1 w-72 rounded-2xl border border-[#E4E4E0] bg-white p-2 shadow-elevated"
                >
                  {item.sub.map((s) => (
                    <a
                      key={s.name}
                      href="#"
                      role="menuitem"
                      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-[#F4F4F2]"
                    >
                      <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D9FF35]" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#111]">{s.name}</p>
                        <p className="text-xs text-[#888]">{s.desc}</p>
                      </div>
                      <ArrowRight className="mt-1 h-3.5 w-3.5 -translate-x-1 text-[#bbb] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-[#666] transition hover:text-[#111]">
            Sign in
          </a>
          <a
            href="#cta"
            className="flex items-center gap-1.5 rounded-xl bg-[#0a0a0a] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1a1a1a] active:scale-[0.98]"
          >
            Book a Demo
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>

        <button
          className="md:hidden rounded-lg p-2 text-[#555] hover:bg-[#F4F4F2]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E4E4E0] bg-white px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#555] hover:bg-[#F4F4F2] hover:text-[#111] transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-[#E4E4E0] pt-4">
            <a href="#" className="rounded-xl px-3 py-2.5 text-sm text-[#666] hover:bg-[#F4F4F2] transition">
              Sign in
            </a>
            <a
              href="#cta"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-[#0a0a0a] py-3 text-sm font-medium text-white"
            >
              Book a Demo <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
