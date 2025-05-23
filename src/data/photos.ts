export interface Photo {
  id: number
  src: string
  alt: string
  title: string
  category: string
  featured?: boolean
}

export interface PhotoCategory {
  id: string
  name: string
  description: string
  coverImage: string
}

export const photoCategories: PhotoCategory[] = [
  {
    id: 'landscape',
    name: 'Landscape',
    description: 'Breathtaking natural landscapes and scenic views',
    coverImage: '/api/placeholder/600/400'
  },
  {
    id: 'portrait',
    name: 'Portrait',
    description: 'Capturing human emotions and expressions',
    coverImage: '/api/placeholder/600/400'
  },
  {
    id: 'street',
    name: 'Street Photography',
    description: 'Life in motion, candid moments in urban settings',
    coverImage: '/api/placeholder/600/400'
  },
  {
    id: 'nature',
    name: 'Nature & Wildlife',
    description: 'Flora, fauna, and the beauty of natural world',
    coverImage: '/api/placeholder/600/400'
  },
  {
    id: 'architecture',
    name: 'Architecture',
    description: 'Structural beauty and urban design',
    coverImage: '/api/placeholder/600/400'
  },
  {
    id: 'abstract',
    name: 'Abstract',
    description: 'Creative interpretations and artistic expressions',
    coverImage: '/api/placeholder/600/400'
  }
]

export const photos: Photo[] = [
  // Landscape Photos
  {
    id: 1,
    src: '/media/planes/plane1.HEIC',
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
  },

  // Nature & Wildlife
  {
    id: 13,
    src: '/api/placeholder/800/600',
    alt: 'Bird in flight',
    title: 'Freedom',
    category: 'nature'
  },
  {
    id: 14,
    src: '/api/placeholder/600/800',
    alt: 'Flower macro',
    title: 'Delicate Petals',
    category: 'nature'
  },
  {
    id: 15,
    src: '/api/placeholder/800/600',
    alt: 'Butterfly on flower',
    title: 'Nature\'s Harmony',
    category: 'nature',
    featured: true
  },
  {
    id: 16,
    src: '/api/placeholder/800/600',
    alt: 'Tree silhouette',
    title: 'Standing Tall',
    category: 'nature'
  },

  // Architecture
  {
    id: 17,
    src: '/api/placeholder/600/800',
    alt: 'Modern building',
    title: 'Reaching for the Sky',
    category: 'architecture'
  },
  {
    id: 18,
    src: '/api/placeholder/800/600',
    alt: 'Historic cathedral',
    title: 'Timeless Grace',
    category: 'architecture'
  },
  {
    id: 19,
    src: '/api/placeholder/800/600',
    alt: 'Bridge structure',
    title: 'Engineering Beauty',
    category: 'architecture',
    featured: true
  },
  {
    id: 20,
    src: '/api/placeholder/600/800',
    alt: 'Spiral staircase',
    title: 'Endless Spiral',
    category: 'architecture'
  },

  // Abstract
  {
    id: 21,
    src: '/api/placeholder/800/600',
    alt: 'Light patterns',
    title: 'Play of Light',
    category: 'abstract'
  },
  {
    id: 22,
    src: '/api/placeholder/600/800',
    alt: 'Water reflection',
    title: 'Liquid Mirror',
    category: 'abstract'
  },
  {
    id: 23,
    src: '/api/placeholder/800/800',
    alt: 'Color splash',
    title: 'Vibrant Energy',
    category: 'abstract',
    featured: true
  },
  {
    id: 24,
    src: '/api/placeholder/800/600',
    alt: 'Shadow play',
    title: 'Dancing Shadows',
    category: 'abstract'
  }
]