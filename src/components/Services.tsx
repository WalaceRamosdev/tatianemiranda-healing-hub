import React from 'react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Ansiedade e Estresse',
    desc: 'Ferramentas práticas para lidar com a pressão do dia a dia e reencontrar a calma.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  },
  {
    title: 'Autoconhecimento',
    desc: 'Uma jornada profunda para entender seus padrões, desejos e fortalecer sua identidade.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path d="M12 7v10M7 12h10" />
      </svg>
    )
  },
  {
    title: 'Relacionamentos',
    desc: 'Melhore a comunicação e construa conexões mais saudáveis e autênticas.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    )
  },
  {
    title: 'Transição de Carreira',
    desc: 'Suporte emocional para momentos de mudança e novos desafios profissionais.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    )
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-primary"
          >
            Especialidades
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary/60 font-light text-lg"
          >
            Abordagens personalizadas para cada fase da sua vida.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="glass p-8 rounded-[20px] shadow-sm hover:shadow-2xl transition-all duration-500 group border-b-2 border-transparent hover:border-accent flex flex-col h-full"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl text-primary mb-4">{service.title}</h3>
              <p className="text-primary/70 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
