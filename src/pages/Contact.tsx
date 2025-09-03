import * as React from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      setIsSubmitting(false)
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In <span className="gradient-cyber">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Let's discuss your next blockchain project, collaboration opportunities, 
                or connect about Web3 development and emerging technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                  <p className="text-muted-foreground mb-8">
                    I'm always interested in discussing new opportunities, innovative projects, 
                    and the latest developments in blockchain technology.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 card-cyber rounded-lg"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a 
                        href="mailto:pateldivyansh131@gmail.com" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        pateldivyansh131@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 card-cyber rounded-lg"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a 
                        href="tel:+917906941751" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +91-7906941751
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 card-cyber rounded-lg"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Bareilly, Uttar Pradesh</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <h3 className="font-semibold mb-4">Connect on Social</h3>
                  <div className="flex gap-4">
                    <Button variant="cyber" size="icon" asChild>
                      <a href="https://github.com/Divyansh089" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="cyber" size="icon" asChild>
                      <a href="https://www.linkedin.com/in/pateldivyansh131" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card-cyber rounded-xl p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Your name" 
                        required 
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="What's this about?" 
                      required 
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your project or inquiry..." 
                      rows={6}
                      required 
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This is a demo form. In production, this would be connected to a form service like Formspree or a backend API.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

export default Contact