import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PodcastForm from './components/PodcastForm'
import Solution from './components/Solution'
import Mastermind from './components/Mastermind'
import Testimonials from './components/Testimonials'
import Podcast from './components/Podcast'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PodcastForm />
      <Solution />
      <Mastermind />
      <Testimonials />
      <Podcast />
      <Footer />
    </div>
  )
}

export default App
