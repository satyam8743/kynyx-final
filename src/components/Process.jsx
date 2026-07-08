import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discover", desc: "Deep-dive audit of your systems, market, and growth ceiling." },
  { n: "02", title: "Design", desc: "Wireframes and prototypes validated against real user behavior." },
  { n: "03", title: "Build", desc: "Sprint-based delivery with weekly demos, no black-box development." },
  { n: "04", title: "Scale", desc: "Post-launch monitoring, optimization, and iterative growth support." },
];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="process" className="bg-paper py-24 border-y border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3 text-center">Our Proven Path to Results</p>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-center mb-16">
            Four stages. Zero guesswork.
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-8"
        >
          {steps.map((s, i) => (
            <motion.div 
              key={s.n} 
              variants={stepVariants}
              whileHover={{ y: -4 }}
              className={`relative pl-6 group cursor-default transition-all duration-300 ${
                i < steps.length - 1 ? "md:border-r md:border-line md:pr-8" : ""
              }`}
            >
              {/* Timeline dot accent */}
              <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-line group-hover:bg-gold transition-colors duration-300"></div>

              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="font-display text-sm text-gold font-700 block transition-transform duration-300"
              >
                {s.n}
              </motion.span>
              <h3 className="font-display font-700 text-lg mt-3 mb-2 group-hover:text-gold transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-sm text-stone">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

