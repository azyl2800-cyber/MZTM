'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null)
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.15
    }
  })

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#8B5CF6"
        emissive="#6D28D9"
        emissiveIntensity={0.3}
        roughness={0.1}
        metalness={0.8}
        distort={0.3}
        speed={0.5}
      />
    </Sphere>
  )
}

export const Hero3D = () => {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return null
  }

  return (
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <AnimatedSphere />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}