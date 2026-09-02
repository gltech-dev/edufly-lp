import Image from "next/image";
import {
  LayoutDashboard,
  Globe,
  Bell,
  Calendar,
  Receipt,
  BookOpen,
  Users,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Tudo da sua operação em um só painel",
    description:
      "Alunos, aulas, materiais e financeiro ficam juntos, sem planilha paralela nem dado perdido em outra conta. Se você der aula com outro professor, dá para trabalhar na mesma base — sem retrabalho.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
    image: "/prints/financeiro-dashboard.png",
    imageAlt: "Visão financeira e operação do professor no Edufly",
  },
  {
    icon: Globe,
    title: "Landing page com o seu nome",
    description:
      "Compartilhe um link seu (ex.: professorjoao.edufly.com.br) com alunos e responsáveis. Planos, preços e contato no ar em minutos — a primeira impressão que fecha matrícula.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
    image: "/prints/landing-page.png",
    imageAlt: "Editor de landing page do professor no Edufly",
  },
  {
    icon: Bell,
    title: "Confirmação de presença",
    description:
      "Responsáveis confirmam aulas com antecedência por e-mail. Você reduz no-show, enche a agenda com previsibilidade e deixa de perseguir confirmação no WhatsApp.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    image: "/prints/confirmacao-email.png",
    imageAlt: "Email de confirmação de presença enviado pelo Edufly",
  },
  {
    icon: Calendar,
    title: "Google Calendar e lembretes em mais canais",
    description:
      "Conecte o Google Calendar às suas aulas e combine e-mail com lembretes por WhatsApp quando fizer sentido — inclusive fluxo por QR (estilo WhatsApp Web) com servidor hospedado pela Edufly ou Evolution próprio, conforme a sua configuração.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
    image: "/prints/confirmacao-email.png",
    imageAlt: "Lembretes e comunicação com alunos e responsáveis no Edufly",
  },
  {
    icon: Receipt,
    title: "Financeiro completo",
    description:
      "Faturas automáticas, cobranças variáveis e controle de inadimplência com visão de receita. Responsáveis aprovam extras antes da fatura — transparência que evita surpresa na cobrança e atrito com a família.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    image: "/prints/financeiro-dashboard.png",
    imageAlt: "Dashboard financeiro com receita, MRR e inadimplência",
  },
  {
    icon: BookOpen,
    title: "Deveres de casa online",
    description:
      "Alunos enviam homework pelo portal; você corrige, dá notas e feedback com histórico. Tudo registrado para mostrar evolução e valorizar o trabalho entre uma aula e outra.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
    image: "/prints/atividades-aluno.png",
    imageAlt: "Portal do aluno com atividades e homework",
  },
  {
    icon: Users,
    title: "Portais para pais e alunos",
    description:
      "Responsáveis e alunos veem o que é da sua aula: progresso, aprovação de cobranças, confirmação, materiais e homework. Menos mensagem duplicada, mais confiança no seu trabalho.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    image: "/prints/portal-aluno-aulas.png",
    imageAlt: "Portal do aluno com lista de aulas agendadas",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento pedagógico",
    description:
      "Timeline de progresso, gráficos de desempenho e notas de aula em um só lugar. Argumentos concretos na retenção e na conversa com a família — sem montar relatório na mão.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    image: "/prints/evolucao-aluno.png",
    imageAlt: "Evolução do aluno com gráficos de desempenho e presença",
  },
];

export function Features() {
  return (
    <section id="recursos" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Tudo em um só lugar — para você dar aula
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Do primeiro contato na landing ao pagamento confirmado: fluxos que se conversam no seu painel.
          </p>
        </div>

        <div className="mt-12 space-y-16 md:mt-20 md:space-y-24">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-8 md:gap-12 lg:gap-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-5/12">
                <div
                  className={`flex size-10 items-center justify-center rounded-lg ${feature.iconBg}`}
                >
                  <feature.icon className={`size-5 ${feature.iconColor}`} />
                </div>
                <h3 className="mt-4 text-xl font-semibold md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {feature.description}
                </p>
              </div>
              <div className="w-full md:w-7/12">
                <div className="card-hover overflow-hidden rounded-lg border border-border bg-card shadow-md">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={1024}
                    height={576}
                    className="w-full"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
