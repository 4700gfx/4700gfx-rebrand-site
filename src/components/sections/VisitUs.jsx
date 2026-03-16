import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MapPin, Clock, Phone, Mail, Calendar,
  Navigation, Coffee, Wifi, Car, Info,
  ArrowRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const businessHours = [
  { day: 'Monday',    hours: '9:00 AM – 6:00 PM', status: 'open'        },
  { day: 'Tuesday',   hours: '9:00 AM – 6:00 PM', status: 'open'        },
  { day: 'Wednesday', hours: '9:00 AM – 6:00 PM', status: 'open'        },
  { day: 'Thursday',  hours: '9:00 AM – 6:00 PM', status: 'open'        },
  { day: 'Friday',    hours: '9:00 AM – 6:00 PM', status: 'open'        },
  { day: 'Saturday',  hours: 'By Appointment',     status: 'appointment' },
  { day: 'Sunday',    hours: 'Closed',             status: 'closed'      },
];

const amenities = [
  { Icon: Coffee,   label: 'Complimentary Coffee' },
  { Icon: Wifi,     label: 'High-Speed WiFi'       },
  { Icon: Car,      label: 'Free Parking'           },
  { Icon: Calendar, label: 'Meeting Rooms'          },
];

const contactDetails = [
  { Icon: Phone, label: 'Phone',   value: '(555) 123-4567',      href: 'tel:+15551234567'      },
  { Icon: Mail,  label: 'Email',   value: 'hello@4700gfx.com',   href: 'mailto:hello@4700gfx.com' },
  { Icon: MapPin,label: 'Location',value: 'Hollywood, FL, USA',  href: 'https://maps.google.com/?q=Hollywood,FL' },
];

