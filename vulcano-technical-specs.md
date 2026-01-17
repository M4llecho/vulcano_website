# TECHNICAL SPECIFICATIONS: VULCANO — DINNER TO CLUB

## 1. Core Logic & Intro
* **Video Eruption:** Implementare l'intro video (formato WebP o MP4 ottimizzato) con `autoplay`, `muted`, `playsinline`.
* **Freeze State:** Utilizzare JavaScript per fermare il video sull'ultimo frame dopo 3-5 secondi.
* **Logo Overlay:** Triggerare l'animazione di comparsa del logo e del sottotitolo "Dinner to club" solo dopo che il video si è bloccato.

## 2. Tech Stack & Animations
* **Framework:** Sito One-Page leggero e ultra-veloce.
* **Animations:** Usare GSAP (GreenSock) per:
    - Reveal dei testi durante lo scroll.
    - Transizioni fluide tra le sezioni (Cucina -> Bar -> Club).
* **Smooth Scroll:** Implementare uno scorrimento raffinato per enfatizzare l'eleganza del brand.

## 3. Struttura della Pagina
* **Sezione 1 (Hero):** Video Vulcano -> Freeze -> Branding.
* **Sezione 2 (Kitchen):** Focus su Cucina Mediterranea (testo minimal + 1 immagine).
* **Sezione 3 (Drinks):** Focus su Cocktail Bar & Mixology.
* **Sezione 4 (Club):** Focus su Rooftop & DJ Set.
* **Sezione 5 (Booking):** Form di contatto/prenotazione rapido e mobile-friendly.

## 4. Performance & Mobile
* **Mobile First:** Ottimizzazione totale per smartphone (prenotazioni rapide).
* **Asset Optimization:** Caricamento immagini tramite Lazy Loading e compressione WebP.
* **Zero Bloat:** Evitare plugin pesanti; prediligere codice pulito e ottimizzato per un caricamento istantaneo (LCP < 1.2s).