import { Github, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from '../assets/NP2full.png'
import {
  MessageCircle,
  Facebook,
  X,
  Phone,
} from "lucide-react";
import { useState } from "react";
import logo from '../assets/favicon1.png'

const Footer = () => {

  const [email, setEmail] = useState(""); // 🔥 ADDED
  const [loading, setLoading] = useState(false); // 🔥 ADDED

  // 🔥 ADDED
  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://api.npdigitalsolution.com/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      alert(data.message || data.detail);
      setEmail("");

    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: MessageCircle,
      href: "https://wa.me/9509167614",
      color: "bg-[#25D366]",
      label: "WhatsApp",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/np-digital-solutions-a8b162400/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkdYPMSIaQ%2FihXFNFUDmMaw%3D%3D",
      color: "bg-[#0077B5]",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/npdigitalsolutions001/",
      color: "bg-[#E4405F]",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61574331538312",
      color: "bg-[#1877F2]",
      label: "Facebook",
    },
    {
      icon: Phone,
      href: "tel:+919509167614",
      color: "bg-gray-700",
      label: "Call",
    },
  ];

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      
      {/* Animated shapes */}
      <motion.div
        className="absolute top-8 left-8 w-24 h-24 rounded-full border-2 border-primary/30 bg-primary/15"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-12 w-36 h-36 rounded-full border-2 border-accent/25 bg-accent/10"
        animate={{ y: [0, 15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-12 left-1/3 w-20 h-20 rounded-2xl border-2 border-primary/25 bg-primary/10 rotate-45"
        animate={{ rotate: [45, 90, 45], y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-16 right-1/3 w-14 h-14 rounded-xl border-2 border-accent/30 bg-accent/15"
        animate={{ y: [0, 18, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-8 w-28 h-28 rounded-full border-2 border-primary/20 bg-primary/10"
        animate={{ scale: [1, 1.2, 1], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-10 h-10 rounded-full bg-primary/25"
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Logo */}
          <div>
            <Link to="/" className="font-heading font-bold text-xl mb-4 block">
              <img src={Logo} alt="" className=" h-16" />
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building digital experiences that drive growth and transform businesses worldwide.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
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

          {/* Company */}
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

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest insights delivered to your inbox.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email} // 🔥 ADDED
                onChange={(e) => setEmail(e.target.value)} // 🔥 ADDED
                className="flex-1 px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />

              <button
                onClick={handleSubscribe} // 🔥 ADDED
                disabled={loading} // 🔥 ADDED
                className="gradient-button p-2.5"
              >
                {loading ? "..." : <Send size={20} />} {/* 🔥 UPDATED */}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-black flex items-center justify-center gap-1">
            © 2026 <img className="h-[14px]" src={logo} alt="" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;