import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
  X, ExternalLink, CheckCircle2, FileText, Clock,
  Package, Tag, ArrowRight, Award, Quote, Star,
} from 'lucide-react';
import { testimonials } from './Testimonials';
import { packages } from './Pricing';

const pkgStyle = {
  LAUNCH:  { bg: 'rgba(122,146,153,0.15)', border: 'rgba(122,146,153,0.4)', text: '#7A9299' },
  ELEVATE: { bg: 'rgba(74,101,114,0.20)',  border: 'rgba(74,101,114,0.5)',  text: '#8DAAB0' },
  GROWTH:  { bg: 'rgba(90,89,85,0.20)',    border: 'rgba(90,89,85,0.5)',    text: '#C0BFBA' },
  SCALE:   { bg: 'rgba(122,146,153,0.25)', border: 'rgba(122,146,153,0.6)', text: '#FFFFFF' },
};

/* ─── Case Study Modal ──────────────────────────────────────────────────
   Renders the full detail for a single portfolio project — used by both
   the carousel and grid views in Portfolio.jsx so grid-view visitors get
   the complete picture without switching modes. Every fact shown here
   comes straight from the project's own data — nothing embellished. ── */
const CaseStudyModal = ({ project, isOpen, onClose, onOpenContact }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [shownSlug, setShownSlug] = useState(null);
  const overlayRef = useRef(null);
  const bodyRef = useRef(null);

  // Reset the gallery index whenever a different project is opened —
  // adjusted during render rather than in an effect (React-recommended
  // pattern for resetting state on prop change).
  if (project && project.caseStudySlug !== shownSlug) {
    setShownSlug(project.caseStudySlug);
    setImgIdx(0);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [onClose]);

  // Stagger the detail rows in each time a case study opens (or a new one loads in)
  useEffect(() => {
    if (!isOpen) return;
    const rows = bodyRef.current?.querySelectorAll('.cs-hl-item, .cs-result, .cs-tag, .cs-quote-card, .cs-incl-item');
    if (rows?.length) {
      gsap.fromTo(rows,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.30, stagger: 0.02, ease: 'power2.out', delay: 0.10 }
      );
    }
  }, [isOpen, shownSlug]);

  if (!isOpen || !project) return null;

  const pkg = pkgStyle[project.stats.package] || pkgStyle.LAUNCH;
  // Real client quote for this project, if one exists in Testimonials — never fabricated.
  const testimonial = testimonials.find((t) => t.caseStudySlug === project.caseStudySlug);
  // The real, published feature list for this project's package tier.
  const pkgDetails = packages.find((p) => p.name === project.stats.package);
  const handleOverlayClick = (e) => { if (e.target === overlayRef.current) onClose(); };
  const handleStartProject = () => { onClose(); onOpenContact?.(); };

  return (
    <div ref={overlayRef} onClick={handleOverlayClick} style={{
      position:'fixed', inset:0, zIndex:9999,
      display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem',
      background:'rgba(10,10,8,0.87)', backdropFilter:'blur(10px)',
      WebkitBackdropFilter:'blur(10px)', animation:'csOverlayIn 0.3s ease-out',
    }}>
      <style>{`
        @keyframes csOverlayIn { from{opacity:0}to{opacity:1} }
        @keyframes csModalIn   { from{opacity:0;transform:translateY(40px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes csImgKen    { 0%{transform:scale(1)}100%{transform:scale(1.05)} }
        @keyframes csShimmer   { 0%{background-position:-200% center}100%{background-position:200% center} }
        @keyframes csThumbIn   { from{opacity:0;transform:translateY(8px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)} }

        .cs-card {
          background:linear-gradient(135deg,rgba(22,22,15,0.98),rgba(30,30,20,0.98));
          border:1px solid rgba(122,146,153,0.25); border-radius:24px;
          box-shadow:0 0 0 1px rgba(122,146,153,0.06),0 32px 80px rgba(0,0,0,0.75),inset 0 1px 0 rgba(255,255,255,0.04);
          animation:csModalIn 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards;
          position:relative; overflow:hidden; width:100%; max-width:920px; max-height:92vh; overflow-y:auto;
        }
        .cs-card::-webkit-scrollbar{width:4px}
        .cs-card::-webkit-scrollbar-track{background:transparent}
        .cs-card::-webkit-scrollbar-thumb{background:rgba(122,146,153,0.35);border-radius:2px}
        .cs-card::before{
          content:''; position:absolute; top:0; left:0; right:0; height:2px; z-index:2;
          background:linear-gradient(90deg,transparent,#7A9299,#4A6572,#7A9299,transparent);
          background-size:200% auto; animation:csShimmer 3.5s linear infinite;
        }

        .cs-close-btn{position:absolute;top:16px;right:16px;background:rgba(10,10,8,0.55);border:1px solid rgba(255,255,255,0.15);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;transition:all 0.3s;z-index:10}
        .cs-close-btn:hover{background:rgba(122,146,153,0.30);border-color:rgba(122,146,153,0.55);transform:rotate(90deg)}

        .cs-main-img{width:100%;height:100%;object-fit:cover;animation:csImgKen 3.5s ease-in-out alternate infinite;will-change:transform;backface-visibility:hidden}

        .cs-quote-card{background:linear-gradient(135deg,rgba(122,146,153,0.10) 0%,rgba(10,10,8,0.55) 100%);border:1px solid rgba(122,146,153,0.22);border-radius:16px;position:relative;overflow:hidden}

        .cs-incl-item{display:flex;gap:9px;align-items:flex-start;padding:8px 10px;border-radius:9px;background:rgba(122,146,153,0.05);border:1px solid rgba(122,146,153,0.10);transition:all 0.25s ease}
        .cs-incl-item:hover{background:rgba(122,146,153,0.10);border-color:rgba(122,146,153,0.26)}
        .cs-cat-badge{background:rgba(10,10,8,0.75);border:1px solid rgba(122,146,153,0.35);backdrop-filter:blur(8px)}
        .cs-live-badge{background:rgba(10,10,8,0.75);border:1px solid rgba(122,146,153,0.35);backdrop-filter:blur(8px);transition:border-color 0.25s}
        .cs-live-badge:hover{border-color:#7A9299}

        .cs-thumb{flex-shrink:0;width:76px;height:54px;border-radius:8px;overflow:hidden;border:2px solid rgba(122,146,153,0.20);cursor:pointer;transition:all 0.3s ease;animation:csThumbIn 0.4s ease both}
        .cs-thumb:hover{border-color:rgba(122,146,153,0.60);transform:scale(1.06)}
        .cs-thumb.cs-t-active{border-color:#7A9299;box-shadow:0 0 12px rgba(122,146,153,0.45)}
        .cs-thumb img{width:100%;height:100%;object-fit:cover}

        .cs-result{background:rgba(122,146,153,0.08);border:1px solid rgba(122,146,153,0.18);border-radius:14px;padding:14px;text-align:center;transition:all 0.3s ease}
        .cs-result:hover{background:rgba(122,146,153,0.16);border-color:rgba(122,146,153,0.38);transform:translateY(-3px)}

        .cs-stat-chip{background:rgba(122,146,153,0.08);border:1px solid rgba(122,146,153,0.18);transition:all 0.3s ease}
        .cs-stat-chip:hover{background:rgba(122,146,153,0.16);border-color:rgba(122,146,153,0.40)}

        .cs-hl-item{display:flex;gap:10px;align-items:flex-start;padding:9px 12px;border-radius:10px;background:rgba(122,146,153,0.06);border:1px solid rgba(122,146,153,0.12);transition:all 0.28s ease}
        .cs-hl-item:hover{background:rgba(122,146,153,0.12);border-color:rgba(122,146,153,0.30);transform:translateX(4px)}

        .cs-tag{background:rgba(122,146,153,0.08);border:1px solid rgba(122,146,153,0.22);transition:all 0.28s ease}
        .cs-tag:hover{background:rgba(122,146,153,0.18);border-color:rgba(122,146,153,0.48)}

        .cs-cta-primary{background:linear-gradient(135deg,#7A9299 0%,#4A6572 100%);border:1px solid rgba(122,146,153,0.28);transition:all 0.35s ease;position:relative;overflow:hidden}
        .cs-cta-primary::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.11),transparent);opacity:0;transition:opacity 0.35s}
        .cs-cta-primary:hover::after{opacity:1}
        .cs-cta-primary:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(74,101,114,.45)}
        .cs-cta-primary span{position:relative;z-index:1}

        .cs-cta-ghost{background:rgba(122,146,153,0.07);border:1px solid rgba(122,146,153,0.28);transition:all 0.3s ease}
        .cs-cta-ghost:hover{background:rgba(122,146,153,0.16);border-color:rgba(122,146,153,0.55);transform:translateY(-2px)}
      `}</style>

      <div className="cs-card">
        <button className="cs-close-btn" onClick={onClose} aria-label="Close case study"><X size={16} /></button>

        {/* ── Gallery ── */}
        <div className="relative aspect-video">
          <img src={project.images[imgIdx]} alt={`${project.name} screenshot`} className="cs-main-img" />
          <div className="absolute top-4 left-4">
            <span className="cs-cat-badge inter-font text-gfx-white font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="cs-live-badge absolute top-4 right-16 text-gfx-teal px-3 py-1 rounded-full flex items-center gap-1.5 inter-font font-semibold text-xs">
              <ExternalLink className="w-3 h-3" /> Live Site
            </a>
          )}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-4 flex gap-2.5">
              {project.images.map((img, ii) => (
                <button key={ii} onClick={() => setImgIdx(ii)}
                  className={`cs-thumb ${ii === imgIdx ? 'cs-t-active' : ''}`} style={{ animationDelay:`${ii*0.08}s` }}>
                  <img src={img} alt={`View ${ii+1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Body ── */}
        <div ref={bodyRef} className="p-7 lg:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="rajdhani-font text-gfx-white text-3xl lg:text-4xl font-bold leading-tight mb-1">{project.name}</h3>
              <p className="inter-font text-gfx-teal font-semibold text-sm">{project.tagline}</p>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              <div className="cs-stat-chip rounded-xl px-3.5 py-2 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-gfx-teal flex-shrink-0" />
                <span className="inter-font text-gfx-white/80 text-xs font-semibold">{project.stats.pages} Pages</span>
              </div>
              <div className="cs-stat-chip rounded-xl px-3.5 py-2 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gfx-teal flex-shrink-0" />
                <span className="inter-font text-gfx-white/80 text-xs font-semibold">{project.stats.timeline}</span>
              </div>
              <div className="cs-stat-chip rounded-xl px-3.5 py-2 flex items-center gap-2" style={{ background:pkg.bg, borderColor:pkg.border }}>
                <Package className="w-3.5 h-3.5 flex-shrink-0" style={{ color:pkg.text }} />
                <span className="inter-font text-xs font-semibold" style={{ color:pkg.text }}>{project.stats.package}</span>
              </div>
            </div>
          </div>

          <p className="inter-font text-gfx-white/70 text-sm lg:text-[15px] leading-relaxed mb-7">{project.description}</p>

          {project.results && (
            <div className="mb-7">
              <p className="inter-font text-gfx-white/45 text-[10px] uppercase tracking-widest font-semibold mb-2.5 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-gfx-teal" /> Measurable Results
              </p>
              <div className="grid grid-cols-3 gap-3">
                {project.results.map((r, i) => (
                  <div key={i} className="cs-result">
                    <div className="rajdhani-font text-gfx-teal text-2xl lg:text-3xl font-bold leading-none mb-1">{r.metric}</div>
                    <div className="inter-font text-gfx-white/55 text-[10px] uppercase tracking-widest">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {testimonial && (
            <div className="cs-quote-card p-5 lg:p-6 mb-7">
              <Quote className="w-8 h-8 text-gfx-teal/25 mb-2" />
              <p className="inter-font text-gfx-white/85 text-sm lg:text-[15px] leading-relaxed italic mb-4">
                "{testimonial.testimonial}"
              </p>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p className="inter-font text-gfx-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="inter-font text-gfx-white/50 text-xs">{testimonial.role}, {testimonial.company}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mb-7">
            <p className="inter-font text-gfx-white/45 text-[10px] uppercase tracking-widest font-semibold mb-2.5 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-gfx-teal" /> Key Features
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="cs-hl-item">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gfx-teal flex-shrink-0 mt-0.5" />
                  <span className="inter-font text-gfx-white/72 text-sm leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {pkgDetails && (
            <div className="mb-7">
              <p className="inter-font text-gfx-white/45 text-[10px] uppercase tracking-widest font-semibold mb-2.5 flex items-center gap-2">
                <Package className="w-3.5 h-3.5 text-gfx-teal" /> What's Included — {pkgDetails.name} Package
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {pkgDetails.features.map((f, i) => (
                  <div key={i} className="cs-incl-item">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: f.highlight ? '#7A9299' : 'rgba(122,146,153,0.55)' }} />
                    <span className={`inter-font text-xs leading-snug ${f.highlight ? 'text-gfx-white font-medium' : 'text-gfx-white/65'}`}>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((t, i) => (
              <span key={i} className="cs-tag inter-font text-gfx-white/75 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                <Tag className="w-3 h-3 text-gfx-teal" />{t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="cs-cta-primary text-white inter-font font-bold px-6 py-3.5 rounded-xl flex-1 flex items-center justify-center">
                <span className="flex items-center gap-2 text-sm">Visit Live Site <ExternalLink className="w-4 h-4" /></span>
              </a>
            )}
            <button onClick={handleStartProject}
              className="cs-cta-ghost text-gfx-white inter-font font-semibold px-6 py-3.5 rounded-xl flex-1 text-sm flex items-center justify-center gap-2">
              Get a Similar Project <ArrowRight className="w-4 h-4 text-gfx-teal" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
