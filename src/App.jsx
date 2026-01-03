import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HighTicketClosing from './pages/HighTicketClosing'
import Coaching from './pages/Coaching'
import Consulting from './pages/Consulting'
import Programs from './pages/Programs'
import Book from './pages/Book'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/high-ticket-closing" element={<HighTicketClosing />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/books" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
