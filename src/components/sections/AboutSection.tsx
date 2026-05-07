import { ShieldCheck } from "lucide-react"

interface AboutSectionProps {
  t: any
  lang: "ar" | "en"
}

export function AboutSection({ t, lang }: AboutSectionProps) {
  return (
    <section className="py-24 px-6 animate-in fade-in">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
          <img src="/slide1.png" className="w-full h-full object-cover" alt="About" />
        </div>
        <div className={lang === "ar" ? "text-right" : "text-left"}>
          <h2 className="text-4xl font-black mb-8 sm:text-6xl">{t.about.title}</h2>
          <p className="text-xl text-muted-foreground mb-12">{t.about.subtitle}</p>
          <div className="space-y-8">
            {t.about.features.map((f: any, i: number) => (
              <div key={i} className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <ShieldCheck />
                </div>
                <div>
                  <h4 className="text-xl font-black">{f.title}</h4>
                  <p className="text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
