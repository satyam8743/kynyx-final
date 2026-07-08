import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] font-700 tracking-tight"
        >
          Transforming Ambition into{" "}
          <span className="relative inline-block">
            Digital Excellence
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-2 bg-gold/40 -z-10"
            ></motion.span>
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="mt-6 text-stone text-lg max-w-md"
        >
          We bridge the gap between complex business challenges and
          high-performance technology solutions through elite strategy,
          bespoke design, and AI-driven development.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-sm sm:max-w-none"
        >
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="bg-ink text-white font-display text-xs sm:text-sm font-700 tracking-wider text-center py-4 px-8 border border-ink hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300 uppercase rounded"
          >
            Book A Consultation
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#portfolio" 
            className="bg-white text-ink font-display text-xs sm:text-sm font-700 tracking-wider text-center py-4 px-8 border border-line hover:border-ink transition-all duration-300 uppercase rounded"
          >
            View Case Studies
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
        className="relative"
      >
        {/* Floating Animation for the Preview Dashboard */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 5,
            ease: "easeInOut",
          }}
          className="rounded-lg overflow-hidden border border-line shadow-2xl bg-white p-2"
        >
          <div className="rounded-md bg-ink/95 aspect-[4/3] flex flex-col items-center justify-center p-6 relative overflow-hidden group">
            <span className="text-white/40 text-sm mb-2 font-display">Product / dashboard preview</span>
            
            {/* Visual glow element inside the preview */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="w-full max-w-[200px] h-1.5 bg-white/10 rounded-full overflow-hidden mt-4">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gold"
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Floating Animation for the SLA Badge */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="absolute -bottom-6 -left-6 bg-ink text-white rounded-md px-5 py-4 shadow-xl hidden sm:block border border-white/10 cursor-default"
        >
          <p className="text-2xl font-display font-700 text-gold">99.9%</p>
          <p className="text-xs text-white/60">Uptime SLA</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

