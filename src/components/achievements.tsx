"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Trophy, Code, Award, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { achievements } from "@/data/projects"

const achievementIcons = {
  "LeetCode": Code,
  "Codeforces": Code,
  "LNM Hacks 7.0": Trophy
}

export function Achievements() {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-cyber">Achievements</span> & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Competitive programming accomplishments and hackathon participation showcasing problem-solving skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievementIcons[achievement.title as keyof typeof achievementIcons] || Award
            
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card-cyber rounded-xl p-6 text-center group"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-accent" />
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold gradient-cyber mb-2">
                    {achievement.metric}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground mb-1">{achievement.description}</p>
                  <p className="text-sm text-muted-foreground">{achievement.details}</p>
                </div>

                {achievement.link && (
                  <Button variant="cyber" size="sm" asChild>
                    <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Profile
                    </a>
                  </Button>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}