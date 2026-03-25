import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../images/logo-white.png';

gsap.registerPlugin(ScrollTrigger);

// ── Inline SVG logos — no external image files needed ─────────────────
const ReactSVG = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" style={{width:'100%',height:'100%'}}>
    <circle cx="50" cy="50" r="9.5" fill="#61DAFB"/>
    <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#61DAFB" strokeWidth="3.5"/>
    <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(60 50 50)"/>
    <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(120 50 50)"/>
  </svg>
);

const ShopifySVG = () => (
  <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <path d="M72 24.5c-.3-2.1-2.1-3.2-3.5-3.3-1.5-.1-5.7-.4-5.7-.4s-3.8-3.7-4.2-4.1c-.4-.4-1.2-.3-1.6-.2l-2 .6S53 15 52.2 14.7c-2.6-.8-5.4-.1-7.1 1.9-3.5 3.1-4.8 7.7-5.1 11.1l-7.8 2.4s-2.3.7-2.4 3L27 88c-.1 1.6 1 2.9 2.6 2.9h49c1.5 0 2.7-1.3 2.6-2.9L72 24.5z" fill="#96BF48"/>
    <path d="M68.5 21.2c-1.5-.1-5.7-.4-5.7-.4s-3.8-3.7-4.2-4.1c-.2-.2-.4-.3-.6-.2V91h24.9c1.5 0 2.7-1.3 2.6-2.9L72 24.5c-.3-2.1-2.1-3.2-3.5-3.3z" fill="#5E8E3E"/>
    <path d="M52.5 36.8l-2.5 7.5s-2.2-1.2-4.9-1c-3.9.2-3.9 2.7-3.9 3.3.2 3.4 9.2 4.2 9.7 12.1.4 6.3-3.3 10.6-8.7 10.9-6.4.4-9.7-3.4-9.7-3.4l1.3-5.7s3.4 2.6 6.1 2.4c1.8-.1 2.4-1.5 2.3-2.5-.3-4.4-7.7-4.2-8.1-11.5-.4-6.1 3.6-12.3 12.4-12.8 3.4-.2 5.9.7 6 .7z" fill="#fff"/>
  </svg>
);

const FigmaSVG = () => (
  <svg viewBox="0 0 78 116" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <rect x="2"  y="2"  width="35" height="35" rx="17.5" fill="#F24E1E"/>
    <rect x="41" y="2"  width="35" height="35" rx="17.5" fill="#FF7262"/>
    <rect x="2"  y="40" width="35" height="35" rx="17.5" fill="#A259FF"/>
    <rect x="2"  y="78" width="35" height="35" rx="17.5" fill="#0ACF83"/>
    <circle cx="58.5" cy="57.5" r="17.5" fill="#1ABCFE"/>
  </svg>
);

const NextjsSVG = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <circle cx="50" cy="50" r="46" fill="#000" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
    <path d="M28 72V30l44 54h-8L28 36v36z" fill="#fff"/>
    <path d="M28 30h8v26L28 44z" fill="#fff"/>
    <path d="M64 30h8v40h-8z" fill="#fff"/>
  </svg>
);

const TailwindSVG = () => (
  <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <path d="M25 7.5C30.8 2.5 37.5 0 50 0c18.75 0 25 10 37.5 7.5-5.8 5-12.5 7.5-25 7.5-18.75 0-25-10-37.5-7.5z" fill="#38BDF8"/>
    <path d="M0 30C5.8 25 12.5 22.5 25 22.5c18.75 0 25 10 37.5 7.5-5.8 5-12.5 7.5-25 7.5-18.75 0-25-10-37.5-7.5z" fill="#38BDF8"/>
  </svg>
);

