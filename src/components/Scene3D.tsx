'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Text } from '@react-three/drei'
import * as THREE from 'three'

// Main animated sphere
const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
        metalness={0.8}
      />
    </Sphere>
  )
}

// Floating cubes around the sphere
const FloatingCubes = () => {
  const cubesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.rotation.y = state.clock.elapsedTime * 0.1
      cubesRef.current.children.forEach((cube, i) => {
        cube.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5
      })
    }
  })

  return (
    <group ref={cubesRef}>
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 4,
            0,
            Math.sin((i / 8) * Math.PI * 2) * 4,
          ]}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
      ))}
    </group>
  )
}

// Wireframe pyramids
const WireframePyramids = () => {
  const pyramidsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (pyramidsRef.current) {
      pyramidsRef.current.rotation.x = state.clock.elapsedTime * 0.05
      pyramidsRef.current.rotation.z = state.clock.elapsedTime * 0.03
      pyramidsRef.current.children.forEach((pyramid, i) => {
        pyramid.rotation.y = state.clock.elapsedTime * 0.5 + i
      })
    }
  })

  return (
    <group ref={pyramidsRef}>
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 6) * Math.PI * 2) * 8,
            Math.sin((i / 6) * Math.PI * 2) * 2,
            Math.cos((i / 6) * Math.PI * 2) * 3,
          ]}
        >
          <coneGeometry args={[0.8, 1.5, 4]} />
          <meshBasicMaterial color="#10b981" wireframe />
        </mesh>
      ))}
    </group>
  )
}

// Floating toruses
const FloatingToruses = () => {
  const torusesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (torusesRef.current) {
      torusesRef.current.children.forEach((torus, i) => {
        torus.rotation.x = state.clock.elapsedTime * 0.3 + i
        torus.rotation.y = state.clock.elapsedTime * 0.2 + i
        torus.position.y = Math.sin(state.clock.elapsedTime * 0.5 + i * 2) * 1
      })
    }
  })

  return (
    <group ref={torusesRef}>
      {[...Array(4)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 4) * Math.PI * 2) * 6,
            0,
            Math.sin((i / 4) * Math.PI * 2) * 6,
          ]}
        >
          <torusGeometry args={[0.6, 0.2, 16, 100]} />
          <meshStandardMaterial color="#f59e0b" />
        </mesh>
      ))}
    </group>
  )
}

// Particle system
const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null)
  
  // Create particles
  const particleCount = 200
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#60a5fa" size={0.05} sizeAttenuation transparent opacity={0.6} />
    </points>
  )
}

// Animated rings
const AnimatedRings = () => {
  const ringsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, i) => {
        ring.rotation.z = state.clock.elapsedTime * (0.5 + i * 0.2)
        ring.rotation.x = state.clock.elapsedTime * 0.1
      })
    }
  })

  return (
    <group ref={ringsRef}>
      {[...Array(3)].map((_, i) => (
        <mesh
          key={i}
          position={[0, 0, 0]}
          scale={2 + i * 0.5}
        >
          <torusGeometry args={[2, 0.05, 16, 100]} />
          <meshBasicMaterial 
            color={i === 0 ? "#ef4444" : i === 1 ? "#22c55e" : "#a855f7"} 
            transparent 
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

// Floating octahedrons
const FloatingOctahedrons = () => {
  const octahedronsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (octahedronsRef.current) {
      octahedronsRef.current.rotation.y = -state.clock.elapsedTime * 0.08
      octahedronsRef.current.children.forEach((oct, i) => {
        oct.rotation.x = state.clock.elapsedTime * 0.4 + i
        oct.rotation.y = state.clock.elapsedTime * 0.3 + i
        oct.position.y = Math.cos(state.clock.elapsedTime * 0.7 + i * 1.5) * 0.8
      })
    }
  })

  return (
    <group ref={octahedronsRef}>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 5) * Math.PI * 2) * 10,
            Math.sin((i / 5) * Math.PI * 2) * 1,
            Math.sin((i / 5) * Math.PI * 2) * 10,
          ]}
          scale={0.8}
        >
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#ec4899" wireframe />
        </mesh>
      ))}
    </group>
  )
}

interface Scene3DProps {
  className?: string
}

const EnhancedScene3D: React.FC<Scene3DProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[0, 10, -10]} intensity={0.7} color="#10b981" />
        <spotLight position={[15, 15, 15]} angle={0.3} intensity={0.8} color="#f59e0b" />
        
        {/* 3D Elements */}
        <AnimatedSphere />
        <FloatingCubes />
        <WireframePyramids />
        <FloatingToruses />
        <ParticleField />
        <AnimatedRings />
        <FloatingOctahedrons />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

export default EnhancedScene3D