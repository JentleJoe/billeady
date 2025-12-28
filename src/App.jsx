import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HighTicketClosing from './pages/HighTicketClosing'
import Coaching from './pages/Coaching'
import Consulting from './pages/Consulting'
import Programs from './pages/Programs'
import Book from './pages/Book'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/high-ticket-closing" element={<HighTicketClosing />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
