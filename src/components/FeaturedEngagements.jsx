import { motion } from "framer-motion";

const projects = [
  {
    name: "AssetFlow Platform",
    desc: "Restructuring architectural growth without compromising real-time data delivery.",
    tags: ["FinTech", "Cloud"],
  },
  {
    name: "LuxeMarket Mobile",
    desc: "An excellent retail experience shopping experience for the global elite.",
    tags: ["Ecommerce", "Mobile"],
  },
  {
    name: "VitalScope Pro",
    desc: "Overhauling distributed medical records systems, one hospital network at a time.",
    tags: ["Healthcare", "SaaS"],
  },
];

export default function FeaturedEngagements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-end justify-between gap-6 mb-12"
      >
        <div>
          <p className="eyebrow mb-3">Featured Engagements</p>
          <h2 className="font-display text-3xl md:text-4xl font-700">
            Selected success stories from our client roster.
          </h2>
        </div>
        <motion.a 
          whileHover={{ x: 5 }}
          href="#portfolio" 
          className="text-sm font-semibold underline underline-offset-4 hover:text-gold transition-colors"
        >
          View all case studies
        </motion.a>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {projects.map((p) => (
          <motion.div 
            key={p.name} 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] bg-ink/5 border border-line rounded-md mb-5 flex items-center justify-center text-stone/40 text-xs relative overflow-hidden transition-colors duration-300 group-hover:bg-ink/10 group-hover:border-gold/30">
              <span className="group-hover:scale-110 group-hover:text-ink/60 transition-all duration-300">
                project preview
              </span>
              {/* Overlay accent line */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-gold w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
            <h3 className="font-display font-700 text-lg mb-2 group-hover:text-gold transition-colors duration-300">{p.name}</h3>
            <p className="text-sm text-stone mb-3">{p.desc}</p>
            <div className="flex gap-2">
              {p.tags.map((t) => (
                <motion.span 
                  key={t} 
                  whileHover={{ borderColor: "#F5C518", color: "#FAF9F6", backgroundColor: "#0B0B0C" }}
                  className="text-xs text-stone border border-line rounded-full px-3 py-1 transition-all duration-300"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

