import React from 'react';
import {
    ArrowUpRight,
    MousePointer2,
    Sparkles,
    Heart,
    Code2,
    Instagram,
    MessageCircle,
    Globe,
    MapPin
} from 'lucide-react';
import avatar from '../assets/profissional/Tatiane-Miranda-psiologa1.png';

export const LinkTree = () => {
    const links = [
        {
            title: 'Agendamento Online',
            subtitle: 'Escolha seu melhor horário para consulta',
            href: 'https://wa.me/5594984046655?text=Ol%C3%A1%20Tatiane!%20Gostaria%20de%20agendar%20uma%20consulta.',
            icon: <MessageCircle className="text-emerald-500" />,
            color: 'from-emerald-100/40 via-white to-teal-50/40'
        },
        {
            title: 'Nosso Website',
            subtitle: 'Conheça minha trajetória e serviços modernos',
            href: '/',
            icon: <Globe className="text-blue-500" />,
            color: 'from-blue-100/40 via-white to-indigo-50/40'
        },
        {
            title: 'Instagram',
            subtitle: 'Acompanhe conteúdos diários @psi_tatiane',
            href: 'https://www.instagram.com/psi_tatianemiranda?utm_source=qr&igsh=MXc2OWs4NDd6d3RlOA%3D%3D',
            icon: <Instagram className="text-pink-500" />,
            color: 'from-pink-100/40 via-white to-rose-50/40'
        },
        {
            title: 'Localização',
            subtitle: 'Atendimento presencial em Marabá - PA',
            href: 'https://www.google.com/maps/search/?api=1&query=Av.+Nagib+Mutran%2C+Quadra+17%2C+Lote+02+-+Cidade+Nova%2C+Marab%C3%A1+-+PA%2C+68501-570',
            icon: <MapPin className="text-amber-500" />,
            color: 'from-amber-100/40 via-white to-orange-50/40'
        }
    ];

    return (
        <div className="min-h-screen bg-[#fafafc] relative overflow-x-hidden py-16 px-6 font-sans">
            
            {/* --- IMMERSIVE BACKGROUND (CSS ONLY) --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-gradient-to-br from-primary/5 via-gold/10 to-transparent rounded-full animate-aurora" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent rounded-full animate-aurora" style={{ animationDelay: '-4s' }} />
                
                {/* Texture */}
                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            </div>

            <div className="relative z-10 max-w-[520px] mx-auto">
                {/* --- HEADER --- */}
                <header className="flex flex-col items-center mb-16 text-center animate-reveal">
                    <div className="relative mb-10 group">
                        <div className="absolute -inset-6 bg-gradient-to-r from-gold/30 via-primary/20 to-accent/30 rounded-full blur-2xl animate-pulse-soft" />
                        
                        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-[3.2rem] bg-white p-1.5 shadow-[0_32px_64px_-16px_rgba(58,82,126,0.25)] overflow-hidden transition-transform duration-700 hover:scale-105 hover:-rotate-2">
                            <img
                                src={avatar.src}
                                alt="Tatiane Miranda"
                                className="w-full h-full object-cover rounded-[3rem]"
                            />
                        </div>

                        <div className="absolute -bottom-1 -right-1 bg-white p-3 rounded-2xl shadow-2xl border border-gold/10 z-20 animate-float">
                            <Sparkles size={22} className="text-gold" />
                        </div>
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-serif text-primary tracking-tight mb-4 font-normal italic drop-shadow-sm">
                        Tatiane Miranda
                    </h1>
                    
                    <div className="flex items-center justify-center gap-5 mb-5 w-full">
                        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/30" />
                        <p className="text-[12px] sm:text-[14px] tracking-[0.6em] text-primary/70 font-semibold uppercase italic">
                            Psicóloga Clínica
                        </p>
                        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/30" />
                    </div>

                    <div className="px-6 py-4 bg-white/60 backdrop-blur-md rounded-[2rem] border border-white/80 shadow-sm max-w-sm mx-auto">
                        <p className="text-primary text-[16px] sm:text-[18px] font-medium leading-relaxed italic">
                            "Um refúgio para <span className="underline decoration-gold/30">ressignificar</span> sua história e <span className="underline decoration-gold/30">florescer</span> sua melhor versão."
                        </p>
                    </div>
                </header>

                {/* --- CARDS (CSS TRANSITIONS) --- */}
                <div className="space-y-6">
                    {links.map((link, idx) => (
                        <div 
                            key={idx} 
                            className="animate-reveal opacity-0" 
                            style={{ animationDelay: `${1.2 + idx * 0.15}s`, animationFillMode: 'forwards' }}
                        >
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block w-full bg-white/60 backdrop-blur-2xl rounded-[2.8rem] border border-white/80 shadow-[0_15px_45px_-15px_rgba(58,82,126,0.1)] hover:shadow-[0_30px_70px_-10px_rgba(58,82,126,0.2)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
                            >
                                {/* Scan Line Animation */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45 animate-scan" style={{ animationDelay: `${idx * 0.5}s` }} />

                                {/* Inner Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                
                                <div className="relative flex items-center p-5 sm:p-6 gap-6">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.8rem] bg-white shadow-lg flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-[10deg] group-hover:shadow-xl">
                                        {React.cloneElement(link.icon as React.ReactElement, { size: 32 })}
                                    </div>

                                    <div className="flex-1 text-left">
                                        <h3 className="text-primary font-serif text-2xl sm:text-3xl font-normal leading-tight">
                                            {link.title}
                                        </h3>
                                        <p className="text-[12px] sm:text-sm text-primary/40 font-medium tracking-wide">
                                            {link.subtitle}
                                        </p>
                                    </div>

                                    <div className="w-12 h-12 rounded-full border border-primary/10 bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                                        <ArrowUpRight size={22} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* --- FOOTER --- */}
                <footer className="mt-24 text-center space-y-12 flex flex-col items-center pb-16 animate-reveal" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                    <div className="flex items-center gap-10">
                        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-primary/20" />
                        <Sparkles size={24} className="text-gold/40 animate-rotate-slow" />
                        <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-primary/20" />
                    </div>

                    <div className="space-y-4">
                        <p className="text-[11px] tracking-[0.7em] font-bold text-primary/50 uppercase italic">
                            Transformação • Cuidado • Autenticidade
                        </p>
                        <p className="text-[13px] text-primary/30 font-medium">
                            Tatiane Miranda | CRP-10/11768
                        </p>
                    </div>

                    <a
                        href="https://www.sitesalphacode.com.br/solucoes/psicologos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3 px-8 py-4 bg-white/30 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 hover:scale-105"
                    >
                        <span className="text-[10px] text-primary/40 font-black uppercase tracking-[0.3em]">Criação Exclusiva</span>
                        <div className="flex items-center gap-3 grayscale group-hover:grayscale-0 transition-all duration-700">
                            <Code2 size={18} className="text-primary group-hover:text-gold" />
                            <span className="text-[15px] font-black text-primary group-hover:text-gold tracking-tighter">ALPHA CODE</span>
                        </div>
                    </a>

                    <div className="text-primary/5 pt-6 animate-float">
                        <MousePointer2 size={32} />
                    </div>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
                
                body {
                    font-family: 'Outfit', sans-serif;
                    background: #fafafc;
                }
                
                .font-serif {
                    font-family: 'Cormorant Garamond', serif;
                }
            `}} />
        </div>
    );
};
