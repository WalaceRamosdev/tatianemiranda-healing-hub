import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    name: 'Mariana S.',
    text: 'A Tatiane tem uma sensibilidade ímpar. O processo terapêutico com ela mudou minha forma de enxergar o mundo e a mim mesma.',
    image: 'https://i.pravatar.cc/150?u=mariana'
  },
  {
    name: 'Ricardo F.',
    text: 'Encontrei um espaço seguro para falar sobre minhas vulnerabilidades sem julgamentos. Recomendo fortemente.',
    image: 'https://i.pravatar.cc/150?u=ricardo'
  },
  {
    name: 'Ana Paula L.',
    text: 'As sessões são leves e profundas ao mesmo tempo. Sinto que evoluí anos em poucos meses de acompanhamento.',
    image: 'https://i.pravatar.cc/150?u=ana'
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">Relatos de Cuidado</h2>
          <div className="w-16 h-px bg-primary/20 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative h-[400px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center text-center space-y-8"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-secondary shadow-lg">
                  <img src={testimonials[current].image} alt={testimonials[current].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-xl font-serif">
                  "
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-primary max-w-2xl relative">
                <p className="text-primary/80 text-xl italic font-light leading-relaxed">
                  {testimonials[current].text}
                </p>
                <h4 className="mt-6 font-serif text-2xl text-primary">{testimonials[current].name}</h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === i ? 'bg-primary w-6' : 'bg-primary/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
