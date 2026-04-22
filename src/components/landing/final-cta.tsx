import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.06), transparent), radial-gradient(ellipse 50% 40% at 70% 70%, rgba(16,185,129,0.04), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Centralize sua escola em um só sistema
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Crie sua organização, configure alunos e responsáveis e automatize
            a operação em minutos — teste grátis por 7 dias.
          </p>

          <Button
            nativeButton={false}
            className="mt-10 h-14 rounded-lg bg-brand-600 px-10 text-lg font-semibold text-white shadow-xl shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-2xl hover:shadow-brand-600/30 active:translate-y-px"
            render={<Link href="https://portal.edufly.com.br" />}
          >
            Criar minha conta grátis
            <ArrowRight className="ml-2 size-5" data-icon="inline-end" />
          </Button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="text-green-500">✓</span> 7 dias grátis
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-500">✓</span> Sem cartão
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green-500">✓</span> Cancele quando quiser
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
