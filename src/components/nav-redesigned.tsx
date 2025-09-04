"use client"

import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]

export function NavRedesigned() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "glass-card border-b border-border/20" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Holographic border line */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo with glitch effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link 
              to="/" 
              className="text-xl font-bold text-hologram hover:animate-glitch transition-all duration-300 relative group"
            >
              <span className="relative z-10">Divyansh.dev</span>
              {/* Cyber glow background */}
              <div className="absolute inset-0 bg-neon-purple/20 blur-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => {
              const isActive = location.pathname === item.href
              
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group ${
                      isActive 
                        ? "text-neon-cyan neon-glow" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                    
                    {/* Active indicator */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-neon-cyan rounded-full"
                      initial={false}
                      animate={{ 
                        scale: isActive ? 1 : 0,
                        boxShadow: isActive ? "0 0 10px hsl(var(--neon-cyan))" : "none"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Social Links & Theme Toggle */}
          <motion.div 
            className="hidden md:flex items-center space-x-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { icon: Github, href: "https://github.com/Divyansh089", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/pateldivyansh131", label: "LinkedIn" },
              { icon: Mail, href: "mailto:pateldivyansh131@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  asChild 
                  className="h-9 w-9 glass-card hover:neon-glow transition-all duration-300"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
            
            <div className="h-4 w-px bg-border mx-2" />
            <ThemeToggle />
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="glass-card"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-void-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-16 left-4 right-4 glass-card rounded-xl p-6"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="space-y-4">
                {navigation.map((item, index) => {
                  const isActive = location.pathname === item.href
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                          isActive 
                            ? "text-neon-cyan neon-glow bg-gradient-glass" 
                            : "text-muted-foreground hover:text-foreground hover:bg-gradient-glass"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}
                
                {/* Mobile Social Links */}
                <motion.div
                  className="flex justify-center space-x-4 pt-4 border-t border-border/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  {[
                    { icon: Github, href: "https://github.com/Divyansh089" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/pateldivyansh131" },
                    { icon: Mail, href: "mailto:pateldivyansh131@gmail.com" },
                  ].map((social, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      size="icon" 
                      asChild 
                      className="glass-card hover:neon-glow"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                  <ThemeToggle />
                </motion.div>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}