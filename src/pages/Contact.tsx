import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";

const Contact = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        badge="Get in Touch"
        title="Let's Start a"
        highlight="Conversation"
        description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours."
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="font-heading font-bold text-2xl mb-6">Send Us a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors" />
                <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <input type="tel" placeholder="Phone Number (optional)" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors" />
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors" />
              <textarea placeholder="Your Message" rows={5} required className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none" />
              <button type="submit" className="gradient-button px-8 py-3.5 text-sm w-full inline-flex items-center justify-center gap-2">
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {[
              { icon: MapPin, title: "Visit Us", text: "123 Digital Avenue, Suite 456\nNew York, NY 10001" },
              { icon: Phone, title: "Call Us", text: "+1 (555) 123-4567" },
              { icon: Mail, title: "Email Us", text: "hello@npdigital.com" },
              { icon: Clock, title: "Working Hours", text: "Mon – Fri: 9:00 AM – 6:00 PM\nSat – Sun: Closed" },
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
                  <h4 className="font-heading font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="glass-card p-5">
              <h4 className="font-heading font-semibold text-sm mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="glass-card overflow-hidden rounded-2xl h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909!2d-74.259867!3d40.697488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  </PageTransition>
);

export default Contact;
