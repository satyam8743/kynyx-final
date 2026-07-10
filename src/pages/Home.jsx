import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import LogoStrip from "../components/LogoStrip";

const teasers = [
  { title: "Services", to: "/services", desc: "Strategy, design, engineering, AI, marketing, branding." },
  { title: "Industries", to: "/industries", desc: "Finance, healthcare, ecommerce, and technology mastery." },
  { title: "Portfolio", to: "/portfolio", desc: "Featured engagements and case studies." },
  { title: "Process", to: "/process", desc: "Our four-stage path from discovery to scale." },
  { title: "Testimonials", to: "/testimonials", desc: "What global leaders say about working with us." },
  { title: "FAQ", to: "/faq", desc: "Answers to the questions we hear most." },
];

const homeStats = [
  { value: "120+", label: "Projects delivered" },
  { value: "97%", label: "Client retention rate" },
  { value: "$180M+", label: "Client funding raised post-launch" },
  { value: "18+", label: "Industries served" },
];

const differentiators = [
  {
    title: "Senior teams only",
    desc: "Every engagement is staffed with senior strategists and engineers, never junior hand-offs mid-project.",
  },
  {
    title: "Fixed-scope pricing",
    desc: "You know the total investment before we start. No surprise change orders, no scope creep billing.",
  },
  {
    title: "Weekly transparency",
    desc: "Live demos every week. You see exactly what's been built, not a black box that opens at the end.",
  },
  {
    title: "Outcome accountability",
    desc: "We track the metrics that matter to your business, not vanity dashboards that look good in a deck.",
  },
];

const featuredWork = [
  { name: "AssetFlow Platform", tag: "FinTech", img: "/images/asset-management.png" },
  { name: "LuxeMarket Mobile", tag: "Ecommerce", img: "/images/lifestyle-commerce.png" },
  { name: "VitalScope Pro", tag: "Healthcare", img: "/images/diagnostics.png" },
];

const previewQuote = {
  text: "Kynyx didn't just build our site, they redefined our entire digital strategy. Their team is exceptional to work with.",
  name: "David Chen",
  role: "CEO, AssetFlow",
};

const insightTopics = [
  { title: "Scaling infrastructure before you need it", tag: "Engineering" },
  { title: "What makes a fintech onboarding flow convert", tag: "Design" },
  { title: "When to bring AI into an internal workflow", tag: "AI & Automation" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />

      {/* Stats bar */}
      <section className="bg-white border-y border-line py-14 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {homeStats.map((s) => (
            <motion.div key={s.label} variants={cardVariants} className="text-center md:text-left">
              <p className="font-display text-3xl md:text-4xl font-700 text-gold">{s.value}</p>
              <p className="text-xs text-stone mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Kynyx */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 overflow-hidden">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-xl mb-14"
        >
          <p className="eyebrow mb-3">Why Kynyx</p>
          <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
            The difference shows up in how we operate, not just what we ship.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-px bg-line border border-line"
        >
          {differentiators.map((d) => (
            <motion.div
              key={d.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white p-8 transition-all duration-300"
            >
              <h3 className="font-display text-lg font-700 mb-2">{d.title}</h3>
              <p className="text-sm text-stone">{d.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured work preview */}
      <section className="bg-ink text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-end justify-between gap-6 mb-12"
          >
            <div>
              <p className="eyebrow mb-3">Featured Work</p>
              <h2 className="font-display text-3xl md:text-4xl font-700 max-w-lg">
                A glimpse of what we've shipped recently.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="text-sm font-semibold underline underline-offset-4 hover:text-gold transition-colors"
            >
              View full portfolio
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {featuredWork.map((p) => (
              <motion.div
                key={p.name}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-md mb-5 relative overflow-hidden bg-white/5 border border-white/10 group-hover:border-gold/30 transition-colors duration-300">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 h-[3px] bg-gold w-0 group-hover:w-full transition-all duration-300"></div>
                </div>
                <h3 className="font-display font-700 group-hover:text-gold transition-colors duration-300">{p.name}</h3>
                <p className="text-xs text-white/50 mt-1">{p.tag}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote preview */}
      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-4xl text-gold font-display leading-none mb-6">"</p>
          <p className="font-display text-2xl md:text-3xl font-700 leading-snug mb-8">
            {previewQuote.text}
          </p>
          <p className="font-semibold text-sm">{previewQuote.name}</p>
          <p className="text-stone text-xs mb-6">{previewQuote.role}</p>
          <Link
            to="/testimonials"
            className="text-xs font-semibold underline underline-offset-4 hover:text-gold transition-colors"
          >
            Read more client stories
          </Link>
        </motion.div>
      </section>

      {/* Insights teaser */}
      <section className="bg-paper border-y border-line py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl mb-14"
          >
            <p className="eyebrow mb-3">From The Team</p>
            <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight">
              Notes on what we're seeing across engagements.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {insightTopics.map((t) => (
              <motion.div
                key={t.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="bg-white border border-line rounded-md p-6 transition-all duration-300"
              >
                <p className="eyebrow mb-3">{t.tag}</p>
                <h3 className="font-display font-700 text-lg">{t.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick nav teasers */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">Explore Kynyx</p>
          <h2 className="font-display text-3xl md:text-4xl font-700 mb-12 max-w-xl">
            Everything you need to know, one click away.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-px bg-line border border-line"
        >
          {teasers.map((t) => (
            <motion.div key={t.to} variants={cardVariants} whileHover={{ y: -5 }}>
              <Link
                to={t.to}
                className="bg-white p-8 flex flex-col justify-between hover:bg-paper transition-colors min-h-[160px] h-full"
              >
                <div>
                  <h3 className="font-display text-lg font-700 mb-2">{t.title}</h3>
                  <p className="text-sm text-stone">{t.desc}</p>
                </div>
                <span className="text-xs font-semibold mt-6 underline underline-offset-4">
                  View →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}