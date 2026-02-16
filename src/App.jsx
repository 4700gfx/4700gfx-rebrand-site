import './App.css'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import WhatWeDo from './components/sections/WhatWeDo'
import WhatWeOffer from './components/sections/WhatWeOffer'
import Portfolio from './components/sections/Portfolio'
import Pricing from './components/sections/Pricing'
import Faq from './components/sections/FAQ'
import Footer from './components/sections/Footer'
import VisitUs from './components/sections/VisitUs'



function App() {

  return (
    <div className='app-container'>
      <Navbar></Navbar>
      <Hero></Hero>
      <WhatWeDo></WhatWeDo>
      <WhatWeOffer></WhatWeOffer>
      <Portfolio></Portfolio>
      <Pricing></Pricing>
      <Faq></Faq>
      <VisitUs></VisitUs>
      <Footer></Footer>
    </div>
  )
}

export default App
