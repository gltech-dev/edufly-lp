import { EDUFLY_FAQ_ITEMS } from "@/lib/faq-data";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_URL,
} from "@/lib/site";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

const graph = [
  {
    "@type": "Organization",
    "@id": organizationId,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "contato@edufly.com.br",
        availableLanguage: ["Portuguese", "pt-BR"],
      },
    ],
  },
  {
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_OG_DESCRIPTION,
    inLanguage: "pt-BR",
    publisher: { "@id": organizationId },
  },
  {
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
        description: "Teste grátis por 7 dias, sem cartão",
      },
      {
        "@type": "Offer",
        name: "Mensal",
        price: "59",
        priceCurrency: "BRL",
        description: "Plano mensal após o teste",
      },
      {
        "@type": "Offer",
        name: "Anual",
        price: "588",
        priceCurrency: "BRL",
        description: "Plano anual após o teste",
      },
    ],
    provider: { "@id": organizationId },
  },
  {
    "@type": "FAQPage",
    mainEntity: EDUFLY_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": graph,
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
