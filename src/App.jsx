import './App.css'
import FeaturedProducts from './Components/FeaturedProducts'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Services from './Components/Services'
import TopProducts from './Components/TopProducts'
import Routing from './Routing/Routing'

function App() {

  return (
    <div className='background'>
      <Header />
      <Routing />
      <FeaturedProducts />
      <TopProducts />
      <Services />
      <Footer />
    </div>
  )
}

export default App
