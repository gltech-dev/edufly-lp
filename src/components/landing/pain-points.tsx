import { FileSpreadsheet, DollarSign, Clock } from "lucide-react";

const pains = [
  {
    icon: FileSpreadsheet,
    title: "Planilhas desorganizadas",
    text: "Excel para alunos, Google Calendar para aulas, WhatsApp para cobrança. Tudo separado.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
  },
  {
    icon: DollarSign,
    title: "Perda de receita",
    text: "No-shows de 25%, inadimplência, aulas extras não cobradas. Dinheiro deixado na mesa.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Clock,
    title: "8-12h/semana perdidas",
    text: "Tempo que você poderia estar ensinando, gasto com administração manual.",
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
  },
];

export function PainPoints() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Você perde horas toda semana com...
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="card-hover rounded-lg border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <div
                className={`flex size-12 items-center justify-center rounded-lg ${pain.iconBg}`}
              >
                <pain.icon className={`size-6 ${pain.iconColor}`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{pain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pain.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
