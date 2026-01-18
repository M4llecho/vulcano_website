import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Cocktails.css'

const signatureDrinks = [
  { name: 'ANTIGUA', price: 14, ingredients: 'Vodka, bailey\'s, frangelico, coffee, chocolate' },
  { name: 'TAHITI', price: 14, ingredients: 'Vodka, lemon, passion fruit, vegetable carbon' },
  { name: 'MAUI', price: 14, ingredients: 'Gin, lemon, raspberry, mint, soda' },
  { name: 'MADAGASCAR', price: 14, ingredients: 'Cuban rum, lime, cinnamon, falernum, pineapple soda' },
  { name: 'BORA BORA', price: 14, ingredients: 'Whisky, caramel, pop corn, soda, angostura' },
  { name: 'ZANZIBAR', price: 14, ingredients: 'Tequila, lime, mango, ginger ale' },
  { name: 'GUADALUPE', price: 14, ingredients: 'Mezcal, lime, vanilla, cranberry, lavender' },
  { name: 'SANTORINI', price: 14, ingredients: 'Mezcal, vermouth, campari, coffee' },
  { name: 'PORTORICO', price: 14, ingredients: 'Cachaca, lime, passion fruit, pineapple, cloves' }
]

const spritz = [
  { name: 'VULCANO SPRITZ', price: 12, ingredients: 'Elder flower, basil, prosecco, lemon' },
  { name: 'PASSION SPRITZ', price: 12, ingredients: 'Passion fruit, prosecco, lemon' },
  { name: 'BERGAMOTTO SPRITZ', price: 12, ingredients: 'Bergamot, prosecco, lemon' }
]

const analcolici = [
  { name: 'BALI', price: 10, ingredients: 'Lychee, strawberry, lemon, ginger ale' },
  { name: 'PAROS', price: 10, ingredients: 'Exotic mix, lemon, ginger beer' }
]

function CocktailCard({ name, price, ingredients }) {
  return (
    <div className="cocktail-card">
      <div className="cocktail-card__header">
        <h3 className="cocktail-card__name">{name}</h3>
        <span className="cocktail-card__price">{price}</span>
      </div>
      <p className="cocktail-card__ingredients">{ingredients}</p>
    </div>
  )
}

function CocktailSection({ title, drinks }) {
  return (
    <div className="cocktails-section">
      <h2 className="cocktails-section__title">{title}</h2>
      <div className="cocktails-grid">
        {drinks.map((drink) => (
          <CocktailCard key={drink.name} {...drink} />
        ))}
      </div>
    </div>
  )
}

export default function Cocktails() {
  return (
    <div className="cocktails-page">
      <Helmet>
        <title>La drinklist di vulcano | Cocktail Bar e Mixology a Ponte Milvio</title>
        <meta
          name="description"
          content="Dai Signature Drinks ai classici rivisitati. Scopri la nostra drink list esclusiva, perfetta per un aperitivo o un dopocena vibrante da VULCANO."
        />
        <link rel="canonical" href="https://www.vulcanopontemilvio.com/cocktails" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vulcanopontemilvio.com/cocktails" />
        <meta property="og:title" content="La drinklist di vulcano | Cocktail Bar e Mixology a Ponte Milvio" />
        <meta property="og:description" content="Dai Signature Drinks ai classici rivisitati. Scopri la nostra drink list esclusiva, perfetta per un aperitivo o un dopocena vibrante da VULCANO." />
        <meta property="og:image" content="https://www.vulcanopontemilvio.com/logo_vulcano.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.vulcanopontemilvio.com/cocktails" />
        <meta property="twitter:title" content="La drinklist di vulcano | Cocktail Bar e Mixology a Ponte Milvio" />
        <meta property="twitter:description" content="Dai Signature Drinks ai classici rivisitati. Scopri la nostra drink list esclusiva, perfetta per un aperitivo o un dopocena vibrante da VULCANO." />
        <meta property="twitter:image" content="https://www.vulcanopontemilvio.com/logo_vulcano.png" />
      </Helmet>
      <div className="cocktails-hero">
        <Link to="/" className="cocktails-back">
          ← Torna alla Home
        </Link>
        <h1 className="cocktails-hero__title">Alchimia Liquida</h1>
        <p className="cocktails-hero__subtitle">I nostri cocktail d'autore</p>
      </div>

      <div className="cocktails-content">
        <div className="container">
          <CocktailSection title="Signature Drinks" drinks={signatureDrinks} />
          <CocktailSection title="Spritz" drinks={spritz} />
          <CocktailSection title="Analcolici" drinks={analcolici} />
        </div>
      </div>
    </div>
  )
}
