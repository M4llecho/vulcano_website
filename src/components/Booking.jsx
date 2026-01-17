import { useEffect, useRef, useState } from 'react'
import './Booking.css'

export default function Booking() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section--visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic
    console.log('Booking submitted:', formData)
    alert('Grazie per la tua prenotazione! Ti contatteremo presto.')
  }

  return (
    <section id="booking" ref={sectionRef} className="booking section--dark">
      <div className="container">
        <div className="booking__content">
          <h2 className="booking__title fade-element">Prenota la Tua Esperienza</h2>
          <p className="booking__text fade-element">
            Riserva il tuo tavolo e preparati a vivere una serata indimenticabile.
          </p>

          <form className="booking__form fade-element" onSubmit={handleSubmit}>
            <div className="booking__form-row">
              <div className="booking__field">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome e Cognome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="booking__field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="booking__form-row">
              <div className="booking__field">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefono"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="booking__field">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="booking__form-row">
              <div className="booking__field">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1">1 Ospite</option>
                  <option value="2">2 Ospiti</option>
                  <option value="3">3 Ospiti</option>
                  <option value="4">4 Ospiti</option>
                  <option value="5">5 Ospiti</option>
                  <option value="6">6 Ospiti</option>
                  <option value="7+">7+ Ospiti</option>
                </select>
              </div>
            </div>

            <div className="booking__field booking__field--full">
              <textarea
                name="message"
                placeholder="Note aggiuntive (allergie, occasioni speciali...)"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn--primary">
              Conferma Prenotazione
            </button>
          </form>

          <div className="booking__contact fade-element">
            <p>Oppure contattaci direttamente</p>
            <a href="tel:+390812345678" className="booking__phone">
              +39 081 234 5678
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
