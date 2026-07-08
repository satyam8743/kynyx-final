import { motion } from "framer-motion";

const quotes = [
  {
    text: "Kynyx didn't just build our site, they redefined our entire digital strategy. Their team is exceptional to work with.",
    name: "David Chen",
    role: "CEO, AssetFlow",
  },
  {
    text: "The level of technical precision and aesthetic sensibility Kynyx brings to the table is on par with the top agencies in the industry.",
    name: "Sarah Jenkins",
    role: "VP Product, LuxeMarket",
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="bg-ink text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3">What Global Leaders Say</p>
          <h2 className="font-display text-3xl md:text-4xl font-700 max-w-lg mb-14">
            Trusted by teams who refuse to settle for average.
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10"
        >
          {quotes.map((q) => (
            <motion.div 
              key={q.name} 
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: "rgba(245, 197, 24, 0.35)", 
                backgroundColor: "rgba(255, 255, 255, 0.03)" 
              }}
              className="border border-white/10 rounded-md p-8 cursor-default transition-colors duration-300"
            >
              <motion.p 
                initial={{ rotate: 0 }}
                whileHover={{ rotate: -5, scale: 1.1 }}
                className="text-3xl text-gold font-display leading-none mb-4 inline-block select-noneOrigin"
              >
                "
              </motion.p>
              <p className="text-white/80 mb-6">{q.text}</p>
              <p className="font-semibold text-sm">{q.name}</p>
              <p className="text-white/50 text-xs">{q.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

