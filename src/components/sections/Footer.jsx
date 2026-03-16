import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../images/logo-white.png';
import {
  Mail, Phone, MapPin,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Send, ArrowUp, Heart, ExternalLink,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const footerLinks = {
  services: [
    { name:'Web Design',         href:'#', sectionId:null        },
    { name:'Brand Identity',     href:'#', sectionId:null        },
    { name:'UI/UX Design',       href:'#', sectionId:'whatWeDo'  },
    { name:'E-Commerce',         href:'#', sectionId:'whatWeDo'  },
    { name:'SEO Services',       href:'#', sectionId:'whatWeDo'  },
    { name:'Performance Opt.',   href:'#', sectionId:'whatWeDo'  },
  ],
  company: [
    { name:'Portfolio',     href:'#', sectionId:'portfolio'  },
    { name:'Our Process',   href:'#', sectionId:'whatWeDo'   },
    { name:'Pricing',       href:'#', sectionId:'pricing'    },
    { name:'Testimonials',  href:'#', sectionId:null         },
    { name:'FAQs',          href:'#', sectionId:'faq'        },
    { name:'Visit Us',      href:'#', sectionId:'visitUs'    },
  ],
  resources: [
    { name:'Free Stuff',       href:'#', sectionId:'leadMagnet' },
    { name:'Brand Guidelines', href:'#', sectionId:null         },
    { name:'Free Templates',   href:'#', sectionId:'leadMagnet' },
    { name:'Design Tools',     href:'#', sectionId:null         },
    { name:'Support Center',   href:'#', sectionId:'faq'        },
    { name:'Contact Us',       href:'#', sectionId:null, openModal:true },
  ],
  legal: [
    { name:'Privacy Policy',   href:'#' },
    { name:'Terms of Service', href:'#' },
    { name:'Cookie Policy',    href:'#' },
    { name:'GDPR Compliance',  href:'#' },
  ],
};

const socialLinks = [
  { Icon:Facebook,  href:'https://facebook.com',  label:'Facebook'  },
  { Icon:Twitter,   href:'https://twitter.com',   label:'Twitter'   },
  { Icon:Instagram, href:'https://instagram.com', label:'Instagram' },
  { Icon:Linkedin,  href:'https://linkedin.com',  label:'LinkedIn'  },
  { Icon:Youtube,   href:'https://youtube.com',   label:'YouTube'   },
];

const contactDetails = [
  { Icon:Mail,   value:'hello@4700gfx.com',   href:'mailto:hello@4700gfx.com' },
  { Icon:Phone,  value:'(555) 123-4567',       href:'tel:+15551234567'         },
  { Icon:MapPin, value:'Hollywood, Florida, US', href:null                    },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
const Footer = ({ onOpenModal }) => {
  const [email,      setEmail]      = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showTop,    setShowTop]    = useState(false);

  const footerRef    = useRef(null);
  const brandRef     = useRef(null);
  const col1Ref      = useRef(null);
  const col2Ref      = useRef(null);
  const col3Ref      = useRef(null);
  const newsRef      = useRef(null);
  const dividerRef   = useRef(null);
  const bottomRef    = useRef(null);
  const extraBarRef  = useRef(null);

  // ── Show scroll-to-top when past fold ──────────────────────────────
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollToTop = () => window.scrollTo({ top:0, behavior:'smooth' })

  const handleNavLink = (sectionId, openModal) => {
    if (openModal && onOpenModal) { onOpenModal(); return; }
    if (!sectionId) return;
    document.getElementById(sectionId)?.scrollIntoView({ behavior:'smooth', block:'start' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setTimeout(() => { setSubscribed(false); setEmail('') }, 3500)
  }

  // ── GSAP ──────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Brand column slides up
      gsap.fromTo(brandRef.current,
        { y: 50, opacity:0 },
        { y:0, opacity:1, duration:0.85, ease:'power3.out',
          scrollTrigger:{ trigger:brandRef.current, start:'top 88%', toggleActions:'play none none none' } }
      );

      // Link columns fan in with stagger
      [col1Ref, col2Ref, col3Ref].forEach((r, i) => {
        gsap.fromTo(r.current,
          { y:50, opacity:0 },
          { y:0, opacity:1, duration:0.75, ease:'power3.out', delay: i * 0.08,
            scrollTrigger:{ trigger:r.current, start:'top 88%', toggleActions:'play none none none' } }
        );
        // Stagger inner list items
        const items = r.current?.querySelectorAll('.foot-link-item')
        if (items?.length) {
          gsap.fromTo(items,
            { x:-12, opacity:0 },
            { x:0, opacity:1, duration:0.45, stagger:0.06, ease:'power2.out', delay: i * 0.08 + 0.15,
              scrollTrigger:{ trigger:r.current, start:'top 88%', toggleActions:'play none none none' } }
          )
        }
      });

      // Newsletter block
      gsap.fromTo(newsRef.current,
        { y:50, opacity:0 },
        { y:0, opacity:1, duration:0.75, ease:'power3.out', delay:0.24,
          scrollTrigger:{ trigger:newsRef.current, start:'top 88%', toggleActions:'play none none none' } }
      );

      // Divider scales in
      gsap.fromTo(dividerRef.current,
        { scaleX:0, opacity:0 },
        { scaleX:1, opacity:1, duration:0.80, ease:'power2.out', transformOrigin:'center',
          scrollTrigger:{ trigger:dividerRef.current, start:'top 92%', toggleActions:'play none none none' } }
      );

      // Bottom bar fades up
      gsap.fromTo(bottomRef.current,
        { y:24, opacity:0 },
        { y:0, opacity:1, duration:0.65, ease:'power2.out',
          scrollTrigger:{ trigger:bottomRef.current, start:'top 94%', toggleActions:'play none none none' } }
      );

      // Extra bar
      gsap.fromTo(extraBarRef.current,
        { y:18, opacity:0 },
        { y:0, opacity:1, duration:0.60, ease:'power2.out',
          scrollTrigger:{ trigger:extraBarRef.current, start:'top 96%', toggleActions:'play none none none' } }
      );

      // Social icons bounce in
      const socIcons = footerRef.current?.querySelectorAll('.foot-social')
      if (socIcons?.length) {
        gsap.fromTo(socIcons,
          { scale:0, opacity:0 },
          { scale:1, opacity:1, duration:0.50, stagger:0.07, ease:'back.out(1.8)',
            scrollTrigger:{ trigger:brandRef.current, start:'top 88%', toggleActions:'play none none none' } }
        )
      }

    }, footerRef);
    return () => ctx.revert();
  }, []);

  // ─────────────────────────────────────────────────────────────────
  return (
    <footer ref={footerRef} className="relative overflow-hidden" style={{ background:'linear-gradient(to bottom, #0A0A08, #16160F)' }}>
      <style>{`
        @keyframes sh-foot {
          0%  {background-position:-200% center}
          100%{background-position: 200% center}
        }
        @keyframes pulse-heart {
          0%,100%{transform:scale(1)}
          50%{transform:scale(1.25)}
        }
        @keyframes top-btn-in {
          from{opacity:0;transform:translateY(12px) scale(0.85)}
          to  {opacity:1;transform:translateY(0) scale(1)}
        }
        @keyframes float-top {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-4px)}
        }
        @keyframes ping-foot {
          0%  {transform:scale(1);   opacity:0.7}
          70% {transform:scale(1.9); opacity:0}
          100%{transform:scale(1.9); opacity:0}
        }

        /* Footer orbs */
        .foot-orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(72px); }

        /* Grid */
        .foot-grid {
          display:grid;
          grid-template-columns: 1.7fr 1fr 1fr 1fr 1.5fr;
          gap:40px;
        }
        @media(max-width:1100px){.foot-grid{grid-template-columns:1fr 1fr;}}
        @media(max-width:640px) {.foot-grid{grid-template-columns:1fr;}}

        /* Section headers */
        .foot-col-head {
          font-family:'Rajdhani',sans-serif;
          font-size:13px; font-weight:700;
          text-transform:uppercase; letter-spacing:2px;
          color:rgba(122,146,153,0.85);
          margin-bottom:20px;
          position:relative; display:inline-block;
        }
        .foot-col-head::after {
          content:''; position:absolute;
          bottom:-6px; left:0;
          width:100%; height:1px;
          background:linear-gradient(90deg,#7A9299,transparent);
        }

        /* Footer links */
        .foot-link {
          font-family:'Inter',sans-serif;
          font-size:13.5px; color:rgba(255,255,255,0.58);
          text-decoration:none; display:inline-flex; align-items:center; gap:6px;
          transition:all 0.28s ease; position:relative; padding-bottom:1px;
        }
        .foot-link::after {
          content:''; position:absolute; bottom:0; left:0;
          width:0; height:1px;
          background:linear-gradient(90deg,#7A9299,#4A6572);
          transition:width 0.28s ease;
        }
        .foot-link:hover { color:#7A9299; transform:translateX(4px); }
        .foot-link:hover::after { width:100%; }

        /* Social icons */
        .foot-social {
          width:38px; height:38px; border-radius:10px;
          display:flex; align-items:center; justify-content:center;
          background:rgba(122,146,153,0.09);
          border:1px solid rgba(122,146,153,0.18);
          color:rgba(255,255,255,0.65);
          transition:all 0.30s cubic-bezier(0.34,1.4,0.64,1);
        }
        .foot-social:hover {
          background:linear-gradient(135deg,#7A9299,#4A6572);
          border-color:transparent;
          color:#fff;
          transform:translateY(-5px) scale(1.08);
          box-shadow:0 10px 28px rgba(74,101,114,0.45);
        }

        /* Contact rows */
        .foot-contact-row {
          display:flex; align-items:center; gap:10px;
          padding:8px 10px; border-radius:10px;
          transition:background 0.25s, transform 0.25s;
          text-decoration:none;
        }
        .foot-contact-row:hover { background:rgba(122,146,153,0.08); transform:translateX(4px); }
        .foot-contact-icon {
          width:32px; height:32px; border-radius:8px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          background:rgba(122,146,153,0.10);
          border:1px solid rgba(122,146,153,0.18);
        }

        /* Newsletter input */
        .news-input {
          width:100%; padding:11px 14px;
          background:rgba(122,146,153,0.07);
          border:1px solid rgba(122,146,153,0.20);
          border-radius:10px; color:#fff;
          font-family:'Inter',sans-serif; font-size:13.5px;
          transition:all 0.3s; outline:none; box-sizing:border-box;
        }
        .news-input::placeholder { color:rgba(255,255,255,0.30); }
        .news-input:focus {
          border-color:rgba(122,146,153,0.55);
          background:rgba(122,146,153,0.13);
          box-shadow:0 0 0 3px rgba(122,146,153,0.10);
        }

        /* Newsletter submit */
        .news-btn {
          width:100%; padding:11px 14px;
          background:linear-gradient(135deg,#7A9299,#4A6572);
          border:none; border-radius:10px;
          color:#fff; font-family:'Inter',sans-serif;
          font-weight:700; font-size:13.5px; cursor:pointer;
          display:flex; align-items:center; justify-content:center; gap:8px;
          transition:all 0.3s; position:relative; overflow:hidden;
        }
        .news-btn::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.10),transparent);opacity:0;transition:opacity 0.3s}
        .news-btn:hover::after{opacity:1}
        .news-btn:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(74,101,114,0.45)}
        .news-btn.subbed{background:linear-gradient(135deg,#22c55e,#16a34a)}

        /* Divider */
        .foot-divider {
          height:1px;
          background:linear-gradient(90deg,transparent,rgba(122,146,153,0.30),transparent);
        }

        /* Logo text */
        .foot-logo-text {
          font-family:'Rajdhani',sans-serif;
          font-size:52px; font-weight:700; line-height:1;
          background:linear-gradient(90deg,#7A9299 0%,#fff 40%,#4A6572 70%,#7A9299 100%);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:sh-foot 5s linear infinite;
        }

        /* Heart */
        .heart-beat { display:inline-block; transition:color 0.3s; }
        .heart-beat:hover { animation:pulse-heart 0.6s ease-in-out; color:#f87171; }

        /* Scroll-to-top */
        .scroll-top {
          position:fixed; bottom:28px; right:28px; z-index:998;
          width:46px; height:46px; border-radius:50%;
          background:linear-gradient(135deg,#7A9299,#4A6572);
          border:none; cursor:pointer; color:#fff;
          display:flex; align-items:center; justify-content:center;
          box-shadow:0 8px 28px rgba(74,101,114,0.50);
          animation:top-btn-in 0.4s cubic-bezier(0.34,1.4,0.64,1) both, float-top 3s ease-in-out 0.5s infinite;
          transition:box-shadow 0.3s;
        }
        .scroll-top:hover{box-shadow:0 14px 40px rgba(74,101,114,0.65)}

        /* Badge row */
        .cert-badge {
          height:22px; opacity:0.55; transition:opacity 0.3s; filter:brightness(0.7) saturate(0.5);
        }
        .cert-badge:hover{opacity:0.90;filter:brightness(1) saturate(1)}
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="foot-orb w-[480px] h-[480px]" style={{top:0,left:'20%',background:'radial-gradient(circle,rgba(122,146,153,0.09) 0%,transparent 70%)'}} />
        <div className="foot-orb w-[360px] h-[360px]" style={{bottom:0,right:'18%',background:'radial-gradient(circle,rgba(74,101,114,0.08) 0%,transparent 70%)'}} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{backgroundImage:`linear-gradient(rgba(122,146,153,1) 1px,transparent 1px),linear-gradient(90deg,rgba(122,146,153,1) 1px,transparent 1px)`,backgroundSize:'80px 80px'}} />
      </div>

      <div className="relative z-10">
        {/* ── Main content ── */}
        <div style={{maxWidth:1280,margin:'0 auto',padding:'80px 5% 60px'}}>
          <div className="foot-grid">

            {/* ── Brand ── */}
            <div ref={brandRef}>
              <div style={{marginBottom:20}}>
                <span className="foot-logo-text">4700 GFX</span>
                <p className="inter-font" style={{color:'rgba(122,146,153,0.75)',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'3px',marginTop:2}}>Studios</p>
              </div>

              <p className="inter-font" style={{color:'rgba(255,255,255,0.55)',fontSize:13.5,lineHeight:1.7,marginBottom:20,maxWidth:300}}>
                Transforming businesses through custom design and development. We build digital experiences that convert visitors into loyal customers.
              </p>

              {/* Contact details */}
              <div style={{marginBottom:20}}>
                {contactDetails.map((c, i) => (
                  c.href ? (
                    <a key={i} href={c.href} className="foot-contact-row"
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer">
                      <div className="foot-contact-icon"><c.Icon style={{width:14,height:14,color:'#7A9299'}} /></div>
                      <span className="inter-font" style={{color:'rgba(255,255,255,0.62)',fontSize:13}}>{c.value}</span>
                    </a>
                  ) : (
                    <div key={i} className="foot-contact-row" style={{cursor:'default'}}>
                      <div className="foot-contact-icon"><c.Icon style={{width:14,height:14,color:'#7A9299'}} /></div>
                      <span className="inter-font" style={{color:'rgba(255,255,255,0.62)',fontSize:13}}>{c.value}</span>
                    </div>
                  )
                ))}
              </div>

              {/* Social */}
              <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
                {socialLinks.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label} className="foot-social">
                    <s.Icon style={{width:16,height:16}} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Services ── */}
            <div ref={col1Ref}>
              <p className="foot-col-head">Services</p>
              <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:10}}>
                {footerLinks.services.map(l => (
                  <li key={l.name} className="foot-link-item">
                    <button onClick={() => handleNavLink(l.sectionId, l.openModal)}
                      className="foot-link" style={{background:'none',border:'none',cursor:l.sectionId?'pointer':'default',textAlign:'left',padding:0}}>
                      {l.name}
                      {l.sectionId && <ExternalLink style={{width:10,height:10,opacity:0.4}} />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Company ── */}
            <div ref={col2Ref}>
              <p className="foot-col-head">Company</p>
              <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:10}}>
                {footerLinks.company.map(l => (
                  <li key={l.name} className="foot-link-item">
                    <button onClick={() => handleNavLink(l.sectionId, l.openModal)}
                      className="foot-link" style={{background:'none',border:'none',cursor:l.sectionId?'pointer':'default',textAlign:'left',padding:0}}>
                      {l.name}
                      {l.sectionId && <ExternalLink style={{width:10,height:10,opacity:0.4}} />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Resources ── */}
            <div ref={col3Ref}>
              <p className="foot-col-head">Resources</p>
              <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:10}}>
                {footerLinks.resources.map(l => (
                  <li key={l.name} className="foot-link-item">
                    <button onClick={() => handleNavLink(l.sectionId, l.openModal)}
                      className="foot-link" style={{background:'none',border:'none',cursor:'pointer',textAlign:'left',padding:0}}>
                      {l.name}
                      {l.sectionId && <ExternalLink style={{width:10,height:10,opacity:0.4}} />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Newsletter ── */}
            <div ref={newsRef}>
              <p className="foot-col-head">Newsletter</p>
              <p className="inter-font" style={{color:'rgba(255,255,255,0.52)',fontSize:13,lineHeight:1.65,marginBottom:16}}>
                Design tips, insights, and exclusive project showcases — delivered monthly.
              </p>

              <form onSubmit={handleSubscribe} style={{display:'flex',flexDirection:'column',gap:10}}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email" required className="news-input" />
                <button type="submit" disabled={subscribed} className={`news-btn${subscribed?' subbed':''}`}>
                  {subscribed ? <>✓ Subscribed!</> : <><Send style={{width:14,height:14}} /> Subscribe</>}
                </button>
              </form>

              <p className="inter-font" style={{color:'rgba(255,255,255,0.30)',fontSize:11,marginTop:10}}>
                We respect your privacy. Unsubscribe anytime.
              </p>

              {/* Availability indicator */}
              <div style={{marginTop:20,padding:'12px 14px',borderRadius:12,background:'rgba(122,146,153,0.07)',border:'1px solid rgba(122,146,153,0.18)',display:'flex',alignItems:'center',gap:10}}>
                <span style={{width:8,height:8,background:'#4ade80',borderRadius:'50%',flexShrink:0,position:'relative',display:'inline-block'}}>
                  <span style={{position:'absolute',inset:0,borderRadius:'50%',background:'#4ade80',animation:'ping-foot 1.8s ease-out infinite'}} />
                </span>
                <span className="inter-font" style={{color:'rgba(255,255,255,0.60)',fontSize:12}}>
                  Currently accepting new projects
                </span>
              </div>
            </div>

          </div>

          {/* ── Divider ── */}
          <div ref={dividerRef} className="foot-divider" style={{margin:'52px 0 36px'}} />

          {/* ── Bottom bar ── */}
          <div ref={bottomRef} style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:16}}>
            <div className="inter-font" style={{color:'rgba(255,255,255,0.45)',fontSize:12.5}}>
              © {new Date().getFullYear()} 4700 GFX Studios. All rights reserved.
              <span style={{margin:'0 8px',opacity:0.4}}>·</span>
              Made with{' '}
              <span className="heart-beat" style={{color:'#f87171'}}><Heart style={{display:'inline',width:13,height:13,verticalAlign:'middle',fill:'currentColor'}} /></span>
              {' '}in Hollywood, FL
            </div>

            <div style={{display:'flex',alignItems:'center',gap:20,flexWrap:'wrap'}}>
              {footerLinks.legal.map((l, i) => (
                <React.Fragment key={l.name}>
                  <a href={l.href} className="inter-font" style={{color:'rgba(255,255,255,0.40)',fontSize:12,textDecoration:'none',transition:'color 0.3s'}}
                    onMouseEnter={e=>e.currentTarget.style.color='#7A9299'}
                    onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.40)'}>
                    {l.name}
                  </a>
                  {i < footerLinks.legal.length - 1 && <span style={{color:'rgba(255,255,255,0.18)',fontSize:10}}>•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── Extra bar ── */}
        <div ref={extraBarRef} style={{borderTop:'1px solid rgba(122,146,153,0.10)',padding:'16px 5%'}}>
          <div style={{maxWidth:1280,margin:'0 auto',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:12}}>
            <p className="inter-font" style={{color:'rgba(255,255,255,0.35)',fontSize:11}}>
              Certified Minority Business Enterprise (MBE) &nbsp;·&nbsp; Woman-Owned Business &nbsp;·&nbsp; LGBTQ+ Friendly
            </p>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              {['SSL', 'GDPR'].map(badge => (
                <div key={badge} className="cert-badge" style={{
                  padding:'4px 10px',borderRadius:6,
                  background:'rgba(74,101,114,0.35)',
                  border:'1px solid rgba(122,146,153,0.22)',
                  display:'flex',alignItems:'center',
                }}>
                  <span className="inter-font" style={{color:'rgba(255,255,255,0.70)',fontSize:10,fontWeight:700,letterSpacing:'0.5px'}}>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll to top ── */}
      {showTop && (
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUp style={{width:20,height:20}} />
        </button>
      )}
    </footer>
  );
};

export default Footer;