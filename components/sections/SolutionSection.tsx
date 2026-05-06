import { Database, Brain, Cog, BarChart3 } from 'lucide-react';
import Reveal from '../animations/Reveal';

const pillars = [
  {
    icon: Database,
    number: '01',
    title: 'Unified Telemetry Fabric',
    description:
      'Stream metrics, logs, traces and events from any source — SNMP, syslog, cloud APIs, OT protocols — and normalize them into one semantic model in real time.',
    highlight: '500+ native integrations',
  },
  {
    icon: Brain,
    number: '02',
    title: 'AI Incident Intelligence',
    description:
      'Adaptive ML models learn your topology, correlate signals across domains, and surface root cause with confidence scoring — no rules to maintain.',
    highlight: '>90% root cause accuracy',
  },
  {
    icon: Cog,
    number: '03',
    title: 'Closed-Loop Automation',
    description:
      'Codified runbooks execute remediation triggered by AI decisions — with human-in-the-loop approval, full audit, and one-click rollback.',
    highlight: '68% auto-resolve rate',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Business Impact Layer',
    description:
      'Translate every incident into SLA exposure, customer impact and dollar cost — giving leadership the operational visibility they actually want.',
    highlight: 'C-suite visibility',
  },
];

export default function SolutionSection() {
  return (
    <section className="section-divider bg-white" aria-labelledby="solution-heading">
      <div className="section-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:items-start">
          <Reveal stagger={0.06} className="lg:sticky lg:top-28">
            <p data-reveal-child className="badge mb-4">The Platform</p>
            <h2 id="solution-heading" data-reveal-child className="h-section">
              One platform. Four layers. Built for high-stakes operations.
            </h2>
            <p data-reveal-child className="mt-4 text-[15px] leading-relaxed text-[#666]">
              Designed by operators, for operators. ObservOne integrates with the tools you already
              run — no rip-and-replace required — and delivers measurable outcomes from week one.
            </p>
            <div data-reveal-child className="mt-8 rounded-2xl border border-[#E4E4E0] bg-[#F8F8F6] p-5">
              <p className="eyebrow">Deployment model</p>
              <div className="mt-3 space-y-2 text-sm text-[#444]">
                {[
                  'SaaS, private cloud or air-gapped',
                  'Production value in 4–6 weeks',
                  'No forklift of existing tools',
                  'Outcome-based pricing available',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b8d900]" aria-hidden />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal stagger={0.1} className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, number, title, description, highlight }) => (
              <article
                key={title}
                data-reveal-child
                className="group panel p-6 transition duration-500 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F8F6] transition group-hover:bg-[#D9FF35]/15">
                    <Icon className="h-5 w-5 text-[#444] transition group-hover:text-[#6b7c00]" aria-hidden />
                  </div>
                  <span className="font-mono text-xs text-[#ccc]">{number}</span>
                </div>
                <div className="mb-3 h-px w-full bg-gradient-to-r from-[#D9FF35] to-transparent" />
                <h3 className="text-[15px] font-semibold text-[#111]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666]">{description}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#F4F4F2] px-2.5 py-1 text-[11px] font-medium text-[#555]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b8d900]" aria-hidden />
                  {highlight}
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
