'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function ParticleField({ count = 1400 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      [0.85, 1.0, 0.21], // brand lime
      [0.42, 0.5, 0.0],
      [1.0, 1.0, 1.0],
    ];

    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) - 5;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
    }
    return { positions, colors };
  }, [count]);

  // Build a sparse "network" of lines between nearest neighbors (one-time)
  const linePositions = useMemo(() => {
    const lines: number[] = [];
    const sample = 60;
    const indices: number[] = [];
    for (let i = 0; i < sample; i++) indices.push(Math.floor(Math.random() * count));
    for (let i = 0; i < indices.length; i++) {
      const a = indices[i];
      let nearest = -1;
      let nearestDist = Infinity;
      for (let j = 0; j < indices.length; j++) {
        if (i === j) continue;
        const b = indices[j];
        const dx = positions[a * 3] - positions[b * 3];
        const dy = positions[a * 3 + 1] - positions[b * 3 + 1];
        const dz = positions[a * 3 + 2] - positions[b * 3 + 2];
        const d = dx * dx + dy * dy + dz * dz;
        if (d < nearestDist) {
          nearestDist = d;
          nearest = b;
        }
      }
      if (nearest >= 0) {
        lines.push(positions[a * 3], positions[a * 3 + 1], positions[a * 3 + 2]);
        lines.push(positions[nearest * 3], positions[nearest * 3 + 1], positions[nearest * 3 + 2]);
      }
    }
    return new Float32Array(lines);
  }, [positions, count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.04;
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.08;
    }
    if (lineRef.current) {
      lineRef.current.rotation.y = t * 0.04;
      lineRef.current.rotation.x = Math.sin(t * 0.1) * 0.08;
    }
  });

  return (
    <group>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#D9FF35" transparent opacity={0.18} />
      </lineSegments>
    </group>
  );
}

export default function HeroParticles({ className }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className ?? ''}`}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
