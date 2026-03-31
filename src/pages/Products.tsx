import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Shield, Layout, Code2, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const products = [
  {
    icon: BarChart3,
    name: "NP Analytics",
    tagline: "Real-time business intelligence",
    desc: "Powerful analytics dashboard with real-time insights, custom reports, and AI-powered recommendations for data-driven decisions.",
    features: ["Real-time dashboards", "Custom report builder", "AI insights", "Team collaboration"],
    price: "$49/mo",
    color: "hsl(252, 85%, 60%)",
  },
  {
    icon: Layout,
    name: "NP Builder",
    tagline: "No-code website builder",
    desc: "Drag-and-drop website builder with 100+ premium templates, built-in SEO tools, and lightning-fast hosting.",
    features: ["100+ templates", "Drag & drop editor", "Built-in SEO", "One-click deploy"],
    price: "$29/mo",
    color: "hsl(200, 100%, 50%)",
  },
  {
    icon: Shield,
    name: "NP Guard",
    tagline: "Website security suite",
    desc: "Comprehensive website security monitoring with threat detection, SSL management, and automated vulnerability scanning.",
    features: ["24/7 monitoring", "Threat detection", "SSL management", "Auto-patching"],
    price: "$39/mo",
    color: "hsl(160, 70%, 45%)",
  },
  {
    icon: Code2,
    name: "NP Deploy",
    tagline: "CI/CD made simple",
    desc: "Streamlined deployment pipeline for modern web applications with zero-downtime deploys and rollback protection.",
    features: ["One-click deploy", "Auto-scaling", "Rollback protection", "GitHub integration"],
    price: "$19/mo",
    color: "hsl(270, 80%, 55%)",
  },
  {
    icon: Palette,
    name: "NP Design Kit",
    tagline: "Premium design system",
    desc: "Complete design system with 500+ components, design tokens, and Figma integration for consistent branding.",
    features: ["500+ components", "Figma plugin", "Design tokens", "Dark mode support"],
    price: "$99/once",
    color: "hsl(45, 90%, 55%)",
  },
  {
    icon: Zap,
    name: "NP Speed",
    tagline: "Performance optimization",
    desc: "Automated performance optimization tool that analyzes and speeds up your website with actionable insights.",
    features: ["Core Web Vitals", "Image optimization", "Code splitting", "CDN integration"],
    price: "$24/mo",
    color: "hsl(340, 80%, 55%)",
  },
];

const Products = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        badge="Our Products"
        title="Digital Tools for"
        highlight="Modern Businesses"
        description="Explore our suite of digital products designed to help businesses scale, optimize, and grow."
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card-hover p-6 md:p-8 flex flex-col group"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: `${p.color}20` }}>
                <p.icon size={28} style={{ color: p.color }} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-1">{p.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{p.tagline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-auto pt-5 border-t border-border">
                <span className="font-heading font-bold text-xl">{p.price}</span>
                <Link to="/contact" className="gradient-button px-5 py-2 text-sm inline-flex items-center gap-1.5">
                  Get Started <ArrowRight size={14} />
                </Link>
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

export default Products;
