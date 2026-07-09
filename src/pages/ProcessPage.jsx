import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const tabs = ["FORTUNE 500", "TECH UNICORN", "MID-MARKET ELITE", "AI LABS"];

const tabData = {
  "FORTUNE 500": {
    1: { timeline: "2-3 WEEKS", team: "PM / ENTERPRISE ARCHITECT / STAKEHOLDERS" },
    2: { timeline: "4-6 WEEKS", team: "LEAD ARCHITECT / SR SECURITY ENGINEER" },
    3: { timeline: "12-16 WEEKS", team: "SR DEV TEAM / QA LEAD / DEVOPS" },
    4: { timeline: "CONTINUOUS", team: "SRE TEAM / DEDICATED PM" }
  },
  "TECH UNICORN": {
    1: { timeline: "1-2 WEEKS", team: "PM / PRODUCT DESIGNER" },
    2: { timeline: "2-3 WEEKS", team: "TECH LEAD / PM" },
    3: { timeline: "8-12 WEEKS", team: "FULL-STACK DEVS / QA" },
    4: { timeline: "CONTINUOUS", team: "DEVOPS / SRE" }
  },
  "MID-MARKET ELITE": {
    1: { timeline: "2 WEEKS", team: "PM / SOLUTION ARCHITECT" },
    2: { timeline: "2-3 WEEKS", team: "ARCHITECT / DESIGNER" },
    3: { timeline: "10-12 WEEKS", team: "DEV TEAM / QA" },
    4: { timeline: "CONTINUOUS", team: "DEVOPS SUPPORT" }
  },
  "AI LABS": {
    1: { timeline: "1 WEEK", team: "AI STRATEGIST / R&D LEAD" },
    2: { timeline: "1-2 WEEKS", team: "AI ARCHITECT / ML ENGINEER" },
    3: { timeline: "6-8 WEEKS", team: "ML ENGINEER / SOFTWARE DEV" },
    4: { timeline: "CONTINUOUS", team: "MLOPS / SRE" }
  }
};

const phases = [
  {
    n: "01",
    phase: "PHASE 01",
    title: "Discovery",
    desc: "We strip away the noise to find the core challenge. This phase is about exhaustive research, stakeholder alignment, and defining success metrics.",
    deliverables: ["Product Strategy Roadmap", "Technical Audit Report", "UX Research Synthesis"]
  },
  {
    n: "02",
    phase: "PHASE 02",
    title: "Blueprint",
    desc: "The engineering stage. We define the technical stack, data structures, and user journeys down to the last pixel and line of code.",
    deliverables: ["System Architecture Docs", "High-Fidelity Prototypes", "API Specifications"]
  },
  {
    n: "03",
    phase: "PHASE 03",
    title: "Sprint",
    desc: "High-frequency development cycles. We work in two-week sprints, providing demo-ready features at the end of every cycle for rapid feedback.",
    deliverables: ["Bi-Weekly Feature Demos", "CI/CD Pipeline Setup", "QA & Regression Testing"]
  },
  {
    n: "04",
    phase: "PHASE 04",
    title: "Scale",
    desc: "Post-launch growth. We optimize for high traffic, implement automated monitoring, and iterate based on real-world user data.",
    deliverables: ["Infrastructure Handover", "Performance Monitoring", "Long-Term SLA Agreement"]
  }
];

const transparencyTools = [
  {
    title: "Project Portal",
    desc: "A custom dashboard where you track every sprint, view budget burn rates, and access all documentation in real-time.",
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  },
  {
    title: "Async Communication",
    desc: "Dedicated Slack channels for rapid feedback, with daily asynchronous Loom updates from your engineering lead.",
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "Code Transparency",
    desc: "Direct access to staging environments and GitHub repositories. You own the code from the first commit.",
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

export default function ProcessPage() {
  const [activeTab, setActiveTab] = useState("FORTUNE 500");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 15 }
    }
  };

  return (
    <div className="bg-paper min-h-screen pt-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="border-b border-line pb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-stone mb-4">ENGINEERING PROCESS</p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 leading-[1.1] text-ink max-w-xl">
              Our Methodology: From Vision to Velocity
            </h1>
            <p className="text-stone text-base md:text-lg max-w-lg lg:pb-2">
              We don't just build software, we engineer business outcomes. Our structured 4-step process ensures technical excellence while maintaining absolute alignment with your strategic objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Audience Selector Tabs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <div className="flex flex-wrap gap-4 border-b border-line pb-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 text-xs font-bold tracking-wider rounded transition-colors duration-300 ${
                  isActive ? "text-ink bg-line/50 font-800" : "text-stone hover:text-ink"
                }`}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="activeProcessTab"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Interactive Alternating Timeline */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-28 relative">
        {/* Central vertical timeline line */}
        <div className="absolute left-[29px] lg:left-1/2 top-0 bottom-0 w-0.5 bg-line -translate-x-1/2 z-0" />

        <div className="space-y-24 relative z-10">
          {phases.map((p, index) => {
            const isEven = index % 2 === 0;
            const currentTabDetails = tabData[activeTab][index + 1];

            return (
              <div key={p.n} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Desktop layout: Alternate left and right blocks */}
                
                {/* Phase Description Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`pl-14 lg:pl-0 ${isEven ? "lg:order-1 lg:text-right" : "lg:order-2 lg:text-left"}`}
                >
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-gold mb-2">{p.phase}</p>
                    <h3 className="font-display text-2xl md:text-3xl font-700 text-ink mb-4">{p.title}</h3>
                    <p className={`text-stone text-sm leading-relaxed max-w-lg ${isEven ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"}`}>
                      {p.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Deliverables Card Block */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`pl-14 lg:pl-0 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="bg-white border border-line rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-[10px] font-bold tracking-widest text-stone uppercase mb-4 text-left">DELIVERABLES</p>
                    <ul className="space-y-3 text-left mb-6">
                      {p.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-ink font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center border-t border-line pt-4 text-[9px] font-bold tracking-wider text-stone">
                      <span className="uppercase">TIMELINE | {currentTabDetails.timeline}</span>
                      <span className="uppercase">TEAM | {currentTabDetails.team.split(" / ")[0]} / {currentTabDetails.team.split(" / ")[1]}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Vertical Timeline circle absolute node */}
                <div className="absolute left-[29px] lg:left-1/2 w-10 h-10 rounded-full border border-line bg-paper flex items-center justify-center -translate-x-1/2 z-20">
                  <span className="font-display font-bold text-xs text-stone">{p.n}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full Transparency Tools Section */}
      <section className="bg-ink text-white py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-gold mb-3">ENTERPRISE COLLABORATION</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-700 mb-16">
            Full Transparency Tools
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            {transparencyTools.map((tool) => (
              <motion.div
                key={tool.title}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="mb-6 flex items-center justify-center h-12 w-12 rounded bg-gold/10 border border-gold/20">
                  {tool.icon}
                </div>
                <h3 className="font-display text-lg font-700 mb-3 text-white">{tool.title}</h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">{tool.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gold CTA Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="bg-[#DCAE3D] rounded-lg p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="text-left max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl font-700 text-ink mb-4">
              Ready to build something remarkable?
            </h2>
            <p className="text-ink/80 text-sm md:text-base leading-relaxed">
              Our engineering team is ready to map out your product's journey. Let's start with a discovery session.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-ink text-white font-display text-xs font-700 tracking-wider text-center py-4 px-8 hover:bg-white hover:text-ink transition-colors duration-300 uppercase rounded shrink-0"
          >
            SCHEDULE DISCOVERY
          </Link>
        </div>
      </section>
    </div>
  );
}
