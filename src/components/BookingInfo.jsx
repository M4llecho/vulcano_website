import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './BookingInfo.css'

export default function BookingInfo() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="booking-info">
            <Helmet>
                <title>Info & Policy | VULCANO Ponte Milvio</title>
                <meta
                    name="description"
                    content="Leggi le policy di ingresso, dress code e informazioni sulle prenotazioni di VULCANO. Un ambiente selezionato per un'esperienza esclusiva a Roma."
                />
                <link rel="canonical" href="https://www.vulcanopontemilvio.com/info" />
            </Helmet>
            <div className="container">
                <div className="booking-info__content">
                    <header className="booking-info__header">
                        <h1 className="booking-info__title">Informazioni & Policy</h1>
                        <p className="booking-info__subtitle">
                            Per garantire a tutti i nostri ospiti un'esperienza piacevole e sicura, ti invitiamo a leggere le seguenti informazioni.
                        </p>
                    </header>

                    <div className="booking-info__card">
                        <h2 className="booking-info__card-title">Ingresso & Selezione</h2>
                        <div className="booking-info__text">
                            <p>
                                Durante il fine settimana (Venerdì e Sabato) e in occasione di eventi speciali, l'ingresso è riservato esclusivamente a un pubblico maggiorenne (+18) e soggetto a selezione per garantire un ambiente curato e sicuro, in linea con lo stile del locale.
                            </p>
                            <p>
                                La direzione si riserva il diritto di verificare l'età all'ingresso tramite documento d'identità valido (solo cartaceo).
                            </p>
                        </div>
                    </div>

                    <div className="booking-info__card">
                        <h2 className="booking-info__card-title">Dress Code</h2>
                        <div className="booking-info__text">
                            <p>
                                È richiesto un abbigliamento curato e adeguato al contesto serale (Smart Casual o Elegant).
                            </p>
                            <ul className="booking-info__list">
                                <li>Non è consentito l'ingresso con abbigliamento sportivo, tute, ciabatte, costumi, borselli, pantalacci o pantaloni strappati.</li>
                                <li>Si sconsiglia l'utilizzo di cappelli e occhiali da sole all'interno del locale.</li>
                            </ul>
                            <p>
                                La cura del proprio aspetto è parte integrante dell'esperienza Vulcano.
                            </p>
                        </div>
                    </div>

                    <div className="booking-info__card">
                        <h2 className="booking-info__card-title">Prenotazioni</h2>
                        <div className="booking-info__text">
                            <p>
                                La prenotazione è fortemente consigliata, specialmente nel fine settimana. Tuttavia, essa non garantisce automaticamente l'ingresso, che rimane subordinato al superamento della selezione alla porta.
                            </p>
                            <p>
                                Il tavolo è riservato per la durata della cena; in alcuni casi (durante i weekend) potrebbe essere richiesto il rilascio per il turno successivo (inizio ore 23:30). Chi desidera proseguire la serata nel dopocena è pregato di comunicarlo in fase di prenotazione.
                            </p>
                            <p>
                                Per gruppi numerosi (8+ persone) o eventi privati, vi invitiamo a contattarci direttamente per concordare un menu dedicato.
                            </p>
                        </div>
                    </div>

                    <div className="booking-info__card">
                        <h2 className="booking-info__card-title">Consumazione Minima</h2>
                        <div className="booking-info__text">
                            <p>
                                Nelle serate evento e nel fine settimana, per il servizio dopocena è richiesta una consumazione minima al tavolo di 12€ a persona.
                            </p>
                        </div>
                    </div>

                    <footer className="booking-info__footer">
                        <Link to="/" className="booking-info__back-btn">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Torna alla Home
                        </Link>
                    </footer>
                </div>
            </div>
        </section>
    )
}
