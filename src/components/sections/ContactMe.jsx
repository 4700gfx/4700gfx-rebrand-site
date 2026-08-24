import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Closing CTA band — sits between VisitUs and the Footer. Deliberately
// lightweight: the full contact experience already lives in the
// ContactModal opened from the navbar, so this just gets people there
// (or straight to email/phone) one more time before they hit the footer.
// ─────────────────────────────────────────────────────────────────────────────
const ContactMe = ({ onOpenContact }) => {
  const sectionRef = useRef(null);
  const cardRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.80, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-16 lg:py-20 relative overflow-hidden">
      <style>{`
        .contact-cta-card {
          background: linear-gradient(135deg, rgba(122,146,153,0.14) 0%, rgba(74,101,114,0.10) 100%);
          border: 1px solid rgba(122,146,153,0.28);
          position: relative; overflow: hidden;
        }
        .contact-cta-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background: linear-gradient(90deg, transparent, rgba(122,146,153,0.6), rgba(74,101,114,0.6), transparent);
        }
        .contact-quick-link {
          color: rgba(255,255,255,0.65);
          transition: color 0.25s ease;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .contact-quick-link:hover { color: #7A9299; }
      `}</style>

      <div className="w-[88%] max-w-5xl mx-auto relative z-10">
        <div ref={cardRef} className="contact-cta-card rounded-3xl p-8 lg:p-14 text-center">
          <h2 className="rajdhani-font text-gfx-white text-3xl lg:text-5xl font-bold leading-tight mb-4">
            Have a project in mind?<br className="hidden sm:block" /> Let's talk about it.
          </h2>
          <p className="inter-font text-gfx-white/60 text-sm lg:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us what you're building and we'll get back to you within 24 hours — no obligation, no pressure.
          </p>

          <div className="flex justify-center mb-6">
            <Button variant="primary" size="lg" onClick={onOpenContact}>
              <span className="flex items-center gap-2.5">
                Send a Message
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a href="mailto:hello@4700gfx.com" className="contact-quick-link inter-font text-sm font-medium">
              <Mail className="w-4 h-4 text-gfx-teal" />
              hello@4700gfx.com
            </a>
            <a href="tel:+15551234567" className="contact-quick-link inter-font text-sm font-medium">
              <Phone className="w-4 h-4 text-gfx-teal" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
