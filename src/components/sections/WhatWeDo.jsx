import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const services = [
  {
    label: '01',
    heading: 'Web Design & Development',
    description:
      'Custom websites built for growth. From landing pages to full e-commerce platforms, we create digital experiences that convert visitors into customers.',
    icon: '🎨',
  },
  {
    label: '02',
    heading: 'Brand Identity & Strategy',
    description:
      'Stand out in a crowded market. We craft compelling brand identities that resonate with your audience and drive recognition across every touchpoint.',
    icon: '🚀',
  },
  {
    label: '03',
    heading: 'UI/UX Design',
    description:
      'Beautiful interfaces that work. Every design decision is intentional, backed by user research and proven psychology to maximise engagement.',
    icon: '💎',
  },
  {
    label: '04',
    heading: 'E-Commerce Solutions',
    description:
      'Turn your store into a revenue machine. Shopify, WooCommerce, or bespoke solutions — engineered for maximum conversions and repeat buyers.',
    icon: '🛍️',
  },
  {
    label: '05',
    heading: 'Responsive Development',
    description:
      'Flawless on every device. Your site will look stunning and perform perfectly on desktop, tablet, and mobile — no compromises.',
    icon: '📱',
  },
  {
    label: '06',
    heading: 'SEO Optimisation',
    description:
      'Get found by your ideal customers. We build sites with SEO best practices baked in from day one so you rank without the guesswork.',
    icon: '🔍',
  },
  {
    label: '07',
    heading: 'Maintenance & Support',
    description:
      'Never worry about updates or bugs. We provide ongoing support and monitoring to keep your site secure and running smoothly 24/7.',
    icon: '🛠️',
  },
  {
    label: '08',
    heading: 'Performance Optimisation',
    description:
      'Lightning-fast load times, every time. Every millisecond counts — we optimise for speed, Core Web Vitals, and exceptional user experience.',
    icon: '⚡',
  },
  {
    label: '09',
    heading: 'Content Management Systems',
    description:
      'Take full control of your content. Custom CMS solutions that make updating your site simple, stress-free, and require zero technical knowledge.',
    icon: '📝',
  },
];

const CARDS_PER = 3;
const TOTAL     = Math.ceil(services.length / CARDS_PER);
const DELAY_MS  = 5500;

