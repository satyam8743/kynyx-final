import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Footer() {
  const cols = [
    { title: "Portfolio", links: ["Strategy", "Design", "Development"] },
    { title: "Support", links: ["AI & Automation", "Case Studies", "Privacy Policy"] },
  ];

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
      className="bg-ink text-white pt-16 pb-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10"
        >
          <motion.div variants={colVariants} className="md:col-span-1">
            <div className="mb-4 group w-fit">
              <Logo textColor="text-white group-hover:text-gold transition-colors duration-300" className="cursor-pointer" />
            </div>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              Engineering the future of enterprise technology with precision, passion, and performance.
            </p>
          </motion.div>

          <motion.div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            {cols.map((c) => (
              <motion.div key={c.title} variants={colVariants}>
                <p className="text-xs uppercase tracking-wide text-white/40 mb-4">{c.title}</p>
                <ul className="space-y-2 text-sm text-white/70">
                  {c.links.map((l) => (
                    <motion.li 
                      key={l} 
                      whileHover={{ x: 3, color: "#F5C518" }}
                      className="cursor-pointer transition-colors duration-300 w-fit"
                    >
                      {l}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/40 text-xs pt-6"
        >
          © 2026 Kynyx Technology Partners. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}

