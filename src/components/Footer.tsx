import { Github, Twitter, Linkedin, Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              <span className="gradient-text">NP</span> Digital
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building digital experiences that drive growth and transform businesses worldwide.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Services", links: ["UI/UX Design", "Web Development", "App Development", "SEO", "Marketing"] },
            { title: "Company", links: ["About Us", "Portfolio", "Blog", "Careers", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Get the latest insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="gradient-button p-2.5">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 NP Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
