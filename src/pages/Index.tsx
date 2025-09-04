// Update this page (the content is just a fallback if you fail to update the page)

import * as React from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroRedesigned } from "@/components/hero-redesigned"
import { SkillsRedesigned } from "@/components/skills-redesigned"
import { ProjectsRedesigned } from "@/components/projects-redesigned"
import { NavRedesigned } from "@/components/nav-redesigned"
import { Achievements } from "@/components/achievements"
import { SiteFooter } from "@/components/site-footer"
import { StructuredData } from "@/components/structured-data"

const Index = () => {
  return (
    <>
      <StructuredData type="Person" />
      <StructuredData type="WebSite" />
      <div className="min-h-screen bg-gradient-void">
        <NavRedesigned />
        <main>
          <HeroRedesigned />
          <SkillsRedesigned />
          <ProjectsRedesigned />
          <Achievements />
        </main>
        <SiteFooter />
      </div>
    </>
  );
};

export default Index;
