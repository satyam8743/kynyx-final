import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ---------- Small inline icon set (no external assets needed) ---------- */
function IconBank() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-6 9 6M4 10v9M20 10v9M8 10v9M16 10v9M2 19h20M2 10h20" />
    </svg>
  );
}
function IconFlask() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M10 3v6.5L4.5 19a1.8 1.8 0 001.6 2.6h11.8a1.8 1.8 0 001.6-2.6L14 9.5V3" />
    </svg>
  );
}
function IconTruck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v9H3zM14 10h4l3 3v3h-7zM6.5 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  );
}
function IconCloud() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 18a4.5 4.5 0 01-.4-8.98A5.5 5.5 0 0117 8a4 4 0 01.5 7.97" />
    </svg>
  );
}

/* ---------- Data ---------- */
const trustedIn = ["Fintech", "Health", "Logistics", "Venture"];

const industryCards = [
  {
    id: "fintech",
    icon: <IconBank />,
    eyebrow: "Regulated Finance",
    title: "Fintech & Digital Banking",
    desc: "Ensuring compliance, security, and low-latency performance for the next generation of financial infrastructure.",
    checklist: [
      "PCI DSS compliant payment gateways and ledger systems.",
      "AI-driven fraud detection and risk assessment models.",
    ],
    stack: ["Rust", "Kafka", "Protobuf", "AWS GovCloud"],
    reverse: false,
    // Photo by Behnam Norouzi on Unsplash
    image: "https://images.unsplash.com/photo-1639917714192-557a6143f788?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "healthtech",
    icon: <IconFlask />,
    eyebrow: "Life Sciences",
    title: "Healthtech & Life Sciences",
    desc: "Building HIPAA-compliant platforms that bridge the gap between patient care and sophisticated data analytics.",
    checklist: [
      "Scalable telehealth infrastructure with end-to-end encryption.",
      "HL7/FHIR integration for interoperable health records.",
    ],
    stack: ["Python", "Elixir", "MongoDB", "GCP Healthcare"],
    reverse: true,
    // Photo by Nappy on Unsplash
    image: "https://images.unsplash.com/photo-1666886573452-9dc8ce8f5cc5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "logistics",
    icon: <IconTruck />,
    eyebrow: "Supply Chain",
    title: "Logistics & Fleet Operations",
    desc: "Real-time visibility across fleets, warehouses, and last-mile delivery, engineered for networks that can't afford downtime.",
    checklist: [
      "Live GPS telemetry and route optimization engines.",
      "Warehouse management systems synced across 200+ locations.",
    ],
    stack: ["Go", "PostGIS", "Kafka", "Azure IoT"],
    reverse: false,
    // Photo by Mathias Reding on Unsplash
    image: "https://images.unsplash.com/photo-1641199788912-9a7385a35c82?auto=format&fit=crop&w=1200&q=80",
  },
];

const commerceStats = [
  { value: "99.99%", label: "Uptime maintained during peak holiday traffic for our tier-1 retail partners." },
  { value: "0.8s", label: "Average TTFB for global storefronts via custom headless architecture." },
];

