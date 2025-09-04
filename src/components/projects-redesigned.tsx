"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowRight, Github, ExternalLink, Star, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

// 3D Project Card with advanced interactions
const ProjectCard3D = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      className="group perspective-1000 h-full"
      initial={{ opacity: 0, y: 100, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      <motion.div
        className="relative h-full rounded-2xl glass-card overflow-hidden cursor-pointer"
        style={{ rotateX, rotateY }}
        whileHover={{ z: 100 }}
        transition={{ duration: 0.3 }}
      >
        {/* Holographic border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-hologram opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-holo-rotate" />
        
        {/* Project image with parallax */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Cyber scan line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
            animate={isHovered ? { x: ["-100%", "100%"] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 via-transparent to-transparent" />
          
          {/* Live/Demo badges */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Badge className="neon-glow animate-pulse-neon">Live</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title with glitch effect */}
          <motion.h3 
            className="text-xl font-bold text-foreground group-hover:text-hologram transition-all duration-300"
            animate={isHovered ? { textShadow: "0 0 10px hsl(var(--neon-cyan))" } : {}}
          >
            {project.title}
          </motion.h3>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, tagIndex: number) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="outline" 
                  className="glass-card hover:neon-glow transition-all duration-300 text-xs"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.summary}
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-2 gap-4 py-4">
            {project.bullets.slice(0, 2).map((bullet: string, bulletIndex: number) => {
              const metric = bullet.match(/(\d+\.?\d*%?|\d+\+?)/)?.[0] || "100%"
              return (
                <motion.div
                  key={bulletIndex}
                  className="text-center p-3 rounded-lg bg-gradient-void/50 border border-border/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-lg font-bold text-neon-cyan">{metric}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {bullet.split(/\d+\.?\d*%?|\d+\+?/)[1]?.split(';')[0]?.trim() || "Improvement"}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-4">
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full glass-card hover:neon-glow group/btn"
                asChild
              >
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Code
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="sm" 
                className="w-full neon-glow group/btn"
                asChild
              >
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Live Demo
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Hover particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                initial={{ 
                  x: Math.random() * 300,
                  y: Math.random() * 400,
                  opacity: 0
                }}
                animate={{ 
                  x: Math.random() * 300,
                  y: Math.random() * 400,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

// Data visualization component
const ProjectMetrics = () => {
  const metrics = [
    { label: "Gas Optimization", value: 28, unit: "%" },
    { label: "Performance Boost", value: 120, unit: "ms" },
    { label: "Concurrent Users", value: 1000, unit: "+" },
    { label: "Success Rate", value: 99.7, unit: "%" }
  ]

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          className="text-center glass-card p-6 rounded-xl"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-3xl font-bold text-hologram mb-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
          >
            {metric.value}{metric.unit}
          </motion.div>
          <div className="text-sm text-muted-foreground">
            {metric.label}
          </div>
          {/* Progress indicator */}
          <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-cosmic"
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.min(metric.value, 100)}%` }}
              transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function ProjectsRedesigned() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="py-32 relative overflow-hidden neural-bg" id="projects">
      {/* Quantum field background */}
      <div className="absolute inset-0 bg-gradient-void opacity-95" />
      
      {/* Matrix grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-grid-pattern bg-[length:50px_50px] animate-neural-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-cosmic">Projects</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Innovative blockchain solutions with measurable impact and cutting-edge technology
          </motion.p>

          {/* Project metrics */}
          <ProjectMetrics />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard3D key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="neon-glow text-lg px-8 py-4 group"
              asChild
            >
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.p
            className="text-sm text-muted-foreground mt-4 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            // Explore more innovative solutions
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}