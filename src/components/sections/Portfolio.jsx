import React, { useState, useEffect } from 'react';
import labelScreenshot from '../images/4700enterprises.png';
import labelScreenshot2 from '../images/4700enterprises-team.png';
import labelScreenshot3 from '../images/4700enterprises-about.png';
import nailCanvas1 from '../images/the-nail-canvas-hero.png';
import nailCanvas2 from '../images/the-nail-canvas-testimony.png';
import nailCanvas3 from '../images/the-nail-canvas-benefits.png';
import mohScreenshot1 from '../images/moh-testimony.png';
import mohScreenshot2 from '../images/moh-services.png';
import mohScreenshot3 from '../images/moh-faq-footer.png';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'
  const [selectedImage, setSelectedImage] = useState(null);
  const [autoplay, setAutoplay] = useState(true);

  const projects = [
    {
      id: 1,
      name: '4700 Enterprises',
      category: 'Corporate',
      tagline: 'Multi-Service Enterprise Platform',
      description: 'A comprehensive corporate website showcasing multiple service divisions with team profiles and detailed service offerings. Built with modern React architecture and custom animations to create an engaging user experience.',
      highlights: [
        'Custom-coded multi-page architecture with seamless navigation',
        'Team member profiles with dynamic filtering capabilities',
        'Service showcase with interactive hover effects',
        'Fully responsive design optimized for all devices',
        'Integrated contact forms with real-time validation'
      ],
      tags: ['Branding', 'Multi-Page', 'Corporate', 'React'],
      images: [labelScreenshot, labelScreenshot2, labelScreenshot3],
      stats: {
        pages: '8',
        timeline: '6 weeks',
        package: 'GROWTH'
      },
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'The Nail Canvas',
      category: 'Beauty & Wellness',
      tagline: 'Premium Nail Salon Experience',
      description: 'Elegant salon website featuring services, testimonials, and benefits with booking integration and gallery showcase. Designed to reflect the luxury and artistry of premium nail services with stunning visuals and smooth interactions.',
      highlights: [
        'Stunning hero section with professional photography',
        'Service catalog with detailed pricing and descriptions',
        'Client testimonial carousel with star ratings',
        'Benefits section highlighting unique value propositions',
        'Mobile-first design for on-the-go bookings'
      ],
      tags: ['E-commerce', 'Booking', 'Lifestyle', 'Gallery'],
      images: [nailCanvas1, nailCanvas2, nailCanvas3],
      stats: {
        pages: '5',
        timeline: '4 weeks',
        package: 'ELEVATE'
      },
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 3,
      name: 'MOH Services',
      category: 'Professional Services',
      tagline: 'Healthcare Consulting Platform',
      description: 'Professional service website with testimonials, detailed service pages, comprehensive FAQ section, and contact integration. Designed to build trust and credibility in the healthcare consulting space with clean, professional aesthetics.',
      highlights: [
        'Trust-building testimonials section with video integration',
        'Comprehensive service pages with detailed explanations',
        'Interactive FAQ accordion for quick information access',
        'Professional footer with multiple contact methods',
        'HIPAA-compliant contact forms and data handling'
      ],
      tags: ['Healthcare', 'Professional', 'Multi-Page', 'Consulting'],
      images: [mohScreenshot1, mohScreenshot2, mohScreenshot3],
      stats: {
        pages: '6',
        timeline: '5 weeks',
        package: 'ELEVATE'
      },
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 4,
      name: 'Elite Fitness Studio',
      category: 'Health & Fitness',
      tagline: 'Premium Fitness & Wellness Hub',
      description: 'Dynamic fitness studio website featuring class schedules, trainer profiles, membership plans, and online booking system. Built to inspire and motivate with energetic design elements and seamless user experience for fitness enthusiasts.',
      highlights: [
        'Interactive class schedule with real-time availability',
        'Trainer profile showcase with specializations and credentials',
        'Flexible membership tier comparison with pricing calculator',
        'Integrated booking system with calendar synchronization',
        'Progress tracking dashboard for member achievements'
      ],
      tags: ['Fitness', 'Booking', 'Membership', 'Wellness'],
      images: [labelScreenshot, nailCanvas1, mohScreenshot1],
      stats: {
        pages: '7',
        timeline: '5 weeks',
        package: 'GROWTH'
      },
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (autoplay && viewMode === 'carousel') {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, viewMode, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setAutoplay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoplay(false);
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-right {
          animation: slideInFromRight 0.7s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideInFromLeft 0.7s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        .portfolio-card {
          position: relative;
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.05) 0%, rgba(45, 52, 54, 0.1) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 186, 242, 0.15);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .portfolio-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.4), transparent, rgba(0, 186, 242, 0.2));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.6s;
        }

        .portfolio-card:hover::before {
          opacity: 1;
        }

        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
        }

        .image-container::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.4) 100%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .portfolio-card:hover .image-container::after {
          opacity: 1;
        }

        .screenshot-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .portfolio-card:hover .screenshot-thumbnail {
          transform: scale(1.05);
        }

        .carousel-container {
          position: relative;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-slide {
          min-width: 100%;
          flex-shrink: 0;
        }

        .nav-button {
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .nav-button:hover {
          transform: scale(1.1);
          background: rgba(0, 186, 242, 0.2);
        }

        .nav-button:active {
          transform: scale(0.95);
        }

        .dot-indicator {
          transition: all 0.3s ease;
        }

        .dot-indicator.active {
          background: linear-gradient(135deg, #00BAF2, #0099CC);
          transform: scale(1.3);
        }

        .view-toggle {
          transition: all 0.3s ease;
        }

        .view-toggle.active {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.2), rgba(45, 52, 54, 0.3));
          border-color: rgba(0, 186, 242, 0.6);
        }

        .thumbnail-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .thumbnail-item {
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .thumbnail-item:hover {
          border-color: rgba(0, 186, 242, 0.5);
          transform: scale(1.05);
        }

        .thumbnail-item.active {
          border-color: #00BAF2;
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(0, 186, 242, 0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gfx-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gfx-blue/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-[85%] max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="inter-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Featured{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal">
                Projects
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal rounded-full"></div>
            </span>
          </h2>
          <p className="inter-font text-gfx-white/80 text-lg lg:text-xl max-w-3xl mx-auto mb-8">
            Transforming visions into digital excellence. Explore our latest work.
          </p>

          {/* View Mode Toggle */}
          <div className="inline-flex gap-2 p-1.5 rounded-xl bg-gfx-white/5 border border-gfx-teal/20">
            <button
              onClick={() => setViewMode('carousel')}
              className={`view-toggle px-6 py-2.5 rounded-lg inter-font font-semibold text-sm border ${
                viewMode === 'carousel' ? 'active text-gfx-white' : 'text-gfx-white/60 border-transparent'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                </svg>
                Carousel
              </span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`view-toggle px-6 py-2.5 rounded-lg inter-font font-semibold text-sm border ${
                viewMode === 'grid' ? 'active text-gfx-white' : 'text-gfx-white/60 border-transparent'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                Grid
              </span>
            </button>
          </div>
        </div>

        {/* Carousel View */}
        {viewMode === 'carousel' && (
          <div className="animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            <div className="carousel-container mb-6 relative">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={project.id} className="carousel-slide px-2">
                    <div className="portfolio-card rounded-xl overflow-hidden max-h-[480px] max-w-3xl mx-auto">
                      <div className="flex flex-col">
                        {/* Image Section - Compact */}
                        <div className="relative group">
                          <div className="image-container h-[200px]">
                            <img
                              src={project.images[selectedImage || 0]}
                              alt={`${project.name} screenshot`}
                              className="screenshot-thumbnail"
                            />
                            {/* Category Badge */}
                            <div className="absolute top-2 left-2">
                              <span className="inline-block bg-gradient-to-r from-gfx-teal to-gfx-blue text-white inter-font font-bold px-2.5 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg">
                                {project.category}
                              </span>
                            </div>
                          </div>
                          
                          {/* Thumbnail Navigation - Smaller */}
                          <div className="absolute bottom-1.5 left-1.5 right-1.5 thumbnail-grid opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {project.images.map((img, idx) => (
                              <div
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={`thumbnail-item image-container aspect-video rounded-sm overflow-hidden ${
                                  (selectedImage || 0) === idx ? 'active' : ''
                                }`}
                              >
                                <img
                                  src={img}
                                  alt={`Thumbnail ${idx + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Content Section - Scrollable */}
                        <div className="p-4 overflow-y-auto max-h-[280px]">
                          <div className="space-y-2.5">
                            {/* Title */}
                            <div>
                              <h3 className="rajdhani-font text-gfx-white text-xl lg:text-2xl font-bold mb-0.5">
                                {project.name}
                              </h3>
                              <p className="inter-font text-gfx-teal text-xs font-semibold mb-1.5">
                                {project.tagline}
                              </p>
                            </div>

                            {/* Description */}
                            <p className="inter-font text-gfx-white/70 text-xs leading-relaxed">
                              {project.description}
                            </p>

                            {/* Highlights */}
                            <div>
                              <h4 className="inter-font text-gfx-white text-xs font-bold uppercase tracking-wider mb-1.5">
                                Key Features
                              </h4>
                              <ul className="space-y-1">
                                {project.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start gap-1.5">
                                    <svg className="w-3 h-3 text-gfx-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="inter-font text-gfx-white/75 text-xs leading-relaxed">
                                      {highlight}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1">
                              {project.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="inter-font text-gfx-white/80 text-xs font-medium px-2 py-0.5 rounded bg-gfx-white/5 border border-gfx-teal/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Stats Grid - Compact */}
                            <div className="grid grid-cols-3 gap-1.5 pt-1.5">
                              <div className="text-center p-1.5 rounded-lg bg-gfx-teal/10 border border-gfx-teal/20">
                                <div className="rajdhani-font text-gfx-teal text-base font-bold">
                                  {project.stats.pages}
                                </div>
                                <div className="inter-font text-gfx-white/60 text-xs uppercase">
                                  Pages
                                </div>
                              </div>
                              <div className="text-center p-1.5 rounded-lg bg-gfx-teal/10 border border-gfx-teal/20">
                                <div className="rajdhani-font text-gfx-teal text-xs font-bold">
                                  {project.stats.timeline}
                                </div>
                                <div className="inter-font text-gfx-white/60 text-xs uppercase">
                                  Time
                                </div>
                              </div>
                              <div className="text-center p-1.5 rounded-lg bg-gfx-teal/10 border border-gfx-teal/20">
                                <div className="rajdhani-font text-gfx-teal text-xs font-bold">
                                  {project.stats.package}
                                </div>
                                <div className="inter-font text-gfx-white/60 text-xs uppercase">
                                  Tier
                                </div>
                              </div>
                            </div>

                            {/* CTA Button */}
                            <button className="w-full group relative overflow-hidden bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-gfx-white inter-font font-bold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-gfx-teal/50 border border-gfx-teal/30">
                              <span className="relative z-10 flex items-center justify-center gap-1.5 text-xs">
                                View Project
                                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                              </span>
                              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="nav-button absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gfx-white/10 border border-gfx-teal/30 flex items-center justify-center text-gfx-white hover:bg-gfx-teal/20 z-10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="nav-button absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gfx-white/10 border border-gfx-teal/30 flex items-center justify-center text-gfx-white hover:bg-gfx-teal/20 z-10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mb-12">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`dot-indicator w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? 'active w-8'
                      : 'bg-gfx-white/20 hover:bg-gfx-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="portfolio-card rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500"
              >
                {/* Image */}
                <div className="image-container aspect-video">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="screenshot-thumbnail"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <button className="w-full bg-gradient-to-r from-gfx-teal to-gfx-blue text-white inter-font font-bold py-3 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Project
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="inline-block bg-gradient-to-r from-gfx-teal/20 to-gfx-blue/20 text-gfx-teal border border-gfx-teal/40 inter-font font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-3">
                      {project.category}
                    </span>
                    <h3 className="rajdhani-font text-gfx-white text-2xl font-bold mb-1">
                      {project.name}
                    </h3>
                    <p className="inter-font text-gfx-teal text-sm font-semibold mb-2">
                      {project.tagline}
                    </p>
                    <p className="inter-font text-gfx-white/70 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="inter-font text-gfx-white/80 text-xs px-2 py-1 rounded-md bg-gfx-white/5 border border-gfx-teal/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center pt-4 border-t border-gfx-teal/20">
                    <div className="text-center">
                      <div className="rajdhani-font text-gfx-teal text-xl font-bold">
                        {project.stats.pages}
                      </div>
                      <div className="inter-font text-gfx-white/60 text-xs">Pages</div>
                    </div>
                    <div className="text-center">
                      <div className="rajdhani-font text-gfx-teal text-sm font-bold">
                        {project.stats.timeline}
                      </div>
                      <div className="inter-font text-gfx-white/60 text-xs">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="rajdhani-font text-gfx-teal text-sm font-bold">
                        {project.stats.package}
                      </div>
                      <div className="inter-font text-gfx-white/60 text-xs">Package</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
          {[
            { number: '50+', label: 'Projects Delivered', icon: '🚀' },
            { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
            { number: '24-48h', label: 'Support Response', icon: '⚡' },
            { number: '100%', label: 'Custom Code', icon: '💻' }
          ].map((stat, idx) => (
            <div key={idx} className="portfolio-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shimmer">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="rajdhani-font text-gfx-teal text-3xl lg:text-4xl font-bold mb-1">
                {stat.number}
              </div>
              <div className="inter-font text-gfx-white/70 text-xs lg:text-sm font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center animate-fade-in-up delay-400" style={{ opacity: 0 }}>
          <div className="portfolio-card rounded-3xl p-10 lg:p-16">
            <h3 className="rajdhani-font text-gfx-white text-3xl lg:text-5xl font-bold mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="inter-font text-gfx-white/80 text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Ready to transform your digital presence? Schedule a free consultation and let's discuss your vision.
            </p>
            <button className="relative overflow-hidden bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-gfx-white inter-font font-bold px-12 py-5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-gfx-teal/50 group border border-gfx-teal/30">
              <span className="relative z-10 flex items-center gap-3 text-lg">
                Start Your Project Today
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;