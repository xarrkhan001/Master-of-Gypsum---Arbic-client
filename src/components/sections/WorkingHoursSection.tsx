import { Clock } from "lucide-react"

interface WorkingHoursSectionProps {
  t: any
}

export function WorkingHoursSection({ t }: WorkingHoursSectionProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between p-12 rounded-[3rem] bg-gradient-to-br from-primary to-amber-600 text-white shadow-2xl">
          <div className="flex items-center gap-6 mb-8 md:mb-0">
            <Clock className="h-16 w-16 opacity-50" />
            <div>
              <h3 className="text-3xl font-black mb-2">{t.hours.title}</h3>
              <p className="text-white/80 font-bold">{t.hours.days}</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="text-4xl font-black mb-2">{t.hours.time}</div>
            <div className="text-white/60 font-bold uppercase tracking-widest">{t.hours.closed}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
