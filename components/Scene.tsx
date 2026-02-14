'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { Suspense, useRef, useState } from 'react';
import NeuralParticles from './NeuralParticles';
import FloatingGeometries from './FloatingGeometries';
import InteractiveHotspot from './InteractiveHotspot';

export default function Scene() {
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);

  return (
    <div className="w-full h-full">
      <Canvas
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        
        {/* Cinematic Dark Lighting */}
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#4a90e2" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#e24a90" />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow
          color="#ffffff"
        />

        {/* 3D Content */}
        <Suspense fallback={null}>
          <Physics gravity={[0, 0, 0]}>
            {/* Neural Particle System */}
            <NeuralParticles />
            
            {/* Floating Geometric Objects */}
            <FloatingGeometries />
            
            {/* Interactive Hotspots - placed on floating objects */}
            <InteractiveHotspot 
              position={[-3, 2, 0]} 
              id={1}
              onClick={() => setSelectedHotspot(1)}
            />
            <InteractiveHotspot 
              position={[3, -1, 0]} 
              id={2}
              onClick={() => setSelectedHotspot(2)}
            />
            <InteractiveHotspot 
              position={[0, 0, -2]} 
              id={3}
              onClick={() => setSelectedHotspot(3)}
            />
          </Physics>
        </Suspense>

        {/* Camera Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.5}
          panSpeed={0.5}
          rotateSpeed={0.3}
          minDistance={3}
          maxDistance={20}
        />
      </Canvas>

      {/* Modal Overlay */}
      {selectedHotspot !== null && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 animate-fade-in">
          <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-2xl max-w-2xl w-full mx-4 p-8 relative">
            <button
              onClick={() => setSelectedHotspot(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Hotspot {selectedHotspot}
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            <button
              onClick={() => setSelectedHotspot(null)}
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
