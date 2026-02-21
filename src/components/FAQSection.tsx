import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo dura cada sessão?",
    a: "Cada sessão tem duração de aproximadamente 50 minutos. Esse é o tempo ideal para que possamos trabalhar de forma profunda e acolhedora, respeitando o seu ritmo.",
  },
  {
    q: "As sessões são online ou presenciais?",
    a: "Ofereço atendimento tanto online quanto presencial. As sessões online são realizadas por videochamada, em uma plataforma segura e sigilosa, para que você possa se sentir confortável onde estiver.",
  },
  {
    q: "Como funciona o sigilo profissional?",
    a: "O sigilo é um pilar fundamental da psicologia. Tudo o que for compartilhado durante as sessões é absolutamente confidencial, garantido pelo Código de Ética Profissional do Psicólogo.",
  },
  {
    q: "Qual é o valor da consulta?",
    a: "Os valores são informados diretamente no momento do agendamento. Entre em contato pelo WhatsApp para que eu possa apresentar as opções disponíveis para você.",
  },
  {
    q: "Preciso de encaminhamento médico para iniciar?",
    a: "Não! Você pode procurar um psicólogo a qualquer momento, sem necessidade de encaminhamento. O cuidado com a saúde mental é para todos.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Tire suas dúvidas sobre o processo terapêutico. Estou aqui para ajudar.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-primary/10 px-6 overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <AccordionTrigger className="font-body font-bold text-foreground hover:text-primary text-left py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
