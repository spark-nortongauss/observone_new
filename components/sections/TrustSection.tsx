'use client';
import dynamic from 'next/dynamic';
import { Lock, FileCheck, Code2, Users } from 'lucide-react';
import Reveal from '../animations/Reveal';
import Marquee from '../animations/Marquee';

const NetworkGlobe = dynamic(() => import('../three/NetworkGlobe'), { ssr: false });

const integrations = [
  'Prometheus', 'Grafana', 'Datadog', 'PagerDuty', 'ServiceNow',
  'Splunk', 'Elastic', 'AWS CloudWatch', 'Azure Monitor', 'GCP Monitoring',
  'Kafka', 'Ansible', 'Terraform', 'Kubernetes', 'Zabbix', 'Nagios',
  'Slack', 'Microsoft Teams', 'Jira', 'OpsGenie',
];

const certifications = [
  { label: 'SOC 2', sub: 'Type II Certified' },
  { label: 'ISO 27001', sub: 'Certified' },
  { label: 'GDPR', sub: 'Compliant' },
  { label: 'FedRAMP', sub: 'Authorized' },
  { label: 'HIPAA', sub: 'Ready' },
];

const securityFeatures = [
  {
    icon: Lock,
    title: 'Role-Based Access Control',
    description:
      'Fine-grained RBAC with SSO/SAML, MFA enforcement, and full session audit trails for every action.',
  },
  {
    icon: FileCheck,
    title: 'Audit-Ready Workflows',
    description:
      'Immutable event logs, change attribution and compliance exports designed for regulatory audits.',
  },
  {
    icon: Code2,
    title: 'API-First Architecture',
    description:
      'Every capability is accessible via REST and GraphQL with OpenAPI docs, webhooks and SDK support.',
  },
  {
    icon: Users,
    title: 'Multi-Tenant by Design',
    description:
      'Isolated data tenancy, per-customer encryption keys, and flexible deployment topology for enterprise.',
  },
];

export default function TrustSection() {
  return (
    <section className="section-divider bg-white" aria-labelledby="trust-heading">
      <div className="section-shell section-pad">
        <Reveal stagger={0.06}>
          <div className="mb-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div className="max-w-2xl">
              <p data-reveal-child className="badge mb-4">Enterprise Ready</p>
              <h2 id="trust-heading" data-reveal-child className="h-section">
                Built for security, compliance and integration scale.
              </h2>
              <p data-reveal-child className="mt-4 text-[15px] leading-relaxed text-[#666]">
                ObservOne meets the security, compliance and operational requirements of the
                world&rsquo;s most regulated infrastructure operators — and integrates with the tools
                you already run.
              </p>
            </div>
            <div data-reveal-child className="hidden lg:block">
              <div className="relative mx-auto aspect-square w-full max-w-[280px]">
                <div className="absolute inset-0 rounded-full bg-[#D9FF35]/10 blur-3xl" aria-hidden />
                <NetworkGlobe />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal stagger={0.08}>
            <p data-reveal-child className="eyebrow mb-5">Security &amp; Compliance</p>
            <div data-reveal-child className="space-y-4">
              {securityFeatures.map(({ icon: Icon, title, description }) => (
                <article key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#E4E4E0] bg-[#F8F8F6]">
                    <Icon className="h-5 w-5 text-[#555]" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#111]">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#666]">{description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div data-reveal-child className="mt-8 rounded-2xl border border-[#E4E4E0] bg-[#F8F8F6] p-5">
              <p className="eyebrow mb-3">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map(({ label, sub }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[#E4E4E0] bg-white px-3 py-2 text-center shadow-soft"
                  >
                    <p className="text-sm font-semibold text-[#111]">{label}</p>
                    <p className="text-[11px] text-[#888]">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal stagger={0.08}>
            <p data-reveal-child className="eyebrow mb-5">Technology Ecosystem</p>

            <div data-reveal-child className="rounded-2xl border border-[#E4E4E0] bg-[#F8F8F6] p-5 pb-7">
              <p className="text-sm text-[#666]">
                Stream telemetry from your existing stack via 500+ native integrations or any open
                protocol. No vendor lock-in.
              </p>
              <div className="mt-5 -mx-5">
                <Marquee items={integrations.slice(0, 10)} speed={50} />
                <div className="mt-2">
                  <Marquee items={integrations.slice(10)} speed={40} />
                </div>
              </div>
            </div>

            <div data-reveal-child className="mt-4 rounded-2xl border border-[#E4E4E0] bg-white p-5">
              <p className="text-sm font-semibold text-[#111]">Open integration model</p>
              <p className="mt-1 text-sm leading-relaxed text-[#666]">
                Connect any source via our open collector SDK, REST API, OpenTelemetry,
                or one of 500+ pre-built connectors. Build once, integrate forever.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#555] underline underline-offset-2 transition hover:text-[#111]"
              >
                Browse integration catalog →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
