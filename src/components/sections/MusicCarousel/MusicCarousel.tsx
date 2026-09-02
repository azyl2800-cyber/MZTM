'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Html, PresentationControls, Environment, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { tracks } from '@/data/tracks'
import Image from 'next/image'

// Komponent pojedynczego elementu karuzeli 3D
function TrackCard({ track, index, total, onClick, isSelected }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const angle = (index / total) * Math.PI * 2
  const radius = 5.5
  const x = Math.sin(angle) * radius
  const z = Math.cos(angle) * radius

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const rotationSpeed = 0.025
      meshRef.current.position.x = Math.sin(angle + clock.getElapsedTime() * rotationSpeed) * radius
      meshRef.current.position.z = Math.cos(angle + clock.getElapsedTime() * rotationSpeed) * radius
      meshRef.current.rotation.y = -angle - clock.getElapsedTime() * rotationSpeed
      
      const targetScale = isSelected ? 1.4 : hovered ? 1.1 : 1
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.05)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh
        ref={meshRef}
        position={[x, 0, z]}
        onClick={() => onClick(index)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial
          color={hovered || isSelected ? '#8B5CF6' : '#1a1a2e'}
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.95}
          emissive={isSelected ? '#8B5CF6' : hovered ? '#4a1a6e' : '#000000'}
          emissiveIntensity={isSelected ? 0.6 : hovered ? 0.3 : 0}
        />
        
        <Html center>
          <div className={`w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
            isSelected 
              ? 'border-4 border-purple-500 shadow-purple-500/80 scale-110' 
              : hovered 
                ? 'border-2 border-purple-400 shadow-purple-500/50 scale-105' 
                : 'border border-purple-500/20 shadow-lg'
          }`}>
            <Image
              src={track.cover}
              alt={track.title}
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-100 via-dark-100/80 to-transparent p-4">
              <p className="text-white text-base font-bold truncate">{track.title}</p>
              <p className="text-purple-300 text-sm truncate">{track.artist}</p>
              <p className="text-gray-500 text-xs mt-0.5">{track.year}</p>
            </div>
            
            <div className="absolute top-3 right-3 bg-purple-500/80 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg shadow-purple-500/30">
              #{index + 1}
            </div>
          </div>
        </Html>
      </mesh>
    </Float>
  )
}

// Scena karuzeli 3D
function CarouselScene({ tracks, onSelect, selectedIndex }) {
  return (
    <>
      {/* Oświetlenie */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#8B5CF6" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#A855F7" />
      <pointLight position={[0, 8, 0]} intensity={0.5} color="#C084FC" />
      <pointLight position={[0, -5, 0]} intensity={0.3} color="#6D28D9" />
      
      {/* Gwiazdy w tle */}
      <Stars radius={20} depth={10} count={2000} factor={4} saturation={0} fade speed={0.5} />
      
      {/* Środowisko */}
      <Environment preset="night" background={false} />
      
      {/* Karty */}
      {tracks.map((track, index) => (
        <TrackCard
          key={track.id}
          track={track}
          index={index}
          total={tracks.length}
          onClick={onSelect}
          isSelected={index === selectedIndex}
        />
      ))}
      
      {/* Centralny pierścień świetlny */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2, 2.5, 64]} />
        <meshStandardMaterial color="#8B5CF6" transparent opacity={0.15} emissive="#8B5CF6" emissiveIntensity={0.3} side={2} />
      </mesh>
      
      {/* Drugi pierścień */}
      <mesh position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0.5, 0]}>
        <ringGeometry args={[3, 3.3, 64]} />
        <meshStandardMaterial color="#A855F7" transparent opacity={0.08} emissive="#A855F7" emissiveIntensity={0.2} side={2} />
      </mesh>
    </>
  )
}

// GŁÓWNY KOMPONENT
export const MusicCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-dark-100 via-dark-200 to-dark-100">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center h-[650px]">
            <div className="text-gray-400 animate-pulse text-lg">⏳ Ładowanie karuzeli 3D...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-dark-100 via-dark-200 to-dark-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
            🎵 3D Karuzela
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Nasze
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Utwory w 3D
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            🖱️ Przeciągnij, aby obracać • Kliknij w okładkę, aby wybrać utwór
          </p>
        </motion.div>

        <div className="relative h-[700px] w-full rounded-3xl overflow-hidden glass-effect shadow-2xl shadow-purple-500/10">
          <Canvas
            camera={{ position: [0, 0.5, 8], fov: 45 }}
            style={{ background: 'transparent' }}
          >
            <PresentationControls
              global
              snap
              cursor={true}
              speed={0.5}
              zoom={0.8}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.5, Math.PI / 1.5]}
            >
              <CarouselScene
                tracks={tracks}
                onSelect={setSelectedIndex}
                selectedIndex={selectedIndex}
              />
            </PresentationControls>
          </Canvas>

          {/* Informacje o wybranym utworze */}
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-dark-100/90 backdrop-blur-xl rounded-2xl px-8 py-4 text-center border border-purple-500/30 min-w-[280px] shadow-2xl shadow-purple-500/20 z-20"
          >
            <p className="text-white font-bold text-lg">
              {tracks[selectedIndex].title}
            </p>
            <p className="text-purple-300 text-sm">
              {tracks[selectedIndex].artist}
            </p>
            <div className="flex justify-center gap-3 mt-2">
              <span className="text-gray-500 text-xs">#{selectedIndex + 1}</span>
              <span className="text-gray-500 text-xs">•</span>
              <span className="text-gray-500 text-xs">{tracks[selectedIndex].year}</span>
            </div>
          </motion.div>

          {/* Nawigacja */}
          <div className="absolute top-6 right-6 flex gap-2 z-20">
            <div className="flex gap-1.5">
              {tracks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === selectedIndex
                      ? 'bg-gradient-to-r from-purple-400 to-pink-500 w-10 shadow-lg shadow-purple-500/50'
                      : 'bg-white/20 w-1.5 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Lewa strzałka */}
          <button
            onClick={() => setSelectedIndex((prev) => (prev - 1 + tracks.length) % tracks.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white transition-all border border-white/10 hover:border-purple-500/30 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Prawa strzałka */}
          <button
            onClick={() => setSelectedIndex((prev) => (prev + 1) % tracks.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white transition-all border border-white/10 hover:border-purple-500/30 flex items-center justify-center group"
          >
            <svg className="w-6 h-6 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Legenda */}
        <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500">
          <span>🔄 Przeciągnij aby obracać</span>
          <span>•</span>
          <span>👆 Kliknij aby wybrać</span>
          <span>•</span>
          <span>✨ Wybrany utwór jest podświetlony</span>
        </div>
      </div>
    </section>
  )
}