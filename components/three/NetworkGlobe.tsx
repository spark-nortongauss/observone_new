'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function GlobeCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.18;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.12;
    }
  });

  // Orbiting nodes positioned on the sphere surface
  const nodes = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const count = 22;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 1.05;
      positions.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi),
        ),
      );
    }
    return positions;
  }, []);

  // Connection lines between near nodes
  const linePositions = useMemo(() => {
    const lines: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = nodes[i].distanceTo(nodes[j]);
        if (d < 0.95) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    return new Float32Array(lines);
  }, [nodes]);

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#D9FF35" wireframe transparent opacity={0.25} />
      </mesh>

      {/* Inner solid sphere for depth */}
      <mesh>
        <sphereGeometry args={[0.98, 32, 32]} />
        <meshBasicMaterial color="#0a0a0a" transparent opacity={0.85} />
      </mesh>

      {/* Connection lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#D9FF35" transparent opacity={0.45} />
      </lineSegments>

      {/* Glowing nodes */}
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.025, 12, 12]} />
          <meshBasicMaterial color="#D9FF35" />
        </mesh>
      ))}

      {/* Outer faint ring */}
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <ringGeometry args={[1.35, 1.37, 64]} />
        <meshBasicMaterial color="#D9FF35" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function NetworkGlobe({ className }: { className?: string }) {
  return (
    <div className={`relative aspect-square w-full ${className ?? ''}`} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <GlobeCore />
      </Canvas>
    </div>
  );
}
