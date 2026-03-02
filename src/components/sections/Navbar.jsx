import React, { useState, useEffect, useRef } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import logo from '../images/logo-white.png'
import { Facebook, Instagram, Linkedin, Twitter, X, Send, CheckCircle, User, Mail, MessageSquare, Phone, ChevronDown } from 'lucide-react'

// ── Brand tokens (mirrors your @theme CSS variables) ──────────────────
const C = {
  teal:      '#7A9299',  // --color-gfx-teal
  blue:      '#4A6572',  // --color-gfx-blue
  black:     '#0A0A08',  // --color-gfx-black
  deepBlack: '#16160F',  // --color-gfx-deep-black
  gray:      '#5A5955',  // --color-gfx-gray
  white:     '#FFFFFF',  // --color-gfx-white
}

/* ─── Contact Modal ─────────────────────────────────────────────────── */
const ContactModal = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm("xeolvgol") // 🔁 Replace with your Formspree form ID
  const [focused, setFocused] = useState(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  const services = [
    'LAUNCH – Single Page Website ($500)',
    'ELEVATE – Multi-Page Website ($1,000)',
    'GROWTH – Brand + Premium Website ($1,500)',
    'SCALE – Enterprise Brand System ($2,500+)',
    'Custom / Not Sure Yet',
  ]

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(10, 10, 8, 0.82)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'overlayIn 0.3s ease-out',
      }}
    >
      <style>{`
        @keyframes overlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(36px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes successPop {
          0%   { opacity: 0; transform: scale(0.8);  }
          60%  {             transform: scale(1.06); }
          100% { opacity: 1; transform: scale(1);    }
        }
        @keyframes shimmer-line {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-6px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }

        .modal-card {
          background: linear-gradient(
            135deg,
            rgba(22, 22, 15, 0.98) 0%,
            rgba(30, 30, 20, 0.98) 100%
          );
          border: 1px solid rgba(122, 146, 153, 0.25);
          border-radius: 24px;
          box-shadow:
            0 0 0 1px rgba(122, 146, 153, 0.06),
            0 32px 80px rgba(0, 0, 0, 0.75),
            0 0 60px rgba(122, 146, 153, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          animation: modalIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 560px;
          max-height: 92vh;
          overflow-y: auto;
        }
        .modal-card::-webkit-scrollbar       { width: 4px; }
        .modal-card::-webkit-scrollbar-track { background: transparent; }
        .modal-card::-webkit-scrollbar-thumb {
          background: rgba(122, 146, 153, 0.35);
          border-radius: 2px;
        }
        .modal-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent, #7A9299, #4A6572, #7A9299, transparent
          );
          background-size: 200% auto;
          animation: shimmer-line 3.5s linear infinite;
        }

        .gfx-input, .gfx-textarea, .gfx-select {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(122, 146, 153, 0.22);
          border-radius: 12px;
          color: rgba(255, 255, 255, 0.92);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          transition: all 0.3s ease;
          outline: none;
          box-sizing: border-box;
        }
        .gfx-input   { padding: 14px 16px 14px 44px; }
        .gfx-select  { padding: 14px 40px 14px 44px; appearance: none; cursor: pointer; }
        .gfx-textarea{ padding: 14px 16px 14px 44px; resize: vertical; min-height: 120px; }

        .gfx-input::placeholder,
        .gfx-textarea::placeholder { color: rgba(255, 255, 255, 0.28); }

        .gfx-input:focus,
        .gfx-textarea:focus,
        .gfx-select:focus {
          border-color: rgba(122, 146, 153, 0.65);
          background: rgba(122, 146, 153, 0.07);
          box-shadow:
            0 0 0 3px rgba(122, 146, 153, 0.12),
            0 4px 20px rgba(74, 101, 114, 0.1);
        }
        .gfx-select option {
          background: #16160F;
          color: #FFFFFF;
        }

        .field-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(122, 146, 153, 0.5);
          pointer-events: none;
          transition: color 0.3s;
          width: 18px;
          height: 18px;
        }
        .field-icon.textarea-icon { top: 16px; transform: none; }
        .field-wrapper:focus-within .field-icon { color: rgba(122, 146, 153, 0.95); }

        .label-text {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(122, 146, 153, 0.85);
          margin-bottom: 8px;
          display: block;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #7A9299 0%, #4A6572 100%);
          border: none;
          border-radius: 12px;
          padding: 16px;
          color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          letter-spacing: 0.3px;
        }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #8DAAB0 0%, #5A7A88 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .submit-btn:hover::before { opacity: 1; }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(74, 101, 114, 0.4);
        }
        .submit-btn:active  { transform: translateY(0); }
        .submit-btn:disabled{ opacity: 0.55; cursor: not-allowed; transform: none; }
        .submit-btn span    { position: relative; z-index: 1; }

        .close-btn {
          position: absolute;
          top: 16px; right: 16px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.55);
          transition: all 0.3s;
          z-index: 10;
        }
        .close-btn:hover {
          background: rgba(122, 146, 153, 0.18);
          border-color: rgba(122, 146, 153, 0.45);
          color: #FFFFFF;
          transform: rotate(90deg);
        }

        .error-text {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #cc7070;
          margin-top: 6px;
        }

        .success-container { animation: successPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .success-icon      { animation: float 2.5s ease-in-out infinite; }

        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <div className="modal-card">
        <div className="bg-glow" style={{ width: 200, height: 200, background: 'rgba(122,146,153,0.07)', top: -60, right: -60 }} />
        <div className="bg-glow" style={{ width: 160, height: 160, background: 'rgba(74,101,114,0.05)',  bottom: -40, left: -40 }} />

        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          <X size={16} />
        </button>

        <div style={{ padding: '40px 36px 36px', position: 'relative', zIndex: 1 }}>

          {state.succeeded ? (
            /* ── Success state ── */
            <div className="success-container" style={{ textAlign: 'center', padding: '20px 0 10px' }}>
              <div className="success-icon" style={{ marginBottom: 20 }}>
                <CheckCircle size={72} style={{ color: C.teal, margin: '0 auto' }} />
              </div>
              <h3 className="rajdhani-font" style={{ color: C.white, fontSize: 32, fontWeight: 700, marginBottom: 12 }}>
                Message Sent! 🚀
              </h3>
              <p className="inter-font" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.6, marginBottom: 8 }}>
                Thanks for reaching out! We'll get back to you within{' '}
                <span style={{ color: C.teal, fontWeight: 600 }}>24 hours</span>.
              </p>
              <p className="inter-font" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
                In the meantime, feel free to check out our portfolio.
              </p>
              <button
                onClick={onClose}
                className="inter-font"
                style={{
                  marginTop: 28,
                  background: 'rgba(122,146,153,0.12)',
                  border: '1px solid rgba(122,146,153,0.35)',
                  borderRadius: 10,
                  padding: '10px 28px',
                  color: C.teal,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(122,146,153,0.22)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(122,146,153,0.12)' }}
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <>
              <div style={{ marginBottom: 28 }}>
                <p className="inter-font" style={{ color: 'rgba(122,146,153,0.9)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 8 }}>
                  4700 GFX Studios
                </p>
                <h2 className="rajdhani-font" style={{ color: C.white, fontSize: 34, fontWeight: 700, lineHeight: 1.1, marginBottom: 10 }}>
                  Let's Build Something<br />
                  <span style={{ color: C.teal }}>Extraordinary</span>
                </h2>
                <p className="inter-font" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.5 }}>
                  Tell us about your project and we'll respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

                {/* Name + Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label className="label-text" htmlFor="name">Full Name</label>
                    <div className="field-wrapper" style={{ position: 'relative' }}>
                      <User className="field-icon" />
                      <input
                        id="name" type="text" name="name"
                        placeholder="John Doe" required
                        className="gfx-input"
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="error-text" />
                  </div>
                  <div>
                    <label className="label-text" htmlFor="phone">Phone (Optional)</label>
                    <div className="field-wrapper" style={{ position: 'relative' }}>
                      <Phone className="field-icon" />
                      <input
                        id="phone" type="tel" name="phone"
                        placeholder="(555) 000-0000"
                        className="gfx-input"
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="label-text" htmlFor="email">Email Address</label>
                  <div className="field-wrapper" style={{ position: 'relative' }}>
                    <Mail className="field-icon" />
                    <input
                      id="email" type="email" name="email"
                      placeholder="john@company.com" required
                      className="gfx-input"
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="error-text" />
                </div>

                {/* Package */}
                <div>
                  <label className="label-text" htmlFor="service">Interested Package</label>
                  <div className="field-wrapper" style={{ position: 'relative' }}>
                    <MessageSquare className="field-icon" />
                    <select
                      id="service" name="service" required
                      className="gfx-select" defaultValue=""
                    >
                      <option value="" disabled>Select a package...</option>
                      {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown style={{
                      position: 'absolute', right: 14, top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'rgba(122,146,153,0.55)',
                      pointerEvents: 'none', width: 16, height: 16,
                    }} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="label-text" htmlFor="message">Project Details</label>
                  <div className="field-wrapper" style={{ position: 'relative' }}>
                    <MessageSquare className="field-icon textarea-icon" />
                    <textarea
                      id="message" name="message" required
                      placeholder="Tell us about your project, goals, timeline, or any questions you have..."
                      className="gfx-textarea"
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="error-text" />
                </div>

                {/* Global error */}
                {state.errors && state.errors.length > 0 && (
                  <p className="error-text" style={{ textAlign: 'center' }}>
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="submit-btn"
                  style={{ marginTop: 4 }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    {state.submitting ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                          style={{ animation: 'spin 0.8s linear infinite' }}>
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </span>
                </button>

                <p className="inter-font" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, textAlign: 'center' }}>
                  🔒 Your info is safe with us. No spam, ever.
                </p>

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Navbar ─────────────────────────────────────────────────────────── */
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navItems = [
    { key: 'home',       name: 'Home',       sectionId: 'home'       },
    { key: 'whatWeDo',   name: 'What We Do', sectionId: 'whatWeDo'   },
    { key: 'portfolio',  name: 'Portfolio',  sectionId: 'portfolio'  },
    { key: 'pricing',    name: 'Pricing',    sectionId: 'pricing'    },
    { key: 'leadMagnet', name: 'Free Stuff', sectionId: 'leadMagnet' },
    { key: 'faq',        name: 'FAQs',       sectionId: 'faq'        },
  ]

  const socialLinks = [
    { icon: Facebook,  href: 'https://facebook.com',  label: 'Facebook'  },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter,   href: 'https://twitter.com',   label: 'Twitter'   },
    { icon: Linkedin,  href: 'https://linkedin.com',  label: 'LinkedIn'  },
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className='inter-font text-gfx-white flex flex-row justify-between items-center px-8 py-6'>
        <img className='h-auto w-32' src={logo} alt='gfx-logo' />

        <div className='navbar-container flex items-center'>
          <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-2 shadow-lg'>
            <ul className='flex flex-row gap-2 text-sm'>
              {navItems.map(tab => (
                <li
                  key={tab.key}
                  onClick={() => handleNavClick(tab.sectionId)}
                  className={`
                    relative px-5 py-2.5 rounded-full cursor-pointer
                    transition-all duration-300 ease-in-out font-medium inter-font
                    ${activeSection === tab.sectionId
                      ? 'bg-white/25 text-white shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/10'}
                    hover:scale-105 active:scale-95
                  `}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex items-center gap-4'>
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

          {/* Contact Us — opens modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className='bg-gfx-blue hover:bg-gfx-teal text-gfx-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'
          >
            Contact Us
          </button>
        </div>
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Navbar