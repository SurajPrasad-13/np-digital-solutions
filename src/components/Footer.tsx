import { Github, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from '../assets/NP2full.png'

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Animated shapes */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-16 w-32 h-32 rounded-full bg-accent/10 blur-2xl"
        animate={{ y: [0, 15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 w-16 h-16 rounded-2xl bg-primary/8 blur-lg rotate-45"
        animate={{ rotate: [45, 90, 45], y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-20 right-1/3 w-10 h-10 rounded-xl bg-accent/15 blur-md"
        animate={{ y: [0, 18, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-24 h-24 rounded-full bg-primary/5 blur-xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="font-heading font-bold text-xl mb-4 block">
              {/* <span className="gradient-text">NP</span> Digital */}
              <img src={Logo} alt="" className=" h-16" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building digital experiences that drive growth and transform businesses worldwide.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["UI/UX Design", "Web Development", "App Development", "SEO", "Marketing"].map((l) => (
                <li key={l}>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Blog", to: "/blogs" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Get the latest insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="gradient-button p-2.5">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 NP Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
