import { Brain, Heart, Users, Briefcase, Sparkles, Shield } from "lucide-react";

const specialties = [
  { icon: Brain, title: "Ansiedade", desc: "Técnicas para lidar com crises de ansiedade e encontrar equilíbrio no dia a dia." },
  { icon: Heart, title: "Autoestima", desc: "Fortaleça a relação consigo mesmo e redescubra o seu valor pessoal." },
  { icon: Users, title: "Relacionamentos", desc: "Compreenda padrões relacionais e construa vínculos mais saudáveis." },
  { icon: Briefcase, title: "Carreira", desc: "Orientação para desafios profissionais, propósito e transições de carreira." },
  { icon: Sparkles, title: "Autoconhecimento", desc: "Aprofunde a compreensão sobre si mesmo para tomar decisões mais conscientes." },
  { icon: Shield, title: "Luto e Perdas", desc: "Apoio empático para atravessar momentos de dor e reconstrução emocional." },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Áreas de Atendimento
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Cada pessoa é única. Conheça as áreas em que posso ajudar na sua jornada de cuidado e transformação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specialties.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-colors group"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl text-primary mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
