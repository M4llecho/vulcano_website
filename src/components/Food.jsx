import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Food.css'

// Icone SVG minimaliste monocromatiche per allergeni
const AllergenIcons = {
  glutine: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4M12 18v4M8 6c0 2 2 4 4 6s4 4 4 6M16 6c0 2-2 4-4 6s-4 4-4 6" />
    </svg>
  ),
  crostacei: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="14" rx="6" ry="4" />
      <path d="M6 14c-2-1-3-3-2-5M18 14c2-1 3-3 2-5M9 10V6M15 10V6M12 10V5" />
    </svg>
  ),
  uova: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="13" rx="6" ry="8" />
    </svg>
  ),
  pesce: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12c3-4 8-6 14-4-6 2-11 0-14 4zM16 8c2 2 4 4 4 4s-2 2-4 4M10 12h.01" />
    </svg>
  ),
  soia: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="8" cy="10" rx="3" ry="4" />
      <ellipse cx="16" cy="10" rx="3" ry="4" />
      <ellipse cx="12" cy="16" rx="3" ry="4" />
    </svg>
  ),
  latte: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 2h8l1 5v13a2 2 0 01-2 2H9a2 2 0 01-2-2V7l1-5zM6 10h12" />
    </svg>
  ),
  sedano: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22V8M12 8c-2-4-5-6-5-6M12 8c2-4 5-6 5-6M8 14c-2 0-4-1-4-1M16 14c2 0 4-1 4-1" />
    </svg>
  ),
  senape: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  sesamo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="8" cy="8" rx="2" ry="3" />
      <ellipse cx="16" cy="8" rx="2" ry="3" />
      <ellipse cx="12" cy="15" rx="2" ry="3" />
      <ellipse cx="6" cy="16" rx="2" ry="3" />
      <ellipse cx="18" cy="16" rx="2" ry="3" />
    </svg>
  ),
  solfiti: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 22h8M12 22v-7M12 15c-3 0-5-2-5-5V3h10v7c0 3-2 5-5 5z" />
    </svg>
  )
}

const ALLERGENS = {
  glutine: { name: 'Glutine', icon: AllergenIcons.glutine },
  crostacei: { name: 'Crostacei', icon: AllergenIcons.crostacei },
  uova: { name: 'Uova', icon: AllergenIcons.uova },
  pesce: { name: 'Pesce', icon: AllergenIcons.pesce },
  soia: { name: 'Soia', icon: AllergenIcons.soia },
  latte: { name: 'Latte', icon: AllergenIcons.latte },
  sedano: { name: 'Sedano', icon: AllergenIcons.sedano },
  senape: { name: 'Senape', icon: AllergenIcons.senape },
  sesamo: { name: 'Sesamo', icon: AllergenIcons.sesamo },
  solfiti: { name: 'Solfiti', icon: AllergenIcons.solfiti }
}

const antipasti = [
  { name: 'JAMON DE BELLOTA 100% RAZZA IBERICA PATANEGRA', price: 28, allergens: [] },
  { name: 'CARPACCIO DI GAMBERO ROSSO', price: 20, allergens: ['crostacei'] },
  { name: 'TARTARE DI TONNO', price: 18, allergens: ['pesce'] },
  { name: 'DEGUSTAZIONE DI FRITTI', price: 10, description: 'Supplì, crocchetta di patate, crocchetta di melanzana, mozzarellina, montanara', allergens: ['glutine', 'uova', 'latte', 'sedano'] },
  { name: 'TARTARE DI FASSONA PIEMONTESE CON BURRATINA E POMODORO SECCO', price: 18, allergens: ['latte'] },
  { name: 'PARMIGIANA DI MELANZANE', price: 10, allergens: ['latte', 'glutine', 'uova'] },
  { name: 'BRUSCHETTA MEDITERRANEA', price: 6, description: 'Pane fatto in casa con pomodoro datterino rosso, stracciatella di Andria e alici di Cetara', allergens: ['glutine', 'latte', 'pesce'] },
  { name: 'BRUSCHETTA DI CAMPO', price: 6, description: 'Pane fatto in casa con cicorietta ripassata in padella', allergens: ['glutine'] },
  { name: 'INSALATA DI CARCIOFI CON FIOCCHI DI GRANA', price: 12, allergens: ['latte'] },
  { name: 'BAO CON PULLED PORK', price: 6, allergens: ['glutine', 'soia', 'latte', 'senape'] }
]

