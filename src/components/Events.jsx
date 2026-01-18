import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Events.css'

export default function Events() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/393514072720?text=Ciao, vorrei organizzare un evento presso Vulcano.', '_blank')
    }

    return (
        <section className="events">
            <Helmet>
                <title>Le formule di Vulcano: La Location per le tue Serate Speciali</title>
                <meta
                    name="description"
                    content="Compleanni, lauree o cene aziendali? Scopri le nostre formule dedicate con drink list esclusiva e DJ set. Rendi unica la tua festa a Ponte Milvio."
                />
                <link rel="canonical" href="https://www.vulcanopontemilvio.com/events" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.vulcanopontemilvio.com/events" />
                <meta property="og:title" content="Le formule di Vulcano: La Location per le tue Serate Speciali" />
                <meta property="og:description" content="Compleanni, lauree o cene aziendali? Scopri le nostre formule dedicate con drink list esclusiva e DJ set. Rendi unica la tua festa a Ponte Milvio." />
                <meta property="og:image" content="https://www.vulcanopontemilvio.com/logo_vulcano.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.vulcanopontemilvio.com/events" />
                <meta property="twitter:title" content="Le formule di Vulcano: La Location per le tue Serate Speciali" />
                <meta property="twitter:description" content="Compleanni, lauree o cene aziendali? Scopri le nostre formule dedicate con drink list esclusiva e DJ set. Rendi unica la tua festa a Ponte Milvio." />
                <meta property="twitter:image" content="https://www.vulcanopontemilvio.com/logo_vulcano.png" />
            </Helmet>
            <div className="container">
                <div className="events__content">
                    <Link to="/" className="events__back">
                        ← Torna alla Home
                    </Link>
                    <header className="events__header">
                        <h1 className="events__title">Formule Evento</h1>
                        <p className="events__subtitle">
                            Scegli la formula perfetta per il tuo evento, oppure contattaci per organizzare al meglio il tuo evento privato come lauree e compleanni: ogni dettaglio è pensato per offrirti una serata indimenticabile.
                            <br /><br />
                            <strong>Le formule sono applicabili solo per tavoli da 8+ persone.</strong>
                        </p>
                    </header>

                    <div className="events__section">
                        <h2 className="events__section-title">Apericena</h2>
                        <div className="events__formulas-grid">
                            <div className="events__formula-card">
                                <ul className="events__formula-list">
                                    <li>Cocktail classico o calice di vino</li>
                                    <li>Frittini misti</li>
                                    <li>Degustazione di pizza</li>
                                </ul>
                                <span className="events__formula-price">20€ <small>a persona</small></span>
                            </div>
                            <div className="events__formula-card">
                                <ul className="events__formula-list">
                                    <li>Cocktail classico o calice di vino</li>
                                    <li>Tagliere misto</li>
                                    <li>Degustazione di pizza</li>
                                </ul>
                                <span className="events__formula-price">25€ <small>a persona</small></span>
                            </div>
                        </div>
                    </div>

                    <div className="events__section">
                        <h2 className="events__section-title">Dopocena</h2>
                        <div className="events__formulas-grid events__formulas-grid--dopocena">
                            <div className="events__formula-card">
                                <ul className="events__formula-list">
                                    <li>Cocktail classico o bottiglia di vino ogni 4</li>
                                    <li>Chips di patate</li>
                                    <li>Servizio torta</li>
                                </ul>
                                <span className="events__formula-price">20€ <small>a persona</small></span>
                            </div>
                            <div className="events__formula-card">
                                <ul className="events__formula-list">
                                    <li>Cocktail classico o bottiglia di vino ogni 4</li>
                                    <li>Servizio torta</li>
                                    <li>Bollicine</li>
                                </ul>
                                <span className="events__formula-price">20€ <small>a persona</small></span>
                            </div>
                            <div className="events__formula-card">
                                <ul className="events__formula-list">
                                    <li>2 Cocktail classici</li>
                                    <li>Servizio torta</li>
                                </ul>
                                <span className="events__formula-price">25€ <small>a persona</small></span>
                            </div>
                            <div className="events__formula-card">
                                <ul className="events__formula-list">
                                    <li>Cocktail classico o bottiglia di vino ogni 4</li>
                                    <li>Frittini misti</li>
                                    <li>Bollicine</li>
                                    <li>Servizio torta</li>
                                </ul>
                                <span className="events__formula-price">28€ <small>a persona</small></span>
                            </div>
                            <div className="events__formula-card">
                                <ul className="events__formula-list">
                                    <li>2 Signature Cocktail</li>
                                    <li>Chips</li>
                                    <li>Servizio torta</li>
                                </ul>
                                <span className="events__formula-price">28€ <small>a persona</small></span>
                            </div>
                        </div>
                    </div>

                    <div className="events__card events__card--wide">
                        <h2 className="events__card-title">Eventi Privati</h2>
                        <p className="events__private-text">
                            Per eventi in esclusiva, con la possibilità di riservare l'intera location o sale dedicate, e per cene private, offriamo la massima flessibilità. Contattateci per concordare menu personalizzati su misura, studiati per soddisfare ogni esigenza specifica e garantire un'esperienza indimenticabile.
                        </p>
                    </div>

                    <div className="events__cta">
                        <button className="btn btn--primary" onClick={handleWhatsAppClick}>
                            Prenota il tuo Evento
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
