import { Lock, FileCheck, Code2, Users } from 'lucide-react';

const integrations = [
  'Prometheus', 'Grafana', 'Datadog', 'PagerDuty', 'ServiceNow',
  'Splunk', 'Elastic', 'AWS CloudWatch', 'Azure Monitor', 'Kafka',
  'Ansible', 'Terraform', 'Kubernetes', 'Zabbix', 'Nagios',
];

const certifications = [
  { label: 'SOC 2 Type II', sub: 'Certified' },
  { label: 'ISO 27001', sub: 'Certified' },
  { label: 'GDPR', sub: 'Compliant' },
  { label: 'FedRAMP', sub: 'Authorized' },
  { label: 'HIPAA', sub: 'Ready' },
];

const securityFeatures = [
  {
    icon: Lock,
    title: 'Role-Based Access Control',
    description: 'Fine-grained RBAC with SSO/SAML support, MFA enforcement, and full session audit trails for every user action.',
  },
  {
    icon: FileCheck,
    title: 'Audit-Ready Workflows',
    description: 'Immutable event logs, change attribution, and compliance exports designed for regulatory audit requirements.',
  },
  {
    icon: Code2,
    title: 'API-First Architecture',
    description: 'Every capability is accessible via REST and GraphQL APIs with OpenAPI documentation and webhook support.',
  },
  {
    icon: Users,
    title: 'Multi-Tenant Design',
    description: 'Isolated data tenancy, per-customer encryption keys, and flexible deployment topology for enterprise environments.',
  },
];

export default function TrustSection() {
  return (
    <section className="section-divider bg-white">
      <div className="section-shell section-pad">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="badge mb-4">Enterprise Ready</p>
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#0a0a0a] md:text-[40px]">
            Built for security, compliance, and integration
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            ObservOne meets the security and compliance requirements of the world&rsquo;s most regulated infrastructure operators.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Security features */}
          <div>
            <p className="mb-5 text-sm font-medium text-[#999] uppercase tracking-wider">Security &amp; Compliance</p>
            <div className="space-y-4">
              {securityFeatures.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#E4E4E0] bg-[#F8F8F6]">
                    <Icon className="h-5 w-5 text-[#555]" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#111]">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#666]">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8 rounded-2xl border border-[#E4E4E0] bg-[#F8F8F6] p-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#999]">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map(({ label, sub }) => (
                  <div key={label} className="rounded-xl border border-[#E4E4E0] bg-white px-3 py-2 text-center shadow-soft">
                    <p className="text-sm font-semibold text-[#111]">{label}</p>
                    <p className="text-[11px] text-[#888]">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Integrations */}
          <div>
            <p className="mb-5 text-sm font-medium text-[#999] uppercase tracking-wider">Technology Ecosystem</p>
            <div className="flex flex-wrap gap-2">
              {integrations.map((name) => (
                <span
                  key={name}
                  className="rounded-xl border border-[#E4E4E0] bg-[#F8F8F6] px-3 py-2 text-sm text-[#555] transition hover:border-[#ccc] hover:bg-white hover:shadow-soft"
                >
                  {name}
                </span>
              ))}
              <span className="rounded-xl border border-dashed border-[#D4D4D0] px-3 py-2 text-sm text-[#aaa]">
                +485 more
              </span>
            </div>

            <div className="mt-8 rounded-2xl border border-[#E4E4E0] bg-[#F8F8F6] p-5">
              <p className="text-sm font-semibold text-[#111]">Open integration model</p>
              <p className="mt-1 text-sm leading-relaxed text-[#666]">
                Connect any telemetry source via our open collector SDK, REST API, or one of 500+ native integrations. No vendor lock-in.
              </p>
              <a href="#" className="mt-3 inline-flex text-sm font-medium text-[#555] underline underline-offset-2 hover:text-[#111]">
                Browse integration catalog →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
