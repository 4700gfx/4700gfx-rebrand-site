import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, ChevronLeft, ChevronRight,
  ExternalLink, LayoutGrid, Layers,
  Clock, FileText, Package, CheckCircle2,
  Pause, Play, Tag, BookOpen,
} from 'lucide-react';

import labelScreenshot  from '../images/4700enterprises.png';
import labelScreenshot2 from '../images/4700enterprises-team.png';
import labelScreenshot3 from '../images/4700enterprises-about.png';
import nailCanvas1      from '../images/the-nail-canvas-hero.png';
import nailCanvas2      from '../images/the-nail-canvas-testimony.png';
import nailCanvas3      from '../images/the-nail-canvas-benefits.png';
import mohScreenshot1   from '../images/moh-testimony.png';
import mohScreenshot2   from '../images/moh-services.png';
import mohScreenshot3   from '../images/moh-faq-footer.png';
import zubarScreenshot  from '../images/zubar-hero.png';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    slug: '4700-enterprises',
    name: '4700 Enterprises',
    category: 'Music & Media',
    tagline: 'Full Record Label Relaunch',
    description:
      'A comprehensive media and music website showcasing multiple sections, divisions, team profiles, and detailed service offerings. Built with modern React architecture and custom animations to create an engaging, conversion-focused experience.',
    highlights: [
      'Custom-coded multi-page architecture with seamless navigation',
      'Team member profiles with dynamic filtering capabilities',
      'Service showcase with interactive hover effects',
      'Fully responsive design optimised for all devices',
      'Integrated contact forms with real-time validation',
    ],
    tags: ['Branding', 'Multi-Page', 'Music', 'React'],
    images: [labelScreenshot, labelScreenshot2, labelScreenshot3],
    stats: { pages: '8', timeline: '6 weeks', package: 'GROWTH' },
    liveUrl: 'https://4700enterprises.com',
    caseStudySlug: '4700-enterprises',
    results: [
      { metric: '75%', label: 'Traffic Growth' },
      { metric: '#1',  label: 'Google Ranking' },
      { metric: '250%',label: 'SEO Growth'     },
    ],
  },
  {
    id: 2,
    slug: 'the-nail-canvas',
    name: 'The Nail Canvas',
    category: 'Beauty & Wellness',
    tagline: 'Premium Nail Salon Experience',
    description:
      'Elegant salon website featuring services, testimonials, and a booking-integrated gallery showcase. Designed to reflect the luxury and artistry of premium nail services with stunning visuals and silky smooth interactions.',
    highlights: [
      'Stunning hero section with professional photography',
      'Service catalog with detailed pricing and descriptions',
      'Client testimonial carousel with star ratings',
      'Benefits section highlighting unique value propositions',
      'Mobile-first design for on-the-go bookings',
    ],
    tags: ['E-Commerce', 'Booking', 'Lifestyle', 'Gallery'],
    images: [nailCanvas1, nailCanvas2, nailCanvas3],
    stats: { pages: '5', timeline: '4 weeks', package: 'ELEVATE' },
    liveUrl: 'https://thenailcanvas.com',
    caseStudySlug: 'the-nail-canvas',
    results: [
      { metric: '2x',   label: 'Online Bookings'  },
      { metric: '80%',  label: 'Automation Rate'  },
      { metric: '15hrs',label: 'Saved Weekly'      },
    ],
  },
  {
    id: 3,
    slug: 'moh-services',
    name: 'MOH Services',
    category: 'Healthcare',
    tagline: 'Healthcare Consulting Platform',
    description:
      'Professional service website with testimonials, detailed service pages, a comprehensive FAQ section, and contact integration. Designed to build trust and credibility in the healthcare consulting space with clean, authoritative aesthetics.',
    highlights: [
      'Trust-building testimonials section with video integration',
      'Comprehensive service pages with detailed explanations',
      'Interactive FAQ accordion for quick information access',
      'Professional footer with multiple contact methods',
      'HIPAA-compliant contact forms and data handling',
    ],
    tags: ['Healthcare', 'Professional', 'Multi-Page', 'Consulting'],
    images: [mohScreenshot1, mohScreenshot2, mohScreenshot3],
    stats: { pages: '6', timeline: '5 weeks', package: 'ELEVATE' },
    liveUrl: 'https://moh.life',
    caseStudySlug: 'moh-services',
    results: [
      { metric: '65%', label: 'Increased Traffic'   },
      { metric: '92%', label: 'Client Satisfaction' },
      { metric: '30%', label: 'Lead Generation'     },
    ],
  },
  {
    id: 4,
    slug: 'zubar',
    name: 'ZuBar South Florida',
    category: 'Hospitality',
    tagline: 'The New Lounge in South Florida',
    description:
      'Dynamic co-working space and night lounge landing page featuring video pop-ups, newsletter subscriptions, and a strategic contact form for lead generation. Built to inspire with energetic design elements and a seamless scalable experience.',
    highlights: [
      'Sleek sections with custom brand-aligned fonts',
      'Strategic pop-ups for increased user interaction',
      'Intuitive contact form for seamless lead generation',
      'Mobile-first responsive layout',
      'Ongoing maintenance and brand evolution support',
    ],
    tags: ['Hospitality', 'Landing Page', 'Lead Gen', 'Branding'],
    images: [zubarScreenshot],
    stats: { pages: '4', timeline: '4 weeks', package: 'LAUNCH' },
    liveUrl: 'https://zubarfl.com/',
    caseStudySlug: 'zubar',
    results: [
      { metric: '58%', label: 'Lower Bounce Rate' },
      { metric: '4.2m', label: 'Avg Session Time' },
      { metric: '30%',  label: 'Lead Generation'  },
    ],
  },
];

