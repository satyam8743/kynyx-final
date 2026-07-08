import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const categories = ["ALL PROJECTS", "FINANCE", "HEALTHCARE", "E-COMMERCE", "TECH"];

const projects = [
  {
    id: 1,
    name: "Global Asset Management Portal",
    category: "FINANCE",
    desc: "Consolidating disparate data streams into a unified high-performance trading ecosystem.",
    image: "/images/asset-management.png",
    stats: [
      { value: "400%", label: "GROWTH IN QC SPEED" },
      { value: "12ms", label: "LATENCY REDUCTION" }
    ]
  },
  {
    id: 2,
    name: "NexGen AI Workflow Engine",
    category: "TECH",
    desc: "Automating complex DevOps pipelines for a Silicon Valley unicorn.",
    image: "/images/ai-workflow.png",
    stats: [
      { value: "65%", label: "OPEX REDUCTION" },
      { value: "2.4k", label: "HOURS SAVED / YR" }
    ]
  },
  {
    id: 3,
    name: "Precision Diagnostics Platform",
    category: "HEALTHCARE",
    desc: "Redefining patient data visualization for specialized oncology clinics.",
    image: "/images/diagnostics.png",
    stats: [
      { value: "99.9%", label: "DATA ACCURACY" },
      { value: "1.2M", label: "PATIENTS SERVED" }
    ]
  },
  {
    id: 4,
    name: "Luxury Lifestyle Omnichannel",
    category: "E-COMMERCE",
    desc: "Scaling a boutique brand to a global digital storefront with headless commerce architecture.",
    image: "/images/lifestyle-commerce.png",
    stats: [
      { value: "3.5x", label: "CONVERSION LIFT" },
      { value: "Global", label: "LOGISTICS SYNC" }
    ]
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("ALL PROJECTS");

  const filteredProjects = projects.filter(p => {
    if (activeFilter === "ALL PROJECTS") return true;
    return p.category === activeFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <div className="bg-paper min-h-screen pt-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="border-b border-line pb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-stone mb-4">OUR WORK</p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-700 leading-[1.1] text-ink max-w-xl">
              Engineering digital excellence at scale.
            </h1>
            <p className="text-stone text-base md:text-lg max-w-lg lg:pb-2">
              We transform complex technical challenges into streamlined competitive advantages for global leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="border-t border-line pt-6 flex flex-wrap gap-8 md:gap-12 text-xs font-semibold tracking-wider">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative py-2 transition-colors duration-300 ${
                  isActive ? "text-ink font-700" : "text-stone hover:text-ink"
                }`}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBorder"
                    className="absolute top-0 left-0 w-full h-[2px] bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-x-12 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group flex flex-col"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[16/10] w-full bg-line rounded-lg overflow-hidden border border-line mb-6">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-ink text-white text-[10px] tracking-widest font-semibold px-3 py-1.5 uppercase rounded-sm">
                    {p.category}
                  </div>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl md:text-2xl font-700 text-ink group-hover:text-gold transition-colors duration-300">
                    {p.name}
                  </h3>
                  <span className="text-ink p-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </div>

                <p className="text-stone text-sm mb-6 max-w-xl leading-relaxed">
                  {p.desc}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-8 border-t border-line pt-6 mb-6">
                  {p.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-8">
                      <div>
                        <p className="font-display text-2xl md:text-3xl font-700 text-gold mb-1">
                          {stat.value}
                        </p>
                        <p className="text-[10px] tracking-wider font-semibold text-stone uppercase">
                          {stat.label}
                        </p>
                      </div>
                      {i < p.stats.length - 1 && (
                        <div className="h-10 w-px bg-line" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div>
                  <Link
                    to="/contact"
                    className="text-xs font-bold tracking-wider text-ink border-b-2 border-ink pb-1 uppercase hover:text-gold hover:border-gold transition-colors duration-300"
                  >
                    VIEW FULL CASE STUDY
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-ink text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-700 mb-6"
          >
            Ready to build yours?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Our team of consultants and engineers are ready to tackle your most complex technical challenges. Let's discuss your roadmap.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-gold text-ink font-display text-xs font-700 tracking-wider text-center py-4 px-8 border border-gold hover:bg-white hover:border-white transition-all duration-300 uppercase rounded w-full sm:w-auto"
            >
              Book A Consultation
            </Link>
            <Link
              to="/process"
              className="bg-transparent text-white font-display text-xs font-700 tracking-wider text-center py-4 px-8 border border-white/20 hover:border-white transition-all duration-300 uppercase rounded w-full sm:w-auto"
            >
              Our Process
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
