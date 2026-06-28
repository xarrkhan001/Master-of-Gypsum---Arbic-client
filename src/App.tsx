import { useState, useEffect } from "react"
import { content, slides, PHONE_NUMBER, EMAIL } from "./data/content"

// Section Components
import { Navbar } from "./components/sections/Navbar"
import { HeroSection } from "./components/sections/HeroSection"
import { StatsSection } from "./components/sections/StatsSection"
import { ProcessSection } from "./components/sections/ProcessSection"
import { TestimonialsSection } from "./components/sections/TestimonialsSection"
import { WorkingHoursSection } from "./components/sections/WorkingHoursSection"
import { AboutSection } from "./components/sections/AboutSection"
import { ServicesSection } from "./components/sections/ServicesSection"
import { PortfolioSection } from "./components/sections/PortfolioSection"
import { FAQSection } from "./components/sections/FAQSection"
import { ContactSection } from "./components/sections/ContactSection"
import { Footer } from "./components/sections/Footer"

export default function App() {
  const [lang, setLang] = useState<"ar" | "en">("ar")
  const [currentPage, setCurrentPage] = useState<keyof typeof content.en.nav>("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const t = content[lang]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    document.documentElement.dir = t.dir
    document.documentElement.lang = lang
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [lang, t.dir, currentPage])

  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar")
  const navigateTo = (page: any) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
  }

  return (
    <div className={`min-h-screen bg-background text-foreground transition-all duration-300 ${t.font}`}>
      <Navbar
        lang={lang}
        t={t}
        currentPage={currentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleLang={toggleLang}
        navigateTo={navigateTo}
      />

      <main>
        {currentPage === "home" && (
          <>
            <HeroSection
              t={t}
              lang={lang}
              currentSlide={currentSlide}
              slides={slides}
              navigateTo={navigateTo}
            />
            <StatsSection t={t} />
            <ProcessSection t={t} lang={lang} />
            <TestimonialsSection t={t} lang={lang} />
            <WorkingHoursSection t={t} />
          </>
        )}

        {currentPage === "about" && <AboutSection t={t} lang={lang} />}
        {currentPage === "services" && <ServicesSection t={t} navigateTo={navigateTo} lang={lang} />}
        {currentPage === "portfolio" && <PortfolioSection t={t} lang={lang} />}
        {currentPage === "reviews" && <TestimonialsSection t={t} lang={lang} />}
        {currentPage === "faq" && <FAQSection t={t} lang={lang} navigateTo={navigateTo} />}
        {currentPage === "contact" && (
          <ContactSection t={t} PHONE_NUMBER={PHONE_NUMBER} EMAIL={EMAIL} lang={lang} />
        )}
      </main>

      <Footer
        t={t}
        PHONE_NUMBER={PHONE_NUMBER}
        EMAIL={EMAIL}
        navigateTo={navigateTo}
        lang={lang}
      />
    </div>
  )
}
