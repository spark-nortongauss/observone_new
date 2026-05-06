import { BellOff, TrendingDown, GitBranch, ClipboardList } from 'lucide-react';
import Reveal from '../animations/Reveal';

const items = [
  {
    icon: BellOff,
    tag: 'Signal-to-noise crisis',
    title: 'Alert storms hide the real outage.',
    description:
      'Tens of thousands of duplicate, low-fidelity alerts every day — leaving on-call engineers searching for the actual incident inside the noise.',
    impact: 'Avg. 9 min wasted per alert',
  },
  {
    icon: TrendingDown,
    tag: 'Confidence gap',
    title: 'Escalations without root cause.',
    description:
      'Tier-1 teams escalate too early or too late because they lack confident context, burning expert hours and eroding executive trust in operations.',
    impact: '38% wrong-team escalations',
  },
  {
    icon: GitBranch,
    tag: 'Tool sprawl',
    title: 'NOC and SOC operate in silos.',
    description:
      'Disparate dashboards across network, cloud, security and ITSM block correlation, slow handoffs, and create accountability gaps mid-incident.',
    impact: '7+ tools per responder',
  },
  {
    icon: ClipboardList,
    tag: 'Manual drag',
    title: 'Triage and enrichment is manual.',
    description:
      'Analysts spend up to 40% of every incident on classification, ticket grooming and runbook lookups — repetitive work that should be automated.',
    impact: '40% incident time lost',
  },
];

export default function PainPointsSection() {
  return (
    <section className="section-divider bg-[#F8F8F6]" aria-labelledby="pain-heading">
      <div className="section-shell section-pad">
        <Reveal stagger={0.06}>
          <div className="max-w-2xl">
            <p data-reveal-child className="badge mb-4">The Problem</p>
            <h2
              id="pain-heading"
              data-reveal-child
              className="h-section"
            >
              Modern infrastructure has outpaced traditional monitoring.
            </h2>
            <p data-reveal-child className="mt-4 text-[15px] leading-relaxed text-[#666]">
              The tools designed a decade ago for static, single-domain stacks can&rsquo;t keep pace with
              today&rsquo;s distributed, multi-cloud, multi-vendor reality. The result: teams fight tools
              instead of fixing problems.
            </p>
          </div>
        </Reveal>

        <Reveal stagger={0.1} delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, tag, title, description, impact }) => (
            <article
              key={title}
              data-reveal-child
              className="group rounded-2xl border border-[#E4E4E0] bg-white p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-[#ccc] hover:shadow-elevated"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 transition group-hover:bg-red-100">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-red-400">
                {tag}
              </p>
              <h3 className="mb-2 text-[15px] font-semibold text-[#111]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#666]">{description}</p>
              <p className="mt-4 border-t border-[#F4F4F2] pt-3 font-mono text-[11px] text-[#999]">
                {impact}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
