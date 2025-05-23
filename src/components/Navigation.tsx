'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, Camera, FolderOpen } from 'lucide-react'

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/projects', label: 'Projects', icon: FolderOpen },
    { href: '/photography', label: 'Photography', icon: Camera },
  ]

  const name = "Shawn Zhu"

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-6 py-3 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold overflow-hidden"
          >
            {/* Option 1: Color Wave Effect */}
            <div className="name relative">
              {name.split('').map((char, i) => (
                <motion.span
                  key={i}
                  animate={{
                    color: [
                      '#60A5FA', // blue-400
                      '#A78BFA', // purple-400
                      '#F472B6', // pink-400
                      '#34D399', // emerald-400
                      '#FBBF24', // amber-400
                      '#60A5FA'  // back to blue-400
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                  className="inline-block"
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Option 2: Glow Pulse Effect - Uncomment to use instead */}
            {/* 
            <motion.div 
              className="name bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                filter: [
                  'drop-shadow(0 0 0px rgba(96, 165, 250, 0.8))',
                  'drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))',
                  'drop-shadow(0 0 16px rgba(147, 51, 234, 0.8))',
                  'drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))',
                  'drop-shadow(0 0 0px rgba(96, 165, 250, 0.8))'
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {name}
            </motion.div>
            */}

            {/* Option 3: Scale Bounce Effect - Uncomment to use instead */}
            {/* 
            <div className="name bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {name.split('').map((char, i) => (
                <motion.span
                  key={i}
                  animate={{
                    scaleY: [1, 1.2, 1],
                    scaleX: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                  className="inline-block origin-bottom"
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            */}

            {/* Option 4: Shimmer Effect - Uncomment to use instead */}
            {/* 
            <motion.div 
              className="name relative bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 100%'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {name}
            </motion.div>
            */}

            {/* Option 5: Typewriter with Cursor - Uncomment to use instead */}
            {/* 
            <div className="name bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center">
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.1 }}
              >
                {name.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: (i * 0.1) % 2, // Restart every 2 seconds
                      duration: 0.1,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                    style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="ml-1 text-blue-400"
              >
                |
              </motion.span>
            </div>
            */}
          </motion.div>
          
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-0 ${
                      isActive
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'hover:bg-white/10'
                    }`}
                    style={isActive ? { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' } : {}}
                  >
                    <Icon size={18} />
                    <span className="hidden sm:block">{item.label}</span>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation