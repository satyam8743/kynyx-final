import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Footer() {
  const solutions = ["Strategy", "Design", "Development"];
  const company = ["Case Studies", "Privacy Policy"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const colVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-ink text-white pt-20 pb-8 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16"
        >
          {/* Logo & Description */}
          <motion.div variants={colVariants} className="flex flex-col gap-4">
            <Logo
              textColor="text-gold"
              className="cursor-pointer"
            />
            <p className="text-white/40 text-xs md:text-sm leading-relaxed max-w-[240px]">
              Strategic technology partners for the enterprise future.
            </p>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={colVariants}>
            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-5">SOLUTIONS</p>
            <ul className="space-y-3 text-xs md:text-sm text-white/60">
              {solutions.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 3, color: "#F5C518" }}
                  className="cursor-pointer transition-colors duration-300 w-fit"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={colVariants}>
            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-5">COMPANY</p>
            <ul className="space-y-3 text-xs md:text-sm text-white/60">
              {company.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 3, color: "#F5C518" }}
                  className="cursor-pointer transition-colors duration-300 w-fit"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Subscribe */}
          <motion.div variants={colVariants} className="flex flex-col">
            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-5">SUBSCRIBE:</p>
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-[280px]">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 pb-2.5 text-xs md:text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors duration-300 pr-8"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2.5 text-gold hover:text-white transition-colors duration-300"
                aria-label="Subscribe"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between text-[11px] md:text-xs text-white/40">
          <p>© 2026 Kynyx Technology Partners. All rights reserved.</p>
          <button
            className="hover:text-gold transition-colors duration-300"
            aria-label="Share"
          >
            {/* Share / Network Node Icon */}
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
            </svg>
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
