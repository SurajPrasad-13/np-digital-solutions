import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/NP1full.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { 
    label: "Services", 
    to: "",
    submenu: [
      { label: "All Services", to: "/services" },
      { label: "Web Development", to: "/services/web-development" },
      { label: "App Development", to: "/services/app-development" },
      { label: "UI/UX Design", to: "/services/ui-ux-design" },
      { label: "SEO Optimization", to: "/services/seo-optimization" },
      { label: "Digital Marketing", to: "/services/digital-marketing" },
    ]
  },
  { label: "Products", to: "/products" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Careers", to: "/careers" },
  // { 
  //   label: "Work", 
  //   to: "/work",
  //   submenu: [
  //     { label: "Projects", to: "/work/projects" },
  //     { label: "Portfolio", to: "/work/portfolio" },
  //     { label: "Case-studies", to: "/work/case-studies" },
  //   ]
  // },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="font-heading font-bold text-xl">
          <img src={Logo} alt="" className=" h-12" />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <div
              key={l.label}
              className="relative group"
              onMouseEnter={() => setHoveredItem(l.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                to={l.to}
                className={`text-sm font-medium transition-colors flex items-center gap-1 py-2 px-1 rounded-md ${
                  location.pathname === l.to || (l.submenu && l.submenu.some(s => location.pathname === s.to))
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                } ${l.submenu && hoveredItem === l.label ? "bg-primary/5 text-primary" : ""}`}
              >
                {l.label}
                {l.submenu && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${hoveredItem === l.label ? "rotate-180" : ""}`} 
                  />
                )}
              </Link>

              {l.submenu && (
                <AnimatePresence>
                  {hoveredItem === l.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl rounded-xl overflow-hidden z-50 p-1"
                    >
                      {l.submenu.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className={`block px-4 py-2.5 text-sm font-medium transition-all rounded-lg hover:bg-primary/5 hover:text-primary ${
                            location.pathname === sub.to
                              ? "bg-primary/5 text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <div key={l.label}>
                  <Link
                    to={l.to}
                    className={`text-sm font-medium py-2 px-2 flex items-center justify-between rounded-md ${
                      location.pathname === l.to
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {l.label}
                  </Link>
                  {l.submenu && (
                    <div className="pl-4 mt-1 mb-2 flex flex-col gap-1 border-l border-border/50 ml-2">
                      {l.submenu.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className={`text-xs font-medium py-2 px-3 rounded-md transition-colors ${
                            location.pathname === sub.to
                              ? "text-primary bg-primary/5"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
