import { Plug, Filter, Search, CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Plug,
    number: '01',
    title: 'Connect',
    description: 'Stream telemetry from any source — cloud APIs, on-prem agents, SNMP, syslog, or custom webhooks — in minutes.',
    detail: '500+ native connectors',
  },
  {
    icon: Filter,
    number: '02',
    title: 'Normalize',
    description: 'All signals are enriched, deduplicated, and mapped to a unified semantic model across domains and vendors.',
    detail: 'Cross-domain correlation',
  },
  {
    icon: Search,
    number: '03',
    title: 'Analyze',
    description: 'Adaptive ML continuously learns your topology and baselines to surface root cause with confidence scoring.',
    detail: '>90% root cause accuracy',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Resolve',
    description: 'AI-suggested or fully automated runbooks trigger remediation actions — with full audit trail and rollback capability.',
    detail: 'Automated or guided',
  },
  {
    icon: RefreshCw,
    number: '05',
    title: 'Learn',
    description: 'Outcomes feed back into models — every resolved incident improves future detection, reducing MTTR continuously.',
    detail: 'Continuous improvement loop',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section-divider bg-white">
      <div className="section-shell section-pad">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="badge mb-4">How It Works</p>
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#0a0a0a] md:text-[40px]">
              From signal chaos to confident operations
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#888] md:text-right">
            Five stages. Fully integrated. No rip-and-replace required.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, number, title, description, detail }, i) => (
            <div key={title} className="group relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-4 bg-gradient-to-r from-[#E4E4E0] to-transparent lg:block" />
              )}

              <div className="panel h-full p-6 transition hover:-translate-y-1 hover:shadow-elevated">
                {/* Icon + number */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F8F6] transition group-hover:bg-[#D9FF35]/15">
                    <Icon className="h-5 w-5 text-[#555] transition group-hover:text-[#6b7c00]" />
                  </div>
                  <span className="font-mono text-xs text-[#ccc]">{number}</span>
                </div>

                <p className="text-[15px] font-semibold text-[#111]">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#666]">{description}</p>

                {/* Progress bar */}
                <div className="mt-4 h-0.5 w-full overflow-hidden rounded-full bg-[#F4F4F2]">
                  <div
                    className="h-full rounded-full bg-[#D9FF35] transition-all group-hover:opacity-100"
                    style={{ width: `${(i + 1) * 20}%` }}
                  />
                </div>

                <p className="mt-3 text-[11px] font-medium text-[#999]">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA inline */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-[#555] transition hover:text-[#111]"
          >
            See a live incident walkthrough
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
