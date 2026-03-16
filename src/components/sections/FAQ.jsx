import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ChevronDown, Search, MessageCircle, Mail, Phone,
  BookOpen, CreditCard, Settings, Monitor, Handshake, ArrowRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const categories = [
  { id: 'all',       name: 'All Questions',      icon: <BookOpen    className="w-4 h-4" /> },
  { id: 'pricing',   name: 'Pricing & Payments', icon: <CreditCard  className="w-4 h-4" /> },
  { id: 'process',   name: 'Our Process',         icon: <Settings    className="w-4 h-4" /> },
  { id: 'technical', name: 'Technical',           icon: <Monitor     className="w-4 h-4" /> },
  { id: 'support',   name: 'Support',             icon: <Handshake   className="w-4 h-4" /> },
];

const faqs = [
  {
    category: 'pricing',
    question: 'What payment methods do you accept?',
    answer: `We accept all major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers (ACH), and wire transfers for larger projects. All payments are processed securely through Stripe. For payment plans, we offer flexible options on GROWTH and SCALE packages.`,
  },
  {
    category: 'pricing',
    question: 'Are there any hidden fees or ongoing costs?',
    answer: `Absolutely not. The price you see is the price you pay. All packages include everything listed with no surprise charges. After your free maintenance period ends, optional maintenance is $100–150/month depending on your package. You're never locked in — you own all the code and can maintain it yourself or hire anyone you want.`,
  },
  {
    category: 'pricing',
    question: 'Can I upgrade my package later?',
    answer: `Yes! You can upgrade at any time during or after your project. If you upgrade during development, you'll only pay the difference. After launch, we'll credit what you've already paid toward the upgraded package. We want to grow with your business!`,
  },
  {
    category: 'process',
    question: 'What is the typical project timeline?',
    answer: `Timelines vary by package: LAUNCH (2–4 weeks), ELEVATE (4–6 weeks), GROWTH (6–8 weeks), and SCALE (8–10 weeks). These run from project kickoff to launch. Rush services are available for an additional fee if you need faster delivery. We've never missed a deadline!`,
  },
  {
    category: 'process',
    question: 'How involved do I need to be in the process?',
    answer: `We make it easy. You'll need to be available for: an initial kickoff call (1 hour), design review meetings (2–3 throughout the project), content approval, and a final review before launch. We handle all the heavy lifting — you focus on running your business while we build your digital presence.`,
  },
  {
    category: 'process',
    question: 'What happens after my website launches?',
    answer: `Every package includes free maintenance for 1–6 months (depending on package). This covers bug fixes, minor updates, and support. We also provide training documentation and video tutorials. After the free period, optional maintenance starts at $100/month. We're always here to support your growth!`,
  },
  {
    category: 'technical',
    question: 'Do I own the website and all the code?',
    answer: `Yes, 100%. Upon final payment, you receive full ownership of all code, designs, and assets. No licensing fees, no restrictions. You can host it anywhere, modify it yourself, or hire another developer. We believe in complete transparency and ownership for our clients.`,
  },
  {
    category: 'technical',
    question: 'Will my website be mobile-friendly?',
    answer: `Absolutely. Every website we create is fully responsive and mobile-first. With 60%+ of traffic coming from mobile devices, we design for smartphones first, then scale up to tablets and desktops. All sites are tested on real devices before launch to ensure perfect performance everywhere.`,
  },
  {
    category: 'support',
    question: 'What kind of support do you offer after launch?',
    answer: `All packages include free maintenance for 1–6 months covering bug fixes, security updates, and minor tweaks. Support response times vary by package: Standard (48hr), Priority (24hr), VIP (4hr). After free maintenance, optional plans start at $100/month with the same response times.`,
  },
  {
    category: 'support',
    question: 'What if I need changes after my free maintenance period?',
    answer: `You have three options: 1) Subscribe to our maintenance plan ($100–150/month), 2) Pay hourly for individual updates ($75–125/hr depending on complexity), or 3) Make changes yourself since you own all the code. We're flexible and work with what makes sense for your business!`,
  },
];

