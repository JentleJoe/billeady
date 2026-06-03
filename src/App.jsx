import { Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HighTicketClosing from './pages/HighTicketClosing'
import Coaching from './pages/Coaching'
import Consulting from './pages/Consulting'
import Book from './pages/Book'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Htcas from './pages/Htcas'

function App() {
  const location = useLocation()
  const hideChrome = location.pathname === '/htcas'

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      {!hideChrome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/high-ticket-closing" element={<HighTicketClosing />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/books" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/htcas" element={<Htcas />} />
      </Routes>
      {!hideChrome && <Footer />}
    </div>
  )
}

export default App
