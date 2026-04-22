import Image from "next/image";
import {
  Building2,
  Globe,
  Bell,
  Receipt,
  BookOpen,
  Users,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Uma organização para sua escola",
    description:
      "Alunos, aulas, materiais e financeiro ficam ligados à sua escola (organização), não espalhados em contas soltas. Professores autorizados podem trabalhar na mesma base — um espaço só para sua operação.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
    image: "/prints/financeiro-dashboard.png",
    imageAlt: "Visão financeira e operação centralizada no Edufly",
  },
  {
    icon: Globe,
    title: "Landing page profissional",
    description:
      "Compartilhe o link da sua escola (ex.: professorjoao.edufly.com.br) com alunos e responsáveis. Planos, preços e contato, alinhados à sua marca.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
    image: "/prints/landing-page.png",
    imageAlt: "Editor de landing page do professor no Edufly",
  },
  {
    icon: Bell,
    title: "Confirmação de presença",
    description:
      "Pais confirmam aulas 24h antes por email. No-shows caem de 25% para menos de 5%.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    image: "/prints/confirmacao-email.png",
    imageAlt: "Email de confirmação de presença enviado pelo Edufly",
  },
  {
    icon: Receipt,
    title: "Financeiro completo",
    description:
      "Faturas automáticas, cobranças variáveis, controle de inadimplência. Transparência total.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    image: "/prints/financeiro-dashboard.png",
    imageAlt: "Dashboard financeiro com receita, MRR e inadimplência",
  },
  {
    icon: BookOpen,
    title: "Deveres de casa online",
    description:
      "Alunos enviam homework pelo portal. Corrija, dê notas e feedback. Tudo registrado.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
    image: "/prints/atividades-aluno.png",
    imageAlt: "Portal do aluno com atividades e homework",
  },
  {
    icon: Users,
    title: "Portais para pais e alunos",
    description:
      "Responsáveis e alunos enxergam só o que pertence àquela escola: progresso, aprovação de cobranças, confirmação de aulas, materiais e homework.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    image: "/prints/portal-aluno-aulas.png",
    imageAlt: "Portal do aluno com lista de aulas agendadas",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento pedagógico",
    description:
      "Timeline de progresso, performance charts, notas de aula. Mostre evolução para os pais.",
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
            Tudo em um só lugar — por escola
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Recursos pensados para quem atua sozinho ou em equipe, sempre com a
            escola como centro da gestão
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
