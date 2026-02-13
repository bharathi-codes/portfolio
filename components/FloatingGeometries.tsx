'use client';

import { Float } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

export default function FloatingGeometries() {
  return (
    <>
      {/* Main Central Sphere */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <RigidBody type="dynamic" gravityScale={0} linearDamping={0.5} angularDamping={0.5}>
          <mesh position={[0, 0, 0]} castShadow>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial
              color="#4a90e2"
              metalness={0.8}
              roughness={0.2}
              emissive="#1a50a2"
              emissiveIntensity={0.3}
            />
          </mesh>
        </RigidBody>
      </Float>

      {/* Left Torus */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <RigidBody type="dynamic" gravityScale={0} linearDamping={0.5} angularDamping={0.5}>
          <mesh position={[-3, 2, 0]} castShadow>
            <torusGeometry args={[0.8, 0.3, 16, 32]} />
            <meshStandardMaterial
              color="#e24a90"
              metalness={0.7}
              roughness={0.3}
              emissive="#a21a50"
              emissiveIntensity={0.4}
            />
          </mesh>
        </RigidBody>
      </Float>

      {/* Right Cube */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.6}>
        <RigidBody type="dynamic" gravityScale={0} linearDamping={0.5} angularDamping={0.5}>
          <mesh position={[3, -1, 0]} castShadow>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshStandardMaterial
              color="#90e24a"
              metalness={0.6}
              roughness={0.4}
              emissive="#50a21a"
              emissiveIntensity={0.3}
            />
          </mesh>
        </RigidBody>
      </Float>

      {/* Back Octahedron */}
      <Float speed={1.3} rotationIntensity={0.6} floatIntensity={0.8}>
        <RigidBody type="dynamic" gravityScale={0} linearDamping={0.5} angularDamping={0.5}>
          <mesh position={[0, 0, -2]} castShadow>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#e2904a"
              metalness={0.9}
              roughness={0.1}
              emissive="#a2501a"
              emissiveIntensity={0.5}
            />
          </mesh>
        </RigidBody>
      </Float>

      {/* Additional Smaller Objects */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[2, 3, -1]} castShadow>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#4ae290"
            metalness={0.8}
            roughness={0.2}
            emissive="#1aa250"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={0.9} floatIntensity={0.9}>
        <mesh position={[-2, -2, 1]} castShadow>
          <tetrahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#904ae2"
            metalness={0.7}
            roughness={0.3}
            emissive="#501aa2"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>
    </>
  );
}
