import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | Edufly",
  description: "Política de Privacidade da Edufly.",
  alternates: {
    canonical: `${SITE_URL}/politica-de-privacidade`,
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: 07 de maio de 2026
        </p>

        <section className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
          <p>
            A Edufly valoriza a sua privacidade e se compromete com a proteção dos dados pessoais tratados em nossa
            plataforma. Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos as
            informações de usuários, responsáveis e alunos.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">1. Dados coletados</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>Podemos coletar os seguintes dados pessoais, conforme o uso da plataforma:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Dados de cadastro, como nome, e-mail, telefone e informações profissionais.</li>
              <li>Dados de acesso, como endereço IP, data e hora de uso e identificadores de dispositivo.</li>
              <li>Dados operacionais inseridos por escolas e professores, incluindo informações de alunos e responsáveis.</li>
              <li>Dados financeiros necessários para emissão e controle de cobranças.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">2. Finalidades do tratamento</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>Utilizamos os dados para:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Permitir o funcionamento da plataforma e execução dos serviços contratados.</li>
              <li>Gerenciar cadastros, turmas, agenda, presença, tarefas e financeiro.</li>
              <li>Enviar comunicações operacionais e de suporte relacionadas ao uso da plataforma.</li>
              <li>Prevenir fraudes, incidentes de segurança e usos indevidos.</li>
              <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">3. Compartilhamento de dados</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Poderemos compartilhar dados com fornecedores de tecnologia, meios de pagamento, ferramentas de comunicação
            e autoridades públicas quando necessário para prestação do serviço, cumprimento de obrigação legal ou
            exercício regular de direitos.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">4. Base legal</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            O tratamento de dados pessoais pode ocorrer com base em execução de contrato, cumprimento de obrigação
            legal, legítimo interesse, exercício regular de direitos e, quando aplicável, consentimento do titular.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">5. Retenção e segurança</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados,
            perda, alteração e destruição. Os dados serão armazenados pelo período necessário ao cumprimento das
            finalidades descritas nesta política e das obrigações legais.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">6. Direitos do titular</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>Nos termos da legislação aplicável, você pode solicitar:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Confirmação da existência de tratamento e acesso aos dados.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Portabilidade, quando aplicável.</li>
              <li>Informações sobre compartilhamento de dados.</li>
              <li>Revogação do consentimento, quando essa for a base legal.</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">7. Cookies e tecnologias similares</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Podemos utilizar cookies e tecnologias similares para melhorar a experiência de navegação, manter sessões
            ativas, analisar uso da plataforma e aprimorar funcionalidades.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">8. Alterações desta política</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Esta Política de Privacidade poderá ser atualizada periodicamente. A versão vigente será sempre publicada
            nesta página com indicação da data de última atualização.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">9. Contato</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato pelo e-mail
            contato@edufly.com.br.
          </p>
        </section>
      </div>
    </main>
  );
}
