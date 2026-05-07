import { HelpCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

interface FAQSectionProps {
  t: any
}

export function FAQSection({ t }: FAQSectionProps) {
  return (
    <section className="py-24 px-6 min-h-screen bg-card animate-in fade-in">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-black mb-6">{t.faq.title}</h2>
          <p className="text-muted-foreground text-xl">{t.faq.subtitle}</p>
        </div>
        <div className="space-y-4">
          {t.faq.items.map((it: any, i: number) => (
            <Card key={i} className="rounded-2xl border-none bg-background p-6">
              <div className="flex items-center gap-4 mb-2">
                <HelpCircle className="text-primary" />
                <h4 className="text-xl font-black">{it.q}</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-9">{it.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
