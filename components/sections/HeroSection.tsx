export default function HeroSection() {
  return (
    <section className='section-shell section-pad grid-pattern grid gap-10 lg:grid-cols-[1.02fr_1fr]'>
      <div className='pt-6'>
        <p className='inline-flex rounded-full border border-[#E5E5E5] bg-[#F7F7F5] px-3 py-1 text-xs font-medium'>AI Operations Intelligence Platform</p>
        <h1 className='mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] md:text-[42px] lg:text-[64px]'>AI Operations for Critical Infrastructure Teams</h1>
        <p className='mt-5 max-w-xl text-[17px] leading-7 text-[#555]'>Unify telemetry, detect root cause, reduce alert noise, and automate incident response across telecom, network, cloud, and distributed infrastructure.</p>
        <div className='mt-7 flex flex-wrap gap-3'><button className='rounded-xl bg-[#0b0b0b] px-5 py-3 text-sm font-medium text-white'>Request Executive Demo</button><button className='rounded-xl border border-[#E5E5E5] bg-white px-5 py-3 text-sm font-medium'>View Incident Replay</button></div>
        <p className='mt-6 text-sm text-[#666]'>Built for NOC, SOC, ISP, Telecom, and Infrastructure Operations</p>
      </div>
      <div className='dark-panel mesh-bg p-4 md:p-6'>
        <div className='mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-xs'><span>Operations Command Center</span><span className='rounded-full bg-[#D9FF35] px-2 py-0.5 text-black'>Live</span></div>
        <div className='grid grid-cols-12 gap-3 text-xs'>
          <div className='col-span-3 space-y-2 rounded-xl border border-white/10 bg-white/5 p-2'><div className='h-8 rounded bg-white/10'/><div className='h-8 rounded bg-white/10'/><div className='h-16 rounded bg-white/10'/></div>
          <div className='col-span-9 space-y-3'>
            <div className='grid grid-cols-4 gap-2'>{['SLA 99.95%','P1 07','MTTR 43m','AutoFix 68%'].map(x=><div key={x} className='rounded-lg border border-white/10 bg-white/5 p-2'>{x}</div>)}</div>
            <div className='grid grid-cols-2 gap-3'><div className='rounded-xl border border-white/10 bg-white/5 p-3 h-32'>Service Topology Graph<div className='mt-2 h-20 rounded bg-gradient-to-r from-white/10 to-transparent'/></div><div className='rounded-xl border border-white/10 bg-white/5 p-3 h-32'>Incident Timeline<div className='mt-2 h-20 rounded bg-gradient-to-t from-[#D9FF35]/20 to-transparent'/></div></div>
            <div className='grid grid-cols-3 gap-3'><div className='col-span-2 rounded-xl border border-red-400/30 bg-red-950/20 p-3'>Alert Severity Distribution</div><div className='rounded-xl border border-[#D9FF35]/30 bg-[#D9FF35]/10 p-3 text-[#eaff9b]'>AI Root Cause: Edge Router Policy Drift</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
