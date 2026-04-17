import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const questions = [
  {
    q: "Preciso de conhecimento técnico?",
    a: "Zero. Interface intuitiva, suporte por email, tudo funciona em qualquer navegador.",
  },
  {
    q: "Como funciona o teste grátis?",
    a: "7 dias completos, todos os recursos, sem pedir cartão. Decide depois se continua.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem multa. Seus dados ficam salvos por 30 dias caso mude de ideia.",
  },
  {
    q: "Como meus alunos acessam?",
    a: "Via sua landing page personalizada (professorjoao.edufly.com.br) ou links diretos que você envia.",
  },
  {
    q: "Edufly funciona no celular?",
    a: "Sim, 100% mobile. Você, pais e alunos acessam de qualquer dispositivo.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Criptografia, backup diário, LGPD-compliant, hospedado na nuvem.",
  },
];

export function Faq() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl md:mt-16">
          <div className="rounded-lg border border-border bg-card p-1 shadow-sm">
            <Accordion>
              {questions.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="px-4 text-base font-medium">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <p className="text-muted-foreground">{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
