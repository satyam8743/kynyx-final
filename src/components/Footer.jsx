import { motion as motionElement } from "framer-motion";
import Logo from "./Logo";

export default function Footer() {
  const services = ["Strategy", "Design", "Development", "AI & Automation"];
  const resources = ["Case Studies", "Privacy Policy", "Terms of Service"];
  const offices = ["San Francisco, CA", "New York City, NY", "London, UK"];

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
    <motionElement.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-ink text-white pt-20 pb-8 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motionElement.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16"
        >
          {/* Logo & Description */}
          <motionElement.div variants={colVariants} className="flex flex-col gap-4">
            <Logo
              textColor="text-gold"
              className="cursor-pointer"
            />
            <p className="text-white/40 text-xs md:text-sm leading-relaxed max-w-[240px]">
              High-performance technology consulting for forward-thinking enterprise.
            </p>
          </motionElement.div>

          {/* Services */}
          <motionElement.div variants={colVariants}>
            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-5">SERVICES</p>
            <ul className="space-y-3 text-xs md:text-sm text-white/60">
              {services.map((item) => (
                <motionElement.li
                  key={item}
                  whileHover={{ x: 3, color: "#F5C518" }}
                  className="cursor-pointer transition-colors duration-300 w-fit"
                >
                  {item}
                </motionElement.li>
              ))}
            </ul>
          </motionElement.div>

          {/* Resources */}
          <motionElement.div variants={colVariants}>
            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-5">RESOURCES</p>
            <ul className="space-y-3 text-xs md:text-sm text-white/60">
              {resources.map((item) => (
                <motionElement.li
                  key={item}
                  whileHover={{ x: 3, color: "#F5C518" }}
                  className="cursor-pointer transition-colors duration-300 w-fit"
                >
                  {item}
                </motionElement.li>
              ))}
            </ul>
          </motionElement.div>

          {/* Offices */}
          <motionElement.div variants={colVariants} className="flex flex-col">
            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-5">OFFICES</p>
            <ul className="space-y-3 text-xs md:text-sm text-white/60 mb-5">
              {offices.map((office, idx) => (
                <li key={idx} className="cursor-default text-white/60">
                  {office}
                </li>
              ))}
            </ul>
            {/* Social/Site Icons */}
            <div className="flex gap-4 items-center text-white/40">
              <span className="hover:text-gold cursor-pointer transition-colors duration-300">
                {/* Globe Icon */}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </span>
              <span className="hover:text-gold cursor-pointer transition-colors duration-300">
                {/* Briefcase Icon */}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4.667 4H12m0 0l-1.333-2M12 10h.01M9 16H5a2 2 0 00-2 2v3h18v-3a2 2 0 00-2-2h-4M9 16v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
                </svg>
              </span>
              <span className="hover:text-gold cursor-pointer transition-colors duration-300">
                {/* Chart Icon */}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
              </span>
            </div>
          </motionElement.div>
        </motionElement.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between text-[11px] md:text-xs text-white/40">
          <p>© 2026 Kynyx Technology Partners. All rights reserved.</p>
        </div>
      </div>
    </motionElement.footer>
  );
}
