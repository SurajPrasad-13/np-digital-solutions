import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", category: "Web", color: "hsl(252, 85%, 60%)" },
  { title: "Fitness Tracker App", category: "App", color: "hsl(200, 100%, 50%)" },
  { title: "SaaS Dashboard", category: "Web", color: "hsl(270, 80%, 55%)" },
  { title: "Restaurant Finder", category: "App", color: "hsl(160, 70%, 45%)" },
  { title: "SEO Campaign - Retail", category: "SEO", color: "hsl(45, 90%, 55%)" },
  { title: "Corporate Website", category: "Web", color: "hsl(210, 70%, 50%)" },
];

const filters = ["All", "Web", "App", "SEO"];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Work</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Featured <span className="gradient-text">Portfolio</span></h2>
        </motion.div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                f === filter ? "gradient-button" : "bg-secondary border border-border hover:border-primary/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card-hover group overflow-hidden cursor-pointer"
              >
                <div className="h-48 relative" style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}88)` }}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <ExternalLink size={18} /> View Project
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.category}</span>
                  <h3 className="font-heading font-semibold text-lg mt-3">{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
