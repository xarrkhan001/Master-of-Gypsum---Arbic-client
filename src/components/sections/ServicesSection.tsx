import { useState } from "react"
import {
  Check,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Star,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Layers,
  Zap,
  Users,
  BadgeCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServicesSectionProps {
  t: any
  navigateTo: (page: any) => void
  lang?: "ar" | "en"
}

const whyIcons = [Layers, Users, ShieldCheck, Zap]

export function ServicesSection({ t, navigateTo, lang = "ar" }: ServicesSectionProps) {
  const [activeService, setActiveService] = useState(0)
  const isRTL = lang === "ar"
  const s = t.services
  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight
  const active = s.items[activeService]

  return (
    <div className="overflow-hidden">
      {/* ── Hero Banner ── */}
      <section className="relative min-h-[380px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/slide1.png" alt="Services hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        </div>
        <div className="relative z-10 text-center px-6 py-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="h-3 w-3" />
            {s.heroBadge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
            {s.heroTitle}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-medium">{s.heroSub}</p>
        </div>
      </section>

      {/* ── Service Tabs + Detail ── */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className={`mb-14 ${isRTL ? "text-right" : "text-center"}`}>
            <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest ${isRTL ? "" : "mx-auto"}`}>
              <Star className="h-3 w-3 fill-primary" />
              {s.title}
            </div>
            <h2 className="text-4xl font-black">{s.subtitle}</h2>
          </div>

          {/* Tab Buttons */}
          <div className={`flex flex-wrap gap-3 mb-12 ${isRTL ? "justify-end" : "justify-center"}`}>
            {s.items.map((item: any, i: number) => (
              <button
                key={item.id}
                onClick={() => setActiveService(i)}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  activeService === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          <div className={`grid lg:grid-cols-2 gap-12 items-start`}>
            {/* Image */}
            <div className={`relative ${isRTL ? "lg:order-2" : "lg:order-1"}`}>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-primary/10">
                <img
                  key={active.id}
                  src={active.img}
                  alt={active.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Badge on image */}
                <div className={`absolute top-6 ${isRTL ? "right-6" : "left-6"}`}>
                  <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    {active.badge}
                  </span>
                </div>
                {/* Duration & Warranty chips */}
                <div className={`absolute bottom-6 ${isRTL ? "right-6" : "left-6"} flex gap-2 flex-wrap`}>
                  <span className="glass text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Clock className="h-3 w-3 text-primary" />
                    {active.duration}
                  </span>
                  <span className="glass text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <ShieldCheck className="h-3 w-3 text-primary" />
                    {active.warranty}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`${isRTL ? "lg:order-1 text-right" : "lg:order-2 text-left"}`}>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{active.titleSub}</p>
              <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">{active.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-3">{active.desc}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{active.longDesc}</p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-black text-sm uppercase tracking-widest text-foreground mb-4">
                  {isRTL ? "ما يشمله هذا العمل:" : "What's Included:"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {active.features.map((f: string, i: number) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2.5 text-sm font-semibold text-foreground ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className={`flex gap-3 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
                <Button
                  onClick={() => navigateTo("contact")}
                  className="gap-2 bg-primary text-primary-foreground font-black px-7 h-12 rounded-2xl shadow-lg shadow-primary/25 hover:scale-105 transition-transform"
                >
                  {s.orderBtn}
                  <ArrowIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigateTo("contact")}
                  className="gap-2 px-7 h-12 rounded-2xl font-bold border-primary/30 hover:border-primary hover:text-primary"
                >
                  {isRTL ? "استشارة مجانية" : "Free Consultation"}
                </Button>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mt-16 p-10 rounded-[2rem] bg-muted/30 border border-border/40">
            <h4 className={`font-black text-xl mb-8 ${isRTL ? "text-right" : "text-center"}`}>
              {isRTL ? "خطوات التنفيذ:" : "Execution Steps:"}
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              {active.process.map((step: string, i: number) => (
                <div key={i} className={`flex-1 flex items-start ${isRTL ? "flex-row-reverse sm:flex-col-reverse text-right" : "flex-row sm:flex-col"} gap-3 sm:gap-2 group`}>
                  <div className="flex items-center gap-0 sm:mb-3 w-full">
                    <div className={`flex-shrink-0 h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-sm shadow-md`}>
                      {i + 1}
                    </div>
                    {i < active.process.length - 1 && (
                      <div className={`hidden sm:block flex-1 h-0.5 bg-gradient-to-r from-primary/50 to-primary/10 ${isRTL ? "bg-gradient-to-l" : ""}`} />
                    )}
                  </div>
                  <p className={`text-xs font-bold text-muted-foreground leading-relaxed sm:pr-4 ${isRTL ? "sm:pr-0 sm:pl-4" : ""}`}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── All Services Cards ── */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className={`mb-12 ${isRTL ? "text-right" : "text-center"}`}>
            <h2 className="text-3xl font-black">{isRTL ? "جميع خدماتنا" : "All Our Services"}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {s.items.map((item: any, i: number) => (
              <div
                key={item.id}
                onClick={() => { setActiveService(i); window.scrollTo({ top: 0, behavior: "smooth" }) }}
                className={`group cursor-pointer rounded-[2rem] bg-background border overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${activeService === i ? "border-primary shadow-xl shadow-primary/10" : "border-border/40"}`}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className={`absolute top-4 ${isRTL ? "right-4" : "left-4"} bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full`}>
                    {item.badge}
                  </span>
                  {activeService === i && (
                    <div className={`absolute bottom-4 ${isRTL ? "left-4" : "right-4"} bg-primary rounded-full p-1`}>
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <div className={`p-6 ${isRTL ? "text-right" : "text-left"}`}>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">{item.titleSub}</p>
                  <h3 className="text-xl font-black mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                  <ul className={`space-y-1.5 mb-5`}>
                    {item.features.slice(0, 3).map((f: string, fi: number) => (
                      <li key={fi} className={`flex items-center gap-2 text-xs font-semibold text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                        <Check className="h-3 w-3 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className={`flex items-center gap-2 text-xs text-muted-foreground ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                    <Clock className="h-3 w-3 text-primary" />
                    <span>{item.duration}</span>
                    <span className="text-border">·</span>
                    <ShieldCheck className="h-3 w-3 text-primary" />
                    <span>{item.warranty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="py-24 px-6 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className={`mb-14 ${isRTL ? "text-right" : "text-center"}`}>
            <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest ${isRTL ? "" : "mx-auto"}`}>
              <BadgeCheck className="h-3 w-3" />
              {s.packagesTitle}
            </div>
            <h2 className="text-4xl font-black mb-3">{s.packagesTitle}</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{s.packagesSub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {s.packages.map((pkg: any, i: number) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-[2rem] border p-8 transition-all duration-500 ${
                  pkg.highlight
                    ? "bg-primary border-primary shadow-2xl shadow-primary/20 scale-105 text-primary-foreground"
                    : "bg-background border-border/50 hover:shadow-xl hover:border-primary/30"
                } ${isRTL ? "text-right" : "text-left"}`}
              >
                {pkg.highlight && (
                  <div className={`absolute -top-4 ${isRTL ? "right-8" : "left-8"}`}>
                    <span className="bg-background text-primary text-xs font-black px-4 py-1.5 rounded-full shadow-lg border border-primary/20 uppercase tracking-widest">
                      ⭐ {pkg.badge}
                    </span>
                  </div>
                )}
                {!pkg.highlight && (
                  <span className={`inline-block text-xs font-bold text-primary uppercase tracking-widest mb-3 bg-primary/10 px-3 py-1 rounded-full ${isRTL ? "self-end" : "self-start"}`}>
                    {pkg.badge}
                  </span>
                )}
                <h3 className={`text-2xl font-black mb-2 ${pkg.highlight ? "text-primary-foreground" : ""}`}>{pkg.name}</h3>
                <p className={`text-2xl font-black mb-6 ${pkg.highlight ? "text-primary-foreground/90" : "text-primary"}`}>{pkg.price}</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f: string, fi: number) => (
                    <li key={fi} className={`flex items-center gap-3 text-sm font-semibold ${pkg.highlight ? "text-primary-foreground/90" : "text-muted-foreground"} ${isRTL ? "flex-row-reverse" : ""}`}>
                      <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${pkg.highlight ? "text-primary-foreground" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => navigateTo("contact")}
                  className={`w-full rounded-xl h-12 font-black ${
                    pkg.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {isRTL ? "اختر هذه الباقة" : "Choose This Package"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Our Services ── */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className={`mb-12 ${isRTL ? "text-right" : "text-center"}`}>
            <h2 className="text-3xl font-black">{s.whyTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {s.whyItems.map((item: any, i: number) => {
              const Icon = whyIcons[i % whyIcons.length]
              return (
                <div key={i} className={`group p-7 rounded-[1.75rem] bg-background border border-border/40 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 ${isRTL ? "text-right" : "text-left"}`}>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-black text-base mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/90 to-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{s.ctaTitle}</h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">{s.ctaSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigateTo("contact")}
              className="inline-flex items-center gap-3 bg-white text-primary font-black px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 text-base"
            >
              <Sparkles className="h-5 w-5" />
              {s.ctaBtn}
            </button>
            <a
              href="tel:+9660509460890"
              className="inline-flex items-center gap-3 bg-white/15 border border-white/30 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/25 transition-colors duration-300 text-base"
            >
              📞 {isRTL ? "اتصل بنا الآن" : "Call Us Now"}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
