import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Frontend",
    techs: [
      { name: "React", color: "hsl(192, 91%, 56%)" },
      { name: "Next.js", color: "hsl(0, 0%, 70%)" },
      { name: "Tailwind", color: "hsl(198, 93%, 60%)" },
      { name: "TypeScript", color: "hsl(211, 60%, 48%)" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", color: "hsl(120, 40%, 50%)" },
      { name: "Express", color: "hsl(0, 0%, 60%)" },
      { name: "Python", color: "hsl(55, 70%, 55%)" },
    ],
  },
  {
    label: "Database",
    techs: [
      { name: "MongoDB", color: "hsl(120, 50%, 40%)" },
      { name: "MySQL", color: "hsl(200, 70%, 45%)" },
      { name: "PostgreSQL", color: "hsl(210, 50%, 50%)" },
    ],
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Tools</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Technology <span className="gradient-text">Stack</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.15, duration: 0.5 }}
              className="glass-card p-6 md:p-8"
            >
              <h3 className="font-heading font-semibold text-lg mb-6 text-center">{cat.label}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {cat.techs.map((t) => (
                  <motion.div
                    key={t.name}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="px-4 py-2.5 rounded-xl bg-secondary/60 border border-border/50 text-sm font-medium flex items-center gap-2 cursor-default"
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.color }} />
                    {t.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
