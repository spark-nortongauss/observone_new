'use client';
import { useState } from 'react';
import { ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';

const footerLinks = {
  Platform: ['Operations Command', 'Incident Intelligence', 'Automation Engine', 'Executive Insights', 'Integrations'],
  Solutions: ['Telecom & ISP', 'Data Centers', 'Smart Buildings', 'Transportation', 'Manufacturing'],
  Company: ['About', 'Customers', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'Blog', 'Case Studies', 'Webinars', 'Trust Center'],
};

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Settings'];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) setSubmitted(true);
  };

  return (
    <footer role="contentinfo" className="bg-[#050505] text-white">
      <div className="section-shell pt-16 pb-10">
        {/* Newsletter */}
        <div className="mb-12 grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              Operations intelligence, in your inbox.
            </h3>
            <p className="mt-2 text-sm text-white/50">
              Monthly: AI ops research, customer outcomes, and product release notes. No spam, ever.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#D9FF35] focus:bg-white/10"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-[#D9FF35] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#e6ff60] active:scale-[0.98]"
              disabled={submitted}
            >
              {submitted ? 'Subscribed ✓' : (<>Subscribe <ArrowRight className="h-3.5 w-3.5" aria-hidden /></>)}
            </button>
          </form>
        </div>

        {/* Top: Brand + Links */}
        <div className="grid gap-10 md:grid-cols-[220px_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2.5" aria-label="ObservOne home">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9FF35] text-[10px] font-bold tracking-wider text-black" aria-hidden>
                O1
              </div>
              <span className="text-[15px] font-semibold">ObservOne</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/45">
              Enterprise AI operations intelligence for critical infrastructure teams.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Github, label: 'GitHub' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                  {category}
                </p>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/50 transition hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="my-8 border-t border-white/8" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/30">
            <p>© {new Date().getFullYear()} ObservOne, Inc.</p>
            {legalLinks.map((link) => (
              <a key={link} href="#" className="text-sm text-white/40 transition hover:text-white/70">
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {['SOC 2', 'ISO 27001', 'GDPR', 'FedRAMP'].map((cert) => (
              <span
                key={cert}
                className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-white/35"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
