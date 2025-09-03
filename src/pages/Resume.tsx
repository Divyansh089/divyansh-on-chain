import * as React from "react"
import { motion } from "framer-motion"
import { Download, ExternalLink, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const Resume = () => {
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
                My <span className="gradient-cyber">Resume</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Download my latest resume to learn more about my blockchain development experience, 
                technical skills, and professional background.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="/Divyansh_Patel_Blockchain_Resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </a>
                </Button>
                <Button variant="cyber-outline" size="xl" asChild>
                  <a href="/Divyansh_Patel_Blockchain_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Online
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resume Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-cyber rounded-xl p-8 max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Resume Preview</h2>
                <p className="text-muted-foreground">
                  Interactive PDF viewer - Download for the full experience
                </p>
              </div>

              {/* PDF Embed */}
              <div className="relative rounded-lg overflow-hidden border border-border bg-muted/20">
                <iframe
                  src="/Divyansh_Patel_Blockchain_Resume.pdf"
                  width="100%"
                  height="800px"
                  className="border-0"
                  title="Divyansh Patel Resume"
                >
                  <p className="p-8 text-center">
                    Your browser doesn't support PDF viewing. 
                    <Button variant="link" asChild className="ml-2">
                      <a href="/Divyansh_Patel_Blockchain_Resume.pdf" download>
                        Download the PDF instead
                      </a>
                    </Button>
                  </p>
                </iframe>
              </div>

              <div className="text-center mt-6">
                <Button variant="cyber" asChild>
                  <a href="/Divyansh_Patel_Blockchain_Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

export default Resume