import { FileSpreadsheet, DollarSign, EyeOff, TrendingUp } from "lucide-react";

const pains = [
  {
    icon: FileSpreadsheet,
    title: "O caos das ferramentas soltas",
    text: "Alunos no WhatsApp, horários no caderno, controle em planilhas que você esquece de atualizar e materiais espalhados em pastas infinitas.",
    iconBg: "bg-brand-50",
    iconColor: "text-brand-600",
  },
  {
    icon: DollarSign,
    title: "O desconforto de cobrar",
    text: "A vergonha de lembrar os pais do pagamento, mensagens de cobrança ignoradas e o prejuízo silencioso dos cancelamentos em cima da hora.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: EyeOff,
    title: "O trabalho invisível",
    text: "Horas fora da aula preparando atividades e relatórios que os responsáveis simplesmente não enxergam e não valorizam.",
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
  },
  {
    icon: TrendingUp,
    title: "A armadilha do crescimento",
    text: "Quando mais alunos chegam, a qualidade de vida desaparece. Você bate no teto físico de horários e vive na insegurança da sazonalidade.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export function PainPoints() {
  return (
    <section id="dor" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Você escolheu ensinar, mas virou secretária, cobradora e refém do próprio WhatsApp.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            O paradoxo de quem dá aula particular é cruel: você estuda, prepara com excelência e gera transformação de
            verdade. Na hora de gerenciar o negócio, ainda opera como horista.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 md:gap-8">
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

        <p className="mx-auto mt-10 max-w-2xl text-center text-base font-medium text-foreground md:text-lg">
          Organização não é uma questão de ter mais disciplina. É sobre ter o sistema certo.
        </p>
      </div>
    </section>
  );
}
