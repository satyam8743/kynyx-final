import { motion } from "framer-motion";

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-10 py-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid lg:grid-cols-2 rounded-lg overflow-hidden border border-line shadow-xl bg-white"
      >
        <div className="bg-ink text-white p-10 md:p-14 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-700 mb-6"
          >
            Ready to Build the Future?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 mb-8 max-w-sm"
          >
            Schedule a strategy call with our team and get a clear plan for
            your next investment, delivered in 48 hours.
          </motion.p>
          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3 text-sm text-white/80"
          >
            <motion.li variants={itemVariants}>✓ Dedicated account manager</motion.li>
            <motion.li variants={itemVariants}>✓ Fixed-scope proposal</motion.li>
            <motion.li variants={itemVariants}>✓ 30-day money-back guarantee</motion.li>
          </motion.ul>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-10 md:p-14 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your name"
            className="border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Work email"
            className="border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300"
          />
          <textarea
            placeholder="Tell us about your project"
            rows={4}
            className="border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300"
          />
          <motion.button 
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 25px rgba(245, 197, 24, 0.3)" }}
            whileTap={{ scale: 0.97 }}
            type="submit" 
            className="btn-gold justify-center mt-2"
          >
            Get Free Consultation
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

