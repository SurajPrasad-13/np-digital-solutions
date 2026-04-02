import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Sarah Verma", role: "CEO, TechStart", text: "NP Digital Solutions transformed our online presence completely. Their attention to detail and innovative approach exceeded all expectations.", rating: 5 },
  { name: "Michael Joshi", role: "Founder, GrowthLab", text: "The team delivered a stunning web application ahead of schedule. Their technical expertise and creative vision are truly world-class.", rating: 5 },
  { name: "Emily Kumawat", role: "Marketing Director, Elevate", text: "Our SEO rankings skyrocketed after working with NP Digital. Professional, responsive, and results-driven — couldn't ask for more.", rating: 5 },
  { name: "Jamsedh Kumar", role: "CTO, CloudSync", text: "Outstanding mobile app development. They understood our vision perfectly and delivered an app our users absolutely love.", rating: 5 },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">What Our <span className="gradient-text">Clients Say</span></h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="relative">
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/90 italic">
              "{testimonials[current].text}"
            </p>
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 font-heading font-bold text-primary text-lg">
              {testimonials[current].name[0]}
            </div>
            <h4 className="font-heading font-semibold">{testimonials[current].name}</h4>
            <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2.5 rounded-xl bg-secondary border border-border hover:bg-primary/10 hover:border-primary/30 transition-all">
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`} />
              ))}
            </div>
            <button onClick={next} className="p-2.5 rounded-xl bg-secondary border border-border hover:bg-primary/10 hover:border-primary/30 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
