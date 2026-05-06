import { Check, X, Minus } from 'lucide-react';

const rows = [
  { capability: 'AI-powered root cause analysis', traditional: false, observone: true },
  { capability: 'Cross-domain telemetry correlation', traditional: false, observone: true },
  { capability: 'Automated runbook execution', traditional: 'partial', observone: true },
  { capability: 'Executive business impact dashboards', traditional: 'partial', observone: true },
  { capability: 'Real-time alert deduplication (>60%)', traditional: false, observone: true },
  { capability: 'Confidence-scored incident triage', traditional: false, observone: true },
  { capability: 'Multi-domain topology graph', traditional: false, observone: true },
  { capability: 'SLA compliance automation', traditional: 'partial', observone: true },
];

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-[#6b9900]" />;
  if (value === false) return <X className="mx-auto h-4 w-4 text-[#bbb]" />;
  return <Minus className="mx-auto h-4 w-4 text-[#ccc]" />;
}

export default function ComparisonSection() {
  return (
    <section className="section-divider bg-[#F8F8F6]">
      <div className="section-shell section-pad">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="badge mb-4">Why ObservOne</p>
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#0a0a0a] md:text-[40px]">
            Beyond traditional monitoring
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            Legacy tools were designed for simpler infrastructure and human-in-the-loop workflows. ObservOne is built for the pace and complexity of modern operations.
          </p>
        </div>

        {/* Table */}
        <div className="panel overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_160px_160px] border-b border-[#E4E4E0] bg-[#F8F8F6]">
            <div className="p-5 text-sm font-medium text-[#555]">Capability</div>
            <div className="border-l border-[#E4E4E0] p-5 text-center">
              <p className="text-sm font-medium text-[#999]">Traditional Tools</p>
              <p className="text-xs text-[#bbb]">Point solutions, legacy APM</p>
            </div>
            <div className="border-l border-[#E4E4E0] bg-[#D9FF35]/5 p-5 text-center">
              <div className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-md bg-[#0a0a0a] text-[9px] font-bold text-[#D9FF35]">
                O1
              </div>
              <p className="text-sm font-semibold text-[#111]">ObservOne</p>
              <p className="text-xs text-[#888]">AI operations platform</p>
            </div>
          </div>

          {rows.map(({ capability, traditional, observone }, i) => (
            <div
              key={capability}
              className={`grid grid-cols-[1fr_160px_160px] border-b border-[#E4E4E0] transition hover:bg-[#F4F4F2] ${
                i === rows.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <div className="p-5 text-sm text-[#333]">{capability}</div>
              <div className="flex items-center justify-center border-l border-[#E4E4E0] p-5">
                <CellIcon value={traditional} />
              </div>
              <div className="flex items-center justify-center border-l border-[#E4E4E0] bg-[#D9FF35]/5 p-5">
                <CellIcon value={observone} />
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="flex items-center gap-5 border-t border-[#E4E4E0] bg-[#F8F8F6] px-5 py-3">
            <div className="flex items-center gap-1.5 text-xs text-[#888]">
              <Check className="h-3 w-3 text-[#6b9900]" /> Fully supported
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#888]">
              <Minus className="h-3 w-3 text-[#ccc]" /> Partial / limited
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#888]">
              <X className="h-3 w-3 text-[#bbb]" /> Not available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
