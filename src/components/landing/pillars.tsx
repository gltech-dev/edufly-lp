import { Globe, CalendarCheck, Wallet, GraduationCap } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    number: "1",
    title: "Captação profissional",
    subtitle: "Passe autoridade antes mesmo da primeira aula.",
    text: "Gere a sua landing page em minutos, com fotos, valores e apresentação. Chega de mensagem amadora no direct ou PDF solto: conduza interessados com postura de especialista.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
  },
  {
    icon: CalendarCheck,
    number: "2",
    title: "Operação inteligente",
    subtitle: "Sua agenda organizada sem esforço mental.",
    text: "Centralize horários, envie confirmações de presença automáticas aos responsáveis e elimine no-show e remarcação de última hora. Você deixa de depender só da memória.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Wallet,
    number: "3",
    title: "Gestão financeira sem constrangimento",
    subtitle: "Receba em dia, com previsibilidade e sem cobrar na mão.",
    text: "Automatize lembretes de fatura, acompanhe o fluxo de recebimentos e saiba quanto o seu negócio fatura no mês. Separe o pessoal do profissional e tenha caixa previsível.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: GraduationCap,
    number: "4",
    title: "Experiência pedagógica de alto valor",
    subtitle: "Torne visível todo o valor que você entrega.",
    text: "Portais para alunos e pais verem evolução, deveres, feedback e histórico. Quando a família enxerga o acompanhamento contínuo, a retenção sobe e a disputa por preço perde força.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
  },
];

export function Pillars() {
  return (
    <section id="pilares" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Edufly
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Você foca nas aulas, a Edufly cuida do resto.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Não é software genérico nem planilha enfeitada. É um sistema feito para a rotina de quem leciona de forma
            independente. Transforme a atuação numa operação profissional, em quatro pilares:
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 md:gap-8">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="card-hover rounded-lg border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex size-12 items-center justify-center rounded-lg ${pillar.iconBg}`}
                >
                  <pillar.icon className={`size-6 ${pillar.iconColor}`} />
                </div>
                <span className="text-sm font-semibold text-muted-foreground">
                  Pilar {pillar.number}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm font-medium text-foreground">{pillar.subtitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
