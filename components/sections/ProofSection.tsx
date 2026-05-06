import { Quote } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';

const metrics = [
  { value: 65, suffix: '%', label: 'Reduction in alert noise', sub: 'vs. baseline within 30 days' },
  { value: 42, suffix: '%', label: 'Faster mean time to resolve', sub: 'across NOC/SOC operations' },
  { value: 99.95, suffix: '%', label: 'Platform availability SLA', sub: 'guaranteed by contract' },
  { value: 30, suffix: '%', label: 'Fewer P1 escalations', sub: 'AI-guided triage impact' },
];

const testimonials = [
  {
    quote: 'ObservOne cut noise immediately and gave leadership incident confidence in one quarter. Our on-call rotation went from dreaded to manageable.',
    author: 'VP Infrastructure Operations',
    company: 'Global Telecom Operator',
    initials: 'VP',
  },
  {
    quote: 'We consolidated four monitoring tools into one pane of glass. The AI root cause analysis alone saved us $2M in SLA penalties last year.',
    author: 'Director of Network Operations',
    company: 'Tier-1 ISP',
    initials: 'DN',
  },
];

export default function ProofSection() {
  return (
    <section className="section-divider bg-[#0a0a0a] text-white">
      <div className="section-shell section-pad">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="badge-dark mb-4">Proven Outcomes</p>
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight md:text-[40px]">
            Measurable impact from day one
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/50">
            Results measured across enterprise deployments in telecom, ISP, data center, and critical infrastructure sectors.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ value, suffix, label, sub }) => (
            <div key={label} className="bg-white/[0.03] p-8 transition hover:bg-white/[0.05]">
              <p className="text-4xl font-semibold text-[#D9FF35] md:text-5xl">
                <AnimatedCounter end={value} />
                {suffix}
              </p>
              <p className="mt-3 text-[15px] font-medium text-white/80">{label}</p>
              <p className="mt-1 text-[13px] text-white/40">{sub}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {testimonials.map(({ quote, author, company, initials }) => (
            <div
              key={author}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20"
            >
              <Quote className="mb-4 h-5 w-5 text-[#D9FF35]/60" />
              <blockquote className="text-[15px] leading-relaxed text-white/75">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#D9FF35]/15 text-xs font-semibold text-[#D9FF35]">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">{author}</p>
                  <p className="text-xs text-white/40">{company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
