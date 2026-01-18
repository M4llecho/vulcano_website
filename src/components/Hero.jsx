import { useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const videoRef = useRef(null)

  const scrollToContent = () => {
    const nextSection = document.getElementById('contact')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero__video-container">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          playsInline
          poster="/poster.jpg"
        >
          <source src="/VULCANO_ERUPTION.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <img
          src="/logo_vulcano.svg"
          alt="Vulcano Logo"
          className="hero__triangle"
        />
        <img src="/scritta_vulcano.svg" alt="VULCANO" className="hero__title-image" />
        <p className="hero__subtitle">Dinner to club</p>
        <button className="btn btn--primary hero__cta" onClick={scrollToContent}>
          Prenota l'Esperienza
        </button>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scorri</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
