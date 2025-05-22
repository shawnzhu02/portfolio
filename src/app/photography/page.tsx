'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Grid, Heart } from 'lucide-react'
import Image from 'next/image'

// Simple photo data (inline to avoid import issues)
interface Photo {
  id: number
  src: string
  alt: string
  title: string
  category: string
  featured?: boolean
}

const photos: Photo[] = [
  // Landscape Photos
  {
    id: 1,
    src: '/api/placeholder/800/600',
    alt: 'Mountain sunset',
    title: 'Golden Hour at the Peaks',
    category: 'landscape',
    featured: true
  },
  {
    id: 2,
    src: '/api/placeholder/800/600',
    alt: 'Ocean waves',
    title: 'Endless Horizon',
    category: 'landscape'
  },
  {
    id: 3,
    src: '/api/placeholder/600/800',
    alt: 'Desert dunes',
    title: 'Sand and Sky',
    category: 'landscape'
  },
  {
    id: 4,
    src: '/api/placeholder/800/600',
    alt: 'Forest path',
    title: 'Into the Woods',
    category: 'landscape'
  },
  // Portrait Photos
  {
    id: 5,
    src: '/api/placeholder/600/800',
    alt: 'Portrait of a woman',
    title: 'Natural Beauty',
    category: 'portrait',
    featured: true
  },
  {
    id: 6,
    src: '/api/placeholder/600/800',
    alt: 'Elder man smiling',
    title: 'Wisdom in Eyes',
    category: 'portrait'
  },
  {
    id: 7,
    src: '/api/placeholder/600/800',
    alt: 'Child laughing',
    title: 'Pure Joy',
    category: 'portrait'
  },
  {
    id: 8,
    src: '/api/placeholder/600/800',
    alt: 'Artist at work',
    title: 'Creative Soul',
    category: 'portrait'
  },
  // Street Photography
  {
    id: 9,
    src: '/api/placeholder/800/600',
    alt: 'Busy street scene',
    title: 'City Rush',
    category: 'street'
  },
  {
    id: 10,
    src: '/api/placeholder/800/600',
    alt: 'Street vendor',
    title: 'Morning Market',
    category: 'street',
    featured: true
  },
  {
    id: 11,
    src: '/api/placeholder/600/800',
    alt: 'Urban reflection',
    title: 'Glass and Steel',
    category: 'street'
  },
  {
    id: 12,
    src: '/api/placeholder/800/600',
    alt: 'Night lights',
    title: 'Neon Dreams',
    category: 'street'
  }
]

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'landscape', name: 'Landscape' },
  { id: 'portrait', name: 'Portrait' },
  { id: 'street', name: 'Street Photography' }
]

const PhotographyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [liked, setLiked] = useState<Set<number>>(new Set())
  
  // Filter photos based on selected category
  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  // Get featured photos for hero section
  const featuredPhotos = photos.filter(photo => photo.featured).slice(0, 3)

  const toggleLike = (photoId: number) => {
    const newLiked = new Set(liked)
    if (newLiked.has(photoId)) {
      newLiked.delete(photoId)
    } else {
      newLiked.add(photoId)
    }
    setLiked(newLiked)
  }

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Camera size={40} className="text-blue-400" />
            <h1 className="text-4xl lg:text-6xl font-bold">
              Photo{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Capturing moments, emotions, and stories through the lens. 
            Each photograph tells a unique story waiting to be discovered.
          </p>
        </motion.div>

        {/* Featured Photos Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-6 h-80">
            {featuredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Heart size={16} className="text-red-400" />
                      <span className="text-sm bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-medium">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{photo.title}</h3>
                    <p className="text-sm text-gray-300 capitalize">{photo.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <Grid size={20} className="text-gray-400" />
              <h2 className="text-2xl font-bold">Browse by Category</h2>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-70">
                  ({category.id === 'all' ? photos.length : photos.filter(p => p.category === category.id).length})
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {filteredPhotos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Featured Badge */}
                    {photo.featured && (
                      <div className="absolute top-3 left-3 z-10">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                      <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Like Button */}
                        <div className="flex justify-end">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleLike(photo.id)
                            }}
                            className={`p-2 rounded-full transition-colors ${
                              liked.has(photo.id)
                                ? 'bg-red-500 text-white'
                                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                            }`}
                          >
                            <Heart size={18} fill={liked.has(photo.id) ? 'currentColor' : 'none'} />
                          </motion.button>
                        </div>

                        {/* Photo Info */}
                        <div className="text-white">
                          <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                          <p className="text-sm text-gray-300 capitalize">{photo.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Camera size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-400 text-lg">No photos found in this category.</p>
            </div>
          )}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {photos.length}
                </div>
                <div className="text-gray-400">Total Photos</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {categories.length - 1}
                </div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {photos.filter(p => p.featured).length}
                </div>
                <div className="text-gray-400">Featured</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  2024
                </div>
                <div className="text-gray-400">Year Started</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PhotographyPage