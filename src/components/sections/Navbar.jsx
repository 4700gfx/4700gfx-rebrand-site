import React, { useState } from 'react'
import logo from '../images/logo-white.png'
import Button from '../common/Button'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    {key: 'home', name: 'Home', sectionId: 'home'},
    {key: 'whatWeDo', name: 'What We Do', sectionId: 'whatWeDo'},
    {key: 'portfolio', name: 'Portfolio', sectionId: 'portfolio'},
    {key: 'pricing', name: 'Pricing', sectionId: 'pricing'},
    {key: 'leadMagnet', name: 'Free Stuff', sectionId: 'leadMagnet'},
    {key: 'faq', name: 'FAQs', sectionId: 'faq'},  
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    // Smooth scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='inter-font text-gfx-white flex flex-row justify-between items-center px-8 py-6'>
      <img className='h-auto w-32' src={logo} alt='gfx-logo' />
      
      <div className='navbar-container flex items-center'>
        {/* Pill-shaped glass container */}
        <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-2 shadow-lg'>
          <ul className='flex flex-row gap-2 text-sm'>
            {navItems.map(tab => (
              <li 
                key={tab.key}
                onClick={() => handleNavClick(tab.sectionId)}
                className={`
                  relative px-5 py-2.5 rounded-full cursor-pointer
                  transition-all duration-300 ease-in-out
                  font-medium
                  inter-font
                  ${activeSection === tab.sectionId 
                    ? 'bg-white/25 text-white shadow-md' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                  }
                  hover:scale-105
                  active:scale-95
                `}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Social Icons and Button Container */}
      <div className='flex items-center gap-4'>
        {/* Social Media Icons */}
        <div className='flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2'>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className='text-white/70 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95'
            >
              <social.icon className='w-4 h-4' />
            </a>
          ))}
        </div>

        {/* Learn More Button */}
        <button className='bg-gfx-blue hover:bg-gfx-blue text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'>
          Contact Us
        </button>
      </div>
    </nav>
  )
}

export default Navbar