import React, { useEffect, useRef } from 'react';

const WhatWeOffer = () => {
  const services = [
    // Row 1 - Left scroll
    [
      { text: 'Web Design', icon: '🎨' },
      { text: 'Branding', icon: '✨' },
      { text: 'UI/UX Design', icon: '🖌️' },
      { text: 'Logo Design', icon: '🎯' },
      { text: 'E-Commerce', icon: '🛒' },
      { text: 'Shopify', icon: '🛍️' },
      { text: 'WordPress', icon: '📝' },
      { text: 'Webflow', icon: '🌊' },
    ],
    // Row 2 - Right scroll
    [
      { text: 'React Development', icon: '⚛️' },
      { text: 'SEO Optimization', icon: '🔍' },
      { text: 'Landing Pages', icon: '🚀' },
      { text: 'Responsive Design', icon: '📱' },
      { text: 'Custom Development', icon: '💻' },
      { text: 'Figma Design', icon: '🎭' },
      { text: 'Adobe Suite', icon: '🎬' },
    ],
    // Row 3 - Left scroll
    [
      { text: 'Brand Strategy', icon: '💡' },
      { text: 'Social Media Graphics', icon: '📸' },
      { text: 'Typography', icon: '🔤' },
      { text: 'Color Theory', icon: '🎨' },
      { text: 'Wireframing', icon: '📐' },
      { text: 'Prototyping', icon: '🔧' },
      { text: 'User Testing', icon: '👥' },
      { text: 'User Research', icon: '🔬' },
    ],
    // Row 4 - Right scroll
    [
      { text: 'Performance Optimization', icon: '⚡' },
      { text: 'API Integration', icon: '🔌' },
      { text: 'CMS Development', icon: '📋' },
      { text: 'Mobile Design', icon: '📲' },
      { text: 'Animation', icon: '🎞️' },
      { text: 'Illustration', icon: '🖼️' },
      { text: 'Icon Design', icon: '🎪' },
    ],
    // Row 5 - Left scroll
    [
      { text: 'Marketing Sites', icon: '📢' },
      { text: 'Product Design', icon: '📦' },
      { text: 'Design Systems', icon: '🎛️' },
      { text: 'Component Libraries', icon: '🧩' },
      { text: 'A/B Testing', icon: '🧪' },
      { text: 'Analytics Setup', icon: '📊' },
      { text: 'Conversion Optimization', icon: '💰' },
    ],
    // Row 6 - Right scroll
    [
      { text: 'Maintenance & Support', icon: '🛠️' },
      { text: 'Hosting Solutions', icon: '☁️' },
      { text: 'Domain Management', icon: '🌐' },
      { text: 'SSL Certificates', icon: '🔒' },
      { text: 'Email Setup', icon: '📧' },
      { text: 'Security', icon: '🛡️' },
      { text: 'Backup Solutions', icon: '💾' },
    ],
    // Row 7 - Left scroll
    [
      { text: 'Payment Integration', icon: '💳' },
      { text: 'Newsletter Design', icon: '📬' },
      { text: 'Content Strategy', icon: '📝' },
      { text: 'Copywriting', icon: '✍️' },
      { text: 'Print Design', icon: '🖨️' },
      { text: 'Packaging Design', icon: '📦' },
      { text: 'Business Cards', icon: '💼' },
    ],
    // Row 8 - Right scroll
    [
      { text: 'Video Editing', icon: '🎥' },
      { text: 'Motion Graphics', icon: '🎬' },
      { text: 'Audio Production', icon: '🎵' },
      { text: 'Podcast Design', icon: '🎙️' },
      { text: 'Presentation Design', icon: '📊' },
      { text: 'Infographics', icon: '📈' },
      { text: 'Data Visualization', icon: '📉' },
    ],
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .rajdhani-font {
          font-family: 'Rajdhani', sans-serif;
        }
        
        .inter-font {
          font-family: 'Inter', sans-serif;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          will-change: transform;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
          will-change: transform;
        }

        .tag-row:hover .animate-scroll-left,
        .tag-row:hover .animate-scroll-right {
          animation-play-state: paused;
        }

        .service-tag {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.1) 0%, rgba(45, 52, 54, 0.2) 100%);
          border: 1px solid rgba(0, 186, 242, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-tag:hover {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.2) 0%, rgba(45, 52, 54, 0.3) 100%);
          border-color: rgba(0, 186, 242, 0.5);
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 186, 242, 0.3);
        }

        @keyframes float-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-up {
          animation: float-up 0.8s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }

        /* Performance optimizations */
        .tag-row {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .service-tag {
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* Stats badge styling */
        .stats-badge {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.2), rgba(0, 153, 204, 0.3));
          border: 1px solid rgba(0, 186, 242, 0.4);
          backdrop-filter: blur(5px);
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gfx-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gfx-blue/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 px-8 animate-float-up">
          <div className="inline-flex items-center gap-3 mb-6 stats-badge rounded-full px-6 py-2">
            <span className="text-2xl">⚡</span>
            <span className="rajdhani-font text-gfx-teal font-bold text-sm uppercase tracking-wider">
              60+ Services & Counting
            </span>
          </div>

          <h2 className="inter-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Everything You Need to{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal">
                Grow Online
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal rounded-full"></div>
            </span>
          </h2>
          <p className="inter-font text-gfx-white/80 text-lg lg:text-xl max-w-4xl mx-auto mb-4">
            From stunning websites to complete brand identities, we offer comprehensive digital services that transform your vision into reality. Whether you're launching a startup, scaling your business, or refreshing your brand, we've got the expertise to make it happen.
          </p>
          <p className="inter-font text-gfx-white/60 text-base lg:text-lg max-w-3xl mx-auto">
            Explore our full range of services below — each crafted with precision, passion, and a commitment to excellence.
          </p>
        </div>

        {/* Animated Tag Rows */}
        <div className="space-y-6 mb-16">
          {services.map((row, rowIndex) => {
            const direction = rowIndex % 2 === 0 ? 'left' : 'right';
            
            return (
              <div 
                key={rowIndex} 
                className={`tag-row flex overflow-hidden animate-float-up delay-${(rowIndex + 1) * 100}`}
                style={{ opacity: 0 }}
              >
                <div 
                  className={`flex gap-4 ${
                    direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
                  }`}
                  style={{
                    minWidth: '100%',
                  }}
                >
                  {/* Triple the items for truly seamless infinite scroll */}
                  {[...row, ...row, ...row].map((service, index) => (
                    <div
                      key={`${rowIndex}-${index}`}
                      className="service-tag px-6 py-3 rounded-full whitespace-nowrap cursor-pointer flex-shrink-0"
                    >
                      <span className="inter-font text-gfx-white font-semibold text-sm lg:text-base flex items-center gap-2">
                        <span className="text-lg">{service.icon}</span>
                        {service.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Count Grid */}
        <div className="max-w-5xl mx-auto px-8 mb-16 animate-float-up delay-800" style={{ opacity: 0 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="info-card rounded-2xl p-6 text-center" style={{
              background: 'linear-gradient(135deg, rgba(0, 186, 242, 0.08) 0%, rgba(45, 52, 54, 0.15) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 186, 242, 0.2)'
            }}>
              <div className="rajdhani-font text-gfx-teal text-4xl lg:text-5xl font-bold mb-2">60+</div>
              <div className="inter-font text-gfx-white/80 text-sm">Services Offered</div>
            </div>
            <div className="info-card rounded-2xl p-6 text-center" style={{
              background: 'linear-gradient(135deg, rgba(0, 186, 242, 0.08) 0%, rgba(45, 52, 54, 0.15) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 186, 242, 0.2)'
            }}>
              <div className="rajdhani-font text-gfx-teal text-4xl lg:text-5xl font-bold mb-2">8</div>
              <div className="inter-font text-gfx-white/80 text-sm">Core Categories</div>
            </div>
            <div className="info-card rounded-2xl p-6 text-center" style={{
              background: 'linear-gradient(135deg, rgba(0, 186, 242, 0.08) 0%, rgba(45, 52, 54, 0.15) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 186, 242, 0.2)'
            }}>
              <div className="rajdhani-font text-gfx-teal text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <div className="inter-font text-gfx-white/80 text-sm">Custom Solutions</div>
            </div>
            <div className="info-card rounded-2xl p-6 text-center" style={{
              background: 'linear-gradient(135deg, rgba(0, 186, 242, 0.08) 0%, rgba(45, 52, 54, 0.15) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 186, 242, 0.2)'
            }}>
              <div className="rajdhani-font text-gfx-teal text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="inter-font text-gfx-white/80 text-sm">Support Available</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center px-8 animate-float-up delay-800" style={{ opacity: 0 }}>
          <div className="max-w-4xl mx-auto mb-8 p-8 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(0, 186, 242, 0.1) 0%, rgba(45, 52, 54, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 186, 242, 0.3)'
          }}>
            <p className="inter-font text-gfx-white/80 text-xl lg:text-2xl font-semibold mb-3">
              And that's just the beginning.
            </p>
            <p className="inter-font text-gfx-white/70 text-base lg:text-lg mb-8">
              Every project is unique, and we tailor our services to fit your specific needs. Whether you need one service or a complete digital transformation, we're here to bring your vision to life with creativity, strategy, and technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="relative overflow-hidden bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-white inter-font font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-gfx-teal/50 group border border-gfx-teal/30">
                <span className="relative z-10 flex items-center gap-3 text-base">
                  View All Services
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button className="inter-font text-gfx-teal hover:text-gfx-blue font-bold px-10 py-4 rounded-xl border-2 border-gfx-teal/40 hover:border-gfx-teal transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <span className="text-2xl">💬</span>
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