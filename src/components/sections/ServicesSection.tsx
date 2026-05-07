import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ServicesSectionProps {
  t: any
  navigateTo: (page: any) => void
}

export function ServicesSection({ t, navigateTo }: ServicesSectionProps) {
  return (
    <section className="py-24 px-6 bg-secondary/30 min-h-screen animate-in fade-in">
      <div className="container mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-black mb-6">{t.services.title}</h2>
          <p className="text-muted-foreground text-xl">{t.services.subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((it: any) => (
            <Card key={it.id} className="rounded-[2.5rem] border-none shadow-xl overflow-hidden bg-background">
              <div className="aspect-video relative">
                <img src={it.img} className="w-full h-full object-cover" alt={it.title} />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-black">{it.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {it.features.map((f: any, i: number) => (
                    <li key={i} className="flex items-center gap-2 font-bold text-muted-foreground text-sm">
                      <Check className="text-primary h-4 w-4" /> {f}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => navigateTo("contact")} className="w-full rounded-xl">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
