'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface InteractiveHotspotProps {
  position: [number, number, number];
  id: number;
  onClick: () => void;
}

export default function InteractiveHotspot({ position, id, onClick }: InteractiveHotspotProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Animate pulsing effect
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      const scale = 1 + Math.sin(time * 2 + id) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial
        color={hovered ? '#ffffff' : '#ffff00'}
        emissive={hovered ? '#ffff00' : '#ff8800'}
        emissiveIntensity={hovered ? 1 : 0.5}
        transparent
        opacity={hovered ? 0.9 : 0.7}
      />
      
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.4, 0.5, 32]} />
        <meshBasicMaterial
          color="#ffff00"
          transparent
          opacity={hovered ? 0.8 : 0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
    </mesh>
  );
}
