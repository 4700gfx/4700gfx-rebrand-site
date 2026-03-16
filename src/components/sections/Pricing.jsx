import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ChevronDown, Check, Zap, Star, ArrowRight,
  CreditCard, Clock, Shield, Package,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const packages = [
  {
    id: 'launch',
    icon: '🚀',
    name: 'LAUNCH',
    price: '$500',
    originalPrice: '$650',
    tagline: 'Your Professional Digital Foundation',
    bestFor: 'New entrepreneurs, solopreneurs & freelancers',
    description:
      "Getting online shouldn't take months. LAUNCH gets your business visible and generating leads within 2–4 weeks.",
    timeline: '2–4 weeks',
    features: [
      { text: 'Custom single-page website (up to 5 sections)', highlight: true },
      { text: 'Basic Branding Guide', highlight: false },
      { text: 'Fully Responsive Design', highlight: true },
      { text: 'Contact Form Integration', highlight: false },
      { text: 'SSL certificate & Basic SEO', highlight: false },
      { text: '2 rounds of revisions', highlight: false },
      { text: '1 month FREE maintenance ($150 value)', highlight: true },
    ],
    additionalFeatures: [
      'Mobile-first design approach',
      'Basic on-page SEO optimisation',
      'Google Business Profile setup assistance',
      'Social media link integration',
    ],
    idealFor: 'Freelance consultants, personal trainers, photographers, coaches',
    deliverables: '5 sections, 1 contact form, basic SEO setup',
    supportLevel: 'Email support (48hr response)',
    revisions: '2 rounds',
    popular: false,
    savings: '$150',
  },
  {
    id: 'elevate',
    icon: '⚡',
    name: 'ELEVATE',
    price: '$1,000',
    originalPrice: '$1,250',
    tagline: 'Multi-Page Professional Presence',
    bestFor: 'Established small businesses & professional practices',
    description:
      'Your business needs room to tell its full story. ELEVATE gives you 3–5 dedicated pages with powerful marketing tools.',
    timeline: '4–6 weeks',
    features: [
      { text: '3–5 custom-coded pages', highlight: true },
      { text: 'Standard Branding Guide', highlight: false },
      { text: 'Email Marketing Integration', highlight: true },
      { text: 'Multiple Strategic Contact Forms', highlight: false },
      { text: 'Email Automation Setup', highlight: true },
      { text: 'Google Analytics 4 integration', highlight: false },
      { text: '1 month FREE maintenance ($100–150 value)', highlight: true },
    ],
    additionalFeatures: [
      'Advanced SEO optimisation',
      'Newsletter signup integration',
      'Social proof widgets',
      'Blog/News section ready',
      'Performance optimisation',
    ],
    idealFor: 'Professional service firms, medical/dental practices, local businesses',
    deliverables: '3–5 pages, multiple forms, email automation',
    supportLevel: 'Priority email + chat (24hr response)',
    revisions: '3 rounds',
    popular: false,
    savings: '$250',
  },
  {
    id: 'growth',
    icon: '📈',
    name: 'GROWTH',
    price: '$1,500',
    originalPrice: '$2,000',
    tagline: 'Complete Brand Identity + Premium Website',
    bestFor: 'Growing businesses ready to dominate their market',
    description:
      'Complete brand identity from scratch plus a premium 5–8 page website with advanced features and CMS.',
    timeline: '6–8 weeks',
    features: [
      { text: '3 logo concepts + 2 variations', highlight: true },
      { text: 'Premium Branding Guide (8–10 pages)', highlight: true },
      { text: 'Business Card & Print Design', highlight: false },
      { text: '5–8 page premium website', highlight: true },
      { text: 'Advanced Blog/CMS', highlight: true },
      { text: 'E-commerce ready (up to 10 products)', highlight: true },
      { text: '30 branded social media graphics', highlight: false },
      { text: '3 months FREE maintenance ($150 value)', highlight: true },
    ],
    additionalFeatures: [
      'Custom animations & interactions',
      'Video integration',
      'Advanced analytics dashboard',
      'Conversion optimisation',
      'A/B testing setup',
      'Custom CMS training session',
      'Social media strategy guide',
    ],
    idealFor: 'E-commerce startups, scaling service businesses, healthcare providers',
    deliverables: 'Complete brand system, 5–8 pages, CMS, 10 products',
    supportLevel: 'Priority support (12hr response) + monthly check-ins',
    revisions: 'Unlimited within scope',
    popular: true,
    savings: '$500',
  },
  {
    id: 'scale',
    icon: '🎯',
    name: 'SCALE',
    price: '$2,500+',
    originalPrice: '$3,500',
    tagline: 'Enterprise Brand System + Digital Dominance',
    bestFor: 'Established businesses & premium service providers',
    description:
      'The ultimate transformation package — everything elevated with more pages, advanced features, and a dedicated account manager.',
    timeline: '8–10 weeks',
    features: [
      { text: '4 logo concepts + 3 variations', highlight: true },
      { text: 'Premium+ Branding Guide (15–20 pages)', highlight: true },
      { text: 'Full Stationery Suite Design', highlight: false },
      { text: '8–12 page enterprise website', highlight: true },
      { text: 'Full e-commerce (up to 25 products)', highlight: true },
      { text: 'Custom interactive features', highlight: true },
      { text: '60 branded social media graphics', highlight: false },
      { text: '4-hour photography session', highlight: true },
      { text: '6 months FREE maintenance ($450 value)', highlight: true },
    ],
    additionalFeatures: [
      'Multi-language support ready',
      'Advanced security features',
      'Custom integrations (CRM, ERP)',
      'Performance optimisation suite',
      'Dedicated account manager',
      'Quarterly strategy sessions',
      'Priority feature updates',
      'White-glove onboarding',
    ],
    idealFor: 'Multi-location operations, professional firms, franchises',
    deliverables: 'Enterprise brand system, 8–12 pages, full e-commerce',
    supportLevel: 'VIP support (4hr response) + dedicated account manager',
    revisions: 'Unlimited',
    popular: false,
    savings: '$1,000+',
  },
];

