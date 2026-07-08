import { motion } from "framer-motion";

const sectors = ["Finance", "Healthcare", "Ecommerce", "Technology"];

export default function SectorMastery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const bottomContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const bottomItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-ink text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="eyebrow mb-3">Sector Specific Mastery</p>
            <h2 className="font-display text-3xl md:text-4xl font-700 max-w-lg">
              We apply deep domain expertise across all industries.
            </h2>
          </div>
          <div className="flex gap-3 text-xs text-white/50">
            {["EMEA", "USA/NA", "Oceania"].map((region) => (
              <motion.span 
                key={region}
                whileHover={{ scale: 1.05, borderColor: "#F5C518", color: "#F5C518" }}
                className="border border-white/15 rounded-full px-4 py-1.5 cursor-default transition-colors duration-300"
              >
                {region}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {sectors.map((s) => (
            <motion.div 
              key={s} 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(245, 197, 24, 0.3)" 
              }}
              className="group relative rounded-md overflow-hidden aspect-[3/4] bg-white/5 border border-white/5 cursor-pointer transition-all duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs select-none">
                {/* Accent glow on hover */}
                <div className="absolute w-24 h-24 rounded-full bg-gold/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                image
              </div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <p className="font-display font-700 group-hover:text-gold transition-colors duration-300">{s}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={bottomContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mt-16 border-t border-white/10 pt-10"
        >
          <motion.div variants={bottomItemVariants}>
            <p className="eyebrow mb-2">Focused on ROI</p>
            <p className="text-white/60 text-sm">
              Every dollar invested is tracked. Our clients see measurable
              returns within the first quarter.
            </p>
          </motion.div>
          <motion.div variants={bottomItemVariants}>
            <p className="eyebrow mb-2">Engineering Speed</p>
            <p className="text-white/60 text-sm">
              Senior teams ship in weeks, not quarters, without cutting
              corners on quality.
            </p>
          </motion.div>
          <motion.div variants={bottomItemVariants}>
            <p className="eyebrow mb-2">Bank-Grade Security</p>
            <p className="text-white/60 text-sm">
              SOC2-aligned protocols protect every layer of stack we deploy
              at every stage of the project.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

