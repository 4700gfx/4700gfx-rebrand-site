import { useState } from 'react'
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
import Testimonials from './components/sections/Testimonials'



function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className='app-container'>
      <Navbar
        isContactOpen={isContactOpen}
        onOpenContact={() => setIsContactOpen(true)}
        onCloseContact={() => setIsContactOpen(false)}
      ></Navbar>
      <Hero onOpenContact={() => setIsContactOpen(true)}></Hero>
      <WhatWeDo onOpenContact={() => setIsContactOpen(true)}></WhatWeDo>
      <WhatWeOffer></WhatWeOffer>
      <Portfolio onOpenContact={() => setIsContactOpen(true)}></Portfolio>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
      <Faq></Faq>
      <VisitUs></VisitUs>
      <Footer></Footer>
    </div>
  )
}

export default App