const WordPressSVG = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <circle cx="50" cy="50" r="47" fill="#21759B"/>
    <path d="M7 50C7 26.2 26.2 7 50 7c8.4 0 16.2 2.3 22.9 6.3L14 63.5A42.6 42.6 0 0 1 7 50z" fill="#fff" opacity="0.9"/>
    <path d="M93 50c0 23.8-19.2 43-43 43-7.5 0-14.5-1.9-20.6-5.3L82 31.5A42.6 42.6 0 0 1 93 50z" fill="#fff" opacity="0.9"/>
    <path d="M50 20c16.6 0 30 13.4 30 30S66.6 80 50 80 20 66.6 20 50s13.4-30 30-30zm0 5c-6.8 0-13 2.8-17.5 7.3L66 72.2A24.8 24.8 0 0 0 74.8 55H60l-4-12h18.8A25 25 0 0 0 50 25zm-17.5 7.3A25 25 0 0 0 25.2 55H40l4.5 13.5L25.8 32.3z" fill="#21759B"/>
  </svg>
);

const techStack = [
  { name: 'React',     Logo: ReactSVG     },
  { name: 'Shopify',   Logo: ShopifySVG   },
  { name: 'Figma',     Logo: FigmaSVG     },
  { name: 'Next.js',   Logo: NextjsSVG    },
  { name: 'Tailwind',  Logo: TailwindSVG  },
  { name: 'WordPress', Logo: WordPressSVG },
];

const quickStats = [
  { label: 'Experience',   stat: '3+ Years',  icon: '📅' },
  { label: 'Projects',     stat: '20+ Done',  icon: '🚀' },
  { label: 'Rating',       stat: '5.0 Stars', icon: '⭐' },
  { label: 'Satisfaction', stat: '100%',      icon: '💯' },
];

