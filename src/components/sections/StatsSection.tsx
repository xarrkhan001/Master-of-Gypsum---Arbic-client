export function StatsSection({ t }: { t: any }) {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {t.stats.map((stat: any, idx: number) => (
            <div key={idx} className="group relative p-8 rounded-[2.5rem] bg-white border border-border/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="h-16 w-16" />
              </div>
              <div className="mb-4 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-4xl font-black mb-1 text-foreground tracking-tighter flex items-baseline gap-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