const summaryStats = [
  { value: '20+',   label: 'Projects Delivered' },
  { value: '100%',  label: 'Client Satisfaction' },
  { value: '24-48h',label: 'Support Response'   },
  { value: '5.0★',  label: 'Average Rating'      },
];

const AUTOPLAY_MS = 6000;

const pkgStyle = {
  LAUNCH:  { bg: 'rgba(122,146,153,0.15)', border: 'rgba(122,146,153,0.4)',  text: '#7A9299' },
  ELEVATE: { bg: 'rgba(74,101,114,0.20)',  border: 'rgba(74,101,114,0.5)',   text: '#8DAAB0' },
  GROWTH:  { bg: 'rgba(90,89,85,0.20)',    border: 'rgba(90,89,85,0.5)',     text: '#C0BFBA' },
  SCALE:   { bg: 'rgba(122,146,153,0.25)', border: 'rgba(122,146,153,0.6)',  text: '#FFFFFF' },
};

// ─────────────────────────────────────────────────────────────────────────────
// Progress bar
// ─────────────────────────────────────────────────────────────────────────────
const ProgressBar = ({ isPlaying, duration, resetKey, onComplete }) => {
  const [pct, setPct] = useState(0);
  const rafRef        = useRef(null);
  const startRef      = useRef(null);

  useEffect(() => {
    setPct(0);
    cancelAnimationFrame(rafRef.current);
    if (!isPlaying) return;
    startRef.current = null;
    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min(((ts - startRef.current) / duration) * 100, 100);
      setPct(p);
      if (p < 100) rafRef.current = requestAnimationFrame(tick);
      else         onComplete();
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, duration, resetKey]); // eslint-disable-line

  return (
    <div className="h-[3px] w-full rounded-full overflow-hidden" style={{ background:'rgba(122,146,153,0.15)' }}>
      <div className="h-full rounded-full"
        style={{ width:`${pct}%`, background:'linear-gradient(90deg,#7A9299,#4A6572)', transition:'width 0.04s linear' }} />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Portfolio
// ─────────────────────────────────────────────────────────────────────────────
const Portfolio = ({ onOpenCaseStudy }) => {
  const [viewMode, setViewMode] = useState('carousel');
  const [slide,    setSlide]    = useState(0);
  const [imgIdx,   setImgIdx]   = useState(0);
  const [playing,  setPlaying]  = useState(true);
  const [progKey,  setProgKey]  = useState(0);
  const [cardKey,  setCardKey]  = useState(0);

  const sectionRef  = useRef(null);
  const badgeRef    = useRef(null);
  const h2Ref       = useRef(null);
  const ruleRef     = useRef(null);
  const subRef      = useRef(null);
  const toggleRef   = useRef(null);
  const carouselRef = useRef(null);
  const statsRef    = useRef(null);
  const ctaRef      = useRef(null);
  const gridRef     = useRef(null);

  const goTo = useCallback((i) => {
    setSlide(i); setImgIdx(0);
    setProgKey((k) => k + 1);
    setCardKey((k) => k + 1);
  }, []);
  const next   = useCallback(() => goTo((slide + 1) % projects.length), [slide, goTo]);
  const prev   = useCallback(() => goTo((slide - 1 + projects.length) % projects.length), [slide, goTo]);
  const manual = (fn) => { fn(); setPlaying(false); };

  const cur = projects[slide];
  const pkg = pkgStyle[cur.stats.package] || pkgStyle.LAUNCH;

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(badgeRef.current,
        { y:40, opacity:0, scale:0.78 },
        { y:0, opacity:1, scale:1, duration:0.75, ease:'back.out(2)',
          scrollTrigger:{ trigger:badgeRef.current, start:'top 87%', toggleActions:'play none none none' } }
      );
      const words = h2Ref.current?.querySelectorAll('.gsap-w');
      if (words?.length) {
        gsap.fromTo(words,
          { y:60, opacity:0, rotateX:-45 },
          { y:0, opacity:1, rotateX:0, duration:0.78, stagger:0.065, ease:'power3.out',
            scrollTrigger:{ trigger:h2Ref.current, start:'top 84%', toggleActions:'play none none none' } }
        );
      }
      gsap.fromTo(ruleRef.current,
        { scaleX:0, opacity:0 },
        { scaleX:1, opacity:1, duration:0.65, ease:'power2.out', transformOrigin:'center',
          scrollTrigger:{ trigger:ruleRef.current, start:'top 88%', toggleActions:'play none none none' } }
      );
      gsap.fromTo([subRef.current, toggleRef.current],
        { y:28, opacity:0 },
        { y:0, opacity:1, duration:0.70, stagger:0.1, ease:'power2.out',
          scrollTrigger:{ trigger:subRef.current, start:'top 86%', toggleActions:'play none none none' } }
      );
      gsap.fromTo(carouselRef.current,
        { y:72, opacity:0 },
        { y:0, opacity:1, duration:1.0, ease:'power3.out',
          scrollTrigger:{ trigger:carouselRef.current, start:'top 82%', toggleActions:'play none none none' } }
      );
      const sc = statsRef.current?.querySelectorAll('.sum-card');
      if (sc?.length) {
        gsap.fromTo(sc,
          { y:44, opacity:0, scale:0.9 },
          { y:0, opacity:1, scale:1, duration:0.65, stagger:0.10, ease:'back.out(1.5)',
            scrollTrigger:{ trigger:statsRef.current, start:'top 85%', toggleActions:'play none none none' } }
        );
      }
      gsap.fromTo(ctaRef.current,
        { y:50, opacity:0 },
        { y:0, opacity:1, duration:0.85, ease:'power3.out',
          scrollTrigger:{ trigger:ctaRef.current, start:'top 88%', toggleActions:'play none none none' } }
      );
      sectionRef.current?.querySelectorAll('.orb-par').forEach((el, i) => {
        gsap.to(el, {
          y: i%2===0 ? -90 : -55, ease:'none',
          scrollTrigger:{ trigger:sectionRef.current, start:'top bottom', end:'bottom top', scrub:i%2===0?2:3 },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Card slide-in on change
  useEffect(() => {
    if (!carouselRef.current) return;
    const left  = carouselRef.current.querySelector('.card-img-col');
    const right = carouselRef.current.querySelector('.card-info-col');
    if (left)  gsap.fromTo(left,  { x:-40, opacity:0 }, { x:0, opacity:1, duration:0.55, ease:'power3.out' });
    if (right) gsap.fromTo(right, { x:40,  opacity:0 }, { x:0, opacity:1, duration:0.55, ease:'power3.out', delay:0.07 });
  }, [cardKey]);

  useEffect(() => {
    if (viewMode !== 'grid' || !gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.grid-card');
    gsap.fromTo(cards,
      { y:50, opacity:0, scale:0.93 },
      { y:0, opacity:1, scale:1, duration:0.6, stagger:0.09, ease:'power3.out' }
    );
  }, [viewMode]);

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 lg:py-32 relative overflow-hidden">
      <style>{`
        @keyframes sh-port { 0%{background-position:-200% center}100%{background-position:200% center} }
        @keyframes img-ken  { 0%{transform:scale(1)}100%{transform:scale(1.06)} }
        @keyframes thumb-in { from{opacity:0;transform:translateY(8px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)} }

        .acc-port{background:linear-gradient(90deg,#7A9299 0%,#fff 35%,#4A6572 60%,#7A9299 100%);background-size:250% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:sh-port 4.5s linear infinite}
        .sh-rule-p{background:linear-gradient(90deg,transparent,#7A9299 30%,#4A6572 70%,transparent);background-size:200% auto;animation:sh-port 3.5s linear infinite}
        .port-badge{background:rgba(122,146,153,0.09);border:1px solid rgba(122,146,153,0.28);backdrop-filter:blur(10px)}
        .view-btn{background:transparent;border:1px solid transparent;transition:all 0.3s ease;color:rgba(255,255,255,0.50)}
        .view-btn.v-active{background:rgba(122,146,153,0.15);border-color:rgba(122,146,153,0.45);color:#ffffff;box-shadow:0 4px 16px rgba(74,101,114,0.22)}
        .view-btn:hover:not(.v-active){color:rgba(255,255,255,0.80)}
        .port-card{background:linear-gradient(145deg,rgba(122,146,153,0.09) 0%,rgba(10,10,8,0.60) 100%);border:1px solid rgba(122,146,153,0.20);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);position:relative;overflow:hidden}
        .port-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(122,146,153,0.55),rgba(74,101,114,0.55),transparent)}
        .main-img{width:100%;height:100%;object-fit:cover;animation:img-ken 8s ease-in-out alternate infinite}
        .thumb{flex-shrink:0;width:72px;height:52px;border-radius:8px;overflow:hidden;border:2px solid rgba(122,146,153,0.20);cursor:pointer;transition:all 0.3s ease;animation:thumb-in 0.4s ease both}
        .thumb:hover{border-color:rgba(122,146,153,0.60);transform:scale(1.06)}
        .thumb.t-active{border-color:#7A9299;box-shadow:0 0 12px rgba(122,146,153,0.45)}
        .thumb img{width:100%;height:100%;object-fit:cover}
        .cat-badge{background:rgba(10,10,8,0.75);border:1px solid rgba(122,146,153,0.35);backdrop-filter:blur(8px)}
        .hl-item{display:flex;gap:10px;align-items:flex-start;padding:8px 10px;border-radius:10px;background:rgba(122,146,153,0.06);border:1px solid rgba(122,146,153,0.12);transition:all 0.28s ease}
        .hl-item:hover{background:rgba(122,146,153,0.12);border-color:rgba(122,146,153,0.30);transform:translateX(4px)}
        .tag-pill{background:rgba(122,146,153,0.08);border:1px solid rgba(122,146,153,0.22);transition:all 0.28s ease}
        .tag-pill:hover{background:rgba(122,146,153,0.18);border-color:rgba(122,146,153,0.48)}
        .stat-chip{background:rgba(122,146,153,0.08);border:1px solid rgba(122,146,153,0.18);transition:all 0.3s ease}
        .stat-chip:hover{background:rgba(122,146,153,0.16);border-color:rgba(122,146,153,0.40);transform:translateY(-2px)}
        .nav-btn-p{background:rgba(122,146,153,0.09);border:1px solid rgba(122,146,153,0.26);backdrop-filter:blur(8px);transition:all 0.3s ease}
        .nav-btn-p:hover{background:rgba(122,146,153,0.22);border-color:rgba(122,146,153,0.60);transform:scale(1.12);box-shadow:0 8px 28px rgba(74,101,114,.32)}
        .dpill-p{height:8px;border-radius:4px;background:rgba(255,255,255,0.18);cursor:pointer;transition:all 0.4s cubic-bezier(.4,0,.2,1)}
        .dpill-p:hover{background:rgba(122,146,153,0.50)}
        .dpill-p.dp-on{background:linear-gradient(90deg,#7A9299,#4A6572)!important;box-shadow:0 2px 12px rgba(74,101,114,.45)}
        .cta-p{background:linear-gradient(135deg,#7A9299 0%,#4A6572 100%);border:1px solid rgba(122,146,153,0.28);transition:all 0.35s ease;position:relative;overflow:hidden}
        .cta-p::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.11),transparent);opacity:0;transition:opacity 0.35s}
        .cta-p:hover::after{opacity:1}
        .cta-p:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 18px 44px rgba(74,101,114,.50)}
        .cta-p span{position:relative;z-index:1}
        .cta-ghost-p{background:rgba(122,146,153,0.07);border:1px solid rgba(122,146,153,0.28);transition:all 0.35s ease}
        .cta-ghost-p:hover{background:rgba(122,146,153,0.16);border-color:rgba(122,146,153,0.55);transform:translateY(-3px) scale(1.04);box-shadow:0 14px 36px rgba(74,101,114,0.25)}
        .sum-card{background:linear-gradient(145deg,rgba(122,146,153,0.09) 0%,rgba(10,10,8,0.55) 100%);border:1px solid rgba(122,146,153,0.18);backdrop-filter:blur(14px);transition:all 0.38s ease;position:relative;overflow:hidden}
        .sum-card::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(122,146,153,0.6),transparent);opacity:0;transition:opacity 0.38s}
        .sum-card:hover::after{opacity:1}
        .sum-card:hover{border-color:rgba(122,146,153,0.48);transform:translateY(-6px);box-shadow:0 20px 48px rgba(74,101,114,0.28)}
        .grid-card{background:linear-gradient(145deg,rgba(122,146,153,0.09) 0%,rgba(10,10,8,0.60) 100%);border:1px solid rgba(122,146,153,0.18);backdrop-filter:blur(14px);transition:all 0.4s cubic-bezier(0.34,1.1,0.64,1);position:relative;overflow:hidden}
        .grid-card::after{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(122,146,153,0.55),transparent);opacity:0;transition:opacity 0.4s}
        .grid-card:hover::after{opacity:1}
        .grid-card:hover{border-color:rgba(122,146,153,0.50);transform:translateY(-10px) scale(1.02);box-shadow:0 28px 60px rgba(74,101,114,.30)}
        .grid-card:hover .gc-img{transform:scale(1.07)}
        .gc-img{transition:transform 0.6s ease;width:100%;height:100%;object-fit:cover}
        .cta-block{background:linear-gradient(145deg,rgba(122,146,153,0.08) 0%,rgba(10,10,8,0.62) 100%);border:1px solid rgba(122,146,153,0.20);backdrop-filter:blur(16px);position:relative;overflow:hidden}
        .cta-block::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(122,146,153,0.55),rgba(74,101,114,0.55),transparent)}

        /* Result chips on carousel card */
        .result-chip{background:rgba(122,146,153,0.08);border:1px solid rgba(122,146,153,0.18);border-radius:12px;padding:10px 14px;text-align:center;transition:all 0.3s ease}
        .result-chip:hover{background:rgba(122,146,153,0.16);border-color:rgba(122,146,153,0.38);transform:translateY(-3px)}

        .orb-p{position:absolute;border-radius:50%;pointer-events:none;filter:blur(72px)}
        .gsap-w{display:inline-block}
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-p orb-par w-[520px] h-[520px] top-[12%] left-[5%]"
          style={{ background:'radial-gradient(circle,rgba(122,146,153,0.10) 0%,transparent 70%)' }} />
        <div className="orb-p orb-par w-[420px] h-[420px] bottom-[15%] right-[6%]"
          style={{ background:'radial-gradient(circle,rgba(74,101,114,0.09) 0%,transparent 70%)' }} />
        <div className="orb-p w-[300px] h-[300px] top-[55%] left-[42%]"
          style={{ background:'radial-gradient(circle,rgba(90,89,85,0.06) 0%,transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage:`linear-gradient(rgba(122,146,153,1) 1px,transparent 1px),linear-gradient(90deg,rgba(122,146,153,1) 1px,transparent 1px)`, backgroundSize:'80px 80px' }} />
      </div>

      <div className="w-[88%] max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div ref={badgeRef} className="inline-flex items-center gap-2.5 mb-7 px-5 py-2 rounded-full port-badge">
            <Layers className="w-4 h-4 text-gfx-teal" />
            <span className="inter-font text-gfx-teal font-semibold text-xs uppercase tracking-widest">Featured Work</span>
          </div>
          <h2 ref={h2Ref} className="rajdhani-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-5" style={{ perspective:'900px' }}>
            {'Featured'.split(' ').map((w,i) => <span key={i} className="gsap-w">{w}&nbsp;</span>)}
            <span className="acc-port">{'Projects.'.split(' ').map((w,i) => <span key={i} className="gsap-w">{w}&nbsp;</span>)}</span>
          </h2>
          <div ref={ruleRef} className="sh-rule-p h-[2px] w-24 rounded-full mx-auto mb-6" />
          <p ref={subRef} className="inter-font text-gfx-white/60 text-base lg:text-[17px] max-w-2xl mx-auto mb-8">
            Transforming visions into digital excellence. Every project is custom-coded, conversion-focused, and built to last.
          </p>
          <div ref={toggleRef} className="inline-flex gap-1.5 p-1.5 rounded-xl"
            style={{ background:'rgba(122,146,153,0.07)', border:'1px solid rgba(122,146,153,0.18)' }}>
            <button onClick={() => setViewMode('carousel')}
              className={`view-btn inter-font font-semibold text-sm px-5 py-2 rounded-lg flex items-center gap-2 ${viewMode==='carousel'?'v-active':''}`}>
              <Layers className="w-4 h-4" /> Carousel
            </button>
            <button onClick={() => setViewMode('grid')}
              className={`view-btn inter-font font-semibold text-sm px-5 py-2 rounded-lg flex items-center gap-2 ${viewMode==='grid'?'v-active':''}`}>
              <LayoutGrid className="w-4 h-4" /> Grid
            </button>
          </div>
        </div>

        {/* ── Carousel ── */}
        {viewMode === 'carousel' && (
          <div ref={carouselRef} className="mb-14">
            <div className="mb-5 px-1">
              <ProgressBar isPlaying={playing} duration={AUTOPLAY_MS} resetKey={progKey} onComplete={next} />
            </div>

            <div className="port-card rounded-3xl p-6 lg:p-10 overflow-hidden">
              <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12">

                {/* LEFT */}
                <div className="card-img-col flex flex-col gap-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl"
                    style={{ boxShadow:'0 24px 56px rgba(0,0,0,0.45)' }}>
                    <img src={cur.images[imgIdx]} alt={`${cur.name} screenshot`} className="main-img" />
                    <div className="absolute top-3 left-3">
                      <span className="cat-badge inter-font text-gfx-white font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full">{cur.category}</span>
                    </div>
                    {cur.liveUrl && (
                      <a href={cur.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="absolute top-3 right-3 cat-badge text-gfx-teal px-3 py-1 rounded-full flex items-center gap-1.5 inter-font font-semibold text-xs hover:border-gfx-teal transition-colors">
                        <ExternalLink className="w-3 h-3" /> Live Site
                      </a>
                    )}
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-3">
                    {cur.images.map((img, ii) => (
                      <button key={ii} onClick={() => setImgIdx(ii)}
                        className={`thumb ${ii===imgIdx?'t-active':''}`} style={{ animationDelay:`${ii*0.08}s` }}>
                        <img src={img} alt={`View ${ii+1}`} />
                      </button>
                    ))}
                    <div className="flex-1" />
                  </div>

                  {/* Result metrics */}
                  {cur.results && (
                    <div className="grid grid-cols-3 gap-2">
                      {cur.results.map((r, i) => (
                        <div key={i} className="result-chip">
                          <div className="rajdhani-font text-gfx-teal text-2xl font-bold leading-none mb-0.5">{r.metric}</div>
                          <div className="inter-font text-gfx-white/55 text-[10px] uppercase tracking-widest">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stat chips */}
                  <div className="flex gap-3 flex-wrap">
                    <div className="stat-chip rounded-xl px-4 py-2.5 flex items-center gap-2.5 flex-1">
                      <FileText className="w-4 h-4 text-gfx-teal flex-shrink-0" />
                      <div>
                        <p className="inter-font text-gfx-white/45 text-[10px] uppercase tracking-widest">Pages</p>
                        <p className="rajdhani-font text-gfx-white font-bold text-lg leading-none">{cur.stats.pages}</p>
                      </div>
                    </div>
                    <div className="stat-chip rounded-xl px-4 py-2.5 flex items-center gap-2.5 flex-1">
                      <Clock className="w-4 h-4 text-gfx-teal flex-shrink-0" />
                      <div>
                        <p className="inter-font text-gfx-white/45 text-[10px] uppercase tracking-widest">Timeline</p>
                        <p className="rajdhani-font text-gfx-white font-bold text-lg leading-none">{cur.stats.timeline}</p>
                      </div>
                    </div>
                    <div className="stat-chip rounded-xl px-4 py-2.5 flex items-center gap-2.5 flex-1"
                      style={{ background:pkg.bg, borderColor:pkg.border }}>
                      <Package className="w-4 h-4 flex-shrink-0" style={{ color:pkg.text }} />
                      <div>
                        <p className="inter-font text-gfx-white/45 text-[10px] uppercase tracking-widest">Package</p>
                        <p className="rajdhani-font font-bold text-lg leading-none" style={{ color:pkg.text }}>{cur.stats.package}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="card-info-col flex flex-col gap-5">
                  <div>
                    <h3 className="rajdhani-font text-gfx-white text-3xl lg:text-4xl font-bold leading-tight mb-1">{cur.name}</h3>
                    <p className="inter-font text-gfx-teal font-semibold text-sm">{cur.tagline}</p>
                  </div>
                  <div className="h-[1px] rounded-full" style={{ background:'rgba(122,146,153,0.18)' }} />
                  <p className="inter-font text-gfx-white/65 text-sm lg:text-[15px] leading-relaxed">{cur.description}</p>

                  <div>
                    <p className="inter-font text-gfx-white/45 text-[10px] uppercase tracking-widest font-semibold mb-2.5 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gfx-teal" /> Key Features
                    </p>
                    <div className="flex flex-col gap-2">
                      {cur.highlights.map((h, i) => (
                        <div key={i} className="hl-item">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gfx-teal flex-shrink-0 mt-0.5" />
                          <span className="inter-font text-gfx-white/72 text-sm leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cur.tags.map((t, i) => (
                      <span key={i} className="tag-pill inter-font text-gfx-white/75 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Tag className="w-3 h-3 text-gfx-teal" />{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto pt-2">
                    {cur.liveUrl && (
                      <a href={cur.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="cta-p text-white inter-font font-bold px-6 py-3 rounded-xl flex-1 flex items-center justify-center">
                        <span className="flex items-center gap-2 text-sm">View Live Site <ExternalLink className="w-4 h-4" /></span>
                      </a>
                    )}
                    {onOpenCaseStudy && (
                      <button
                        onClick={() => onOpenCaseStudy(cur.caseStudySlug)}
                        className="cta-ghost-p text-gfx-white inter-font font-semibold px-6 py-3 rounded-xl flex-1 text-sm flex items-center justify-center gap-2">
                        <BookOpen className="w-4 h-4 text-gfx-teal" /> Case Study
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots + controls */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {projects.map((_, i) => (
                <div key={i} onClick={() => { goTo(i); setPlaying(false); }}
                  className={`dpill-p ${i===slide?'dp-on':''}`}
                  style={{ width:i===slide?36:8 }} />
              ))}
              <button onClick={() => setPlaying(p=>!p)}
                className="nav-btn-p w-9 h-9 rounded-full flex items-center justify-center text-gfx-white ml-2">
                {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>
            </div>
            <div className="flex justify-center gap-3 mt-5">
              <button onClick={() => manual(prev)} className="nav-btn-p w-11 h-11 rounded-full flex items-center justify-center text-gfx-white">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => manual(next)} className="nav-btn-p w-11 h-11 rounded-full flex items-center justify-center text-gfx-white">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* ── Grid ── */}
        {viewMode === 'grid' && (
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {projects.map((proj) => (
              <div key={proj.id} className="grid-card rounded-2xl overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img src={proj.images[0]} alt={proj.name} className="gc-img" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4"
                    style={{ background:'linear-gradient(to top,rgba(10,10,8,0.92) 0%,transparent 60%)', opacity:0, transition:'opacity 0.4s' }}
                    onMouseEnter={e=>e.currentTarget.style.opacity=1}
                    onMouseLeave={e=>e.currentTarget.style.opacity=0}>
                    <div className="flex gap-2">
                      <a href={proj.liveUrl||'#'} target="_blank" rel="noopener noreferrer"
                        className="cta-p text-white inter-font font-bold py-2 rounded-lg text-xs flex-1 text-center">
                        <span className="flex items-center justify-center gap-1.5">Live <ExternalLink className="w-3 h-3" /></span>
                      </a>
                      {onOpenCaseStudy && (
                        <button onClick={() => onOpenCaseStudy(proj.caseStudySlug)}
                          className="cta-ghost-p text-white inter-font font-bold py-2 px-3 rounded-lg text-xs flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-2.5 left-2.5">
                    <span className="cat-badge inter-font text-gfx-white font-semibold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full">{proj.category}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div>
                    <h3 className="rajdhani-font text-gfx-white text-xl font-bold leading-tight">{proj.name}</h3>
                    <p className="inter-font text-gfx-teal text-xs font-semibold mt-0.5">{proj.tagline}</p>
                  </div>
                  <p className="inter-font text-gfx-white/60 text-xs leading-relaxed line-clamp-2">{proj.description}</p>
                  {proj.results && (
                    <div className="flex gap-2 flex-wrap">
                      {proj.results.map((r,i)=>(
                        <div key={i} className="result-chip flex-1 min-w-0">
                          <div className="rajdhani-font text-gfx-teal text-base font-bold leading-none">{r.metric}</div>
                          <div className="inter-font text-gfx-white/45 text-[9px] uppercase tracking-widest">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0,3).map((t,i)=>(
                      <span key={i} className="tag-pill inter-font text-gfx-white/65 text-[10px] px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {summaryStats.map((s,i)=>(
            <div key={i} className="sum-card rounded-2xl p-6 text-center">
              <div className="rajdhani-font text-gfx-teal text-4xl lg:text-5xl font-bold mb-1.5 leading-none">{s.value}</div>
              <div className="inter-font text-sm" style={{ color:'rgba(255,255,255,0.58)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="cta-block rounded-3xl p-10 lg:p-16 text-center">
          <h3 className="rajdhani-font text-gfx-white text-3xl lg:text-5xl font-bold mb-4 leading-tight">Let's Build Something Amazing</h3>
          <p className="inter-font text-gfx-white/60 text-sm lg:text-base mb-9 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Schedule a free consultation and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="cta-p text-white inter-font font-bold px-10 py-4 rounded-xl shadow-xl">
              <span className="flex items-center gap-3 text-[15px]">Start Your Project Today <ArrowRight className="w-5 h-5" /></span>
            </button>
            <button className="cta-ghost-p text-gfx-white inter-font font-semibold px-10 py-4 rounded-xl text-[15px] flex items-center gap-3">
              View All Work <ArrowRight className="w-4 h-4 text-gfx-teal" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;