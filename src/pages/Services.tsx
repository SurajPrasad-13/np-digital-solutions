import { motion } from "framer-motion";
import { Figma, Search, Globe, Smartphone, Megaphone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import UIImg from "@/assets/UI1.jpg";
import SEOImg from "@/assets/SEO.jpg";

const services = [
  {
    icon: Figma,
    title: "UI/UX Design",
    desc: "We craft beautiful, intuitive interfaces that captivate users and drive meaningful engagement across web and mobile platforms.",
    benefits: ["User Research & Personas", "Wireframing & Prototyping", "Visual Design Systems", "Usability Testing"],
    image: UIImg,
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Data-driven search engine optimization strategies that boost rankings, increase organic traffic, and deliver measurable ROI.",
    benefits: ["Technical SEO Audits", "Keyword Research & Strategy", "On-Page & Off-Page SEO", "Performance Analytics"],
    image: SEOImg,
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance, scalable websites built with modern technologies. From landing pages to complex web applications.",
    benefits: ["React & Next.js Development", "E-Commerce Solutions", "CMS Integration", "Performance Optimization"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
    benefits: ["React Native & Flutter", "Native iOS & Android", "API Integration", "App Store Optimization"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing campaigns that amplify your brand, engage audiences, and convert leads into customers.",
    benefits: ["Social Media Marketing", "PPC & Paid Ads", "Email Marketing", "Content Strategy"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              
              {/* TEXT SECTION */}
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <s.icon className="text-primary" size={32} />
                </div>

                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                  {s.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {s.desc}
                </p>

                <ul className="space-y-3 mb-8">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="gradient-button px-6 py-3 text-sm inline-flex items-center gap-2"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>

              {/* IMAGE SECTION */}
              <div
                className={`glass-card overflow-hidden flex items-center justify-center h-64 lg:h-80 object-cover ${
                  i % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
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