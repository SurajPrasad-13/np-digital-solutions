import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import WhatsAppButton from "@/components/WhatsAppButton";

const testimonials = [
  { name: "Sarah Johnson", role: "CEO, TechStart", text: "NP Digital Solutions transformed our online presence completely. Their attention to detail and innovative approach exceeded all expectations. Our conversion rate increased by 300%.", rating: 5 },
  { name: "Michael Chen", role: "Founder, GrowthLab", text: "The team delivered a stunning web application ahead of schedule. Their technical expertise and creative vision are truly world-class. Highly recommend!", rating: 5 },
  { name: "Emily Davis", role: "Marketing Director, Elevate", text: "Our SEO rankings skyrocketed after working with NP Digital. Professional, responsive, and results-driven — couldn't ask for more.", rating: 5 },
  { name: "James Wilson", role: "CTO, CloudSync", text: "Outstanding mobile app development. They understood our vision perfectly and delivered an app our users absolutely love. The UX is phenomenal.", rating: 5 },
  { name: "Lisa Martinez", role: "CEO, BrightPath", text: "From concept to launch, NP Digital handled everything flawlessly. Their digital marketing strategies have been a game-changer for our brand.", rating: 5 },
  { name: "David Kim", role: "Founder, NexGen", text: "We've worked with many agencies, but NP Digital stands out. Their innovative solutions and dedication to quality are unmatched.", rating: 5 },
  { name: "Amanda Taylor", role: "Product Manager, Flowstate", text: "The UI/UX redesign they did for our platform was incredible. User engagement went up 150% within the first month of launch.", rating: 5 },
  { name: "Robert Brown", role: "VP Marketing, Stellar", text: "NP Digital's holistic approach to digital transformation helped us achieve goals we thought were years away. Exceptional team.", rating: 4 },
];

const Testimonials = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageHeader
        badge="Testimonials"
        title="What Our Clients"
        highlight="Say About Us"
        description="Don't just take our word for it. Here's what our clients have to say about working with us."
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-card-hover p-6 md:p-8 flex flex-col"
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-foreground/90 leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center font-heading font-bold text-primary text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm">{t.name}</h4>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  </PageTransition>
);

export default Testimonials;
