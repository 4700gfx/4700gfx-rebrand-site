import React from 'react';
import logo from '../images/logo-white.png';

const Hero = () => {
  const quickStats = [
    { label: "Years in Business", stat: "3 Years" },
    { label: "Over", stat: "20+ Projects" },
    { label: "Ratings", stat: "5 Stars" },
    { label: "Client Satisfaction", stat: "100%" },
    { label: "Response Time", stat: "24 Hours" }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-20 lg:py-24">
      <style>{`
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>

      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Logo with Cards in L-Shape Grid */}
          <div className="relative">
            {/* Grid Container for L-Shape Layout */}
            <div className="grid grid-cols-3 gap-6 max-w-[700px] mx-auto">
              
              {/* Top Row - 3 Cards */}
              <div className="animate-fade-in-up delay-200">
                <div className="bg-gradient-to-br from-gfx-teal to-gfx-gray p-6 rounded-2xl shadow-2xl hover:shadow-gfx-blue/50 hover:scale-105 transition-all duration-300 border border-gfx-blue/30 group cursor-pointer backdrop-blur-sm h-32 flex items-center justify-center">
                  <div className="space-y-2 text-center">
                    <p className="rajdhani-font text-gfx-white text-xs uppercase tracking-wider font-semibold opacity-90">
                      {quickStats[0].label}
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {quickStats[0].stat}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all duration-300"></div>
                </div>
              </div>

              <div className="animate-fade-in-up delay-300">
                <div className="bg-gradient-to-br from-gfx-teal to-gfx-gray p-6 rounded-2xl shadow-2xl hover:shadow-gfx-blue/50 hover:scale-105 transition-all duration-300 border border-gfx-blue/30 group cursor-pointer backdrop-blur-sm h-32 flex items-center justify-center">
                  <div className="space-y-2 text-center">
                    <p className="rajdhani-font text-gfx-white text-xs uppercase tracking-wider font-semibold opacity-90">
                      {quickStats[1].label}
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {quickStats[1].stat}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all duration-300"></div>
                </div>
              </div>

              <div className="animate-fade-in-up delay-400">
                <div className="bg-gradient-to-br from-gfx-teal to-gfx-gray p-6 rounded-2xl shadow-2xl hover:shadow-gfx-blue/50 hover:scale-105 transition-all duration-300 border border-gfx-blue/30 group cursor-pointer backdrop-blur-sm h-32 flex items-center justify-center">
                  <div className="space-y-2 text-center">
                    <p className="rajdhani-font text-gfx-white text-xs uppercase tracking-wider font-semibold opacity-90">
                      {quickStats[2].label}
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {quickStats[2].stat}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all duration-300"></div>
                </div>
              </div>

              {/* Middle Row - Card + Logo + Empty */}
              <div className="row-start-2 animate-fade-in-up delay-500">
                <div className="bg-gradient-to-br from-gfx-teal to-gfx-gray p-6 rounded-2xl shadow-2xl hover:shadow-gfx-blue/50 hover:scale-105 transition-all duration-300 border border-gfx-blue/30 group cursor-pointer backdrop-blur-sm h-32 flex items-center justify-center">
                  <div className="space-y-2 text-center">
                    <p className="rajdhani-font text-gfx-white text-xs uppercase tracking-wider font-semibold opacity-90">
                      {quickStats[3].label}
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {quickStats[3].stat}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all duration-300"></div>
                </div>
              </div>

              {/* Logo in center - spans 2x2 */}
              <div className="col-span-2 row-span-2 row-start-2 flex items-center justify-center animate-fade-in-up delay-100">
                <div className="animate-float w-full h-full flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt='company-logo' 
                    className='w-[500px] h-[500px] object-contain drop-shadow-2xl'
                  />
                </div>
              </div>

              {/* Bottom Row - Card + Logo continues + Empty */}
              <div className="row-start-3 animate-fade-in-up delay-600">
                <div className="bg-gradient-to-br from-gfx-teal to-gfx-gray  p-6 rounded-2xl shadow-2xl hover:shadow-gfx-blue/50 hover:scale-105 transition-all duration-300 border border-gfx-blue/30 group cursor-pointer backdrop-blur-sm h-32 flex items-center justify-center">
                  <div className="space-y-2 text-center">
                    <p className="rajdhani-font text-gfx-white text-xs uppercase tracking-wider font-semibold opacity-90">
                      {quickStats[4].label}
                    </p>
                    <h3 className="rajdhani-font text-gfx-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {quickStats[4].stat}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all duration-300"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Enhanced Content */}
          <div className="space-y-8 lg:space-y-10 w-full">
            {/* Badge */}
            <div className="animate-fade-in-left delay-100">
              <span className="inline-flex items-center gap-2 bg-gfx-blue/10 border border-gfx-blue/30 text-gfx-blue px-4 py-2 rounded-full text-sm inter-font font-medium backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gfx-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gfx-blue"></span>
                </span>
                Available for New Projects
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="rajdhani-font text-5xl sm:text-6xl lg:text-7xl font-bold text-gfx-white leading-[1.1] animate-fade-in-left delay-200">
              Design That{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gfx-blue via-blue-400 to-blue-300 animate-shimmer">
                  Drives Revenue
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gfx-blue via-blue-400 to-blue-300 rounded-full"></div>
              </span>
            </h1>

            {/* Subheading */}
            <p className="inter-font text-xl lg:text-2xl text-gfx-blue font-medium leading-relaxed animate-fade-in-left delay-300">
              Strategic web design and branding that captures attention, builds credibility, and converts visitors into paying customers.
            </p>

            {/* Value Props */}
            <div className="space-y-4 animate-fade-in-left delay-400">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gfx-blue/20 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-gfx-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="inter-font text-gfx-white/80 text-base lg:text-lg leading-relaxed">
                  <span className="text-gfx-white font-semibold">Agency-level quality</span> at boutique studio pricing—professional results without the premium price tag
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gfx-blue/20 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-gfx-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="inter-font text-gfx-white/80 text-base lg:text-lg leading-relaxed">
                  <span className="text-gfx-white font-semibold">Built for conversion</span>—every pixel crafted to turn browsers into buyers and grow your bottom line
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-left delay-500">
              <button className="bg-gradient-to-r from-gfx-blue to-blue-600 hover:from-blue-600 hover:to-gfx-blue text-gfx-white inter-font font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-gfx-blue/50 hover:shadow-2xl relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  View Our Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gfx-white inter-font font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-gfx-blue/50 hover:border-gfx-blue shadow-lg hover:shadow-2xl group">
                <span className="flex items-center gap-2">
                  Start Your Project
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4 animate-fade-in-left delay-600">
              <div className="flex items-center gap-2 inter-font text-sm">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gfx-blue to-blue-600 border-2 border-gray-900 flex items-center justify-center text-gfx-white text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-gfx-white/70">
                  <span className="text-gfx-white font-semibold">20+</span> Happy Clients
                </span>
              </div>
              
              <div className="flex items-center gap-2 inter-font text-sm">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gfx-white/70">
                  <span className="text-gfx-white font-semibold">5.0</span> Rating
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