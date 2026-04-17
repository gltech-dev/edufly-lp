import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { label: "Recursos", href: "#recursos" },
  { label: "Preços", href: "#precos" },
  { label: "Como funciona", href: "#recursos" },
  { label: "Roadmap", href: "#" },
];

const companyLinks = [
  { label: "Sobre nós", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contato", href: "https://wa.me/5561992545301" },
  { label: "Termos de uso", href: "#" },
  { label: "Política de privacidade", href: "#" },
];

const supportLinks = [
  { label: "Central de ajuda", href: "#" },
  { label: "contato@edufly.com.br", href: "mailto:contato@edufly.com.br" },
  { label: "WhatsApp", href: "https://wa.me/5561992545301" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/1.svg"
                alt="Edufly"
                width={140}
                height={47}
                className="h-35 w-auto object-contain"
              />
            </Link>
            <p className="mt-0 text-sm leading-relaxed text-muted-foreground">
              Professores mudam vidas.
              <br />
              Edufly cuida do resto.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com/_edufly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Produto</h3>
            <ul className="mt-3 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Empresa</h3>
            <ul className="mt-3 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Suporte</h3>
            <ul className="mt-3 space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Edufly. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
