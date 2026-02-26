import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Leaf, Sparkles, MousePointer2 } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden bg-[#f8fafb]">
      {/* --- OPTIMIZED BACKGROUND ANIMATION SYSTEM --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Simplified Large Animated Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[20%] w-[100%] h-[100%] bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/15 rounded-full blur-[100px] opacity-60"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[20%] w-[100%] h-[100%] bg-gradient-to-tr from-gold/10 via-primary/5 to-secondary/20 rounded-full blur-[120px] opacity-40"
        />

        {/* Essential Particles Only (Reduced from 60 to 12 for better TBT) */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            initial={{
              left: (10 + Math.random() * 80) + "%",
              top: (10 + Math.random() * 80) + "%",
              opacity: 0.2
            }}
            animate={{
              y: ["0px", (i % 2 === 0 ? "50px" : "-50px")],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute rounded-full blur-[1px] ${i % 3 === 0 ? 'bg-gold/30' : 'bg-primary/10'}`}
            style={{
              width: (i % 2 === 0 ? "8px" : "12px"),
              height: (i % 2 === 0 ? "8px" : "12px")
            }}
          />
        ))}

        {/* Selected Decorative Icons (Reduced density) */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`bg-icon-${i}`}
            className="absolute text-primary/5"
            initial={{
              left: (20 + (i * 20)) + "%",
              top: (20 + (i * 15)) + "%"
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: 45
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {i % 2 === 0 ? <Leaf size={40} /> : <Sparkles size={35} />}
          </motion.div>
        ))}

        {/* Grain Texture & Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(#3a527e_0.5px,transparent_0.5px)] [background-size:60px_60px] opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="max-w-5xl flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24">

          {/* Main Photo Container with Hover Effects */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-[56px] shadow-[0_32px_64px_-16px_rgba(58,82,126,0.3)] z-10"
            >
              <img
                src="/profile.svg"
                alt="Tatiane Miranda"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* Animated Decorative Frame */}
            <motion.div
              animate={{ rotate: [3, 8, 3], scale: [1, 1.02, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-6 border-2 border-gold/30 rounded-[64px] -z-10 rotate-[3deg]"
            />

            {/* Pulsing Badge */}
            <motion.div
              animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-white p-5 rounded-[24px] shadow-2xl text-gold z-20 border border-gold/10"
            >
              <Sparkles size={32} className="animate-pulse" />
            </motion.div>
          </div>

          <div className="text-center md:text-left space-y-10 max-w-xl">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-center md:justify-start gap-3"
              >
                <span className="h-[2px] w-12 bg-primary/20" />
                <span className="text-primary/60 font-medium tracking-[0.3em] uppercase text-xs">Transformação & Cuidado</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl lg:text-9xl text-primary leading-[1] tracking-tighter"
              >
                Espaço <br />
                <span className="italic font-light serif text-primary/40 block mt-2">transformador.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-primary/70 text-xl md:text-2xl leading-relaxed font-light"
              >
                Psicoterapia para adolescentes e adultos. Um caminho de <span className="text-primary font-medium">autoestima</span> e <span className="text-primary font-medium">equilíbrio</span> emocional.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6"
            >
              <a
                href="#contact"
                className="group relative bg-gold text-white px-12 py-5 rounded-full text-xl font-medium transition-all shadow-[0_20px_40px_-10px_rgba(197,160,89,0.4)] hover:shadow-gold/40 hover:-translate-y-1 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Agendar Consulta
                  <MousePointer2 size={20} className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              </a>
              <a href="#about" className="text-primary/60 hover:text-primary transition-colors font-medium border-b border-transparent hover:border-primary/20 pb-1">Conheça Tatiane</a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-primary/30"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary/30 to-transparent" />
      </motion.div>
    </section>
  );
};
