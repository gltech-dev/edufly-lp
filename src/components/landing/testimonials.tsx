import { Star } from "lucide-react";

const testimonials = [
  {
    initial: "M",
    name: "Maria Silva",
    role: "Professora de Inglês, 35 alunos",
    quote:
      "No-shows caíram 80% depois da confirmação obrigatória. Estou faturando 30% a mais.",
  },
  {
    initial: "J",
    name: "João Costa",
    role: "English Point School, 3 professores",
    quote:
      "Antes perdia 2h/dia com planilhas. Agora foco só nas aulas. Game changer.",
  },
  {
    initial: "A",
    name: "Ana Oliveira",
    role: "Tutora de Espanhol",
    quote:
      "Pais adoraram o portal. Transparência total eliminou 100% das reclamações.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Professores já economizam 10h/semana
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm md:p-8"
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-700 text-sm font-semibold text-white shadow-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
