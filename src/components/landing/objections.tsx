const objections = [
  {
    q: "Meu negócio é pequeno demais para usar um sistema.",
    a: "Você não precisa ter dezenas de alunos para ser profissional. É exatamente a organização desde o início que permite cobrar mais caro e selecionar os melhores alunos.",
  },
  {
    q: "Tenho medo de ser difícil de mexer.",
    a: "A interface foi desenhada com foco em simplicidade. Em menos de 15 minutos você cadastra os primeiros alunos e já começa a usar.",
  },
  {
    q: "Não quero gastar mais tempo preenchendo ferramenta.",
    a: "O propósito da Edufly é devolver de 8 a 12 horas da sua semana que hoje são jogadas fora com burocracia manual, cobrança e mensagens.",
  },
];

export function Objections() {
  return (
    <section id="simplificar" className="relative overflow-hidden py-16 md:py-24">
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
            Pensado para simplificar, não para dar mais trabalho.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4 md:mt-16">
          {objections.map((item) => (
            <article
              key={item.q}
              className="card-hover rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold md:text-lg">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.a}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
