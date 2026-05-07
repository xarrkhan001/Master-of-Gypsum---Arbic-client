import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  t: any
  lang: "ar" | "en"
  currentSlide: number
  slides: any[]
  navigateTo: (page: any) => void
}

export function HeroSection({ t, lang, currentSlide, slides, navigateTo }: HeroSectionProps) {
  return (
    <section className="relative flex items-center overflow-hidden py-12 px-6 lg:px-12" style={{ minHeight: "calc(100vh - 100px)" }}>
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={`${lang === "ar" ? "text-right" : "text-left"} z-10`}>
            <Badge variant="secondary" className="mb-6 inline-flex px-4 py-1.5 text-xs font-bold bg-primary/10 text-primary border-primary/20 rounded-full uppercase tracking-widest">
              <Sparkles className="h-3 w-3 mx-1" /> {t.hero.badge}
            </Badge>
            <h1 className={`mb-6 font-black leading-[1.1] tracking-tighter ${lang === "en" ? "text-3xl sm:text-5xl xl:text-6xl" : "text-4xl sm:text-6xl xl:text-7xl"}`}>
              <span className="block whitespace-nowrap">{t.hero.title1}</span>
              <span className="text-primary block whitespace-nowrap">{t.hero.title2}</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg text-muted-foreground leading-relaxed font-medium">{t.hero.desc}</p>
            <div className={`flex flex-col gap-4 sm:flex-row sm:justify-start`}>
              <Button size="xl" onClick={() => navigateTo("contact")} className="gap-3 bg-primary text-primary-foreground font-black shadow-xl px-8 h-14 rounded-2xl">
                {t.hero.ctaPrimary} {lang === "ar" ? <ArrowLeft /> : <ArrowRight />}
              </Button>
              <Button size="xl" variant="outline" onClick={() => navigateTo("portfolio")} className="gap-3 px-8 h-14 rounded-2xl font-bold border-primary/30">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-[600px] overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white/5" style={{ height: "500px" }}>
              {slides.map((s, idx) => (
                <img key={idx} src={s.img} alt={s.title} className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`} />
              ))}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, i) => <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/40"}`} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
