import { Globe, Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  lang: "ar" | "en"
  t: any
  currentPage: string
  isMenuOpen: boolean
  setIsMenuOpen: (val: boolean) => void
  toggleLang: () => void
  navigateTo: (page: any) => void
}

export function Navbar({ lang, t, currentPage, isMenuOpen, setIsMenuOpen, toggleLang, navigateTo }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo("home")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-yellow-500 shadow-lg">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl tracking-tight text-foreground logo-font uppercase">
            {lang === "ar" ? (
              <span className="font-black text-primary text-2xl">معلم الجبس والديكور</span>
            ) : (
              <>
                <span className="font-black text-primary">Master of</span>{" "}
                <span className="font-light opacity-80">Gypsum</span>
              </>
            )}
          </span>
        </div>

        <div className="hidden items-center gap-6 text-[11px] font-bold md:flex uppercase tracking-[0.1em]">
          {Object.keys(t.nav).map((k) => (
            <button
              key={k}
              onClick={() => navigateTo(k)}
              className={`hover:text-primary ${
                currentPage === k ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
              }`}
            >
              {t.nav[k as keyof typeof t.nav]}
            </button>
          ))}
          <Button variant="outline" size="sm" onClick={toggleLang} className="gap-2 rounded-full px-4 text-xs">
            <Globe className="h-3 w-3" /> {lang === "ar" ? "English" : "العربية"}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleLang}>
            <Globe className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-border bg-background p-6 md:hidden animate-in slide-in-from-top-4 shadow-xl text-center">
          <div className="flex flex-col gap-6 font-bold text-lg">
            {Object.keys(t.nav).map((k) => (
              <button
                key={k}
                onClick={() => navigateTo(k)}
                className={currentPage === k ? "text-primary" : ""}
              >
                {t.nav[k as keyof typeof t.nav]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
