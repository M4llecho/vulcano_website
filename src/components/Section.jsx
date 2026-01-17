import { useEffect, useRef } from 'react'
import './Section.css'

export default function Section({
  id,
  title,
  text,
  cta,
  ctaLink = '#booking',
  variant = 'dark',
  children
}) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section--visible')
          }
        })
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section section--${variant}`}
    >
      <div className="container">
        <div className="section__content">
          {title && (
            <h2 className="section__title fade-element">{title}</h2>
          )}
          {text && (
            <p className="section__text fade-element">{text}</p>
          )}
          {children}
          {cta && (
            <a href={ctaLink} className="btn fade-element">
              {cta}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
