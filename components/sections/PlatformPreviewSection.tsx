'use client';
import { useState } from 'react';
import { Activity, AlertTriangle, Bot, TrendingUp } from 'lucide-react';
import Reveal from '../animations/Reveal';

const tabs = [
  {
    id: 'ops',
    label: 'Operations Command',
    icon: Activity,
    description:
      'Unified NOC view — topology health, active incidents, and SLA status across every infrastructure domain in a single pane of glass.',
  },
  {
    id: 'intel',
    label: 'Incident Intelligence',
    icon: AlertTriangle,
    description:
      'Confidence-scored root cause, blast radius mapping and historical correlation — surfaced in seconds, not hours.',
  },
  {
    id: 'auto',
    label: 'Automation Center',
    icon: Bot,
    description:
      'Visual runbook builder with policy-gated auto-execution — let AI act on what it knows, escalate everything else.',
  },
  {
    id: 'exec',
    label: 'Executive Insights',
    icon: TrendingUp,
    description:
      'Board-ready dashboards: SLA compliance, business impact, cost of downtime avoided, operational efficiency trends.',
  },
];

type TabId = 'ops' | 'intel' | 'auto' | 'exec';

const mockContent: Record<TabId, React.ReactNode> = {
  ops: (
    <div className="grid h-full grid-cols-12 gap-3">
      {/* Sidebar nav */}
      <div className="col-span-2 space-y-1.5">
        {['Overview', 'Topology', 'Alerts', 'SLAs', 'Reports'].map((item, i) => (
          <div
            key={item}
            className={`rounded-lg px-2.5 py-2 text-[10px] ${i === 0 ? 'bg-[#D9FF35]/15 text-[#D9FF35]' : 'text-white/40 hover:bg-white/5'}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="col-span-10 space-y-3">
        {/* KPIs */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { l: 'Overall SLA', v: '99.95%', c: 'text-[#D9FF35]' },
            { l: 'P1 Incidents', v: '3 active', c: 'text-red-400' },
            { l: 'MTTR (avg)', v: '43 min', c: 'text-white' },
            { l: 'Auto-resolved', v: '68%', c: 'text-[#D9FF35]' },
          ].map(({ l, v, c }) => (
            <div key={l} className="rounded-xl border border-white/8 bg-white/5 p-3">
              <p className="text-[10px] text-white/40">{l}</p>
              <p className={`mt-1 text-base font-semibold ${c}`}>{v}</p>
            </div>
          ))}
        </div>

        {/* Chart + panel */}
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 rounded-xl border border-white/8 bg-white/5 p-4">
            <p className="mb-2 text-[10px] text-white/40">Service Health — Last 24h</p>
            <div className="flex items-end gap-1 h-16">
              {[6, 8, 5, 9, 7, 10, 6, 8, 9, 5, 8, 10, 7, 9, 8, 6, 9, 10, 8, 7].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h * 10}%`,
                    background: h < 6 ? 'rgba(248,113,113,0.5)' : h > 8 ? 'rgba(217,255,53,0.5)' : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/8 bg-white/5 p-4">
            <p className="mb-2 text-[10px] text-white/40">Alert Distribution</p>
            {[['P1', '3', 'bg-red-400'], ['P2', '12', 'bg-orange-400'], ['P3', '47', 'bg-yellow-400']].map(([p, n, c]) => (
              <div key={p} className="mb-1.5 flex items-center gap-2">
                <span className="w-4 text-[10px] text-white/40">{p}</span>
                <div className="flex-1 rounded-full bg-white/5">
                  <div className={`h-1.5 rounded-full ${c} opacity-70`} style={{ width: `${Number(n) * 1.5}%` }} />
                </div>
                <span className="text-[10px] text-white/50">{n}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Incident list */}
        <div className="rounded-xl border border-white/8 bg-white/5 p-4">
          <p className="mb-2 text-[10px] text-white/40">Active Incidents</p>
          <div className="space-y-1.5">
            {[
              { sev: 'P1', name: 'Edge Router BGP Flap — AS 64512', age: '12m', status: 'AI analyzing' },
              { sev: 'P2', name: 'DNS Latency Spike — Regional Zone B', age: '34m', status: 'Auto-mitigated' },
            ].map(({ sev, name, age, status }) => (
              <div key={name} className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2">
                <span className={`text-[10px] font-bold ${sev === 'P1' ? 'text-red-400' : 'text-orange-400'}`}>{sev}</span>
                <span className="flex-1 text-[11px] text-white/70">{name}</span>
                <span className="text-[10px] text-white/30">{age}</span>
                <span className="rounded bg-[#D9FF35]/15 px-1.5 py-0.5 text-[9px] text-[#D9FF35]">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),

  intel: (
    <div className="space-y-3 h-full">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-red-400/20 bg-red-950/20 p-4">
          <p className="text-[10px] text-red-300/60">Root Cause Analysis</p>
          <p className="mt-1 text-sm font-medium text-white/80">BGP route leak on core-edge-01</p>
          <div className="mt-2 flex gap-2">
            <span className="rounded bg-[#D9FF35]/15 px-2 py-0.5 text-[10px] text-[#D9FF35]">Confidence: 94%</span>
          </div>
          <div className="mt-3 space-y-1">
            {['AS path anomaly detected', 'Downstream BGP peer loss', '3 services affected'].map((e) => (
              <div key={e} className="flex items-center gap-1.5 text-[11px] text-white/50">
                <div className="h-1 w-1 rounded-full bg-red-400" />{e}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/5 p-4">
          <p className="text-[10px] text-white/40">Blast Radius</p>
          <p className="mt-1 text-sm font-medium text-white/80">3 downstream services</p>
          <div className="mt-3 space-y-1.5">
            {['API Gateway', 'CDN Edge PoP', 'Payments Route'].map((s) => (
              <div key={s} className="flex items-center justify-between rounded bg-white/5 px-2 py-1">
                <span className="text-[10px] text-white/60">{s}</span>
                <span className="text-[9px] text-red-400">Degraded</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-[#D9FF35]/20 bg-[#D9FF35]/5 p-4">
        <p className="text-[10px] text-[#D9FF35]/60">AI Recommendation</p>
        <p className="mt-1 text-sm text-white/80">Withdraw affected route advertisement on core-edge-01 and trigger BGP session reset with peer AS 65100. Estimated resolution: 8 minutes.</p>
        <button className="mt-3 rounded-lg bg-[#D9FF35] px-3 py-1.5 text-[11px] font-semibold text-black">Execute Runbook</button>
      </div>
    </div>
  ),

  auto: (
    <div className="space-y-3 h-full">
      <div className="grid grid-cols-3 gap-2">
        {[{ l: 'Runbooks', v: '142', s: 'active' }, { l: 'Executions today', v: '38', s: 'actions' }, { l: 'Success rate', v: '97.4%', s: 'overall' }].map(({ l, v, s }) => (
          <div key={l} className="rounded-xl border border-white/8 bg-white/5 p-3">
            <p className="text-[10px] text-white/40">{l}</p>
            <p className="mt-1 text-lg font-semibold text-[#D9FF35]">{v}</p>
            <p className="text-[10px] text-white/30">{s}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-white/8 bg-white/5 p-4">
        <p className="mb-3 text-[10px] text-white/40">Recent Executions</p>
        <div className="space-y-2">
          {[
            { name: 'BGP Session Reset', trigger: 'AI auto', status: 'Completed', t: '2m ago' },
            { name: 'DNS Cache Flush', trigger: 'AI auto', status: 'Completed', t: '18m ago' },
            { name: 'Failover to DR-West', trigger: 'Manual', status: 'Approved', t: '1h ago' },
          ].map(({ name, trigger, status, t }) => (
            <div key={name} className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#D9FF35]" />
              <span className="flex-1 text-[11px] text-white/70">{name}</span>
              <span className="text-[10px] text-white/30">{trigger}</span>
              <span className="text-[10px] text-white/30">{t}</span>
              <span className="rounded bg-[#D9FF35]/15 px-1.5 py-0.5 text-[9px] text-[#D9FF35]">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

  exec: (
    <div className="space-y-3 h-full">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/8 bg-white/5 p-4">
          <p className="text-[10px] text-white/40">SLA Compliance — Q2 2026</p>
          <p className="mt-1 text-3xl font-semibold text-[#D9FF35]">99.95%</p>
          <p className="text-[11px] text-white/40">Target: 99.9% · Exceeded by 0.05%</p>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[99.95%] rounded-full bg-[#D9FF35]" />
          </div>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/5 p-4">
          <p className="text-[10px] text-white/40">Cost of Downtime Avoided</p>
          <p className="mt-1 text-3xl font-semibold text-white">$4.2M</p>
          <p className="text-[11px] text-white/40">Estimated savings this quarter</p>
          <div className="mt-3 flex items-center gap-1 text-[11px] text-[#D9FF35]">
            <span>↑ 18% vs last quarter</span>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-white/8 bg-white/5 p-4">
        <p className="mb-2 text-[10px] text-white/40">Operational Efficiency Trend</p>
        <div className="flex items-end gap-1.5 h-12">
          {[40, 52, 58, 61, 68, 72, 75, 80, 82, 85, 88, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{ height: `${h}%`, background: 'rgba(217,255,53,0.4)' }}
            />
          ))}
        </div>
        <p className="mt-1 text-right text-[10px] text-[#D9FF35]">+124% improvement over 12 months</p>
      </div>
    </div>
  ),
};

export default function PlatformPreviewSection() {
  const [activeTab, setActiveTab] = useState<TabId>('ops');
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section
      id="preview"
      className="section-divider bg-[#F8F8F6]"
      aria-labelledby="preview-heading"
    >
      <div className="section-shell section-pad">
        <Reveal stagger={0.06}>
          <div className="mb-10 max-w-2xl">
            <p data-reveal-child className="badge mb-4">Platform Preview</p>
            <h2 id="preview-heading" data-reveal-child className="h-section">
              Purpose-built for operations teams.
            </h2>
            <p data-reveal-child className="mt-4 text-[15px] leading-relaxed text-[#666]">
              {current.description}
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label="Platform views">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              aria-controls={`panel-${id}`}
              onClick={() => setActiveTab(id as TabId)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                activeTab === id
                  ? 'bg-[#0a0a0a] text-white shadow-elevated'
                  : 'border border-[#E4E4E0] bg-white text-[#555] hover:border-[#ccc] hover:bg-[#F4F4F2]'
              }`}
            >
              <Icon className="h-4 w-4 opacity-70" aria-hidden />
              {label}
            </button>
          ))}
        </div>

        {/* Mock UI */}
        <div className="dark-panel mesh-bg overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400/50" />
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/30">
              <span>app.observone.io / {current.label.toLowerCase().replace(' ', '-')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#D9FF35]" />
              <span className="text-[11px] text-[#D9FF35]">Live</span>
            </div>
          </div>

          <div
            className="p-5"
            style={{ minHeight: '320px' }}
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            {mockContent[activeTab]}
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-[#999]">
          Simulated UI — actual product data and layout may vary by configuration.
        </p>
      </div>
    </section>
  );
}
