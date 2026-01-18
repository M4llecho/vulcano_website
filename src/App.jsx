import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './components/Home'
import Cocktails from './components/Cocktails'
import Food from './components/Food'
import BookingInfo from './components/BookingInfo'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/food" element={<Food />} />
          <Route path="/info" element={<BookingInfo />} />
        </Routes>

        <footer className="footer">
          <div className="container">
            <div className="footer__logo">
              <img src="/logo_vulcano.svg" alt="Vulcano" />
              <span>VULCANO</span>
            </div>
            <p className="footer__tagline">Dinner to club</p>
            <div className="footer__info">
              <p>Via Flaminia, 479 - 00191 Roma</p>
              <p>+39 351 407 2720 | +39 06 841 6419</p>
            </div>
            <p className="footer__copy">&copy; 2025 Vulcano Ponte Milvio. Tutti i diritti riservati.</p>
          </div>
        </footer>
      </main>
    </BrowserRouter>
  )
}

export default App
