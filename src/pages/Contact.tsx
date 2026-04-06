import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/np-digital-solutions-a8b162400/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkdYPMSIaQ%2FihXFNFUDmMaw%3D%3D",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/npdigitalsolutions001/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61574331538312",
    label: "Facebook",
  },
  {
    icon: Github,
    href: "https://github.com/npdigitalsolutions001",
    label: "Facebook",
  },
];

const Contact = () => {
  // 🔥 ADDED
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // 🔥 ADDED

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubjectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("https://api.npdigitalsolution.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      alert(data?.message || "Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        {/* Background decoration */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[150px] pointer-events-none"
          style={{ animationDelay: "2s" }}
        />

        <Navbar />

        <PageHeader
          badge="Get in Touch"
          title="Let's Start a"
          highlight="Conversation"
          description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours."
        />

        <section className="section-padding">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* LEFT FORM (ONLY THIS UPDATED) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <h3 className="font-heading font-bold text-2xl mb-6 relative z-10">
                Send Us a Message
              </h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (optional)"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <Select
                  value={formData.subject}
                  onValueChange={handleSubjectChange}
                  required
                >
                  <SelectTrigger className="w-full px-4 py-3 h-auto rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:ring-0 focus:border-primary/50 transition-colors">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-secondary border-border">
                    <SelectItem value="Web-Development">Web Development</SelectItem>
                    <SelectItem value="App-Development">App Development</SelectItem>
                    <SelectItem value="SEO">SEO Optimization</SelectItem>
                    <SelectItem value="Digital-Marketing">Digital Marketing</SelectItem>
                    <SelectItem value="UI/UX-Design">UI/UX Design</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="gradient-button px-8 py-3.5 text-sm w-full inline-flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </motion.div>

            {/* RIGHT SIDE (100% ORIGINAL — NOTHING REMOVED) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  text: "1st floor Nanda building Ambay Market, Jamuna Dairy, Sodala,\n Jaipur, Rajasthan 302006",
                },
                { icon: Phone, title: "Call Us", text: "+91 9509167614" },
                {
                  icon: Mail,
                  title: "Email Us",
                  text: " npdigitalsolutions001@gmail.com",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  text: "Mon – Fri: 10:00 AM – 7:00 PM\nSat – Sun: Closed",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <div className="glass-card p-5">
                <h4 className="font-heading font-semibold text-sm mb-3">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="glass-card overflow-hidden rounded-2xl h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1186.9402846792677!2d75.77138001788163!3d26.902462148173132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4657e04180d%3A0xd39e8f2a5d295ffe!2sAmbey%20Market%2C%20Jamuna%20Dairy%2C%20Gayatri%20Nagar%2C%20Sodala%2C%20Jaipur%2C%20Rajasthan%20302006!5e0!3m2!1sen!2sin!4v1774947591241!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 320 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default Contact;
