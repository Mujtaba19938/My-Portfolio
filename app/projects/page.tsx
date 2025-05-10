"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  categories: string[]
  demoLink: string
  githubLink: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [filterType, setFilterType] = useState<"technology" | "category">("technology")
  const router = useRouter()

  // Define the fixed technologies from the image
  const technologies = ["HTML&CSS", "Javascript", "UI/UX", "Word Press", "React-JS"]

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const projectsData: Project[] = [
      {
        id: 1,
        title: "Omnifood",
        description: "A premium food delivery service website with subscription plans for healthy meals.",
        image: "/omnifood-website.png",
        tags: ["HTML&CSS"],
        categories: ["Website", "Food & Beverage"],
        demoLink: "https://mujtaba19938.github.io/Omnifood/",
        githubLink: "#",
      },
      {
        id: 2,
        title: "Skeleton Loader",
        description:
          "A clean, animated skeleton loading component for improved user experience during content loading.",
        image: "/skeleton-loader.png",
        tags: ["HTML&CSS"],
        categories: ["Component", "UI"],
        demoLink: "https://mujtaba19938.github.io/skeleton-loader/",
        githubLink: "#",
      },
      {
        id: 3,
        title: "Parallax Scrolling",
        description:
          "An interactive parallax scrolling website showcasing smooth scrolling effects and depth perception.",
        image: "/parallax-scrolling.png",
        tags: ["HTML&CSS"],
        categories: ["Website", "Animation"],
        demoLink: "https://mujtaba19938.github.io/Parallax-Scrolling/",
        githubLink: "#",
      },
      {
        id: 4,
        title: "Calculator",
        description:
          "A sleek, interactive calculator application with standard and scientific modes, featuring a clean UI.",
        image: "/calculator-app.png",
        tags: ["Javascript"],
        categories: ["Web App", "Utility"],
        demoLink: "https://mujtaba19938.github.io/Calculator/",
        githubLink: "#",
      },
      {
        id: 5,
        title: "Pig Game",
        description:
          "An engaging two-player dice game where players compete to reach 100 points first while managing risk.",
        image: "/pig-game.png",
        tags: ["Javascript"],
        categories: ["Web App", "Game"],
        demoLink: "https://mujtaba19938.github.io/Pig-game/",
        githubLink: "#",
      },
      {
        id: 6,
        title: "Guess My Number",
        description:
          "A fun number guessing game with a retro interface where players try to guess a number between 1 and 50.",
        image: "/guess-my-number.png",
        tags: ["Javascript"],
        categories: ["Web App", "Game"],
        demoLink: "https://mujtaba19938.github.io/Guess-My-Number/",
        githubLink: "#",
      },
      {
        id: 7,
        title: "JS Quiz",
        description:
          "An interactive quiz application testing JavaScript knowledge with multiple-choice questions and score tracking.",
        image: "/js-quiz.png",
        tags: ["Javascript"],
        categories: ["Web App", "Education"],
        demoLink: "https://mujtaba19938.github.io/Js-Quiz/",
        githubLink: "#",
      },
      {
        id: 8,
        title: "JS Modal",
        description:
          "A lightweight, customizable modal component implementation with multiple modal types and smooth animations.",
        image: "/js-modal.png",
        tags: ["Javascript"],
        categories: ["Component", "UI"],
        demoLink: "https://mujtaba19938.github.io/Js-Modal/",
        githubLink: "#",
      },
      {
        id: 9,
        title: "Weather App",
        description:
          "A sleek weather application that provides current conditions and 5-day forecasts for any location.",
        image: "/weather-app.png",
        tags: ["Javascript"],
        categories: ["Web App", "Utility"],
        demoLink: "https://mujtaba19938.github.io/Weather-App/",
        githubLink: "#",
      },
      {
        id: 10,
        title: "Modern Next.js Website",
        description:
          "A visually stunning website with smooth animations, interactive elements, and immersive 3D experiences.",
        image: "/modern-next-js-website.png",
        tags: ["React-JS"],
        categories: ["Website", "Portfolio"],
        demoLink: "https://v0-modern-next-js-website-psi.vercel.app/",
        githubLink: "#",
      },
      {
        id: 11,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates.",
        image: "/task-management-app-interface.png",
        tags: ["React-JS"],
        categories: ["Web App", "Productivity"],
        demoLink: "#",
        githubLink: "#",
      },
      {
        id: 12,
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media platforms with data visualization.",
        image: "/social-media-dashboard.png",
        tags: ["React-JS"],
        categories: ["Web App", "Analytics"],
        demoLink: "#",
        githubLink: "#",
      },
      {
        id: 13,
        title: "Al Bayan Academy",
        description:
          "An educational website for an Islamic academy offering Quran memorization and Islamic studies courses.",
        image: "/al-bayan-academy.png",
        tags: ["Word Press", "HTML&CSS", "UI/UX"],
        categories: ["Website", "Education"],
        demoLink: "https://albayanacademy.ae/",
        githubLink: "#",
      },
      {
        id: 14,
        title: "Fitness Blog",
        description: "A fitness blog with articles, workout plans, and nutrition guides.",
        image: "/fitness-app-mobile-ui.png",
        tags: ["Word Press", "HTML&CSS", "UI/UX"],
        categories: ["Blog", "Health"],
        demoLink: "#",
        githubLink: "#",
      },
      {
        id: 15,
        title: "Portfolio Website",
        description: "A responsive portfolio website for a photographer with gallery and contact form.",
        image: "/photography-portfolio.png",
        tags: ["HTML&CSS", "Javascript", "UI/UX"],
        categories: ["Website", "Portfolio"],
        demoLink: "#",
        githubLink: "#",
      },
      {
        id: 16,
        title: "Face Analyzer",
        description: "An AI-powered application that analyzes face shape and recommends suitable eyeglass styles.",
        image: "/face-analyzer.png",
        tags: ["React-JS"],
        categories: ["Web App", "AI"],
        demoLink: "https://v0-next-js-face-analyzer.vercel.app/",
        githubLink: "#",
      },
      {
        id: 17,
        title: "TTS System",
        description: "An advanced text-to-speech system with multiple voices, languages, and customization options.",
        image: "/tts-system.jpeg",
        tags: ["React-JS"],
        categories: ["Web App", "AI"],
        demoLink: "https://v0-advanced-ai-tts-system.vercel.app/",
        githubLink: "#",
      },
    ]

    setProjects(projectsData)
    setFilteredProjects(projectsData)
  }, [])

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    console.log("Filter selected:", filter)

    if (filter === "All") {
      setFilteredProjects(projects)
      return
    }

    const filtered = projects.filter((project) => {
      const hasTag = project.tags.some((tag) => tag === filter)
      console.log(`Project ${project.title} has tag ${filter}:`, hasTag)
      return hasTag
    })

    console.log("Filtered projects:", filtered.length)
    setFilteredProjects(filtered)
  }

  const navigateToProject = (projectId: number) => {
    router.push(`/projects/${projectId}`)
  }

  const openProjectDemo = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-poppins">
      <Navbar />

      {/* Projects Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-[#c9a86a] mb-4">Projects</h1>
            <div className="w-20 h-1 bg-[#c9a86a] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project is built with a focus on performance, user experience,
              and clean code.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === "All" ? "bg-[#c9a86a] text-[#1a1a1a]" : "bg-[#252525] text-white hover:bg-[#333]"
              }`}
              onClick={() => handleFilterChange("All")}
            >
              All
            </motion.button>

            {technologies.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeFilter === tech ? "bg-[#c9a86a] text-[#1a1a1a]" : "bg-[#252525] text-white hover:bg-[#333]"
                }`}
                onClick={() => handleFilterChange(tech)}
              >
                {tech}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#252525] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => navigateToProject(project.id)}
                  >
                    <div className="overflow-hidden">
                      {project.id === 1 ||
                      project.id === 2 ||
                      project.id === 3 ||
                      project.id === 4 ||
                      project.id === 5 ||
                      project.id === 6 ||
                      project.id === 7 ||
                      project.id === 8 ||
                      project.id === 9 ||
                      project.id === 10 ||
                      project.id === 13 ||
                      project.id === 16 ||
                      project.id === 17 ? (
                        // Special handling for projects with live demos
                        <div
                          className="relative w-full h-64 cursor-pointer"
                          onClick={(e) => openProjectDemo(e, project.demoLink)}
                        >
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                            <span className="bg-[#c9a86a] text-[#1a1a1a] px-4 py-2 rounded-md font-semibold">
                              View Live Site
                            </span>
                          </div>
                        </div>
                      ) : (
                        // Regular image for other projects
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={500}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-[#c9a86a]">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-[#333333] text-[#c9a86a] px-3 py-1 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <button
                          className="text-white hover:text-[#c9a86a] transition-colors duration-300"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.demoLink, "_blank", "noopener,noreferrer")
                          }}
                        >
                          Live Demo
                        </button>
                        <button
                          className="text-white hover:text-[#c9a86a] transition-colors duration-300"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.githubLink, "_blank", "noopener,noreferrer")
                          }}
                        >
                          GitHub
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12"
                >
                  <h3 className="text-xl text-gray-300">No projects found matching the selected filter.</h3>
                  <button onClick={() => handleFilterChange("All")} className="mt-4 text-[#c9a86a] hover:underline">
                    Show all projects
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
