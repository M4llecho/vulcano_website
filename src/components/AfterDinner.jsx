import { useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './AfterDinner.css'

// Pagina raggiungibile solo via QR code: non linkarla da nessuna parte.
// Contenuti da DRINK_LIST_VULCANO.pdf

const minimumSpendNote = 'Nelle serate evento e nel fine settimana, per il servizio dopocena è richiesta una consumazione minima al tavolo di 12€ a persona.'

const menu = [
  {
    id: 'cocktails',
    label: 'Cocktails',
    groups: [
      {
        items: [
          { name: 'Antigua', price: 14, desc: 'Vodka, bailey\'s, frangelico, coffee, chocolate' },
          { name: 'Tahiti', price: 14, desc: 'Vodka, lemon, passion fruit, vegetable carbon' },
          { name: 'Maui', price: 14, desc: 'Gin, lemon, raspberry, mint, soda' },
          { name: 'Madagascar', price: 14, desc: 'Cuban rum, lime, cinnamon, falernum, pineapple soda' },
          { name: 'Bora Bora', price: 14, desc: 'Whisky, caramel, pop corn, soda, angostura' },
          { name: 'Zanzibar', price: 14, desc: 'Tequila, lime, mango, ginger ale' },
          { name: 'Guadalupe', price: 14, desc: 'Mezcal, lime, vanilla, cranberry, lavender' },
          { name: 'Santorini', price: 14, desc: 'Mezcal, vermouth, campari, coffee' },
          { name: 'Portorico', price: 14, desc: 'Cachaca, lime, passion fruit, pineapple, cloves' },
          { name: 'Cocktail classici', price: 12, desc: 'I grandi classici della miscelazione, preparati su richiesta' }
        ]
      }
    ]
  },
  {
    id: 'spritz',
    label: 'Spritz & Analcolici',
    groups: [
      {
        title: 'Spritz',
        items: [
          { name: 'Vulcano Spritz', price: 12, desc: 'Elder flower, basil, prosecco, lemon' },
          { name: 'Passion Spritz', price: 12, desc: 'Passion fruit, prosecco, lemon' },
          { name: 'Bergamotto Spritz', price: 12, desc: 'Bergamot, prosecco, lemon' }
        ]
      },
      {
        title: 'Analcolici',
        items: [
          { name: 'Bali', price: 10, desc: 'Lychee, strawberry, lemon, ginger ale' },
          { name: 'Paros', price: 10, desc: 'Exotic mix, lemon, ginger beer' }
        ]
      }
    ]
  },
  {
    id: 'stuzzicare',
    label: 'Da Stuzzicare',
    groups: [
      {
        items: [
          { name: 'Chips di patate', price: 6 },
          { name: 'Degustazione di fritti', price: 10 },
          { name: 'Dolci', price: 10 },
          { name: 'Tagliata di frutta', price: 10 },
          { name: 'Olive e taralli', price: 5 }
        ]
      }
    ]
  },
  {
    id: 'vodka',
    label: 'Vodka',
    groups: [
      {
        items: [
          { name: 'Beluga Nobile', price: 14 },
          { name: 'Belvedere', price: 13 },
          { name: 'Grey Goose', price: 15 },
          { name: 'Ciroc', price: 13 },
          { name: 'Ketel One', price: 13 },
          { name: 'Tito\'s Handmade', price: 13 },
          { name: 'Chopin', price: 13 },
          { name: 'Nikka Coffey', price: 15 }
        ]
      }
    ]
  },
  {
    id: 'gin',
    label: 'Gin',
    groups: [
      {
        items: [
          { name: 'Elephant', price: 15 },
          { name: 'Elephant Sloe', price: 15 },
          { name: 'Hendrick\'s', price: 13 },
          { name: 'Monkey 47', price: 15 },
          { name: 'Nordés', price: 13 },
          { name: 'Mare', price: 13 },
          { name: 'Bareksten Navy Strength', price: 15 },
          { name: 'Bareksten Botanical Ginarte', price: 15 },
          { name: 'Sabatini', price: 15 },
          { name: 'Villa Ascenti', price: 15 },
          { name: 'Jinzu', price: 15 },
          { name: 'Roku', price: 15 },
          { name: 'Ki No Bi', price: 15 },
          { name: 'Etsu', price: 15 },
          { name: 'Bobby\'s Jenever', price: 13 },
          { name: 'Bombay Sapphire', price: 13 },
          { name: 'Sipsmith', price: 13 },
          { name: 'Tanqueray London Dry', price: 13 },
          { name: 'Tanqueray Ten', price: 15 },
          { name: 'N° 3', price: 15 },
          { name: 'Beefeater 24', price: 15 },
          { name: 'Martin Miller\'s', price: 13 },
          { name: 'City of London Old Tom', price: 13 },
          { name: 'Plymouth', price: 13 },
          { name: 'Plymouth Navy Strength', price: 15 },
          { name: 'Gunpowder', price: 13 },
          { name: 'Himbruni', price: 13 },
          { name: 'Malfy Pompelmo', price: 13 }
        ]
      }
    ]
  },
  {
    id: 'rum',
    label: 'Rum',
    groups: [
      {
        items: [
          { name: 'Mount Gay Eclipse', price: 12 },
          { name: 'Matusalem', price: 12 },
          { name: 'Don Papa 7', price: 12 },
          { name: 'Zacapa 23', price: 12 },
          { name: 'El Dorado 12', price: 12 },
          { name: 'Myers\'s', price: 12 },
          { name: 'Wray & Nephew Overproof', price: 12 },
          { name: 'Hampden Estate Overproof', price: 12 },
          { name: 'Appleton Estate 8 Y', price: 12 },
          { name: 'Depaz Vieux', price: 15 },
          { name: 'Saint James Royal Ambré', price: 12 },
          { name: 'Clément Blanc', price: 12 },
          { name: 'Karukera Vieux', price: 12 },
          { name: 'Clairin Vaval', price: 15 },
          { name: 'Clairin Sajous', price: 15 },
          { name: 'Clairin Casimir', price: 15 },
          { name: 'Clairin Ansyen Komunal', price: 12 },
          { name: 'Neisson', price: 12 },
          { name: 'Abuelo Two Oaks', price: 12 },
          { name: 'Plantation Pineapple', price: 15 },
          { name: 'Goslings Black Seal', price: 12 },
          { name: 'Diplomático Reserva Exclusiva', price: 12 },
          { name: 'Santa Teresa Gran Reserva', price: 12 }
        ]
      }
    ]
  },
  {
    id: 'whisky',
    label: 'Whisky',
    groups: [
      {
        title: 'Bourbon / Rye',
        items: [
          { name: 'Bulleit Bourbon / Rye', price: 12 },
          { name: 'Michter\'s Small Batch Bourbon', price: 15 },
          { name: 'Woodford Reserve', price: 12 },
          { name: 'Koval Four Grain', price: 12 },
          { name: 'Michter\'s Rye', price: 15 },
          { name: 'Knob Creek Bourbon / Rye', price: 12 }
        ]
      },
      {
        title: 'Irish Whiskey',
        items: [
          { name: 'Jameson', price: 10 },
          { name: 'Jameson Black Barrel', price: 12 },
          { name: 'Bushmills Black', price: 12 },
          { name: 'Roe & Co', price: 15 }
        ]
      },
      {
        title: 'Japanese Whisky',
        items: [
          { name: 'Nikka From the Barrel', price: 15 },
          { name: 'Nikka Miyagikyo', price: 20 },
          { name: 'Nikka Yoichi', price: 20 },
          { name: 'Nikka Taketsuru Pure Malt', price: 20 },
          { name: 'Kensei', price: 12 },
          { name: 'Akashi', price: 12 }
        ]
      },
      {
        title: 'Scotch Whisky',
        items: [
          { name: 'Ardbeg 10', price: 12 },
          { name: 'Caol Ila 12', price: 15 },
          { name: 'Lagavulin 16', price: 15 },
          { name: 'Oban 14', price: 12 },
          { name: 'Oban Little Bay', price: 15 },
          { name: 'Talisker 10', price: 12 },
          { name: 'Talisker Port Ruighe', price: 15 },
          { name: 'Talisker Skye', price: 12 },
          { name: 'Glenmorangie 10', price: 12 },
          { name: 'Bruichladdich', price: 15 },
          { name: 'Cardhu 12', price: 12 },
          { name: 'Port Askaig 100 Proof', price: 15 },
          { name: 'Bunnahabhain 12', price: 15 },
          { name: 'Laphroaig 10', price: 12 }
        ]
      },
      {
        title: 'Blended Scotch',
        items: [
          { name: 'Johnnie Walker Black Label', price: 12 },
          { name: 'Johnnie Walker Blue Label', price: 50 }
        ]
      }
    ]
  },
  {
    id: 'tequila',
    label: 'Tequila & Mezcal',
    groups: [
      {
        items: [
          { name: 'Espolòn Blanco', price: 10 },
          { name: 'Ocho Blanco', price: 12 },
          { name: 'Ocho Reposado', price: 15 },
          { name: 'Don Julio Blanco', price: 12 },
          { name: 'Don Julio Reposado', price: 15 },
          { name: 'Patrón Blanco', price: 12 },
          { name: 'Patrón Reposado', price: 15 },
          { name: 'Patrón Añejo', price: 15 },
          { name: 'Casamigos Blanco', price: 12 },
          { name: 'Casamigos Reposado', price: 15 },
          { name: 'Casamigos Añejo', price: 15 },
          { name: 'Casamigos Mezcal', price: 15 },
          { name: 'Los Siete Misterios Espadín', price: 15 },
          { name: 'Los Siete Misterios Arroqueño', price: 20 },
          { name: 'Bruxo N° 1', price: 12 },
          { name: 'Bruxo N° 2', price: 15 },
          { name: 'Bruxo N° 3', price: 15 },
          { name: 'Bruxo N° 4', price: 25 },
          { name: 'Bruxo X', price: 12 },
          { name: 'Del Maguey Santo Domingo', price: 15 },
          { name: 'Del Maguey San Luis del Río', price: 15 }
        ]
      }
    ]
  },
  {
    id: 'cognac',
    label: 'Cognac & Pisco',
    groups: [
      {
        title: 'Cognac / Armagnac / Calvados / Brandy',
        items: [
          { name: 'Martell VS', price: 12 },
          { name: 'Martell VSOP', price: 15 },
          { name: 'Torres 15', price: 10 },
          { name: 'Cardenal Mendoza', price: 12 },
          { name: 'Dartigalongue Hors d\'Âge', price: 15 },
          { name: 'Morin Sélection', price: 12 }
        ]
      },
      {
        title: 'Pisco',
        items: [
          { name: 'Capel', price: 10 },
          { name: 'Tabernero Acholado', price: 12 },
          { name: 'Tabernero Mosto Verde Italia', price: 12 },
          { name: 'Tabernero Quebranta', price: 12 }
        ]
      }
    ]
  },
  {
    id: 'amari',
    label: 'Amari & Grappa',
    groups: [
      {
        title: 'Amari / Liquori',
        items: [
          { name: 'Del Capo', price: 7 },
          { name: 'Jägermeister', price: 6 },
          { name: 'Montenegro', price: 6 },
          { name: 'Averna', price: 6 },
          { name: 'Fernet Branca', price: 6 },
          { name: 'Sambuca', price: 6 },
          { name: 'Limoncello', price: 6 },
          { name: 'Unicum', price: 6 },
          { name: 'Cynar', price: 6 },
          { name: 'Braulio', price: 6 },
          { name: 'Mirto', price: 6 },
          { name: 'Genziana', price: 6 },
          { name: 'Ratafia', price: 6 },
          { name: 'Fragolino', price: 6 },
          { name: 'Liquirizia', price: 6 },
          { name: 'Zedda Piras', price: 6 },
          { name: 'Jefferson', price: 8 },
          { name: 'Varnelli dell\'Erborista', price: 8 },
          { name: 'Varnelli Sibilla', price: 8 }
        ]
      },
      {
        title: 'Grappa',
        items: [
          { name: 'Nardini Bianca', price: 8 },
          { name: 'Nardini 5 anni', price: 10 },
          { name: 'Nardini 7 anni', price: 10 }
        ]
      }
    ]
  }
]

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function MenuItem({ name, price, desc }) {
  return (
    <li className="ad-item">
      <div className="ad-item__row">
        <span className="ad-item__name">{name}</span>
        <span className="ad-item__leader" aria-hidden="true" />
        <span className="ad-item__price">€ {price}</span>
      </div>
      {desc && <p className="ad-item__desc">{desc}</p>}
    </li>
  )
}

export default function AfterDinner() {
  const [active, setActive] = useState(0)
  const tabsRef = useRef([])
  const stripRef = useRef(null)
  const anchorRef = useRef(null)

  function selectTab(index, focus = false) {
    setActive(index)
    const behavior = prefersReducedMotion() ? 'auto' : 'smooth'
    const tab = tabsRef.current[index]
    const strip = stripRef.current
    if (focus) tab.focus()
    // Centra la tab nella barra senza muovere la pagina in verticale
    strip.scrollTo({ left: tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2, behavior })
    // Se la barra è già "incollata" in alto, riporta la lista all'inizio
    const anchorTop = anchorRef.current.getBoundingClientRect().top
    if (anchorTop < 0) window.scrollTo({ top: window.scrollY + anchorTop, behavior })
  }

  function onKeyDown(e) {
    const last = menu.length - 1
    const next = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last
    }[e.key]
    if (next === undefined) return
    e.preventDefault()
    selectTab(next, true)
  }

  const category = menu[active]

  return (
    <div className="afterdinner-page">
      <Helmet>
        <title>Drink List | VULCANO</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <header className="ad-header">
        <img className="ad-header__logo" src="/logo_vulcano.svg" alt="" width="44" height="44" />
        <p className="ad-header__brand">VULCANO</p>
        <p className="ad-header__tagline">Dinner to Club</p>
        <h1 className="ad-header__title">Drink List</h1>
      </header>

      <div ref={anchorRef} aria-hidden="true" />
      <nav className="ad-tabs">
        <div
          className="ad-tabs__strip"
          ref={stripRef}
          role="tablist"
          aria-label="Categorie menù"
          onKeyDown={onKeyDown}
        >
          {menu.map((cat, i) => (
            <button
              key={cat.id}
              ref={(el) => (tabsRef.current[i] = el)}
              id={`ad-tab-${cat.id}`}
              className="ad-tabs__tab"
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`ad-panel-${cat.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => selectTab(i)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      <section
        key={category.id}
        id={`ad-panel-${category.id}`}
        className="ad-panel"
        role="tabpanel"
        aria-labelledby={`ad-tab-${category.id}`}
        tabIndex={0}
      >
        <h2 className="ad-panel__title">{category.label}</h2>
        {category.groups.map((group, gi) => (
          <div className="ad-group" key={group.title || gi}>
            {group.title && <h3 className="ad-group__title">{group.title}</h3>}
            <ul className="ad-list">
              {group.items.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </ul>
          </div>
        ))}
        <p className="ad-panel__note">{minimumSpendNote}</p>
      </section>
    </div>
  )
}
