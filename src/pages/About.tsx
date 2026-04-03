import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, Users, Rocket, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Aakash from "../assets/Aakash.jpeg";
import Pradeep from "../assets/Pradeep.png";
import Pooja from "../assets/Pooja.jpg";
import Suraj from "../assets/Suraj.png";
import Pramod from '../assets/Director_Pramod.jpeg'

const director = {
  name: "Pramod Saini",
  role: "Director - NP Digital Solutions",
  badge: "Leadership • Strategy • Innovation",
  quote:
    "We don't just create technology — we create growth, opportunity, and success.",
  description: [
    "With 5+ years of global tech experience, Pramod believes in building futuristic digital ecosystems.",
    "He has worked with startups, mid-scale companies, and global enterprises, helping them adopt modern technologies such as Cloud, AI Automation, Full-Stack Engineering, Data-Driven Architecture, Cybersecurity, and Scalable Digital Platforms. His focus is on building systems that are fast, reliable, future-ready, and capable of supporting large-scale growth.",
  ],
  stats: [
    { label: "Years Leading", value: "5+" },
    { label: "Projects Done", value: "10+" },
    { label: "Enterprise Clients", value: "25+" },
  ],
  footerQuote:
    "Leadership is not a position — it's an influence that creates change.",
  image: Pramod,
};

const team = [
  {
    name: "Pooja Mourya",
    role: "HR Manager",
    initials: "PM",
    description:
      "Experienced HR professional specializing in talent acquisition and employee engagement.",
    skills: [
      "Recruitment",
      "Employee Relations",
      "Onboarding",
      "HR Policies",
      "Communication",
      "Conflict Resolution",
      "Organizational Development",
    ],
    image: Pooja,
  },
  {
    name: "Aakash Kumawat",
    role: "Senior Backend Developer",
    initials: "AK",
    description:
      "Enterprise backend engineer with expertise in distributed systems & APIs.",
    skills: [
      "Python",
      "Django",
      "Flask",
      "RESTful APIs",
      "Microservices",
      "Database Design",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
    ],
    image: Aakash,
  },
  {
    name: "Suraj Prasad",
    role: "Frontend Developer",
    initials: "SP",
    description:
      "Passionate frontend developer skilled in React and modern web technologies.",
    skills: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
      "UI/UX",
      "Responsive Design",
      "Git",
      "Tailwind",
      "Redux",
      "Sass",
      "TypeScript",
    ],
    image: Suraj,
  },
  {
    name: "Pradeep Kumawat",
    role: "Frontend Developer",
    initials: "PK",
    description:
      "Passionate frontend developer skilled in React and modern web technologies.",
    skills: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
      "UI/UX",
      "Responsive Design",
      "Git",
      "Tailwind",
      "Redux",
      "Sass",
    ],
    image: Pradeep,
  },
  {
    name: "Kamal Sharma",
    role: "Frontend Developer",
    initials: "KS",
    description:
      "Skilled frontend developer with a passion for building responsive and user-friendly web applications.",
    skills: [
      "React",
      "Redux",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "CSS",
      "HTML",
      "UI/UX",
      "Responsive Design",
      "Git",
      "GitHub",
      "Sass",
    ],
    image: "/placeholder.svg",
  },
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

        {/* Director Section */}
        <section className="section-padding bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative max-w-md mx-auto lg:mx-0"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover bg-primary/5"
                  />
                </div>
                {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" /> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5} }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-border text-xs font-medium text-muted-foreground mb-6 self-start shadow-sm">
                  {director.badge}
                </div>

                <div className="relative mb-6">
                  <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-primary rounded-full" />
                  <h3 className="text-xl md:text-2xl  lg:text-3xl font-heading  italic leading-tight text-foreground/90">
                    "{director.quote}"
                  </h3>
                </div>

                <h2 className=" text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">
                  {director.name}
                </h2>
                <p className=" md:text-xl font-heading text-primary mb-4">
                  {director.role}
                </p>

                <div className="space-y-4 mb-8">
                  {director.description.map((p, i) => (
                    <p
                      key={i}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  {director.stats.map((stat, i) => (
                    <div key={i} className="glass-card p-4 text-center">
                      <div className="text-3xl font-heading font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/30" />
                  <p className="text-sm italic text-muted-foreground">
                    "{director.footerQuote}"
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding" ref={teamRef}>
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-12 "
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Our Team
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
                Meet the <span className="gradient-text">Experts</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[1rem] p-4 shadow-xl shadow-gray-100 border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-2 border-4 border-primary/70">
                    <div className="w-full h-full bg-primary/5 flex items-center justify-center font-heading font-bold text-primary text-2xl">
                      {m.image && m.image !== "/placeholder.svg" ? (
                        <img
                          src={m.image}
                          alt={m.name}
                          className="w-full h-full object-cover object-top "
                        />
                      ) : (
                        m.initials
                      )}
                    </div>
                  </div>

                  <h4 className="font-heading font-bold  mb-1 text-gray-900">
                    {m.name}
                  </h4>
                  <p className="text-primary font-medium text-xs mb-4">
                    {m.role}
                  </p>

                  <p className="text-gray-500 text-xs leading-relaxed mb-6">
                    {m.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {m.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="gradient-button w-full py-3 rounded-xl font-medium mt-auto">
                    View Portfolio
                  </button>
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
