import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import WhatsAppButton from "@/components/WhatsAppButton";

const allPosts = [
  { id: 1, title: "The Future of Web Development in 2026", date: "Mar 15, 2026", readTime: "5 min", category: "Development", excerpt: "Exploring the latest trends shaping the modern web landscape, from AI-driven development to edge computing.", featured: true },
  { id: 2, title: "Why UX Design Matters for Your Business", date: "Mar 8, 2026", readTime: "4 min", category: "Design", excerpt: "How investing in user experience directly impacts revenue and customer retention rates.", featured: true },
  { id: 3, title: "SEO Strategies That Actually Work in 2026", date: "Feb 28, 2026", readTime: "6 min", category: "SEO", excerpt: "Proven techniques to boost your search engine rankings and drive organic growth." },
  { id: 4, title: "Building Scalable React Applications", date: "Feb 20, 2026", readTime: "8 min", category: "Development", excerpt: "Best practices for architecting React apps that can handle millions of users." },
  { id: 5, title: "The Rise of AI in Digital Marketing", date: "Feb 15, 2026", readTime: "5 min", category: "Marketing", excerpt: "How artificial intelligence is revolutionizing the way we approach digital marketing campaigns." },
  { id: 6, title: "Mobile-First Design Principles", date: "Feb 10, 2026", readTime: "4 min", category: "Design", excerpt: "Essential principles for creating mobile experiences that users love and keep coming back to." },
  { id: 7, title: "Mastering Core Web Vitals", date: "Feb 5, 2026", readTime: "7 min", category: "SEO", excerpt: "A comprehensive guide to improving your Core Web Vitals scores for better rankings." },
  { id: 8, title: "Social Media Marketing Trends", date: "Jan 28, 2026", readTime: "5 min", category: "Marketing", excerpt: "Stay ahead of the curve with these emerging social media marketing trends for 2026." },
  { id: 9, title: "TypeScript Best Practices", date: "Jan 20, 2026", readTime: "6 min", category: "Development", excerpt: "Write cleaner, safer code with these TypeScript patterns and best practices." },
];

const categories = ["All", "Development", "Design", "SEO", "Marketing"];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allPosts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <PageHeader
          badge="Our Blog"
          title="Latest"
          highlight="Insights & Articles"
          description="Stay updated with the latest trends, tips, and strategies in web development, design, SEO, and digital marketing."
        />

        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${c === activeCategory ? "gradient-button" : "bg-secondary border border-border hover:border-primary/30"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            {/* Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass-card-hover p-6 flex flex-col group cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.category}</span>
                    {p.featured && <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">Featured</span>}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{p.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {p.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {p.readTime}</span>
                    </div>
                    <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No articles found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default Blogs;
