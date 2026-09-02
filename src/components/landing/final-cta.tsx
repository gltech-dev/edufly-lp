import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { EDUFLY_YOUTUBE_CHANNEL_URL, eduflyWhatsAppUrl } from "@/lib/edufly-contact";

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
            Chegou a hora de tratar suas aulas como o negócio de alto nível que elas são.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Cadastre-se, coloque seus alunos e responsáveis e automatize a rotina em minutos — teste grátis por 7 dias.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button
              nativeButton={false}
              className="h-14 rounded-lg bg-brand-600 px-10 text-lg font-semibold text-white shadow-xl shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-2xl hover:shadow-brand-600/30 active:translate-y-px"
              render={<Link href="https://portal.edufly.com.br" />}
            >
              Criar minha conta grátis
              <ArrowRight className="ml-2 size-5" data-icon="inline-end" />
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              className="h-14 rounded-lg border-green-200 bg-green-50 px-8 text-base font-semibold text-green-800 hover:bg-green-100"
              render={
                <a
                  href={eduflyWhatsAppUrl(
                    "Olá! Vim pelo site da Edufly e quero tirar dúvidas antes de criar a conta.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle className="mr-2 size-5" data-icon="inline-start" />
              Falar no WhatsApp
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            <a
              href={EDUFLY_YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 transition-colors hover:underline"
            >
              Canal no YouTube
            </a>
            {" — tutoriais e novidades do produto."}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
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
