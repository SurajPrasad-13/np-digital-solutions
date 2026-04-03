import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroCoder from "@/assets/hero-coder.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative mt-16 sm:mt-0 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/15 blur-[100px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 lg:pt-0">
        {/* Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
              Digital Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6"
          >
            We Build Digital Experiences{" "}
            <span className="gradient-text">That Drive Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          >
            Crafting stunning UI/UX, powerful web & app solutions, SEO strategies,
            and digital marketing campaigns that transform your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link to="/contact" className="gradient-button px-8 py-3.5 text-base">
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-8 py-3.5 text-base font-semibold rounded-2xl border border-border bg-secondary/50 backdrop-blur-sm hover:bg-secondary transition-all"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          <motion.img
            src={heroCoder}
            alt="Developer coding digital solutions"
            width={1024}
            height={1024}
            className="w-full max-w-lg lg:max-w-xl drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Floating decorative elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/20"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 -left-6 w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/20"
            animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/3 -left-2 w-8 h-8 rounded-full bg-primary/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
