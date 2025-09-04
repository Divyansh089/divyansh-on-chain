import { motion } from "framer-motion";
import { Code, Zap, Shield, Rocket, Brain, Target } from "lucide-react";

const AboutRedesigned = () => {
  const journeySteps = [
    {
      icon: Brain,
      title: "The Spark",
      period: "2022",
      description: "Started as a curious computer science student, fascinated by the potential of decentralized systems and the promise of Web3 to reshape digital interactions."
    },
    {
      icon: Code,
      title: "First Lines of Solidity",
      period: "Early 2023",
      description: "Wrote my first smart contract - a simple voting system. The thrill of seeing immutable code execute on the blockchain ignited my passion for blockchain development."
    },
    {
      icon: Shield,
      title: "Security Mindset",
      period: "Mid 2023",
      description: "Learned the hard way that blockchain development isn't just about functionality - it's about bulletproof security. Dove deep into auditing tools like Slither and Echidna."
    },
    {
      icon: Zap,
      title: "Gas Optimization Master",
      period: "Late 2023",
      description: "Became obsessed with efficiency. Reduced gas costs by 28% on QuickSafe through clever struct packing and custom errors. Every wei matters in production."
    },
    {
      icon: Target,
      title: "Real-World Impact",
      period: "2024",
      description: "Built TrustMed - a healthcare DApp that could actually help people. Realized that the best blockchain solutions solve real problems, not just technical puzzles."
    },
    {
      icon: Rocket,
      title: "The Future",
      period: "2025 & Beyond",
      description: "Now building the next generation of Web3 applications, mentoring others, and pushing the boundaries of what's possible with blockchain technology."
    }
  ];

  const skills = [
    { name: "Smart Contract Architecture", level: 95 },
    { name: "Gas Optimization", level: 90 },
    { name: "Security Auditing", level: 85 },
    { name: "DApp Development", level: 92 },
    { name: "Web3 Integration", level: 88 },
    { name: "Protocol Design", level: 80 }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="cyber-grid"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-cyber rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From curious student to blockchain architect - here's how I discovered my passion 
            for building the decentralized future, one smart contract at a time.
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start space-x-4 group">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-cyber p-0.5 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full rounded-full glass flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    {index < journeySteps.length - 1 && (
                      <div className="absolute top-12 left-6 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                        {step.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-8 text-center">
                <span className="bg-gradient-cyber bg-clip-text text-transparent">
                  Expertise Level
                </span>
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-cyber rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-primary/20 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-cyber p-0.5">
                <div className="w-full h-full rounded-full glass flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-3 text-foreground">
                My Philosophy
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "Every line of code in Web3 is a commitment to the future. 
                I don't just write smart contracts - I architect trust, 
                optimize for efficiency, and build the infrastructure 
                for tomorrow's decentralized world."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-12 border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                Ready to Build the Future Together?
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking to build a DeFi protocol, NFT marketplace, 
              or any Web3 application, I bring the experience, passion, and 
              technical expertise to make your vision a reality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button-primary"
            >
              <span>Let's Connect</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutRedesigned;