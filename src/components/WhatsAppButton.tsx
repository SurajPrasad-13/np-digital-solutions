import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/9509167614"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow"
    style={{ background: "hsl(142, 70%, 45%)" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={24} className="text-primary-foreground" />
  </motion.a>
);

export default WhatsAppButton;