const primi = [
  { name: 'RIGATONI ALLA CARBONARA', price: 14, allergens: ['glutine', 'uova', 'latte'] },
  { name: 'RIGATONI ALL\'AMATRICIANA', price: 14, allergens: ['glutine', 'latte'] },
  { name: 'PICI AL RAGÙ BIANCO', price: 15, allergens: ['glutine', 'sedano', 'latte', 'solfiti'] },
  { name: 'TONNARELLI CACIO E PEPE CON TARTARE DI GAMBERO ROSSO', price: 20, allergens: ['glutine', 'latte', 'crostacei'] },
  { name: 'TAGLIOLINI AL TARTUFO', price: 20, allergens: ['glutine', 'uova', 'latte'] },
  { name: 'SPAGHETTONE CON FONDUTA DI POMODORO E CRUMBLE DI BASILICO E PARMIGIANO', price: 12, allergens: ['glutine', 'latte'] },
  { name: 'TONNARELLI CON CARCIOFI, GUANCIALE CROCCANTE E PECORINO ROMANO', price: 14, allergens: ['glutine', 'latte'] }
]

const secondi = [
  { name: 'TATAKI DI TONNO IN CROSTA DI SESAMO CON MIX DI VERDURE AL FORNO', price: 18, allergens: ['pesce', 'sesamo', 'soia'] },
  { name: 'STRACCETTI DI MANZO AI CARCIOFI', price: 18, allergens: ['glutine'] },
  { name: 'TAGLIATA DI MANZO AL ROSMARINO CON PATATE FRITTE', price: 22, allergens: [] },
  { name: 'BOCCONCINI DI POLLO IN SALSA TERIYAKI CON CICORIA RIPASSATA', price: 16, allergens: ['glutine', 'soia'] },
  { name: 'FILETTO DI VITELLA COME SALTIMBOCCA CON CICORIA RIPASSATA', price: 28, allergens: ['glutine', 'solfiti', 'latte'] }
]

const pizze = [
  { name: 'MARGHERITA', price: 10, description: 'Pomodoro San Marzano DOP, fior di latte di Agerola e basilico', allergens: ['glutine', 'latte'] },
  { name: 'MARINARA', price: 9, description: 'Pomodoro San Marzano DOP, origano di Pantelleria e olio all\'aglio', allergens: ['glutine'] },
  { name: 'REGINA MARGHERITA', price: 14, description: 'Pomodoro San Marzano DOP, mozzarella di bufala campana DOP a crudo, fiocchi di grana padano 24 mesi e basilico', allergens: ['glutine', 'latte'] },
  { name: 'NAPOLI', price: 14, description: 'Pomodoro San Marzano DOP, fiordilatte di Agerola, alici di Sciacca e basilico', allergens: ['glutine', 'latte', 'pesce'] },
  { name: 'SAN DANIELE', price: 14, description: 'Fior di latte di Agerola, pomodorini datterino rossi, rucola, prosciutto crudo San Daniele e fiocchi di grana padano 24 mesi', allergens: ['glutine', 'latte'] },
  { name: 'FIORI E ALICI', price: 14, description: 'Fior di latte di Agerola, fiori di zucca e alici di Cetara', allergens: ['glutine', 'latte', 'pesce'] },
  { name: 'PARMIGIANA', price: 15, description: 'Pomodoro San Marzano DOP, fiordilatte di Agerola, melanzane, salsa di basilico e fiocchi di grana padano 24 mesi', allergens: ['glutine', 'latte'] },
  { name: 'FIOR DI COTTO', price: 13, description: 'Fiordilatte di Agerola, prosciutto cotto di Praga e fiori di zucca', allergens: ['glutine', 'latte'] },
  { name: 'DIAVOLA', price: 12, description: 'Pomodoro San Marzano DOP, fiordilatte di Agerola e salame piccante', allergens: ['glutine', 'latte'] },
  { name: 'VULCANO', price: 14, description: 'Pomodoro San Marzano DOP, origano di Pantelleria, stracciatella di Andria e alici di Cetara', allergens: ['glutine', 'latte', 'pesce'] }
]

const contorni = [
  { name: 'PATATE FRITTE', price: 6, allergens: [] },
  { name: 'CICORIA RIPASSATA', price: 6, allergens: [] },
  { name: 'MIX DI VERDURE AL FORNO', price: 6, allergens: [] }
]

const dolci = [
  { name: 'MILLEVOGLIE VULCANO', price: 8, allergens: ['glutine', 'latte', 'uova'] },
  { name: 'TIRAMISÙ', price: 7, allergens: ['glutine', 'latte', 'uova'] },
  { name: 'CREMA CATALANA FLAMBÉ', price: 7, allergens: ['latte', 'uova'] },
  { name: 'TAGLIATA DI FRUTTA', price: 10, allergens: [] }
]

function AllergenIcon({ allergenKey }) {
  const allergen = ALLERGENS[allergenKey]
  if (!allergen) return null
  return (
    <span className="allergen-icon" title={allergen.name}>
      {allergen.icon}
    </span>
  )
}

function FoodCard({ name, price, description, allergens = [] }) {
  return (
    <div className="food-card">
      <div className="food-card__header">
        <h3 className="food-card__name">{name}</h3>
        <span className="food-card__price">{price}</span>
      </div>
      {description && <p className="food-card__description">{description}</p>}
      {allergens.length > 0 && (
        <div className="food-card__allergens">
          {allergens.map((allergenKey) => (
            <AllergenIcon key={allergenKey} allergenKey={allergenKey} />
          ))}
        </div>
      )}
    </div>
  )
}

function FoodSection({ title, items, sectionClass }) {
  return (
    <div className={`food-section ${sectionClass}`}>
      <h2 className="food-section__title">{title}</h2>
      <div className="food-grid">
        {items.map((item) => (
          <FoodCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  )
}

function AllergenLegend() {
  const usedAllergens = ['glutine', 'crostacei', 'uova', 'pesce', 'soia', 'latte', 'sedano', 'senape', 'sesamo', 'solfiti']

  return (
    <div className="allergen-legend">
      <h3 className="allergen-legend__title">Allergeni</h3>
      <div className="allergen-legend__grid">
        {usedAllergens.map((key) => (
          <div key={key} className="allergen-legend__item">
            <span className="allergen-legend__symbol">{ALLERGENS[key].icon}</span>
            <span className="allergen-legend__name">{ALLERGENS[key].name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Food() {
  return (
    <div className="food-page">
      <Helmet>
        <title>Cucina Mediterranea | VULCANO Ponte Milvio</title>
        <meta
          name="description"
          content="Menu VULCANO: Antipasti, Primi, Secondi e Pizze. Cucina mediterranea contemporanea di alta qualità da gustare nella nostra terrazza a Ponte Milvio, Roma."
        />
        <link rel="canonical" href="https://www.vulcanopontemilvio.com/food" />
      </Helmet>
      <div className="food-hero">
        <Link to="/" className="food-back">
          ← Torna alla Home
        </Link>
        <h1 className="food-hero__title">Cucina Mediterranea</h1>
        <p className="food-hero__subtitle">I sapori autentici della tradizione</p>
      </div>

      <div className="food-content">
        <div className="container">
          <FoodSection title="Antipasti" items={antipasti} sectionClass="food-section--antipasti" />
          <FoodSection title="Primi" items={primi} sectionClass="food-section--primi" />
          <FoodSection title="Secondi" items={secondi} sectionClass="food-section--secondi" />
          <FoodSection title="Pizze" items={pizze} sectionClass="food-section--pizze" />
          <FoodSection title="Contorni" items={contorni} sectionClass="food-section--contorni" />
          <FoodSection title="Dolci" items={dolci} sectionClass="food-section--dolci" />

          <AllergenLegend />
        </div>
      </div>
    </div>
  )
}
