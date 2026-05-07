import { Sparkles, Phone, Mail, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface FooterProps {
  t: any
  PHONE_NUMBER: string
  EMAIL: string
  navigateTo: (page: any) => void
}

export function Footer({ t, PHONE_NUMBER, EMAIL, navigateTo }: FooterProps) {
  return (
    <footer className="border-t border-border py-16 px-6 bg-gray-100 mt-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-black tracking-tight uppercase">
                Master of <span className="font-light opacity-60">Gypsum</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.hero.desc.slice(0, 100)}...</p>
          </div>
          <div className="flex flex-col gap-4 font-bold text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-foreground mb-2 text-left rtl:text-right">Quick Links</span>
            {Object.keys(t.nav).map((k) => (
              <button
                key={k}
                onClick={() => navigateTo(k)}
                className="flex justify-start hover:text-primary transition-all text-left rtl:text-right"
              >
                {t.nav[k as keyof typeof t.nav]}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-foreground font-black uppercase tracking-widest text-xs mb-2">Contact Info</span>
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-bold">
              <Phone className="h-4 w-4 text-primary" /> {PHONE_NUMBER}
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-bold">
              <Mail className="h-4 w-4 text-primary" /> {EMAIL}
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-bold">
              <MapPin className="h-4 w-4 text-primary" /> {t.footer.location}
            </div>
          </div>
        </div>
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-center">
          <div>{t.footer.rights}</div>
          <div>Designed with Excellence</div>
        </div>
      </div>
    </footer>
  )
}
