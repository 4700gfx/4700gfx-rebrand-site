import React from 'react';

const WhatWeOffer = () => {
  const services = [
    // Row 1
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
    // Row 2
    [
      { text: 'React Development', icon: '⚛️' },
      { text: 'SEO Optimization', icon: '🔍' },
      { text: 'Landing Pages', icon: '🚀' },
      { text: 'Responsive Design', icon: '📱' },
      { text: 'Custom Development', icon: '💻' },
      { text: 'Figma Design', icon: '🎭' },
      { text: 'Adobe Suite', icon: '🎬' },
    ],
    // Row 3
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
    // Row 4
    [
      { text: 'Performance Optimization', icon: '⚡' },
      { text: 'API Integration', icon: '🔌' },
      { text: 'CMS Development', icon: '📋' },
      { text: 'Mobile Design', icon: '📲' },
      { text: 'Animation', icon: '🎞️' },
      { text: 'Illustration', icon: '🖼️' },
      { text: 'Icon Design', icon: '🎪' },
    ],
    // Row 5
    [
      { text: 'Marketing Sites', icon: '📢' },
      { text: 'Product Design', icon: '📦' },
      { text: 'Design Systems', icon: '🎛️' },
      { text: 'Component Libraries', icon: '🧩' },
      { text: 'A/B Testing', icon: '🧪' },
      { text: 'Analytics Setup', icon: '📊' },
      { text: 'Conversion Optimization', icon: '💰' },
    ],
    // Row 6
    [
      { text: 'Maintenance & Support', icon: '🛠️' },
      { text: 'Hosting Solutions', icon: '☁️' },
      { text: 'Domain Management', icon: '🌐' },
      { text: 'SSL Certificates', icon: '🔒' },
      { text: 'Email Setup', icon: '📧' },
      { text: 'Security', icon: '🛡️' },
      { text: 'Backup Solutions', icon: '💾' },
    ],
    // Row 7
    [
      { text: 'Payment Integration', icon: '💳' },
      { text: 'Newsletter Design', icon: '📬' },
      { text: 'Content Strategy', icon: '📝' },
      { text: 'Copywriting', icon: '✍️' },
      { text: 'Print Design', icon: '🖨️' },
      { text: 'Packaging Design', icon: '📦' },
      { text: 'Business Cards', icon: '💼' },
    ],
    // Row 8
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
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }

        .tag-row:hover .animate-scroll-left,
        .tag-row:hover .animate-scroll-right {
          animation-play-state: paused;
        }

        .service-tag {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.1) 0%, rgba(45, 52, 54, 0.2) 100%);
          border: 1px solid rgba(0, 186, 242, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
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
      `}</style>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gfx-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gfx-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 px-8 animate-float-up">
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
        <div className="space-y-6">
          {services.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className={`tag-row flex overflow-hidden animate-float-up delay-${(rowIndex + 1) * 100}`}
              style={{ opacity: 0 }}
            >
              <div className={`flex gap-4 animate-scroll-left`}>
                {/* First set of tags */}
                {row.map((service, index) => (
                  <div
                    key={`${rowIndex}-${index}-1`}
                    className="service-tag px-5 py-3 rounded-full whitespace-nowrap cursor-pointer flex-shrink-0"
                  >
                    <span className="inter-font text-gfx-white font-semibold text-sm lg:text-base flex items-center gap-2">
                      <span className="text-lg">{service.icon}</span>
                      {service.text}
                    </span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {row.map((service, index) => (
                  <div
                    key={`${rowIndex}-${index}-2`}
                    className="service-tag px-5 py-3 rounded-full whitespace-nowrap cursor-pointer flex-shrink-0"
                  >
                    <span className="inter-font text-gfx-white font-semibold text-sm lg:text-base flex items-center gap-2">
                      <span className="text-lg">{service.icon}</span>
                      {service.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 px-8 animate-float-up delay-700" style={{ opacity: 0 }}>
          <p className="inter-font text-gfx-white/80 text-xl lg:text-2xl font-semibold mb-3 max-w-3xl mx-auto">
            And that's just the beginning.
          </p>
          <p className="inter-font text-gfx-white/70 text-base lg:text-lg mb-8 max-w-3xl mx-auto">
            Every project is unique, and we tailor our services to fit your specific needs. Whether you need one service or a complete digital transformation, we're here to bring your vision to life with creativity, strategy, and technical excellence.
          </p>
          <button className="relative overflow-hidden bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-gfx-white inter-font font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-gfx-teal/50 group border border-gfx-teal/30">
            <span className="relative z-10 flex items-center gap-2.5 text-base">
              Let's Build Something Amazing
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;