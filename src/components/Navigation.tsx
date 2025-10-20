import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-palma.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Détecter si on scroll vers le bas ou vers le haut
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas - cacher la navbar
        setIsNavbarVisible(false);
      } else {
        // Scroll vers le haut - montrer la navbar
        setIsNavbarVisible(true);
      }
      
      // Mettre à jour l'état de scroll pour les couleurs
      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Nos Produits", href: "/products" },
    { name: "À Propos", href: "/about" },
    { name: "Catalogue", href: "https://l.instagram.com/?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1p3f0E1imdBeOcS-DdcKqDrcNCQjilqkf%2Fview%3Fusp%3Ddrivesdk%26fbclid%3DPAZXh0bgNhZW0CMTEAAaf-UeOXgbSsiTta7nCuMz7k9gdo0vXTQARhQxLkqyK19QjPswPWCeF18wPiEA_aem_GlZ5gSN5q9ORfnoAzr-jNg&e=AT3uxInfaYKFplFVDYTAUYPTF06gLbVVRXF0QOBmBZoqUfyHP2HvEBfJEW8J51SabIM7CUBaUyIrhGUBzd0f57S9IZVpR1dRpiJamt-ezg", external: true },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={
        `sticky top-0 z-50 transition-all duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-gradient-to-r from-[hsl(25_45%_30%/0.95)] via-[hsl(25_35%_24%/0.9)] to-[hsl(35_65%_60%/0.85)] backdrop-blur-sm border-b border-border shadow-soft"
            : "bg-gradient-to-b from-[hsl(25_45%_30%/0.30)] via-[hsl(25_35%_24%/0.18)] to-transparent border-b border-transparent"
        }`
      }
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform hover:scale-105">
            <img src={logoImage} alt="Palmador" className="h-12 sm:h-16 drop-shadow" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isScrolled ? "text-white hover:text-white" : "text-[hsl(var(--copper))] hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-white" : "bg-[hsl(var(--copper))]"
                  }`} />
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isScrolled ? "text-white hover:text-white" : "text-[hsl(var(--copper))] hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-white" : "bg-[hsl(var(--copper))]"
                  }`} />
                </Link>
              )
            ))}
          </div>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className={`hidden xl:flex items-center space-x-4 text-sm ${
              isScrolled ? "text-white" : "text-[hsl(var(--copper))]"
            }`}>
              <a href="tel:+212530562079" className={`flex items-center space-x-2 transition-colors ${
                isScrolled ? "hover:text-white" : "hover:text-white"
              }`}>
                <Phone className="h-4 w-4" />
                <span>+212 530 56 20 79</span>
              </a>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden ${isScrolled ? "text-white hover:text-accent" : "text-chocolate hover:text-white"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`lg:hidden py-4 border-t ${isScrolled ? "border-white/20" : "border-border"} animate-fade-in`}>
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-3 text-sm font-medium px-4 rounded transition-colors ${
                    isScrolled 
                      ? "text-white hover:text-accent hover:bg-white/10" 
                      : "text-foreground hover:text-primary hover:bg-secondary/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block py-3 text-sm font-medium px-4 rounded transition-colors ${
                    isScrolled 
                      ? "text-white hover:text-accent hover:bg-white/10" 
                      : "text-foreground hover:text-primary hover:bg-secondary/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className={`mt-4 pt-4 border-t px-4 space-y-3 ${isScrolled ? "border-white/20" : "border-border"}`}>
              <a href="tel:+212530562079" className={`flex items-center space-x-2 text-sm transition-colors ${
                isScrolled ? "text-white/80 hover:text-white" : "text-muted-foreground"
              }`}>
                <Phone className="h-4 w-4" />
                <span>+212 530 56 20 79</span>
              </a>
              <a href="tel:+212660436040" className={`flex items-center space-x-2 text-sm transition-colors ${
                isScrolled ? "text-white/80 hover:text-white" : "text-muted-foreground"
              }`}>
                <Phone className="h-4 w-4" />
                <span>+212 660 43 60 40</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
