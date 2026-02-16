import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const WhatWeDo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    { 
      label: '01', 
      heading: 'Web Design & Development',
      description: 'Custom websites built for growth. From landing pages to full e-commerce platforms, we create digital experiences that convert visitors into customers.',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      label: '02', 
      heading: 'Brand Identity & Strategy',
      description: 'Stand out in a crowded market. We craft compelling brand identities that resonate with your audience and drive recognition.',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      label: '03', 
      heading: 'UI/UX Design',
      description: 'Beautiful interfaces that work. Every design decision is intentional, backed by user research and proven psychology.',
      icon: '💎',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      label: '04', 
      heading: 'E-Commerce Solutions',
      description: 'Turn your store into a revenue machine. Shopify, WooCommerce, or custom solutions optimized for maximum conversions.',
      icon: '🛍️',
      color: 'from-orange-500 to-red-500'
    },
    { 
      label: '05', 
      heading: 'Responsive Development',
      description: 'Flawless on every device. Your site will look stunning and perform perfectly on desktop, tablet, and mobile.',
      icon: '📱',
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      label: '06', 
      heading: 'SEO Optimization',
      description: 'Get found by your ideal customers. We build sites with SEO best practices baked in from day one.',
      icon: '🔍',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      label: '07', 
      heading: 'Maintenance & Support',
      description: 'Never worry about updates or bugs. We provide ongoing support to keep your site running smoothly.',
      icon: '🛠️',
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      label: '08', 
      heading: 'Performance Optimization',
      description: 'Lightning-fast load times. Every millisecond counts—we optimize your site for speed and user experience.',
      icon: '⚡',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      label: '09', 
      heading: 'Content Management Systems',
      description: 'Take control of your content. Custom CMS solutions that make updating your site simple and stress-free.',
      icon: '📝',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const totalSlides = Math.ceil(services.length / 3);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
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

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .service-card {
          position: relative;
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.08) 0%, rgba(45, 52, 54, 0.15) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 186, 242, 0.15);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.5), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .service-card:hover {
          transform: translateY(-8px);
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.15) 0%, rgba(45, 52, 54, 0.25) 100%);
          border-color: rgba(0, 186, 242, 0.5);
          box-shadow: 0 25px 50px rgba(0, 186, 242, 0.3);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover .service-icon {
          animation: float 2s ease-in-out infinite;
        }

        .carousel-button {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.15), rgba(0, 153, 204, 0.2));
          border: 1px solid rgba(0, 186, 242, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .carousel-button:hover {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.3), rgba(0, 153, 204, 0.4));
          border-color: rgba(0, 186, 242, 0.6);
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(0, 186, 242, 0.3);
        }

        .carousel-button:active {
          transform: scale(0.95);
        }

        .carousel-button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .carousel-button:disabled:hover {
          transform: scale(1);
          box-shadow: none;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid transparent;
        }

        .dot:hover {
          background: rgba(0, 186, 242, 0.5);
          transform: scale(1.3);
          border-color: rgba(0, 186, 242, 0.6);
        }

        .dot.active {
          background: linear-gradient(135deg, #00BAF2, #0099CC);
          width: 36px;
          border-radius: 5px;
          box-shadow: 0 4px 12px rgba(0, 186, 242, 0.4);
        }

        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #00BAF2, #0099CC);
          border-radius: 2px;
          animation: progress 5s linear infinite;
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .stats-badge {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.2), rgba(0, 153, 204, 0.3));
          border: 1px solid rgba(0, 186, 242, 0.4);
          backdrop-filter: blur(5px);
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gfx-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gfx-blue/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gfx-teal/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="w-[85%] max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-3 mb-6 stats-badge rounded-full px-6 py-2">
            <span className="text-2xl">⚡</span>
            <span className="rajdhani-font text-gfx-teal font-bold text-sm uppercase tracking-wider">
              9 Core Services
            </span>
          </div>
          
          <h2 className="inter-font text-gfx-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 max-w-4xl mx-auto">
            Full Agency Services at{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal">
                Boutique Prices
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal rounded-full"></div>
            </span>
          </h2>
          <p className="inter-font text-gfx-white/70 text-base lg:text-lg max-w-3xl mx-auto">
            Premium web solutions tailored for every entrepreneur on their business journey—from startup to scale.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          {/* Cards Container */}
          <div className="px-2 md:px-16 py-8">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {/* Create slides of 3 cards each */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 flex gap-6">
                  {services.slice(slideIndex * 3, slideIndex * 3 + 3).map((service, cardIndex) => (
                    <div
                      key={slideIndex * 3 + cardIndex}
                      className="flex-1 min-w-0"
                    >
                      <div className="service-card rounded-2xl p-6 lg:p-8 h-[360px] flex flex-col justify-between group">
                        {/* Icon and Label */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="service-icon text-4xl lg:text-5xl transform transition-transform group-hover:scale-110">
                            {service.icon}
                          </div>
                          <span className="rajdhani-font text-gfx-teal/30 group-hover:text-gfx-teal/50 text-5xl lg:text-6xl font-bold transition-colors">
                            {service.label}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-grow mb-5">
                          <h3 className="rajdhani-font text-gfx-white text-xl lg:text-2xl font-bold mb-3 leading-tight">
                            {service.heading}
                          </h3>
                          <p className="inter-font text-gfx-white/75 text-sm lg:text-base leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Learn More Link */}
                        <div className="relative">
                          {isAutoPlaying && (
                            <div className="progress-bar"></div>
                          )}
                          <button className="group/btn inter-font text-gfx-teal hover:text-gfx-blue font-semibold text-sm flex items-center gap-2 transition-all duration-300 pt-3">
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Fill empty spaces if last slide has fewer than 3 cards */}
                  {services.slice(slideIndex * 3, slideIndex * 3 + 3).length < 3 && 
                    Array.from({ length: 3 - services.slice(slideIndex * 3, slideIndex * 3 + 3).length }).map((_, emptyIndex) => (
                      <div key={`empty-${emptyIndex}`} className="flex-1 min-w-0"></div>
                    ))
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            disabled={currentIndex === 0}
            className="carousel-button absolute left-0 md:left-2 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-gfx-white z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            disabled={currentIndex === totalSlides - 1}
            className="carousel-button absolute right-0 md:right-2 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-gfx-white z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="inter-font text-gfx-white/60 hover:text-gfx-teal text-sm font-semibold flex items-center gap-2 transition-colors"
          >
            {isAutoPlaying ? (
              <>
                <span className="w-2 h-2 bg-gfx-teal rounded-full animate-pulse"></span>
                Auto-playing
              </>
            ) : (
              <>
                <span className="w-2 h-2 bg-gfx-white/30 rounded-full"></span>
                Paused
              </>
            )}
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="inter-font text-gfx-white/70 text-base mb-6">
            Not sure which service you need? Let's talk.
          </p>
          <button className="relative overflow-hidden bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-white inter-font font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-gfx-teal/50 group border border-gfx-teal/30">
            <span className="relative z-10 flex items-center gap-3">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;