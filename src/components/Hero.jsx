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
      {/* Decorative Corners */}
      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--tr" />
      <div className="hero__corner hero__corner--bl" />
      <div className="hero__corner hero__corner--br" />

      {/* Video Background */}
      <div className="hero__video-container">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/poster.jpg"
        >
          <source src="/VULCANO_ERUPTION.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__heat-effect" />
      </div>

      {/* Floating Embers */}
      <div className="hero__embers">
        <div className="hero__ember" />
        <div className="hero__ember" />
        <div className="hero__ember" />
        <div className="hero__ember" />
        <div className="hero__ember" />
        <div className="hero__ember" />
        <div className="hero__ember" />
      </div>

      {/* Main Content */}
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

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator">
        <span>Scorri</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
