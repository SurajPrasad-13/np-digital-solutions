import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-background/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden"
          >
            {/* Fluid Background Decorations */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/25 rounded-full blur-[80px] pointer-events-none animate-pulse" />
            <div 
              className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-[80px] pointer-events-none animate-pulse" 
              style={{ animationDelay: "2s" }} 
            />

            <button
              onClick={closePopup}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 text-foreground hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors z-50"
            >
              <X size={18} />
            </button>

            <div className="p-6 relative z-10">
              <h2 className="text-xl font-bold  text-center mb-4">Contact Us</h2>
              
              <form 
                className="space-y-2.5" 
                onSubmit={(e) => {
                  e.preventDefault();
                  closePopup();
                }}
              >
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    required
                    className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    required
                    className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1 ml-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1 ml-1">Company</label>
                  <input
                    type="text"
                    placeholder="Enter Company Name"
                    className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm placeholder:text-muted-foreground/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1 ml-1">Project Details</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={2}
                    required
                    className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none placeholder:text-muted-foreground/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-button font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all mt-4"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
