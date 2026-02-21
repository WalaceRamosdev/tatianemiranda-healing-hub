import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative z-10 container mx-auto px-4 text-center py-32 md:py-40">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 animate-fade-in-up leading-tight">
          Acolhimento Psicológico
          <br />
          que Transforma Vidas
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Um espaço seguro para você se reconectar consigo mesmo.
          <br className="hidden md:block" />
          Atendimento online e presencial.
        </p>
        <a
          href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-lg text-lg font-body font-bold hover:scale-105 transition-transform shadow-lg animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          QUERO AGENDAR UMA CONSULTA
        </a>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C360 0 1080 0 1440 40V80H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