// ─────────────────────────────────────────────────────────────────────────────
const Hero = () => {
  const sectionRef  = useRef(null);
  const badgeRef    = useRef(null);
  const headlineRef = useRef(null);
  const subRef      = useRef(null);
  const bodyRef     = useRef(null);
  const ctaRef      = useRef(null);
  const socialRef   = useRef(null);
  const logoColRef  = useRef(null);
  const statsRef    = useRef(null);
  const carouselRef = useRef(null);
  const bgOrb1Ref   = useRef(null);
  const bgOrb2Ref   = useRef(null);
  const bgOrb3Ref   = useRef(null);
  const ruleRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        [bgOrb1Ref.current, bgOrb2Ref.current, bgOrb3Ref.current],
        { scale: 0.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, stagger: 0.2, ease: 'power2.out' }, 0
      );

      tl.fromTo(
        logoColRef.current,
        { x: -90, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, duration: 1.1 }, 0.15
      );

      tl.fromTo(
        badgeRef.current,
        { y: 28, opacity: 0, scale: 0.82 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65, ease: 'back.out(1.8)' }, 0.45
      );

      const words = headlineRef.current?.querySelectorAll('.word');
      if (words?.length) {
        tl.fromTo(
          words,
          { y: 55, opacity: 0, rotateX: -35 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.70, stagger: 0.075, transformOrigin: 'top center' }, 0.58
        );
      }

      tl.fromTo(
        ruleRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.55, ease: 'power2.out', transformOrigin: 'left' }, 0.90
      );

      tl.fromTo(
        [subRef.current, bodyRef.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.70, stagger: 0.16 }, 0.92
      );

      tl.fromTo(
        ctaRef.current?.children ? [...ctaRef.current.children] : ctaRef.current,
        { y: 22, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.10, ease: 'back.out(1.4)' }, 1.15
      );

      tl.fromTo(
        socialRef.current,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55 }, 1.32
      );

      const statCards = statsRef.current?.querySelectorAll('.stat-card-item');
      if (statCards?.length) {
        tl.fromTo(
          statCards,
          { y: 44, opacity: 0, scale: 0.86 },
          { y: 0, opacity: 1, scale: 1, duration: 0.60, stagger: 0.10, ease: 'back.out(1.5)' }, 1.25
        );
      }

      tl.fromTo(carouselRef.current, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.70 }, 1.55);

      // Logo float
      gsap.to(logoColRef.current?.querySelector('.logo-float'), {
        y: -20, rotation: 1.8, duration: 3.8, ease: 'sine.inOut', yoyo: true, repeat: -1,
      });

      // Scroll fade-out
      gsap.to(sectionRef.current, {
        opacity: 0, y: -55, scale: 0.97, ease: 'power1.in',
        scrollTrigger: { trigger: sectionRef.current, start: 'bottom 60%', end: 'bottom 10%', scrub: 1.2 },
      });

      // Orb parallax
      gsap.to(bgOrb1Ref.current, { y: -110, scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 2 } });
      gsap.to(bgOrb2Ref.current, { y: -65,  scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 3 } });
      gsap.to(bgOrb3Ref.current, { y: -40,  scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 4 } });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen relative overflow-hidden py-20 lg:py-24">
      <style>{`
        @keyframes shimmer-h {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes scroll-left-h {
          0%   { transform: translateX(0);    }
          100% { transform: translateX(-50%); }
        }
        @keyframes ping-h {
          0%, 100% { transform: scale(1);   opacity: 0.75; }
          50%       { transform: scale(1.9); opacity: 0;    }
        }

        .headline-gradient {
          background: linear-gradient(90deg, #7A9299 0%, #FFFFFF 35%, #4A6572 65%, #7A9299 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-h 4s linear infinite;
        }

        .accent-rule {
          background: linear-gradient(90deg, #7A9299, #4A6572, #7A9299);
          background-size: 200% auto;
          animation: shimmer-h 3s linear infinite;
        }

        .stat-card {
          background: linear-gradient(135deg, rgba(122,146,153,0.10) 0%, rgba(22,22,15,0.62) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(122,146,153,0.26);
          transition: all 0.42s cubic-bezier(0.34,1.2,0.64,1);
          position: relative; overflow: hidden;
        }
        .stat-card::after {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,rgba(122,146,153,0.65),transparent);
          opacity:0; transition:opacity 0.38s;
        }
        .stat-card:hover::after { opacity:1; }
        .stat-card:hover {
          transform: translateY(-10px) scale(1.05);
          background: linear-gradient(135deg, rgba(122,146,153,0.20) 0%, rgba(28,28,18,0.75) 100%);
          border-color: rgba(122,146,153,0.62);
          box-shadow: 0 22px 48px rgba(74,101,114,0.38);
        }

        .cta-primary {
          background: linear-gradient(135deg, #7A9299 0%, #4A6572 100%);
          border: 1px solid rgba(122,146,153,0.25);
          transition: all 0.32s ease;
          position: relative; overflow: hidden;
        }
        .cta-primary::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,0.13),transparent); opacity:0; transition:opacity 0.32s; }
        .cta-primary:hover::after { opacity:1; }
        .cta-primary:hover        { transform:translateY(-3px) scale(1.04); box-shadow:0 16px 40px rgba(74,101,114,0.50); }
        .cta-primary span         { position:relative; z-index:1; }

        .cta-secondary {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(122,146,153,0.32);
          backdrop-filter: blur(12px);
          transition: all 0.32s ease;
        }
        .cta-secondary:hover {
          background: rgba(122,146,153,0.12);
          border-color: rgba(122,146,153,0.65);
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 14px 36px rgba(74,101,114,0.28);
        }

        .hero-badge {
          background: linear-gradient(135deg,rgba(122,146,153,0.12),rgba(74,101,114,0.08));
          border: 1px solid rgba(122,146,153,0.30);
          backdrop-filter: blur(14px);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .hero-badge:hover { border-color:rgba(122,146,153,0.62); box-shadow:0 4px 20px rgba(74,101,114,0.22); }

        .ping-h { animation: ping-h 1.8s ease-in-out infinite; }

        .carousel-wrap:hover .scroll-left-h { animation-play-state: paused; }
        .scroll-left-h {
          animation: scroll-left-h 32s linear infinite;
          display: flex; width: max-content;
        }

        .tech-item {
          transition: all 0.35s cubic-bezier(0.34,1.2,0.64,1);
          opacity: 0.45;
          filter: grayscale(1) brightness(0.65);
        }
        .tech-item:hover {
          opacity: 1;
          filter: grayscale(0) brightness(1);
          transform: translateY(-7px) scale(1.15);
        }

        .proof-item { transition: transform 0.28s ease; }
        .proof-item:hover { transform: translateY(-3px); }

        .word-wrapper { perspective: 700px; display: inline-block; }

        .divider-line {
          height: 1px; flex:1;
          background: linear-gradient(90deg, #7A9299, rgba(74,101,114,0.15));
          opacity: 0.30;
        }
        .divider-line.right {
          background: linear-gradient(90deg, rgba(74,101,114,0.15), #7A9299);
        }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div ref={bgOrb1Ref} className="absolute top-1/4 left-[8%] w-[580px] h-[580px] rounded-full"
          style={{ background:'radial-gradient(circle,rgba(122,146,153,0.13) 0%,transparent 70%)', filter:'blur(54px)' }} />
        <div ref={bgOrb2Ref} className="absolute bottom-1/4 right-[8%] w-[460px] h-[460px] rounded-full"
          style={{ background:'radial-gradient(circle,rgba(74,101,114,0.11) 0%,transparent 70%)', filter:'blur(54px)' }} />
        <div ref={bgOrb3Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full"
          style={{ background:'radial-gradient(circle,rgba(90,89,85,0.07) 0%,transparent 70%)', filter:'blur(44px)' }} />
        <div className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:`linear-gradient(rgba(122,146,153,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(122,146,153,0.8) 1px,transparent 1px)`,
            backgroundSize:'72px 72px',
          }} />
      </div>

      <div className="w-[92%] max-w-[1320px] mx-auto relative z-10">

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-14 lg:gap-20 items-center mb-20">

          {/* LEFT — logo */}
          <div ref={logoColRef} className="flex items-center justify-center">
            <div className="logo-float relative">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background:'radial-gradient(circle,#7A9299 0%,transparent 70%)', transform:'scale(0.8)' }} />
              <img
                src={logo}
                alt="4700 GFX Studios"
                className="relative w-[380px] h-[380px] object-contain drop-shadow-2xl select-none"
                draggable="false"
              />
            </div>
          </div>

          {/* RIGHT — copy */}
          <div className="flex flex-col gap-6 max-w-[720px]">

            {/* Badge */}
            <div ref={badgeRef}>
              <span className="hero-badge inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full inter-font text-sm font-semibold text-gfx-teal">
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="ping-h absolute inline-flex h-full w-full rounded-full bg-gfx-teal opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gfx-teal" />
                </span>
                Now Accepting New Projects
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="rajdhani-font text-5xl sm:text-6xl lg:text-[68px] font-bold text-gfx-white leading-[1.05]"
              style={{ perspective:'700px' }}
            >
              {['Agency', 'Quality.'].map((w, i) => (
                <span key={i} className="word word-wrapper inline-block mr-3">{w}</span>
              ))}
              <br />
              <span className="word word-wrapper inline-block mr-3 headline-gradient">Startup</span>
              <span className="word word-wrapper inline-block headline-gradient">Prices.</span>
            </h1>

            {/* Accent rule */}
            <div ref={ruleRef} className="accent-rule h-[3px] w-28 rounded-full" />

            {/* Sub */}
            <p ref={subRef} className="inter-font text-[17px] text-gfx-white/85 font-medium leading-relaxed">
              Premium websites, brand identities, and digital experiences — built to convert visitors into customers from day one.
            </p>

            {/* Body */}
            <p ref={bodyRef} className="inter-font text-[15px] leading-relaxed" style={{color:'rgba(255,255,255,0.58)'}}>
              At 4700 GFX Studios, every line of code and every design decision is crafted specifically for your business. We obsess over user experience, page speed, and conversion strategy so your website works around the clock to grow your revenue — whether you're a solo entrepreneur, a scaling local business, or a company ready for a full rebrand. Agency-quality execution at pricing that actually makes sense.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 pt-1">
              <button className="cta-primary text-white inter-font font-bold px-9 py-3.5 rounded-xl shadow-xl">
                <span className="flex items-center gap-2.5 text-[15px]">
                  View Our Work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </span>
              </button>
              <button className="cta-secondary text-gfx-white inter-font font-bold px-9 py-3.5 rounded-xl shadow-xl">
                <span className="flex items-center gap-2.5 text-[15px]">
                  Start a Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </span>
              </button>
            </div>

            {/* Social proof */}
            <div ref={socialRef} className="flex flex-wrap items-center gap-7 pt-1">
              <div className="proof-item flex items-center gap-3 inter-font text-sm cursor-pointer group">
                <div className="flex -space-x-2">
                  {['A','B','C'].map((l, i) => (
                    <div key={i}
                      className="w-9 h-9 rounded-full border-2 border-gfx-gray flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform shadow-lg"
                      style={{ background:'linear-gradient(135deg,#7A9299,#4A6572)', transitionDelay:`${i*50}ms` }}>
                      {l}
                    </div>
                  ))}
                </div>
                <span style={{color:'rgba(255,255,255,0.62)'}}>
                  <span className="text-white font-bold">20+</span> Happy Clients
                </span>
              </div>

              <div className="proof-item flex items-center gap-3 inter-font text-sm cursor-pointer group">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" style={{transitionDelay:`${i*40}ms`}}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span style={{color:'rgba(255,255,255,0.62)'}}>
                  <span className="text-white font-bold">5.0</span> Rating
                </span>
              </div>

              <div className="proof-item flex items-center gap-3 inter-font text-sm cursor-pointer group">
                <div className="w-9 h-9 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border"
                  style={{ background:'rgba(122,146,153,0.12)', borderColor:'rgba(122,146,153,0.35)' }}>
                  <svg className="w-4 h-4 text-gfx-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <span style={{color:'rgba(255,255,255,0.62)'}}>
                  <span className="text-white font-bold">&lt;24hr</span> Response
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ── Stats ── */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {quickStats.map((s, i) => (
            <div key={i} className="stat-card-item">
              <div className="stat-card p-6 rounded-2xl cursor-pointer text-center space-y-2.5 shadow-xl">
                <div className="text-[34px] leading-none">{s.icon}</div>
                <p className="inter-font text-[10px] uppercase tracking-widest font-semibold" style={{color:'rgba(255,255,255,0.50)'}}>{s.label}</p>
                <h3 className="rajdhani-font text-gfx-white text-xl font-bold">{s.stat}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* ── Tech carousel ── */}
        <div ref={carouselRef}>
          {/* Labelled divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-line" />
            <p className="inter-font text-[11px] uppercase tracking-[0.2em] font-semibold whitespace-nowrap px-2"
              style={{color:'rgba(255,255,255,0.35)'}}>
              Powered by industry-leading technologies
            </p>
            <div className="divider-line right" />
          </div>

          <div className="relative overflow-hidden py-4 carousel-wrap">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
              style={{ background:'linear-gradient(to right,#16160F,transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
              style={{ background:'linear-gradient(to left,#16160F,transparent)' }} />

            <div className="scroll-left-h">
              {[...Array(6)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {techStack.map((tech, idx) => (
                    <div key={`${setIdx}-${idx}`}
                      className="tech-item flex-shrink-0 mx-14 flex flex-col items-center gap-3 cursor-pointer group">
                      <div className="w-11 h-11 flex items-center justify-center">
                        <tech.Logo />
                      </div>
                      <span className="inter-font text-[10px] font-semibold uppercase tracking-widest
                        group-hover:text-gfx-white/80 transition-colors duration-300"
                        style={{color:'rgba(255,255,255,0.30)'}}>
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;