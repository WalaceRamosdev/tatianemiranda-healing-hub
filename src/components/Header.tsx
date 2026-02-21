import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#inicio" className="font-heading text-xl md:text-2xl text-primary tracking-wide">
          Tatiane Miranda
          <span className="block text-xs font-body text-muted-foreground tracking-widest uppercase">Psicóloga</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-body font-bold hover:opacity-90 transition-opacity"
          >
            Fale Comigo
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-body text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-sm font-body font-bold hover:opacity-90 transition-opacity mt-2"
            >
              Fale Comigo
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
