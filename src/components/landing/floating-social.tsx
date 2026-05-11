import { MessageCircle } from "lucide-react";
import { eduflyWhatsAppUrl } from "@/lib/edufly-contact";

export function FloatingSocial() {
  const wa = eduflyWhatsAppUrl(
    "Olá! Vim pelo site da Edufly e quero falar com a equipe.",
  );

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/90 transition-transform hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
      aria-label="Fale com a Edufly no WhatsApp"
    >
      <MessageCircle className="size-7 text-white" strokeWidth={2} />
    </a>
  );
}
