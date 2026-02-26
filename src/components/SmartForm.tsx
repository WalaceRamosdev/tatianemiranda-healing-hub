import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export const SmartForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'individual',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-8 rounded-[32px] text-center space-y-4 border-2 border-primary/20"
            >
                <div className="flex justify-center">
                    <CheckCircle2 className="text-primary w-16 h-16" />
                </div>
                <h3 className="text-2xl font-serif text-primary">Mensagem Enviada</h3>
                <p className="text-primary/70">
                    Obrigada pelo contato, Tatiane entrará em contato em breve.
                </p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass p-8 rounded-[32px] shadow-2xl space-y-6 border border-white/40"
        >
            <div className="space-y-2">
                <h3 className="text-2xl font-serif text-primary">Solicitar Atendimento</h3>
                <p className="text-primary/60 text-sm">Responda brevemente para agilizarmos seu contato.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest text-primary/50 font-bold ml-1">Nome</label>
                    <input
                        required
                        type="text"
                        placeholder="Seu nome completo"
                        className="w-full bg-white/50 border border-primary/10 rounded-2xl px-4 py-3 text-primary outline-none focus:border-primary/40 focus:bg-white transition-all"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-primary/50 font-bold ml-1">Telefone</label>
                        <input
                            required
                            type="tel"
                            placeholder="(00) 00000-0000"
                            className="w-full bg-white/50 border border-primary/10 rounded-2xl px-4 py-3 text-primary outline-none focus:border-primary/40 focus:bg-white transition-all"
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs uppercase tracking-widest text-primary/50 font-bold ml-1">Tipo</label>
                        <select
                            className="w-full bg-white/50 border border-primary/10 rounded-2xl px-4 py-3 text-primary outline-none focus:border-primary/40 focus:bg-white transition-all appearance-none"
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                            <option value="individual">Individual</option>
                            <option value="adolescente">Adolescente</option>
                            <option value="avaliacao">Avaliação</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs uppercase tracking-widest text-primary/50 font-bold ml-1">Como se sente hoje?</label>
                    <textarea
                        placeholder="Breve comentário..."
                        className="w-full bg-white/50 border border-primary/10 rounded-2xl px-4 py-3 text-primary outline-none focus:border-primary/40 focus:bg-white transition-all h-24 resize-none"
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
                >
                    <Send size={18} />
                    Enviar Solicitação
                </button>
            </form>
        </motion.div>
    );
};
