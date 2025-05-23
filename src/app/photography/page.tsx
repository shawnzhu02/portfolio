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
  <div className="min-h-screen pt-36 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Photo{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
        </div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Fun pics.
        </p>
      </div>

      {/* 
      Everything else is temporarily commented out for testing/debugging purposes.
      */}
    </div>
  </div>
  )
}

export default PhotographyPage