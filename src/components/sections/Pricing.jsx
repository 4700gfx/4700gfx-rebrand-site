import React, { useState } from 'react';
import { ChevronDown, Check, Info, Zap, Star } from 'lucide-react';

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [billingCycle, setBillingCycle] = useState('one-time'); // 'one-time' or 'payment-plan'
  const [showComparison, setShowComparison] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const packages = [
    {
      id: 'launch',
      icon: '🚀',
      name: 'LAUNCH',
      price: '$500',
      originalPrice: '$650',
      tagline: 'Your Professional Digital Foundation',
      bestFor: 'New entrepreneurs, solopreneurs, and freelancers',
      description: 'Getting online shouldn\'t take months. The LAUNCH package gets your business visible and generating leads within 2-4 weeks.',
      timeline: '2-4 weeks',
      features: [
        { text: 'Custom single-page website with up to 5 sections', highlight: true },
        { text: 'Basic Branding Guide', highlight: false },
        { text: 'Fully Responsive Design', highlight: true },
        { text: 'Contact Form Integration', highlight: false },
        { text: 'SSL certificate & Basic SEO', highlight: false },
        { text: '2 rounds of revisions', highlight: false },
        { text: '1 month FREE maintenance ($150 value)', highlight: true },
      ],
      additionalFeatures: [
        'Mobile-first design approach',
        'Basic on-page SEO optimization',
        'Google Business Profile setup assistance',
        'Social media link integration',
      ],
      idealFor: 'Freelance consultants, personal trainers, photographers, coaches',
      deliverables: '5 sections, 1 contact form, basic SEO setup',
      supportLevel: 'Email support (48hr response)',
      revisions: '2 rounds included',
      popular: false,
      savings: '$150',
    },
    {
      id: 'elevate',
      icon: '⚡',
      name: 'ELEVATE',
      price: '$1,000',
      originalPrice: '$1,250',
      tagline: 'Multi-Page Professional Presence',
      bestFor: 'Established small businesses and professional practices',
      description: 'Your business needs room to tell your full story. ELEVATE gives you 3-5 dedicated pages with powerful tools.',
      timeline: '4-6 weeks',
      features: [
        { text: '3-5 custom-coded pages', highlight: true },
        { text: 'Standard Branding Guide', highlight: false },
        { text: 'Email Marketing Integration', highlight: true },
        { text: 'Multiple Strategic Contact Forms', highlight: false },
        { text: 'Email Automation Setup', highlight: true },
        { text: 'Google Analytics 4 integration', highlight: false },
        { text: '1 month FREE maintenance ($100-150 value)', highlight: true },
      ],
      additionalFeatures: [
        'Advanced SEO optimization',
        'Newsletter signup integration',
        'Social proof widgets',
        'Blog/News section ready',
        'Performance optimization',
      ],
      idealFor: 'Professional service firms, medical/dental practices, local businesses',
      deliverables: '3-5 pages, multiple forms, email automation',
      supportLevel: 'Priority email + chat (24hr response)',
      revisions: '3 rounds included',
      popular: false,
      savings: '$250',
    },
    {
      id: 'growth',
      icon: '📈',
      name: 'GROWTH',
      price: '$1,500',
      originalPrice: '$2,000',
      tagline: 'Complete Brand Identity + Premium Website',
      bestFor: 'Growing businesses ready to dominate their market',
      description: 'Complete brand identity from scratch plus a premium 5-8 page website with advanced features.',
      timeline: '6-8 weeks',
      features: [
        { text: '3 logo concepts + 2 variations', highlight: true },
        { text: 'Premium Branding Guide (8-10 pages)', highlight: true },
        { text: 'Business Card & Print Design', highlight: false },
        { text: '5-8 page premium website', highlight: true },
        { text: 'Advanced Blog/CMS', highlight: true },
        { text: 'E-commerce ready (up to 10 products)', highlight: true },
        { text: '30 branded social media graphics', highlight: false },
        { text: '3 months FREE maintenance ($150 value)', highlight: true },
      ],
      additionalFeatures: [
        'Custom animations & interactions',
        'Video integration',
        'Advanced analytics dashboard',
        'Conversion optimization',
        'A/B testing setup',
        'Custom CMS training session',
        'Social media strategy guide',
      ],
      idealFor: 'E-commerce startups, service businesses scaling, healthcare providers',
      deliverables: 'Complete brand system, 5-8 pages, CMS, 10 products',
      supportLevel: 'Priority support (12hr response) + monthly check-ins',
      revisions: 'Unlimited within scope',
      popular: true,
      savings: '$500',
    },
    {
      id: 'scale',
      icon: '🎯',
      name: 'SCALE',
      price: '$2,500+',
      originalPrice: '$3,500',
      tagline: 'Enterprise Brand System + Advanced Digital Dominance',
      bestFor: 'Established businesses and premium service providers',
      description: 'The ultimate transformation package—everything elevated to the next level with more pages, features, and ongoing support.',
      timeline: '8-10 weeks',
      features: [
        { text: '4 logo concepts + 3 variations', highlight: true },
        { text: 'Premium+ Branding Guide (15-20 pages)', highlight: true },
        { text: 'Full Stationery Suite Design', highlight: false },
        { text: '8-12 page enterprise website', highlight: true },
        { text: 'Full e-commerce (up to 25 products)', highlight: true },
        { text: 'Custom interactive features', highlight: true },
        { text: '60 branded social media graphics', highlight: false },
        { text: '4-hour photography session', highlight: true },
        { text: '6 months FREE maintenance ($450 value)', highlight: true },
      ],
      additionalFeatures: [
        'Multi-language support ready',
        'Advanced security features',
        'Custom integrations (CRM, ERP)',
        'Performance optimization suite',
        'Dedicated account manager',
        'Quarterly strategy sessions',
        'Priority feature updates',
        'White-glove onboarding',
      ],
      idealFor: 'Multi-location operations, professional firms, franchises',
      deliverables: 'Enterprise brand system, 8-12 pages, full e-commerce',
      supportLevel: 'VIP support (4hr response) + dedicated account manager',
      revisions: 'Unlimited',
      popular: false,
      savings: '$1,000+',
    },
  ];

  const toggleCardExpansion = (pkgId) => {
    setExpandedCard(expandedCard === pkgId ? null : pkgId);
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

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 186, 242, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 186, 242, 0.6);
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

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }

        .pricing-card {
          position: relative;
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.08) 0%, rgba(45, 52, 54, 0.15) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 186, 242, 0.2);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: visible;
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
          transform: translateY(-12px) scale(1.02);
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
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .pricing-card.popular::before {
          opacity: 0.5;
        }

        .pricing-card.popular:hover::before {
          opacity: 1;
        }

        .popular-badge {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          background: linear-gradient(135deg, #00BAF2 0%, #0099CC 100%);
          padding: 8px 24px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          box-shadow: 0 8px 24px rgba(0, 186, 242, 0.5);
          white-space: nowrap;
          animation: shimmer 3s linear infinite;
          background-size: 200% auto;
          background-image: linear-gradient(
            90deg,
            #00BAF2 0%,
            #00D4FF 25%,
            #0099CC 50%,
            #00D4FF 75%,
            #00BAF2 100%
          );
        }

        .feature-highlight {
          position: relative;
        }

        .feature-highlight::before {
          content: '';
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, #00BAF2, transparent);
          border-radius: 2px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .feature-highlight:hover::before {
          opacity: 1;
        }

        .savings-badge {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.2), rgba(0, 153, 204, 0.3));
          border: 1px solid rgba(0, 186, 242, 0.4);
        }

        .comparison-table {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.05) 0%, rgba(45, 52, 54, 0.1) 100%);
          border: 1px solid rgba(0, 186, 242, 0.2);
        }

        .toggle-switch {
          position: relative;
          width: 60px;
          height: 30px;
          background: rgba(0, 186, 242, 0.2);
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .toggle-switch.active {
          background: linear-gradient(135deg, #00BAF2, #0099CC);
        }

        .toggle-knob {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          transition: transform 0.3s;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .toggle-switch.active .toggle-knob {
          transform: translateX(30px);
        }

        .info-tooltip {
          position: absolute;
          background: linear-gradient(135deg, #00BAF2, #0099CC);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          white-space: nowrap;
          bottom: 120%;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
          z-index: 100;
        }

        .info-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #00BAF2;
        }

        .has-tooltip:hover .info-tooltip {
          opacity: 1;
        }

        .expanded-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expanded-content.open {
          max-height: 800px;
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gfx-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gfx-blue/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gfx-teal/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
          <p className="inter-font text-gfx-white/60 text-base lg:text-lg mb-8">
            All packages include custom code, full ownership, and our quality guarantee
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`inter-font text-sm font-semibold transition-colors ${billingCycle === 'one-time' ? 'text-gfx-teal' : 'text-gfx-white/60'}`}>
              One-Time Payment
            </span>
            <div 
              className={`toggle-switch ${billingCycle === 'payment-plan' ? 'active' : ''}`}
              onClick={() => setBillingCycle(billingCycle === 'one-time' ? 'payment-plan' : 'one-time')}
            >
              <div className="toggle-knob"></div>
            </div>
            <span className={`inter-font text-sm font-semibold transition-colors ${billingCycle === 'payment-plan' ? 'text-gfx-teal' : 'text-gfx-white/60'}`}>
              Payment Plans Available
            </span>
          </div>

          {/* Comparison Toggle */}
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inter-font text-gfx-teal hover:text-gfx-blue text-sm font-semibold flex items-center gap-2 mx-auto transition-colors"
          >
            {showComparison ? 'Hide' : 'Show'} Package Comparison
            <ChevronDown className={`w-4 h-4 transition-transform ${showComparison ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Comparison Table */}
        <div className={`expanded-content mb-12 ${showComparison ? 'open' : ''}`}>
          <div className="comparison-table rounded-2xl p-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gfx-teal/30">
                  <th className="text-left py-4 px-4 inter-font text-gfx-white/60 text-sm font-semibold">Feature</th>
                  {packages.map(pkg => (
                    <th key={pkg.id} className="py-4 px-4 text-center">
                      <div className="rajdhani-font text-gfx-white font-bold text-lg">{pkg.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gfx-white/10">
                  <td className="py-3 px-4 inter-font text-gfx-white/80 text-sm">Timeline</td>
                  {packages.map(pkg => (
                    <td key={pkg.id} className="py-3 px-4 text-center inter-font text-gfx-white/70 text-sm">{pkg.timeline}</td>
                  ))}
                </tr>
                <tr className="border-b border-gfx-white/10">
                  <td className="py-3 px-4 inter-font text-gfx-white/80 text-sm">Pages</td>
                  {packages.map(pkg => (
                    <td key={pkg.id} className="py-3 px-4 text-center inter-font text-gfx-white/70 text-sm">{pkg.deliverables.split(',')[0]}</td>
                  ))}
                </tr>
                <tr className="border-b border-gfx-white/10">
                  <td className="py-3 px-4 inter-font text-gfx-white/80 text-sm">Revisions</td>
                  {packages.map(pkg => (
                    <td key={pkg.id} className="py-3 px-4 text-center inter-font text-gfx-white/70 text-sm">{pkg.revisions}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 inter-font text-gfx-white/80 text-sm">Support Level</td>
                  {packages.map(pkg => (
                    <td key={pkg.id} className="py-3 px-4 text-center inter-font text-gfx-white/70 text-sm">{pkg.supportLevel.split('(')[0]}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative animate-fade-in-up delay-${(index + 1) * 100}`}
              style={{ opacity: 0 }}
            >
              {/* Popular Badge - Overlapping */}
              {pkg.popular && (
                <div className="popular-badge inter-font text-white flex items-center gap-2">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                  <Star className="w-3 h-3 fill-current" />
                </div>
              )}

              <div className={`pricing-card rounded-3xl p-8 flex flex-col h-full ${pkg.popular ? 'popular' : ''}`}>
                {/* Savings Badge */}
                <div className="absolute top-4 right-4 savings-badge rounded-lg px-3 py-1">
                  <span className="inter-font text-gfx-teal text-xs font-bold">Save {pkg.savings}</span>
                </div>

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
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="inter-font text-gfx-white/40 text-xl line-through">{pkg.originalPrice}</span>
                    <Zap className="w-5 h-5 text-gfx-teal" />
                  </div>
                  <div className="rajdhani-font text-gfx-teal text-5xl font-bold mb-2">
                    {pkg.price}
                  </div>
                  <p className="inter-font text-gfx-white/60 text-sm flex items-center justify-center gap-2">
                    <span>{pkg.timeline}</span>
                    <span className="relative has-tooltip">
                      <Info className="w-4 h-4 cursor-help text-gfx-teal/60 hover:text-gfx-teal" />
                      <div className="info-tooltip inter-font text-white">
                        Average completion time
                      </div>
                    </span>
                  </p>
                </div>

                {/* Description */}
                <p className="inter-font text-gfx-white/75 text-sm leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="flex-grow mb-4">
                  <ul className="space-y-3">
                    {pkg.features.slice(0, expandedCard === pkg.id ? undefined : 5).map((feature, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-start gap-2 ${feature.highlight ? 'feature-highlight' : ''}`}
                        onMouseEnter={() => setHoveredFeature(`${pkg.id}-${idx}`)}
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                        <Check 
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-all ${
                            feature.highlight || hoveredFeature === `${pkg.id}-${idx}` 
                              ? 'text-gfx-teal scale-110' 
                              : 'text-gfx-teal/60'
                          }`} 
                        />
                        <span className={`inter-font text-sm leading-snug transition-colors ${
                          feature.highlight ? 'text-gfx-white font-medium' : 'text-gfx-white/80'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable Additional Features */}
                  {pkg.features.length > 5 && (
                    <button
                      onClick={() => toggleCardExpansion(pkg.id)}
                      className="inter-font text-gfx-teal hover:text-gfx-blue text-sm font-semibold flex items-center gap-2 mt-4 transition-colors"
                    >
                      {expandedCard === pkg.id ? 'Show Less' : `+${pkg.features.length - 5} More Features`}
                      <ChevronDown className={`w-4 h-4 transition-transform ${expandedCard === pkg.id ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Deliverables Summary */}
                <div className="mb-4 p-3 bg-gfx-teal/5 rounded-lg border border-gfx-teal/20">
                  <p className="inter-font text-gfx-white/60 text-xs uppercase tracking-wider mb-1 font-semibold">
                    Deliverables
                  </p>
                  <p className="inter-font text-gfx-white/90 text-sm">
                    {pkg.deliverables}
                  </p>
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
                  className={`w-full py-4 rounded-xl inter-font font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden group ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-white'
                      : 'bg-gfx-white/10 hover:bg-gfx-white/20 text-gfx-white border border-gfx-teal/40 hover:border-gfx-teal'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    {selectedPackage === pkg.id && <Check className="w-5 h-5" />}
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="text-center p-2 bg-gfx-white/5 rounded-lg">
                    <div className="rajdhani-font text-gfx-teal text-lg font-bold">{pkg.revisions}</div>
                    <div className="inter-font text-gfx-white/60 text-xs">Revisions</div>
                  </div>
                  <div className="text-center p-2 bg-gfx-white/5 rounded-lg">
                    <div className="rajdhani-font text-gfx-teal text-lg font-bold">{pkg.timeline.split('-')[0]}</div>
                    <div className="inter-font text-gfx-white/60 text-xs">Weeks</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in-up delay-500" style={{ opacity: 0 }}>
          {/* Payment Options */}
          <div className="pricing-card rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="text-3xl mb-3">💳</div>
            <h4 className="rajdhani-font text-gfx-white text-xl font-bold mb-3">
              Payment Options
            </h4>
            <ul className="space-y-2 inter-font text-gfx-white/75 text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gfx-teal" />
                50% deposit, 50% on completion
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gfx-teal" />
                GROWTH: 3 payments of $500
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gfx-teal" />
                SCALE: 4 payments of $500
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gfx-teal" />
                Credit, PayPal, Bank Transfer
              </li>
            </ul>
          </div>

          {/* Rush Service */}
          <div className="pricing-card rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="rajdhani-font text-gfx-white text-xl font-bold mb-3">
              Rush Service Available
            </h4>
            <ul className="space-y-2 inter-font text-gfx-white/75 text-sm">
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gfx-teal" />
                LAUNCH: 1-week (+$200)
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gfx-teal" />
                ELEVATE: 2-week (+$300)
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gfx-teal" />
                GROWTH: 4-week (+$500)
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gfx-teal" />
                SCALE: 6-week (+$750)
              </li>
            </ul>
          </div>

          {/* Our Guarantee */}
          <div className="pricing-card rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="text-3xl mb-3">💯</div>
            <h4 className="rajdhani-font text-gfx-white text-xl font-bold mb-3">
              Our Guarantee
            </h4>
            <ul className="space-y-2 inter-font text-gfx-white/75 text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gfx-teal" />
                Unlimited revisions in scope
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gfx-teal" />
                10% discount if we miss deadline
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gfx-teal" />
                24-48 hour support response
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gfx-teal" />
                100% satisfaction guaranteed
              </li>
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
              { icon: '💻', text: 'Custom-Coded Excellence', desc: 'No templates' },
              { icon: '🔑', text: 'Complete Ownership', desc: 'Your code, forever' },
              { icon: '💎', text: 'No Hidden Fees', desc: 'What you see is what you pay' },
              { icon: '🎯', text: 'Results-Focused', desc: 'ROI-driven design' },
              { icon: '🤝', text: 'Ongoing Partnership', desc: 'Always here for you' },
            ].map((item, idx) => (
              <div key={idx} className="pricing-card rounded-xl p-6 hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <p className="inter-font text-gfx-white text-sm font-semibold leading-snug mb-2">
                  {item.text}
                </p>
                <p className="inter-font text-gfx-white/60 text-xs">
                  {item.desc}
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
          <button className="relative overflow-hidden bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-white inter-font font-bold px-12 py-5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-gfx-teal/50 group border border-gfx-teal/30">
            <span className="relative z-10 flex items-center gap-3 text-lg">
              Schedule a Free Consultation
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          <p className="inter-font text-gfx-white/50 text-sm mt-4">
            No commitment required • Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;