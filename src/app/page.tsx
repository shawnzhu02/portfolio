'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Camera, FolderOpen } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import Link from 'next/link';
import * as THREE from 'three'

// Enhanced 3D Scene Components
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

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null)
  
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

const TypewriterText = ({ texts, speed = 80, pauseDuration = 1500 }: { texts: string[], speed?: number, pauseDuration?: number }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const lastUpdateTime = useRef(0)

  // Use a simple interval approach instead of useFrame
  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = texts[currentTextIndex]
      
      if (isPaused) {
        setIsPaused(false)
        setIsDeleting(true)
        return
      }

      if (!isDeleting && currentIndex < currentText.length) {
        // Typing
        setDisplayText(prev => prev + currentText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      } else if (!isDeleting && currentIndex === currentText.length) {
        // Pause before deleting
        setIsPaused(true)
        setTimeout(() => {}, pauseDuration)
      } else if (isDeleting && displayText.length > 0) {
        // Deleting
        setDisplayText(prev => prev.slice(0, -1))
      } else if (isDeleting && displayText.length === 0) {
        // Move to next text
        setIsDeleting(false)
        setCurrentIndex(0)
        setCurrentTextIndex(prev => (prev + 1) % texts.length)
      }
    }, isDeleting ? speed / 2 : (isPaused ? pauseDuration : speed))

    return () => clearInterval(interval)
  }, [currentIndex, currentTextIndex, isDeleting, isPaused, displayText.length, texts, speed, pauseDuration])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 text-blue-400"
      >
        |
      </motion.span>
    </span>
  )
}

const Scene3D = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[0, 10, -10]} intensity={0.7} color="#10b981" />
        <spotLight position={[15, 15, 15]} angle={0.3} intensity={0.8} color="#f59e0b" />
        
        {/* All 3D Elements */}
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


const HomePage = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/shawnzhu02', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shawnzhu02', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shawnzhu02@gmail.com', label: 'Email' },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>

      <div className="relative z-10 pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-5xl lg:text-7xl font-bold"
                >
                  
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Shawn Zhu
                  </span>

                </motion.h1>
                

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="text-xl lg:text-2xl text-gray-300 min-h-[2rem] flex items-center"
                >
                  <TypewriterText texts={[
                    'Youth Advocate',
                    'Web Developer',
                    'Videographer',
                    'YouTuber',
                    'Golfer',
                    'Bboy',
                    'Programmer',
                    'Researcher',
                    'Trumpeter',
                    'Planespotter',
                    'AI Enthusiast',
                    'Gym Rat',
                    'Game Dev',
                    'Video Editor',
                    'Animator',
                    'Orator',
                    'CEO',
                    'Gamer',
                    'Artist',






                    ]} speed={50} pauseDuration={1000} />
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-gray-400 leading-relaxed max-w-lg"
              >
                I'm a little bit of everything
                
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex items-center space-x-6"
              >
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 glass-effect hover:glow-effect transition-all duration-0"
                      aria-label={link.label}
                    >
                      <Icon size={24} />
                    </motion.a>
                  )
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r flex items-center justify-center space-x-2 from-blue-500 to-purple-500 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-0 glow-effect"
                  >
                    <FolderOpen size={20} />
                    <span>View My Projects</span>
                  </motion.button>
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 glass-effect hover:glow-effect transition-all duration-0 flex items-center justify-center space-x-2"
                >
                  <Camera size={20} />
                  <span>Check out my photos</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Skills/Stats */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-effect p-8 rounded-2xl overflow-hidden">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Worked with:
                </motion.h2>
                
                <motion.div
                  animate={{ x: [0, (-128*6)] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                  className="flex space-x-8 items-center"
                >
                  {[...Array(6)].map((_, setIndex) => (
                    <div key={setIndex} className="flex space-x-8 items-center">
                      {[
                        { name: 'Your Company 1', logo: '/logos/UN.jpg' },
                        { name: 'Your Company 1', logo: '/logos/bkmf.png' },
                        { name: 'Your Company 1', logo: '/logos/LPI.png' },
                        { name: 'Your Company 1', logo: '/logos/upenn.png' },
                        { name: 'Your Company 1', logo: '/logos/kidsforsdgs.jpeg' },
                        { name: 'Your Company 1', logo: '/logos/ncfl.jpg' },


                        // Add your actual companies here
                      ].map((company, index) => (
                        <motion.div
                          key={`${setIndex}-${company}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                          className="flex-shrink-0 w-24 h-24 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10"
                        >
                        <img 
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="w-full h-full object-contain filter rounded-lg group-hover:grayscale-0 transition-all duration-300"
                        />
                            
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '17', label: 'Years on Earth' },
                  { number: 'Many hours', label: 'of listening to Lofi-ATC' },
                  { number: '2', label: 'Golf Clubs Broken' },
                  { number: 'Too many to count', label: 'Bowls of Udon I ate' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                    className="glass-effect p-6 rounded-xl text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                      className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage