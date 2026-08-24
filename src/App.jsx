import { useState } from 'react'
import './App.css'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import WhatWeDo from './components/sections/WhatWeDo'
import WhatWeOffer from './components/sections/WhatWeOffer'
import Portfolio from './components/sections/Portfolio'
import Pricing from './components/sections/Pricing'
import LeadMagnetSection from './components/sections/LeadMagnetSection'
import Faq from './components/sections/FAQ'
import VisitUs from './components/sections/VisitUs'
import ContactMe from './components/sections/ContactMe'
import Footer from './components/sections/Footer'
import Testimonials from './components/sections/Testimonials'



function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const openContact = () => setIsContactOpen(true)

  return (
    <div className='app-container'>
      <Navbar
        isContactOpen={isContactOpen}
        onOpenContact={openContact}
        onCloseContact={() => setIsContactOpen(false)}
      ></Navbar>
      <Hero onOpenContact={openContact}></Hero>
      <WhatWeDo onOpenContact={openContact}></WhatWeDo>
      <WhatWeOffer onOpenContact={openContact}></WhatWeOffer>
      <Portfolio onOpenContact={openContact}></Portfolio>
      <Testimonials onOpenContact={openContact}></Testimonials>
      <Pricing onOpenContact={openContact}></Pricing>
      <LeadMagnetSection></LeadMagnetSection>
      <Faq onOpenContact={openContact}></Faq>
      <VisitUs onOpenContact={openContact}></VisitUs>
      <ContactMe onOpenContact={openContact}></ContactMe>
      <Footer onOpenModal={openContact}></Footer>
    </div>
  )
}

export default App
