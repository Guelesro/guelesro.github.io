import logo from "@/assets/logo-guele.png";
import { Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Guele s.r.o." className="h-10 bg-white/90 rounded-md px-2 py-1" />
          </div>

          <nav className="flex items-center gap-8">
            <a href="#sluzby" className="text-muted-foreground hover:text-primary transition-colors">
              Služby
            </a>
            <a href="#o-nas" className="text-muted-foreground hover:text-primary transition-colors">
              O nás
            </a>
            <a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>

          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span>© {currentYear} Guele s.r.o. Všetky práva vyhradené.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
