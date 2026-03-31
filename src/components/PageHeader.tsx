import { motion } from "framer-motion";

interface PageHeaderProps {
  badge: string;
  title: string;
  highlight: string;
  description?: string;
}

const PageHeader = ({ badge, title, highlight, description }: PageHeaderProps) => (
  <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-8 relative overflow-hidden">
    <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20"
      >
        {badge}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
      >
        {title} <span className="gradient-text">{highlight}</span>
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHeader;
