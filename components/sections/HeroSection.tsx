import { ArrowRight, Shield, Zap, CheckCircle2 } from 'lucide-react';

const trustBadges = ['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', 'FedRAMP Authorized'];

const metrics = [
  { value: '65%', label: 'Alert noise reduction' },
  { value: '42%', label: 'Faster MTTR' },
  { value: '99.95%', label: 'Platform uptime SLA' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      {/* Top gradient fade */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E4E4E0] to-transparent" />

      <div className="section-shell section-pad relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* Left: Content */}
          <div>
            {/* Category badge */}
            <div className="badge mb-5 w-fit">
              <Zap className="h-3 w-3 text-[#b8d900]" />
              AI Operations Intelligence Platform
            </div>

            <h1 className="max-w-[640px] text-4xl font-semibold leading-[1.08] tracking-tight text-[#0a0a0a] md:text-[48px] lg:text-[58px]">
              AI Operations for{' '}
              <span className="relative">
                Critical Infrastructure
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-[#D9FF35]" />
              </span>{' '}
              Teams
            </h1>

            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-[#555]">
              Unify telemetry, detect root cause, reduce alert noise, and automate incident response across telecom, network, cloud, and distributed infrastructure.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="flex items-center gap-2 rounded-xl bg-[#0a0a0a] px-5 py-3 text-sm font-medium text-white shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition hover:bg-[#1a1a1a] hover:shadow-[0_4px_16px_rgba(0,0,0,0.25)] active:scale-[0.98]"
              >
                Request Executive Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-xl border border-[#E4E4E0] bg-white px-5 py-3 text-sm font-medium text-[#333] shadow-soft transition hover:border-[#ccc] hover:bg-[#F8F8F6] active:scale-[0.98]"
              >
                Watch Incident Replay
              </a>
            </div>

            {/* Metrics strip */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-[#E4E4E0] pt-8">
              {metrics.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-semibold text-[#0a0a0a]">{value}</p>
                  <p className="mt-0.5 text-xs text-[#888]">{label}</p>
                </div>
              ))}
            </div>

            {/* Trust line */}
            <p className="mt-6 text-[13px] text-[#999]">
              Trusted by NOC, SOC, ISP, Telecom &amp; Infrastructure Operations teams
            </p>
          </div>

          {/* Right: Dashboard preview */}
          <div className="dark-panel mesh-bg overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="h-2 w-2 rounded-full bg-white/20" />
                <div className="h-2 w-2 rounded-full bg-white/20" />
                <div className="h-2 w-2 rounded-full bg-white/20" />
              </div>
              <span className="text-xs text-white/50">Operations Command Center</span>
              <div className="flex items-center gap-1.5 rounded-full bg-[#D9FF35]/15 px-2.5 py-1">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#D9FF35]" />
                <span className="text-[11px] font-medium text-[#D9FF35]">Live</span>
              </div>
            </div>

            <div className="p-5">
              {/* KPI row */}
              <div className="grid grid-cols-4 gap-2.5 text-xs">
                {[
                  { label: 'SLA', value: '99.95%', color: 'text-[#D9FF35]' },
                  { label: 'P1 Active', value: '07', color: 'text-red-400' },
                  { label: 'MTTR', value: '43m', color: 'text-white' },
                  { label: 'AutoFix', value: '68%', color: 'text-[#D9FF35]' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-white/40">{label}</p>
                    <p className={`mt-1 text-lg font-semibold ${color}`}>{value}</p>
                  </div>
                ))}
              </div>

              {/* Main content grid */}
              <div className="mt-3 grid grid-cols-5 gap-2.5">
                {/* Sidebar */}
                <div className="col-span-1 space-y-2">
                  {['Services', 'Alerts', 'Runbooks', 'Reports', 'Settings'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/5 px-2 py-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="truncate text-[9px] text-white/40">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Main area */}
                <div className="col-span-4 space-y-2.5">
                  {/* Topology */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] text-white/50">Service Topology</span>
                      <span className="rounded-md bg-white/10 px-2 py-0.5 text-[9px] text-white/40">Live graph</span>
                    </div>
                    <div className="flex items-end gap-1 h-10">
                      {[3, 6, 4, 8, 5, 9, 7, 6, 8, 10, 7, 9].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm opacity-70"
                          style={{
                            height: `${h * 10}%`,
                            background: h > 7 ? 'rgba(217,255,53,0.6)' : 'rgba(255,255,255,0.15)',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Incident & AI row */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="rounded-xl border border-red-400/25 bg-red-950/20 p-3">
                      <p className="text-[10px] text-red-300/80">P1 Incident</p>
                      <p className="mt-1 text-[11px] font-medium text-white/80">Edge Router — Policy Drift</p>
                      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-2/3 rounded-full bg-red-400/60" />
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#D9FF35]/25 bg-[#D9FF35]/8 p-3">
                      <p className="text-[10px] text-[#D9FF35]/70">AI Root Cause</p>
                      <p className="mt-1 text-[11px] font-medium text-[#eaff9b]">BGP route leak → 3 downstream services</p>
                      <div className="mt-2 flex gap-1">
                        <span className="rounded bg-[#D9FF35]/20 px-1.5 py-0.5 text-[8px] text-[#D9FF35]">Confidence 94%</span>
                      </div>
                    </div>
                  </div>

                  {/* Alert timeline */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] text-white/50">Alert Deduplication</span>
                      <span className="text-[9px] text-[#D9FF35]">↓ 65% noise</span>
                    </div>
                    <div className="space-y-1">
                      {[
                        { w: '90%', c: 'bg-white/10', label: 'Raw alerts' },
                        { w: '32%', c: 'bg-[#D9FF35]/40', label: 'Actionable' },
                      ].map(({ w, c, label }) => (
                        <div key={label} className="flex items-center gap-2">
                          <div className="w-14 text-[9px] text-white/30">{label}</div>
                          <div className="flex-1 rounded-full bg-white/5">
                            <div className={`h-2 rounded-full ${c}`} style={{ width: w }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges strip */}
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#E4E4E0] pt-8">
          <p className="text-xs font-medium text-[#999] uppercase tracking-wider">Enterprise Ready</p>
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-1.5 text-sm text-[#666]">
              <Shield className="h-3.5 w-3.5 text-[#b8d900]" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
