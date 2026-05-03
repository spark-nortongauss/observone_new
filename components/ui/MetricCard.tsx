import AnimatedCounter from './AnimatedCounter';
export default function MetricCard({ value, label }: { value: number; label: string }) {
  return <div className='panel p-5'><div className='text-3xl font-semibold text-[#89a900]'><AnimatedCounter end={value} /></div><p className='mt-1 text-sm'>{label}</p></div>;
}
