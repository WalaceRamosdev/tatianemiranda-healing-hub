import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "A terapia com a Tatiane mudou a forma como eu me vejo. Me sinto mais leve e confiante para enfrentar os desafios do dia a dia.",
    author: "M.S.",
  },
  {
    text: "Encontrei um espaço de verdadeiro acolhimento. Pela primeira vez, sinto que alguém realmente me escuta sem julgamento.",
    author: "A.L.",
  },
  {
    text: "Depois de meses de terapia, finalmente entendi padrões que me impediam de ser feliz. Sou grata por cada sessão.",
    author: "C.R.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            O Que Dizem Sobre o Atendimento
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Depoimentos de quem já passou por esse processo de cuidado e transformação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-primary/10 relative"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <Quote className="text-primary/20 mb-3" size={32} />
              <p className="font-body text-foreground/80 leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <p className="font-body text-sm font-bold text-primary">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
