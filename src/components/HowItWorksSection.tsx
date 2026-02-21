import { MessageCircle, Video, Flower2 } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "1",
    title: "Contato Inicial",
    desc: "Entre em contato pelo WhatsApp ou formulário. Vou te ouvir e entender suas necessidades para darmos o primeiro passo juntos.",
  },
  {
    icon: Video,
    step: "2",
    title: "Primeira Sessão",
    desc: "Na primeira sessão, criaremos um espaço de confiança para você se sentir acolhido e seguro. Sem pressão, no seu ritmo.",
  },
  {
    icon: Flower2,
    step: "3",
    title: "Jornada Terapêutica",
    desc: "Juntos, construiremos um caminho de autoconhecimento e transformação, com sessões regulares focadas no seu bem-estar.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Como Funciona
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Iniciar a terapia é mais simples do que você imagina. Veja como é o processo:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="text-center relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-primary/5" />
              )}
              <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-5 flex items-center justify-center border-2 border-primary/20 relative">
                <s.icon className="text-primary" size={28} />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-body font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-heading text-xl text-primary mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
