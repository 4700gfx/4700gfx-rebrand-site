import React from 'react';
import logo from '../images/logo-white.png';
import reactLogo from '../images/react-trans.png'
import shopifyLogo from '../images/shopify-trans.png'
import figmaLogo from '../images/figma-trans.png'

const Hero = () => {
  const quickStats = [
    { label: "Experience", stat: "3+ Years", icon: "📅" },
    { label: "Completed", stat: "20+ Projects", icon: "🚀" },
    { label: "Rating", stat: "5.0 Stars", icon: "⭐" },
    { label: "Success Rate", stat: "100%", icon: "💯" },
    { label: "Turnaround", stat: "< 24hrs", icon: "⚡" },
    { label: "Quality", stat: "Premium", icon: "💎" },
    { label: "Focused", stat: "Results", icon: "🎯" },
    { label: "Lightning", stat: "Fast", icon: "⚡" }
  ];

  const techLogos = [
    { name: 'React', src: reactLogo },
    { name: 'Shopify', src: shopifyLogo},
    { name: 'Figma', src: figmaLogo }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-20 lg:py-24">
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        
        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 186, 242, 0.3), 0 0 40px rgba(0, 186, 242, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 186, 242, 0.5), 0 0 60px rgba(0, 186, 242, 0.3);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        
        .stat-card {
          position: relative;
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.1) 0%, rgba(45, 52, 54, 0.6) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 186, 242, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.6), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .stat-card:hover {
          transform: translateY(-8px) scale(1.05);
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.2) 0%, rgba(45, 52, 54, 0.7) 100%);
          border-color: rgba(0, 186, 242, 0.6);
          box-shadow: 0 20px 40px rgba(0, 186, 242, 0.4);
        }
        
        .stat-card:hover::before {
          opacity: 1;
        }

        .logo-carousel-container:hover .animate-scroll-left {
          animation-play-state: paused;
        }
      `}</style>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gfx-teal/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gfx-blue/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-[85%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[450px_1fr] gap-16 lg:gap-24 items-start mb-20">
          
          {/* Left Column - Logo with Card Grid */}
          <div className="animate-fade-in-right delay-100">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <div className="animate-float">
                <img src={logo} alt='company-logo' className='w-[500px] h-[500px] object-contain drop-shadow-2xl' />
              </div>
            </div>
          </div>

          {/* Right Column - Content with Card Grid */}
          <div className="space-y-8 lg:space-y-9 w-full">
            
            {/* Main Content */}
            <div className="animate-fade-in-left delay-100">
              <span className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gfx-teal/10 to-gfx-blue/10 border border-gfx-teal/30 text-gfx-teal px-6 py-3 rounded-full text-sm inter-font font-semibold backdrop-blur-md hover:border-gfx-teal/60 transition-all duration-300 shadow-lg hover:shadow-gfx-teal/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gfx-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gfx-teal"></span>
                </span>
                Accepting New Projects
              </span>
            </div>

            <h1 className="rajdhani-font text-5xl sm:text-6xl lg:text-7xl font-bold text-gfx-white leading-[1.1] animate-fade-in-left delay-200">
              World-Class Design.{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal animate-shimmer">
                  Startup Prices.
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal rounded-full animate-glow"></div>
              </span>
            </h1>

            <p className="inter-font text-lg lg:text-xl text-gfx-white/80 font-normal leading-relaxed animate-fade-in-left delay-300">
              Transform your brand with premium design that drives real business results. We blend cutting-edge creativity with proven conversion strategies to deliver websites that don't just look stunning—they scale your revenue.
            </p>

            <div className="animate-fade-in-left delay-400">
              <p className="inter-font text-sm lg:text-base text-gfx-white/70 leading-relaxed">
                Every project we deliver is engineered from the ground up with ROI in mind. We analyze user behavior, implement conversion optimization best practices, and design experiences that guide visitors naturally toward becoming customers. Our clients benefit from white-glove service typically reserved for enterprise contracts, but at prices that make sense for growing businesses. Expect 24-hour response times, unlimited revisions, and a dedicated team that treats your success as our own. With a perfect 5.0-star rating across 20+ completed projects and 100% client satisfaction, we've proven that exceptional design doesn't require an enterprise budget. We combine technical excellence with creative innovation to deliver results that speak for themselves.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-3 animate-fade-in-left delay-500">
              <button className="relative overflow-hidden bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-gfx-white inter-font font-bold px-9 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-gfx-teal/50 group border border-gfx-teal/30">
                <span className="relative z-10 flex items-center gap-2.5 text-base">
                  View Our Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button className="relative overflow-hidden bg-gfx-white/5 backdrop-blur-md hover:bg-gfx-white/10 text-gfx-white inter-font font-bold px-9 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-gfx-teal/40 hover:border-gfx-teal shadow-xl hover:shadow-2xl hover:shadow-gfx-teal/30 group">
                <span className="relative z-10 flex items-center gap-2.5 text-base">
                  Start Your Project
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-3 animate-fade-in-left delay-600">
              <div className="flex items-center gap-3 inter-font text-sm group cursor-pointer">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-gfx-teal to-gfx-blue border-2 border-gfx-gray flex items-center justify-center text-gfx-white text-xs font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{transitionDelay: `${i * 50}ms`}}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-gfx-white/70">
                  <span className="text-gfx-white font-bold">20+</span> Happy Clients
                </span>
              </div>
              
              <div className="flex items-center gap-3 inter-font text-sm group cursor-pointer">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" style={{transitionDelay: `${i * 50}ms`}}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gfx-white/70">
                  <span className="text-gfx-white font-bold">5.0</span> Average Rating
                </span>
              </div>

              <div className="flex items-center gap-3 inter-font text-sm group cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gfx-teal/20 to-gfx-blue/20 border border-gfx-teal/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-gfx-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span className="text-gfx-white/70">
                  <span className="text-gfx-white font-bold">{"<24hr"}</span> Response
                </span>
              </div>
            </div>


          </div>
        </div>

        {/* Card Grid - 2x2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 animate-fade-in-up delay-600">
          <div className="animate-bounce-in delay-200">
            <div className="stat-card p-5 rounded-2xl cursor-pointer shadow-xl">
              <div className="space-y-2 text-center">
                <div className="text-3xl">{quickStats[0].icon}</div>
                <p className="rajdhani-font text-gfx-white/70 text-xs uppercase tracking-wider font-semibold">
                  {quickStats[0].label}
                </p>
                <h3 className="rajdhani-font text-gfx-white text-xl font-bold">
                  {quickStats[0].stat}
                </h3>
              </div>
            </div>
          </div>

          <div className="animate-bounce-in delay-300">
            <div className="stat-card p-5 rounded-2xl cursor-pointer shadow-xl">
              <div className="space-y-2 text-center">
                <div className="text-3xl">{quickStats[1].icon}</div>
                <p className="rajdhani-font text-gfx-white/70 text-xs uppercase tracking-wider font-semibold">
                  {quickStats[1].label}
                </p>
                <h3 className="rajdhani-font text-gfx-white text-xl font-bold">
                  {quickStats[1].stat}
                </h3>
              </div>
            </div>
          </div>

          <div className="animate-bounce-in delay-400">
            <div className="stat-card p-5 rounded-2xl cursor-pointer shadow-xl">
              <div className="space-y-2 text-center">
                <div className="text-3xl">{quickStats[2].icon}</div>
                <p className="rajdhani-font text-gfx-white/70 text-xs uppercase tracking-wider font-semibold">
                  {quickStats[2].label}
                </p>
                <h3 className="rajdhani-font text-gfx-white text-xl font-bold">
                  {quickStats[2].stat}
                </h3>
              </div>
            </div>
          </div>

          <div className="animate-bounce-in delay-500">
            <div className="stat-card p-5 rounded-2xl cursor-pointer shadow-xl">
              <div className="space-y-2 text-center">
                <div className="text-3xl">{quickStats[3].icon}</div>
                <p className="rajdhani-font text-gfx-white/70 text-xs uppercase tracking-wider font-semibold">
                  {quickStats[3].label}
                </p>
                <h3 className="rajdhani-font text-gfx-white text-xl font-bold">
                  {quickStats[3].stat}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Logo Carousel */}
        <div className="animate-fade-in-up delay-700 pt-12">
          <div className="text-center mb-8">
            <p className="inter-font text-gfx-white/50 text-sm uppercase tracking-wider font-semibold">
              Powered by industry-leading technologies
            </p>
          </div>
          
          <div className="relative overflow-hidden py-8 logo-carousel-container">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gfx-gray to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gfx-gray to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling logos - wrapper with inline-flex */}
            <div className="flex">
              <div className="flex animate-scroll-left">
                {/* Multiple duplicates for truly infinite effect */}
                {[...Array(6)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    {techLogos.map((logoItem, index) => (
                      <div key={`${setIndex}-${index}`} className="flex-shrink-0 mx-12 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer">
                        <img 
                          src={logoItem.src} 
                          alt={logoItem.name}
                          className="h-16 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;