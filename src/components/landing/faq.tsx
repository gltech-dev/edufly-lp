import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { EDUFLY_FAQ_ITEMS } from "@/lib/faq-data";

export function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl md:mt-16">
          <div className="rounded-lg border border-border bg-card p-1 shadow-sm">
            <Accordion>
              {EDUFLY_FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="px-4 text-base font-medium">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <p className="text-muted-foreground">{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
