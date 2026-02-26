import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Leaf, Sparkles, MousePointer2 } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden bg-[#f8fafb]">
      {/* --- TOTAL BACKGROUND ANIMATION SYSTEM --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* Ultra-Large Animated Blobs (Filling the entire space) */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 0]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] bg-gradient-to-br from-primary/15 via-accent/30 to-secondary/20 rounded-full blur-[160px] opacity-70"
        />

        <motion.div
          animate={{
            x: [0, -70, 70, 0],
            y: [0, 40, -40, 0],
            scale: [1.1, 1, 1.2, 1.1],
            rotate: [0, -120, 120, 0]
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[120%] bg-gradient-to-tr from-accent/20 via-primary/10 to-secondary/30 rounded-full blur-[180px] opacity-50"
        />

        {/* High Density Particle Field (Taking 100% of the area) */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            initial={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2,
              scale: Math.random() * 1.5 + 0.5
            }}
            animate={{
              y: ["0px", (Math.random() * 150 - 75) + "px"],
              x: ["0px", (Math.random() * 150 - 75) + "px"],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-primary/20 blur-[1px]"
            style={{
              width: (Math.random() * 10 + 4) + "px",
              height: (Math.random() * 10 + 4) + "px"
            }}
          />
        ))}

        {/* Interactive icons spreading across background */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bg-icon-${i}`}
            className="absolute text-primary/10"
            initial={{
              left: (Math.random() * 100) + "%",
              top: (Math.random() * 100) + "%"
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: 360
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i % 2 === 0 ? <Leaf size={40 + i * 5} /> : <Sparkles size={30 + i * 10} />}
          </motion.div>
        ))}

        {/* Grain Texture & Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(#3a527e_0.5px,transparent_0.5px)] [background-size:60px_60px] opacity-[0.08]" />
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
              className="absolute -inset-6 border-2 border-primary/20 rounded-[64px] -z-10 rotate-[3deg]"
            />

            {/* Pulsing Badge */}
            <motion.div
              animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-white p-5 rounded-[24px] shadow-2xl text-primary z-20 border border-primary/5"
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
                className="group relative bg-primary text-white px-12 py-5 rounded-full text-xl font-medium transition-all shadow-[0_20px_40px_-10px_rgba(58,82,126,0.4)] hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0"
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
