import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Send, Calendar } from 'lucide-react';

const faqs = [
  {
    q: 'Como funciona a primeira sessão?',
    a: 'A primeira sessão é um momento de acolhimento e escuta inicial. Vamos conversar sobre suas demandas, expectativas e como o processo terapêutico pode te auxiliar.'
  },
  {
    q: 'Qual a duração e frequência das sessões?',
    a: 'As sessões duram em média 50 minutos e geralmente ocorrem uma vez por semana, mas isso pode ser ajustado conforme a necessidade de cada paciente.'
  },
  {
    q: 'Atende convênios médicos?',
    a: 'Trabalho com atendimento particular, mas forneço recibos para que você possa solicitar o reembolso junto ao seu plano de saúde.'
  },
  {
    q: 'As sessões podem ser online?',
    a: 'Sim, realizo atendimentos presenciais e também online via plataformas seguras, garantindo o sigilo e a qualidade do atendimento.'
  }
];

export const Contact = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* FAQ Section */}
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl text-primary">Dúvidas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-primary/10">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full py-6 flex justify-between items-center text-left group"
                  >
                    <span className="text-xl text-primary font-serif group-hover:pl-2 transition-all duration-300">{faq.q}</span>
                    <ChevronDown 
                      className={`text-primary/40 transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} 
                      size={20} 
                    />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-primary/70 font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact" className="space-y-12">
            <h2 className="text-4xl md:text-5xl text-primary">Inicie sua Jornada</h2>
            
            <div className="glass p-10 rounded-[30px] space-y-8 relative overflow-hidden">
              {/* Decorative Calendar Simulation */}
              <div className="flex items-center gap-4 text-primary/80 mb-4">
                <Calendar size={24} strokeWidth={1.5} />
                <span className="font-light">Disponibilidade para novos pacientes</span>
              </div>

              <div className="grid grid-cols-7 gap-2 opacity-30 pointer-events-none">
                {[...Array(28)].map((_, i) => (
                  <div key={i} className={`aspect-square rounded-md ${i % 7 === 0 || i % 7 === 6 ? 'bg-primary/10' : 'bg-primary/20'}`} />
                ))}
              </div>

              <div className="space-y-6">
                <p className="text-primary/70 text-lg font-light">
                  Sinta-se à vontade para enviar uma mensagem. Responderei o mais breve possível para agendarmos uma conversa.
                </p>
                
                <button className="w-full py-5 bg-primary text-white rounded-2xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all duration-300 group shadow-lg">
                  <span className="text-lg font-medium">Enviar Mensagem</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Subtle Particles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
