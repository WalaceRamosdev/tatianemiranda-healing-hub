import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -5, 0]
      }}
      transition={{ 
        scale: { delay: 1, duration: 0.5 },
        opacity: { delay: 1, duration: 0.5 },
        y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
      }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl group"
    >
      <MessageCircle size={32} strokeWidth={1.5} />
      
      {/* Pulse Effect */}
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute inset-0 bg-primary rounded-full -z-10"
      />
      
      <span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Agendar Conversa
      </span>
    </motion.a>
  );
};
