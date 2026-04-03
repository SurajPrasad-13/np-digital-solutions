import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

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
            className="relative w-full max-w-md bg-[#F0FDF4] rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-emerald-100/80 backdrop-blur-sm text-emerald-900 hover:bg-emerald-200 transition-colors z-20"
            >
              <X size={18} />
            </button>

            <div 
              className="max-h-[90vh] overflow-y-auto p-6 pt-10"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <style dangerouslySetInnerHTML={{__html: `
                .max-h-\[90vh\]::-webkit-scrollbar {
                  display: none;
                }
              `}} />
              <h2 className="text-xl font-bold text-[#065F46] text-center mb-4">Contact Us</h2>
              
              <form 
                className="space-y-2.5" 
                onSubmit={(e) => {
                  e.preventDefault();
                  closePopup();
                }}
              >
                <div>
                  <label className="block text-xs font-semibold text-[#065F46] mb-1 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    required
                    className="w-full px-4 py-2 rounded-xl bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#065F46] mb-1 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    required
                    className="w-full px-4 py-2 rounded-xl bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#065F46] mb-1 ml-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="w-full px-4 py-2 rounded-xl bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#065F46] mb-1 ml-1">Company</label>
                  <input
                    type="text"
                    placeholder="Enter Company Name"
                    className="w-full px-4 py-2 rounded-xl bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#065F46] mb-1 ml-1">Project Details</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={2}
                    required
                    className="w-full px-4 py-2 rounded-xl bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-900/10 mt-4"
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
