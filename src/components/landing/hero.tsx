import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.08), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(16,185,129,0.05), transparent), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(245,158,11,0.04), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 md:pb-24 md:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Professores mudam vidas.
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-green-500 bg-clip-text text-transparent">
              Edufly cuida do resto.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            A plataforma completa para professores particulares. Da captação de
            alunos ao recebimento, tudo automatizado.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              className="h-12 rounded-lg bg-brand-600 px-8 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30 active:translate-y-px"
              render={<Link href="https://portal.edufly.com.br" />}
            >
              Começar grátis — 7 dias
              <ArrowRight className="ml-1 size-4" data-icon="inline-end" />
            </Button>
            <Button
              nativeButton={false}
              variant="ghost"
              className="h-12 rounded-lg px-8 text-base font-semibold"
              render={<a href="#recursos" />}
            >
              <Play className="mr-1 size-4" data-icon="inline-start" />
              Ver como funciona
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {["M", "J", "A", "R", "C"].map((initial, i) => (
                <div
                  key={i}
                  className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-semibold text-white shadow-sm"
                >
                  {initial}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                +50 professores
              </span>{" "}
              já automatizaram sua gestão
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="card-hover relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-brand-600/5">
            <Image
              src="/prints/landing-page.png"
              alt="Dashboard do Edufly mostrando o editor de landing page do professor"
              width={1024}
              height={576}
              className="w-full"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
