import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edufly.com.br"),
  title: "Edufly - Plataforma completa para professores particulares",
  description:
    "Automatize 100% da sua operação de professor particular. Landing page, confirmação de presença, financeiro, homework online. Teste grátis 7 dias.",
  keywords:
    "gestão escolar, professores particulares, escola de idiomas, landing page professor, confirmação presença, financeiro educação",
  openGraph: {
    title: "Edufly - Da captação ao pagamento, tudo automatizado",
    description:
      "A única plataforma com confirmação de presença, aprovação de cobranças e portais para pais e alunos.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
