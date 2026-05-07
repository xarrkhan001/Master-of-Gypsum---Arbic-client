interface PortfolioSectionProps {
  t: any
}

export function PortfolioSection({ t }: PortfolioSectionProps) {
  return (
    <section className="py-24 px-6 animate-in fade-in">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-black mb-6">{t.portfolio.title}</h2>
        <p className="text-muted-foreground text-xl mb-20">{t.portfolio.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 2, 3, 1].map((i, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-[2rem] aspect-square group">
              <img
                src={`/slide${i}.png`}
                className="w-full h-full object-cover transition-all group-hover:scale-110"
                alt={`Portfolio ${idx}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
