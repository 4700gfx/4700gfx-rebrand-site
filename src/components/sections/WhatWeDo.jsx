import React, { useState } from 'react';

const WhatWeDo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    { 
      label: '01', 
      heading: 'Web Design & Development',
      description: 'Custom websites built for growth. From landing pages to full e-commerce platforms, we create digital experiences that convert visitors into customers.',
      icon: '🎨'
    },
    { 
      label: '02', 
      heading: 'Brand Identity & Strategy',
      description: 'Stand out in a crowded market. We craft compelling brand identities that resonate with your audience and drive recognition.',
      icon: '🚀'
    },
    { 
      label: '03', 
      heading: 'UI/UX Design',
      description: 'Beautiful interfaces that work. Every design decision is intentional, backed by user research and proven psychology.',
      icon: '💎'
    },
    { 
      label: '04', 
      heading: 'E-Commerce Solutions',
      description: 'Turn your store into a revenue machine. Shopify, WooCommerce, or custom solutions optimized for maximum conversions.',
      icon: '🛍️'
    },
    { 
      label: '05', 
      heading: 'Responsive Development',
      description: 'Flawless on every device. Your site will look stunning and perform perfectly on desktop, tablet, and mobile.',
      icon: '📱'
    },
    { 
      label: '06', 
      heading: 'SEO Optimization',
      description: 'Get found by your ideal customers. We build sites with SEO best practices baked in from day one.',
      icon: '🔍'
    },
    { 
      label: '07', 
      heading: 'Maintenance & Support',
      description: 'Never worry about updates or bugs. We provide ongoing support to keep your site running smoothly.',
      icon: '🛠️'
    },
    { 
      label: '08', 
      heading: 'Performance Optimization',
      description: 'Lightning-fast load times. Every millisecond counts—we optimize your site for speed and user experience.',
      icon: '⚡'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .service-card {
          position: relative;
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.08) 0%, rgba(45, 52, 54, 0.15) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 186, 242, 0.15);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.4), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .service-card:hover {
          transform: translateY(-12px);
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.15) 0%, rgba(45, 52, 54, 0.25) 100%);
          border-color: rgba(0, 186, 242, 0.4);
          box-shadow: 0 25px 50px rgba(0, 186, 242, 0.25);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .carousel-button {
          background: rgba(0, 186, 242, 0.1);
          border: 1px solid rgba(0, 186, 242, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .carousel-button:hover {
          background: rgba(0, 186, 242, 0.2);
          border-color: rgba(0, 186, 242, 0.6);
          transform: scale(1.1);
        }

        .carousel-button:active {
          transform: scale(0.95);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .dot:hover {
          background: rgba(0, 186, 242, 0.5);
          transform: scale(1.2);
        }

        .dot.active {
          background: #00BAF2;
          width: 32px;
          border-radius: 5px;
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gfx-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gfx-blue/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-[85%] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="inter-font text-gfx-white text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight mb-4 w-6/10 mx-auto">
            Full Agency Services at{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal">
                Boutique Prices
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal rounded-full"></div>
            </span>
          </h2>
          <p className="inter-font text-gfx-white/70 text-base lg:text-lg max-w-2xl mx-auto">
            Premium web solutions tailored for entrepreneurs ready to scale for every entrepreneur on their business journey.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Cards Container */}
          <div className="overflow-hidden px-12">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-5"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0"
                >
                  <div className="service-card rounded-2xl p-6 h-[320px] flex flex-col justify-between">
                    {/* Icon and Label */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="text-3xl">
                        {service.icon}
                      </div>
                      <span className="rajdhani-font text-gfx-teal/40 text-4xl font-bold">
                        {service.label}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow mb-4">
                      <h3 className="rajdhani-font text-gfx-white text-xl font-bold mb-3 leading-snug">
                        {service.heading}
                      </h3>
                      <p className="inter-font text-gfx-white/75 text-sm leading-relaxed line-clamp-4">
                        {service.description}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <div>
                      <button className="group inter-font text-gfx-teal font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300">
                        Learn More
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="carousel-button absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-gfx-white z-10"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="carousel-button absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-gfx-white z-10"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {services.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;