export const PORTAL_URL = "https://portal.edufly.com.br" as const;

export const PUBLIC_PLANS = {
  monthly: {
    name: "Mensal",
    valueBrl: 59,
    period: "mês",
    href: PORTAL_URL,
  },
  yearly: {
    name: "Anual",
    valueBrl: 588,
    period: "ano",
    monthlyEquivalentBrl: 49,
    href: PORTAL_URL,
  },
} as const;

export const FOUNDING_PLAN = {
  name: "Fundadores",
  valueBrl: 392,
  period: "ano",
  compareAtBrl: 588,
  maxRedemptions: 10,
  checkoutHref: `${PORTAL_URL}/checkout/fundadores`,
} as const;

export const PLAN_INCLUDES = [
  "Alunos ilimitados",
  "Seu painel — e colegas, se você precisar",
  "Landing page com a sua marca e link próprio",
  "Confirmação de presença pelos responsáveis",
  "Financeiro com cobranças aprovadas antes da fatura",
  "Portais para pais e alunos",
  "Homework online com correção e histórico",
  "Acompanhamento pedagógico e relatórios",
  "Google Calendar integrado às aulas",
  "Lembretes por e-mail e opções de WhatsApp (conforme configuração)",
  "Suporte por e-mail",
] as const;

export function formatBrl(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
