import { BookOpen, Users, GraduationCap } from "lucide-react";

const personas = [
  {
    icon: BookOpen,
    title: "Professores particulares de idiomas",
    text: "10–50 alunos, cobra por hora ou pacote: a sua marca, com portais e financeiro no mesmo painel.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
  },
  {
    icon: GraduationCap,
    title: "Tutores de reforço escolar",
    text: "Aulas individuais ou grupos pequenos: agenda, confirmação e cobrança sem perseguir família no WhatsApp.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Users,
    title: "Quem dá aula com outros professores",
    text: "Dois ou três colegas, mesma base de alunos e cobrança — alinhados, sem planilha paralela.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export function TargetAudience() {
  return (
    <section id="para-quem" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Feito para quem dá aula
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            O ponto de partida é o professor. Se um dia você tiver colegas na mesma operação, o produto acompanha — sem mudar a lógica.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="card-hover rounded-lg border border-border bg-card p-6 text-center shadow-sm md:p-8"
            >
              <div
                className={`mx-auto flex size-14 items-center justify-center rounded-xl ${persona.iconBg}`}
              >
                <persona.icon className={`size-7 ${persona.iconColor}`} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{persona.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {persona.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
