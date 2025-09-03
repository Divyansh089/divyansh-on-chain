// Update this page (the content is just a fallback if you fail to update the page)

import * as React from "react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero" 
import { Skills } from "@/components/skills"
import { FeaturedProjects } from "@/components/featured-projects"
import { Achievements } from "@/components/achievements"
import { SiteFooter } from "@/components/site-footer"
import { StructuredData } from "@/components/structured-data"

const Index = () => {
  return (
    <>
      <StructuredData type="Person" />
      <StructuredData type="WebSite" />
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main>
          <Hero />
          <Skills />
          <FeaturedProjects />
          <Achievements />
        </main>
        <SiteFooter />
      </div>
    </>
  );
};

export default Index;
