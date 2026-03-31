import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Find Us</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Our <span className="gradient-text">Location</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="glass-card overflow-hidden rounded-2xl h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909!2d-74.259867!3d40.697488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }} className="flex flex-col gap-6">
            {[
              { icon: MapPin, title: "Address", text: "123 Digital Avenue, Suite 456\nNew York, NY 10001" },
              { icon: Phone, title: "Phone", text: "+1 (555) 123-4567" },
              { icon: Mail, title: "Email", text: "hello@npdigital.com" },
              { icon: Clock, title: "Working Hours", text: "Mon–Fri: 9:00 AM – 6:00 PM" },
            ].map((item) => (
              <div key={item.title} className="glass-card p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
