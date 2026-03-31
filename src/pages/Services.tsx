import { motion } from "framer-motion";
import { Figma, Search, Globe, Smartphone, Megaphone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    icon: Figma,
    title: "UI/UX Design",
    desc: "We craft beautiful, intuitive interfaces that captivate users and drive meaningful engagement across web and mobile platforms.",
    benefits: ["User Research & Personas", "Wireframing & Prototyping", "Visual Design Systems", "Usability Testing"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Data-driven search engine optimization strategies that boost rankings, increase organic traffic, and deliver measurable ROI.",
    benefits: ["Technical SEO Audits", "Keyword Research & Strategy", "On-Page & Off-Page SEO", "Performance Analytics"],
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance, scalable websites built with modern technologies. From landing pages to complex web applications.",
    benefits: ["React & Next.js Development", "E-Commerce Solutions", "CMS Integration", "Performance Optimization"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
    benefits: ["React Native & Flutter", "Native iOS & Android", "API Integration", "App Store Optimization"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing campaigns that amplify your brand, engage audiences, and convert leads into customers.",
    benefits: ["Social Media Marketing", "PPC & Paid Ads", "Email Marketing", "Content Strategy"],
  },
];

const Services = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        badge="Our Services"
        title="Solutions That"
        highlight="Drive Results"
        description="We offer comprehensive digital services tailored to your business needs. From design to deployment, we've got you covered."
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <s.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="gradient-button px-6 py-3 text-sm inline-flex items-center gap-2">
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
              <div className={`glass-card p-8 md:p-12 flex items-center justify-center min-h-[280px] ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="w-full h-full rounded-2xl" style={{ background: `linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--accent) / 0.15))` }}>
                  <div className="flex items-center justify-center h-full min-h-[200px]">
                    <s.icon className="text-primary/30" size={80} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  </PageTransition>
);

export default Services;
