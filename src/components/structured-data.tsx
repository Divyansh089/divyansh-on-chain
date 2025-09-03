import * as React from "react"

interface StructuredDataProps {
  type?: 'Person' | 'WebSite'
}

export function StructuredData({ type = 'Person' }: StructuredDataProps) {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Divyansh Patel",
    "jobTitle": "Blockchain Developer",
    "description": "Blockchain Developer specializing in Solidity, Smart Contracts, DeFi, and Web3 applications",
    "url": "https://divyanshpatel.dev",
    "email": "pateldivyansh131@gmail.com",
    "telephone": "+91-7906941751",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bareilly",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://github.com/Divyansh089",
      "https://www.linkedin.com/in/pateldivyansh131",
      "https://leetcode.com/u/divyansh089/",
      "https://codeforces.com/profile/divyansh089"
    ],
    "knowsAbout": [
      "Blockchain Development",
      "Solidity",
      "Smart Contracts",
      "Web3",
      "DeFi",
      "Ethereum",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Unified Mentor Pvt Ltd"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Divyansh Patel - Blockchain Developer",
    "url": "https://divyanshpatel.dev",
    "description": "Portfolio of Divyansh Patel, a Blockchain Developer specializing in Web3 applications and smart contracts",
    "author": {
      "@type": "Person",
      "name": "Divyansh Patel"
    }
  }

  const structuredData = type === 'Person' ? personData : websiteData

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}