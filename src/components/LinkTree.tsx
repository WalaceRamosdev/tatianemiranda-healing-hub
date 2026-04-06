import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
    ArrowUpRight,
    MousePointer2,
    Sparkles,
    Heart,
    Code2
} from 'lucide-react';

import avatar from '../assets/profissional/Tatiane-Miranda-psiologa1.png';

export const LinkTree = () => {
    const links = [
        {
            title: 'Agendamento Online',
            subtitle: 'Escolha seu melhor horário para consulta',
            href: 'https://wa.me/5594984046655?text=Ol%C3%A1%20Tatiane!%20Gostaria%20de%20agendar%20uma%20consulta.',
            iconPath: '/icon_3d_calendar_1772197492239.png',
            cta: 'AGENDAR AGORA',
            color: 'bg-[#f0e6d5]'
        },
        {
            title: 'Nosso Website',
            subtitle: 'Conheça minha trajetória e serviços modernos',
            href: '/',
            iconPath: '/icon_3d_globe_1772197511753.png',
            cta: 'VISITAR SITE',
            color: 'bg-[#e1ecef]'
        },
        {
            title: 'Instagram',
            subtitle: 'Acompanhe conteúdos diários @psi_tatiane',
            href: 'https://www.instagram.com/psi_tatianemiranda?utm_source=qr&igsh=MXc2OWs4NDd6d3RlOA%3D%3D',
            iconPath: '/icon_3d_instagram_1772197524872.png',
            cta: 'SEGUIR PERFIL',
            color: 'bg-[#f0e6d5]'
        },
        {
            title: 'Localização',
            subtitle: 'Atendimento presencial em Marabá - PA',
            href: 'https://www.google.com/maps/search/?api=1&query=Av.+Nagib+Mutran%2C+Quadra+17%2C+Lote+02+-+Cidade+Nova%2C+Marab%C3%A1+-+PA%2C+68501-570',
            iconPath: '/icon_3d_map_pin_1772197538999.png',
            cta: 'VER MAPA',
            color: 'bg-[#e1ecef]'
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFCFB] relative overflow-x-hidden selection:bg-gold/20 py-12 px-6">

            {/* --- CONTRASTED AMBIENT BACKGROUND --- */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#e1ecef]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-[#f0e6d5]/40 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[480px] mx-auto flex flex-col items-center">

                {/* --- HEADER (MAX CONTRAST) --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center mb-10 sm:mb-14 text-center w-full"
                >
                    <div className="relative mb-6 sm:mb-8">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 sm:-inset-6 border-2 border-gold/20 rounded-full border-dashed"
                        />
                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1.5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden ring-4 ring-gold/10">
                            <img
                                src={avatar.src}
                                alt="Tatiane Miranda"
                                className="w-full h-full object-cover rounded-full transition-transform duration-700 shadow-inner"
                            />
                        </div>
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -bottom-1 -right-1 bg-white p-2 sm:p-2.5 rounded-full shadow-xl border border-gold/20"
                        >
                            <Heart size={18} className="text-gold fill-gold/20" />
                        </motion.div>
                    </div>

                    <h1 className="text-3xl sm:text-[42px] font-serif text-primary tracking-tight mb-2 font-black italic drop-shadow-md">
                        Tatiane Miranda
                    </h1>
                    <div className="flex items-center gap-3 sm:gap-4 mb-3">
                        <div className="h-[2px] w-6 sm:w-8 bg-primary" />
                        <p className="text-[10px] sm:text-[13px] tracking-[0.4em] sm:tracking-[0.6em] text-primary font-black uppercase">
                            PSICÓLOGA CLÍNICA
                        </p>
                        <div className="h-[2px] w-6 sm:w-8 bg-primary" />
                    </div>
                    <p className="text-secondary font-medium text-sm sm:text-base italic opacity-80 px-4">
                        Seu caminho de transformação começa aqui.
                    </p>
                </motion.div>

                {/* --- 3D POP-OUT CARDS (MAX CONTRAST) --- */}
                <div className="w-full space-y-6 sm:space-y-10">
                    {links.map((link, idx) => (
                        <motion.a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            className="group relative block w-full bg-white rounded-[32px] sm:rounded-[45px] shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-[#f0f0f0] transition-all duration-500 overflow-visible"
                        >
                            <div className="relative flex items-center p-3 sm:p-4 min-h-[130px] sm:h-[155px] overflow-visible">

                                {/* 3D ACTUAL ICON SECTION */}
                                <div className={`relative flex-shrink-0 w-[90px] h-[90px] sm:w-[125px] sm:h-[125px] rounded-[24px] sm:rounded-[40px] ${link.color} flex items-center justify-center shadow-inner overflow-visible ring-1 ring-black/5`}>
                                    {/* The Pop-Out Image Icon */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.3,
                                            y: -25,
                                            rotateY: 15,
                                            filter: "drop-shadow(0 40px 40px rgba(0,0,0,0.3))"
                                        }}
                                        className="relative z-20 w-[130%] h-[130%] sm:w-[145%] sm:h-[145%] pointer-events-none drop-shadow-2xl"
                                    >
                                        <img
                                            src={link.iconPath}
                                            alt={link.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>

                                    {/* Glass reflection */}
                                    <div className="absolute inset-x-2 sm:inset-x-3 top-2 sm:top-3 h-1/2 bg-white/30 rounded-t-[20px] sm:rounded-t-[35px] rounded-br-[80%] opacity-50" />
                                </div>

                                {/* TEXT CONTENT (MAX CONTRAST) */}
                                <div className="flex-1 pl-4 sm:pl-8 pr-2">
                                    <h3 className="text-primary font-serif text-xl sm:text-[26px] font-black leading-tight mb-1 sm:mb-2 group-hover:text-gold transition-colors duration-300">
                                        {link.title}
                                    </h3>
                                    <p className="text-[12px] sm:text-[14px] text-primary/90 font-bold mb-3 sm:mb-5 leading-tight">
                                        {link.subtitle}
                                    </p>

                                    <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white shadow-[0_10px_20px_rgba(58,82,126,0.3)] hover:bg-gold hover:shadow-gold/30 transition-all duration-500 transform group-hover:scale-105">
                                        <span className="text-[10px] sm:text-[11px] font-black tracking-[0.1em] sm:tracking-[0.2em] uppercase">{link.cta}</span>
                                        <ArrowUpRight size={14} className="sm:size-16 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* --- FOOTER (MAX CONTRAST) --- */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-24 text-center space-y-10 flex flex-col items-center pb-20"
                >
                    <div className="flex items-center gap-8 justify-center">
                        <div className="h-[3px] w-16 bg-primary/20 rounded-full" />
                        <img src="/logo.svg" alt="Signature" className="h-10 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700" />
                        <div className="h-[3px] w-16 bg-primary/20 rounded-full" />
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <Sparkles size={18} className="text-gold" />
                            <p className="text-[13px] tracking-[0.6em] font-black text-primary uppercase">
                                Cuidado & Transformação
                            </p>
                            <Sparkles size={18} className="text-gold" />
                        </div>
                        <p className="text-[12px] text-primary font-bold tracking-widest opacity-60">
                            Tatiane Miranda • CRP-10/11768 • Marabá-PA
                        </p>
                    </div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-gold"
                    >
                        <MousePointer2 size={24} />
                    </motion.div>

                    {/* DESENVOLVIDO POR ALPHA CODE */}
                    <motion.a
                        href="https://www.sitesalphacode.com.br/solucoes/psicologos"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-primary/5 shadow-sm hover:border-gold/20 transition-all mt-4 group"
                    >
                        <span className="text-[10px] text-primary/40 font-bold uppercase tracking-[0.2em]">Desenvolvido por</span>
                        <div className="flex items-center gap-1.5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                            <Code2 size={12} className="text-primary group-hover:text-gold" />
                            <span className="text-[12px] font-black text-primary group-hover:text-gold tracking-tighter">ALPHA CODE</span>
                        </div>
                    </motion.a>
                </motion.footer>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,600;1,700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
                
                body {
                    font-family: 'Outfit', sans-serif;
                    background: #FDFCFB;
                    -webkit-font-smoothing: antialiased;
                }
                
                .font-serif {
                    font-family: 'Cormorant Garamond', serif;
                }
            `}} />
        </div>
    );
};
