import './App.css'
import FeaturedProducts from './Components/FeaturedProducts'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Services from './Components/Services'

function App() {

  return (
    <div className='background'>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Footer />
    </div>
  )
}

export default App
