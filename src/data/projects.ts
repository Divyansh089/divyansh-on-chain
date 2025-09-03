export interface Project {
  title: string;
  tags: string[];
  summary: string;
  bullets: string[];
  repo: string;
  live: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "QuickSafe — Decentralized Supply Chain dApp",
    tags: ["Solidity", "Hardhat", "Node/TS", "MongoDB", "Ethers.js"],
    summary:
      "On-chain shipment state machine with RBAC, indexed events, and real-time dashboard.",
    bullets: [
      "Designed shipment state machine contracts with role-based access; each transition emitted indexed events for provable audit trail.",
      "Optimized storage layout (struct packing + custom errors); reduced gas ~28% on core transactions.",
      "Secured contracts via checks-effects-interactions, modifiers, and static analysis (Slither, Echidna).",
      "Integrated on-chain events with a front-end dashboard; added monitoring alerts for data consistency."
    ],
    repo: "https://github.com/Divyansh089/supply-chain-management",
    live: "https://quick-safe-psi.vercel.app/",
    image: "/images/quicksafe.png"
  },
  {
    title: "TrustMed — Decentralized Healthcare",
    tags: ["Solidity", "Next.js", "Node/TS", "IPFS", "Prisma", "Redis"],
    summary:
      "Web3 healthcare DApp with consent, IPFS-backed records, realtime chat, and on-chain escrow payments.",
    bullets: [
      "Modeled patient consent, appointment, and prescription flows in Solidity; reduced gas 27% (struct packing, custom errors).",
      "Anchored record CIDs + SHA-256 on-chain; encrypted files on IPFS for verifiable integrity.",
      "Realtime doctor–patient messaging via WebSockets; handled 1,000+ concurrent clients (p95 112ms).",
      "On-chain escrow + MetaMask; idempotent reconciliation prevents double charges."
    ],
    repo: "https://github.com/Divyansh089/TrustMed",
    live: "https://trust-med-beta.vercel.app/",
    image: "/images/trustmed.png"
  },
  {
    title: "E-Commerce App",
    tags: ["React", "Node", "MongoDB", "JWT", "Redis"],
    summary:
      "Full-stack store with auth, cart/checkout, caching, and performance improvements.",
    bullets: [
      "Server-side pagination/search; responsive, mobile-first UI.",
      "Auth with bcrypt + JWT; protected routes and role-based access.",
      "Idempotent order tokens & stock checks; prevented duplicate orders (99.7%).",
      "Compound indexes + Redis cache; DB load −35%, TTFB −120ms."
    ],
    repo: "https://github.com/Divyansh089/Apple-store",
    live: "https://apple-store-ten-chi.vercel.app/",
    image: "/images/ecommerce.png"
  }
];

export const experience = [
  {
    company: "Unified Mentor Pvt Ltd",
    role: "Full-Stack Developer Intern",
    period: "Feb 2025 – Apr 2025",
    location: "Remote",
    bullets: [
      "Developed full-stack web applications using modern frameworks and technologies",
      "Collaborated with cross-functional teams to deliver scalable solutions",
      "Implemented responsive designs and optimized application performance",
      "Gained hands-on experience with cloud deployment and DevOps practices"
    ]
  }
];

export const achievements = [
  {
    title: "LeetCode",
    description: "200+ problems solved",
    details: "Rating 1756, Max streak 87",
    link: "https://leetcode.com/u/divyansh089/",
    metric: "1756"
  },
  {
    title: "Codeforces",
    description: "50+ problems solved", 
    details: "Max rating 1612, Max streak 25",
    link: "https://codeforces.com/profile/divyansh089",
    metric: "1612"
  },
  {
    title: "LNM Hacks 7.0",
    description: "Web3 Track Participant",
    details: "Blockchain hackathon competition",
    link: "",
    metric: "Web3"
  }
];

export const certifications = [
  {
    title: "Hyperledger Fabric Developer",
    issuer: "Kerala Blockchain Academy",
    year: "2025",
    image: "/images/cert-hyperledger.png"
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank", 
    year: "2024",
    image: "/images/cert-python.png"
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    year: "2025", 
    image: "/images/cert-java.png"
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    year: "2025",
    image: "/images/cert-fullstack.png"
  },
  {
    title: "Advanced Blockchain",
    issuer: "Udemy",
    year: "2024",
    image: "/images/cert-blockchain.png"
  }
];

export const skills = {
  "Programming": ["Java", "Python", "JavaScript", "TypeScript", "Solidity"],
  "Blockchain Tools": ["Hardhat", "Truffle", "Ganache", "Web3.js", "Ethers.js", "MetaMask"],
  "Databases/Storage": ["MySQL", "MongoDB", "IPFS (Pinata)"],
  "Frameworks/Backend": ["React", "Node.js", "Express", "REST APIs", "WebSockets"],
  "DevOps": ["Git/GitHub", "Docker", "Linux", "GitHub Actions"]
};