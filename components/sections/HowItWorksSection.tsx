import { Plug, Filter, Search, CheckCircle2, RefreshCw, ArrowRight } from 'lucide-react';
import Reveal from '../animations/Reveal';

const steps = [
  {
    icon: Plug,
    number: '01',
    title: 'Connect',
    description:
      'Stream telemetry from any source — cloud, on-prem, OT — in minutes via native connectors or open SDK.',
    detail: '500+ connectors',
  },
  {
    icon: Filter,
    number: '02',
    title: 'Normalize',
    description:
      'Signals are deduplicated, enriched, and mapped to a unified topology across vendors and domains.',
    detail: 'Cross-domain correlation',
  },
  {
    icon: Search,
    number: '03',
    title: 'Analyze',
    description:
      'Adaptive ML continuously learns your environment and surfaces root cause with confidence scoring.',
    detail: '>90% accuracy',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Resolve',
    description:
      'AI-suggested or fully automated runbooks execute remediation — with audit trail and one-click rollback.',
    detail: 'Auto or guided',
  },
  {
    icon: RefreshCw,
    number: '05',
    title: 'Learn',
    description:
      'Outcomes feed back into models — every resolved incident sharpens future detection and reduces MTTR.',
    detail: 'Continuous improvement',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section-divider bg-white" aria-labelledby="how-heading">
      <div className="section-shell section-pad">
        <Reveal stagger={0.06}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p data-reveal-child className="badge mb-4">How It Works</p>
              <h2 id="how-heading" data-reveal-child className="h-section">
                From signal chaos to confident operations.
              </h2>
            </div>
            <p data-reveal-child className="max-w-xs text-sm leading-relaxed text-[#888] md:text-right">
              Five integrated stages. No rip-and-replace. Production value in weeks, not quarters.
            </p>
          </div>
        </Reveal>

        <Reveal stagger={0.1} delay={0.1} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, number, title, description, detail }, i) => (
            <div key={title} data-reveal-child className="group relative">
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-4 bg-gradient-to-r from-[#E4E4E0] to-transparent lg:block" aria-hidden />
              )}

              <article className="panel h-full p-6 transition duration-500 hover:-translate-y-1 hover:shadow-elevated">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F8F6] transition group-hover:bg-[#D9FF35]/15">
                    <Icon className="h-5 w-5 text-[#555] transition group-hover:text-[#6b7c00]" aria-hidden />
                  </div>
                  <span className="font-mono text-xs text-[#ccc]">{number}</span>
                </div>

                <h3 className="text-[15px] font-semibold text-[#111]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666]">{description}</p>

                <div className="mt-4 h-0.5 w-full overflow-hidden rounded-full bg-[#F4F4F2]">
                  <div
                    className="h-full rounded-full bg-[#D9FF35] transition-all duration-700"
                    style={{ width: `${(i + 1) * 20}%` }}
                  />
                </div>

                <p className="mt-3 text-[11px] font-medium text-[#999]">{detail}</p>
              </article>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex items-center justify-center">
          <a
            href="#preview"
            className="group flex items-center gap-2 text-sm font-medium text-[#555] transition hover:text-[#111]"
          >
            See a live incident walkthrough
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
