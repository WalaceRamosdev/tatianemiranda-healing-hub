import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Leaf } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-secondary z-0" />
      
      {/* Watermark Name */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.h1 
          style={{ y: y1 }}
          className="text-watermark whitespace-nowrap"
        >
          Tatiane Miranda
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Main Photo */}
          <motion.div 
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-[40px] shadow-2xl rotate-[-3deg]"
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Tatiane Miranda"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Content */}
          <div className="text-center md:text-left space-y-6 max-w-md">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-4xl md:text-6xl text-primary leading-tight"
            >
              Espaço para o que sente.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-primary/70 text-lg md:text-xl font-light"
            >
              Psicoterapia individual para adultos que buscam equilíbrio, autoconhecimento e uma vida mais plena.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <button className="group relative px-10 py-4 bg-primary text-white rounded-full overflow-hidden transition-all duration-500 hover:pr-14">
                <span className="relative z-10 font-medium">Conversar</span>
                <div className="absolute inset-0 bg-primary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <Leaf 
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-accent" 
                  size={20} 
                />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, "-20px", "20px", null],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-1 bg-primary/20 rounded-full"
          />
        ))}
      </div>
    </section>
  );
};
