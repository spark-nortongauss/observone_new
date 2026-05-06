import { BellOff, TrendingUp, GitBranch, ClipboardList } from 'lucide-react';

const items = [
  {
    icon: BellOff,
    tag: 'Signal-to-noise crisis',
    title: 'Alert Storm Overload',
    description: 'Thousands of duplicate, low-fidelity alerts overwhelm teams — hiding the real outage signal and delaying response by critical minutes.',
  },
  {
    icon: TrendingUp,
    tag: 'Escalation fatigue',
    title: 'Low Confidence Escalations',
    description: 'Without accurate root cause context, teams escalate too early or too late, burning engineering hours and eroding stakeholder trust.',
  },
  {
    icon: GitBranch,
    tag: 'Fragmented tooling',
    title: 'Disconnected NOC / SOC Workflows',
    description: 'Siloed teams operating across disparate tools slow handoffs, create accountability gaps, and prevent effective cross-domain correlation.',
  },
  {
    icon: ClipboardList,
    tag: 'Operational drag',
    title: 'Manual Triage & Enrichment',
    description: 'Analysts spend up to 40% of their incident cycle on repetitive classification and enrichment — work that should be automated.',
  },
];

export default function PainPointsSection() {
  return (
    <section className="section-divider bg-[#F8F8F6]">
      <div className="section-shell section-pad">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="badge mb-4">The Problem</p>
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#0a0a0a] md:text-[40px]">
            Why traditional monitoring breaks during critical incidents
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            Modern infrastructure has outpaced the tooling designed to monitor it. The result: teams fighting tools instead of fixing problems.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, tag, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#E4E4E0] bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-[#ccc] hover:shadow-elevated"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 transition group-hover:bg-red-100">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-red-400">{tag}</p>
              <p className="mb-2 text-[15px] font-semibold text-[#111]">{title}</p>
              <p className="text-sm leading-relaxed text-[#666]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
