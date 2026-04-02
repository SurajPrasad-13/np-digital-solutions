import { motion } from "framer-motion";
import { Smartphone, CheckCircle, ArrowRight, Cpu, Palette, BarChart3, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const features = [
  { icon: Cpu, title: "Cross-Platform", desc: "Build once, deploy everywhere with React Native and Flutter for iOS and Android." },
  { icon: Palette, title: "Stunning UI", desc: "Native-feeling interfaces with fluid animations and platform-specific design patterns." },
  { icon: BarChart3, title: "Analytics Built-In", desc: "Track user behavior, crash reports, and performance metrics from day one." },
  { icon: RefreshCw, title: "OTA Updates", desc: "Push updates instantly without app store review cycles using CodePush." },
];

const platforms = [
  { name: "iOS", desc: "Swift & SwiftUI for native Apple experiences" },
  { name: "Android", desc: "Kotlin & Jetpack Compose for Google ecosystem" },
  { name: "React Native", desc: "Cross-platform with near-native performance" },
  { name: "Flutter", desc: "Beautiful apps from a single Dart codebase" },
];

const AppDevelopment = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        badge="App Development"
        title="Mobile Apps That"
        highlight="Users Love"
        description="Native and cross-platform mobile applications delivering seamless experiences on iOS and Android."
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Platforms We <span className="gradient-text">Support</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center hover:border-primary/30 transition-all">
                <Smartphone className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-heading font-bold text-xl mb-2">{p.name}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
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

export default AppDevelopment;
