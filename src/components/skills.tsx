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
  Zap,
  Star
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

// Skill proficiency levels (1-5 stars)
const skillProficiency: Record<string, number> = {
  "Solidity": 5,
  "JavaScript": 5,
  "React": 5,
  "Node.js": 5,
  "Hardhat": 4,
  "Web3.js": 4,
  "Ethers.js": 4,
  "TypeScript": 4,
  "Python": 4,
  "Java": 4,
  "MongoDB": 4,
  "MySQL": 3,
  "Truffle": 3,
  "Ganache": 3,
  "MetaMask": 4,
  "IPFS (Pinata)": 3,
  "Express": 4,
  "REST APIs": 4,
  "WebSockets": 3,
  "Git/GitHub": 5,
  "Docker": 3,
  "Linux": 3,
  "GitHub Actions": 3
}

const SkillCard = ({ skill, proficiency, icon: Icon, delay }: { 
  skill: string; 
  proficiency: number; 
  icon: any; 
  delay: number 
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl p-6 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-card-cyber hover:bg-card/80">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          {/* Skill header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                {/* Floating glow effect */}
                <div className="absolute inset-0 rounded-lg bg-accent/20 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <span className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                {skill}
              </span>
            </div>
            
            {/* Star rating */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{
                    scale: isHovered ? (i < proficiency ? 1.2 : 1) : 1,
                    rotate: isHovered ? (i < proficiency ? 360 : 0) : 0
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <Star 
                    className={`h-3 w-3 transition-colors duration-300 ${
                      i < proficiency 
                        ? 'text-accent fill-accent' 
                        : 'text-muted-foreground'
                    }`} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Animated progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Proficiency</span>
              <span>{Math.round((proficiency / 5) * 100)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(proficiency / 5) * 100}%` }}
                transition={{ 
                  duration: 1, 
                  delay: delay + 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full relative"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden" id="skills">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Technical <span className="gradient-cyber">Arsenal</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mastery across blockchain development, full-stack technologies, and modern DevOps practices.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-accent/20 blur-lg opacity-50" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{category}</h3>
                    <div className="h-1 w-16 bg-gradient-cyber rounded-full mt-2" />
                  </div>
                </div>
                
                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {skillList.map((skill, skillIndex) => {
                    const SkillIcon = skillIcons[skill] || Code
                    const proficiency = skillProficiency[skill] || 3
                    
                    return (
                      <SkillCard
                        key={skill}
                        skill={skill}
                        proficiency={proficiency}
                        icon={SkillIcon}
                        delay={categoryIndex * 0.1 + skillIndex * 0.05}
                      />
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Technologies", value: "24+" },
            { label: "Blockchain Tools", value: "8+" },
            { label: "Years Learning", value: "3+" },
            { label: "Projects Built", value: "15+" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div 
                className="text-2xl md:text-3xl font-bold gradient-cyber"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}