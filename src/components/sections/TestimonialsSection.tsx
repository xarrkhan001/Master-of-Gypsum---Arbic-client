import { Star, Quote } from "lucide-react"

interface TestimonialsSectionProps {
  t: any
  lang: "ar" | "en"
}

export function TestimonialsSection({ t, lang }: TestimonialsSectionProps) {
  const isRTL = lang === "ar"
  const r = t.reviews

  return (
    <div className="overflow-hidden">
      {/* ── Header ── */}
      <section className="py-20 px-6 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className={`flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-16 ${isRTL ? "lg:flex-row-reverse" : ""}`}>
            {/* Title */}
            <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
              <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest`}>
                <Star className="h-3 w-3 fill-primary" />
                {r.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">{r.title}</h1>
              <p className="text-muted-foreground text-lg max-w-md">{r.subtitle}</p>
            </div>

            {/* Overall Rating Panel */}
            <div className="flex-shrink-0 bg-background border border-border/50 rounded-[2rem] p-8 shadow-xl text-center min-w-[200px]">
              <div className="text-6xl font-black text-primary mb-2">{r.overallRating}</div>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm font-bold text-muted-foreground">{r.totalReviews}</div>
              <div className="mt-3 text-xs text-muted-foreground/70 font-medium">
                Google · WhatsApp
              </div>
            </div>
          </div>

          {/* ── Reviews Grid ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {r.items.map((rev: any, i: number) => (
              <div
                key={i}
                className={`group relative bg-background border border-border/40 rounded-[1.75rem] p-7 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-400 ${isRTL ? "text-right" : "text-left"}`}
              >
                {/* Decorative quote */}
                <div className={`absolute top-5 ${isRTL ? "left-5" : "right-5"} opacity-5 group-hover:opacity-10 transition-opacity`}>
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Stars */}
                <div className={`flex gap-1 mb-4 ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                  {[...Array(rev.rating)].map((_, si) => (
                    <Star key={si} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/85 leading-relaxed mb-6 text-sm font-medium relative z-10">
                  "{rev.text}"
                </p>

                {/* Project badge */}
                <div className={`mb-5`}>
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {rev.project}
                  </span>
                </div>

                {/* Reviewer */}
                <div className={`flex items-center gap-3 border-t border-border/40 pt-5 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center text-white font-black text-base flex-shrink-0 shadow-md">
                    {rev.name[0]}
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="font-black text-sm">{rev.name}</div>
                    <div className="text-xs text-muted-foreground font-semibold">{rev.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
