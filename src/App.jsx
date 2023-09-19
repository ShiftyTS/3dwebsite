import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="z-0 bg-primary relative">
        <div className="bg-cover bg-hero-pattern bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App