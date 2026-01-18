import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './Hero'
import Section from './Section'
import Contact from './Contact'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Track scroll velocity to skip animations during fast scroll
    let lastScrollY = window.scrollY
    let scrollVelocity = 0
    let velocityUpdateId = null

    const updateVelocity = () => {
      const currentScrollY = window.scrollY
      scrollVelocity = Math.abs(currentScrollY - lastScrollY)
      lastScrollY = currentScrollY
      velocityUpdateId = requestAnimationFrame(updateVelocity)
    }
    velocityUpdateId = requestAnimationFrame(updateVelocity)

    // Track which sections have already animated
    const animatedSections = new Set()

    const sections = document.querySelectorAll('.section')

    sections.forEach((section) => {
      const fadeElements = section.querySelectorAll('.fade-element')
      const sectionId = section.id || section.className

      // Set initial state immediately
      gsap.set(fadeElements, { opacity: 0, y: 30 })

      ScrollTrigger.create({
        trigger: section,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          // Skip animation if scrolling too fast (velocity > 50px per frame)
          if (scrollVelocity > 50 || animatedSections.has(sectionId)) {
            // Instantly show elements without animation
            gsap.set(fadeElements, { opacity: 1, y: 0 })
            animatedSections.add(sectionId)
            return
          }

          animatedSections.add(sectionId)
          gsap.to(fadeElements, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
          })
        }
      })
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
      cancelAnimationFrame(velocityUpdateId)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>VULCANO - Dinner to Club | Ponte Milvio Roma</title>
        <meta
          name="description"
          content="VULCANO - Dinner to Club. Cucina Mediterranea, ampia Terrazza a Ponte Milvio, Cocktail Bar e DJ Set. Il luogo ideale per aperitivo, cena e dopocena a Roma."
        />
        <link rel="canonical" href="https://www.vulcanopontemilvio.com/" />
      </Helmet>
      <Hero />

      <Section
        id="cucina"
        title="Cucina Mediterranea e Terrazza"
        text="Un viaggio tra i sapori autentici del Mediterraneo, avvolti dal calore elegante delle nostre sale o sulla suggestiva terrazza a Ponte Milvio. Un'atmosfera sospesa per chi cerca il gusto della tradizione in una veste contemporanea."
        cta="Esplora il Menu"
        ctaLink="/food"
        isRouterLink
        variant="cream"
      />

      <Section
        id="drinks"
        title="Alchimia Liquida"
        text="Dal pre-dinner ai cocktail d'autore per il dopocena, la nostra mixology è il filo conduttore che scandisce ogni fase della serata. Un viaggio sensoriale che ti accompagna nella notte."
        cta="Scopri i Cocktail"
        ctaLink="/cocktails"
        isRouterLink
        variant="dark"
      />

      <Section
        id="club"
        title="Soft Clubbing e DJ Set"
        cta="Vivi l'Esperienza"
        ctaLink="#contact"
        variant="ash"
      >
        <p className="section__text fade-element">
          Ogni Venerdì e Sabato, l'atmosfera di Vulcano si accende. Dopo la cena,
          il battito accelera con i resident DJ{' '}
          <a
            href="https://www.instagram.com/federico.kay"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'underline' }}
          >
            Federico "Kay" Maliseno
          </a>{' '}
          e{' '}
          <a
            href="https://www.instagram.com/djlauren_official"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'underline' }}
          >
            Federico "Lauren" Laurenti
          </a>
          . Ritmi Reggaeton, Italiana e Techno per un'esperienza immersiva dove
          il sound incontra l'eleganza del soft-clubbing d'avanguardia.
        </p>
      </Section>

      <Contact />
    </>
  )
}
