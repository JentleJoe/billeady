import Hero from '../components/Hero'
import About from '../components/About'
// import PodcastForm from '../components/PodcastForm'
import ServicesOverview from '../components/ServicesOverview'
import Solution from '../components/Solution'
import Mastermind from '../components/Mastermind'
import Testimonials from '../components/Testimonials'
import Podcast from '../components/Podcast'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesOverview />
      {/* <PodcastForm /> */}
      <Solution />
      <Mastermind />
      <Testimonials />
      <Podcast />
    </>
  )
}

export default Home
