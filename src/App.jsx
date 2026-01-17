import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import Section from './components/Section'
import Contact from './components/Contact'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Smooth scroll initialization
    const sections = document.querySelectorAll('.section')

    sections.forEach((section) => {
      const fadeElements = section.querySelectorAll('.fade-element')

      gsap.fromTo(
        fadeElements,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Parallax effect for section backgrounds
    gsap.utils.toArray('.section').forEach((section) => {
      gsap.to(section, {
        backgroundPositionY: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main className="app">
      <Hero />

      <Section
        id="cucina"
        title="Cucina Mediterranea e Terrazza"
        text="Un viaggio tra i sapori autentici del Mediterraneo, in una atmosfera sospesa, per chi cerca il gusto della tradizione in una veste contemporanea ed elegante."
        cta="Esplora il Menu"
        ctaLink="#contact"
        variant="cream"
      />

      <Section
        id="drinks"
        title="Alchimia Liquida"
        text="Dal pre-dinner ai cocktail d'autore per il dopocena, la nostra mixology è il filo conduttore che accompagna ogni fase della serata. Un viaggio sensoriale che ti accompagna nella notte."
        cta="Scopri i Cocktail"
        ctaLink="#contact"
        variant="dark"
      />

      <Section
        id="club"
        title="Soft Clubbing e DJ Set"
        text="Ogni Venerdì e Sabato, l'atmosfera di Vulcano evolve. Dopo la cena, il battito accelera con i nostri DJ set. Un'esperienza immersiva dove il sound incontra l'eleganza del soft-clubbing d'avanguardia."
        cta="Vivi l'Esperienza"
        ctaLink="#contact"
        variant="ash"
      />

      <Contact />

      <footer className="footer">
        <div className="container">
          <div className="footer__logo">
            <img src="/logo.svg" alt="Vulcano" />
            <span>VULCANO</span>
          </div>
          <p className="footer__tagline">Dinner to club</p>
          <div className="footer__info">
            <p>Via Flaminia, 479 - 00191 Roma</p>
            <p>+39 06 841 6419</p>
          </div>
          <p className="footer__copy">&copy; 2025 Vulcano Ponte Milvio. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </main>
  )
}

export default App
