"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion"
import { 
  Code, 
  Blocks, 
  Database, 
  Globe, 
  GitBranch,
  Shield,
  Zap,
  Brain,
  Layers,
  Network
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
  "Java": Code,
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

const skillLevels: Record<string, number> = {
  "Solidity": 95,
  "JavaScript": 90,
  "React": 88,
  "Node.js": 85,
  "Hardhat": 80,
  "Web3.js": 78,
  "Ethers.js": 76,
  "TypeScript": 75,
  "Python": 70,
  "Java": 68,
  "MongoDB": 65,
  "MySQL": 60,
  "Truffle": 58,
  "Ganache": 55,
  "MetaMask": 72,
  "IPFS (Pinata)": 60,
  "Express": 70,
  "REST APIs": 68,
  "WebSockets": 55,
  "Git/GitHub": 85,
  "Docker": 50,
  "Linux": 48,
  "GitHub Actions": 45
}

// Neural network visualization
const NeuralNetwork = () => {
  const nodes = [
    { x: 20, y: 20 }, { x: 80, y: 30 }, { x: 50, y: 50 },
    { x: 10, y: 70 }, { x: 90, y: 80 }, { x: 60, y: 90 }
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full opacity-30">
        {/* Neural connections */}
        {nodes.map((node, i) => 
          nodes.slice(i + 1).map((otherNode, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${otherNode.x}%`}
              y2={`${otherNode.y}%`}
              stroke="url(#neural-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))
        )}
        
        {/* Neural nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="4"
            fill="url(#node-gradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
        
        {/* Gradients */}
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--neon-cyan))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--neon-purple))" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="node-gradient">
            <stop offset="0%" stopColor="hsl(var(--neon-pink))" />
            <stop offset="100%" stopColor="hsl(var(--neon-purple))" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

// Advanced skill card with 3D effects
const SkillCard = ({ skill, level, icon: Icon, delay, index }: {
  skill: string
  level: number
  icon: any
  delay: number
  index: number
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10])
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10])

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      className="group perspective-1000"
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay }}
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
        className="relative p-6 rounded-2xl glass-card hover:neon-glow transition-all duration-500 cursor-pointer overflow-hidden"
        style={{ rotateX, rotateY }}
        whileHover={{ z: 50 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-gradient-hologram"
            style={{
              maskImage: `radial-gradient(circle at ${50 + index * 20}% ${30 + index * 15}%, black 20%, transparent 60%)`
            }}
          />
        </div>

        {/* Skill header */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className="relative"
              animate={isHovered ? { rotate: 360 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-cosmic flex items-center justify-center">
                <Icon className="h-6 w-6 text-white" />
              </div>
              {/* Orbiting particles */}
              <motion.div
                className="absolute -inset-2 pointer-events-none"
                animate={isHovered ? { rotate: 360 } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-neon-cyan rounded-full transform -translate-x-1/2" />
                <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-neon-pink rounded-full transform -translate-x-1/2" />
              </motion.div>
            </motion.div>
            
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                {skill}
              </h3>
              <p className="text-xs text-muted-foreground">
                {level}% proficiency
              </p>
            </div>
          </div>
        </div>

        {/* Neural circuit visualization */}
        <div className="relative mb-4 h-20 overflow-hidden rounded-lg bg-gradient-void/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-4xl font-mono text-neon-cyan/20"
              animate={isHovered ? { 
                textShadow: [
                  "0 0 5px hsl(var(--neon-cyan))",
                  "0 0 20px hsl(var(--neon-cyan))",
                  "0 0 5px hsl(var(--neon-cyan))"
                ]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {skill.slice(0, 3).toUpperCase()}
            </motion.div>
          </div>
          
          {/* Animated circuit lines */}
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={isHovered ? { opacity: 1 } : { opacity: 0.3 }}
          >
            <div className="absolute top-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
            <div className="absolute bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent" />
            <div className="absolute left-2 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent" />
          </motion.div>
        </div>

        {/* Advanced progress visualization */}
        <div className="space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Skill Level</span>
            <motion.span 
              className="text-neon-cyan font-mono"
              animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {level}%
            </motion.span>
          </div>
          
          {/* 3D Progress bar */}
          <div className="relative">
            <div className="h-2 bg-muted rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-cosmic relative overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.div>
            </div>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 h-2 rounded-full pointer-events-none"
              animate={isHovered ? { 
                boxShadow: `0 0 20px hsl(var(--neon-cyan) / 0.5)` 
              } : {}}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Hover particles */}
        <AnimatePresence>
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                  initial={{ 
                    x: Math.random() * 200,
                    y: Math.random() * 200,
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{ 
                    x: Math.random() * 200,
                    y: Math.random() * 200,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export function SkillsRedesigned() {
  return (
    <section className="py-32 relative overflow-hidden neural-bg" id="skills">
      {/* Neural network background */}
      <NeuralNetwork />
      
      {/* Quantum field effect */}
      <div className="absolute inset-0 bg-gradient-void opacity-95" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <div className={`w-4 h-4 ${i % 2 === 0 ? 'border-2 border-neon-cyan/20' : 'bg-neon-pink/20'} ${i % 3 === 0 ? 'rounded-full' : 'rotate-45'}`} />
          </motion.div>
        ))}
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
            Technical <span className="text-cosmic">Mastery</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Advanced blockchain development expertise powered by cutting-edge technologies
          </motion.p>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Technologies", value: "24+" },
              { label: "Blockchain Tools", value: "8+" },
              { label: "Years Experience", value: "3+" },
              { label: "Projects Built", value: "15+" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="glass-card p-4 rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-hologram mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills categories */}
        <div className="space-y-20">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Category header */}
                <div className="flex items-center gap-6 mb-12">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-cosmic flex items-center justify-center shadow-neon">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-hologram opacity-0 animate-pulse-neon" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {category}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-cosmic rounded-full" />
                  </div>
                </div>
                
                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {skillList.map((skill, skillIndex) => {
                    const SkillIcon = skillIcons[skill] || Code
                    const level = skillLevels[skill] || 50
                    
                    return (
                      <SkillCard
                        key={skill}
                        skill={skill}
                        level={level}
                        icon={SkillIcon}
                        delay={categoryIndex * 0.1 + skillIndex * 0.05}
                        index={skillIndex}
                      />
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