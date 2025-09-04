"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { ArrowRight, Download, ExternalLink, Code, Zap, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

// Particle system component
const ParticleField = () => {
  return (
    <div className="absolute inset-0 particle-field pointer-events-none">
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-16 bg-gradient-to-b from-neon-cyan/60 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-64px`,
            }}
            animate={{
              y: ["0vh", "110vh"],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Code Symbols */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`symbol-${i}`}
          className="absolute text-neon-purple/30 font-mono text-xs"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          {["{ }", "[ ]", "< />", "=>", "0x", "fn", "++"][Math.floor(Math.random() * 7)]}
        </motion.div>
      ))}
    </div>
  )
}

// Holographic terminal window
const HoloTerminal = () => {
  const [lines, setLines] = React.useState<string[]>([])

  React.useEffect(() => {
    const codeLines = [
      "contract BlockchainDev {",
      "  function buildFuture() external {",
      "    require(innovation > 0);",
      "    _deployDApp();",
      "  }",
      "}"
    ]

    let index = 0
    const timer = setInterval(() => {
      if (index < codeLines.length) {
        setLines(prev => [...prev, codeLines[index]])
        index++
      } else {
        clearInterval(timer)
      }
    }, 800)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="absolute top-20 right-10 w-80 h-48 glass-card rounded-xl p-4 font-mono text-sm overflow-hidden"
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-destructive"></div>
        <div className="w-3 h-3 rounded-full bg-neon-orange"></div>
        <div className="w-3 h-3 rounded-full bg-neon-green"></div>
        <span className="text-muted-foreground ml-2">smartcontract.sol</span>
      </div>
      
      <div className="space-y-1">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-neon-cyan"
          >
            {line}
          </motion.div>
        ))}
        <motion.div
          className="inline-block w-2 h-4 bg-neon-cyan"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </motion.div>
  )
}

// Interactive skill orbs
const SkillOrb = ({ skill, delay, position }: { 
  skill: { name: string; icon: any; color: string }
  delay: number
  position: { x: string; y: string }
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const Icon = skill.icon

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{ left: position.x, top: position.y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative w-16 h-16 rounded-full glass-card flex items-center justify-center group`}
        animate={{
          y: [0, -10, 0],
          rotateY: isHovered ? 360 : 0,
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 0.8 }
        }}
        whileHover={{ scale: 1.2 }}
      >
        <Icon className={`h-8 w-8 ${skill.color}`} />
        
        {/* Pulse ring on hover */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-neon-cyan/50"
          initial={{ scale: 1, opacity: 0 }}
          animate={isHovered ? { scale: 1.5, opacity: [0, 1, 0] } : {}}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        />
        
        {/* Skill name tooltip */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-void-black/80 rounded text-xs text-neon-cyan whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          {skill.name}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function HeroRedesigned() {
  const skills = [
    { name: "Solidity", icon: Shield, color: "text-neon-purple" },
    { name: "React", icon: Code, color: "text-neon-cyan" },
    { name: "Web3.js", icon: Zap, color: "text-neon-pink" },
  ]

  const positions = [
    { x: "10%", y: "20%" },
    { x: "85%", y: "60%" },
    { x: "15%", y: "75%" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden neural-bg">
      {/* Particle Background */}
      <ParticleField />
      
      {/* Holographic grid overlay */}
      <div className="absolute inset-0 bg-gradient-void opacity-90" />
      
      {/* Floating skill orbs */}
      {skills.map((skill, index) => (
        <SkillOrb
          key={skill.name}
          skill={skill}
          delay={1.5 + index * 0.3}
          position={positions[index]}
        />
      ))}

      {/* Holographic terminal */}
      <HoloTerminal />

      {/* Cyber scan line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Main headline with glitch effect */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              className="block text-foreground mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Divyansh Patel
            </motion.span>
            
            <motion.span 
              className="block text-hologram animate-glitch"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              Blockchain Developer
            </motion.span>
          </motion.h1>

          {/* Animated tagline */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.p 
              className="text-xl md:text-3xl text-cosmic mb-4"
              animate={{ filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Building the decentralized future
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Solidity • Hardhat • Ethers.js • IPFS • Node.js
            </motion.p>
          </motion.div>

          {/* Holographic CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="neon-glow text-lg px-8 py-4 holo-border magnetic-hover"
                asChild
              >
                <a href="#projects" className="inline-flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline"
                size="lg" 
                className="glass-card text-lg px-8 py-4 depth-hover"
                asChild
              >
                <a href="/resume" className="inline-flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="secondary"
                size="lg" 
                className="animate-pulse-neon text-lg px-8 py-4"
                asChild
              >
                <a href="/contact" className="inline-flex items-center">
                  Contact Me
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Location and contact with typewriter effect */}
          <motion.div 
            className="text-sm text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <p>📍 Bareilly, Uttar Pradesh • +91-7906941751</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with pulse */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center neon-pulse"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.p 
          className="text-xs text-neon-cyan mt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  )
}