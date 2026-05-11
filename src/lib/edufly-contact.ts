export const EDUFLY_WHATSAPP_WA_DIGITS = "55619920028187";

export const EDUFLY_WHATSAPP_LABEL = "+55 (61) 9 2002-8187";

export const EDUFLY_YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@edufly-edu";

export function eduflyWhatsAppUrl(prefill?: string): string {
  const base = `https://wa.me/${EDUFLY_WHATSAPP_WA_DIGITS}`;
  if (!prefill?.trim()) return base;
  return `${base}?text=${encodeURIComponent(prefill)}`;
}
