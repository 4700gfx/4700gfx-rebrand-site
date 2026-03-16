import React, { useState, useEffect, useRef } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import logo from '../images/logo-white.png'
import {
  Facebook, Instagram, Linkedin, Twitter, X, Send,
  CheckCircle, User, Mail, MessageSquare, Phone,
  ChevronDown, Menu,
} from 'lucide-react'

const C = {
  teal: '#7A9299', blue: '#4A6572', black: '#0A0A08', deepBlack: '#16160F', white: '#FFFFFF',
}

/* ─── Contact Modal ─────────────────────────────────────────────────── */
const ContactModal = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm('xeolvgol')
  const [focused, setFocused] = useState(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleOverlayClick = (e) => { if (e.target === overlayRef.current) onClose() }

  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
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
    <div ref={overlayRef} onClick={handleOverlayClick} style={{
      position:'fixed', inset:0, zIndex:9999,
      display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem',
      background:'rgba(10,10,8,0.87)', backdropFilter:'blur(10px)',
      WebkitBackdropFilter:'blur(10px)', animation:'overlayIn 0.3s ease-out',
    }}>
      <style>{`
        @keyframes overlayIn   { from{opacity:0}to{opacity:1} }
        @keyframes modalIn     { from{opacity:0;transform:translateY(40px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes successPop  { 0%{opacity:0;transform:scale(0.8)}60%{transform:scale(1.06)}100%{opacity:1;transform:scale(1)} }
        @keyframes shimmer-ln  { 0%{background-position:-200% center}100%{background-position:200% center} }
        @keyframes float-m     { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
        @keyframes spin-m      { from{transform:rotate(0deg)}to{transform:rotate(360deg)} }

        .modal-card {
          background:linear-gradient(135deg,rgba(22,22,15,0.98),rgba(30,30,20,0.98));
          border:1px solid rgba(122,146,153,0.25); border-radius:24px;
          box-shadow:0 0 0 1px rgba(122,146,153,0.06),0 32px 80px rgba(0,0,0,0.75),inset 0 1px 0 rgba(255,255,255,0.04);
          animation:modalIn 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards;
          position:relative; overflow:hidden; width:100%; max-width:560px; max-height:92vh; overflow-y:auto;
        }
        .modal-card::-webkit-scrollbar{width:4px}
        .modal-card::-webkit-scrollbar-track{background:transparent}
        .modal-card::-webkit-scrollbar-thumb{background:rgba(122,146,153,0.35);border-radius:2px}
        .modal-card::before{
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,#7A9299,#4A6572,#7A9299,transparent);
          background-size:200% auto; animation:shimmer-ln 3.5s linear infinite;
        }
        .gfx-input,.gfx-textarea,.gfx-select {
          width:100%; background:rgba(255,255,255,0.04);
          border:1px solid rgba(122,146,153,0.22); border-radius:12px;
          color:rgba(255,255,255,0.92); font-family:'Inter',sans-serif; font-size:14px;
          transition:all 0.3s; outline:none; box-sizing:border-box;
        }
        .gfx-input{padding:14px 16px 14px 44px}
        .gfx-select{padding:14px 40px 14px 44px;appearance:none;cursor:pointer}
        .gfx-textarea{padding:14px 16px 14px 44px;resize:vertical;min-height:120px}
        .gfx-input::placeholder,.gfx-textarea::placeholder{color:rgba(255,255,255,0.28)}
        .gfx-input:focus,.gfx-textarea:focus,.gfx-select:focus{
          border-color:rgba(122,146,153,0.65); background:rgba(122,146,153,0.07);
          box-shadow:0 0 0 3px rgba(122,146,153,0.12),0 4px 20px rgba(74,101,114,0.1);
        }
        .gfx-select option{background:#16160F;color:#FFFFFF}
        .field-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:rgba(122,146,153,0.5);pointer-events:none;transition:color 0.3s;width:18px;height:18px}
        .field-icon.textarea-icon{top:16px;transform:none}
        .field-wrapper:focus-within .field-icon{color:rgba(122,146,153,0.95)}
        .label-text{font-family:'Inter',sans-serif;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:rgba(122,146,153,0.85);margin-bottom:8px;display:block}
        .submit-btn{width:100%;background:linear-gradient(135deg,#7A9299,#4A6572);border:none;border-radius:12px;padding:16px;color:#FFF;font-family:'Inter',sans-serif;font-weight:700;font-size:15px;cursor:pointer;transition:all 0.3s;position:relative;overflow:hidden}
        .submit-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,#8DAAB0,#5A7A88);opacity:0;transition:opacity 0.3s}
        .submit-btn:hover::before{opacity:1}
        .submit-btn:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(74,101,114,0.4)}
        .submit-btn:disabled{opacity:0.55;cursor:not-allowed;transform:none}
        .submit-btn span{position:relative;z-index:1}
        .close-btn{position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:rgba(255,255,255,0.55);transition:all 0.3s;z-index:10}
        .close-btn:hover{background:rgba(122,146,153,0.18);border-color:rgba(122,146,153,0.45);color:#FFF;transform:rotate(90deg)}
        .error-text{font-family:'Inter',sans-serif;font-size:12px;color:#cc7070;margin-top:6px}
        .success-container{animation:successPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards}
        .success-icon{animation:float-m 2.5s ease-in-out infinite}
        .bg-glow-m{position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none;z-index:0}
      `}</style>

      <div className="modal-card">
        <div className="bg-glow-m" style={{width:200,height:200,background:'rgba(122,146,153,0.07)',top:-60,right:-60}} />
        <div className="bg-glow-m" style={{width:160,height:160,background:'rgba(74,101,114,0.05)',bottom:-40,left:-40}} />
        <button className="close-btn" onClick={onClose} aria-label="Close"><X size={16} /></button>

        <div style={{padding:'40px 36px 36px',position:'relative',zIndex:1}}>
          {state.succeeded ? (
            <div className="success-container" style={{textAlign:'center',padding:'20px 0 10px'}}>
              <div className="success-icon" style={{marginBottom:20}}><CheckCircle size={72} style={{color:C.teal,margin:'0 auto'}} /></div>
              <h3 className="rajdhani-font" style={{color:C.white,fontSize:32,fontWeight:700,marginBottom:12}}>Message Sent! 🚀</h3>
              <p className="inter-font" style={{color:'rgba(255,255,255,0.65)',fontSize:15,lineHeight:1.6,marginBottom:8}}>
                Thanks for reaching out! We'll get back to you within <span style={{color:C.teal,fontWeight:600}}>24 hours</span>.
              </p>
              <p className="inter-font" style={{color:'rgba(255,255,255,0.4)',fontSize:13}}>Feel free to check out our portfolio in the meantime.</p>
              <button onClick={onClose} className="inter-font"
                style={{marginTop:28,background:'rgba(122,146,153,0.12)',border:'1px solid rgba(122,146,153,0.35)',borderRadius:10,padding:'10px 28px',color:C.teal,fontWeight:600,fontSize:14,cursor:'pointer',transition:'all 0.3s'}}
                onMouseEnter={e=>e.currentTarget.style.background='rgba(122,146,153,0.22)'}
                onMouseLeave={e=>e.currentTarget.style.background='rgba(122,146,153,0.12)'}>
                Close
              </button>
            </div>
          ) : (
            <>
              <div style={{marginBottom:28}}>
                <p className="inter-font" style={{color:'rgba(122,146,153,0.9)',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'1.5px',marginBottom:8}}>4700 GFX Studios</p>
                <h2 className="rajdhani-font" style={{color:C.white,fontSize:34,fontWeight:700,lineHeight:1.1,marginBottom:10}}>
                  Let's Build Something<br /><span style={{color:C.teal}}>Extraordinary</span>
                </h2>
                <p className="inter-font" style={{color:'rgba(255,255,255,0.5)',fontSize:14,lineHeight:1.5}}>Tell us about your project and we'll respond within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:18}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
                  <div>
                    <label className="label-text" htmlFor="name">Full Name</label>
                    <div className="field-wrapper" style={{position:'relative'}}>
                      <User className="field-icon" />
                      <input id="name" type="text" name="name" placeholder="John Doe" required className="gfx-input" onFocus={()=>setFocused('name')} onBlur={()=>setFocused(null)} />
                    </div>
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="error-text" />
                  </div>
                  <div>
                    <label className="label-text" htmlFor="phone">Phone (Optional)</label>
                    <div className="field-wrapper" style={{position:'relative'}}>
                      <Phone className="field-icon" />
                      <input id="phone" type="tel" name="phone" placeholder="(555) 000-0000" className="gfx-input" onFocus={()=>setFocused('phone')} onBlur={()=>setFocused(null)} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="label-text" htmlFor="email">Email Address</label>
                  <div className="field-wrapper" style={{position:'relative'}}>
                    <Mail className="field-icon" />
                    <input id="email" type="email" name="email" placeholder="john@company.com" required className="gfx-input" onFocus={()=>setFocused('email')} onBlur={()=>setFocused(null)} />
                  </div>
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="error-text" />
                </div>

                <div>
                  <label className="label-text" htmlFor="service">Interested Package</label>
                  <div className="field-wrapper" style={{position:'relative'}}>
                    <MessageSquare className="field-icon" />
                    <select id="service" name="service" required className="gfx-select" defaultValue="">
                      <option value="" disabled>Select a package...</option>
                      {services.map((s,i)=><option key={i} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown style={{position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',color:'rgba(122,146,153,0.55)',pointerEvents:'none',width:16,height:16}} />
                  </div>
                </div>

                <div>
                  <label className="label-text" htmlFor="message">Project Details</label>
                  <div className="field-wrapper" style={{position:'relative'}}>
                    <MessageSquare className="field-icon textarea-icon" />
                    <textarea id="message" name="message" required className="gfx-textarea"
                      placeholder="Tell us about your project, goals, timeline, or any questions..."
                      onFocus={()=>setFocused('message')} onBlur={()=>setFocused(null)} />
                  </div>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="error-text" />
                </div>

                {state.errors?.length > 0 && <p className="error-text" style={{textAlign:'center'}}>Something went wrong. Please try again.</p>}

                <button type="submit" disabled={state.submitting} className="submit-btn" style={{marginTop:4}}>
                  <span style={{display:'flex',alignItems:'center',justifyContent:'center',gap:10}}>
                    {state.submitting ? (
                      <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{animation:'spin-m 0.8s linear infinite'}}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Sending...</>
                    ) : <><Send size={18}/>Send Message</>}
                  </span>
                </button>

                <p className="inter-font" style={{color:'rgba(255,255,255,0.3)',fontSize:12,textAlign:'center'}}>🔒 Your info is safe with us. No spam, ever.</p>
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
  const [isModalOpen,   setIsModalOpen]   = useState(false)
  const [scrolled,      setScrolled]      = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const indicatorRef = useRef(null)
  const itemRefs     = useRef({})

  const navItems = [
    { key:'home',       name:'Home',       sectionId:'home'       },
    { key:'whatWeDo',   name:'What We Do', sectionId:'whatWeDo'   },
    { key:'portfolio',  name:'Portfolio',  sectionId:'portfolio'  },
    { key:'pricing',    name:'Pricing',    sectionId:'pricing'    },
    { key:'leadMagnet', name:'Free Stuff', sectionId:'leadMagnet' },
    { key:'faq',        name:'FAQs',       sectionId:'faq'        },
  ]

  const socialLinks = [
    { icon:Facebook,  href:'https://facebook.com',  label:'Facebook'  },
    { icon:Instagram, href:'https://instagram.com', label:'Instagram' },
    { icon:Twitter,   href:'https://twitter.com',   label:'Twitter'   },
    { icon:Linkedin,  href:'https://linkedin.com',  label:'LinkedIn'  },
  ]

  // Scroll detection
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // IntersectionObserver — highlight active section
  useEffect(() => {
    const observers = []
    navItems.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(sectionId) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Slide the pill indicator to the active item
  useEffect(() => {
    const el  = itemRefs.current[activeSection]
    const bar = indicatorRef.current
    if (!el || !bar) return
    const r = el.getBoundingClientRect()
    const p = el.parentElement.getBoundingClientRect()
    bar.style.left  = `${r.left - p.left}px`
    bar.style.width = `${r.width}px`
  }, [activeSection])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setMobileOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior:'smooth', block:'start' })
  }

  return (
    <>
      <style>{`
        @keyframes nav-enter   { from{opacity:0;transform:translateY(-24px)}to{opacity:1;transform:translateY(0)} }
        @keyframes logo-enter  { from{opacity:0;transform:translateX(-20px) scale(0.9)}to{opacity:1;transform:translateX(0) scale(1)} }
        @keyframes items-enter { from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)} }
        @keyframes right-enter { from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)} }
        @keyframes sh-banner   { 0%{background-position:-200% center}100%{background-position:200% center} }
        @keyframes ping-nav    { 0%{transform:scale(1);opacity:0.9}70%{transform:scale(1.9);opacity:0}100%{transform:scale(1.9);opacity:0} }
        @keyframes mob-drop    { from{opacity:0;transform:translateY(-14px) scaleY(0.92)}to{opacity:1;transform:translateY(0) scaleY(1)} }

        /* Banner */
        .nav-banner {
          background:linear-gradient(90deg,#4A6572,#7A9299,#4A6572);
          background-size:200% auto;
          animation:sh-banner 5s linear infinite;
          text-align:center; padding:8px 16px;
          font-family:'Inter',sans-serif; font-size:12px; font-weight:600;
          color:#fff; letter-spacing:0.3px;
        }

        /* Shell */
        .nav-shell {
          display:flex; align-items:center; justify-content:space-between;
          padding:14px 32px; position:sticky; top:0; z-index:1000;
          animation:nav-enter 0.70s cubic-bezier(0.34,1.4,0.64,1) both;
          transition:background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .nav-shell.scrolled {
          background:rgba(10,10,8,0.88) !important;
          backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px);
          border-bottom:1px solid rgba(122,146,153,0.16);
          box-shadow:0 8px 32px rgba(0,0,0,0.38);
        }

        /* Logo */
        .nav-logo {
          animation:logo-enter 0.80s cubic-bezier(0.34,1.4,0.64,1) 0.1s both;
          transition:transform 0.35s ease, filter 0.35s ease;
          cursor:pointer;
        }
        .nav-logo:hover { transform:scale(1.06); filter:brightness(1.15) drop-shadow(0 0 10px rgba(122,146,153,0.45)); }

        /* Pill nav */
        .nav-pill {
          position:relative;
          background:rgba(255,255,255,0.06);
          backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
          border:1px solid rgba(255,255,255,0.13);
          border-radius:50px; padding:5px;
          animation:items-enter 0.80s cubic-bezier(0.34,1.2,0.64,1) 0.2s both;
          transition:border-color 0.4s, background 0.4s;
        }
        .scrolled .nav-pill { background:rgba(122,146,153,0.08); border-color:rgba(122,146,153,0.22); }

        /* Sliding pill indicator */
        .nav-indicator {
          position:absolute; top:5px; bottom:5px;
          background:linear-gradient(135deg,#7A9299,#4A6572);
          border-radius:50px; pointer-events:none; z-index:0;
          transition:left 0.38s cubic-bezier(0.34,1.2,0.64,1), width 0.38s cubic-bezier(0.34,1.2,0.64,1);
          box-shadow:0 4px 16px rgba(74,101,114,0.38);
        }

        /* Nav items */
        .nav-item {
          position:relative; z-index:1;
          padding:9px 18px; border-radius:50px; cursor:pointer;
          font-family:'Inter',sans-serif; font-size:13.5px; font-weight:500;
          letter-spacing:0.01em; white-space:nowrap; user-select:none;
          transition:color 0.25s ease; list-style:none;
        }
        .nav-item.is-active   { color:#ffffff; font-weight:650; }
        .nav-item:not(.is-active) { color:rgba(255,255,255,0.62); }
        .nav-item:hover:not(.is-active) { color:rgba(255,255,255,0.90); }

        /* Right cluster */
        .social-cluster {
          background:rgba(255,255,255,0.06);
          border:1px solid rgba(255,255,255,0.13);
          border-radius:50px; padding:7px 14px;
          display:flex; align-items:center; gap:14px;
          animation:right-enter 0.80s cubic-bezier(0.34,1.2,0.64,1) 0.25s both;
          transition:border-color 0.4s, background 0.4s;
        }
        .scrolled .social-cluster { background:rgba(122,146,153,0.08); border-color:rgba(122,146,153,0.22); }
        .soc-icon { color:rgba(255,255,255,0.58); transition:all 0.28s cubic-bezier(0.34,1.4,0.64,1); }
        .soc-icon:hover { color:#7A9299; transform:scale(1.22) translateY(-2px); }

        /* Contact button */
        .contact-btn {
          background:linear-gradient(135deg,#7A9299,#4A6572);
          border:none; border-radius:50px; padding:10px 22px;
          color:#fff; font-family:'Inter',sans-serif;
          font-size:13.5px; font-weight:700; cursor:pointer;
          position:relative; overflow:hidden;
          transition:all 0.35s ease;
          animation:right-enter 0.80s cubic-bezier(0.34,1.2,0.64,1) 0.3s both;
          box-shadow:0 4px 20px rgba(74,101,114,0.32);
        }
        .contact-btn::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.14),transparent);opacity:0;transition:opacity 0.3s}
        .contact-btn:hover::after{opacity:1}
        .contact-btn:hover{transform:translateY(-2px) scale(1.05);box-shadow:0 10px 32px rgba(74,101,114,0.52)}
        .contact-btn span{position:relative;z-index:1}

        /* Status dot */
        .status-dot { width:7px; height:7px; background:#4ade80; border-radius:50%; position:relative; display:inline-block; vertical-align:middle; }
        .status-dot::before { content:''; position:absolute; inset:0; border-radius:50%; background:#4ade80; animation:ping-nav 1.8s ease-out infinite; }

        /* Hamburger */
        .menu-btn {
          background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.14);
          border-radius:12px; padding:9px; color:rgba(255,255,255,0.78);
          cursor:pointer; transition:all 0.3s; display:none; align-items:center; justify-content:center;
        }
        .menu-btn:hover{background:rgba(122,146,153,0.16);border-color:rgba(122,146,153,0.40);color:#fff}

        /* Mobile drawer */
        .mob-drawer {
          animation:mob-drop 0.38s cubic-bezier(0.34,1.2,0.64,1) both;
          background:rgba(10,10,8,0.96); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px);
          border:1px solid rgba(122,146,153,0.18); border-radius:20px;
          margin:0 16px; transform-origin:top center;
        }
        .mob-item {
          padding:13px 18px; color:rgba(255,255,255,0.68);
          font-family:'Inter',sans-serif; font-size:15px; font-weight:500;
          border-radius:12px; cursor:pointer; display:flex; align-items:center; gap:10px;
          transition:all 0.25s ease;
        }
        .mob-item:hover{color:#fff;background:rgba(122,146,153,0.10)}
        .mob-item.mob-active{color:#fff;background:rgba(122,146,153,0.16);font-weight:700}
        .mob-dot{width:6px;height:6px;border-radius:50%;background:rgba(122,146,153,0.45);flex-shrink:0}
        .mob-active .mob-dot{background:#7A9299}

        /* Responsive */
        @media(max-width:900px){.nav-desktop{display:none!important}.menu-btn{display:flex!important}}
        @media(min-width:901px){.mob-drawer-wrap{display:none!important}}
      `}</style>

      {/* ── Announcement banner ── */}
      <div className="nav-banner">
        <span className="status-dot" style={{marginRight:8}} />
        Now booking projects for Q2 2025 — limited slots available &nbsp;·&nbsp;
        <button onClick={() => setIsModalOpen(true)}
          style={{textDecoration:'underline',background:'none',border:'none',color:'#fff',cursor:'pointer',fontWeight:700,fontSize:12,fontFamily:'Inter,sans-serif'}}>
          Claim your spot →
        </button>
      </div>

      {/* ── Main nav ── */}
      <nav className={`nav-shell ${scrolled ? 'scrolled' : ''}`}>

        {/* Logo */}
        <img className="nav-logo" src={logo} alt="4700 GFX Studios" style={{height:'auto',width:120}}
          onClick={() => handleNavClick('home')} />

        {/* Desktop pill */}
        <div className="nav-desktop" style={{display:'flex',alignItems:'center'}}>
          <div className="nav-pill">
            <div ref={indicatorRef} className="nav-indicator" style={{left:0,width:80}} />
            <ul style={{display:'flex',gap:2,listStyle:'none',margin:0,padding:0,position:'relative'}}>
              {navItems.map(tab => (
                <li
                  key={tab.key}
                  ref={el => itemRefs.current[tab.sectionId] = el}
                  onClick={() => handleNavClick(tab.sectionId)}
                  className={`nav-item ${activeSection === tab.sectionId ? 'is-active' : ''}`}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop right */}
        <div className="nav-desktop" style={{display:'flex',alignItems:'center',gap:10}}>
          <div className="social-cluster">
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="soc-icon">
                <s.icon style={{width:15,height:15}} />
              </a>
            ))}
          </div>
          <button className="contact-btn" onClick={() => setIsModalOpen(true)}>
            <span>Contact Us</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="menu-btn" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
          {mobileOpen ? <X style={{width:18,height:18}} /> : <Menu style={{width:18,height:18}} />}
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="mob-drawer-wrap" style={{position:'sticky',top:66,zIndex:999}}>
          <div className="mob-drawer">
            <div style={{padding:'10px'}}>
              {navItems.map(tab => (
                <div key={tab.key} onClick={() => handleNavClick(tab.sectionId)}
                  className={`mob-item ${activeSection === tab.sectionId ? 'mob-active' : ''}`}>
                  <span className="mob-dot" />
                  {tab.name}
                </div>
              ))}
              <div style={{padding:'10px 18px 6px',display:'flex',alignItems:'center',gap:12,borderTop:'1px solid rgba(122,146,153,0.12)',marginTop:8}}>
                {socialLinks.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    style={{color:'rgba(255,255,255,0.50)',transition:'color 0.3s'}}
                    onMouseEnter={e=>e.currentTarget.style.color='#7A9299'}
                    onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.50)'}>
                    <s.icon style={{width:16,height:16}} />
                  </a>
                ))}
                <button className="contact-btn" onClick={() => { setIsModalOpen(true); setMobileOpen(false) }}
                  style={{marginLeft:'auto',padding:'8px 18px',fontSize:13}}>
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Navbar