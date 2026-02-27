import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Mim', href: '#about' },
    { name: 'Especialidades', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-12 md:h-16"
          ><a href="#home">
              <img
                src="/logo.svg"
                alt="Tatiane Miranda"
                className="h-full w-auto object-contain"
              />
            </a>
          </motion.div>

          {/* Conventional Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary/70 hover:text-primary font-medium transition-colors text-sm uppercase tracking-widest"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://www.instagram.com/psi_tatianemiranda?utm_source=qr&igsh=MXc2OWs4NDd6d3RlOA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a
                href="#contact"
                className="bg-gold text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gold/90 transition-all shadow-md hover:shadow-lg"
              >
                Agendar
              </a>
            </div>
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-primary hover:opacity-70 transition-opacity"
            aria-label="Abrir menu"
          >
            <Menu size={24} strokeWidth={1} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-secondary/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 text-primary hover:rotate-90 transition-transform duration-300"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <nav className="flex flex-col items-center space-y-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-primary font-serif text-4xl md:text-6xl hover:italic transition-all duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="absolute bottom-12 flex space-x-6">
              <a href="https://www.instagram.com/psi_tatianemiranda?utm_source=qr&igsh=MXc2OWs4NDd6d3RlOA%3D%3D" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} className="text-primary/60 hover:text-primary cursor-pointer transition-colors" />
              </a>
              <Linkedin size={24} className="text-primary/60 hover:text-primary cursor-pointer transition-colors" />
              <MessageCircle size={24} className="text-primary/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
