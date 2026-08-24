import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm } from '@formspree/react';
import { Download, CheckCircle2, Gift, Send } from 'lucide-react';
import Button from '../common/Button';
import Input from '../common/Input';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const checklistItems = [
  'The 37-point pre-launch checklist we run on every client site',
  'A page-speed & Core Web Vitals quick-audit worksheet',
  'Our conversion-focused hero & CTA copy templates',
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
const LeadMagnetSection = () => {
  // Reuses the same Formspree endpoint as the contact modal — one inbox,
  // tagged by _subject so submissions are easy to tell apart.
  const [state, handleSubmit] = useForm('xeolvgol');

  const sectionRef = useRef(null);
  const cardRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 56, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      );
      sectionRef.current?.querySelectorAll('.orb-lm').forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -70 : -45,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: i % 2 === 0 ? 2 : 3 },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="leadMagnet" className="py-20 lg:py-28 relative overflow-hidden">
      <style>{`
        .lm-card {
          background: linear-gradient(145deg, rgba(122,146,153,0.10) 0%, rgba(10,10,8,0.65) 100%);
          border: 1px solid rgba(122,146,153,0.22);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          position: relative; overflow: hidden;
        }
        .lm-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(122,146,153,0.55), rgba(74,101,114,0.55), transparent);
        }
        .lm-badge {
          background: rgba(122,146,153,0.10);
          border: 1px solid rgba(122,146,153,0.30);
          backdrop-filter: blur(10px);
        }
        .lm-item { display:flex; gap:10px; align-items:flex-start; }
        .orb-lm-bg { position:absolute; border-radius:50%; pointer-events:none; filter:blur(72px); }
        .lm-error { font-family:'Inter',sans-serif; font-size:12px; color:#cc7070; margin-top:6px; }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-lm-bg orb-lm w-[460px] h-[460px] top-[10%] right-[8%]"
          style={{ background:'radial-gradient(circle,rgba(122,146,153,0.10) 0%,transparent 70%)' }} />
        <div className="orb-lm-bg orb-lm w-[360px] h-[360px] bottom-[10%] left-[6%]"
          style={{ background:'radial-gradient(circle,rgba(74,101,114,0.09) 0%,transparent 70%)' }} />
      </div>

      <div className="w-[88%] max-w-5xl mx-auto relative z-10">
        <div ref={cardRef} className="lm-card rounded-3xl p-8 lg:p-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">

          {/* LEFT — pitch */}
          <div>
            <div className="lm-badge inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full">
              <Gift className="w-4 h-4 text-gfx-teal" />
              <span className="inter-font text-gfx-teal font-semibold text-xs uppercase tracking-widest">
                Free Resource
              </span>
            </div>

            <h2 className="rajdhani-font text-gfx-white text-4xl lg:text-5xl font-bold leading-tight mb-4">
              The 2026 Website<br className="hidden sm:block" /> Launch Checklist
            </h2>

            <p className="inter-font text-gfx-white/60 text-sm lg:text-base leading-relaxed mb-6 max-w-md">
              The exact pre-launch checklist we run on every client project — free, no strings attached. Drop your email and we'll send it straight over.
            </p>

            <div className="flex flex-col gap-3">
              {checklistItems.map((item, i) => (
                <div key={i} className="lm-item">
                  <CheckCircle2 className="w-4 h-4 text-gfx-teal flex-shrink-0 mt-0.5" />
                  <span className="inter-font text-gfx-white/72 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            {state.succeeded ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-14 h-14 text-gfx-teal mx-auto mb-4" />
                <h3 className="rajdhani-font text-gfx-white text-2xl font-bold mb-2">Check your inbox! 🎉</h3>
                <p className="inter-font text-gfx-white/60 text-sm leading-relaxed">
                  We'll send the checklist to your email within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-white rounded-2xl p-6 lg:p-7 shadow-2xl"
              >
                <input type="hidden" name="_subject" value="Lead Magnet: Website Launch Checklist" />

                <Input
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  required
                />
                <div>
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    required
                  />
                  {state.errors?.length > 0 && (
                    <p className="lm-error">Something went wrong — please try again.</p>
                  )}
                </div>

                <Button type="submit" variant="primary" size="md" disabled={state.submitting} className="w-full">
                  <span className="flex items-center justify-center gap-2">
                    {state.submitting ? 'Sending…' : (<><Download className="w-4 h-4" /> Send Me the Checklist</>)}
                  </span>
                </Button>

                <p className="inter-font text-[11px] text-center" style={{ color: '#5A5955' }}>
                  <Send className="w-3 h-3 inline mr-1" />
                  No spam — just the resource, once.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
