import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook,
  X,
  Share2,
  MessageSquare,
  Phone,
} from "lucide-react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    // {
    //   icon: MessageSquare,
    //   href: "sms:+919509167614",
    //   color: "bg-blue-500",
    //   label: "SMS",
    // },
    {
      icon: Phone,
      href: "tel:+919509167614",
      color: "bg-gray-700",
      label: "Call",
    },
  ];

  // Radial configuration
  const radius = 140; // Increased radius to prevent overlap
  const startAngle = -180; // Start angle in degrees (Left)
  const endAngle = -90; // End angle in degrees (Top)

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center">
      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors z-50 ${
          isOpen
            ? "bg-muted text-muted-foreground"
            : "bg-primary text-primary-foreground animate-pulse-glow"
        }`}
        aria-label="Toggle social menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
            >
              <Share2 size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Radial Social Icons */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute">
            {socialLinks.map((social, index) => {
              // Calculate angle for each icon
              const angle =
                startAngle +
                (endAngle - startAngle) * (index / (socialLinks.length - 1));
              const radian = (angle * Math.PI) / 180;
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.1 }}
                  className={`absolute w-12 h-12 rounded-full flex items-center justify-center shadow-md text-white -translate-x-1/2 -translate-y-1/2 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton;
