import { Sparkles, Phone, Mail, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface FooterProps {
  t: any
  PHONE_NUMBER: string
  EMAIL: string
  navigateTo: (page: any) => void
  lang?: "ar" | "en"
}

export function Footer({ t, PHONE_NUMBER, EMAIL, navigateTo, lang = "ar" }: FooterProps) {
  const isRTL = lang === "ar"
  const f = t.footer

  return (
    <footer className="border-t border-border py-16 px-6 bg-muted/40 mt-24">
      <div className="container mx-auto">
        <div className={`grid md:grid-cols-3 gap-12 mb-16 ${isRTL ? "text-right" : "text-left"}`}>
          {/* Logo & Description */}
          <div className={isRTL ? "order-1 md:order-3" : "order-1"}>
            <div className={`flex items-center gap-2 mb-6 cursor-pointer ${isRTL ? "justify-start flex-row-reverse" : "justify-start"}`} onClick={() => navigateTo("home")}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-yellow-500 shadow-lg">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl tracking-tight text-foreground logo-font uppercase">
                {isRTL ? (
                  <span className="font-black text-primary text-2xl">معلم الجبس والديكور</span>
                ) : (
                  <>
                    <span className="font-black text-primary">Master of</span>{" "}
                    <span className="font-light opacity-80">Gypsum</span>
                  </>
                )}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.hero.desc}
            </p>
          </div>

          {/* Quick Links */}
          <div className={`flex flex-col gap-4 font-bold text-xs uppercase tracking-widest text-muted-foreground ${isRTL ? "order-2 text-right items-end md:items-center" : "order-2 text-left"}`}>
            <span className="text-foreground mb-2 text-sm font-black">{f.quickLinks}</span>
            <div className="flex flex-col gap-3">
              {Object.keys(t.nav).map((k) => (
                <button
                  key={k}
                  onClick={() => navigateTo(k)}
                  className={`hover:text-primary transition-all text-xs font-bold ${isRTL ? "text-right" : "text-left"}`}
                >
                  {t.nav[k as keyof typeof t.nav]}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className={`flex flex-col gap-4 ${isRTL ? "order-3 md:order-1 text-right items-end" : "order-3 text-left"}`}>
            <span className="text-foreground font-black uppercase tracking-widest text-sm mb-2">{f.contactInfo}</span>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className={`flex items-center gap-3 text-sm text-muted-foreground font-bold hover:text-primary transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="ltr-dir">{PHONE_NUMBER}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className={`flex items-center gap-3 text-sm text-muted-foreground font-bold hover:text-primary transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{EMAIL}</span>
            </a>
            <div className={`flex items-center gap-3 text-sm text-muted-foreground font-bold ${isRTL ? "flex-row-reverse" : ""}`}>
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{f.location}</span>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />
        
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-center ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <div>{f.rights}</div>
          <div>{f.by}</div>
        </div>
      </div>
    </footer>
  )
}
