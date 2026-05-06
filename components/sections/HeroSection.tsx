'use client';

import { ArrowRight, Shield, Zap, PlayCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import Reveal from '../animations/Reveal';

const HeroParticles = dynamic(() => import('../three/HeroParticles'), { ssr: false });

const trustBadges = ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'FedRAMP'];

const metrics = [
  { value: '65%', label: 'Less alert noise' },
  { value: '42%', label: 'Faster MTTR' },
  { value: '99.95%', label: 'Platform SLA' },
];

export default function HeroSection() {
  return (
    <section
      id="main"
      className="relative overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      {/* 3D Particle network — full-section */}
      <div className="absolute inset-0 opacity-50">
        <HeroParticles />
      </div>

      {/* Subtle grid + radial fade */}
      <div className="absolute inset-0 grid-pattern-fine opacity-40 pointer-events-none" />
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-[600px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(217,255,53,0.10) 0%, transparent 60%)',
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E4E4E0] to-transparent" />

      <div className="section-shell relative pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-28 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">

          {/* Left: Content */}
          <Reveal stagger={0.08} duration={0.9}>
            <div data-reveal-child className="badge mb-6 w-fit">
              <Zap className="h-3 w-3 text-[#b8d900]" aria-hidden />
              AI Operations Intelligence Platform
            </div>

            <h1
              id="hero-heading"
              data-reveal-child
              className="max-w-[680px] text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-[#0a0a0a] md:text-[52px] lg:text-[64px]"
            >
              Run critical infrastructure with{' '}
              <span className="relative inline-block">
                <span className="relative z-10">AI-guided confidence.</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] rounded-full bg-[#D9FF35]/70 -z-0" />
              </span>
            </h1>

            <p
              data-reveal-child
              className="mt-6 max-w-[540px] text-[17px] leading-[1.65] text-[#555]"
            >
              ObservOne unifies telemetry, pinpoints root cause in seconds, and triggers automated
              remediation across telecom, network, cloud, and physical infrastructure — so your
              teams stop fighting tools and start preventing outages.
            </p>

            <div data-reveal-child className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="btn-primary">
                Request Executive Demo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a href="#preview" className="btn-secondary">
                <PlayCircle className="h-4 w-4 text-[#666]" aria-hidden />
                Watch 90-second tour
              </a>
            </div>

            <div data-reveal-child className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#E4E4E0] pt-8">
              {metrics.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">{value}</p>
                  <p className="mt-0.5 text-xs text-[#888]">{label}</p>
                </div>
              ))}
            </div>

            <p data-reveal-child className="mt-6 text-[13px] text-[#999]">
              Trusted by NOC, SOC, ISP, telecom and infrastructure operations leaders
            </p>
          </Reveal>

          {/* Right: Dashboard */}
          <Reveal direction="left" delay={0.2} duration={1}>
            <div className="dark-panel mesh-bg overflow-hidden shadow-elevated">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden />
                  <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden />
                  <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden />
                </div>
                <span className="text-xs text-white/50">Operations Command Center</span>
                <div className="flex items-center gap-1.5 rounded-full bg-[#D9FF35]/15 px-2.5 py-1">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#D9FF35]" aria-hidden />
                  <span className="text-[11px] font-medium text-[#D9FF35]">Live</span>
                </div>
              </div>

              <div className="p-5">
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

                <div className="mt-3 grid grid-cols-5 gap-2.5">
                  <div className="col-span-1 space-y-2">
                    {['Services', 'Alerts', 'Runbooks', 'Reports', 'Settings'].map((item) => (
                      <div key={item} className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/5 px-2 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/20" aria-hidden />
                        <span className="truncate text-[9px] text-white/40">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="col-span-4 space-y-2.5">
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

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="rounded-xl border border-red-400/25 bg-red-950/20 p-3">
                        <p className="text-[10px] text-red-300/80">P1 Incident</p>
                        <p className="mt-1 text-[11px] font-medium text-white/80">Edge Router — Policy Drift</p>
                        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-2/3 rounded-full bg-red-400/60" />
                        </div>
                      </div>
                      <div className="rounded-xl border border-[#D9FF35]/25 bg-[#D9FF35]/10 p-3">
                        <p className="text-[10px] text-[#D9FF35]/70">AI Root Cause</p>
                        <p className="mt-1 text-[11px] font-medium text-[#eaff9b]">BGP route leak → 3 services</p>
                        <span className="mt-2 inline-block rounded bg-[#D9FF35]/20 px-1.5 py-0.5 text-[8px] text-[#D9FF35]">
                          Confidence 94%
                        </span>
                      </div>
                    </div>

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
          </Reveal>
        </div>

        {/* Trust badges */}
        <Reveal as="div" delay={0.3} stagger={0.05} className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#E4E4E0] pt-8">
          <p data-reveal-child className="eyebrow">Enterprise Ready</p>
          {trustBadges.map((badge) => (
            <div key={badge} data-reveal-child className="flex items-center gap-1.5 text-sm text-[#666]">
              <Shield className="h-3.5 w-3.5 text-[#b8d900]" aria-hidden />
              {badge}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
