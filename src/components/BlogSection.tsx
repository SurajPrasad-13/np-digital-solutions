import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { title: "The Future of Web Development in 2025", date: "Mar 15, 2026", category: "Development", excerpt: "Exploring the latest trends shaping the modern web landscape." },
  { title: "Why UX Design Matters for Your Business", date: "Mar 8, 2026", category: "Design", excerpt: "How investing in user experience directly impacts revenue." },
  { title: "SEO Strategies That Actually Work", date: "Feb 28, 2026", category: "SEO", excerpt: "Proven techniques to boost your search engine rankings." },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Blog</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">Latest <span className="gradient-text">Insights</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-hover p-6 flex flex-col group cursor-pointer"
            >
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">{p.category}</span>
              <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{p.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground flex items-center gap-1.5"><Calendar size={12} /> {p.date}</span>
                <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
