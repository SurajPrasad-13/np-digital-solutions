import { motion } from "framer-motion";
import { Megaphone, Target, Mail, Share2, PenTool, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  { icon: Share2, title: "Social Media Marketing", desc: "Engaging campaigns across Instagram, LinkedIn, Facebook, and Twitter to grow your brand." },
  { icon: Target, title: "PPC & Paid Ads", desc: "Google Ads, Meta Ads, and retargeting campaigns optimized for maximum ROI." },
  { icon: Mail, title: "Email Marketing", desc: "Automated email sequences, newsletters, and drip campaigns that convert subscribers." },
  { icon: PenTool, title: "Content Marketing", desc: "Blog posts, infographics, videos, and whitepapers that establish thought leadership." },
  { icon: Megaphone, title: "Brand Strategy", desc: "Comprehensive brand positioning, messaging frameworks, and identity development." },
  { icon: TrendingUp, title: "Growth Hacking", desc: "Rapid experimentation across channels to find the fastest path to growth." },
];

const channels = ["Google Ads", "Meta Ads", "LinkedIn Ads", "Email", "Instagram", "YouTube", "TikTok", "Twitter/X"];

const DigitalMarketing = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        badge="Digital Marketing"
        title="Amplify Your"
        highlight="Brand Reach"
        description="Comprehensive digital marketing campaigns that engage audiences, build brand authority, and convert leads into loyal customers."
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Channels We <span className="gradient-text">Master</span></h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {channels.map((c, i) => (
              <motion.span key={c} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="px-5 py-2.5 rounded-full glass-card text-sm font-medium hover:border-primary/30 transition-all">
                {c}
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

export default DigitalMarketing;
