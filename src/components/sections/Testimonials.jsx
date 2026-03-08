import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Building2,
  Calendar,
  Package,
  CheckCircle2,
  ArrowUpRight,
  Award,
  TrendingUp,
  Pause,
  Play,
  ExternalLink,
} from 'lucide-react';

// ── Client avatar logos ─────────────────────────────────────────────
// Add your image files to src/images/clients/ matching these filenames
import avatarHope    from '../../components/images/moh-logo.png';
import avatarMaria   from '../../components/images/zu-logo.png';
import avatarMelant  from '../../components/images/the-nail-canvas-logo.png';
import avatarSylvia  from '../../components/images/brave-guidance-logo.png';
import avatarTavares from '../../components/images/4700enterprises-logo.png';

const AUTOPLAY_DELAY = 15000; // ms per slide

const testimonials = [
  {
    id: 1,
    name: 'Hope Simmons',
    role: 'Founder & CEO',
    company: 'Manifests of Hope',
    industry: 'Healthcare',
    avatar: avatarHope,
    avatarBg: 'from-emerald-600 to-teal-600',
    rating: 5,
    year: 2025,
    service: 'Website Design & Shopify Integration',
    package: 'ELEVATE',
    projectDuration: '6 weeks',
    testimonial:
      'Great experience! I needed a website rebrand that was easy for customers to navigate as well as maintain the look that I was going for. There was communication through the entire process to ensure I received exactly what I wanted. I appreciate the care and attentiveness throughout the entire process!',
    results: [
      { metric: '75%', label: 'Sales Increase' },
      { metric: '1.5x', label: 'Traffic Growth' },
      { metric: '85%', label: 'Mobile Conversion' },
    ],
    beforeAfter: {
      before: 'Struggling with consistent website traffic',
      after: 'Significantly increased website traffic & sales',
    },
    caseStudyUrl: null,
    websiteUrl: 'https://manifestsofhope.com',
  },
  {
    id: 2,
    name: 'Maria Bharosigh',
    role: 'CEO & Owner',
    company: 'ZuBar South Florida',
    industry: 'Hospitality',
    avatar: avatarMaria,
    avatarBg: 'from-blue-600 to-indigo-600',
    rating: 5,
    year: 2025,
    service: 'Landing Page',
    package: 'LAUNCH',
    projectDuration: '4 weeks',
    testimonial:
      'From the time I contracted 4700gfx, my thoughts were put into motion. I came with an unclear mind of what I wanted for my brand & Shekelton was able to take all of my concerns and put together a beautifully branded website. Even now, months later, he is consistently on top of maintenance for the site and actively engaged in my service. 10/10 would recommend for anyone looking for efficiency, reliability and consistency.',
    results: [
      { metric: '58%', label: 'Lower Bounce Rate' },
      { metric: '4.2min', label: 'Avg. Session Time' },
      { metric: '30%', label: 'Lead Generation' },
    ],
    beforeAfter: {
      before: 'Generic website with low engagement',
      after: 'Rejuvenated landing page driving real leads',
    },
    caseStudyUrl: null,
    websiteUrl: 'https://zubarsouthflorida.com',
  },
  {
    id: 3,
    name: 'Melant Edenfield',
    role: 'Owner',
    company: 'The Nail Canvas',
    industry: 'Beauty & Wellness',
    avatar: avatarMelant,
    avatarBg: 'from-purple-600 to-pink-600',
    rating: 5,
    year: 2024,
    service: 'UI/UX Design & Development',
    package: 'ELEVATE',
    projectDuration: '8 weeks',
    testimonial:
      `Mr. Shekelton is very professional and is a master at his craft. When creating my website it was almost intuitive to what I exactly wanted. Very pleased with his work and the communication was the best I've ever received from a business. 1000% recommend.`,
    results: [
      { metric: '2x', label: 'Online Bookings' },
      { metric: '80%', label: 'Automation Rate' },
      { metric: '15hrs', label: 'Time Saved Weekly' },
    ],
    beforeAfter: {
      before: 'Manual phone bookings only',
      after: 'Automated 24/7 online booking system',
    },
    caseStudyUrl: null,
    websiteUrl: 'https://thenailcanvas.com',
  },
  {
    id: 4,
    name: 'Sylvia Dowers',
    role: 'CEO & Counselor',
    company: 'Brave Guidance Counseling Services',
    industry: 'Mental Healthcare',
    avatar: avatarSylvia,
    avatarBg: 'from-orange-600 to-rose-600',
    rating: 5,
    year: 2024,
    service: 'Landing Page',
    package: 'LAUNCH',
    projectDuration: '8 weeks',
    testimonial:
      '4700 GFX Studios created my mental health private practice website — and I can say it is beautifully designed with such professional and creative touch that immediately captures your eye! The clean layout and overall aesthetics make it inviting and easy to explore. Navigation is intuitive, allowing my visitors to find key information quickly without any hassle. My webpage perfectly balances professionalism with warmth, setting a welcoming tone for future clients seeking guidance and support.',
    results: [
      { metric: '65%', label: 'Increased Traffic' },
      { metric: '92%', label: 'Client Satisfaction' },
      { metric: '30%', label: 'Lead Generation' },
    ],
    beforeAfter: {
      before: 'No website for interested leads',
      after: 'Custom site with built-in lead generation',
    },
    caseStudyUrl: null,
    websiteUrl: 'https://braveguidancecounseling.com',
  },
  {
    id: 5,
    name: 'Tavares Kidd',
    role: 'CEO & Executive Producer',
    company: '4700 Enterprises',
    industry: 'Music Business & Media',
    avatar: avatarTavares,
    avatarBg: 'from-cyan-600 to-blue-600',
    rating: 5,
    year: 2023,
    service: 'Website Design & SEO',
    package: 'SCALE',
    projectDuration: '8 weeks',
    testimonial:
      '4700 GFX Studios really brought our vision to life! They designed a clean, professional, and eye-catching website for our music label that perfectly represents our brand. The team was creative, responsive, and detail-oriented every step of the way — from layout ideas to final touches. The site runs smooth, looks amazing on mobile, and helped us elevate how we present our artists online. Highly recommend to anyone serious about their brand image and online presence!',
    results: [
      { metric: '75%', label: 'Increased Traffic' },
      { metric: '#1', label: 'Google Ranking' },
      { metric: '250%', label: 'SEO Growth' },
    ],
    beforeAfter: {
      before: 'Buried on page 3 of Google searches',
      after: 'Ranking #1 for all key search terms',
    },
    caseStudyUrl: '/case-studies/4700-enterprises', // example — set to null to hide
    websiteUrl: 'https://4700enterprises.com',
  },
];

