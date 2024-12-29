import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Services from './Components/Services'
import Routing from './Routing/Routing'

function App() {

  return (
    <div className='background'>
      <Header />
      <Routing />
      <Services />
      <Footer />
    </div>
  )
}

export default App