const commerceImages = [
  // Photo by Russ Murray on Unsplash
  { label: "Inventory Systems", image: "https://images.unsplash.com/photo-1749244768351-2726dc23d26c?auto=format&fit=crop&w=800&q=80", className: "h-40" },
  // Photo by Mathias Reding on Unsplash
  { label: "Distribution Network", image: "https://images.unsplash.com/photo-1641199788912-9a7385a35c82?auto=format&fit=crop&w=800&q=80", className: "h-52" },
  // Photo by Alexandru Acea on Unsplash
  { label: "Product Photography", image: "https://images.unsplash.com/photo-1530961915006-1cbd0d169f28?auto=format&fit=crop&w=800&q=80", className: "h-40" },
  // Photo by Taylor Vick on Unsplash
  { label: "Headless Architecture", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80", className: "h-28" },
];

const saasSteps = [
  { title: "Strategy", sub: "Product Discovery" },
  { title: "Build", sub: "MVP to Enterprise" },
  { title: "Scale", sub: "Cloud Optimization" },
];

const challengeQuote = {
  text: "We needed to migrate our legacy monolith to a microservices architecture while maintaining 100% uptime for our Fortune 500 clients.",
  name: "Sarah Chen",
  role: "CTO, CloudBase AI",
};

const certifications = ["SOC2 Type II", "HIPAA", "PCI DSS", "ISO 27001", "GDPR", "CCPA"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ---------- Reusable image block (now renders a real photo) ---------- */
function ImageBlock({ label, image, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.015 }}
      className={`relative overflow-hidden rounded-md flex items-end p-4 group cursor-pointer ${className}`}
    >
      <img
        src={image}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      <span className="text-xs text-white/90 relative z-10 font-medium">{label}</span>
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <>
      {/* ---------- Hero (dark) ---------- */}
      <section className="bg-ink text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="eyebrow mb-4"
          >
            Vertical Expertise
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-700 tracking-tight max-w-2xl mb-6 leading-[1.1]"
          >
            Engineering progress across high-stakes industries.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/60 text-lg max-w-xl"
          >
            We don't just build software. We architect industry-specific
            solutions that solve mission-critical challenges in finance,
            healthcare, and global commerce.
          </motion.p>
        </div>

        {/* Trusted-in strip */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center gap-x-10 gap-y-3">
            <span className="text-xs uppercase tracking-wide text-white/40">Trusted by leaders in:</span>
            {trustedIn.map((t) => (
              <span key={t} className="text-sm font-display font-600 text-white/70">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Industry deep-dive cards ---------- */}
      <section className="bg-white py-8">
        {industryCards.map((c) => (
          <div key={c.id} id={c.id} className="max-w-7xl mx-auto px-6 lg:px-10 py-16 border-b border-line overflow-hidden">
            <div className={`grid lg:grid-cols-2 gap-14 items-center ${c.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <div className="w-10 h-10 rounded-md bg-gold flex items-center justify-center text-ink mb-6">
                  {c.icon}
                </div>
                <p className="eyebrow mb-2">{c.eyebrow}</p>
                <h2 className="font-display text-2xl md:text-3xl font-700 mb-4">{c.title}</h2>
                <p className="text-stone mb-6 max-w-md">{c.desc}</p>

                <ul className="space-y-3 mb-8">
                  {c.checklist.map((item) => (
                    <li key={item} className="text-sm flex items-start gap-3 text-ink/80">
                      <span className="text-gold mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-xs uppercase tracking-wide text-stone mb-3">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span key={s} className="text-xs text-stone border border-line rounded-full px-3 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>

              <ImageBlock label={c.title} image={c.image} className="aspect-[4/3]" />
            </div>
          </div>
        ))}
      </section>

      {/* ---------- Global Commerce (dark, image grid) ---------- */}
      <section className="bg-ink text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <p className="eyebrow mb-3">Global Commerce</p>
            <h2 className="font-display text-3xl md:text-4xl font-700 mb-8">Enterprise Scale E-commerce</h2>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {commerceStats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-700 text-gold mb-2">{s.value}</p>
                  <p className="text-sm text-white/60">{s.label}</p>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn-gold text-sm">
              Discuss Your Commerce Project →
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="grid grid-rows-2 gap-4">
              <ImageBlock label={commerceImages[0].label} image={commerceImages[0].image} className={commerceImages[0].className} />
              <ImageBlock label={commerceImages[2].label} image={commerceImages[2].image} className={commerceImages[2].className} />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <ImageBlock label={commerceImages[1].label} image={commerceImages[1].image} className={commerceImages[1].className} />
              <ImageBlock label={commerceImages[3].label} image={commerceImages[3].image} className={commerceImages[3].className} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Enterprise SaaS / Venture ---------- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <div className="w-10 h-10 rounded-md bg-gold flex items-center justify-center text-ink mb-6">
              <IconCloud />
            </div>
            <p className="eyebrow mb-2">Venture & Startups</p>
            <h2 className="font-display text-2xl md:text-3xl font-700 mb-4">Enterprise SaaS</h2>
            <p className="text-stone mb-8 max-w-md">
              We partner with venture-backed startups and established
              enterprises to build multi-tenant platforms that scale from
              100 to 1,000,000 users without friction.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {saasSteps.map((s) => (
                <div key={s.title}>
                  <p className="text-xs uppercase tracking-wide text-stone mb-1">{s.title}</p>
                  <p className="text-sm font-display font-700">{s.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="bg-paper border border-line rounded-md p-8"
          >
            <p className="eyebrow mb-3">The Challenge</p>
            <p className="text-sm text-ink/80 italic mb-6 leading-relaxed">"{challengeQuote.text}"</p>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-ink/10 flex items-center justify-center text-xs text-stone">
                {challengeQuote.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold">{challengeQuote.name}</p>
                <p className="text-xs text-stone">{challengeQuote.role}</p>
              </div>
            </div>
            <Link
              to="/portfolio"
              className="text-xs font-semibold underline underline-offset-4 hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              Read the full transformation story →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------- Certifications strip ---------- */}
      <section className="bg-paper border-y border-line py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-wide text-stone text-center mb-8"
          >
            Compliance & Certifications
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-4"
          >
            {certifications.map((c) => (
              <motion.span
                key={c}
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                whileHover={{ borderColor: "#F5C518", color: "#0B0B0C" }}
                className="text-xs text-stone border border-line rounded-full px-4 py-2 transition-colors duration-300"
              >
                {c}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------- CTA (dark) ---------- */}
      <section className="bg-ink text-white py-28 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="font-display text-3xl md:text-4xl font-700 mb-4">
            Ready to build for your industry?
          </h2>
          <p className="text-white/60 mb-10">
            Schedule a technical consultation with our lead architects to
            discuss your specific industry challenges and technical
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold text-sm w-full sm:w-auto justify-center"
            >
              Book A Consultation
            </Link>
            <Link
              to="/services"
              className="btn-outline text-sm w-full sm:w-auto justify-center inline-flex items-center"
            >
              Our Tech Stack
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}