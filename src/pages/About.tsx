import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, Users, Rocket, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const team = [
  { name: "Pramod Saini", role: "Director", initials: "PS" },
  { name: "Pooja Morya", role: "Human Resource", initials: "PM" },
  { name: " Kamlesh", role: "React Developer", initials: "KS" },
  { name: "Suraj Prasad", role: "Lead Designer", initials: "SP" },
  { name: "Aakash Kumawat", role: "Python Developer", initials: "AK" },
  // { name: "Sneha Gupta", role: "Marketing Head", initials: "SG" },
  // { name: "Arjun Mehta", role: "CTO", initials: "AM" },
  // { name: "Ananya Roy", role: "SEO Specialist", initials: "AR" },
];

const timeline = [
  {
    year: "2021",
    title: "Founded",
    desc: "NP Digital Solutions was born with a vision to empower businesses through digital innovation.",
  },
  {
    year: "2022",
    title: "First Major Client",
    desc: "Secured our first enterprise client and delivered a full-scale e-commerce platform.",
  },
  {
    year: "2023",
    title: "Team Expansion",
    desc: "Grew to a team of 10+ talented professionals across design, development, and marketing.",
  },
  {
    year: "2024",
    title: "25+ Clients Served",
    desc: "Reached a milestone of serving 25+ happy clients with a 99% satisfaction rate.",
  },
  {
    year: "2025",
    title: "Going Global",
    desc: "Expanded services internationally, partnering with clients across 5+ countries.",
  },
  {
    year: "2026",
    title: "Innovation Hub",
    desc: "Launched our own digital products and SaaS tools for modern businesses.",
  },
];

const About = () => {
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const timelineRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <PageHeader
          badge="About Us"
          title="We're a Team of"
          highlight="Digital Innovators"
          description="With 5+ years of experience, we've been helping businesses transform their digital presence and achieve remarkable growth."
        />

        {/* Mission & Vision */}
        <section className="section-padding" ref={missionRef}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To empower businesses of all sizes with cutting-edge digital solutions that drive measurable results, foster innovation, and create lasting impact in the digital landscape.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To become the most trusted digital partner for businesses worldwide, known for our innovative approach, exceptional quality, and unwavering commitment to client success.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card p-8 md:p-10"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Our Values
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
                What <span className="gradient-text">Drives Us</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  text: "We pursue the highest standards in everything we do.",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  text: "We work closely with clients as true partners.",
                },
                {
                  icon: Rocket,
                  title: "Innovation",
                  text: "We embrace new technologies and creative solutions.",
                },
                {
                  icon: Heart,
                  title: "Passion",
                  text: "We love what we do and it shows in our work.",
                },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card-hover p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding" ref={teamRef}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Our Team
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
                Meet the <span className="gradient-text">Experts</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={teamInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card-hover p-5 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 font-heading font-bold text-primary text-xl">
                    {m.initials}
                  </div>
                  <h4 className="font-heading font-semibold text-sm">
                    {m.name}
                  </h4>
                  <p className="text-muted-foreground text-xs mt-1">{m.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-secondary/30" ref={timelineRef}>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Our Journey
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
                The <span className="gradient-text">Timeline</span>
              </h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12 }}
                  className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} pl-12 md:pl-0`}
                >
                  <div className="hidden md:block flex-1" />
                  <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background mt-2" />
                  <div className="flex-1 glass-card p-5">
                    <span className="text-primary font-heading font-bold text-sm">
                      {t.year}
                    </span>
                    <h4 className="font-heading font-semibold mt-1">
                      {t.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
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
};

export default About;
