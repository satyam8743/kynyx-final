import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does a typical engagement last?",
    a: "Engagements typically range from 6 to 12 weeks, depending on scope. We provide a detailed timeline during our initial strategy call before any contract is signed.",
  },
  {
    q: "Do you offer fixed-price or hourly billing?",
    a: "Both. Most clients prefer fixed-scope pricing for predictability, though we also support hourly retainers for ongoing support work.",
  },
  {
    q: "What is your process for maintaining security?",
    a: "We follow SOC2-aligned protocols, encrypted data pipelines, and conduct regular audits across every layer of the stack we deploy.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-10 py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl md:text-4xl font-700 text-center mb-12"
      >
        Common Questions
      </motion.h2>

      <div className="divide-y divide-line border-t border-b border-line">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex justify-between items-center py-6 text-left font-display font-600 focus:outline-none group"
              >
                <span className="group-hover:text-gold transition-colors duration-300">{f.q}</span>
                <motion.span 
                  animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? "#F5C518" : "#8A8A85" }}
                  transition={{ duration: 0.3 }}
                  className="text-xl w-6 h-6 flex items-center justify-center select-none"
                >
                  {isOpen ? "−" : "+"}
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="text-sm text-stone pb-6 -mt-2 max-w-2xl leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

