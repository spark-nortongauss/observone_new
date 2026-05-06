import { Radio, Server, Building2, Truck, Factory } from 'lucide-react';

const industries = [
  {
    icon: Radio,
    title: 'Telecom & ISP',
    description: 'Maintain network SLAs across millions of subscribers with AI-driven fault isolation and automated restorations.',
    highlights: ['BGP & routing intelligence', 'Subscriber impact scoring', 'Automated SLA reporting'],
  },
  {
    icon: Server,
    title: 'Data Centers',
    description: 'Correlate power, cooling, compute, and network events to prevent cascading failures before they impact tenants.',
    highlights: ['Cross-layer correlation', 'Capacity forecasting', 'Tenant SLA dashboards'],
  },
  {
    icon: Building2,
    title: 'Smart Buildings',
    description: 'Unify BMS, HVAC, access control, and network telemetry to deliver predictive maintenance at scale.',
    highlights: ['OT/IT convergence', 'Predictive maintenance', 'Energy optimization'],
  },
  {
    icon: Truck,
    title: 'Transportation',
    description: 'Ensure high availability of dispatch, ticketing, and safety systems with real-time operational intelligence.',
    highlights: ['Safety-critical uptime', 'Multi-site topology', 'Incident priority by route'],
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Minimize unplanned downtime on production lines by correlating SCADA, OT, and IT infrastructure signals.',
    highlights: ['OT protocol support', 'Production impact scoring', 'Shift-aware alerting'],
  },
];

export default function IndustriesSection() {
  return (
    <section className="section-divider bg-white">
      <div className="section-shell section-pad">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="badge mb-4">Industries</p>
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#0a0a0a] md:text-[40px]">
            Built for complex infrastructure verticals
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            ObservOne ships with domain-specific models, integrations, and runbooks for the industries where uptime is non-negotiable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {industries.map(({ icon: Icon, title, description, highlights }) => (
            <div
              key={title}
              className="group panel flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F8F6] transition group-hover:bg-[#D9FF35]/15">
                <Icon className="h-5 w-5 text-[#555] transition group-hover:text-[#6b7c00]" />
              </div>
              <p className="text-[15px] font-semibold text-[#111]">{title}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#666]">{description}</p>
              <ul className="mt-4 space-y-1.5 border-t border-[#E4E4E0] pt-4">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-[#888]">
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b8d900]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