const TODAY = (() => {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return days[new Date().getDay()];
})();

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
const VisitUs = () => {
  const sectionRef   = useRef(null);
  const badgeRef     = useRef(null);
  const h2Ref        = useRef(null);
  const ruleRef      = useRef(null);
  const subRef       = useRef(null);
  const mapColRef    = useRef(null);
  const infoColRef   = useRef(null);
  const amenRef      = useRef(null);
  const ctaRef       = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(badgeRef.current,
        { y: 40, opacity: 0, scale: 0.78 },
        { y: 0, opacity: 1, scale: 1, duration: 0.75, ease: 'back.out(2)',
          scrollTrigger: { trigger: badgeRef.current, start: 'top 87%', toggleActions: 'play none none none' } }
      );

      const words = h2Ref.current?.querySelectorAll('.gsap-w');
      if (words?.length) {
        gsap.fromTo(words,
          { y: 60, opacity: 0, rotateX: -45 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.78, stagger: 0.065, ease: 'power3.out',
            scrollTrigger: { trigger: h2Ref.current, start: 'top 84%', toggleActions: 'play none none none' } }
        );
      }

      gsap.fromTo(ruleRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.65, ease: 'power2.out', transformOrigin: 'center',
          scrollTrigger: { trigger: ruleRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo(subRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.70, ease: 'power2.out',
          scrollTrigger: { trigger: subRef.current, start: 'top 86%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo(mapColRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.90, ease: 'power3.out',
          scrollTrigger: { trigger: mapColRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      );

      gsap.fromTo(infoColRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.90, ease: 'power3.out', delay: 0.08,
          scrollTrigger: { trigger: infoColRef.current, start: 'top 82%', toggleActions: 'play none none none' } }
      );

      const amenCards = amenRef.current?.querySelectorAll('.amen-card');
      if (amenCards?.length) {
        gsap.fromTo(amenCards,
          { y: 40, opacity: 0, scale: 0.90 },
          { y: 0, opacity: 1, scale: 1, duration: 0.60, stagger: 0.09, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: amenRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
        );
      }

      gsap.fromTo(ctaRef.current,
        { y: 44, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.80, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 88%', toggleActions: 'play none none none' } }
      );

      sectionRef.current?.querySelectorAll('.orb-vis').forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -80 : -55,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: i % 2 === 0 ? 2 : 3 },
        });
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // ────────────────────────────────────────────────────────────────────
  return (
    <section ref={sectionRef} id="visitUs" className="py-20 lg:py-32 relative overflow-hidden">
      <style>{`
        @keyframes sh-vis {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes marker-pulse {
          0%,100% { transform:rotate(-45deg) scale(1);   box-shadow:0 6px 20px rgba(122,146,153,0.40); }
          50%      { transform:rotate(-45deg) scale(1.08); box-shadow:0 10px 32px rgba(122,146,153,0.65); }
        }
        @keyframes ping-vis {
          0%   { transform:scale(1);   opacity:0.8; }
          70%  { transform:scale(2.0); opacity:0;   }
          100% { transform:scale(2.0); opacity:0;   }
        }

        .acc-vis {
          background: linear-gradient(90deg,#7A9299 0%,#fff 35%,#4A6572 60%,#7A9299 100%);
          background-size:250% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:sh-vis 4.5s linear infinite;
        }
        .sh-rule-v {
          background: linear-gradient(90deg,transparent,#7A9299 30%,#4A6572 70%,transparent);
          background-size:200% auto;
          animation:sh-vis 3.5s linear infinite;
        }

        .vis-badge {
          background:rgba(122,146,153,0.09);
          border:1px solid rgba(122,146,153,0.28);
          backdrop-filter:blur(10px);
        }

        /* Map card */
        .map-card {
          background:linear-gradient(145deg,rgba(122,146,153,0.09) 0%,rgba(10,10,8,0.60) 100%);
          border:1px solid rgba(122,146,153,0.20);
          backdrop-filter:blur(16px);
          position:relative; overflow:hidden;
        }
        .map-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(122,146,153,0.55),transparent);
        }

        /* Map iframe filter */
        .map-frame { filter:grayscale(1) brightness(0.5) contrast(1.1); transition:filter 0.5s; }
        .map-frame:hover { filter:grayscale(0.3) brightness(0.7) contrast(1.05); }

        /* Map overlay badge */
        .map-overlay {
          background:rgba(10,10,8,0.85);
          border:1px solid rgba(122,146,153,0.28);
          backdrop-filter:blur(14px);
        }

        /* Location marker */
        .loc-pin {
          width:36px; height:36px; border-radius:50% 50% 50% 0;
          background:linear-gradient(135deg,#7A9299,#4A6572);
          transform:rotate(-45deg);
          display:flex; align-items:center; justify-content:center;
          flex-shrink:0;
          animation:marker-pulse 2.5s ease-in-out infinite;
        }
        .loc-pin-icon { transform:rotate(45deg); }

        /* Ping ring */
        .ping-ring {
          position:absolute;
          width:36px; height:36px; border-radius:50%;
          background:rgba(122,146,153,0.35);
          animation:ping-vis 2s ease-out infinite;
        }

        /* Info glass card */
        .info-glass {
          background:linear-gradient(145deg,rgba(122,146,153,0.09) 0%,rgba(10,10,8,0.58) 100%);
          border:1px solid rgba(122,146,153,0.20);
          backdrop-filter:blur(16px);
          position:relative; overflow:hidden;
        }
        .info-glass::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(122,146,153,0.50),transparent);
        }

        /* Hours row */
        .hour-row {
          border-radius:10px; padding:11px 14px;
          transition:all 0.28s ease; cursor:default;
        }
        .hour-row:hover { background:rgba(122,146,153,0.10); }
        .hour-row.today {
          background:rgba(122,146,153,0.13);
          border:1px solid rgba(122,146,153,0.30);
          box-shadow:inset 3px 0 0 #7A9299;
        }

        /* Status chips */
        .s-open        { background:rgba(34,197,94,0.12);  color:#4ade80; border:1px solid rgba(34,197,94,0.28); }
        .s-appointment { background:rgba(251,191,36,0.12); color:#fbbf24; border:1px solid rgba(251,191,36,0.28); }
        .s-closed      { background:rgba(239,68,68,0.12);  color:#f87171; border:1px solid rgba(239,68,68,0.28); }

        /* Contact row */
        .contact-row {
          background:rgba(122,146,153,0.07);
          border:1px solid rgba(122,146,153,0.16);
          border-radius:12px; padding:12px 16px;
          transition:all 0.3s ease;
          display:flex; align-items:center; gap:12px;
        }
        .contact-row:hover {
          background:rgba(122,146,153,0.14);
          border-color:rgba(122,146,153,0.36);
          transform:translateX(4px);
        }
        .contact-row-icon {
          width:38px; height:38px; border-radius:10px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          background:rgba(122,146,153,0.12);
          border:1px solid rgba(122,146,153,0.22);
        }

        /* Amenity cards */
        .amen-card {
          background:linear-gradient(145deg,rgba(122,146,153,0.09) 0%,rgba(10,10,8,0.55) 100%);
          border:1px solid rgba(122,146,153,0.16);
          backdrop-filter:blur(12px);
          transition:all 0.38s cubic-bezier(0.34,1.2,0.64,1);
          position:relative; overflow:hidden;
        }
        .amen-card::after {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,rgba(122,146,153,0.60),transparent);
          opacity:0; transition:opacity 0.38s;
        }
        .amen-card:hover::after { opacity:1; }
        .amen-card:hover {
          border-color:rgba(122,146,153,0.45);
          transform:translateY(-7px) scale(1.03);
          box-shadow:0 18px 44px rgba(74,101,114,0.26);
        }
        .amen-card:hover .amen-icon { transform:scale(1.14) rotate(-4deg); }
        .amen-icon { transition:transform 0.35s cubic-bezier(0.34,1.4,0.64,1); display:inline-flex; }

        /* Note chip */
        .note-chip {
          background:rgba(122,146,153,0.08);
          border:1px solid rgba(122,146,153,0.20);
          border-radius:12px; padding:12px 16px;
          display:flex; align-items:flex-start; gap:10px;
        }

        /* CTA buttons */
        .cta-solid {
          background:linear-gradient(135deg,#7A9299 0%,#4A6572 100%);
          border:1px solid rgba(122,146,153,0.28);
          transition:all 0.35s ease; position:relative; overflow:hidden;
        }
        .cta-solid::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,0.11),transparent); opacity:0; transition:opacity 0.35s; }
        .cta-solid:hover::after { opacity:1; }
        .cta-solid:hover { transform:translateY(-3px) scale(1.04); box-shadow:0 18px 44px rgba(74,101,114,.50); }
        .cta-solid span { position:relative; z-index:1; }

        .cta-ghost {
          background:rgba(122,146,153,0.07);
          border:1px solid rgba(122,146,153,0.28);
          transition:all 0.35s ease;
        }
        .cta-ghost:hover {
          background:rgba(122,146,153,0.16);
          border-color:rgba(122,146,153,0.55);
          transform:translateY(-3px) scale(1.04);
          box-shadow:0 14px 36px rgba(74,101,114,0.25);
        }

        /* BG orbs */
        .orb-v { position:absolute; border-radius:50%; pointer-events:none; filter:blur(72px); }

        /* GSAP word */
        .gsap-w { display:inline-block; }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-v orb-vis w-[500px] h-[500px] top-[12%] left-[5%]"
          style={{ background:'radial-gradient(circle,rgba(122,146,153,0.10) 0%,transparent 70%)' }} />
        <div className="orb-v orb-vis w-[420px] h-[420px] bottom-[14%] right-[6%]"
          style={{ background:'radial-gradient(circle,rgba(74,101,114,0.09) 0%,transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage:`linear-gradient(rgba(122,146,153,1) 1px,transparent 1px),linear-gradient(90deg,rgba(122,146,153,1) 1px,transparent 1px)`, backgroundSize:'80px 80px' }} />
      </div>

      <div className="w-[88%] max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">

          <div ref={badgeRef} className="inline-flex items-center gap-2.5 mb-7 px-5 py-2 rounded-full vis-badge">
            <MapPin className="w-4 h-4 text-gfx-teal" />
            <span className="inter-font text-gfx-teal font-semibold text-xs uppercase tracking-widest">
              Come Visit Us
            </span>
          </div>

          <h2
            ref={h2Ref}
            className="rajdhani-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-5"
            style={{ perspective:'900px' }}
          >
            {"Let's Meet".split(' ').map((w, i) => (
              <span key={i} className="gsap-w">{w}&nbsp;</span>
            ))}
            <br className="hidden sm:block" />
            <span className="acc-vis">
              {'In Person.'.split(' ').map((w, i) => (
                <span key={i} className="gsap-w">{w}&nbsp;</span>
              ))}
            </span>
          </h2>

          <div ref={ruleRef} className="sh-rule-v h-[2px] w-24 rounded-full mx-auto mb-6" />

          <p ref={subRef} className="inter-font text-gfx-white/60 text-base lg:text-[17px] max-w-2xl mx-auto leading-relaxed">
            We'd love to discuss your project over coffee. Schedule a visit to our Hollywood, FL studio.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">

          {/* LEFT — Map */}
          <div ref={mapColRef}>
            <div className="map-card rounded-3xl overflow-hidden h-[540px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230178.0127716992!2d-80.30966579999999!3d26.011422400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad36f342019d%3A0x7d8bc35036b31b9!2sHollywood%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" height="100%"
                style={{ border:0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-frame"
                title="4700 GFX Studios Location"
              />

              {/* Overlay info card */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="map-overlay rounded-2xl p-5">
                  <div className="flex items-center gap-4">
                    {/* Animated pin */}
                    <div className="relative flex-shrink-0 flex items-center justify-center w-10 h-10">
                      <div className="ping-ring" />
                      <div className="loc-pin">
                        <MapPin className="w-4 h-4 text-white loc-pin-icon" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="rajdhani-font text-gfx-white text-lg font-bold leading-tight">4700 GFX Studios</p>
                      <p className="inter-font text-gfx-white/60 text-xs mt-0.5">Hollywood, Florida, United States</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Hollywood,FL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inter-font text-gfx-teal font-semibold text-xs flex items-center gap-1.5 hover:text-gfx-white transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Hours + Contact */}
          <div ref={infoColRef} className="flex flex-col gap-5">

            {/* Business Hours */}
            <div className="info-glass rounded-3xl p-7 flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background:'rgba(122,146,153,0.12)', border:'1px solid rgba(122,146,153,0.22)' }}>
                  <Clock className="w-5 h-5 text-gfx-teal" />
                </div>
                <h3 className="rajdhani-font text-gfx-white text-2xl font-bold">Business Hours</h3>
              </div>

              <div className="space-y-1 mb-5">
                {businessHours.map((s, i) => (
                  <div key={i} className={`hour-row flex items-center justify-between ${s.day === TODAY ? 'today' : ''}`}>
                    <span className="inter-font text-gfx-white font-medium text-sm">
                      {s.day}
                      {s.day === TODAY && (
                        <span className="ml-2 text-gfx-teal text-[10px] font-bold uppercase tracking-widest">Today</span>
                      )}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="inter-font text-gfx-white/65 text-sm">{s.hours}</span>
                      <span className={`inter-font text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full s-${s.status}`}>
                        {s.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="note-chip">
                <Info className="w-4 h-4 text-gfx-teal flex-shrink-0 mt-0.5" />
                <p className="inter-font text-gfx-white/60 text-xs leading-relaxed">
                  We recommend booking appointments in advance. Walk-ins are welcome during business hours, subject to availability.
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="info-glass rounded-3xl p-7">
              <h3 className="rajdhani-font text-gfx-white text-xl font-bold mb-4">Get In Touch</h3>
              <div className="flex flex-col gap-2.5">
                {contactDetails.map((c, i) => (
                  <a key={i} href={c.href} target={i === 2 ? '_blank' : undefined} rel="noopener noreferrer"
                    className="contact-row group">
                    <div className="contact-row-icon">
                      <c.Icon className="w-4 h-4 text-gfx-teal" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="inter-font text-gfx-white/45 text-[10px] uppercase tracking-widest">{c.label}</p>
                      <p className="inter-font text-gfx-white font-medium text-sm truncate">{c.value}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gfx-teal/50 group-hover:text-gfx-teal transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Amenities ── */}
        <div ref={amenRef} className="mb-14">
          <div className="text-center mb-8">
            <h3 className="rajdhani-font text-gfx-white text-3xl lg:text-4xl font-bold mb-2">
              Studio Amenities
            </h3>
            <p className="inter-font text-gfx-white/50 text-sm">
              Everything you need for a productive and comfortable visit
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {amenities.map(({ Icon, label }, i) => (
              <div key={i} className="amen-card rounded-2xl p-7 text-center">
                <div className="amen-icon mb-4 mx-auto w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background:'rgba(122,146,153,0.12)', border:'1px solid rgba(122,146,153,0.22)' }}>
                  <Icon className="w-7 h-7 text-gfx-teal" />
                </div>
                <p className="inter-font text-gfx-white font-semibold text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} className="text-center">
          <p className="inter-font text-gfx-white/55 text-base mb-6">
            Ready to start your project? Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="cta-solid text-white inter-font font-bold px-9 py-4 rounded-xl shadow-xl">
              <span className="flex items-center gap-3 text-[15px]">
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </span>
            </button>
            <a href="tel:+15551234567"
              className="cta-ghost text-gfx-white inter-font font-semibold px-9 py-4 rounded-xl flex items-center gap-3 text-[15px]">
              <Phone className="w-5 h-5 text-gfx-teal" />
              Call Us Now
            </a>
          </div>
          <p className="inter-font text-xs mt-4" style={{ color:'rgba(255,255,255,0.28)' }}>
            Walk-ins welcome during business hours &nbsp;·&nbsp; Same-day consultations available
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisitUs;