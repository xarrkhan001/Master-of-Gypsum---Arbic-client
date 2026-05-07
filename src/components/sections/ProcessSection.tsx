import { ChevronRight } from "lucide-react"

interface ProcessSectionProps {
  t: any
  lang: "ar" | "en"
}

export function ProcessSection({ t, lang }: ProcessSectionProps) {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black mb-4">{t.process.title}</h2>
          <p className="text-muted-foreground text-lg">{t.process.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {t.process.steps.map((step: any, idx: number) => (
            <div key={idx} className="relative group p-8 rounded-[2rem] bg-background shadow-lg hover:shadow-2xl transition-all">
              <div className="mb-6 h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <step.icon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-black mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              {idx < 3 && <ChevronRight className={`absolute top-1/2 -right-4 h-8 w-8 text-primary/20 hidden md:block ${lang === 'ar' ? 'rotate-180 -left-4 right-auto' : ''}`} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
