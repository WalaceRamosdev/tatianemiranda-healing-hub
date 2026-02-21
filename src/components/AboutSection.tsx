import { Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl bg-secondary flex items-center justify-center shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
              <div className="text-center z-10">
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="text-primary" size={36} />
                </div>
                <p className="font-body text-sm text-muted-foreground">Foto profissional</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
              Sobre Tatiane Miranda
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              Acredito que cada pessoa carrega em si a capacidade de se transformar. Meu papel como psicóloga é criar um
              espaço de <strong className="text-primary">escuta genuína e acolhimento</strong>, onde você possa se sentir
              seguro para explorar seus sentimentos e pensamentos sem julgamento.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              Com uma abordagem humanizada, meu compromisso é construir um vínculo de confiança que possibilite a sua
              jornada de autoconhecimento e cuidado emocional. Aqui, cada sessão é um passo em direção ao seu
              bem-estar.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              <strong className="text-primary">Sigilo absoluto</strong> e respeito ao seu tempo são pilares do meu
              trabalho. Dê o primeiro passo — estou aqui para caminhar ao seu lado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
