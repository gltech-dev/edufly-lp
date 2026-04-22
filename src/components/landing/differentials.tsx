import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  "Alunos, aulas e financeiro amarrados à sua escola (organização)",
  "Confirmação obrigatória pelos pais",
  "Cobranças extras aprovadas antes da fatura",
  "Progresso pedagógico visível 24/7",
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
            O único com transparência total
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Enquanto outros só fazem agenda ou só financeiro, Edufly integra
            tudo com aprovações dos pais — sempre no contexto da sua escola, com
            espaço para equipe atuar na mesma base.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
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
