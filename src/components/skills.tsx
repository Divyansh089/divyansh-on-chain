"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Code, 
  Blocks, 
  Database, 
  Globe, 
  GitBranch,
  Cpu,
  Shield,
  Zap
} from "lucide-react"

import { skills } from "@/data/projects"

const categoryIcons = {
  "Programming": Code,
  "Blockchain Tools": Blocks,
  "Databases/Storage": Database,
  "Frameworks/Backend": Globe,
  "DevOps": GitBranch
}

const skillIcons: Record<string, any> = {
  "Java": Cpu,
  "Python": Code,
  "JavaScript": Code,
  "TypeScript": Code,
  "Solidity": Shield,
  "Hardhat": Blocks,
  "Truffle": Blocks,
  "Ganache": Blocks,
  "Web3.js": Globe,
  "Ethers.js": Globe,
  "MetaMask": Shield,
  "MySQL": Database,
  "MongoDB": Database,
  "IPFS (Pinata)": Database,
  "React": Globe,
  "Node.js": Globe,
  "Express": Globe,
  "REST APIs": Globe,
  "WebSockets": Zap,
  "Git/GitHub": GitBranch,
  "Docker": GitBranch,
  "Linux": GitBranch,
  "GitHub Actions": GitBranch
}

export function Skills() {
  return (
    <section className="py-20 bg-gradient-hero" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-cyber">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in blockchain development, full-stack technologies, and modern DevOps practices.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="card-cyber rounded-xl p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 mr-4">
                    <IconComponent className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, skillIndex) => {
                    const SkillIcon = skillIcons[skill] || Code
                    
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:border-accent/50 hover:shadow-card-cyber transition-all duration-300 cursor-default"
                      >
                        <SkillIcon className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">{skill}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}