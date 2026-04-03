import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Clock, Briefcase, ArrowRight, Heart, Zap, Users, Coffee, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import WhatsAppButton from "@/components/WhatsAppButton";

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    desc: "Build modern web applications using React, TypeScript, and Next.js. 3+ years experience required.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    dept: "Design",
    location: "New York",
    type: "Full-time",
    desc: "Create stunning user interfaces and seamless experiences for web and mobile applications.",
  },
  {
    id: 3,
    title: "SEO Specialist",
    dept: "Marketing",
    location: "Remote",
    type: "Full-time",
    desc: "Develop and execute SEO strategies to drive organic traffic and improve search rankings.",
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    desc: "Work across the stack with Node.js, React, and cloud services to deliver end-to-end solutions.",
  },
  {
    id: 5,
    title: "Digital Marketing Manager",
    dept: "Marketing",
    location: "New York",
    type: "Full-time",
    desc: "Lead digital marketing campaigns across channels including social, email, and paid advertising.",
  },
  {
    id: 6,
    title: "Mobile App Developer",
    dept: "Engineering",
    location: "Remote",
    type: "Contract",
    desc: "Build cross-platform mobile apps using React Native or Flutter with clean architecture.",
  },
];

const culture = [
  {
    icon: Heart,
    title: "Work-Life Balance",
    text: "Flexible hours and remote-first culture.",
  },
  {
    icon: Zap,
    title: "Growth & Learning",
    text: "Annual learning budget and conference passes.",
  },
  {
    icon: Users,
    title: "Amazing Team",
    text: "Collaborative, diverse, and passionate people.",
  },
  {
    icon: Coffee,
    title: "Great Perks",
    text: "Health benefits, team retreats, and more.",
  },
];

const Careers = () => {
  const [applyingTo, setApplyingTo] = useState<number | null>(null);
  const [resumeName, setResumeName] = useState<string>("");

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <PageHeader
          badge="Careers"
          title="Join Our"
          highlight="Growing Team"
          description="We're looking for talented individuals who are passionate about building the future of digital experiences."
        />

        {/* Culture */}
        <section className="section-padding bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Our Culture
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
                Why You'll <span className="gradient-text">Love Working</span>{" "}
                Here
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {culture.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card-hover p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <c.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm">{c.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Open Positions
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
                Find Your <span className="gradient-text">Perfect Role</span>
              </h2>
            </div>
            <div className="space-y-4">
              {jobs.map((j, i) => (
                <motion.div
                  key={j.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass-card-hover p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-heading font-semibold text-lg">
                        {j.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1 mb-3">
                        {j.desc}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase size={12} /> {j.dept}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {j.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {j.type}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setApplyingTo(j.id)}
                      className="gradient-button px-5 py-2.5 text-sm inline-flex items-center gap-1.5 shrink-0"
                    >
                      Apply <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Modal */}
        {applyingTo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-8 w-full max-w-lg relative"
            >
              <button
                onClick={() => {
                  setApplyingTo(null);
                  setResumeName("");
                }}
                className="absolute top-4 right-4 p-1 hover:bg-secondary rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="font-heading font-bold text-xl mb-1">
                Apply for {jobs.find((j) => j.id === applyingTo)?.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill in your details and we'll get back to you.
              </p>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setApplyingTo(null);
                  setResumeName("");
                }}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50"
                />
                <input
                  type="url"
                  placeholder="LinkedIn / Portfolio URL"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50"
                />
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setResumeName(file.name);
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm flex items-center text-muted-foreground">
                    {resumeName || "upload Your Resume"}
                  </div>
                </div>
                <textarea
                  placeholder="Tell us about yourself..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 resize-none"
                />
                <button
                  type="submit"
                  className="gradient-button px-6 py-3 text-sm w-full"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        )}

        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default Careers;
