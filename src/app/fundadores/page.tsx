import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import {
  FOUNDING_PLAN,
  PLAN_INCLUDES,
  formatBrl,
} from "@/lib/plans";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Plano Fundadores | ${SITE_NAME}`,
  description:
    "Oferta de lançamento da Edufly, limitada aos primeiros clientes.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function FundadoresPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-brand-600">
            Oferta de lançamento
          </p>
          <h1 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Plano Fundadores
          </h1>
          <p className="mt-4 text-center text-muted-foreground">
            Preço exclusivo para os {FOUNDING_PLAN.maxRedemptions} primeiros.
            Não aparece na página pública — só quem chega por este link.
          </p>

          <article className="mt-10 overflow-hidden rounded-lg border-2 border-brand-200 bg-card shadow-xl shadow-brand-600/5">
            <div className="p-8">
              <div>
                <p className="text-sm text-muted-foreground line-through">
                  {formatBrl(FOUNDING_PLAN.compareAtBrl)}/ano
                </p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {formatBrl(FOUNDING_PLAN.valueBrl)}
                  </span>
                  <span className="text-muted-foreground">/ano</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  2/3 do plano anual. Mesmo produto, vagas limitadas.
                </p>
              </div>

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
                render={<Link href={FOUNDING_PLAN.checkoutHref} />}
              >
                Garantir este preço
              </Button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Você cria a conta, testa 7 dias e conclui o checkout neste valor.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
