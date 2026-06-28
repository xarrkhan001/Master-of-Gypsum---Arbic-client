import {
  ShieldCheck,
  Target,
  Eye,
  Heart,
  CheckCircle2,
  Star,
  Trophy,
  Users,
  Clock,
  Award,
  Gem,
  Sparkles,
  TrendingUp,
  MapPin,
} from "lucide-react"

interface AboutSectionProps {
  t: any
  lang: "ar" | "en"
}

const valueIcons = [ShieldCheck, Gem, TrendingUp, Heart]

export function AboutSection({ t, lang }: AboutSectionProps) {
  const isRTL = lang === "ar"
  const a = t.about

  return (
    <div className="overflow-hidden">
      {/* ── Hero Banner ── */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <img
            src="/slide1.png"
            alt="About hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          {/* Decorative golden orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 text-center px-6 py-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="h-3 w-3" />
            {isRTL ? "من نحن" : "About Us"}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
            {a.heroQuote}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-medium">
            {a.heroSub}
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock, value: "10+", label: isRTL ? "سنوات خبرة" : "Years Experience" },
              { icon: Trophy, value: "500+", label: isRTL ? "مشروع مكتمل" : "Projects Done" },
              { icon: Users, value: "450+", label: isRTL ? "عميل سعيد" : "Happy Clients" },
              { icon: Award, value: "100%", label: isRTL ? "ضمان الجودة" : "Quality Assurance" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <s.icon className="h-6 w-6 text-primary-foreground/70 mb-1" />
                <span className="text-3xl font-black text-primary-foreground tracking-tighter">{s.value}</span>
                <span className="text-xs font-bold text-primary-foreground/70 uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
            {/* Image side */}
            <div className={`relative ${isRTL ? "lg:order-2" : "lg:order-1"}`}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-primary/10">
                  <img src="/slide2.png" className="w-full h-full object-cover" alt="Our Story" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-2xl text-center min-w-[110px]">
                  <div className="text-3xl font-black leading-none">10+</div>
                  <div className="text-xs font-bold mt-1 opacity-80">{isRTL ? "سنوات" : "Years"}</div>
                </div>
                {/* Second floating badge */}
                <div className="absolute -top-6 -left-6 bg-background border border-border rounded-2xl p-4 shadow-xl flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Star className="h-5 w-5 fill-primary" />
                  </div>
                  <div>
                    <div className="font-black text-sm text-foreground">5.0</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{isRTL ? "تقييم العملاء" : "Client Rating"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className={`${isRTL ? "lg:order-1 text-right" : "lg:order-2 text-left"}`}>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles className="h-3 w-3" />
                {a.storyTitle}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                {isRTL ? "من نحن؟" : "Who Are We?"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-5">{a.storyP1}</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{a.storyP2}</p>

              {/* Location */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground bg-muted px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-primary" />
                {isRTL ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className={`group relative p-10 rounded-[2rem] bg-background border border-border/60 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${isRTL ? "text-right" : "text-left"}`}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-all duration-500" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black mb-4">{a.missionTitle}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{a.missionText}</p>
              </div>
            </div>

            {/* Vision */}
            <div className={`group relative p-10 rounded-[2rem] bg-background border border-border/60 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${isRTL ? "text-right" : "text-left"}`}>
              <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 -translate-x-1/2 group-hover:bg-primary/10 transition-all duration-500" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black mb-4">{a.visionTitle}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{a.visionText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className={`mb-14 ${isRTL ? "text-right" : "text-center"}`}>
            <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest ${isRTL ? "" : "mx-auto"}`}>
              <Heart className="h-3 w-3" />
              {a.valuesTitle}
            </div>
            <h2 className="text-4xl font-black">{isRTL ? "ما الذي يميزنا؟" : "What Sets Us Apart?"}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.values.map((v: any, i: number) => {
              const Icon = valueIcons[i % valueIcons.length]
              return (
                <div
                  key={i}
                  className={`group p-8 rounded-[1.75rem] bg-muted/40 border border-border/40 hover:bg-primary hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${isRTL ? "text-right" : "text-left"}`}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-white/20 group-hover:text-white transition-all duration-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-black mb-2 group-hover:text-white transition-colors duration-300">{v.title}</h4>
                  <p className="text-sm text-muted-foreground group-hover:text-white/80 leading-relaxed transition-colors duration-300">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Milestones / Timeline ── */}
      <section className="py-24 px-6 bg-muted/20 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className={`mb-14 ${isRTL ? "text-right" : "text-center"}`}>
            <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest ${isRTL ? "" : "mx-auto"}`}>
              <Clock className="h-3 w-3" />
              {a.milestonesTitle}
            </div>
            <h2 className="text-4xl font-black">{isRTL ? "رحلتنا عبر السنين" : "Our Journey Over the Years"}</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central line (desktop) */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />

            <div className="space-y-8 lg:space-y-0">
              {a.milestones.map((m: any, i: number) => {
                const isEven = i % 2 === 0
                return (
                  <div key={i} className={`relative flex flex-col lg:flex-row items-center lg:gap-0 gap-4 lg:mb-12`}>
                    {/* Left column (desktop) */}
                    <div className={`hidden lg:flex w-1/2 ${isEven ? "justify-end pr-12" : "order-3 justify-start pl-12"}`}>
                      {(isEven) && (
                        <MilestoneCard m={m} isRTL={isRTL} />
                      )}
                      {(!isEven) && <div />}
                    </div>

                    {/* Center dot */}
                    <div className="hidden lg:flex relative z-10 flex-shrink-0 items-center justify-center">
                      <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-sm shadow-lg shadow-primary/30 border-4 border-background">
                        {m.year.slice(-2)}
                      </div>
                    </div>

                    {/* Right column (desktop) */}
                    <div className={`hidden lg:flex w-1/2 ${isEven ? "order-3 justify-start pl-12" : "justify-end pr-12"}`}>
                      {(!isEven) && (
                        <MilestoneCard m={m} isRTL={isRTL} />
                      )}
                      {(isEven) && <div />}
                    </div>

                    {/* Mobile layout */}
                    <div className={`lg:hidden flex items-start gap-4 w-full ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-xs shadow-lg">
                        {m.year}
                      </div>
                      <div className="flex-1">
                        <div className="bg-background border border-border/60 rounded-2xl p-5 shadow-sm">
                          <div className="text-xs font-bold text-primary mb-1">{m.year}</div>
                          <div className="font-black text-lg mb-1">{m.title}</div>
                          <div className="text-sm text-muted-foreground">{m.desc}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us (Features Grid) ── */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className={`mb-14 ${isRTL ? "text-right" : "text-center"}`}>
            <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest ${isRTL ? "" : "mx-auto"}`}>
              <CheckCircle2 className="h-3 w-3" />
              {a.title}
            </div>
            <h2 className="text-4xl font-black mb-4">{a.subtitle}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.features.map((f: any, i: number) => (
              <div
                key={i}
                className={`group flex items-start gap-5 p-7 rounded-[1.5rem] bg-muted/30 border border-border/40 hover:bg-background hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-400 ${isRTL ? "flex-row-reverse text-right" : ""}`}
              >
                <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-black mb-1.5">{f.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/90 to-amber-700">
        <div className={`container mx-auto text-center`}>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {isRTL ? "هل أنت مستعد لتحويل مساحتك؟" : "Ready to Transform Your Space?"}
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
            {isRTL
              ? "تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر."
              : "Contact us today for a free consultation and project quote."}
          </p>
          <a
            href="tel:+9660509460890"
            className="inline-flex items-center gap-3 bg-white text-primary font-black px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 text-base"
          >
            <span>📞</span>
            {isRTL ? "اتصل بنا الآن" : "Call Us Now"}
          </a>
        </div>
      </section>
    </div>
  )
}

// ── Small helper component for desktop timeline cards ──
function MilestoneCard({ m, isRTL }: { m: any; isRTL: boolean }) {
  return (
    <div className={`bg-background border border-border/60 rounded-[1.5rem] p-6 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-400 max-w-xs w-full ${isRTL ? "text-right" : "text-left"}`}>
      <div className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">{m.year}</div>
      <div className="font-black text-xl mb-2">{m.title}</div>
      <div className="text-sm text-muted-foreground leading-relaxed">{m.desc}</div>
    </div>
  )
}
