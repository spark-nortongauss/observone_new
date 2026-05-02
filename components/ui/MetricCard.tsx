import AnimatedCounter from './AnimatedCounter';
export default function MetricCard({value,label}:{value:string;label:string}){return <div className='section-card p-5'><div className='text-3xl font-semibold text-lime-600'><AnimatedCounter value={value}/></div><p className='text-sm mt-1'>{label}</p></div>}
