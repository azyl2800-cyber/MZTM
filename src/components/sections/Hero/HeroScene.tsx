'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, Stars, Float, Plane } from '@react-three/drei';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import * as THREE from 'three';

// Animowana bryła z efektem zniekształcenia
const AnimatedObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const elapsed = clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(elapsed * 0.1) * 0.2;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(elapsed * 0.3) * 0.2;
      time.current = elapsed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#8B5CF6"
          emissive="#4C1D95"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
          distort={0.4}
          speed={0.4}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
};

// Animowane, wirujące cząsteczki
const Particles = () => {
  const count = 1500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#C084FC"
        size={0.04}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};

// Główny komponent sceny
export const HeroScene = () => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-dark-100 to-dark-100 pointer-events-none" />
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
        style={{ background: 'rgba(139, 92, 246, 0.15)' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#8B5CF6" />
        <pointLight position={[-5, -3, 5]} intensity={0.8} color="#4C1D95" />
        <pointLight position={[0, -5, 0]} intensity={0.4} color="#C084FC" />

        <Environment preset="night" background={false} />

        <Stars
          radius={30}
          depth={20}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        <AnimatedObject />
        <Particles />

        {/* Efekt glow/reflection na podłodze */}
        <Plane
          args={[10, 10]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2.2, 0]}
        >
          <meshStandardMaterial
            color="#8B5CF6"
            transparent
            opacity={0.05}
            emissive="#4C1D95"
            emissiveIntensity={0.2}
            metalness={1}
            roughness={0.2}
          />
        </Plane>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.2}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};