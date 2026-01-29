import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// V4 Style Questions
const faqs = [
    {
        q: "Do you use templates or page builders?",
        a: "No. (Templates are slow). We write custom code using Next.js and React to ensure maximum performance and scalability."
    },
    {
        q: "How long does a typical build take?",
        a: "Standard builds take 2-4 weeks. (Fast to market). LogicGrid sprints are designed for rapid execution."
    },
    {
        q: "Do you handle hosting and maintenance?",
        a: "Yes. (Zero headache). We deploy to edge networks (Vercel) and can manage updates for you."
    },
    {
        q: "Can you integrate with our existing CRM?",
        a: "Absolutely. (Seamless data). We specialize in connecting digital front-ends to back-end operations."
    }
];

export function FAQ() {
    return (
        <section className="py-24 bg-background transition-colors duration-300">
            <div className="container px-4 md:px-6 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-12 text-center">System FAQ</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-4 bg-card shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-violet-500/50 transition-all">
                            <AccordionTrigger className="text-foreground/90 hover:text-violet-600 dark:hover:text-violet-400 hover:no-underline transition-colors text-left font-medium py-4">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-4 font-medium">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
