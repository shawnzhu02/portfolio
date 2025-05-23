'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Download, Heart } from 'lucide-react'
import Image from 'next/image'
import { Photo } from '../data/photos'

interface PhotoGalleryProps {
  photos: Photo[]
  category: string
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, category }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [liked, setLiked] = useState<Set<number>>(new Set())

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    const newIndex = (currentIndex + 1) % photos.length
    setCurrentIndex(newIndex)
    setSelectedPhoto(photos[newIndex])
  }

  const prevPhoto = () => {
    const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedPhoto(photos[newIndex])
  }

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
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative cursor-pointer"
            onClick={() => openLightbox(photo, index)}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={24} className="text-white" />
            </motion.button>

            {/* Navigation Buttons */}
            {photos.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    prevPhoto()
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={24} className="text-white" />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    nextPhoto()
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronRight size={24} className="text-white" />
                </motion.button>
              </>
            )}

            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
              >
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
                    <p className="text-gray-300 capitalize">{selectedPhoto.category}</p>
                    {photos.length > 1 && (
                      <p className="text-sm text-gray-400 mt-1">
                        {currentIndex + 1} of {photos.length}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleLike(selectedPhoto.id)}
                      className={`p-3 rounded-full transition-colors ${
                        liked.has(selectedPhoto.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                      }`}
                    >
                      <Heart size={20} fill={liked.has(selectedPhoto.id) ? 'currentColor' : 'none'} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors text-white"
                    >
                      <Download size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PhotoGallery