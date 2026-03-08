import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const rows = [
  [
    { text: 'Web Design',           icon: '🎨' },
    { text: 'Branding',             icon: '✨' },
    { text: 'UI/UX Design',         icon: '🖌️' },
    { text: 'Logo Design',          icon: '🎯' },
    { text: 'E-Commerce',           icon: '🛒' },
    { text: 'Shopify',              icon: '🛍️' },
    { text: 'WordPress',            icon: '📝' },
    { text: 'Webflow',              icon: '🌊' },
  ],
  [
    { text: 'React Development',    icon: '⚛️' },
    { text: 'SEO Optimization',     icon: '🔍' },
    { text: 'Landing Pages',        icon: '🚀' },
    { text: 'Responsive Design',    icon: '📱' },
    { text: 'Custom Development',   icon: '💻' },
    { text: 'Figma Design',         icon: '🎭' },
    { text: 'Adobe Suite',          icon: '🎬' },
  ],
  [
    { text: 'Brand Strategy',       icon: '💡' },
    { text: 'Social Media Graphics',icon: '📸' },
    { text: 'Typography',           icon: '🔤' },
    { text: 'Color Theory',         icon: '🎨' },
    { text: 'Wireframing',          icon: '📐' },
    { text: 'Prototyping',          icon: '🔧' },
    { text: 'User Testing',         icon: '👥' },
    { text: 'User Research',        icon: '🔬' },
  ],
  [
    { text: 'Performance Opt.',     icon: '⚡' },
    { text: 'API Integration',      icon: '🔌' },
    { text: 'CMS Development',      icon: '📋' },
    { text: 'Mobile Design',        icon: '📲' },
    { text: 'Animation',            icon: '🎞️' },
    { text: 'Illustration',         icon: '🖼️' },
    { text: 'Icon Design',          icon: '🎪' },
  ],
  [
    { text: 'Marketing Sites',      icon: '📢' },
    { text: 'Product Design',       icon: '📦' },
    { text: 'Design Systems',       icon: '🎛️' },
    { text: 'Component Libraries',  icon: '🧩' },
    { text: 'A/B Testing',          icon: '🧪' },
    { text: 'Analytics Setup',      icon: '📊' },
    { text: 'Conversion Opt.',      icon: '💰' },
  ],
  [
    { text: 'Maintenance & Support',icon: '🛠️' },
    { text: 'Hosting Solutions',    icon: '☁️' },
    { text: 'Domain Management',    icon: '🌐' },
    { text: 'SSL Certificates',     icon: '🔒' },
    { text: 'Email Setup',          icon: '📧' },
    { text: 'Security',             icon: '🛡️' },
    { text: 'Backup Solutions',     icon: '💾' },
  ],
  [
    { text: 'Payment Integration',  icon: '💳' },
    { text: 'Newsletter Design',    icon: '📬' },
    { text: 'Content Strategy',     icon: '📝' },
    { text: 'Copywriting',          icon: '✍️' },
    { text: 'Print Design',         icon: '🖨️' },
    { text: 'Packaging Design',     icon: '📦' },
    { text: 'Business Cards',       icon: '💼' },
  ],
  [
    { text: 'Video Editing',        icon: '🎥' },
    { text: 'Motion Graphics',      icon: '🎬' },
    { text: 'Audio Production',     icon: '🎵' },
    { text: 'Podcast Design',       icon: '🎙️' },
    { text: 'Presentation Design',  icon: '📊' },
    { text: 'Infographics',         icon: '📈' },
    { text: 'Data Visualization',   icon: '📉' },
  ],
];

