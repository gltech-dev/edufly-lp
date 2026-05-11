import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingSocial } from "@/components/landing/floating-social";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edufly.com.br"),
  title: "Edufly - Plataforma completa para professores particulares",
  description:
    "Da captação ao pagamento: landing com a sua marca, confirmação de presença pelos responsáveis, Google Calendar, financeiro com cobranças aprovadas, portais para pais e alunos, homework e relatórios. Teste grátis por 7 dias.",
  keywords:
    "gestão escolar, professores particulares, escola de idiomas, landing page professor, confirmação presença, financeiro educação",
  openGraph: {
    title: "Edufly - Da captação ao pagamento, tudo automatizado",
    description:
      "Landing profissional, confirmação de presença, financeiro com aprovação de cobranças, Google Calendar, portais para pais e alunos, homework e acompanhamento pedagógico — na mesma base, por escola.",
    images: ["/og-image.png"],
    url: "https://edufly.com.br",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edufly - Plataforma para professores particulares",
    description: "Automatize sua operação em 10 minutos. Teste grátis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingSocial />
      </body>
    </html>
  );
}
