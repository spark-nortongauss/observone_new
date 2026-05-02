'use client';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
export default function NetworkGlobe(){return <div className='h-72'><Canvas camera={{position:[0,0,3]}}><ambientLight intensity={0.8}/><Float speed={1}><Sphere args={[1,32,32]}><meshStandardMaterial wireframe color='#D9FF35'/></Sphere></Float></Canvas></div>}