const contactOptions = [
  {
    icon: <MessageCircle className="w-6 h-6 text-gfx-teal" />,
    title: 'Live Chat',
    sub: 'Chat with our team in real-time',
    action: 'Start Chat',
    href: '#',
  },
  {
    icon: <Mail className="w-6 h-6 text-gfx-teal" />,
    title: 'Email Us',
    sub: 'Detailed response within 24 hours',
    action: 'hello@4700gfx.com',
    href: 'mailto:hello@4700gfx.com',
  },
  {
    icon: <Phone className="w-6 h-6 text-gfx-teal" />,
    title: 'Call Us',
    sub: 'Speak with a specialist today',
    action: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestion,   setOpenQuestion]   = useState(null);
  const [searchQuery,    setSearchQuery]    = useState('');

  const sectionRef  = useRef(null);
  const badgeRef    = useRef(null);
  const h2Ref       = useRef(null);
  const ruleRef     = useRef(null);
  const subRef      = useRef(null);
  const searchRef   = useRef(null);
  const catsRef     = useRef(null);
  const listRef     = useRef(null);
  const contactRef  = useRef(null);

  // ── GSAP ────────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(badgeRef.current,
        { y: 40, opacity: 0, scale: 0.78 },
        { y: 0, opacity: 1, scale: 1, duration: 0.75, ease: 'back.out(2)',
          scrollTrigger: { trigger: badgeRef.current, start: 'top 87%', toggleActions: 'play none none none' } }
      );

      const words = h2Ref.current?.querySelectorAll('.gsap-w');
      if (words?.length) {
        gsap.fromTo(words,
          { y: 60, opacity: 0, rotateX: -45 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.78, stagger: 0.065, ease: 'power3.out',
            scrollTrigger: { trigger: h2Ref.current, start: 'top 84%', toggleActions: 'play none none none' } }
        );
      }

      gsap.fromTo(ruleRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.65, ease: 'power2.out', transformOrigin: 'center',
          scrollTrigger: { trigger: ruleRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo([subRef.current, searchRef.current],
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.70, stagger: 0.10, ease: 'power2.out',
          scrollTrigger: { trigger: subRef.current, start: 'top 86%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo(catsRef.current,
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out',
          scrollTrigger: { trigger: catsRef.current, start: 'top 86%', toggleActions: 'play none none none' } }
      );

      const items = listRef.current?.querySelectorAll('.faq-item');
      if (items?.length) {
        gsap.fromTo(items,
          { x: -36, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.55, stagger: 0.07, ease: 'power3.out',
            scrollTrigger: { trigger: listRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
        );
      }

      const cards = contactRef.current?.querySelectorAll('.contact-card');
      if (cards?.length) {
        gsap.fromTo(cards,
          { y: 44, opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, duration: 0.60, stagger: 0.10, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: contactRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
        );
      }

      sectionRef.current?.querySelectorAll('.orb-faq').forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -80 : -50,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: i % 2 === 0 ? 2 : 3 },
        });
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const filtered = faqs.filter((f) => {
    const catOk = activeCategory === 'all' || f.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const searchOk = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
    return catOk && searchOk;
  });

  // ────────────────────────────────────────────────────────────────────
  return (
    <section ref={sectionRef} id="faqs" className="py-20 lg:py-32 relative overflow-hidden">
      <style>{`
        @keyframes sh-faq {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .acc-faq {
          background: linear-gradient(90deg,#7A9299 0%,#fff 35%,#4A6572 60%,#7A9299 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: sh-faq 4.5s linear infinite;
        }
        .sh-rule-faq {
          background: linear-gradient(90deg, transparent, #7A9299 30%, #4A6572 70%, transparent);
          background-size: 200% auto;
          animation: sh-faq 3.5s linear infinite;
        }

        .faq-badge {
          background: rgba(122,146,153,0.09);
          border: 1px solid rgba(122,146,153,0.28);
          backdrop-filter: blur(10px);
        }

        /* Search */
        .faq-search {
          background: rgba(122,146,153,0.07);
          border: 1px solid rgba(122,146,153,0.22);
          color: #ffffff;
          transition: all 0.3s ease;
        }
        .faq-search::placeholder { color: rgba(255,255,255,0.35); }
        .faq-search:focus {
          outline: none;
          border-color: rgba(122,146,153,0.55);
          background: rgba(122,146,153,0.12);
          box-shadow: 0 0 0 3px rgba(122,146,153,0.12);
        }

        /* Category pills */
        .cat-pill {
          background: rgba(122,146,153,0.07);
          border: 1px solid rgba(122,146,153,0.20);
          color: rgba(255,255,255,0.55);
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .cat-pill:hover {
          background: rgba(122,146,153,0.14);
          border-color: rgba(122,146,153,0.42);
          color: rgba(255,255,255,0.85);
          transform: translateY(-2px);
        }
        .cat-pill.cat-on {
          background: linear-gradient(135deg,#7A9299,#4A6572);
          border-color: transparent;
          color: #ffffff;
          box-shadow: 0 4px 18px rgba(74,101,114,0.40);
        }

        /* FAQ item */
        .faq-item {
          background: linear-gradient(145deg,rgba(122,146,153,0.08) 0%,rgba(10,10,8,0.58) 100%);
          border: 1px solid rgba(122,146,153,0.18);
          backdrop-filter: blur(14px);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          position: relative; overflow: hidden;
        }
        .faq-item::before {
          content:'';
          position:absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg,transparent,rgba(122,146,153,0.45),transparent);
          opacity:0; transition:opacity 0.3s;
        }
        .faq-item:hover::before { opacity:1; }
        .faq-item:hover {
          border-color: rgba(122,146,153,0.40);
          box-shadow: 0 8px 28px rgba(74,101,114,0.20);
        }
        .faq-item.faq-open {
          border-color: rgba(122,146,153,0.52);
          background: linear-gradient(145deg,rgba(122,146,153,0.13) 0%,rgba(10,10,8,0.68) 100%);
          box-shadow: 0 12px 36px rgba(74,101,114,0.22);
        }
        .faq-item.faq-open::before { opacity:1; }

        /* Question button */
        .faq-q-btn {
          width:100%; padding:20px 24px;
          display:flex; align-items:center; justify-content:space-between; gap:16px;
          text-align:left;
          transition: background 0.25s;
          background:none; border:none; cursor:pointer;
        }
        .faq-q-btn:hover { background:rgba(122,146,153,0.06); }

        /* Answer collapse */
        .faq-ans {
          max-height:0; overflow:hidden;
          transition: max-height 0.52s cubic-bezier(0.4,0,0.2,1);
        }
        .faq-ans.ans-open { max-height:600px; }

        /* Chevron */
        .faq-chev {
          width:32px; height:32px; border-radius:50%;
          border:1px solid rgba(122,146,153,0.28);
          display:flex; align-items:center; justify-content:center;
          flex-shrink:0;
          transition: all 0.35s cubic-bezier(0.34,1.2,0.64,1);
          background:rgba(122,146,153,0.08);
        }
        .faq-item:hover .faq-chev, .faq-item.faq-open .faq-chev {
          background:rgba(122,146,153,0.20);
          border-color:rgba(122,146,153,0.52);
        }
        .faq-chev.chev-open {
          background: linear-gradient(135deg,#7A9299,#4A6572);
          border-color:transparent;
          transform:rotate(180deg);
          box-shadow: 0 4px 14px rgba(74,101,114,0.40);
        }

        /* Contact cards */
        .contact-card {
          background: linear-gradient(145deg,rgba(122,146,153,0.09) 0%,rgba(10,10,8,0.58) 100%);
          border: 1px solid rgba(122,146,153,0.18);
          backdrop-filter:blur(14px);
          transition: all 0.38s cubic-bezier(0.34,1.2,0.64,1);
          position:relative; overflow:hidden;
        }
        .contact-card::after {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background: linear-gradient(90deg,transparent,rgba(122,146,153,0.6),transparent);
          opacity:0; transition:opacity 0.38s;
        }
        .contact-card:hover::after { opacity:1; }
        .contact-card:hover {
          border-color:rgba(122,146,153,0.48);
          transform:translateY(-8px);
          box-shadow:0 20px 48px rgba(74,101,114,0.28);
        }

        /* Icon container */
        .icon-wrap {
          width:52px; height:52px; border-radius:14px;
          display:flex; align-items:center; justify-content:center;
          background:rgba(122,146,153,0.12);
          border:1px solid rgba(122,146,153,0.22);
          transition:all 0.35s ease;
        }
        .contact-card:hover .icon-wrap {
          background:rgba(122,146,153,0.22);
          border-color:rgba(122,146,153,0.45);
          transform:scale(1.08);
        }

        /* Contact link */
        .contact-link {
          color: rgba(122,146,153,0.85);
          font-weight:600;
          transition: all 0.3s;
          position:relative; display:inline-flex; align-items:center; gap:6px;
        }
        .contact-link::after {
          content:''; position:absolute;
          bottom:-2px; left:0; width:0; height:1px;
          background: linear-gradient(90deg,#7A9299,#4A6572);
          transition:width 0.3s;
        }
        .contact-link:hover { color:#7A9299; }
        .contact-link:hover::after { width:100%; }

        /* Empty state */
        .empty-state {
          background:rgba(122,146,153,0.06);
          border:1px solid rgba(122,146,153,0.16);
          border-radius:16px;
        }

        /* BG orbs */
        .orb-faq-bg { position:absolute; border-radius:50%; pointer-events:none; filter:blur(72px); }

        /* GSAP word */
        .gsap-w { display:inline-block; }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-faq-bg orb-faq w-[500px] h-[500px] top-[12%] right-[5%]"
          style={{ background:'radial-gradient(circle,rgba(122,146,153,0.10) 0%,transparent 70%)' }} />
        <div className="orb-faq-bg orb-faq w-[420px] h-[420px] bottom-[15%] left-[6%]"
          style={{ background:'radial-gradient(circle,rgba(74,101,114,0.09) 0%,transparent 70%)' }} />
        <div className="orb-faq-bg w-[260px] h-[260px] top-[55%] left-[44%]"
          style={{ background:'radial-gradient(circle,rgba(90,89,85,0.05) 0%,transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage:`linear-gradient(rgba(122,146,153,1) 1px,transparent 1px),linear-gradient(90deg,rgba(122,146,153,1) 1px,transparent 1px)`, backgroundSize:'80px 80px' }} />
      </div>

      <div className="w-[88%] max-w-5xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-12">

          <div ref={badgeRef} className="inline-flex items-center gap-2.5 mb-7 px-5 py-2 rounded-full faq-badge">
            <BookOpen className="w-4 h-4 text-gfx-teal" />
            <span className="inter-font text-gfx-teal font-semibold text-xs uppercase tracking-widest">
              Got Questions?
            </span>
          </div>

          <h2
            ref={h2Ref}
            className="rajdhani-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-5"
            style={{ perspective:'900px' }}
          >
            {'Frequently Asked'.split(' ').map((w, i) => (
              <span key={i} className="gsap-w">{w}&nbsp;</span>
            ))}
            <br className="hidden sm:block" />
            <span className="acc-faq">
              {'Questions.'.split(' ').map((w, i) => (
                <span key={i} className="gsap-w">{w}&nbsp;</span>
              ))}
            </span>
          </h2>

          <div ref={ruleRef} className="sh-rule-faq h-[2px] w-24 rounded-full mx-auto mb-6" />

          <p ref={subRef} className="inter-font text-gfx-white/60 text-base lg:text-[17px] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about working with 4700 GFX Studios — answered clearly and honestly.
          </p>
        </div>

        {/* ── Search ── */}
        <div ref={searchRef} className="mb-8 relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gfx-teal/55 pointer-events-none" />
          <input
            type="text"
            placeholder="Search questions…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="faq-search w-full rounded-xl pl-12 pr-5 py-3.5 inter-font text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gfx-white/40 hover:text-gfx-white/80 transition-colors text-xs inter-font"
            >
              Clear
            </button>
          )}
        </div>

        {/* ── Category filters ── */}
        <div ref={catsRef} className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`cat-pill rounded-full px-5 py-2.5 inter-font font-semibold text-sm flex items-center gap-2 ${activeCategory === cat.id ? 'cat-on' : ''}`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* ── FAQ list ── */}
        <div ref={listRef} className="space-y-3 mb-16">
          {filtered.length === 0 ? (
            <div className="empty-state p-12 text-center">
              <p className="inter-font text-gfx-white/50 text-base">
                No questions match your search. Try a different term or category.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 inter-font text-gfx-teal font-semibold text-sm hover:text-gfx-white transition-colors"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filtered.map((faq, idx) => {
              const isOpen = openQuestion === idx;
              return (
                <div key={idx} className={`faq-item rounded-2xl ${isOpen ? 'faq-open' : ''}`}>

                  {/* Question row */}
                  <button
                    className="faq-q-btn"
                    onClick={() => setOpenQuestion(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="inter-font text-gfx-white font-semibold text-base lg:text-[17px] leading-snug flex-1 pr-2">
                      {faq.question}
                    </span>
                    <div className={`faq-chev ${isOpen ? 'chev-open' : ''}`}>
                      <ChevronDown className="w-4 h-4 text-gfx-white" />
                    </div>
                  </button>

                  {/* Answer */}
                  <div className={`faq-ans ${isOpen ? 'ans-open' : ''}`}>
                    <div className="px-6 pb-6">
                      <div className="h-[1px] rounded-full mb-5"
                        style={{ background:'linear-gradient(90deg,transparent,rgba(122,146,153,0.35),transparent)' }} />
                      <p className="inter-font text-gfx-white/70 text-sm lg:text-[15px] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* ── Still have questions ── */}
        <div className="text-center mb-10">
          <h3 className="rajdhani-font text-gfx-white text-3xl lg:text-4xl font-bold mb-2">
            Still Have Questions?
          </h3>
          <p className="inter-font text-gfx-white/50 text-sm mb-8">
            Our team typically responds within a few hours.
          </p>
          <div ref={contactRef} className="grid md:grid-cols-3 gap-5">
            {contactOptions.map((opt, i) => (
              <div key={i} className="contact-card rounded-2xl p-7 text-center">
                <div className="icon-wrap mx-auto mb-4">{opt.icon}</div>
                <h4 className="rajdhani-font text-gfx-white text-xl font-bold mb-1">{opt.title}</h4>
                <p className="inter-font text-gfx-white/50 text-xs mb-4">{opt.sub}</p>
                <a href={opt.href} className="contact-link inter-font text-sm">
                  {opt.action}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;