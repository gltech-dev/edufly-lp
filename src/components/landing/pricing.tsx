import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const includes = [
  "Alunos ilimitados",
  "Landing page profissional",
  "Confirmação de presença",
  "Financeiro variável",
  "Portais pais + alunos",
  "Homework online",
  "Analytics completo",
  "Google Calendar sync",
  "Suporte por email",
];

export function Pricing() {
  return (
    <section id="precos" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Comece grátis hoje
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Teste completo por 7 dias. Sem cartão de crédito.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-md md:mt-16">
          <div className="card-hover relative overflow-hidden rounded-lg border-2 border-brand-200 bg-card shadow-xl shadow-brand-600/5">
            <div className="absolute right-4 top-4">
              <span className="inline-flex items-center rounded-full bg-amber-500 px-2.5 py-0.5 text-xs font-semibold text-white">
                LANÇAMENTO
              </span>
            </div>

            <div className="p-8">
              <div className="mt-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    R$ 29
                  </span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  primeiros 3 meses
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  R$ 49/mês após período promocional
                </p>
              </div>

              <div className="my-6 h-px bg-border" />

              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <Check className="size-3 text-green-600" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                nativeButton={false}
                className="mt-8 h-12 w-full rounded-lg bg-brand-600 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30 active:translate-y-px"
                render={<Link href="https://portal.edufly.com.br" />}
              >
                Começar teste grátis
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Cancele quando quiser. Sem multa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
