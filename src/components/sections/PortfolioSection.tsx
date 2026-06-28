import { useState } from "react"
import { Sparkles, ExternalLink } from "lucide-react"

interface PortfolioSectionProps {
  t: any
  lang?: "ar" | "en"
}

export function PortfolioSection({ t, lang = "ar" }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  const [hovered, setHovered] = useState<number | null>(null)
  const isRTL = lang === "ar"
  const p = t.portfolio

  const allLabel = p.all || (lang === "ar" ? "الكل" : "All")
  const filters = ["all", ...p.categories]

  const filtered =
    activeFilter === "all"
      ? p.items
      : p.items.filter((item: any) => item.cat === activeFilter)

  return (
    <div className="overflow-hidden">
      {/* ── Header ── */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className={`mb-12 ${isRTL ? "text-right" : "text-center"}`}>
            <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest ${isRTL ? "" : "mx-auto"}`}>
              <Sparkles className="h-3 w-3" />
              {p.title}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">{p.title}</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{p.subtitle}</p>
          </div>

          {/* ── Filter Tabs ── */}
          <div className={`flex flex-wrap gap-2 mb-10 ${isRTL ? "justify-end" : "justify-center"}`}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {f === "all" ? allLabel : f}
              </button>
            ))}
          </div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item: any, idx: number) => (
              <div
                key={`${item.img}-${idx}`}
                className="group relative overflow-hidden rounded-[1.75rem] bg-muted cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-400 ${hovered === idx ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />

                {/* Category badge — always visible */}
                <div className={`absolute top-4 ${isRTL ? "right-4" : "left-4"}`}>
                  <span className="bg-primary/90 text-primary-foreground text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.cat}
                  </span>
                </div>

                {/* Text — slides up on hover */}
                <div className={`absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400 ${isRTL ? "text-right" : "text-left"}`}>
                  <h3 className="text-white font-black text-lg leading-snug mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                    {item.desc}
                  </p>
                </div>

                {/* Icon button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {!isRTL && (
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                </div>
                {isRTL && (
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Stats Strip ── */}
          <div className="mt-16 grid grid-cols-3 gap-4 p-8 rounded-[2rem] bg-muted/30 border border-border/40">
            {[
              { value: "500+", label: isRTL ? "مشروع مكتمل" : "Projects Done" },
              { value: "10+",  label: isRTL ? "سنوات خبرة"  : "Years Exp."   },
              { value: "100%", label: isRTL ? "رضا العملاء"  : "Client Satisfaction" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black text-primary">{s.value}</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
