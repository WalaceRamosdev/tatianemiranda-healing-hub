import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export const Location = () => {
    const address = "Av. Nagib Mutran, Quadra 17, Lote 02 - Cidade Nova, Marabá - PA, 68501-570";
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_API_KEY&q=${encodeURIComponent(address)}`;

    // Using a standard embed link without API key for demonstration (Bing or Google public)
    const publicMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.572110595!2d-49.125!3d-5.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92dbddd3c0000001%3A0x0!2sAv.%20Nagib%20Mutran%2C%20Marab%C3%A1%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr";

    return (
        <section id="location" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 text-primary/60 font-medium tracking-widest uppercase text-sm"
                            >
                                <span className="w-8 h-px bg-primary/30" />
                                Onde me encontrar
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl text-primary font-serif"
                            >
                                Local de Atendimento
                            </motion.h2>
                        </div>

                        <div className="grid gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-3 bg-secondary rounded-2xl text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl text-primary font-medium">Endereço</h4>
                                    <p className="text-primary/70 leading-relaxed max-w-sm">
                                        Avenida Nagib Mutran, Quadra 17, Lote 02<br />
                                        Cidade Nova, Marabá - PA<br />
                                        CEP: 68501-570
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-3 bg-secondary rounded-2xl text-primary">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl text-primary font-medium">Horários</h4>
                                    <p className="text-primary/70">Segunda à Sexta: 08h às 19h</p>
                                    <p className="text-primary/70">Sábados: Conforme agendamento</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-start gap-4"
                            >
                                <div className="p-3 bg-secondary rounded-2xl text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl text-primary font-medium">Contato</h4>
                                    <p className="text-primary/70">(94) 9XXXX-XXXX</p>
                                    <p className="text-primary/70">contato@tatianemiranda.com.br</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 text-primary font-medium border-b-2 border-primary/20 pb-1 hover:border-primary transition-all group"
                        >
                            Abrir no Google Maps
                            <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                    </div>

                    {/* Interactive Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-secondary relative group"
                    >
                        <iframe
                            title="Localização Tatiane Miranda"
                            src={publicMapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[0.2] contrast-[1.1]"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 pointer-events-none border border-white/20 rounded-[32px]" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
