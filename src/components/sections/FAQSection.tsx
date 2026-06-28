import { useState } from "react"
import { HelpCircle, Plus, Minus, MessageCircle } from "lucide-react"

interface FAQSectionProps {
  t: any
  lang?: "ar" | "en"
  navigateTo?: (page: any) => void
}

export function FAQSection({ t, lang = "ar", navigateTo }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const isRTL = lang === "ar"
  const f = t.faq

  return (
    <div className="overflow-hidden">
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          {/* Header */}
          <div className={`mb-14 ${isRTL ? "text-right" : "text-center"}`}>
            <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest ${isRTL ? "" : "mx-auto"}`}>
              <HelpCircle className="h-3 w-3" />
              {f.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">{f.title}</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{f.subtitle}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Accordion */}
            <div className="space-y-3 mb-14">
              {f.items.map((item: any, i: number) => {
                const isOpen = openIdx === i
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-primary/30 shadow-lg shadow-primary/5 bg-background"
                        : "border-border/40 bg-muted/20 hover:border-primary/20 hover:bg-background"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className={`w-full flex items-center gap-4 p-6 transition-colors duration-200 ${isRTL ? "flex-row-reverse text-right" : "text-left"}`}
                    >
                      {/* Number */}
                      <span className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                        isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      }`}>
                        {i + 1}
                      </span>

                      <span className={`flex-1 font-black text-base ${isOpen ? "text-primary" : "text-foreground"}`}>
                        {item.q}
                      </span>

                      <span className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "bg-primary text-primary-foreground rotate-0" : "bg-muted text-muted-foreground"
                      }`}>
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>

                    {/* Answer */}
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60" : "max-h-0"}`}>
                      <div className={`px-6 pb-6 ${isRTL ? "pr-[4.5rem] text-right" : "pl-[4.5rem]"}`}>
                        <p className="text-muted-foreground leading-relaxed text-sm">{item.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Still Have a Question card */}
            <div className={`rounded-[2rem] bg-gradient-to-br from-primary/10 to-amber-500/10 border border-primary/20 p-8 flex flex-col sm:flex-row items-center gap-6 ${isRTL ? "sm:flex-row-reverse text-right" : "text-left"}`}>
              <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageCircle className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="font-black text-xl mb-1">{f.stillQuestion}</h3>
                <p className="text-muted-foreground text-sm">{f.stillQuestionSub}</p>
              </div>
              <button
                onClick={() => navigateTo && navigateTo("contact")}
                className="flex-shrink-0 bg-primary text-primary-foreground font-black px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform text-sm"
              >
                {f.contactBtn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
