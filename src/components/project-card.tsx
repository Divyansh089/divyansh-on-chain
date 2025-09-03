"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Zap, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
}

const getMetricIcon = (bullet: string) => {
  if (bullet.includes("gas") || bullet.includes("Gas")) return TrendingUp
  if (bullet.includes("concurrent") || bullet.includes("clients")) return Users
  if (bullet.includes("ms") || bullet.includes("TTFB")) return Zap
  return Zap
}

const extractMetric = (bullet: string) => {
  const gasMatch = bullet.match(/(\d+%)/);
  const concurrentMatch = bullet.match(/(\d+,?\d*\+?\s*concurrent)/);
  const timeMatch = bullet.match(/(\d+ms)/);
  const percentMatch = bullet.match(/(\d+\.?\d*%)/);
  
  return gasMatch?.[1] || concurrentMatch?.[1] || timeMatch?.[1] || percentMatch?.[1] || null;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const metrics = project.bullets
    .map(bullet => extractMetric(bullet))
    .filter(Boolean)
    .slice(0, 2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="card-cyber rounded-xl overflow-hidden h-full">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Floating Metrics */}
          {metrics.length > 0 && (
            <div className="absolute top-4 right-4 flex gap-2">
              {metrics.slice(0, 2).map((metric, idx) => {
                const IconComponent = getMetricIcon(project.bullets[idx])
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-1 bg-accent/20 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium text-accent-foreground"
                  >
                    <IconComponent className="h-3 w-3" />
                    {metric}
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>

        <div className="p-6">
          {/* Title and Tags */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, tagIndex) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + tagIndex * 0.05 }}
                >
                  <Badge variant="secondary" className="text-xs hover:bg-accent/20 transition-colors">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.summary}
          </p>

          {/* Key Achievements */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2 text-accent">Key Achievements:</h4>
            <ul className="space-y-1">
              {project.bullets.slice(0, 2).map((bullet, bulletIndex) => (
                <motion.li
                  key={bulletIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + bulletIndex * 0.1 }}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-accent mt-1.5 text-xs">▶</span>
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button variant="cyber" size="sm" asChild className="flex-1">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="cyber-outline" size="sm" asChild className="flex-1">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}