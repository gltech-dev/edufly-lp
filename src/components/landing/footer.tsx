import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link href="/">
              <Image
                src="/images/logo-horizontal.png"
                alt="Edufly"
                width={360}
                height={140}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Professores mudam vidas.
              <br />
              Edufly cuida do resto.
            </p>
          </div>

          <nav className="flex gap-12 text-sm sm:gap-16">
            <div>
              <h3 className="font-semibold">Produto</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="#recursos" className="text-muted-foreground transition-colors hover:text-foreground">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#precos" className="text-muted-foreground transition-colors hover:text-foreground">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#para-quem" className="text-muted-foreground transition-colors hover:text-foreground">
                    Para quem é
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Empresa</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="mailto:contato@edufly.com.br" className="text-muted-foreground transition-colors hover:text-foreground">
                    contato@edufly.com.br
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/5561992545301"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-green-200 bg-green-50 px-5 py-3 text-sm font-medium text-green-800 transition-colors hover:bg-green-100"
            >
              <MessageCircle className="size-5 text-green-600" />
              <span>
                Fale conosco pelo WhatsApp
                <span className="block text-xs font-normal text-green-600">
                  (61) 99254-5301
                </span>
              </span>
            </a>
            <a
              href="https://instagram.com/_edufly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @_edufly
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Edufly. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
