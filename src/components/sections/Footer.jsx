import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Send,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerLinks = {
    services: [
      { name: 'Web Design', href: '#' },
      { name: 'Brand Identity', href: '#' },
      { name: 'Motion Graphics', href: '#' },
      { name: 'E-commerce Solutions', href: '#' },
      { name: 'Digital Marketing', href: '#' },
      { name: 'SEO Services', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Process', href: '#' },
      { name: 'Portfolio', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Testimonials', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Brand Guidelines', href: '#' },
      { name: 'Free Templates', href: '#' },
      { name: 'Design Tools', href: '#' },
      { name: 'Support Center', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0A0A08] to-[#16160F]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .rajdhani-font {
          font-family: 'Rajdhani', sans-serif;
        }
        
        .inter-font {
          font-family: 'Inter', sans-serif;
        }

        .footer-link {
          transition: all 0.3s;
          position: relative;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00BAF2, #0099CC);
          transition: width 0.3s;
        }

        .footer-link:hover {
          color: #00BAF2;
          transform: translateX(4px);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .social-link {
          background: rgba(0, 186, 242, 0.1);
          border: 1px solid rgba(0, 186, 242, 0.2);
          transition: all 0.3s;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #00BAF2, #0099CC);
          border-color: #00BAF2;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 186, 242, 0.4);
        }

        .newsletter-input {
          background: rgba(0, 186, 242, 0.05);
          border: 1px solid rgba(0, 186, 242, 0.2);
          transition: all 0.3s;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: rgba(0, 186, 242, 0.6);
          background: rgba(0, 186, 242, 0.1);
          box-shadow: 0 0 0 3px rgba(0, 186, 242, 0.1);
        }

        .scroll-top-btn {
          background: linear-gradient(135deg, #00BAF2, #0099CC);
          transition: all 0.3s;
        }

        .scroll-top-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 186, 242, 0.5);
        }

        @keyframes pulse-heart {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .heart-icon:hover {
          animation: pulse-heart 0.6s ease-in-out;
          color: #00BAF2;
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gfx-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gfx-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="w-[85%] max-w-7xl mx-auto pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <h2 className="rajdhani-font text-gfx-white text-5xl font-bold mb-2">
                  4700 GFX
                </h2>
                <p className="rajdhani-font text-gfx-white/60 text-sm tracking-widest uppercase">
                  Studios
                </p>
              </div>
              <p className="inter-font text-gfx-white/70 text-sm leading-relaxed mb-6">
                Transforming businesses through cutting-edge design and development. 
                We create digital experiences that captivate audiences and drive results.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:hello@4700gfx.com" className="flex items-center gap-3 inter-font text-gfx-white/70 text-sm hover:text-gfx-teal transition-colors">
                  <Mail className="w-4 h-4 text-gfx-teal" />
                  hello@4700gfx.com
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-3 inter-font text-gfx-white/70 text-sm hover:text-gfx-teal transition-colors">
                  <Phone className="w-4 h-4 text-gfx-teal" />
                  (555) 123-4567
                </a>
                <div className="flex items-center gap-3 inter-font text-gfx-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-gfx-teal" />
                  Hollywood, Florida, US
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="social-link w-10 h-10 rounded-lg flex items-center justify-center"
                  >
                    <social.icon className="w-5 h-5 text-gfx-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-2">
              <h3 className="rajdhani-font text-gfx-white text-xl font-bold mb-6 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-link inter-font text-gfx-white/70 text-sm inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2">
              <h3 className="rajdhani-font text-gfx-white text-xl font-bold mb-6 uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-link inter-font text-gfx-white/70 text-sm inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="lg:col-span-2">
              <h3 className="rajdhani-font text-gfx-white text-xl font-bold mb-6 uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-link inter-font text-gfx-white/70 text-sm inline-block">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-2">
              <h3 className="rajdhani-font text-gfx-white text-xl font-bold mb-6 uppercase tracking-wider">
                Newsletter
              </h3>
              <p className="inter-font text-gfx-white/70 text-sm mb-4">
                Subscribe for design tips, industry insights, and exclusive offers.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="newsletter-input w-full px-4 py-3 rounded-lg text-gfx-white inter-font text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={subscribed}
                  className={`w-full py-3 rounded-lg inter-font font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                    subscribed 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-white hover:shadow-lg'
                  }`}
                >
                  {subscribed ? (
                    <>
                      ✓ Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
              <p className="inter-font text-gfx-white/50 text-xs mt-3">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gfx-teal/30 to-transparent mb-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="inter-font text-gfx-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} 4700 GFX Studios. All rights reserved.
              <span className="hidden md:inline mx-2">•</span>
              <span className="block md:inline mt-1 md:mt-0">
                Made with <Heart className="inline w-4 h-4 heart-icon text-red-500" /> in Hollywood, FL
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a 
                    href={link.href}
                    className="inter-font text-gfx-white/60 text-sm hover:text-gfx-teal transition-colors"
                  >
                    {link.name}
                  </a>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-gfx-white/30">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="scroll-top-btn fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>

        {/* Extra Bottom Bar */}
        <div className="border-t border-gfx-white/10 py-6">
          <div className="w-[85%] max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="inter-font text-gfx-white/50 text-xs text-center md:text-left">
                Certified Minority Business Enterprise (MBE) • Woman-Owned Business • LGBTQ+ Friendly
              </p>
              <div className="flex items-center gap-6">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='24' viewBox='0 0 40 24'%3E%3Crect fill='%234A6572' width='40' height='24' rx='4'/%3E%3Ctext x='20' y='16' font-family='Arial' font-size='10' fill='white' text-anchor='middle'%3ESSL%3C/text%3E%3C/svg%3E"
                  alt="SSL Secured"
                  className="h-6 opacity-60 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='24' viewBox='0 0 40 24'%3E%3Crect fill='%234A6572' width='40' height='24' rx='4'/%3E%3Ctext x='20' y='16' font-family='Arial' font-size='8' fill='white' text-anchor='middle'%3EGDPR%3C/text%3E%3C/svg%3E"
                  alt="GDPR Compliant"
                  className="h-6 opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;