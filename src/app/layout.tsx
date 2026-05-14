import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingSocial } from "@/components/landing/floating-social";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_URL,
} from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} - Plataforma completa para professores particulares`,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  openGraph: {
    title: `${SITE_NAME} - Da captação ao pagamento, tudo automatizado`,
    description: SITE_OG_DESCRIPTION,
    images: ["/og-image.png"],
    url: SITE_URL,
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Plataforma para professores particulares`,
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
