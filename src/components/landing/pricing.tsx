import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PLAN_INCLUDES, PUBLIC_PLANS, formatBrl } from "@/lib/plans";

export function Pricing() {
  return (
    <section id="precos" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Comece grátis hoje
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Teste completo por 7 dias, com o que você usa no dia a dia. Sem
            cartão de crédito. Depois escolha mensal ou anual — o anual sai mais
            barato.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:mt-16 md:grid-cols-2">
          <article className="card-hover relative overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <div className="p-8">
              <h3 className="text-lg font-semibold">{PUBLIC_PLANS.monthly.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  {formatBrl(PUBLIC_PLANS.monthly.valueBrl)}
                </span>
                <span className="text-muted-foreground">
                  /{PUBLIC_PLANS.monthly.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Flexível. Cancele quando quiser.
              </p>

              <div className="my-6 h-px bg-border" />

              <ul className="space-y-3">
                {PLAN_INCLUDES.map((item) => (
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
                variant="outline"
                className="mt-8 h-12 w-full rounded-lg text-base font-semibold"
                render={<Link href={PUBLIC_PLANS.monthly.href} />}
              >
                Começar teste grátis
              </Button>
            </div>
          </article>

          <article className="card-hover relative overflow-hidden rounded-lg border-2 border-brand-200 bg-card shadow-xl shadow-brand-600/5">
            <div className="absolute right-4 top-4">
              <span className="inline-flex items-center rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                Mais vantajoso
              </span>
            </div>

            <div className="p-8">
              <h3 className="text-lg font-semibold">{PUBLIC_PLANS.yearly.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  {formatBrl(PUBLIC_PLANS.yearly.valueBrl)}
                </span>
                <span className="text-muted-foreground">
                  /{PUBLIC_PLANS.yearly.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Equivale a {formatBrl(PUBLIC_PLANS.yearly.monthlyEquivalentBrl)}
                /mês
              </p>

              <div className="my-6 h-px bg-border" />

              <ul className="space-y-3">
                {PLAN_INCLUDES.map((item) => (
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
                render={<Link href={PUBLIC_PLANS.yearly.href} />}
              >
                Começar teste grátis
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Cancele quando quiser. Sem multa.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
