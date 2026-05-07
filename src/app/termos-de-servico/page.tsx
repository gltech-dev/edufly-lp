import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Serviço | Edufly",
  description: "Termos de Serviço da Edufly.",
};

export default function TermosDeServicoPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Termos de Serviço</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última atualização: 07 de maio de 2026</p>

        <section className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
          <p>
            Estes Termos de Serviço regulam o acesso e uso da plataforma Edufly. Ao utilizar a plataforma, você declara
            que leu, compreendeu e concorda com estes termos.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">1. Objeto</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            A Edufly disponibiliza ferramentas para gestão de operações educacionais, incluindo cadastro de alunos e
            responsáveis, agenda, confirmação de presença, tarefas, financeiro e comunicação.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">2. Cadastro e acesso</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            <ul className="list-disc space-y-2 pl-5">
              <li>O usuário deve fornecer informações verdadeiras, completas e atualizadas.</li>
              <li>As credenciais de acesso são pessoais e intransferíveis.</li>
              <li>O usuário é responsável pelas atividades realizadas em sua conta.</li>
              <li>A Edufly poderá suspender acessos em caso de uso indevido ou violação destes termos.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">3. Uso permitido</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>É vedado utilizar a plataforma para:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Práticas ilícitas, fraudulentas ou que violem direitos de terceiros.</li>
              <li>Distribuição de conteúdo malicioso, spam ou tentativa de acesso não autorizado.</li>
              <li>Coleta automatizada de dados sem autorização.</li>
              <li>Qualquer ação que comprometa disponibilidade, integridade ou segurança dos serviços.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">4. Planos, cobrança e cancelamento</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            <ul className="list-disc space-y-2 pl-5">
              <li>Condições comerciais, valores e limites de cada plano são informados no momento da contratação.</li>
              <li>Pagamentos recorrentes seguem a periodicidade contratada.</li>
              <li>Em caso de inadimplência, a Edufly poderá limitar funcionalidades até a regularização.</li>
              <li>O cancelamento pode ser solicitado a qualquer momento, observadas regras vigentes no plano ativo.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">5. Propriedade intelectual</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Todo o conteúdo, código, marca, layout e funcionalidades da Edufly são protegidos por leis de propriedade
            intelectual. Não é permitida reprodução, modificação, engenharia reversa ou exploração comercial sem
            autorização prévia e expressa.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">6. Privacidade e dados pessoais</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            O tratamento de dados pessoais segue a Política de Privacidade da Edufly e a legislação aplicável,
            incluindo a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">7. Limitação de responsabilidade</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            A Edufly emprega esforços razoáveis para manter a plataforma disponível e segura, mas não garante ausência
            de interrupções, erros ou indisponibilidades decorrentes de fatores externos, terceiros ou força maior.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">8. Atualizações dos termos</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Estes Termos de Serviço podem ser atualizados para refletir melhorias da plataforma, mudanças regulatórias
            ou operacionais. A versão vigente ficará disponível nesta página.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">9. Lei aplicável e foro</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca do domicílio do usuário,
            salvo disposição legal específica em contrário.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">10. Contato</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Em caso de dúvidas sobre estes Termos de Serviço, entre em contato pelo e-mail contato@edufly.com.br.
          </p>
        </section>
      </div>
    </main>
  );
}
