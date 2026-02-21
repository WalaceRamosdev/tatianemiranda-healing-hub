import { Instagram, Mail, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Comece Sua Jornada de Cuidado
          </h2>
          <p className="font-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Dê o primeiro passo para o seu bem-estar hoje mesmo. Estou pronta para te acolher.
          </p>
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-lg text-lg font-body font-bold hover:scale-105 transition-transform mb-12"
          >
            Agende Seu Acolhimento
          </a>

          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-body"
              >
                <Phone size={16} />
                WhatsApp
              </a>
              <a
                href="mailto:contato@tatianemiranda.com.br"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-body"
              >
                <Mail size={16} />
                E-mail
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-body"
              >
                <Instagram size={16} />
                Instagram
              </a>
            </div>
            <p className="font-body text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} Tatiane Miranda — Psicóloga. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
