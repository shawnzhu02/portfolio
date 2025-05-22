export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
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