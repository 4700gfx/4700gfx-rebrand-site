import React from 'react';
import logo from '../images/logo-white.png';

const Hero = () => {
  const quickStats = [
    { label: "Years in Business", stat: "3 Years", icon: "📅" },
    { label: "Over", stat: "20+ Projects", icon: "🚀" },
    { label: "Ratings", stat: "5 Stars", icon: "⭐" },
    { label: "Client Satisfaction", stat: "100%", icon: "💯" },
    { label: "Response Time", stat: "24 Hours", icon: "⚡" }
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
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
      `}</style>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gfx-teal/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gfx-blue/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-[80%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[550px_1fr] gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Logo with Cards Grid */}
          <div className="relative animate-fade-in-right delay-100">
            <div className="grid grid-cols-3 grid-rows-3 gap-3 max-w-[550px] mx-auto">
              
              {/* Top Row - 3 Cards */}
              <div className="animate-bounce-in delay-200">
                <div className="relative bg-gradient-to-br from-gfx-teal/90 to-gfx-gray/50 p-3 rounded-2xl shadow-2xl hover:shadow-gfx-teal/50 transition-all duration-500 border border-gfx-teal/30 group cursor-pointer backdrop-blur-sm aspect-square flex items-center justify-center overflow-hidden hover:scale-110 hover:-rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gfx-blue/0 to-gfx-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="space-y-1 text-center relative z-10">
                    <div className="text-xl transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">
                      {quickStats[0].icon}
                    </div>
                    <p className="rajdhani-font text-gfx-white text-[9px] uppercase tracking-wider font-semibold opacity-90">
                      {quickStats[0].label}
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                      {quickStats[0].stat}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="animate-bounce-in delay-300">
                <div className="relative bg-gradient-to-br from-gfx-teal/90 to-gfx-gray/50 p-3 rounded-2xl shadow-2xl hover:shadow-gfx-teal/50 transition-all duration-500 border border-gfx-teal/30 group cursor-pointer backdrop-blur-sm aspect-square flex items-center justify-center overflow-hidden hover:scale-110 hover:-rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gfx-blue/0 to-gfx-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="space-y-1 text-center relative z-10">
                    <div className="text-xl transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">
                      {quickStats[1].icon}
                    </div>
                    <p className="rajdhani-font text-gfx-white text-[9px] uppercase tracking-wider font-semibold opacity-90">
                      {quickStats[1].label}
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                      {quickStats[1].stat}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="animate-bounce-in delay-400">
                <div className="relative bg-gradient-to-br from-gfx-teal/90 to-gfx-gray/50 p-3 rounded-2xl shadow-2xl hover:shadow-gfx-teal/50 transition-all duration-500 border border-gfx-teal/30 group cursor-pointer backdrop-blur-sm aspect-square flex items-center justify-center overflow-hidden hover:scale-110 hover:-rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gfx-blue/0 to-gfx-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="space-y-1 text-center relative z-10">
                    <div className="text-xl transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">
                      {quickStats[2].icon}
                    </div>
                    <p className="rajdhani-font text-gfx-white text-[9px] uppercase tracking-wider font-semibold opacity-90">
                      {quickStats[2].label}
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                      {quickStats[2].stat}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Middle Row - Card + Logo (center) + Card */}
              <div className="row-start-2 animate-bounce-in delay-500">
                <div className="relative bg-gradient-to-br from-gfx-teal/90 to-gfx-gray/50 p-3 rounded-2xl shadow-2xl hover:shadow-gfx-teal/50 transition-all duration-500 border border-gfx-teal/30 group cursor-pointer backdrop-blur-sm aspect-square flex items-center justify-center overflow-hidden hover:scale-110 hover:rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gfx-blue/0 to-gfx-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="space-y-1 text-center relative z-10">
                    <div className="text-xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {quickStats[3].icon}
                    </div>
                    <p className="rajdhani-font text-gfx-white text-[9px] uppercase tracking-wider font-semibold opacity-90">
                      {quickStats[3].label}
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                      {quickStats[3].stat}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Logo in center */}
              <div className="row-start-2 col-start-2 flex items-center justify-center">
                <div className="animate-float w-full h-full flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt='company-logo' 
                    className='w-[200%] h-[200%] object-contain drop-shadow-2xl'
                  />
                </div>
              </div>

              <div className="row-start-2 col-start-3 animate-bounce-in delay-600">
                <div className="relative bg-gradient-to-br from-gfx-teal/90 to-gfx-gray/50 p-3 rounded-2xl shadow-2xl hover:shadow-gfx-teal/50 transition-all duration-500 border border-gfx-teal/30 group cursor-pointer backdrop-blur-sm aspect-square flex items-center justify-center overflow-hidden hover:scale-110 hover:rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gfx-blue/0 to-gfx-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="space-y-1 text-center relative z-10">
                    <div className="text-xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {quickStats[4].icon}
                    </div>
                    <p className="rajdhani-font text-gfx-white text-[9px] uppercase tracking-wider font-semibold opacity-90">
                      {quickStats[4].label}
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                      {quickStats[4].stat}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Bottom Row - 3 Cards */}
              <div className="row-start-3 animate-bounce-in delay-700">
                <div className="relative bg-gradient-to-br from-gfx-teal/90 to-gfx-gray/50 p-3 rounded-2xl shadow-2xl hover:shadow-gfx-teal/50 transition-all duration-500 border border-gfx-teal/30 group cursor-pointer backdrop-blur-sm aspect-square flex items-center justify-center overflow-hidden hover:scale-110 hover:rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gfx-blue/0 to-gfx-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="space-y-1 text-center relative z-10">
                    <div className="text-xl transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">
                      📊
                    </div>
                    <p className="rajdhani-font text-gfx-white text-[9px] uppercase tracking-wider font-semibold opacity-90">
                      Results
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                      Data-Driven
                    </h3>
                  </div>
                </div>
              </div>

              <div className="row-start-3 col-start-2 animate-bounce-in delay-800">
                <div className="relative bg-gradient-to-br from-gfx-teal/90 to-gfx-gray/50 p-3 rounded-2xl shadow-2xl hover:shadow-gfx-teal/50 transition-all duration-500 border border-gfx-teal/30 group cursor-pointer backdrop-blur-sm aspect-square flex items-center justify-center overflow-hidden hover:scale-110 hover:rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gfx-blue/0 to-gfx-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="space-y-1 text-center relative z-10">
                    <div className="text-xl transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">
                      🎨
                    </div>
                    <p className="rajdhani-font text-gfx-white text-[9px] uppercase tracking-wider font-semibold opacity-90">
                      Creative
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                      Innovation
                    </h3>
                  </div>
                </div>
              </div>

              <div className="row-start-3 col-start-3 animate-bounce-in delay-900">
                <div className="relative bg-gradient-to-br from-gfx-teal/90 to-gfx-gray/50 p-3 rounded-2xl shadow-2xl hover:shadow-gfx-teal/50 transition-all duration-500 border border-gfx-teal/30 group cursor-pointer backdrop-blur-sm aspect-square flex items-center justify-center overflow-hidden hover:scale-110 hover:rotate-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gfx-blue/0 to-gfx-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="space-y-1 text-center relative z-10">
                    <div className="text-xl transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">
                      🚀
                    </div>
                    <p className="rajdhani-font text-gfx-white text-[9px] uppercase tracking-wider font-semibold opacity-90">
                      Speed
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                      Fast Delivery
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 lg:space-y-7 w-full">
            {/* Badge */}
            <div className="animate-fade-in-left delay-100">
              <span className="inline-flex items-center gap-2 bg-gfx-teal/10 border border-gfx-teal/40 text-gfx-teal px-5 py-2.5 rounded-full text-sm inter-font font-semibold backdrop-blur-sm hover:bg-gfx-teal/20 hover:border-gfx-teal/60 transition-all duration-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gfx-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gfx-teal"></span>
                </span>
                Available for New Projects
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="rajdhani-font text-5xl sm:text-6xl lg:text-7xl font-bold text-gfx-white leading-[1.1] animate-fade-in-left delay-200">
              Agency-Level Work Without{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal animate-shimmer">
                  The Agency Price
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal rounded-full animate-glow"></div>
              </span>
            </h1>

            {/* Subheading */}
            <p className="inter-font text-lg lg:text-xl text-gfx-white/90 font-medium leading-relaxed animate-fade-in-left delay-300">
              Premium web design and branding that converts visitors into customers. Scroll-stopping, attention grabbing development that brings traffic. Strategic, beautiful, and built to grow your business—without the enterprise price tag. With Over 3 years of experience, we continue to grow as the trust force in Web Design and Branding.
            </p>

            {/* Value Props */}
            <div className="space-y-4 animate-fade-in-left delay-400">
              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gfx-teal/20 flex items-center justify-center mt-1 group-hover:bg-gfx-teal/40 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-3.5 h-3.5 text-gfx-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="inter-font text-gfx-white/85 text-base lg:text-lg leading-relaxed">
                  <span className="text-gfx-white font-bold">Top-tier quality, boutique pricing</span>—Professional work that scales your business without draining your budget.
                </p>
              </div>
              
              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gfx-teal/20 flex items-center justify-center mt-1 group-hover:bg-gfx-teal/40 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-3.5 h-3.5 text-gfx-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="inter-font text-gfx-white/85 text-base lg:text-lg leading-relaxed">
                  <span className="text-gfx-white font-bold">Built to convert</span>—Every design choice is intentional, backed by UX research and proven psychology.
                </p>
              </div>

              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gfx-teal/20 flex items-center justify-center mt-1 group-hover:bg-gfx-teal/40 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-3.5 h-3.5 text-gfx-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="inter-font text-gfx-white/85 text-base lg:text-lg leading-relaxed">
                  <span className="text-gfx-white font-bold">Startup speed, unlimited revisions</span>—24-hour response times. We're not done until you're thrilled.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-left delay-500">
              <button className="bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-gfx-white inter-font font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-gfx-teal/60 hover:shadow-2xl relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2 text-base">
                  View Our Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button className="bg-gfx-white/10 backdrop-blur-sm hover:bg-gfx-white/20 text-gfx-white inter-font font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-gfx-teal/50 hover:border-gfx-teal shadow-xl hover:shadow-2xl hover:shadow-gfx-teal/30 group">
                <span className="flex items-center gap-2 text-base">
                  Start Your Project
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4 animate-fade-in-left delay-600">
              <div className="flex items-center gap-2.5 inter-font text-sm group cursor-pointer">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-gfx-teal to-gfx-blue border-2 border-gfx-gray flex items-center justify-center text-gfx-white text-xs font-bold group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-gfx-white/70">
                  <span className="text-gfx-white font-bold">20+</span> Happy Clients
                </span>
              </div>
              
              <div className="flex items-center gap-2.5 inter-font text-sm group cursor-pointer">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" style={{transitionDelay: `${i * 50}ms`}}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gfx-white/70">
                  <span className="text-gfx-white font-bold">5.0</span> Rating
                </span>
              </div>

              <div className="flex items-center gap-2.5 inter-font text-sm">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gfx-teal/20 to-gfx-blue/20 border border-gfx-teal/40 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gfx-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span className="text-gfx-white/70">
                  <span className="text-gfx-white font-bold">24hr</span> Response
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;