import { motion } from "framer-motion";

const services = [
  {
    title: "Strategy",
    desc: "Commercial roadmaps and technical feasibility for each growth stage.",
    highlight: false,
  },
  {
    title: "Design",
    desc: "High-fidelity interfaces that convert and leave users craving more.",
    highlight: false,
  },
  {
    title: "Elite Development",
    desc: "Scalable architecture built for load, from MVP to enterprise rollout.",
    highlight: false,
  },
  {
    title: "AI & Automation",
    desc: "Bring intelligent workflows online that reduce headcount friction.",
    highlight: true,
  },
  {
    title: "Marketing",
    desc: "Growth-driven acquisition and conversion strategy, built to scale.",
    highlight: false,
  },
  {
    title: "Branding",
    desc: "Distinctive brand systems that command authority in-market.",
    highlight: false,
  },
];

export default function Expertise() {
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

  return (
    <section id="expertise" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mb-14"
      >
        <p className="eyebrow mb-3">Expertise for the Next Frontier</p>
        <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
          From foundational strategy to cutting-edge AI implementation, we
          deliver the full spectrum of digital transformation.
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-px bg-line border border-line"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={cardVariants}
            whileHover={{ 
              y: -5, 
              boxShadow: s.highlight 
                ? "0 15px 30px rgba(0,0,0,0.3)" 
                : "0 15px 30px rgba(0,0,0,0.06)",
              zIndex: 10
            }}
            className={`p-8 min-h-[190px] flex flex-col justify-between transition-all duration-300 relative ${
              s.highlight ? "bg-ink text-white" : "bg-white"
            }`}
          >
            <div>
              <h3 className="font-display text-lg font-700 mb-2">{s.title}</h3>
              <p className={`text-sm ${s.highlight ? "text-white/70" : "text-stone"}`}>
                {s.desc}
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ x: 3 }}
              className={`text-xs font-semibold mt-6 inline-flex items-center gap-1 underline underline-offset-4 ${
                s.highlight ? "text-gold" : "text-ink"
              }`}
            >
              Learn more
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