const whyUs = [
  { icon: '💻', text: 'Custom-Coded Excellence',  desc: 'Zero templates, ever'         },
  { icon: '🔑', text: 'Complete Ownership',        desc: 'Your code, forever'           },
  { icon: '💎', text: 'No Hidden Fees',            desc: 'What you see is what you pay' },
  { icon: '🎯', text: 'Results-Focused',           desc: 'ROI-driven design'            },
  { icon: '🤝', text: 'Ongoing Partnership',       desc: 'Always here for you'          },
];

const pkgAccent = {
  launch:  { border: 'rgba(122,146,153,0.28)', glow: 'rgba(122,146,153,0.12)' },
  elevate: { border: 'rgba(74,101,114,0.38)',  glow: 'rgba(74,101,114,0.12)'  },
  growth:  { border: 'rgba(122,146,153,0.60)', glow: 'rgba(122,146,153,0.18)' },
  scale:   { border: 'rgba(90,89,85,0.38)',    glow: 'rgba(90,89,85,0.10)'    },
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
const Pricing = () => {
  const [selected,        setSelected]        = useState(null);
  const [billing,         setBilling]         = useState('one-time');
  const [showComparison,  setShowComparison]  = useState(false);
  const [expanded,        setExpanded]        = useState(null);

  const sectionRef  = useRef(null);
  const badgeRef    = useRef(null);
  const h2Ref       = useRef(null);
  const ruleRef     = useRef(null);
  const sub1Ref     = useRef(null);
  const sub2Ref     = useRef(null);
  const togglesRef  = useRef(null);
  const cardsRef    = useRef(null);
  const infoRef     = useRef(null);
  const whyRef      = useRef(null);
  const ctaRef      = useRef(null);

  // ── GSAP ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Badge
      gsap.fromTo(badgeRef.current,
        { y: 40, opacity: 0, scale: 0.78 },
        { y: 0, opacity: 1, scale: 1, duration: 0.75, ease: 'back.out(2)',
          scrollTrigger: { trigger: badgeRef.current, start: 'top 87%', toggleActions: 'play none none none' } }
      );

      // Headline words
      const words = h2Ref.current?.querySelectorAll('.gsap-w');
      if (words?.length) {
        gsap.fromTo(words,
          { y: 60, opacity: 0, rotateX: -45 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.78, stagger: 0.065, ease: 'power3.out',
            scrollTrigger: { trigger: h2Ref.current, start: 'top 84%', toggleActions: 'play none none none' } }
        );
      }

      // Rule
      gsap.fromTo(ruleRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.65, ease: 'power2.out', transformOrigin: 'center',
          scrollTrigger: { trigger: ruleRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      );

      // Sub text + toggles
      gsap.fromTo([sub1Ref.current, sub2Ref.current, togglesRef.current],
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.70, stagger: 0.10, ease: 'power2.out',
          scrollTrigger: { trigger: sub1Ref.current, start: 'top 86%', toggleActions: 'play none none none' } }
      );

      // Pricing cards stagger
      const cards = cardsRef.current?.querySelectorAll('.p-card');
      if (cards?.length) {
        gsap.fromTo(cards,
          { y: 60, opacity: 0, scale: 0.93 },
          { y: 0, opacity: 1, scale: 1, duration: 0.70, stagger: 0.12, ease: 'back.out(1.3)',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
        );
      }

      // Info boxes
      const info = infoRef.current?.querySelectorAll('.info-box');
      if (info?.length) {
        gsap.fromTo(info,
          { y: 44, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.10, ease: 'power2.out',
            scrollTrigger: { trigger: infoRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
        );
      }

      // Why us cards
      const why = whyRef.current?.querySelectorAll('.why-card');
      if (why?.length) {
        gsap.fromTo(why,
          { y: 44, opacity: 0, scale: 0.90 },
          { y: 0, opacity: 1, scale: 1, duration: 0.60, stagger: 0.09, ease: 'back.out(1.4)',
            scrollTrigger: { trigger: whyRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
        );
      }

      // CTA
      gsap.fromTo(ctaRef.current,
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.80, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      );

      // Orb parallax
      sectionRef.current?.querySelectorAll('.orb-pr').forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -90 : -55,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: i % 2 === 0 ? 2 : 3 },
        });
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // ─────────────────────────────────────────────────────────────────────
  return (
    <section ref={sectionRef} id="pricing" className="py-20 lg:py-32 relative overflow-hidden">
      <style>{`
        @keyframes sh-price {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pop-badge {
          0%,100% { box-shadow: 0 0 18px rgba(122,146,153,0.28); }
          50%      { box-shadow: 0 0 36px rgba(122,146,153,0.52); }
        }
        @keyframes sheen {
          from { left: -80%; }
          to   { left: 130%; }
        }

        /* Headline shimmer */
        .acc-price {
          background: linear-gradient(90deg,#7A9299 0%,#fff 35%,#4A6572 60%,#7A9299 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: sh-price 4.5s linear infinite;
        }
        .sh-rule-pr {
          background: linear-gradient(90deg, transparent, #7A9299 30%, #4A6572 70%, transparent);
          background-size: 200% auto;
          animation: sh-price 3.5s linear infinite;
        }

        /* Badge */
        .pr-badge {
          background: rgba(122,146,153,0.09);
          border: 1px solid rgba(122,146,153,0.28);
          backdrop-filter: blur(10px);
        }

        /* Toggle pill */
        .billing-pill {
          background: rgba(122,146,153,0.07);
          border: 1px solid rgba(122,146,153,0.20);
          backdrop-filter: blur(10px);
        }
        .billing-opt {
          cursor:pointer;
          transition: all 0.3s ease;
          color: rgba(255,255,255,0.48);
        }
        .billing-opt.b-on {
          background: rgba(122,146,153,0.18);
          border-radius: 8px;
          color: #ffffff;
          box-shadow: 0 2px 12px rgba(74,101,114,0.28);
        }

        /* Comparison toggle */
        .cmp-btn {
          background: rgba(122,146,153,0.07);
          border: 1px solid rgba(122,146,153,0.22);
          transition: all 0.3s ease;
        }
        .cmp-btn:hover {
          background: rgba(122,146,153,0.15);
          border-color: rgba(122,146,153,0.45);
        }

        /* ── Pricing card ── */
        .p-card {
          background: linear-gradient(145deg, rgba(122,146,153,0.09) 0%, rgba(10,10,8,0.62) 100%);
          border: 1px solid rgba(122,146,153,0.20);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: transform 0.42s cubic-bezier(0.34,1.15,0.64,1), border-color 0.4s, box-shadow 0.4s, background 0.4s;
          position: relative; overflow: hidden;
        }
        /* Top shimmer line */
        .p-card::before {
          content:'';
          position:absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(122,146,153,0.45), transparent);
          opacity:0; transition:opacity 0.4s;
        }
        /* Sheen sweep */
        .p-card::after {
          content:'';
          position:absolute;
          top:0; width:50%; height:100%;
          background: linear-gradient(120deg,transparent,rgba(122,146,153,0.08),transparent);
          transform:skewX(-20deg);
          left:-80%;
          transition:none; pointer-events:none;
        }
        .p-card:hover::before { opacity:1; }
        .p-card:hover::after  { animation:sheen 0.7s ease forwards; }
        .p-card:hover {
          transform: translateY(-14px) scale(1.025);
          border-color: rgba(122,146,153,0.52);
          box-shadow: 0 32px 72px rgba(74,101,114,0.30);
          background: linear-gradient(145deg, rgba(122,146,153,0.15) 0%, rgba(16,16,12,0.72) 100%);
        }
        .p-card.popular-card {
          border-color: rgba(122,146,153,0.60) !important;
          background: linear-gradient(145deg, rgba(122,146,153,0.14) 0%, rgba(10,10,8,0.68) 100%) !important;
          animation: pop-badge 3s ease-in-out infinite;
        }

        /* Popular label */
        .popular-label {
          position:absolute;
          top:-14px; left:50%; transform:translateX(-50%);
          background: linear-gradient(90deg,#7A9299,#4A6572,#7A9299);
          background-size:200% auto;
          animation: sh-price 3s linear infinite;
          padding: 6px 20px; border-radius:20px;
          white-space:nowrap; z-index:20;
          box-shadow: 0 8px 24px rgba(74,101,114,0.50);
        }

        /* Savings badge */
        .save-badge {
          background: rgba(122,146,153,0.12);
          border: 1px solid rgba(122,146,153,0.32);
        }

        /* Feature row */
        .feat-row {
          display:flex; align-items:flex-start; gap:10px;
          padding: 7px 9px; border-radius:9px;
          transition: all 0.28s ease;
        }
        .feat-row:hover {
          background: rgba(122,146,153,0.09);
          transform: translateX(4px);
        }
        .feat-row.feat-hi {
          background: rgba(122,146,153,0.07);
          border: 1px solid rgba(122,146,153,0.14);
        }
        .feat-row.feat-hi:hover {
          background: rgba(122,146,153,0.14);
          border-color:rgba(122,146,153,0.32);
        }

        /* Ideal / deliverables box */
        .info-chip {
          background: rgba(122,146,153,0.07);
          border: 1px solid rgba(122,146,153,0.16);
        }

        /* CTA button on card */
        .card-cta {
          background: rgba(122,146,153,0.10);
          border: 1px solid rgba(122,146,153,0.30);
          transition: all 0.3s ease;
          position:relative; overflow:hidden;
        }
        .card-cta::after {
          content:''; position:absolute; inset:0;
          background: rgba(122,146,153,0.12);
          opacity:0; transition:opacity 0.3s;
        }
        .card-cta:hover::after { opacity:1; }
        .card-cta:hover { border-color:rgba(122,146,153,0.60); transform:translateY(-2px); box-shadow:0 10px 28px rgba(74,101,114,0.25); }

        .card-cta-primary {
          background: linear-gradient(135deg,#7A9299 0%,#4A6572 100%);
          border: 1px solid rgba(122,146,153,0.28);
          transition: all 0.3s ease;
          position:relative; overflow:hidden;
        }
        .card-cta-primary::after {
          content:''; position:absolute; inset:0;
          background: linear-gradient(135deg,rgba(255,255,255,0.10),transparent);
          opacity:0; transition:opacity 0.3s;
        }
        .card-cta-primary:hover::after { opacity:1; }
        .card-cta-primary:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(74,101,114,0.45); }
        .card-cta-primary span, .card-cta span { position:relative; z-index:1; }

        /* Stat mini chips */
        .mini-chip {
          background: rgba(122,146,153,0.07);
          border: 1px solid rgba(122,146,153,0.14);
          transition: all 0.28s ease;
        }
        .mini-chip:hover { background:rgba(122,146,153,0.14); border-color:rgba(122,146,153,0.32); }

        /* Expand toggle */
        .expand-btn {
          color: rgba(122,146,153,0.80);
          transition: color 0.3s;
          background:none; border:none; cursor:pointer;
        }
        .expand-btn:hover { color:#7A9299; }

        /* Comparison table */
        .cmp-table {
          background: linear-gradient(145deg,rgba(122,146,153,0.07) 0%,rgba(10,10,8,0.55) 100%);
          border: 1px solid rgba(122,146,153,0.18);
          backdrop-filter:blur(14px);
          max-height:0; overflow:hidden;
          transition: max-height 0.55s cubic-bezier(0.4,0,0.2,1);
        }
        .cmp-table.cmp-open { max-height:600px; }

        /* Info boxes */
        .info-box {
          background: linear-gradient(145deg,rgba(122,146,153,0.09) 0%,rgba(10,10,8,0.58) 100%);
          border: 1px solid rgba(122,146,153,0.18);
          backdrop-filter:blur(14px);
          transition: all 0.38s ease;
          position:relative; overflow:hidden;
        }
        .info-box::after {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background: linear-gradient(90deg,transparent,rgba(122,146,153,0.6),transparent);
          opacity:0; transition:opacity 0.38s;
        }
        .info-box:hover::after { opacity:1; }
        .info-box:hover { border-color:rgba(122,146,153,0.42); transform:translateY(-5px); box-shadow:0 18px 44px rgba(74,101,114,0.24); }

        /* Why cards */
        .why-card {
          background: linear-gradient(145deg,rgba(122,146,153,0.09) 0%,rgba(10,10,8,0.58) 100%);
          border: 1px solid rgba(122,146,153,0.16);
          backdrop-filter:blur(12px);
          transition: all 0.38s cubic-bezier(0.34,1.2,0.64,1);
          position:relative; overflow:hidden;
        }
        .why-card:hover {
          border-color:rgba(122,146,153,0.45);
          transform:translateY(-8px) scale(1.04);
          box-shadow:0 18px 44px rgba(74,101,114,0.26);
        }
        .why-card:hover .why-icon { animation: sh-price 0s; transform:scale(1.18) rotate(-4deg); }
        .why-icon { display:inline-block; transition:transform 0.35s cubic-bezier(0.34,1.4,0.64,1); }

        /* CTA block */
        .cta-block-pr {
          background: linear-gradient(145deg,rgba(122,146,153,0.08) 0%,rgba(10,10,8,0.60) 100%);
          border: 1px solid rgba(122,146,153,0.20);
          backdrop-filter:blur(16px);
          position:relative; overflow:hidden;
        }
        .cta-block-pr::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg,transparent,rgba(122,146,153,0.55),rgba(74,101,114,0.55),transparent);
        }

        /* Primary CTA */
        .cta-main {
          background: linear-gradient(135deg,#7A9299 0%,#4A6572 100%);
          border: 1px solid rgba(122,146,153,0.28);
          transition: all 0.35s ease;
          position:relative; overflow:hidden;
        }
        .cta-main::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,0.11),transparent); opacity:0; transition:opacity 0.35s; }
        .cta-main:hover::after { opacity:1; }
        .cta-main:hover { transform:translateY(-3px) scale(1.04); box-shadow:0 18px 44px rgba(74,101,114,.50); }
        .cta-main span { position:relative; z-index:1; }

        /* BG orbs */
        .orb-p { position:absolute; border-radius:50%; pointer-events:none; filter:blur(72px); }

        /* GSAP word */
        .gsap-w { display:inline-block; }

        /* Check icon colours */
        .ck-hi  { color: #7A9299; }
        .ck-std { color: rgba(122,146,153,0.55); }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-p orb-pr w-[520px] h-[520px] top-[12%] left-[4%]"
          style={{ background:'radial-gradient(circle,rgba(122,146,153,0.10) 0%,transparent 70%)' }} />
        <div className="orb-p orb-pr w-[420px] h-[420px] bottom-[14%] right-[5%]"
          style={{ background:'radial-gradient(circle,rgba(74,101,114,0.09) 0%,transparent 70%)' }} />
        <div className="orb-p w-[280px] h-[280px] top-[55%] left-[42%]"
          style={{ background:'radial-gradient(circle,rgba(90,89,85,0.06) 0%,transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage:`linear-gradient(rgba(122,146,153,1) 1px,transparent 1px),linear-gradient(90deg,rgba(122,146,153,1) 1px,transparent 1px)`, backgroundSize:'80px 80px' }} />
      </div>

      <div className="w-[88%] max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">

          <div ref={badgeRef} className="inline-flex items-center gap-2.5 mb-7 px-5 py-2 rounded-full pr-badge">
            <Package className="w-4 h-4 text-gfx-teal" />
            <span className="inter-font text-gfx-teal font-semibold text-xs uppercase tracking-widest">
              Transparent Pricing
            </span>
          </div>

          <h2
            ref={h2Ref}
            className="rajdhani-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-5"
            style={{ perspective:'900px' }}
          >
            {'Simple,'.split(' ').map((w, i) => <span key={i} className="gsap-w">{w}&nbsp;</span>)}
            {'Transparent'.split(' ').map((w, i) => <span key={i} className="gsap-w">{w}&nbsp;</span>)}
            <br className="hidden sm:block" />
            <span className="acc-price">
              {'Pricing.'.split(' ').map((w, i) => <span key={i} className="gsap-w">{w}&nbsp;</span>)}
            </span>
          </h2>

          <div ref={ruleRef} className="sh-rule-pr h-[2px] w-24 rounded-full mx-auto mb-6" />

          <p ref={sub1Ref} className="inter-font text-gfx-white/60 text-base lg:text-[17px] max-w-2xl mx-auto mb-2 leading-relaxed">
            Agency-level excellence without the enterprise price tag. Choose the package that fits your business stage and goals.
          </p>
          <p ref={sub2Ref} className="inter-font text-gfx-white/40 text-sm mb-8">
            All packages include custom code, full ownership, and our quality guarantee.
          </p>

          {/* Controls row */}
          <div ref={togglesRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Billing toggle */}
            <div className="billing-pill inline-flex items-center p-1.5 rounded-xl gap-1">
              <button
                onClick={() => setBilling('one-time')}
                className={`billing-opt inter-font font-semibold text-sm px-5 py-2 rounded-lg ${billing==='one-time' ? 'b-on' : ''}`}
              >
                One-Time Payment
              </button>
              <button
                onClick={() => setBilling('payment-plan')}
                className={`billing-opt inter-font font-semibold text-sm px-5 py-2 rounded-lg ${billing==='payment-plan' ? 'b-on' : ''}`}
              >
                Payment Plans
              </button>
            </div>

            {/* Comparison toggle */}
            <button
              onClick={() => setShowComparison((s) => !s)}
              className="cmp-btn inter-font text-gfx-white/65 hover:text-gfx-white font-semibold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2"
            >
              {showComparison ? 'Hide' : 'Compare'} Packages
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showComparison ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Payment plan notice */}
          {billing === 'payment-plan' && (
            <div className="mt-5 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl"
              style={{ background:'rgba(122,146,153,0.10)', border:'1px solid rgba(122,146,153,0.28)' }}>
              <CreditCard className="w-4 h-4 text-gfx-teal flex-shrink-0" />
              <span className="inter-font text-gfx-white/75 text-sm">
                LAUNCH & ELEVATE: 50/50 split &nbsp;·&nbsp; GROWTH: 3×$500 &nbsp;·&nbsp; SCALE: 4×$500+
              </span>
            </div>
          )}
        </div>

        {/* ── Comparison table ── */}
        <div className={`cmp-table rounded-2xl mb-10 ${showComparison ? 'cmp-open' : ''}`}>
          <div className="p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom:'1px solid rgba(122,146,153,0.20)' }}>
                  <th className="text-left py-4 px-4 inter-font text-gfx-white/45 text-xs uppercase tracking-widest">Feature</th>
                  {packages.map(p => (
                    <th key={p.id} className="py-4 px-4 text-center">
                      <div className="rajdhani-font text-gfx-white font-bold text-xl">{p.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label:'Starting Price',  vals: packages.map(p => p.price)                               },
                  { label:'Timeline',         vals: packages.map(p => p.timeline)                            },
                  { label:'Pages',            vals: packages.map(p => p.deliverables.split(',')[0])           },
                  { label:'Revisions',        vals: packages.map(p => p.revisions)                           },
                  { label:'Support',          vals: packages.map(p => p.supportLevel.split('(')[0].trim())   },
                  { label:'You Save',         vals: packages.map(p => p.savings)                             },
                ].map((row, ri) => (
                  <tr key={ri} style={{ borderBottom:'1px solid rgba(122,146,153,0.10)' }}>
                    <td className="py-3 px-4 inter-font text-gfx-white/60 text-sm">{row.label}</td>
                    {row.vals.map((v, vi) => (
                      <td key={vi} className="py-3 px-4 text-center inter-font text-gfx-white/78 text-sm"
                        style={{ color:'rgba(255,255,255,0.78)' }}>
                        {ri === 5 ? <span className="text-gfx-teal font-semibold">{v}</span> : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Pricing cards ── */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg) => {
            const ac = pkgAccent[pkg.id];
            const isSelected = selected === pkg.id;
            return (
              <div key={pkg.id} className="relative pt-5">

                {/* Popular badge */}
                {pkg.popular && (
                  <div className="popular-label inter-font text-white font-bold text-[11px] uppercase tracking-widest flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                )}

                <div
                  className={`p-card rounded-3xl p-7 flex flex-col h-full ${pkg.popular ? 'popular-card' : ''}`}
                  style={pkg.popular ? { borderColor: ac.border, boxShadow:`0 0 28px ${ac.glow}` } : {}}
                >

                  {/* Savings badge */}
                  <div className="absolute top-8 right-6 save-badge rounded-lg px-2.5 py-1">
                    <span className="inter-font text-gfx-teal text-[11px] font-bold">Save {pkg.savings}</span>
                  </div>

                  {/* Icon + Name */}
                  <div className="mb-5">
                    <div className="text-4xl mb-3">{pkg.icon}</div>
                    <h3 className="rajdhani-font text-gfx-white text-[28px] font-bold leading-tight mb-1">{pkg.name}</h3>
                    <p className="inter-font text-gfx-white/55 text-xs leading-snug">{pkg.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inter-font text-gfx-white/35 text-base line-through">{pkg.originalPrice}</span>
                      <Zap className="w-4 h-4 text-gfx-teal" />
                    </div>
                    <div className="rajdhani-font text-gfx-teal text-[46px] font-bold leading-none mb-1">{pkg.price}</div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gfx-teal/60" />
                      <span className="inter-font text-gfx-white/50 text-xs">{pkg.timeline}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="inter-font text-gfx-white/62 text-sm leading-relaxed mb-5"
                    style={{ color:'rgba(255,255,255,0.62)' }}>
                    {pkg.description}
                  </p>

                  {/* Divider */}
                  <div className="h-[1px] rounded-full mb-4" style={{ background:'rgba(122,146,153,0.16)' }} />

                  {/* Features */}
                  <div className="flex-grow mb-4">
                    <div className="space-y-1">
                      {pkg.features
                        .slice(0, expanded === pkg.id ? undefined : 5)
                        .map((f, fi) => (
                          <div key={fi} className={`feat-row ${f.highlight ? 'feat-hi' : ''}`}>
                            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${f.highlight ? 'ck-hi' : 'ck-std'}`} />
                            <span className={`inter-font text-xs leading-snug ${f.highlight ? 'text-gfx-white font-medium' : 'text-gfx-white/70'}`}>
                              {f.text}
                            </span>
                          </div>
                        ))}
                    </div>

                    {pkg.features.length > 5 && (
                      <button
                        onClick={() => setExpanded(expanded === pkg.id ? null : pkg.id)}
                        className="expand-btn inter-font font-semibold text-xs flex items-center gap-1.5 mt-3"
                      >
                        {expanded === pkg.id ? 'Show less' : `+${pkg.features.length - 5} more features`}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded === pkg.id ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Ideal for */}
                  <div className="info-chip rounded-xl p-3.5 mb-3">
                    <p className="inter-font text-gfx-white/40 text-[10px] uppercase tracking-widest font-semibold mb-1">Ideal For</p>
                    <p className="inter-font text-gfx-white/75 text-xs leading-snug">{pkg.idealFor}</p>
                  </div>

                  {/* Deliverables */}
                  <div className="info-chip rounded-xl p-3.5 mb-5">
                    <p className="inter-font text-gfx-white/40 text-[10px] uppercase tracking-widest font-semibold mb-1">Deliverables</p>
                    <p className="inter-font text-gfx-white/75 text-xs leading-snug">{pkg.deliverables}</p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setSelected(isSelected ? null : pkg.id)}
                    className={`w-full py-3.5 rounded-xl inter-font font-bold text-sm ${pkg.popular || isSelected ? 'card-cta-primary' : 'card-cta'} text-white mb-4`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSelected ? (
                        <><Check className="w-4 h-4" /> Selected</>
                      ) : (
                        <>Get Started <ArrowRight className="w-4 h-4" /></>
                      )}
                    </span>
                  </button>

                  {/* Mini stat chips */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="mini-chip rounded-xl p-2.5 text-center">
                      <div className="rajdhani-font text-gfx-teal text-base font-bold leading-none">{pkg.revisions}</div>
                      <div className="inter-font text-gfx-white/45 text-[10px] uppercase tracking-widest mt-0.5">Revisions</div>
                    </div>
                    <div className="mini-chip rounded-xl p-2.5 text-center">
                      <div className="rajdhani-font text-gfx-teal text-base font-bold leading-none">{pkg.timeline.split('–')[0]}</div>
                      <div className="inter-font text-gfx-white/45 text-[10px] uppercase tracking-widest mt-0.5">Wks Min</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Info boxes ── */}
        <div ref={infoRef} className="grid md:grid-cols-3 gap-5 mb-14">
          {[
            {
              icon: <CreditCard className="w-6 h-6 text-gfx-teal" />,
              title: 'Payment Options',
              items: [
                '50% deposit, 50% on completion',
                'GROWTH: 3 payments of $500',
                'SCALE: 4 payments of $500+',
                'Credit card, PayPal, Bank Transfer',
              ],
              bullet: <Check className="w-4 h-4 text-gfx-teal flex-shrink-0" />,
            },
            {
              icon: <Zap className="w-6 h-6 text-gfx-teal" />,
              title: 'Rush Service Available',
              items: [
                'LAUNCH: 1-week turnaround (+$200)',
                'ELEVATE: 2-week turnaround (+$300)',
                'GROWTH: 4-week turnaround (+$500)',
                'SCALE: 6-week turnaround (+$750)',
              ],
              bullet: <Zap className="w-4 h-4 text-gfx-teal flex-shrink-0" />,
            },
            {
              icon: <Shield className="w-6 h-6 text-gfx-teal" />,
              title: 'Our Guarantee',
              items: [
                'Unlimited revisions within scope',
                '10% discount if we miss deadline',
                '24–48 hour support response',
                '100% satisfaction guaranteed',
              ],
              bullet: <Check className="w-4 h-4 text-gfx-teal flex-shrink-0" />,
            },
          ].map((box, i) => (
            <div key={i} className="info-box rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background:'rgba(122,146,153,0.12)', border:'1px solid rgba(122,146,153,0.22)' }}>
                  {box.icon}
                </div>
                <h4 className="rajdhani-font text-gfx-white text-xl font-bold">{box.title}</h4>
              </div>
              <ul className="space-y-2.5">
                {box.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2.5">
                    {box.bullet}
                    <span className="inter-font text-gfx-white/68 text-sm" style={{ color:'rgba(255,255,255,0.68)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Why us ── */}
        <div ref={whyRef} className="mb-16">
          <h3 className="rajdhani-font text-gfx-white text-3xl lg:text-4xl font-bold text-center mb-8">
            Why 4700 GFX Studios?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {whyUs.map((w, i) => (
              <div key={i} className="why-card rounded-2xl p-6 text-center">
                <div className="why-icon text-4xl mb-3 inline-block">{w.icon}</div>
                <p className="inter-font text-gfx-white text-sm font-semibold leading-snug mb-1.5">{w.text}</p>
                <p className="inter-font text-gfx-white/48 text-xs" style={{ color:'rgba(255,255,255,0.48)' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} className="cta-block-pr rounded-3xl p-10 lg:p-16 text-center">
          <h3 className="rajdhani-font text-gfx-white text-3xl lg:text-5xl font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="inter-font text-gfx-white/58 text-sm lg:text-base mb-9 max-w-xl mx-auto leading-relaxed"
            style={{ color:'rgba(255,255,255,0.58)' }}>
            Book a free consultation and we'll help you choose the right package for your goals, budget, and timeline.
          </p>
          <button className="cta-main text-white inter-font font-bold px-12 py-5 rounded-xl shadow-xl">
            <span className="flex items-center gap-3 text-[15px]">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
          <p className="inter-font text-xs mt-4" style={{ color:'rgba(255,255,255,0.28)' }}>
            No commitment required &nbsp;·&nbsp; Response within 24 hours
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;