"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Recursos", href: "#recursos" },
  { label: "Preços", href: "#precos" },
  { label: "Para quem é", href: "#para-quem" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/1.svg"
            alt="Edufly"
            width={500}
            height={503}
            className="h-25 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" nativeButton={false} render={<Link href="/login" />}>
            Entrar
          </Button>
          <Button
            nativeButton={false}
            className="rounded-lg bg-brand-600 text-white shadow-sm hover:bg-brand-700"
            render={<Link href="/signup" />}
          >
            Começar grátis
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <Button
              variant="outline"
              nativeButton={false}
              className="w-full"
              render={<Link href="/login" />}
            >
              Entrar
            </Button>
            <Button
              nativeButton={false}
              className="w-full rounded-lg bg-brand-600 text-white shadow-sm hover:bg-brand-700"
              render={<Link href="/signup" />}
            >
              Começar grátis
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
