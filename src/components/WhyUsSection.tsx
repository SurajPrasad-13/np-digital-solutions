import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Users, TrendingUp, Palette, Clock } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Lightning Fast", text: "We deliver pixel-perfect results at speed without compromising quality." },
  { icon: Shield, title: "Secure & Reliable", text: "Enterprise-grade security practices baked into every project." },
  { icon: Users, title: "Client-Centric", text: "Your success is our mission — we collaborate closely at every step." },
  { icon: TrendingUp, title: "Growth Focused", text: "Every solution is engineered to maximize ROI and business growth." },
  { icon: Palette, title: "Design Excellence", text: "Award-worthy designs that captivate users and elevate brands." },
  { icon: Clock, title: "On-Time Delivery", text: "Reliable timelines with transparent progress updates throughout." },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Why Clients <span className="gradient-text">Love Working</span> With Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 md:p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <r.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
