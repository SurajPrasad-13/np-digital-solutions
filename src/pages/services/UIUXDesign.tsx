import { motion } from "framer-motion";
import { Figma, Layers, Eye, Users, MousePointerClick, PenTool } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  { icon: Users, title: "User Research", desc: "Deep-dive interviews, surveys, and persona creation to understand your audience." },
  { icon: Layers, title: "Wireframing", desc: "Low and high-fidelity wireframes that map the perfect user journey." },
  { icon: PenTool, title: "Visual Design", desc: "Pixel-perfect interfaces with cohesive design systems and brand alignment." },
  { icon: MousePointerClick, title: "Prototyping", desc: "Interactive prototypes in Figma for stakeholder buy-in before development." },
  { icon: Eye, title: "Usability Testing", desc: "Real-user testing sessions to validate designs and uncover friction points." },
  { icon: Figma, title: "Design Systems", desc: "Scalable component libraries ensuring consistency across your entire product." },
];

const process = [
  { step: "Research", desc: "Understand users, competitors, and business goals through data-driven analysis." },
  { step: "Ideate", desc: "Brainstorm solutions, create user flows, and define the information architecture." },
  { step: "Design", desc: "Craft beautiful, functional interfaces with attention to every pixel." },
  { step: "Test & Iterate", desc: "Validate with real users, gather feedback, and refine until perfect." },
];

const UIUXDesign = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        badge="UI/UX Design"
        title="Design That"
        highlight="Converts"
        description="Beautiful, intuitive interfaces crafted through research-driven design thinking to maximize user engagement."
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Design <span className="gradient-text">Process</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary font-bold">{i + 1}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">{p.step}</h3>
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

export default UIUXDesign;