// ─────────────────────────────────────────────────────────────────────────────
// Progress bar (rAF-driven)
// ─────────────────────────────────────────────────────────────────────────────
const ProgressBar = ({ isPlaying, duration, resetKey, onComplete }) => {
  const [pct, setPct]  = useState(0);
  const rafRef         = useRef(null);
  const startRef       = useRef(null);
  const pctRef         = useRef(0);

  useEffect(() => {
    pctRef.current = 0;
    setPct(0);
    cancelAnimationFrame(rafRef.current);
    if (!isPlaying) return;
    startRef.current = null;

    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min(((ts - startRef.current) / duration) * 100, 100);
      pctRef.current = p;
      setPct(p);
      if (p < 100) rafRef.current = requestAnimationFrame(tick);
      else         onComplete();
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, duration, resetKey, onComplete]); // eslint-disable-line

  return (
    <div className="h-[3px] w-full rounded-full overflow-hidden" style={{ background: 'rgba(122,146,153,0.15)' }}>
      <div
        className="h-full rounded-full"
        style={{ width: `${pct}%`, background: 'linear-gradient(90deg,#7A9299,#4A6572)', transition: 'width 0.04s linear' }}
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
const WhatWeDo = () => {
  const [slide,   setSlide]   = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progKey, setProgKey] = useState(0);
  const [cardKey, setCardKey] = useState(0);

  const sectionRef   = useRef(null);
  const badgeRef     = useRef(null);
  const h2Ref        = useRef(null);
  const ruleRef      = useRef(null);
  const subRef       = useRef(null);
  const carouselRef  = useRef(null);
  const ctaRef       = useRef(null);
  const activeWrap   = useRef(null);

  // ── nav ──────────────────────────────────────────────────────────────
  const goTo = useCallback((i) => {
    setSlide(i);
    setProgKey((k) => k + 1);
    setCardKey((k) => k + 1);
  }, []);

  const next    = useCallback(() => goTo((slide + 1) % TOTAL), [slide, goTo]);
  const prev    = useCallback(() => goTo((slide - 1 + TOTAL) % TOTAL), [slide, goTo]);
  const manual  = (fn) => { fn(); setPlaying(false); };

  // ── GSAP — entrance ──────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Badge
      gsap.fromTo(badgeRef.current,
        { y: 40, opacity: 0, scale: 0.78 },
        { y: 0, opacity: 1, scale: 1, duration: 0.75, ease: 'back.out(2)',
          scrollTrigger: { trigger: badgeRef.current, start: 'top 87%', toggleActions: 'play none none none' } }
      );

      // Headline words flip in
      const words = h2Ref.current?.querySelectorAll('.gsap-w');
      if (words?.length) {
        gsap.fromTo(words,
          { y: 60, opacity: 0, rotateX: -45 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.78, stagger: 0.065, ease: 'power3.out',
            scrollTrigger: { trigger: h2Ref.current, start: 'top 84%', toggleActions: 'play none none none' } }
        );
      }

      // Shimmer rule grows from centre
      gsap.fromTo(ruleRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.65, ease: 'power2.out', transformOrigin: 'center',
          scrollTrigger: { trigger: ruleRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      );

      // Sub
      gsap.fromTo(subRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.70, ease: 'power2.out', delay: 0.1,
          scrollTrigger: { trigger: subRef.current, start: 'top 86%', toggleActions: 'play none none none' } }
      );

      // Carousel block rises
      gsap.fromTo(carouselRef.current,
        { y: 72, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: carouselRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      );

      // CTA
      gsap.fromTo(ctaRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: 'power2.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 90%', toggleActions: 'play none none none' } }
      );

      // Orb parallax
      sectionRef.current?.querySelectorAll('.orb-par').forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -90 : -55,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom', end: 'bottom top',
            scrub: i % 2 === 0 ? 2 : 3,
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── GSAP — card stagger on slide change ──────────────────────────────
  useEffect(() => {
    if (!activeWrap.current) return;
    const cards = activeWrap.current.querySelectorAll('.svc-card');
    gsap.fromTo(cards,
      { y: 38, opacity: 0, scale: 0.93 },
      { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.09, ease: 'power3.out' }
    );
  }, [cardKey]);

  // ────────────────────────────────────────────────────────────────────
  return (
    <section ref={sectionRef} id="whatWeDo" className="py-20 lg:py-32 relative overflow-hidden">
      <style>{`
        @keyframes sh-move {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes icon-bob {
          0%,100% { transform: translateY(0);    }
          50%      { transform: translateY(-9px); }
        }

        /* Headline shimmer */
        .acc-shimmer {
          background: linear-gradient(90deg,#7A9299 0%,#fff 35%,#4A6572 60%,#7A9299 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: sh-move 4.5s linear infinite;
        }

        /* Shimmer rule */
        .sh-rule {
          background: linear-gradient(90deg, transparent, #7A9299 30%, #4A6572 70%, transparent);
          background-size: 200% auto;
          animation: sh-move 3.5s linear infinite;
        }

        /* Badge */
        .sec-badge {
          background: rgba(122,146,153,0.09);
          border: 1px solid rgba(122,146,153,0.28);
          backdrop-filter: blur(10px);
        }

        /* ── Service card ── */
        .svc-card {
          background: linear-gradient(145deg, rgba(122,146,153,0.09) 0%, rgba(10,10,8,0.58) 100%);
          border: 1px solid rgba(122,146,153,0.18);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: transform .45s cubic-bezier(.34,1.2,.64,1), border-color .4s, box-shadow .4s, background .4s;
          position: relative;
          overflow: hidden;
        }
        /* Sheen sweep */
        .svc-card::before {
          content:'';
          position:absolute;
          top:0; left:-80%;
          width:55%; height:100%;
          background: linear-gradient(120deg,transparent,rgba(122,146,153,0.11),transparent);
          transform: skewX(-20deg);
          transition: left .65s ease;
          pointer-events:none;
        }
        .svc-card:hover::before { left:130%; }
        /* Top accent */
        .svc-card::after {
          content:'';
          position:absolute;
          top:0; left:0; right:0; height:2px;
          background: linear-gradient(90deg,transparent,rgba(122,146,153,0.65),transparent);
          opacity:0; transition:opacity .4s;
        }
        .svc-card:hover::after { opacity:1; }
        .svc-card:hover {
          transform: translateY(-13px) scale(1.025);
          border-color: rgba(122,146,153,0.52);
          box-shadow: 0 30px 64px rgba(74,101,114,.30), 0 0 0 1px rgba(122,146,153,0.07);
          background: linear-gradient(145deg, rgba(122,146,153,0.15) 0%, rgba(16,16,12,0.70) 100%);
        }
        .svc-card:hover .c-icon  { animation: icon-bob 2s ease-in-out infinite; }
        .svc-card:hover .c-num   { color: rgba(122,146,153,0.28); }
        .svc-card:hover .c-arrow { transform: translateX(5px); }

        /* Number */
        .c-num {
          font-family:'Rajdhani',sans-serif;
          font-size:58px; font-weight:700; line-height:1;
          color:rgba(122,146,153,0.10);
          transition:color .4s;
          user-select:none; letter-spacing:-2px;
        }

        /* Learn more */
        .learn {
          display:inline-flex; align-items:center; gap:6px;
          font-family:'Inter',sans-serif; font-size:13px; font-weight:600;
          color:rgba(122,146,153,0.72);
          background:none; border:none; padding:0; cursor:pointer;
          transition: color .3s, gap .3s;
        }
        .learn:hover { color:#7A9299; gap:10px; }
        .c-arrow { transition:transform .3s ease; }

        /* Nav buttons */
        .nav-btn {
          background:rgba(122,146,153,0.09);
          border:1px solid rgba(122,146,153,0.26);
          backdrop-filter:blur(8px);
          transition:all .3s ease;
        }
        .nav-btn:hover:not(:disabled) {
          background:rgba(122,146,153,0.22);
          border-color:rgba(122,146,153,0.60);
          transform:scale(1.12);
          box-shadow:0 8px 28px rgba(74,101,114,.32);
        }
        .nav-btn:disabled { opacity:.20; cursor:not-allowed; }

        /* Dots */
        .dpill {
          height:8px; border-radius:4px;
          background:rgba(255,255,255,0.18);
          cursor:pointer;
          transition:all .4s cubic-bezier(.4,0,.2,1);
        }
        .dpill:hover { background:rgba(122,146,153,0.50); }
        .dpill.on {
          background:linear-gradient(90deg,#7A9299,#4A6572)!important;
          box-shadow:0 2px 12px rgba(74,101,114,.45);
        }

        /* CTA */
        .cta-btn {
          background:linear-gradient(135deg,#7A9299 0%,#4A6572 100%);
          border:1px solid rgba(122,146,153,0.28);
          transition:all .35s ease;
          position:relative; overflow:hidden;
        }
        .cta-btn::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(255,255,255,0.11),transparent);
          opacity:0; transition:opacity .35s;
        }
        .cta-btn:hover::after { opacity:1; }
        .cta-btn:hover {
          transform:translateY(-3px) scale(1.04);
          box-shadow:0 18px 44px rgba(74,101,114,.50);
        }
        .cta-btn span { position:relative; z-index:1; }

        /* BG orbs */
        .orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(72px); }

        /* GSAP word helper */
        .gsap-w { display:inline-block; }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-par w-[520px] h-[520px] top-1/4 left-[8%]"
          style={{ background:'radial-gradient(circle,rgba(122,146,153,0.10) 0%,transparent 70%)' }} />
        <div className="orb orb-par w-[400px] h-[400px] bottom-1/4 right-[10%]"
          style={{ background:'radial-gradient(circle,rgba(74,101,114,0.09) 0%,transparent 70%)' }} />
        <div className="orb w-[260px] h-[260px] top-[58%] left-[44%]"
          style={{ background:'radial-gradient(circle,rgba(90,89,85,0.06) 0%,transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:`linear-gradient(rgba(122,146,153,1) 1px,transparent 1px),linear-gradient(90deg,rgba(122,146,153,1) 1px,transparent 1px)`,
            backgroundSize:'80px 80px',
          }}
        />
      </div>

      <div className="w-[88%] max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">

          <div ref={badgeRef} className="inline-flex items-center gap-2.5 mb-7 px-5 py-2 rounded-full sec-badge">
            <span className="text-base">⚡</span>
            <span className="inter-font text-gfx-teal font-semibold text-xs uppercase tracking-widest">
              9 Core Services
            </span>
          </div>

          <h2
            ref={h2Ref}
            className="rajdhani-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-5"
            style={{ perspective:'900px' }}
          >
            {'Full Agency Services at'.split(' ').map((w, i) => (
              <span key={i} className="gsap-w">{w}&nbsp;</span>
            ))}
            <br className="hidden sm:block" />
            <span className="acc-shimmer">
              {'Boutique Prices.'.split(' ').map((w, i) => (
                <span key={i} className="gsap-w">{w}&nbsp;</span>
              ))}
            </span>
          </h2>

          <div ref={ruleRef} className="sh-rule h-[2px] w-24 rounded-full mx-auto mb-6" />

          <p ref={subRef} className="inter-font text-gfx-white/60 text-base lg:text-[17px] max-w-2xl mx-auto leading-relaxed">
            Premium web solutions tailored for every stage of your journey — from first launch to full-scale growth.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div ref={carouselRef} className="relative">

          <div className="mb-6 px-1">
            <ProgressBar
              isPlaying={playing}
              duration={DELAY_MS}
              resetKey={progKey}
              onComplete={next}
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex"
              style={{
                transform: `translateX(-${slide * 100}%)`,
                transition: 'transform 0.70s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              {Array.from({ length: TOTAL }).map((_, si) => {
                const slice = services.slice(si * CARDS_PER, si * CARDS_PER + CARDS_PER);
                return (
                  <div
                    key={si}
                    className="w-full flex-shrink-0"
                    ref={si === slide ? activeWrap : null}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {slice.map((svc, ci) => (
                        <div key={ci} className="svc-card rounded-2xl p-7 lg:p-8 flex flex-col h-[360px]">
                          <div className="flex items-start justify-between mb-5">
                            <div className="c-icon text-[42px] leading-none select-none">{svc.icon}</div>
                            <span className="c-num">{svc.label}</span>
                          </div>
                          <div className="flex-grow mb-6">
                            <h3 className="rajdhani-font text-gfx-white text-xl lg:text-[22px] font-bold mb-3 leading-tight">
                              {svc.heading}
                            </h3>
                            <p className="inter-font text-gfx-white/60 text-sm lg:text-[15px] leading-relaxed">
                              {svc.description}
                            </p>
                          </div>
                          <button className="learn self-start">
                            Learn More
                            <ArrowRight className="c-arrow w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}

                      {Array.from({ length: CARDS_PER - slice.length }).map((_, gi) => (
                        <div key={`ghost-${gi}`} className="hidden md:block" />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => manual(prev)}
            disabled={slide === 0}
            className="nav-btn absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-gfx-white z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => manual(next)}
            disabled={slide === TOTAL - 1}
            className="nav-btn absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-gfx-white z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* ── Dots + play/pause ── */}
        <div className="flex items-center justify-center gap-3 mt-8 mb-16">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <div
              key={i}
              onClick={() => { goTo(i); setPlaying(false); }}
              className={`dpill ${i === slide ? 'on' : ''}`}
              style={{ width: i === slide ? 36 : 8 }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
          <button
            onClick={() => setPlaying((p) => !p)}
            className="nav-btn w-9 h-9 rounded-full flex items-center justify-center text-gfx-white ml-2"
            aria-label={playing ? 'Pause' : 'Resume'}
          >
            {playing
              ? <Pause className="w-3.5 h-3.5" />
              : <Play  className="w-3.5 h-3.5 ml-0.5" />
            }
          </button>
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} className="text-center">
          <p className="inter-font text-gfx-white/50 text-base mb-6">
            Not sure which service fits your goals? Let's figure it out together.
          </p>
          <button className="cta-btn text-white inter-font font-bold px-10 py-4 rounded-xl shadow-xl">
            <span className="flex items-center gap-3 text-[15px]">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
          <p className="inter-font text-xs mt-4" style={{ color: 'rgba(255,255,255,0.28)' }}>
            No commitment required &nbsp;·&nbsp; Response within 24 hours
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;