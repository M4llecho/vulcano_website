import { Link } from 'react-router-dom'
import './Section.css'

export default function Section({
  id,
  title,
  text,
  cta,
  ctaLink = '#booking',
  isRouterLink = false,
  variant = 'dark',
  children
}) {
  return (
    <section
      id={id}
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
            isRouterLink ? (
              <Link to={ctaLink} className="btn fade-element">
                {cta}
              </Link>
            ) : (
              <a
                href={ctaLink}
                className="btn fade-element"
                onClick={(e) => {
                  if (ctaLink.startsWith('#')) {
                    e.preventDefault()
                    const element = document.querySelector(ctaLink)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                }}
              >
                {cta}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  )
}
