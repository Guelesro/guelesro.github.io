import logo from "@/assets/logo-guele.png";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#sluzby", label: "Služby" },
    { href: "#o-nas", label: "O nás" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Guele s.r.o." className="h-12 md:h-14 bg-white/90 rounded-md px-2 py-1" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+421900000000"
              className="flex items-center gap-2 bg-gradient-electric text-primary-foreground px-5 py-2.5 rounded-lg font-semibold shadow-electric hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4" />
              Zavolajte nám
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+421900000000"
              className="flex items-center justify-center gap-2 bg-gradient-electric text-primary-foreground px-5 py-3 rounded-lg font-semibold"
            >
              <Phone className="w-4 h-4" />
              Zavolajte nám
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
