import React, { useState } from 'react';

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 'launch',
      icon: '🚀',
      name: 'LAUNCH',
      price: '$500',
      tagline: 'Your Professional Digital Foundation',
      bestFor: 'New entrepreneurs, solopreneurs, and freelancers',
      description: 'Getting online shouldn\'t take months. The LAUNCH package gets your business visible and generating leads within 2-4 weeks.',
      timeline: '2-4 weeks',
      features: [
        'Custom single-page website with up to 5 sections',
        'Basic Branding Guide',
        'Fully Responsive Design',
        'Contact Form Integration',
        'SSL certificate & Basic SEO',
        '2 rounds of revisions',
        '1 month FREE maintenance ($150 value)',
      ],
      idealFor: 'Freelance consultants, personal trainers, photographers, coaches',
      popular: false,
    },
    {
      id: 'elevate',
      icon: '⚡',
      name: 'ELEVATE',
      price: '$1,000',
      tagline: 'Multi-Page Professional Presence',
      bestFor: 'Established small businesses and professional practices',
      description: 'Your business needs room to tell your full story. ELEVATE gives you 3-5 dedicated pages with powerful tools.',
      timeline: '4-6 weeks',
      features: [
        '3-5 custom-coded pages',
        'Standard Branding Guide',
        'Email Marketing Integration',
        'Multiple Strategic Contact Forms',
        'Email Automation Setup',
        'Google Analytics 4 integration',
        '1 month FREE maintenance ($100-150 value)',
      ],
      idealFor: 'Professional service firms, medical/dental practices, local businesses',
      popular: false,
    },
    {
      id: 'growth',
      icon: '📈',
      name: 'GROWTH',
      price: '$1,500',
      tagline: 'Complete Brand Identity + Premium Website',
      bestFor: 'Growing businesses ready to dominate their market',
      description: 'Complete brand identity from scratch plus a premium 5-8 page website with advanced features.',
      timeline: '6-8 weeks',
      features: [
        '3 logo concepts + 2 variations',
        'Premium Branding Guide (8-10 pages)',
        'Business Card & Print Design',
        '5-8 page premium website',
        'Advanced Blog/CMS',
        'E-commerce ready (up to 10 products)',
        '30 branded social media graphics',
        '3 months FREE maintenance ($150 value)',
      ],
      idealFor: 'E-commerce startups, service businesses scaling, healthcare providers',
      popular: true,
    },
    {
      id: 'scale',
      icon: '🎯',
      name: 'SCALE',
      price: '$2,500+',
      tagline: 'Enterprise Brand System + Advanced Digital Dominance',
      bestFor: 'Established businesses and premium service providers',
      description: 'The ultimate transformation package—everything elevated to the next level with more pages, features, and ongoing support.',
      timeline: '8-10 weeks',
      features: [
        '4 logo concepts + 3 variations',
        'Premium+ Branding Guide (15-20 pages)',
        'Full Stationery Suite Design',
        '8-12 page enterprise website',
        'Full e-commerce (up to 25 products)',
        'Custom interactive features',
        '60 branded social media graphics',
        '4-hour photography session',
        '6 months FREE maintenance ($450 value)',
      ],
      idealFor: 'Multi-location operations, professional firms, franchises',
      popular: false,
    },
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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        .pricing-card {
          position: relative;
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.08) 0%, rgba(45, 52, 54, 0.15) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 186, 242, 0.2);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pricing-card::before {
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

        .pricing-card:hover {
          transform: translateY(-12px);
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.15) 0%, rgba(45, 52, 54, 0.25) 100%);
          border-color: rgba(0, 186, 242, 0.5);
          box-shadow: 0 25px 60px rgba(0, 186, 242, 0.3);
        }

        .pricing-card:hover::before {
          opacity: 1;
        }

        .pricing-card.popular {
          border: 2px solid rgba(0, 186, 242, 0.6);
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.12) 0%, rgba(45, 52, 54, 0.2) 100%);
        }

        .pricing-card.popular::before {
          opacity: 0.5;
        }

        .pricing-card.popular:hover::before {
          opacity: 1;
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gfx-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gfx-blue/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-[85%] max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="inter-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Simple, Transparent{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal">
                Pricing
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal rounded-full"></div>
            </span>
          </h2>
          <p className="inter-font text-gfx-white/80 text-lg lg:text-xl max-w-3xl mx-auto mb-4">
            Agency-level excellence without the enterprise price tag. Choose the package that fits your business stage and goals.
          </p>
          <p className="inter-font text-gfx-white/60 text-base lg:text-lg">
            All packages include custom code, full ownership, and our quality guarantee
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`pricing-card rounded-3xl p-8 flex flex-col animate-fade-in-up delay-${(index + 1) * 100} ${pkg.popular ? 'popular' : ''}`}
              style={{ opacity: 0 }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-gfx-teal to-gfx-blue text-gfx-white inter-font font-bold px-6 py-2 rounded-full text-xs uppercase tracking-wider shadow-xl">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon & Name */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{pkg.icon}</div>
                <h3 className="rajdhani-font text-gfx-white text-3xl font-bold mb-2">
                  {pkg.name}
                </h3>
                <p className="inter-font text-gfx-white/70 text-sm">
                  {pkg.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="rajdhani-font text-gfx-teal text-5xl font-bold mb-2">
                  {pkg.price}
                </div>
                <p className="inter-font text-gfx-white/60 text-sm">
                  {pkg.timeline}
                </p>
              </div>

              {/* Description */}
              <p className="inter-font text-gfx-white/75 text-sm leading-relaxed mb-6">
                {pkg.description}
              </p>

              {/* Features */}
              <div className="flex-grow mb-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gfx-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="inter-font text-gfx-white/80 text-sm leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className="mb-6 p-4 bg-gfx-teal/10 rounded-xl border border-gfx-teal/20">
                <p className="inter-font text-gfx-white/60 text-xs uppercase tracking-wider mb-1 font-semibold">
                  Ideal For
                </p>
                <p className="inter-font text-gfx-white/90 text-sm">
                  {pkg.idealFor}
                </p>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => setSelectedPackage(pkg.id)}
                className={`w-full py-4 rounded-xl inter-font font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-gfx-white'
                    : 'bg-gfx-white/10 hover:bg-gfx-white/20 text-gfx-white border border-gfx-teal/40 hover:border-gfx-teal'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Info Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in-up delay-500" style={{ opacity: 0 }}>
          {/* Payment Options */}
          <div className="pricing-card rounded-2xl p-6">
            <div className="text-3xl mb-3">💳</div>
            <h4 className="rajdhani-font text-gfx-white text-xl font-bold mb-3">
              Payment Options
            </h4>
            <ul className="space-y-2 inter-font text-gfx-white/75 text-sm">
              <li>• 50% deposit, 50% on completion</li>
              <li>• GROWTH: 3 payments of $500</li>
              <li>• SCALE: 4 payments of $500</li>
              <li>• Credit, PayPal, Bank Transfer</li>
            </ul>
          </div>

          {/* Rush Service */}
          <div className="pricing-card rounded-2xl p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="rajdhani-font text-gfx-white text-xl font-bold mb-3">
              Rush Service Available
            </h4>
            <ul className="space-y-2 inter-font text-gfx-white/75 text-sm">
              <li>• LAUNCH: 1-week (+$200)</li>
              <li>• ELEVATE: 2-week (+$300)</li>
              <li>• GROWTH: 4-week (+$500)</li>
              <li>• SCALE: 6-week (+$750)</li>
            </ul>
          </div>

          {/* Our Guarantee */}
          <div className="pricing-card rounded-2xl p-6">
            <div className="text-3xl mb-3">💯</div>
            <h4 className="rajdhani-font text-gfx-white text-xl font-bold mb-3">
              Our Guarantee
            </h4>
            <ul className="space-y-2 inter-font text-gfx-white/75 text-sm">
              <li>• Unlimited revisions in scope</li>
              <li>• 10% discount if we miss deadline</li>
              <li>• 24-48 hour support response</li>
              <li>• 100% satisfaction guaranteed</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center animate-fade-in-up delay-600" style={{ opacity: 0 }}>
          <h3 className="rajdhani-font text-gfx-white text-3xl lg:text-4xl font-bold mb-8">
            Why 4700 GFX Studios?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '💻', text: 'Custom-Coded Excellence' },
              { icon: '🔑', text: 'Complete Ownership' },
              { icon: '💎', text: 'No Hidden Fees' },
              { icon: '🎯', text: 'Results-Focused' },
              { icon: '🤝', text: 'Ongoing Partnership' },
            ].map((item, idx) => (
              <div key={idx} className="pricing-card rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="inter-font text-gfx-white text-xs lg:text-sm font-semibold leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-700" style={{ opacity: 0 }}>
          <p className="inter-font text-gfx-white/80 text-lg mb-6">
            Ready to transform your digital presence?
          </p>
          <button className="relative overflow-hidden bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-gfx-white inter-font font-bold px-12 py-5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-gfx-teal/50 group border border-gfx-teal/30">
            <span className="relative z-10 flex items-center gap-3 text-lg">
              Schedule a Free Consultation
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default Pricing;