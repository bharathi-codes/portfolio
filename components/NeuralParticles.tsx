'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function NeuralParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  // Generate random particle positions
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Random positions in a spherical volume
      const radius = 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Random colors (blue-ish to pink-ish)
      const colorChoice = Math.random();
      if (colorChoice > 0.5) {
        colors[i3] = 0.3 + Math.random() * 0.3; // R
        colors[i3 + 1] = 0.5 + Math.random() * 0.3; // G
        colors[i3 + 2] = 0.9; // B
      } else {
        colors[i3] = 0.9; // R
        colors[i3 + 1] = 0.3 + Math.random() * 0.3; // G
        colors[i3 + 2] = 0.5 + Math.random() * 0.3; // B
      }
    }

    return { positions, colors };
  }, []);

  // Animate particles
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const time = clock.getElapsedTime();

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Add subtle floating motion
        positions[i3 + 1] += Math.sin(time + i) * 0.001;
        
        // Rotate slowly
        const x = positions[i3];
        const z = positions[i3 + 2];
        const angle = 0.0002;
        positions[i3] = x * Math.cos(angle) - z * Math.sin(angle);
        positions[i3 + 2] = x * Math.sin(angle) + z * Math.cos(angle);
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
