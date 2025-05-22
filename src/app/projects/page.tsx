'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, ExternalLink, Github, Star } from 'lucide-react'
import Image from 'next/image'

// Project data (inline to avoid import issues)
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and secure payments.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true
  },
  {
    id: 2,
    title: "Photography Portfolio",
    description: "A stunning portfolio website showcasing photography work with advanced filtering, lightbox galleries, and smooth animations.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/600/400",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions, forecasts, and historical data with beautiful data visualizations.",
    image: "/api/placeholder/600/400",
    tags: ["Vue.js", "Chart.js", "OpenWeather API", "Netlify"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false
  },
  {
    id: 5,
    title: "3D Product Configurator",
    description: "An interactive 3D product configurator allowing customers to customize products in real-time with Three.js and React.",
    image: "/api/placeholder/600/400",
    tags: ["Three.js", "React", "TypeScript", "WebGL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true
  },
  {
    id: 6,
    title: "AI Chat Interface",
    description: "A modern chat interface for AI assistants with message streaming, code syntax highlighting, and conversation history.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: false
  }
]

// ProjectCard component (inline)
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative"
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 hover:scale-105">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <Star size={12} fill="currentColor" />
              <span>Featured</span>
            </div>
          </div>
        )}

        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Overlay Links */}
          <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="View Live Project"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                aria-label="View GitHub Repository"
              >
                <Github size={20} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index * 0.1) + (tagIndex * 0.05), duration: 0.3 }}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex space-x-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1 text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors flex items-center space-x-1 text-sm"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Get unique tags for filtering
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))]
  
  // Filter projects based on selected tag
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter))

  // Separate featured and regular projects
  const featuredProjects = filteredProjects.filter(project => project.featured)
  const regularProjects = filteredProjects.filter(project => !project.featured)

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
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in web development, 
            design, and creative problem-solving.
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-gray-400" />
              <span className="text-gray-400">Filter by technology:</span>
            </div>
            
            {/* Desktop Filter */}
            <div className="hidden lg:flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFilter(tag)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedFilter === tag
                      ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                      : 'bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/10'
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
            </div>

            {/* Mobile Filter Dropdown */}
            <div className="lg:hidden relative">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <span>{selectedFilter}</span>
                <Filter size={16} />
              </motion.button>
              
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg rounded-lg p-2 z-10"
                >
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSelectedFilter(tag)
                        setIsFilterOpen(false)
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedFilter === tag
                          ? 'bg-blue-500 text-white'
                          : 'hover:bg-white/10'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center space-x-2">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8">
            {featuredProjects.length > 0 ? 'Other Projects' : 'All Projects'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={featuredProjects.length + index} 
              />
            ))}
          </div>
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-400 text-lg">
              No projects found with the selected filter.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter('All')}
              className="mt-4 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Show All Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage