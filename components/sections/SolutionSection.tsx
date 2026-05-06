import { Database, Brain, Cog, BarChart3 } from 'lucide-react';

const pillars = [
  {
    icon: Database,
    number: '01',
    title: 'Telemetry Ingestion',
    description: 'Unified collection of metrics, logs, traces, and events from any source — SNMP, syslog, cloud APIs, or custom agents — normalized in real time.',
    highlight: '500+ integrations',
  },
  {
    icon: Brain,
    number: '02',
    title: 'AI Intelligence',
    description: 'Adaptive ML models correlate events across domains, identify root cause with >90% confidence, and surface actionable context to on-call engineers.',
    highlight: '>90% root cause accuracy',
  },
  {
    icon: Cog,
    number: '03',
    title: 'Automation Engine',
    description: 'Codified runbooks execute auto-remediation workflows triggered by AI decisions — reducing MTTR without requiring manual intervention.',
    highlight: '68% auto-remediation rate',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Business Impact',
    description: 'Translate technical incidents into business impact scores, SLA compliance dashboards, and executive-ready reports that justify operations investment.',
    highlight: 'C-suite visibility',
  },
];

export default function SolutionSection() {
  return (
    <section className="section-divider bg-white">
      <div className="section-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-28">
            <p className="badge mb-4">The Platform</p>
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#0a0a0a] md:text-[40px]">
              Architecture designed for high-stakes operations
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
              Four integrated layers that turn raw infrastructure noise into confident, automated operations — without ripping out existing tooling.
            </p>
            <div className="mt-8 rounded-2xl border border-[#E4E4E0] bg-[#F8F8F6] p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-[#999]">Deployment model</p>
              <div className="mt-3 space-y-2 text-sm text-[#444]">
                {['SaaS or private cloud deploy', 'Weeks to first value', 'No forklift of existing tools'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b8d900]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, number, title, description, highlight }) => (
              <div
                key={title}
                className="group panel p-6 transition hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F8F6] transition group-hover:bg-[#D9FF35]/15">
                    <Icon className="h-5 w-5 text-[#444] transition group-hover:text-[#6b7c00]" />
                  </div>
                  <span className="font-mono text-xs text-[#ccc]">{number}</span>
                </div>
                <div className="mb-2 h-px w-full bg-gradient-to-r from-[#D9FF35] to-transparent" />
                <p className="mt-3 text-[15px] font-semibold text-[#111]">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#666]">{description}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#F4F4F2] px-2.5 py-1 text-[11px] font-medium text-[#555]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b8d900]" />
                  {highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
