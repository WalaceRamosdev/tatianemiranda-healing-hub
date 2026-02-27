import React from 'react';
import { motion } from 'motion/react';
import {
    BookOpen,
    Cpu,
    Layout as LayoutIcon,
    Palette,
    Wrench,
    ArrowRight,
    ExternalLink,
    Home,
    Link as LinkIcon,
    Code2,
    ShieldCheck,
    Zap,
    Image as ImageIcon
} from 'lucide-react';

export const ProjectManual = () => {
    const sections = [
        {
            title: 'Tecnologias de Ponta',
            icon: <Cpu className="text-gold" />,
            description: 'Seu site utiliza o que há de mais moderno no desenvolvimento web mundial.',
            items: [
                { name: 'Astro 5.0', desc: 'Garante que o site seja ultrarrápido e otimizado para o Google (SEO).', icon: <Zap size={18} /> },
                { name: 'React & Framer Motion', desc: 'Responsáveis pelas animações fluidas e interações suaves.', icon: <SparklesIcon /> },
                { name: 'Tailwind CSS', desc: 'Sistema de design que garante adaptabilidade perfeita em celulares e tablets.', icon: <LayoutIcon size={18} /> }
            ]
        },
        {
            title: 'Identidade e Design',
            icon: <Palette className="text-gold" />,
            description: 'Uma estética curada para transmitir confiança, acolhimento e sofisticação.',
            items: [
                { name: 'Paleta Terapêutica', desc: 'Azul Profundo, Ouro e Tons de Areia para equilíbrio visual.', icon: <div className="w-4 h-4 rounded-full bg-primary" /> },
                { name: 'Tipografia Erudita', desc: 'Fontes que mesclam a tradição acadêmica com a clareza moderna.', icon: <span className="font-serif font-bold">Aa</span> },
                { name: 'Ícones 3D Exclusivos', desc: 'Artes personalizadas que elevam o padrão visual da sua bio.', icon: <ImageIcon size={18} /> }
            ]
        },
        {
            title: 'Estrutura Inteligente',
            icon: <LayoutIcon className="text-gold" />,
            description: 'O site foi pensado na jornada do seu paciente, do primeiro clique ao agendamento.',
            items: [
                { name: 'Landing Page', desc: 'Sua vitrine completa com história, serviços e depoimentos.', icon: <Home size={18} /> },
                { name: 'Central de Links', desc: 'Página exclusiva para sua Bio do Instagram, otimizada para conversão.', icon: <LinkIcon size={18} /> },
                { name: 'Segurança & LGPD', desc: 'Estrutura preparada conforme normas de privacidade e ética.', icon: <ShieldCheck size={18} /> }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFCFB] text-primary font-sans selection:bg-gold/20 pb-20 overflow-x-hidden">
            {/* Background Texture */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Header Section */}
            <header className="relative pt-24 pb-16 px-6 text-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold mb-6 border border-gold/20">
                        <BookOpen size={16} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Manual do Projeto</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-serif italic font-black mb-6 drop-shadow-sm">
                        Manual do seu de Site
                    </h1>
                    <p className="text-lg text-primary/60 max-w-xl mx-auto italic">
                        Um guia completo sobre a tecnologia e o design por trás da sua presença digital.
                    </p>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/30 blur-[120px] rounded-full" />
                </div>
            </header>

            <main className="relative z-10 max-w-5xl mx-auto px-6 space-y-24">
                {/* Intro Card */}
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary text-white p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl -rotate-45 translate-x-1/2 -translate-y-1/2" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-serif italic font-bold">Excelência Digital para Psicologia</h2>
                            <p className="text-white/70 leading-relaxed text-lg font-light">
                                Desenvolvemos uma plataforma que não apenas informa, mas acolhe. Usamos as mesmas tecnologias utilizadas por gigantes como Tesla e Airbnb para garantir que sua voz chegue aos pacientes com clareza e elegância.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-2xl border border-white/5 backdrop-blur-md">
                                    <Zap size={18} className="text-gold" />
                                    <span className="text-sm font-bold tracking-wide">Alta Performance</span>
                                </div>
                                <div className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-2xl border border-white/5 backdrop-blur-md">
                                    <ShieldCheck size={18} className="text-gold" />
                                    <span className="text-sm font-bold tracking-wide">Segurança Total</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[300px] aspect-square bg-gradient-to-br from-gold/20 to-transparent rounded-[32px] border border-white/10 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
                            <img src="/logo.svg" alt="Tatiane Miranda" className="w-full h-auto drop-shadow-2xl" />
                        </div>
                    </div>
                </motion.section>

                {/* Main Sections Grid */}
                <section className="grid md:grid-cols-1 gap-12">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-lg border border-primary/5 flex items-center justify-center">
                                    {section.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif italic font-black">{section.title}</h3>
                                    <p className="text-primary/50 text-sm font-medium">{section.description}</p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-6">
                                {section.items.map((item, i) => (
                                    <div key={i} className="bg-white p-8 rounded-[32px] border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                                        <div className="text-gold mb-6 w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <h4 className="font-bold text-lg mb-3">{item.name}</h4>
                                        <p className="text-sm text-primary/60 leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Footer / CTA Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="pt-20 border-t border-primary/10 flex flex-col items-center text-center space-y-12"
                >
                    <div className="space-y-4">
                        <p className="text-gold font-black tracking-[0.4em] uppercase text-[12px]">Suporte & Evolução</p>
                        <h2 className="text-4xl font-serif italic font-bold">Sua parceira Alpha Code</h2>
                        <p className="text-primary/50 max-w-lg mx-auto leading-relaxed">
                            Este ecossistema digital foi construído para crescer com você. Como sua parceira estratégica, estamos prontos para as próximas etapas da sua evolução.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <a
                            href="https://www.sitesalphacode.com.br/solucoes/psicologos"
                            target="_blank"
                            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black tracking-widest text-[12px] uppercase group hover:bg-gold transition-all shadow-xl hover:shadow-gold/20"
                        >
                            Conheça Nossas Soluções
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/"
                            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-black tracking-widest text-[12px] uppercase border border-primary/10 hover:border-gold transition-all"
                        >
                            Voltar ao seu Site
                        </a>
                    </div>

                    <div className="pt-10 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <span className="text-[10px] text-primary/30 font-bold uppercase tracking-[0.2em]">Crafted by</span>
                            <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-all">
                                <Code2 size={14} />
                                <span className="text-[14px] font-black tracking-tighter">ALPHA CODE</span>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>

            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,600;1,700&family=Outfit:wght@100..900&display=swap');
                
                body {
                    font-family: 'Outfit', sans-serif;
                }
                
                .font-serif {
                    font-family: 'Cormorant Garamond', serif;
                }
            `}} />
        </div>
    );
};

// Internal Helper Icons
const SparklesIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
    </svg>
);
