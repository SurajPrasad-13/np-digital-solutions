import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Figma, Search, Globe, Smartphone, Megaphone, ArrowRight } from "lucide-react";

const services = [
  { icon: Figma, title: "UI/UX Design", desc: "Beautiful, intuitive interfaces that delight users and drive engagement across all platforms." },
  { icon: Search, title: "SEO Optimization", desc: "Data-driven strategies to boost your search rankings and organic traffic." },
  { icon: Globe, title: "Web Development", desc: "High-performance websites built with cutting-edge technologies for speed and scale." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile apps that deliver seamless user experiences." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Comprehensive campaigns that amplify your brand and convert audiences." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">What We Do</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Our <span className="gradient-text">Services</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 md:p-8 group flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:neon-glow transition-all">
                <s.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">{s.desc}</p>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
