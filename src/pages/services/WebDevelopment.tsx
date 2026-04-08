import { motion } from "framer-motion";
import {
  Globe,
  CheckCircle,
  ArrowRight,
  Code,
  Zap,
  Shield,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import AWS from "../../assets/AWS.svg";
import Tailwind from "../../assets/Tailwind.svg";

const features = [
  {
    icon: Code,
    title: "Modern Tech Stack",
    desc: "React, Next.js, TypeScript, and Tailwind CSS for blazing-fast, maintainable codebases.",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Optimized for Core Web Vitals with lazy loading, code splitting, and CDN delivery.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    desc: "Enterprise-grade security with SSL, OWASP compliance, and cloud-native architecture.",
  },
  {
    icon: Layers,
    title: "CMS Integration",
    desc: "Headless CMS solutions with WordPress, Strapi, or Sanity for easy content management.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We analyze your goals, audience, and competitors to craft a strategic blueprint.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "Wireframes and prototypes that align with your brand and delight your users.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Clean, modular code built with modern frameworks for speed and reliability.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    desc: "Rigorous QA across devices and browsers, followed by a seamless deployment.",
  },
];

const techStack = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  { name: "Tailwind", logo: Tailwind },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  { name: "AWS", logo: AWS },
];

const WebDevelopment = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        badge="Web Development"
        title="High-Performance"
        highlight="Web Solutions"
        description="We build fast, scalable, and beautiful websites that drive conversions and deliver exceptional user experiences."
      />

      {/* Features Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Why Choose Our{" "}
              <span className="gradient-text">Web Development</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Our <span className="gradient-text">Process</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <span className="text-6xl font-bold text-primary/10 absolute -top-4 -left-2">
                  {p.step}
                </span>
                <div className="pt-10 pl-2">
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Technologies We <span className="gradient-text">Use</span>
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <motion.span
                key={t.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full glass-card text-sm font-medium hover:border-primary/30 transition-all flex items-center justify-center gap-2"
              >
                <img src={t.logo} alt={t.name} className="size-6" />
                {t.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  </PageTransition>
);

export default WebDevelopment;
