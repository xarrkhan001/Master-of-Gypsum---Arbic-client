import { useState } from "react"
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  Send,
} from "lucide-react"

interface ContactSectionProps {
  t: any
  PHONE_NUMBER: string
  EMAIL: string
  lang?: "ar" | "en"
}

export function ContactSection({ t, PHONE_NUMBER, EMAIL, lang = "ar" }: ContactSectionProps) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" })
  const isRTL = lang === "ar"
  const c = t.contact

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="overflow-hidden">
      <section className="py-24 px-6 bg-background relative overflow-hidden">
        {/* BG Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className={`mb-14 ${isRTL ? "text-right" : "text-center"}`}>
            <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest ${isRTL ? "" : "mx-auto"}`}>
              <Sparkles className="h-3 w-3" />
              {c.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">{c.title}</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{c.subtitle}</p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-12 items-start`}>
            {/* ── Left: Info ── */}
            <div className={`space-y-5 ${isRTL ? "lg:order-2" : "lg:order-1"}`}>
              {/* Quick action cards */}
              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 p-6 rounded-[1.75rem] bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${isRTL ? "flex-row-reverse text-right" : ""}`}
              >
                <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                  <MessageCircle className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-black text-base mb-0.5">WhatsApp</div>
                  <div className="text-sm text-muted-foreground font-semibold">{PHONE_NUMBER}</div>
                  <div className="text-xs text-emerald-600 font-bold mt-1">
                    {isRTL ? "رد سريع خلال دقائق" : "Quick reply within minutes"}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className={`group flex items-center gap-5 p-6 rounded-[1.75rem] bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${isRTL ? "flex-row-reverse text-right" : ""}`}
              >
                <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Phone className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-black text-base mb-0.5">{c.call}</div>
                  <div className="text-sm text-muted-foreground font-semibold">{PHONE_NUMBER}</div>
                  <div className="text-xs text-primary font-bold mt-1">
                    {isRTL ? "متاح 8 ص – 9 م" : "Available 8AM – 9PM"}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className={`group flex items-center gap-5 p-6 rounded-[1.75rem] bg-secondary/20 border border-border/40 hover:bg-secondary/30 hover:border-border/70 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${isRTL ? "flex-row-reverse text-right" : ""}`}
              >
                <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Mail className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-black text-base mb-0.5">{c.emailLabel}</div>
                  <div className="text-sm text-muted-foreground font-semibold">{EMAIL}</div>
                </div>
              </a>

              {/* Info row */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-5 rounded-[1.5rem] bg-muted/30 border border-border/30 ${isRTL ? "text-right" : "text-left"}`}>
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs font-black uppercase tracking-widest">{c.hoursLabel}</span>
                  </div>
                  <div className="font-bold text-sm text-foreground">{c.hoursValue}</div>
                </div>
                <div className={`p-5 rounded-[1.5rem] bg-muted/30 border border-border/30 ${isRTL ? "text-right" : "text-left"}`}>
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs font-black uppercase tracking-widest">{c.addressLabel}</span>
                  </div>
                  <div className="font-bold text-sm text-foreground">{c.addressValue}</div>
                </div>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className={`${isRTL ? "lg:order-1" : "lg:order-2"}`}>
              <div className="bg-background border border-border/50 rounded-[2rem] p-8 shadow-xl">
                {sent ? (
                  /* Success state */
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                    <div className="h-20 w-20 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-black text-foreground">{c.successMsg}</h3>
                    <button
                      onClick={() => setSent(false)}
                      className="text-sm text-primary font-bold underline underline-offset-4"
                    >
                      {isRTL ? "إرسال رسالة أخرى" : "Send another message"}
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className={`font-black text-xl mb-6 ${isRTL ? "text-right" : "text-left"}`}>{c.formTitle}</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name + Phone */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className={isRTL ? "text-right" : ""}>
                          <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-widest">{c.name}</label>
                          <input
                            required
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            className={`w-full rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${isRTL ? "text-right" : ""}`}
                            placeholder={c.name}
                          />
                        </div>
                        <div className={isRTL ? "text-right" : ""}>
                          <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-widest">{c.phone}</label>
                          <input
                            required
                            value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            className={`w-full rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${isRTL ? "text-right" : ""}`}
                            placeholder={c.phone}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className={isRTL ? "text-right" : ""}>
                        <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-widest">{c.email}</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className={`w-full rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${isRTL ? "text-right" : ""}`}
                          placeholder={c.email}
                        />
                      </div>

                      {/* Service */}
                      <div className={isRTL ? "text-right" : ""}>
                        <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-widest">{c.service}</label>
                        <select
                          value={form.service}
                          onChange={e => setForm({ ...form, service: e.target.value })}
                          className={`w-full rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none ${isRTL ? "text-right" : ""}`}
                        >
                          <option value="">{c.servicePlaceholder}</option>
                          {c.serviceOptions.map((opt: string, i: number) => (
                            <option key={i} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className={isRTL ? "text-right" : ""}>
                        <label className="block text-xs font-bold text-muted-foreground mb-1.5 uppercase tracking-widest">{c.message}</label>
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          className={`w-full rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none ${isRTL ? "text-right" : ""}`}
                          placeholder={c.message}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground font-black h-14 rounded-2xl shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-transform text-base"
                      >
                        <Send className="h-5 w-5" />
                        {c.send}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
