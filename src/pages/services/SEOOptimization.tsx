import { motion } from "framer-motion";
import { Search, TrendingUp, FileText, BarChart3, Link2, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  { icon: Search, title: "Technical SEO", desc: "Site audits, schema markup, crawlability fixes, and Core Web Vitals optimization." },
  { icon: FileText, title: "Content Strategy", desc: "Keyword research, content calendars, and SEO-optimized blog posts that rank." },
  { icon: Link2, title: "Link Building", desc: "White-hat backlink strategies through outreach, guest posting, and digital PR." },
  { icon: Globe, title: "Local SEO", desc: "Google Business Profile optimization, local citations, and map pack rankings." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Monthly reports with actionable insights on traffic, rankings, and conversions." },
  { icon: TrendingUp, title: "Competitor Analysis", desc: "Deep analysis of competitor strategies to find gaps and opportunities." },
];

const stats = [
  { value: "300%", label: "Average Traffic Increase" },
  { value: "Top 3", label: "Keyword Rankings" },
  { value: "50+", label: "Clients Ranked" },
  { value: "95%", label: "Client Retention" },
];

const SEOOptimization = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        badge="SEO Optimization"
        title="Rank Higher,"
        highlight="Grow Faster"
        description="Data-driven SEO strategies that boost your search visibility, drive organic traffic, and deliver measurable ROI."
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{s.value}</div>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </motion.div>
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

export default SEOOptimization;
