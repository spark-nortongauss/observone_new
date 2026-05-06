const footerLinks = {
  Platform: ['Operations Command Center', 'Incident Intelligence', 'Automation Engine', 'Executive Insights', 'Integrations'],
  Solutions: ['Telecom & ISP', 'Data Centers', 'Smart Buildings', 'Transportation', 'Manufacturing'],
  Company: ['About', 'Careers', 'Blog', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance', 'Cookie Settings'],
};

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white">
      <div className="section-shell pt-16 pb-10">
        {/* Top: Brand + Links */}
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D9FF35] text-[10px] font-bold tracking-wider text-black">
                O1
              </div>
              <span className="text-[15px] font-semibold">ObservOne</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Enterprise AI operations platform for critical infrastructure teams.
            </p>
            <div className="mt-5 flex gap-3">
              {['in', 'tw', 'gh'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-[11px] font-medium uppercase text-white/40 transition hover:border-white/25 hover:text-white/70"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/30">{category}</p>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/45 transition hover:text-white/80">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/8" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/30">
            © 2026 ObservOne, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {['SOC 2', 'ISO 27001', 'GDPR', 'FedRAMP'].map((cert) => (
              <span key={cert} className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-white/25">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
