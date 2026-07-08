import { motion } from "framer-motion";

export default function CaseStudySpotlight() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow mb-3">Case Study</p>
          <h2 className="font-display text-3xl md:text-4xl font-700 leading-tight mb-8">
            Scaling Global SaaS Operations by 400%
          </h2>

          <div className="space-y-6 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-stone mb-1">
                The Challenge
              </p>
              <p className="text-sm text-stone">
                Legacy infrastructure was capping user growth and causing significant downtime during peak load.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-stone mb-1">
                Our Solution
              </p>
              <p className="text-sm text-stone">
                A complete migration to microservices architecture with a bespoke CRM built for scale.
              </p>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-3 gap-6 border-t border-line pt-8"
          >
            <motion.div variants={statVariants}>
              <p className="font-display text-3xl font-700 text-gold">40%</p>
              <p className="text-xs text-stone mt-1">Cost reduction</p>
            </motion.div>
            <motion.div variants={statVariants}>
              <p className="font-display text-3xl font-700 text-gold">0.8s</p>
              <p className="text-xs text-stone mt-1">Avg. load time</p>
            </motion.div>
            <motion.div variants={statVariants}>
              <p className="font-display text-3xl font-700 text-gold">99.9%</p>
              <p className="text-xs text-stone mt-1">System uptime</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="aspect-[4/5] rounded-md bg-ink flex flex-col items-center justify-center p-8 relative overflow-hidden group cursor-pointer shadow-lg transition-shadow duration-300 hover:shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <span className="text-white/30 text-sm font-display relative z-10 transition-transform duration-500 group-hover:scale-115">Case study image</span>
          {/* Subtle animated border line */}
          <div className="absolute top-0 right-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500"></div>
        </motion.div>
      </div>
    </section>
  );
}

