import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

const testimonials = [
  {
    category: 'Depressão e Ansiedade',
    modality: 'Atendimento Presencial',
    text: '“Sou muito grato(a) pelo acolhimento e pela escuta atenta nas sessões. Hoje me sinto respeitado(a) e seguro(a) para falar sobre temas que antes eram difíceis. A terapia tem me ajudado a organizar meus pensamentos, compreender melhor minha ansiedade e evoluir no processo.”'
  },
  {
    category: 'Transtorno de Ansiedade Generalizada',
    modality: 'Atendimento Presencial',
    text: '“Desde o início do acompanhamento, percebo mudanças importantes. Ainda enfrento ansiedade, mas hoje entendo melhor meus pensamentos e meus gatilhos, lidando com as preocupações de forma mais equilibrada. Reconheço minha evolução e sou grato(a) pelo apoio no processo.”'
  },
  {
    category: 'Depressão',
    modality: 'Atendimento Online',
    text: '“Ao longo das sessões, comecei a me enxergar com mais consciência. Ainda enfrento autocrítica e insegurança, mas hoje consigo questionar esses pensamentos e valorizar minhas conquistas. As reflexões e exercícios têm fortalecido minha autocompaixão.”'
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-[#FCF9F6] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">Relatos de Superação</h2>
          <p className="text-primary/60 max-w-2xl mx-auto italic">
            Depoimentos reais preservando o sigilo e a ética profissional.
          </p>
          <div className="w-16 h-px bg-primary/20 mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto relative h-[450px] md:h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center text-center space-y-8"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center border-2 border-secondary/30 shadow-sm">
                  <Heart className="w-8 h-8 text-secondary" fill="currentColor" fillOpacity={0.2} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xl font-serif shadow-md">
                  "
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-b-4 border-secondary max-w-3xl relative">
                <p className="text-primary/80 text-lg md:text-xl italic font-light leading-relaxed">
                  {testimonials[current].text}
                </p>
                <div className="mt-8">
                  <h4 className="font-serif text-2xl text-primary">
                    {testimonials[current].category}
                  </h4>
                  <span className="text-xs uppercase tracking-widest text-primary/50 font-semibold">
                    {testimonials[current].modality}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${current === i ? 'bg-primary w-12' : 'bg-primary/20 w-4'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

