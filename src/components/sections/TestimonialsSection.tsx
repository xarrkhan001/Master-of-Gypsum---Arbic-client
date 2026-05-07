import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface TestimonialsSectionProps {
  t: any
  lang: "ar" | "en"
}

export function TestimonialsSection({ t, lang }: TestimonialsSectionProps) {
  return (
    <section className="py-24 bg-gray-100 relative">
      <div className="container mx-auto px-6">
        <div className={`mb-16 ${lang === 'ar' ? 'text-right' : 'text-left'} flex flex-col md:flex-row md:items-end justify-between gap-6`}>
          <div>
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
              {lang === 'ar' ? 'آراء العملاء' : 'Customer Feedback'}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{t.reviews.title}</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">{t.reviews.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.reviews.items.map((r: any, i: number) => (
            <Card key={i} className="p-8 rounded-[2.5rem] border-none shadow-lg bg-background hover:shadow-2xl transition-all duration-500 group">
              <div className="flex gap-1 mb-6">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-lg font-medium mb-8 leading-relaxed italic text-foreground/90">"{r.text}"</p>
              <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center text-white font-black">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-black text-base">{r.name}</div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest">{r.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
