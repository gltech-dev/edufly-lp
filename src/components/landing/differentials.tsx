import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  "Alunos, aulas e financeiro no seu painel — sem planilha paralela",
  "Confirmação de presença pelos responsáveis — menos no-show",
  "Cobranças extras aprovadas antes da fatura — transparência com a família",
  "Google Calendar e lembretes por e-mail (e WhatsApp, quando você configurar)",
  "Homework e feedback no portal, com histórico para o aluno",
  "Progresso pedagógico visível para pais e alunos a qualquer hora",
];

export function Differentials() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(221 83% 53% / 0.04) 50%, hsl(220 20% 97%) 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            O que separa o Edufly de “só mais uma agenda”
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ferramentas soltas deixam cobrança e comunicação no escuro. O Edufly
            une captação, aula, confirmação, financeiro e acompanhamento pedagógico
            com regras claras para responsáveis — no seu espaço de trabalho.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {items.map((item) => (
            <div
              key={item}
              className="card-hover flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-5"
            >
              <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-200">
                <Check className="size-3.5 text-green-700" />
              </div>
              <p className="text-sm font-medium leading-snug">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            nativeButton={false}
            variant="outline"
            className="h-11 rounded-lg px-8 text-base font-semibold"
            render={<a href="#precos" />}
          >
            Ver planos
          </Button>
        </div>
      </div>
    </section>
  );
}