const stats = [
  { value: '60+',  label: 'Services Offered'  },
  { value: '8',    label: 'Core Categories'   },
  { value: '100%', label: 'Custom Solutions'  },
  { value: '24/7', label: 'Support Available' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
const WhatWeOffer = () => {
  const sectionRef = useRef(null);
  const badgeRef   = useRef(null);
  const h2Ref      = useRef(null);
  const ruleRef    = useRef(null);
  const subRef     = useRef(null);
  const sub2Ref    = useRef(null);
  const rowsRef    = useRef([]);
  const statsRef   = useRef(null);
  const ctaRef     = useRef(null);

  // ── GSAP ────────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Badge elastic pop
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

      // Rule grows from centre
      gsap.fromTo(ruleRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.65, ease: 'power2.out', transformOrigin: 'center',
          scrollTrigger: { trigger: ruleRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      );

      // Sub paragraphs
      gsap.fromTo([subRef.current, sub2Ref.current],
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.70, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: subRef.current, start: 'top 86%', toggleActions: 'play none none none' } }
      );

      // Tag rows — each slides in from alternating sides
      rowsRef.current.forEach((row, i) => {
        if (!row) return;
        const fromLeft = i % 2 === 0;
        gsap.fromTo(row,
          { x: fromLeft ? -80 : 80, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.75, ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.06,
          }
        );
      });

      // Stats cards stagger
      const statCards = statsRef.current?.querySelectorAll('.stat-card');
      if (statCards?.length) {
        gsap.fromTo(statCards,
          { y: 44, opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.10, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: statsRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
        );
      }

      // CTA block
      gsap.fromTo(ctaRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      );

      // Orb parallax
      sectionRef.current?.querySelectorAll('.orb-par').forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -100 : -60,
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

  // ────────────────────────────────────────────────────────────────────
  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      <style>{`
        /* ── Keyframes ── */
        @keyframes sh-offer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes scroll-l {
          from { transform: translateX(0);    }
          to   { transform: translateX(-50%); }
        }
        @keyframes scroll-r {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0);    }
        }

        /* ── Headline shimmer ── */
        .acc-offer {
          background: linear-gradient(90deg,#7A9299 0%,#fff 35%,#4A6572 60%,#7A9299 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: sh-offer 4.5s linear infinite;
        }

        /* ── Shimmer rule ── */
        .sh-rule-o {
          background: linear-gradient(90deg, transparent, #7A9299 30%, #4A6572 70%, transparent);
          background-size: 200% auto;
          animation: sh-offer 3.5s linear infinite;
        }

        /* ── Badge ── */
        .offer-badge {
          background: rgba(122,146,153,0.09);
          border: 1px solid rgba(122,146,153,0.28);
          backdrop-filter: blur(10px);
        }

        /* ── Tag rows ── */
        .tag-track-l {
          animation: scroll-l 38s linear infinite;
          will-change: transform;
        }
        .tag-track-r {
          animation: scroll-r 38s linear infinite;
          will-change: transform;
        }
        .tag-row-wrap:hover .tag-track-l,
        .tag-row-wrap:hover .tag-track-r {
          animation-play-state: paused;
        }

        /* ── Individual tag ── */
        .s-tag {
          background: linear-gradient(135deg, rgba(122,146,153,0.09) 0%, rgba(22,22,15,0.55) 100%);
          border: 1px solid rgba(122,146,153,0.18);
          backdrop-filter: blur(10px);
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .s-tag::after {
          content:'';
          position:absolute;
          inset:0;
          background: linear-gradient(135deg,rgba(122,146,153,0.12),transparent);
          opacity:0;
          transition:opacity 0.3s;
        }
        .s-tag:hover::after { opacity:1; }
        .s-tag:hover {
          border-color: rgba(122,146,153,0.52);
          transform: translateY(-5px) scale(1.04);
          box-shadow: 0 12px 32px rgba(74,101,114,0.28);
          background: linear-gradient(135deg, rgba(122,146,153,0.16) 0%, rgba(22,22,15,0.70) 100%);
        }

        /* ── Stat card ── */
        .stat-card {
          background: linear-gradient(145deg, rgba(122,146,153,0.09) 0%, rgba(10,10,8,0.55) 100%);
          border: 1px solid rgba(122,146,153,0.18);
          backdrop-filter: blur(14px);
          transition: all 0.38s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
        }
        .stat-card::after {
          content:'';
          position:absolute;
          top:0; left:0; right:0; height:2px;
          background: linear-gradient(90deg,transparent,rgba(122,146,153,0.6),transparent);
          opacity:0; transition:opacity 0.38s;
        }
        .stat-card:hover::after { opacity:1; }
        .stat-card:hover {
          border-color: rgba(122,146,153,0.48);
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 20px 48px rgba(74,101,114,0.28);
        }

        /* ── CTA card ── */
        .cta-card {
          background: linear-gradient(145deg, rgba(122,146,153,0.08) 0%, rgba(10,10,8,0.60) 100%);
          border: 1px solid rgba(122,146,153,0.20);
          backdrop-filter: blur(16px);
          position: relative; overflow: hidden;
        }
        .cta-card::before {
          content:'';
          position:absolute;
          top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(122,146,153,0.55), rgba(74,101,114,0.55), transparent);
        }

        /* ── Primary CTA button ── */
        .cta-primary-o {
          background: linear-gradient(135deg,#7A9299 0%,#4A6572 100%);
          border: 1px solid rgba(122,146,153,0.28);
          transition: all 0.35s ease;
          position: relative; overflow: hidden;
        }
        .cta-primary-o::after {
          content:''; position:absolute; inset:0;
          background: linear-gradient(135deg,rgba(255,255,255,0.11),transparent);
          opacity:0; transition:opacity 0.35s;
        }
        .cta-primary-o:hover::after { opacity:1; }
        .cta-primary-o:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 18px 44px rgba(74,101,114,.50);
        }
        .cta-primary-o span { position:relative; z-index:1; }

        /* ── Ghost CTA button ── */
        .cta-ghost-o {
          background: rgba(122,146,153,0.07);
          border: 1px solid rgba(122,146,153,0.28);
          transition: all 0.35s ease;
        }
        .cta-ghost-o:hover {
          background: rgba(122,146,153,0.16);
          border-color: rgba(122,146,153,0.55);
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 14px 36px rgba(74,101,114,0.25);
        }

        /* ── BG orbs ── */
        .orb-o {
          position:absolute; border-radius:50%;
          pointer-events:none; filter:blur(72px);
        }

        /* ── GSAP word helper ── */
        .gsap-w { display:inline-block; }

        /* ── Fade edge masks on rows ── */
        .row-mask {
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%);
          mask-image:         linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%);
        }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-o orb-par w-[520px] h-[520px] top-[15%] left-[5%]"
          style={{ background: 'radial-gradient(circle, rgba(122,146,153,0.10) 0%, transparent 70%)' }} />
        <div className="orb-o orb-par w-[420px] h-[420px] bottom-[18%] right-[6%]"
          style={{ background: 'radial-gradient(circle, rgba(74,101,114,0.09) 0%, transparent 70%)' }} />
        <div className="orb-o w-[300px] h-[300px] top-[55%] left-[40%]"
          style={{ background: 'radial-gradient(circle, rgba(90,89,85,0.06) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(122,146,153,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(122,146,153,1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14 lg:mb-18 px-8">

          <div ref={badgeRef} className="inline-flex items-center gap-2.5 mb-7 px-5 py-2 rounded-full offer-badge">
            <span className="text-base">⚡</span>
            <span className="inter-font text-gfx-teal font-semibold text-xs uppercase tracking-widest">
              60+ Services & Counting
            </span>
          </div>

          <h2
            ref={h2Ref}
            className="rajdhani-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-5"
            style={{ perspective: '900px' }}
          >
            {'Everything You Need to'.split(' ').map((w, i) => (
              <span key={i} className="gsap-w">{w}&nbsp;</span>
            ))}
            <br className="hidden sm:block" />
            <span className="acc-offer">
              {'Grow Online.'.split(' ').map((w, i) => (
                <span key={i} className="gsap-w">{w}&nbsp;</span>
              ))}
            </span>
          </h2>

          <div ref={ruleRef} className="sh-rule-o h-[2px] w-24 rounded-full mx-auto mb-6" />

          <p ref={subRef} className="inter-font text-gfx-white/65 text-base lg:text-[17px] max-w-3xl mx-auto mb-3 leading-relaxed">
            From stunning websites to complete brand identities, we offer comprehensive digital services that transform your vision into reality — whether you're launching a startup, scaling your business, or refreshing your brand.
          </p>
          <p ref={sub2Ref} className="inter-font text-gfx-white/45 text-sm lg:text-base max-w-2xl mx-auto">
            Explore our full range of services below — each crafted with precision, passion, and a commitment to excellence.
          </p>
        </div>

        {/* ── Animated tag rows ── */}
        <div className="space-y-4 mb-16">
          {rows.map((row, ri) => {
            const goLeft = ri % 2 === 0;
            return (
              <div
                key={ri}
                ref={(el) => (rowsRef.current[ri] = el)}
                className="tag-row-wrap row-mask overflow-hidden"
              >
                <div className={`flex gap-4 ${goLeft ? 'tag-track-l' : 'tag-track-r'}`}>
                  {[...row, ...row, ...row].map((svc, idx) => (
                    <div
                      key={idx}
                      className="s-tag px-5 py-2.5 rounded-full whitespace-nowrap flex-shrink-0 cursor-default"
                    >
                      <span className="inter-font text-gfx-white/85 font-medium text-sm flex items-center gap-2">
                        <span className="text-[15px]">{svc.icon}</span>
                        {svc.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Stats ── */}
        <div ref={statsRef} className="max-w-5xl mx-auto px-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div key={i} className="stat-card rounded-2xl p-6 text-center">
                <div className="rajdhani-font text-gfx-teal text-4xl lg:text-5xl font-bold mb-1.5 leading-none">{s.value}</div>
                <div className="inter-font text-gfx-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} className="text-center px-8">
          <div className="max-w-4xl mx-auto cta-card rounded-3xl p-8 lg:p-12">
            <p className="rajdhani-font text-gfx-white text-2xl lg:text-3xl font-bold mb-3">
              And that's just the beginning.
            </p>
            <p className="inter-font text-gfx-white/60 text-sm lg:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Every project is unique, and we tailor our services to fit your specific needs. Whether you need one service or a complete digital transformation, we're here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="cta-primary-o text-white inter-font font-bold px-9 py-4 rounded-xl shadow-xl">
                <span className="flex items-center gap-3 text-[15px]">
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
              <button className="cta-ghost-o text-gfx-white inter-font font-semibold px-9 py-4 rounded-xl flex items-center gap-3 text-[15px]">
                <MessageCircle className="w-4 h-4 text-gfx-teal flex-shrink-0" />
                Let's Talk About Your Project
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;