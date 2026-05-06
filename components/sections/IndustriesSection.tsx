import { Radio, Server, Building2, Truck, Factory } from 'lucide-react';
import Reveal from '../animations/Reveal';

const industries = [
  {
    icon: Radio,
    title: 'Telecom & ISP',
    description:
      'Defend service SLAs across millions of subscribers with AI-driven fault isolation and automated restoration.',
    highlights: ['BGP & routing intelligence', 'Subscriber impact scoring', 'Automated SLA reporting'],
  },
  {
    icon: Server,
    title: 'Data Centers',
    description:
      'Correlate power, cooling, compute and network signals to prevent cascading failures before tenants are impacted.',
    highlights: ['Cross-layer correlation', 'Capacity forecasting', 'Tenant SLA dashboards'],
  },
  {
    icon: Building2,
    title: 'Smart Buildings',
    description:
      'Unify BMS, HVAC, access control and network telemetry to deliver predictive maintenance at portfolio scale.',
    highlights: ['OT / IT convergence', 'Predictive maintenance', 'Energy optimization'],
  },
  {
    icon: Truck,
    title: 'Transportation',
    description:
      'Keep dispatch, ticketing and safety systems available with real-time, route-aware operational intelligence.',
    highlights: ['Safety-critical uptime', 'Multi-site topology', 'Route-aware prioritization'],
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'Minimize unplanned downtime by correlating SCADA, OT and IT signals across plants, lines and shifts.',
    highlights: ['OT protocol support', 'Production impact scoring', 'Shift-aware alerting'],
  },
];

export default function IndustriesSection() {
  return (
    <section className="section-divider bg-white" aria-labelledby="industries-heading">
      <div className="section-shell section-pad">
        <Reveal stagger={0.06}>
          <div className="mb-10 max-w-2xl">
            <p data-reveal-child className="badge mb-4">Industries</p>
            <h2 id="industries-heading" data-reveal-child className="h-section">
              Built for the verticals where uptime is non-negotiable.
            </h2>
            <p data-reveal-child className="mt-4 text-[15px] leading-relaxed text-[#666]">
              Domain-specific models, integrations and runbooks ship out-of-the-box for the
              industries running the world&rsquo;s most critical infrastructure.
            </p>
          </div>
        </Reveal>

        <Reveal stagger={0.08} className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {industries.map(({ icon: Icon, title, description, highlights }) => (
            <article
              key={title}
              data-reveal-child
              className="group panel flex flex-col p-6 transition duration-500 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F8F6] transition group-hover:bg-[#D9FF35]/15">
                <Icon className="h-5 w-5 text-[#555] transition group-hover:text-[#6b7c00]" aria-hidden />
              </div>
              <h3 className="text-[15px] font-semibold text-[#111]">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#666]">{description}</p>
              <ul className="mt-4 space-y-1.5 border-t border-[#E4E4E0] pt-4">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-[#888]">
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b8d900]" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
