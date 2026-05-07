import { MessageCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface ContactSectionProps {
  t: any
  PHONE_NUMBER: string
  EMAIL: string
}

export function ContactSection({ t, PHONE_NUMBER, EMAIL }: ContactSectionProps) {
  return (
    <section className="py-24 px-6 min-h-screen animate-in fade-in">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-black mb-8 sm:text-7xl">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground mb-12">{t.contact.subtitle}</p>
          <div className="space-y-4">
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              className="p-6 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/20 flex gap-4"
            >
              <MessageCircle className="text-emerald-500 h-8 w-8" />
              <div>
                <div className="font-black">WhatsApp</div>
                <div>{PHONE_NUMBER}</div>
              </div>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="p-6 rounded-[2rem] bg-primary/5 border border-primary/20 flex gap-4"
            >
              <Phone className="text-primary h-8 w-8" />
              <div>
                <div className="font-black">Phone</div>
                <div>{PHONE_NUMBER}</div>
              </div>
            </a>
            <div className="p-6 rounded-[2rem] bg-secondary/20 border border-border/50 flex gap-4">
              <Mail className="text-primary h-8 w-8" />
              <div>
                <div className="font-black">Email</div>
                <div>{EMAIL}</div>
              </div>
            </div>
          </div>
        </div>
        <Card className="p-8 rounded-[3rem] border-none shadow-2xl">
          <form className="space-y-6">
            <Input placeholder={t.contact.name} />
            <Input placeholder={t.contact.email} />
            <textarea
              className="w-full min-h-[150px] rounded-xl border p-4 bg-background"
              placeholder={t.contact.message}
            />
            <Button className="w-full h-14 rounded-xl font-black text-xl">Send</Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
