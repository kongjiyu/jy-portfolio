import { useRef, useMemo } from 'react';
import type { FC } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TopographicWave: FC = () => {
  const meshRef = useRef<THREE.Points>(null);
  const mouseWorldPos = useRef(new THREE.Vector3(0, 0, 0));
  
  const positions = useMemo(() => {
    const size = 12;
    const segs = 80;
    const pos = [];
    const s = size / segs;
    
    for (let i = 0; i <= segs; i++) {
      for (let j = 0; j <= segs; j++) {
        const x = (i * s) - (size / 2);
        const y = (j * s) - (size / 2);
        pos.push(x, y, 0);
      }
    }
    return new Float32Array(pos);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const posAttribute = meshRef.current.geometry.getAttribute('position');
    
    // Smoothly interpolate mouse position for fluid peaks
    const targetX = state.mouse.x * 6; // Scale based on viewport
    const targetY = state.mouse.y * 6;
    
    mouseWorldPos.current.x = THREE.MathUtils.lerp(mouseWorldPos.current.x, targetX, 0.1);
    mouseWorldPos.current.y = THREE.MathUtils.lerp(mouseWorldPos.current.y, targetY, 0.1);

    for (let i = 0; i < posAttribute.count; i++) {
      const x = posAttribute.getX(i);
      const y = posAttribute.getY(i);

      // Distance from mouse projection
      const dx = x - mouseWorldPos.current.x;
      const dy = y - mouseWorldPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Stronger proximity effect
      const proximity = Math.exp(-dist * 0.8); 

      // Ambient Wave + Mouse Peak
      const wave = Math.sin(x * 0.4 + time * 0.8) * 0.2 + Math.cos(y * 0.4 + time * 0.5) * 0.2;
      const peak = proximity * 2.5;

      posAttribute.setZ(i, wave + peak);
    }
    
    posAttribute.needsUpdate = true;
    
    // Very subtle slow drift
    meshRef.current.rotation.z = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <group rotation={[-Math.PI / 2.5, 0, 0]}>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.025} 
          color="#ffffff" 
          transparent 
          opacity={0.5} 
          sizeAttenuation 
        />
      </points>
    </group>
  );
};

const TheCore: FC = () => {
  return (
    <div className="core-canvas-container">
      <Canvas camera={{ position: [0, 4, 10], fov: 35 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <TopographicWave />
      </Canvas>
      <div className="wave-overlay text-xs">
        <span>DATA_STREAM_ACTIVE</span>
        <span>PEAK_TRACKING: ENABLED</span>
      </div>
      <style>{`
        .core-canvas-container {
          width: 100%;
          height: 600px;
          cursor: crosshair;
          position: relative;
          background: radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 80%);
        }
        .wave-overlay {
          position: absolute;
          bottom: 40px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 24px;
          color: var(--text-secondary);
          font-family: monospace;
          letter-spacing: 0.2em;
          pointer-events: none;
          opacity: 0.5;
        }
        @media (max-width: 1024px) {
          .core-canvas-container { height: 400px; }
        }
      `}</style>
    </div>
  );
};

export default TheCore;
