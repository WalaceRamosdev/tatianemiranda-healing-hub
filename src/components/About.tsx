import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Heart, Sparkles } from 'lucide-react';

export const About = () => {
  const timeline = [
    { icon: <GraduationCap size={20} />, title: 'Especialista em TCC', desc: 'Pós-graduada em Terapia Cognitivo-Comportamental e Avaliação Psicológica.' },
    { icon: <Heart size={20} />, title: 'Acolhimento', desc: 'Espaço seguro para adolescentes e adultos ressignificarem suas dores.' },
    { icon: <Sparkles size={20} />, title: 'Público', desc: 'Foco em ansiedade, autoestima, depressão e desenvolvimento pessoal.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Animated Waves Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-64">
          <path fill="#3a527e" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Organic Photo Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Organic Shape Mask */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full h-full overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-2xl bg-secondary group transition-all duration-700"
              >
                <img
                  src="/profile.svg"
                  alt="Tatiane Miranda - Psicóloga"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl text-primary font-serif"
              >
                Quem Sou Eu
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                className="h-px bg-primary/30"
              />
            </div>

            <div className="space-y-4 text-primary/80 text-lg leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Sou <strong>Tatiane Miranda (CRP-10/11768)</strong>, psicóloga clínica apaixonada pela capacidade de transformação humana. Atuo com a Terapia Cognitivo-Comportamental (TCC) para ajudar adolescentes e adultos a ressignificarem seus pensamentos e emoções.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Meu compromisso é oferecer um espaço seguro e livre de julgamentos, focado no presente e baseado em evidências, para que você possa desenvolver maior autonomia e autoconfiança no seu processo terapêutico.
              </motion.p>
            </div>

            {/* Visual Timeline / Features */}
            <div className="space-y-6 pt-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 p-2 bg-secondary rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary">{item.title}</h4>
                    <p className="text-primary/60 text-sm leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
