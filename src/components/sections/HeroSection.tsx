import { Sparkles, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  t: any
  lang: "ar" | "en"
  currentSlide: number
  setCurrentSlide?: (slide: number | ((prev: number) => number)) => void
  slides: any[]
  navigateTo: (page: any) => void
}

export function HeroSection({ t, lang, currentSlide, setCurrentSlide, slides, navigateTo }: HeroSectionProps) {
  const handlePrev = () => {
    if (setCurrentSlide) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  const handleNext = () => {
    if (setCurrentSlide) {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  }

  return (
    <section className="relative flex items-center overflow-hidden py-12 px-6 lg:px-12" style={{ minHeight: "calc(100vh - 100px)" }}>
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={`${lang === "ar" ? "text-right" : "text-left"} z-10`}>
            <Badge variant="secondary" className="mb-6 inline-flex px-4 py-1.5 text-xs font-bold bg-primary/10 text-primary border-primary/20 rounded-full uppercase tracking-widest">
              <Sparkles className="h-3 w-3 mx-1" /> {t.hero.badge}
            </Badge>
            <h1 className={`mb-6 font-black leading-[1.1] tracking-tighter ${lang === "en" ? "text-3xl sm:text-5xl xl:text-6xl" : "text-4xl sm:text-6xl xl:text-7xl"}`}>
              <span className="block">{t.hero.title1}</span>
              <span className="text-primary block">{t.hero.title2}</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg text-muted-foreground leading-relaxed font-medium">{t.hero.desc}</p>
            <div className={`flex flex-col gap-4 sm:flex-row sm:justify-start`}>
              <Button size="xl" onClick={() => navigateTo("contact")} className="gap-3 bg-primary text-primary-foreground font-black shadow-xl px-8 h-14 rounded-2xl transition-transform hover:scale-105">
                {t.hero.ctaPrimary} {lang === "ar" ? <ArrowLeft /> : <ArrowRight />}
              </Button>
              <Button size="xl" variant="outline" onClick={() => navigateTo("portfolio")} className="gap-3 px-8 h-14 rounded-2xl font-bold border-primary/30 transition-transform hover:scale-105">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
          <div className="relative group">
            {/* Ambient luxury glow effect behind slider */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent rounded-[3rem] blur-2xl opacity-70 -z-10 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative mx-auto max-w-[600px] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 sm:border-8 border-white/10 bg-black/20" style={{ height: "500px" }}>
              {slides.map((s, idx) => (
                <img
                  key={idx}
                  src={s.img}
                  alt={s.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${
                    idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                />
              ))}

              {/* Bottom gradient overlay to make controls pop */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

              {/* Prev / Next navigation arrows */}
              {setCurrentSlide && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Clickable indicator dots */}
              <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-2.5">
                {slides.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    title={s.title}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setCurrentSlide && setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentSlide
                        ? "w-8 bg-primary shadow-lg shadow-primary/60"
                        : "w-2.5 bg-white/50 hover:bg-white/90 hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
