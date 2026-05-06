import { ArrowRight, Calendar, Play, Shield } from 'lucide-react';
import Reveal from '../animations/Reveal';

const proof = [
  'No commitment required',
  'Live walkthrough on your data',
  'Tailored to your stack & SLAs',
  '30-minute executive session',
];

export default function FinalCTASection() {
  return (
    <section
      id="cta"
      className="section-divider bg-[#F8F8F6]"
      aria-labelledby="cta-heading"
    >
      <div className="section-shell section-pad">
        <Reveal>
          <div className="noise-bg mesh-bg overflow-hidden rounded-3xl border border-white/10">
            <div className="grid gap-10 p-10 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-16 lg:p-16">
              <div>
                <p className="badge-dark mb-5 w-fit">Get Started</p>
                <h2
                  id="cta-heading"
                  className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-white md:text-[44px]"
                >
                  Operate every critical service with AI-guided confidence.
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/55">
                  Deploy in weeks. Unify your infrastructure data. Deliver measurable reliability
                  outcomes that show up on the boardroom dashboard.
                </p>

                <ul className="mt-7 space-y-2.5">
                  {proof.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span
                        className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#D9FF35]/15"
                        aria-hidden
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D9FF35]" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-2 text-xs text-white/30">
                  <Shield className="h-3.5 w-3.5 text-[#D9FF35]/70" aria-hidden />
                  Your data stays yours · NDA-friendly demo environment
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9FF35]" aria-hidden>
                      <Calendar className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-white">Executive Demo</p>
                      <p className="text-xs text-white/45">Custom walkthrough for your team</p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-white/55">
                    A live session tailored to your infrastructure, use cases and stakeholder
                    questions. We&rsquo;ll bring the right people; you bring the priorities.
                  </p>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D9FF35] py-3 text-sm font-semibold text-black transition hover:bg-[#e6ff60] active:scale-[0.98]"
                  >
                    Book Executive Demo
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10"
                      aria-hidden
                    >
                      <Play className="h-5 w-5 text-white/60" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[15px] font-semibold text-white">Platform Tour</p>
                      <p className="text-xs text-white/40">Self-paced · 8 minutes</p>
                    </div>
                    <a
                      href="#"
                      className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
                    >
                      Watch
                    </a>
                  </div>
                </div>

                <p className="text-center text-xs text-white/25">
                  Trusted by operations teams at leading ISPs, telecoms and infrastructure operators.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