// ── Progress bar component ────────────────────────────────────────────
const ProgressBar = ({ isPlaying, duration, onComplete, resetKey }) => {
  const [width, setWidth] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    setWidth(0);
    if (!isPlaying) return;

    const animate = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setWidth(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    startRef.current = null;
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, duration, resetKey]);

  return (
    <div className="h-[3px] w-full rounded-full overflow-hidden" style={{ background: 'rgba(122,146,153,0.18)' }}>
      <div
        className="h-full rounded-full"
        style={{
          width: `${width}%`,
          background: 'linear-gradient(90deg, #7A9299, #4A6572)',
          transition: 'width 0.05s linear',
        }}
      />
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState('next'); // for animation hint
  const [animKey, setAnimKey] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const current = testimonials[currentIndex];

  const goTo = useCallback((index, dir = 'next') => {
    setDirection(dir);
    setCurrentIndex(index);
    setAnimKey((k) => k + 1);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    goTo((currentIndex + 1) % testimonials.length, 'next');
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + testimonials.length) % testimonials.length, 'prev');
  }, [currentIndex, goTo]);

  const handleManualNav = (fn) => {
    fn();
    setIsPlaying(false);
  };

  const togglePlay = () => setIsPlaying((p) => !p);

  const packageColors = {
    LAUNCH: { bg: 'rgba(122,146,153,0.15)', border: 'rgba(122,146,153,0.4)', text: '#7A9299' },
    ELEVATE: { bg: 'rgba(74,101,114,0.20)', border: 'rgba(74,101,114,0.5)', text: '#8DAAB0' },
    GROWTH: { bg: 'rgba(90,89,85,0.20)', border: 'rgba(90,89,85,0.5)', text: '#B0AFA9' },
    SCALE: { bg: 'rgba(122,146,153,0.25)', border: 'rgba(122,146,153,0.6)', text: '#FFFFFF' },
  };
  const pkgStyle = packageColors[current.package] || packageColors.LAUNCH;

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes shimmer-t {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg);  }
          50%       { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }

        .t-card-anim { animation: cardIn 0.55s cubic-bezier(0.34,1.4,0.64,1) both; }

        .glass-card {
          background: linear-gradient(135deg, rgba(122,146,153,0.07) 0%, rgba(22,22,15,0.65) 100%);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(122,146,153,0.22);
        }
        .glass-card-hover {
          transition: all 0.35s ease;
        }
        .glass-card-hover:hover {
          border-color: rgba(122,146,153,0.45);
          box-shadow: 0 8px 32px rgba(74,101,114,0.25);
          transform: translateY(-3px);
        }

        .accent-gradient {
          background: linear-gradient(90deg, #7A9299, #FFFFFF 50%, #4A6572);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-t 4s linear infinite;
        }

        .shimmer-line {
          background: linear-gradient(90deg, transparent, #7A9299, #4A6572, transparent);
          background-size: 200% auto;
          animation: shimmer-t 3s linear infinite;
        }

        .avatar-float { animation: float-slow 4s ease-in-out infinite; }
        .quote-float  { animation: float-slow 6s ease-in-out infinite; }

        .nav-btn {
          background: rgba(122,146,153,0.10);
          border: 1px solid rgba(122,146,153,0.28);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .nav-btn:hover {
          background: rgba(122,146,153,0.22);
          border-color: rgba(122,146,153,0.6);
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(74,101,114,0.3);
        }

        .dot-pill {
          height: 8px;
          border-radius: 4px;
          background: rgba(255,255,255,0.2);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
        }
        .dot-pill:hover { background: rgba(122,146,153,0.5); }
        .dot-pill.active {
          width: 36px !important;
          background: linear-gradient(90deg, #7A9299, #4A6572);
          box-shadow: 0 2px 10px rgba(74,101,114,0.4);
        }

        .result-tile {
          background: rgba(122,146,153,0.07);
          border: 1px solid rgba(122,146,153,0.18);
          transition: all 0.3s ease;
        }
        .result-tile:hover {
          background: rgba(122,146,153,0.14);
          border-color: rgba(122,146,153,0.40);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(74,101,114,0.2);
        }

        .link-btn {
          background: linear-gradient(135deg, #7A9299 0%, #4A6572 100%);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .link-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #8DAAB0, #5A7A88);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .link-btn:hover::after  { opacity: 1; }
        .link-btn:hover         { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(74,101,114,0.45); }
        .link-btn span          { position: relative; z-index: 1; }

        .link-btn-ghost {
          background: rgba(122,146,153,0.08);
          border: 1px solid rgba(122,146,153,0.30);
          transition: all 0.3s ease;
        }
        .link-btn-ghost:hover {
          background: rgba(122,146,153,0.18);
          border-color: rgba(122,146,153,0.6);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(74,101,114,0.2);
        }

        .verified-chip {
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.30);
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(72px);
          pointer-events: none;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-[500px] h-[500px] top-1/4 left-1/6"
          style={{ background: 'radial-gradient(circle, rgba(122,146,153,0.09) 0%, transparent 70%)' }} />
        <div className="orb w-[400px] h-[400px] bottom-1/4 right-1/6"
          style={{ background: 'radial-gradient(circle, rgba(74,101,114,0.08) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(122,146,153,1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(122,146,153,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
      </div>

      <div className="w-[88%] max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 mb-5 px-5 py-2 rounded-full"
            style={{ background: 'rgba(122,146,153,0.10)', border: '1px solid rgba(122,146,153,0.28)' }}>
            <Award className="w-4 h-4 text-gfx-teal" />
            <span className="inter-font text-gfx-teal font-semibold text-xs uppercase tracking-widest">
              Client Success Stories
            </span>
          </div>

          <h2 className="rajdhani-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-5">
            Real Results from{' '}
            <span className="accent-gradient">Real Clients</span>
          </h2>
          <div className="shimmer-line h-[2px] w-20 rounded-full mx-auto mb-5" />
          <p className="inter-font text-gfx-white/65 text-base lg:text-lg max-w-2xl mx-auto">
            Don't take our word for it — see how we've helped businesses like yours achieve measurable, lasting growth.
          </p>
        </div>

        {/* ── Main card ── */}
        <div className="relative mb-6">

          {/* Progress bar */}
          <div className="mb-4 px-1">
            <ProgressBar
              isPlaying={isPlaying}
              duration={AUTOPLAY_DELAY}
              onComplete={next}
              resetKey={progressKey}
            />
          </div>

          <div key={animKey} className="t-card-anim glass-card rounded-3xl p-8 lg:p-12">

            {/* Floating quote */}
            <div className="quote-float absolute top-8 right-8 opacity-[0.07] pointer-events-none select-none">
              <Quote className="w-28 h-28 text-gfx-teal" />
            </div>

            <div className="relative z-10">

              {/* ── Top row: avatar + info + project meta ── */}
              <div className="flex flex-col lg:flex-row gap-8 mb-8">

                {/* Avatar + identity */}
                <div className="flex items-center gap-5 flex-1 min-w-0">
                  <div className={`avatar-float w-28 h-28 lg:w-36 lg:h-36 rounded-2xl flex-shrink-0 shadow-xl overflow-hidden flex items-center justify-center p-3`}
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(122,146,153,0.25)' }}>
                    {current.avatar
                      ? <img
                          src={current.avatar}
                          alt={`${current.company} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextSibling.style.display = 'flex';
                          }}
                        />
                      : null
                    }
                    <span
                      className="w-full h-full items-center justify-center text-gfx-white rajdhani-font font-bold text-4xl"
                      style={{ display: 'none' }}
                    >
                      {current.name.charAt(0)}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="rajdhani-font text-gfx-white text-2xl lg:text-[28px] font-bold leading-tight">
                        {current.name}
                      </h3>
                      <div className="verified-chip rounded-full px-2.5 py-0.5 flex items-center gap-1.5 flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                        <span className="inter-font text-green-400 text-[11px] font-semibold tracking-wide">Verified</span>
                      </div>
                    </div>

                    <p className="inter-font text-gfx-white/70 text-sm mb-2">{current.role}</p>

                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-gfx-teal flex-shrink-0" />
                        <span className="inter-font text-gfx-white/80 text-sm font-medium">{current.company}</span>
                      </div>
                      <span className="text-gfx-white/25">·</span>
                      <span className="inter-font text-gfx-white/50 text-sm">{current.industry}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="inter-font text-gfx-white/60 text-sm ml-1">{current.rating}.0 / 5.0</span>
                    </div>
                  </div>
                </div>

                {/* Project meta chips */}
                <div className="flex flex-row lg:flex-col gap-2.5 lg:min-w-[240px] flex-wrap lg:flex-nowrap">
                  {/* Package */}
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl flex-1 lg:flex-none"
                    style={{ background: pkgStyle.bg, border: `1px solid ${pkgStyle.border}` }}>
                    <Package className="w-4 h-4 flex-shrink-0" style={{ color: pkgStyle.text }} />
                    <div>
                      <p className="inter-font text-gfx-white/50 text-[10px] uppercase tracking-widest">Package</p>
                      <p className="rajdhani-font font-bold text-base leading-tight" style={{ color: pkgStyle.text }}>
                        {current.package}
                      </p>
                    </div>
                  </div>

                  {/* Year */}
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl flex-1 lg:flex-none"
                    style={{ background: 'rgba(122,146,153,0.07)', border: '1px solid rgba(122,146,153,0.18)' }}>
                    <Calendar className="w-4 h-4 text-gfx-teal flex-shrink-0" />
                    <div>
                      <p className="inter-font text-gfx-white/50 text-[10px] uppercase tracking-widest">Completed</p>
                      <p className="inter-font text-gfx-white font-semibold text-sm">{current.year}</p>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl flex-1 lg:flex-none"
                    style={{ background: 'rgba(122,146,153,0.07)', border: '1px solid rgba(122,146,153,0.18)' }}>
                    <TrendingUp className="w-4 h-4 text-gfx-teal flex-shrink-0" />
                    <div>
                      <p className="inter-font text-gfx-white/50 text-[10px] uppercase tracking-widest">Service</p>
                      <p className="inter-font text-gfx-white font-medium text-sm leading-tight">{current.service}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Divider ── */}
              <div className="shimmer-line h-[1px] rounded-full mb-8 opacity-40" />

              {/* ── Testimonial quote ── */}
              <blockquote className="inter-font text-gfx-white/88 text-base lg:text-[17px] leading-[1.75] mb-8 pl-4"
                style={{ borderLeft: '3px solid rgba(122,146,153,0.45)' }}>
                "{current.testimonial}"
              </blockquote>

              {/* ── Results ── */}
              <div className="mb-7">
                <h4 className="inter-font text-gfx-white/60 text-xs uppercase tracking-widest font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-gfx-teal" />
                  Measurable Results
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {current.results.map((r, i) => (
                    <div key={i} className="result-tile rounded-2xl p-4 text-center">
                      <div className="rajdhani-font text-gfx-teal text-3xl lg:text-[36px] font-bold mb-1 leading-none">
                        {r.metric}
                      </div>
                      <div className="inter-font text-gfx-white/60 text-xs lg:text-sm">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Before / After ── */}
              <div className="grid md:grid-cols-2 gap-3 mb-7">
                <div className="p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.20)' }}>
                  <p className="inter-font text-red-400/80 text-[10px] uppercase tracking-widest font-semibold mb-1.5">Before</p>
                  <p className="inter-font text-gfx-white/75 text-sm leading-snug">{current.beforeAfter.before}</p>
                </div>
                <div className="p-4 rounded-xl" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.20)' }}>
                  <p className="inter-font text-green-400/80 text-[10px] uppercase tracking-widest font-semibold mb-1.5">After</p>
                  <p className="inter-font text-gfx-white/75 text-sm leading-snug">{current.beforeAfter.after}</p>
                </div>
              </div>

              {/* ── Footer row: duration + links ── */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6"
                style={{ borderTop: '1px solid rgba(122,146,153,0.15)' }}>

                <div className="flex items-center gap-2 inter-font text-sm">
                  <span className="text-gfx-white/45">Project Duration:</span>
                  <span className="text-gfx-teal font-semibold">{current.projectDuration}</span>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  {/* Website link — always shown */}
                  {current.websiteUrl && (
                    <a
                      href={current.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn-ghost text-gfx-white inter-font font-semibold text-sm px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-gfx-teal" />
                      Visit Website
                    </a>
                  )}

                  {/* Case study — only shown when caseStudyUrl is set */}
                  {current.caseStudyUrl && (
                    <a
                      href={current.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn text-white inter-font font-bold text-sm px-5 py-2 rounded-lg flex items-center gap-2"
                    >
                      <span className="flex items-center gap-2">
                        View Case Study
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* ── Nav arrows ── */}
          <button
            onClick={() => handleManualNav(prev)}
            className="nav-btn absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-12 h-12 rounded-full flex items-center justify-center text-gfx-white z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleManualNav(next)}
            className="nav-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-12 h-12 rounded-full flex items-center justify-center text-gfx-white z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* ── Dots + play/pause ── */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => { goTo(i); setIsPlaying(false); }}
                className={`dot-pill ${i === currentIndex ? 'active' : ''}`}
                style={{ width: i === currentIndex ? 36 : 8 }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={togglePlay}
            className="nav-btn w-9 h-9 rounded-full flex items-center justify-center text-gfx-white ml-2"
            aria-label={isPlaying ? 'Pause autoplay' : 'Resume autoplay'}
          >
            {isPlaying
              ? <Pause className="w-3.5 h-3.5" />
              : <Play  className="w-3.5 h-3.5 ml-0.5" />
            }
          </button>
        </div>

        {/* ── Summary stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { value: '100%', label: 'Client Satisfaction' },
            { value: '20+',  label: 'Projects Delivered'  },
            { value: '5.0★', label: 'Average Rating'      },
            { value: '3 Yrs',label: 'In Business'         },
          ].map((s, i) => (
            <div key={i} className="glass-card glass-card-hover rounded-2xl p-6 text-center">
              <div className="rajdhani-font text-gfx-teal text-4xl lg:text-5xl font-bold mb-1.5">{s.value}</div>
              <div className="inter-font text-gfx-white/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <p className="inter-font text-gfx-white/60 text-base mb-6">
            Ready to be our next success story?
          </p>
          <button className="link-btn text-white inter-font font-bold px-10 py-4 rounded-xl shadow-xl">
            <span className="flex items-center gap-3 text-base">
              Start Your Project Today
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </button>
          <p className="inter-font text-gfx-white/35 text-xs mt-4">
            Free consultation · Response within 24 hours
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;