import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../images/logo-white.png';
import reactLogo from '../images/react-trans.png';
import shopifyLogo from '../images/shopify-trans.png';
import figmaLogo from '../images/figma-trans.png';

gsap.registerPlugin(ScrollTrigger);

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

  const quickStats = [
    { label: 'Experience',   stat: '3+ Years',  icon: '📅' },
    { label: 'Projects',     stat: '20+ Done',  icon: '🚀' },
    { label: 'Rating',       stat: '5.0 Stars', icon: '⭐' },
    { label: 'Satisfaction', stat: '100%',      icon: '💯' },
  ];

  const techLogos = [
    { name: 'React',   src: reactLogo   },
    { name: 'Shopify', src: shopifyLogo },
    { name: 'Figma',   src: figmaLogo   },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        [bgOrb1Ref.current, bgOrb2Ref.current],
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, stagger: 0.25, ease: 'power2.out' },
        0
      );

      tl.fromTo(
        logoColRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        0.2
      );

      tl.fromTo(
        badgeRef.current,
        { y: 24, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6 },
        0.4
      );

      const words = headlineRef.current?.querySelectorAll('.word');
      if (words?.length) {
        tl.fromTo(
          words,
          { y: 50, opacity: 0, rotateX: -30 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.65, stagger: 0.08, transformOrigin: 'top center' },
          0.55
        );
      }

      tl.fromTo(
        [subRef.current, bodyRef.current],
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.18 },
        0.85
      );

      tl.fromTo(
        ctaRef.current?.children ? [...ctaRef.current.children] : ctaRef.current,
        { y: 20, opacity: 0, scale: 0.93 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.12 },
        1.1
      );

      tl.fromTo(
        socialRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55 },
        1.3
      );

      const statCards = statsRef.current?.querySelectorAll('.stat-card-item');
      if (statCards?.length) {
        tl.fromTo(
          statCards,
          { y: 40, opacity: 0, scale: 0.88 },
          { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.1, ease: 'back.out(1.4)' },
          1.2
        );
      }

      tl.fromTo(
        carouselRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        1.5
      );

      gsap.to(logoColRef.current?.querySelector('.logo-float'), {
        y: -18,
        rotation: 1.5,
        duration: 3.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      gsap.to(sectionRef.current, {
        opacity: 0,
        y: -60,
        scale: 0.97,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom 60%',
          end:   'bottom 10%',
          scrub: 1.2,
        },
      });

      gsap.to(bgOrb1Ref.current, {
        y: -100,
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 2 },
      });
      gsap.to(bgOrb2Ref.current, {
        y: -60,
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 3 },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen relative overflow-hidden py-20 lg:py-24"
    >
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes scroll-left {
          0%   { transform: translateX(0);    }
          100% { transform: translateX(-50%); }
        }
        @keyframes ping-dot {
          0%, 100% { transform: scale(1);   opacity: 0.75; }
          50%       { transform: scale(1.8); opacity: 0;    }
        }

        .headline-gradient {
          background: linear-gradient(90deg, #7A9299 0%, #FFFFFF 35%, #4A6572 65%, #7A9299 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .accent-line {
          background: linear-gradient(90deg, #7A9299, #4A6572, #7A9299);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .stat-card {
          background: linear-gradient(135deg, rgba(122,146,153,0.10) 0%, rgba(22,22,15,0.60) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(122,146,153,0.28);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .stat-card:hover {
          transform: translateY(-8px) scale(1.05);
          background: linear-gradient(135deg, rgba(122,146,153,0.20) 0%, rgba(30,30,20,0.70) 100%);
          border-color: rgba(122,146,153,0.6);
          box-shadow: 0 20px 40px rgba(74,101,114,0.35);
        }

        .cta-primary {
          background: linear-gradient(135deg, #7A9299 0%, #4A6572 100%);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .cta-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #8DAAB0 0%, #5A7A88 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .cta-primary:hover::after { opacity: 1; }
        .cta-primary:hover        { transform: translateY(-2px) scale(1.04); box-shadow: 0 14px 36px rgba(74,101,114,0.45); }
        .cta-primary span         { position: relative; z-index: 1; }

        .cta-secondary {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(122,146,153,0.35);
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }
        .cta-secondary:hover {
          background: rgba(122,146,153,0.12);
          border-color: rgba(122,146,153,0.65);
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 14px 36px rgba(74,101,114,0.25);
        }

        .badge {
          background: linear-gradient(135deg, rgba(122,146,153,0.12), rgba(74,101,114,0.10));
          border: 1px solid rgba(122,146,153,0.30);
          backdrop-filter: blur(12px);
          transition: border-color 0.3s;
        }
        .badge:hover { border-color: rgba(122,146,153,0.6); }

        .ping-dot { animation: ping-dot 1.8s ease-in-out infinite; }

        .logo-carousel-container:hover .scroll-left-anim { animation-play-state: paused; }
        .scroll-left-anim {
          animation: scroll-left 28s linear infinite;
          display: flex;
          width: max-content;
        }

        .word-wrapper { perspective: 600px; display: inline-block; }
      `}</style>

      {/* ── Background orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={bgOrb1Ref}
          className="absolute top-1/4 left-1/6 w-[520px] h-[520px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(122,146,153,0.12) 0%, transparent 70%)', filter: 'blur(48px)' }}
        />
        <div
          ref={bgOrb2Ref}
          className="absolute bottom-1/4 right-1/6 w-[420px] h-[420px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(74,101,114,0.10) 0%, transparent 70%)', filter: 'blur(48px)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(122,146,153,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(122,146,153,0.8) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="w-[85%] mx-auto relative z-10">

        {/* ── Main hero grid — wrapped in flex justify-center so the grid itself is centered ── */}
        <div className="flex justify-center mb-20">
          <div className="grid lg:grid-cols-[420px_1fr] gap-16 lg:gap-20 items-center w-full max-w-[1080px]">

            {/* Left — logo */}
            <div ref={logoColRef} className="flex items-center justify-center">
              <div className="logo-float">
                <img
                  src={logo}
                  alt="4700 GFX Studios"
                  className="w-[420px] h-[420px] object-contain drop-shadow-2xl select-none"
                  draggable="false"
                />
              </div>
            </div>

            {/* Right — copy */}
            <div className="flex flex-col gap-7">

              {/* Badge */}
              <div ref={badgeRef}>
                <span className="badge inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full inter-font text-sm font-semibold text-gfx-teal">
                  <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                    <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-gfx-teal opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gfx-teal"></span>
                  </span>
                  Now Accepting New Projects
                </span>
              </div>

              {/* Headline */}
              <h1
                ref={headlineRef}
                className="rajdhani-font text-5xl sm:text-6xl lg:text-[64px] font-bold text-gfx-white leading-[1.08]"
                style={{ perspective: '600px' }}
              >
                {['Agency', 'Quality.'].map((w, i) => (
                  <span key={i} className="word word-wrapper inline-block mr-3">{w}</span>
                ))}
                <br />
                <span className="word word-wrapper inline-block mr-3 headline-gradient">Startup</span>
                <span className="word word-wrapper inline-block headline-gradient">Prices.</span>
              </h1>

              {/* Accent line */}
              <div className="accent-line h-[3px] w-24 rounded-full" />

              {/* Sub-headline */}
              <p ref={subRef} className="inter-font text-lg text-gfx-white/85 font-medium leading-relaxed">
                Premium websites, brand identities, and digital experiences — built to convert visitors into customers from day one.
              </p>

              {/* Body copy */}
              <p ref={bodyRef} className="inter-font text-base text-gfx-white/60 leading-relaxed">
                At 4700 GFX Studios, we don't use templates — every line of code and every design decision is crafted specifically for your business and your goals. We obsess over user experience, page speed, and conversion strategy so your website does more than look good: it works hard around the clock to grow your revenue. Whether you're a solo entrepreneur launching your first digital presence, a local business ready to dominate online, or a scaling company that needs a complete brand overhaul, we deliver the kind of polished, high-performance work that's usually reserved for six-figure agency retainers — at pricing that actually makes sense for where you are right now.
              </p>

              {/* CTAs */}
              <div ref={ctaRef} className="flex flex-wrap gap-4 pt-1">
                <button className="cta-primary text-gfx-white inter-font font-bold px-8 py-3.5 rounded-xl shadow-xl border border-gfx-teal/20">
                  <span className="flex items-center gap-2.5 text-[15px]">
                    View Our Work
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button className="cta-secondary text-gfx-white inter-font font-bold px-8 py-3.5 rounded-xl shadow-xl">
                  <span className="flex items-center gap-2.5 text-[15px]">
                    Start a Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Social proof */}
              <div ref={socialRef} className="flex flex-wrap items-center gap-8 pt-1">
                <div className="flex items-center gap-3 inter-font text-sm cursor-pointer group">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-gfx-gray flex items-center justify-center text-gfx-white text-xs font-bold group-hover:scale-110 transition-transform shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #7A9299, #4A6572)', transitionDelay: `${i * 50}ms` }}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-gfx-white/65">
                    <span className="text-gfx-white font-bold">20+</span> Happy Clients
                  </span>
                </div>

                <div className="flex items-center gap-3 inter-font text-sm cursor-pointer group">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20" style={{ transitionDelay: `${i * 40}ms` }}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gfx-white/65">
                    <span className="text-gfx-white font-bold">5.0</span> Rating
                  </span>
                </div>

                <div className="flex items-center gap-3 inter-font text-sm cursor-pointer group">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border"
                    style={{ background: 'rgba(122,146,153,0.12)', borderColor: 'rgba(122,146,153,0.35)' }}
                  >
                    <svg className="w-4 h-4 text-gfx-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-gfx-white/65">
                    <span className="text-gfx-white font-bold">&lt;24hr</span> Response
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {quickStats.map((s, i) => (
            <div key={i} className="stat-card-item">
              <div className="stat-card p-5 rounded-2xl cursor-pointer shadow-xl text-center space-y-2">
                <div className="text-3xl">{s.icon}</div>
                <p className="rajdhani-font text-gfx-white/60 text-xs uppercase tracking-widest font-semibold">{s.label}</p>
                <h3 className="rajdhani-font text-gfx-white text-xl font-bold">{s.stat}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* ── Logo carousel ── */}
        <div ref={carouselRef} className="pt-8">
          <p className="inter-font text-gfx-white/40 text-xs uppercase tracking-widest font-semibold text-center mb-8">
            Powered by industry-leading technologies
          </p>
          <div className="relative overflow-hidden py-6 logo-carousel-container">
            <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #16160F, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #16160F, transparent)' }} />
            <div className="scroll-left-anim">
              {[...Array(8)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {techLogos.map((logoItem, idx) => (
                    <div
                      key={`${setIdx}-${idx}`}
                      className="flex-shrink-0 mx-14 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                      <img src={logoItem.src} alt={logoItem.name} className="h-14 w-auto object-contain" />
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