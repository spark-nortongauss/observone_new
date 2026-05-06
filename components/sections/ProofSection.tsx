import { Quote } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';
import Reveal from '../animations/Reveal';

const metrics = [
  { value: 65, suffix: '%', label: 'Reduction in alert noise', sub: 'Within 30 days of deployment' },
  { value: 42, suffix: '%', label: 'Faster mean time to resolve', sub: 'Across NOC and SOC operations' },
  { value: 99.95, suffix: '%', label: 'Platform availability SLA', sub: 'Guaranteed by contract' },
  { value: 30, suffix: '%', label: 'Fewer Tier-3 escalations', sub: 'AI-guided triage impact' },
];

const testimonials = [
  {
    quote:
      'ObservOne cut our alert volume in half within three weeks and gave leadership confidence in incident response for the first time. Our on-call rotation went from dreaded to manageable.',
    author: 'VP Infrastructure Operations',
    company: 'Tier-1 Global Telecom',
    initials: 'VP',
  },
  {
    quote:
      'We consolidated four monitoring tools into one source of truth. The AI root cause feature alone saved us $2M in SLA penalties last year — and unlocked board-level reporting we couldn’t produce before.',
    author: 'Director of Network Operations',
    company: 'Regional Tier-1 ISP',
    initials: 'DN',
  },
];

export default function ProofSection() {
  return (
    <section className="section-divider noise-bg bg-[#0a0a0a] text-white" aria-labelledby="proof-heading">
      <div className="section-shell section-pad">
        <Reveal stagger={0.06}>
          <div className="mb-12 max-w-2xl">
            <p data-reveal-child className="badge-dark mb-4">Proven Outcomes</p>
            <h2 id="proof-heading" data-reveal-child className="text-3xl font-semibold leading-[1.12] tracking-tight md:text-[42px]">
              Measurable impact. From quarter one.
            </h2>
            <p data-reveal-child className="mt-4 text-[15px] leading-relaxed text-white/55">
              Outcomes measured across enterprise deployments in telecom, ISP, data center,
              transportation and critical infrastructure sectors.
            </p>
          </div>
        </Reveal>

        <Reveal stagger={0.08} className="grid gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ value, suffix, label, sub }) => (
            <div
              key={label}
              data-reveal-child
              className="bg-white/[0.03] p-8 transition hover:bg-white/[0.05]"
            >
              <p className="text-4xl font-semibold tracking-tight text-[#D9FF35] md:text-5xl">
                <AnimatedCounter end={value} />
                {suffix}
              </p>
              <p className="mt-3 text-[15px] font-medium text-white/85">{label}</p>
              <p className="mt-1 text-[13px] text-white/40">{sub}</p>
            </div>
          ))}
        </Reveal>

        <Reveal stagger={0.1} className="mt-8 grid gap-4 md:grid-cols-2">
          {testimonials.map(({ quote, author, company, initials }) => (
            <figure
              key={author}
              data-reveal-child
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20"
            >
              <Quote className="mb-4 h-5 w-5 text-[#D9FF35]/60" aria-hidden />
              <blockquote className="text-[15px] leading-relaxed text-white/80">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#D9FF35]/15 text-xs font-semibold text-[#D9FF35]"
                  aria-hidden
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/85">{author}</p>
                  <p className="text-xs text-white/40">{company}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
