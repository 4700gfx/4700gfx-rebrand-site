import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Building2,
  Calendar,
  Package,
  CheckCircle2,
  ArrowUpRight,
  Award,
  TrendingUp
} from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      company: 'GreenLeaf Organics',
      industry: 'E-commerce',
      avatar: '👩‍💼',
      avatarBg: 'from-emerald-500 to-teal-500',
      rating: 5,
      year: 2024,
      service: 'E-Commerce Solutions',
      package: 'GROWTH',
      projectDuration: '6 weeks',
      testimonial: 'Working with 4700 GFX Studios was an absolute game-changer for our business. They transformed our outdated website into a stunning, high-converting e-commerce platform that has increased our sales by 340% in just three months. The team\'s attention to detail, strategic thinking, and technical expertise exceeded all expectations.',
      results: [
        { metric: '340%', label: 'Sales Increase' },
        { metric: '2.5x', label: 'Traffic Growth' },
        { metric: '85%', label: 'Mobile Conversion' }
      ],
      beforeAfter: {
        before: 'Struggling with 2% conversion rate',
        after: 'Now converting at 6.8%'
      }
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'Marketing Director',
      company: 'TechForward Inc.',
      industry: 'SaaS Technology',
      avatar: '👨‍💻',
      avatarBg: 'from-blue-500 to-indigo-500',
      rating: 5,
      year: 2024,
      service: 'Web Design & Brand Identity',
      package: 'SCALE',
      projectDuration: '10 weeks',
      testimonial: 'From brand identity to a fully responsive website, 4700 GFX delivered excellence at every stage. Their strategic approach to design and development resulted in a platform that not only looks incredible but performs flawlessly. Our bounce rate dropped by 58%, and user engagement metrics are through the roof.',
      results: [
        { metric: '58%', label: 'Lower Bounce Rate' },
        { metric: '4.2min', label: 'Avg. Session Time' },
        { metric: '210%', label: 'Lead Generation' }
      ],
      beforeAfter: {
        before: 'Generic website with low engagement',
        after: 'Premium brand with loyal following'
      }
    },
    {
      id: 3,
      name: 'Jennifer Lee',
      role: 'Owner',
      company: 'Serene Wellness Spa',
      industry: 'Health & Wellness',
      avatar: '👩‍⚕️',
      avatarBg: 'from-purple-500 to-pink-500',
      rating: 5,
      year: 2023,
      service: 'UI/UX Design & Development',
      package: 'ELEVATE',
      projectDuration: '5 weeks',
      testimonial: 'As a small business owner, I was worried about the complexity and cost of a professional website. 4700 GFX made the entire process seamless and affordable. The booking system they integrated has automated 80% of our appointment scheduling, saving us countless hours. Our online bookings have tripled!',
      results: [
        { metric: '3x', label: 'Online Bookings' },
        { metric: '80%', label: 'Automation Rate' },
        { metric: '15hrs', label: 'Time Saved Weekly' }
      ],
      beforeAfter: {
        before: 'Manual phone bookings only',
        after: 'Automated 24/7 online system'
      }
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Creative Director',
      company: 'Urban Threads Apparel',
      industry: 'Fashion & Retail',
      avatar: '👨‍🎨',
      avatarBg: 'from-orange-500 to-red-500',
      rating: 5,
      year: 2024,
      service: 'E-Commerce & Brand Strategy',
      package: 'GROWTH',
      projectDuration: '8 weeks',
      testimonial: 'The team at 4700 GFX understood our vision from day one. They created a brand identity that perfectly captures our aesthetic and built an e-commerce platform that our customers love. The custom features they developed have streamlined our operations and enhanced the shopping experience. Can\'t recommend them enough!',
      results: [
        { metric: '425%', label: 'Revenue Growth' },
        { metric: '92%', label: 'Customer Satisfaction' },
        { metric: '4.8★', label: 'Store Rating' }
      ],
      beforeAfter: {
        before: 'Shopify template with basic features',
        after: 'Custom platform with unique UX'
      }
    },
    {
      id: 5,
      name: 'Dr. Amanda Foster',
      role: 'Practice Owner',
      company: 'Foster Dental Care',
      industry: 'Healthcare',
      avatar: '👩‍⚕️',
      avatarBg: 'from-cyan-500 to-blue-500',
      rating: 5,
      year: 2023,
      service: 'Website Design & SEO',
      package: 'ELEVATE',
      projectDuration: '4 weeks',
      testimonial: 'Our old website was outdated and not generating leads. 4700 GFX built us a modern, patient-friendly website with SEO that actually works. We\'ve gone from page 3 to page 1 on Google for our key services, and new patient inquiries have increased by 280%. The ROI has been phenomenal.',
      results: [
        { metric: '280%', label: 'New Patients' },
        { metric: '#1', label: 'Google Ranking' },
        { metric: '850%', label: 'SEO Traffic' }
      ],
      beforeAfter: {
        before: 'Page 3 on Google searches',
        after: 'Ranking #1 for key terms'
      }
    },
    {
      id: 6,
      name: 'Robert Chen',
      role: 'CEO',
      company: 'CloudSync Solutions',
      industry: 'Cloud Services',
      avatar: '👨‍💼',
      avatarBg: 'from-violet-500 to-purple-500',
      rating: 5,
      year: 2024,
      service: 'Full Digital Transformation',
      package: 'SCALE',
      projectDuration: '12 weeks',
      testimonial: 'We needed a complete digital overhaul - brand, website, marketing materials, everything. 4700 GFX delivered beyond our wildest expectations. The cohesive brand system they created has elevated our market presence, and the enterprise-level website positions us as industry leaders. This investment has already paid for itself.',
      results: [
        { metric: '590%', label: 'Enterprise Leads' },
        { metric: '$2.4M', label: 'Pipeline Value' },
        { metric: '45%', label: 'Close Rate' }
      ],
      beforeAfter: {
        before: 'Inconsistent brand, generic site',
        after: 'Cohesive identity, premium platform'
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
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

        .testimonial-card {
          animation: fadeIn 0.6s ease-out;
        }

        .stat-item {
          animation: slideIn 0.5s ease-out;
        }

        .stat-item:nth-child(1) { animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards; }
        .stat-item:nth-child(2) { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
        .stat-item:nth-child(3) { animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards; }

        .info-card {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.08) 0%, rgba(45, 52, 54, 0.15) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 186, 242, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .info-card:hover {
          border-color: rgba(0, 186, 242, 0.5);
          box-shadow: 0 8px 24px rgba(0, 186, 242, 0.2);
          transform: translateY(-4px);
        }

        .avatar-container {
          animation: float 3s ease-in-out infinite;
        }

        .quote-icon {
          animation: float 4s ease-in-out infinite;
        }

        .nav-button {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.15), rgba(0, 153, 204, 0.2));
          border: 1px solid rgba(0, 186, 242, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.3), rgba(0, 153, 204, 0.4));
          border-color: rgba(0, 186, 242, 0.6);
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(0, 186, 242, 0.3);
        }

        .nav-button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .nav-button:disabled:hover {
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

        .badge {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.2), rgba(0, 153, 204, 0.3));
          border: 1px solid rgba(0, 186, 242, 0.4);
          backdrop-filter: blur(5px);
        }

        .result-card {
          background: rgba(0, 186, 242, 0.05);
          border: 1px solid rgba(0, 186, 242, 0.2);
          transition: all 0.3s;
        }

        .result-card:hover {
          background: rgba(0, 186, 242, 0.1);
          border-color: rgba(0, 186, 242, 0.4);
          transform: translateY(-2px);
        }

        .verified-badge {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(22, 163, 74, 0.3));
          border: 1px solid rgba(34, 197, 94, 0.4);
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gfx-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gfx-blue/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-[85%] max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 badge rounded-full px-6 py-2">
            <Award className="w-5 h-5 text-gfx-teal" />
            <span className="rajdhani-font text-gfx-teal font-bold text-sm uppercase tracking-wider">
              Client Success Stories
            </span>
          </div>
          
          <h2 className="inter-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Real Results from{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal">
                Real Clients
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal rounded-full"></div>
            </span>
          </h2>
          <p className="inter-font text-gfx-white/80 text-lg lg:text-xl max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped businesses like yours achieve extraordinary growth.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <div className="testimonial-card info-card rounded-3xl p-8 lg:p-12 mb-12">
            {/* Quote Icon */}
            <div className="quote-icon absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-gfx-teal" />
            </div>

            <div className="relative z-10">
              {/* Top Section - Client Info */}
              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                {/* Avatar & Basic Info */}
                <div className="flex items-start gap-6">
                  <div 
                    className={`avatar-container w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center text-4xl lg:text-5xl flex-shrink-0 bg-gradient-to-br ${currentTestimonial.avatarBg}`}
                  >
                    {currentTestimonial.avatar}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="rajdhani-font text-gfx-white text-2xl lg:text-3xl font-bold">
                        {currentTestimonial.name}
                      </h3>
                      <div className="verified-badge rounded-full px-3 py-1 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="inter-font text-green-400 text-xs font-semibold">Verified</span>
                      </div>
                    </div>
                    
                    <p className="inter-font text-gfx-white/80 text-base lg:text-lg mb-3">
                      {currentTestimonial.role}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-gfx-teal" />
                        <span className="inter-font text-gfx-white/70 text-sm">
                          {currentTestimonial.company}
                        </span>
                      </div>
                      <span className="text-gfx-white/30">•</span>
                      <span className="inter-font text-gfx-white/60 text-sm">
                        {currentTestimonial.industry}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="rajdhani-font text-gfx-white/80 text-lg font-bold ml-2">
                        {currentTestimonial.rating}.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-3 lg:min-w-[280px]">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gfx-teal/5 border border-gfx-teal/20">
                    <Package className="w-5 h-5 text-gfx-teal flex-shrink-0" />
                    <div>
                      <p className="inter-font text-gfx-white/60 text-xs uppercase tracking-wider">Package</p>
                      <p className="rajdhani-font text-gfx-white font-bold text-lg">{currentTestimonial.package}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gfx-teal/5 border border-gfx-teal/20">
                    <Calendar className="w-5 h-5 text-gfx-teal flex-shrink-0" />
                    <div>
                      <p className="inter-font text-gfx-white/60 text-xs uppercase tracking-wider">Completed</p>
                      <p className="inter-font text-gfx-white font-semibold">{currentTestimonial.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gfx-teal/5 border border-gfx-teal/20">
                    <TrendingUp className="w-5 h-5 text-gfx-teal flex-shrink-0" />
                    <div>
                      <p className="inter-font text-gfx-white/60 text-xs uppercase tracking-wider">Service</p>
                      <p className="inter-font text-gfx-white font-semibold text-sm">{currentTestimonial.service}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="mb-8">
                <p className="inter-font text-gfx-white/90 text-lg lg:text-xl leading-relaxed">
                  "{currentTestimonial.testimonial}"
                </p>
              </div>

              {/* Results Section */}
              <div className="mb-8">
                <h4 className="rajdhani-font text-gfx-white text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-gfx-teal" />
                  Measurable Results
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {currentTestimonial.results.map((result, index) => (
                    <div key={index} className="stat-item result-card rounded-xl p-4 text-center">
                      <div className="rajdhani-font text-gfx-teal text-3xl lg:text-4xl font-bold mb-1">
                        {result.metric}
                      </div>
                      <div className="inter-font text-gfx-white/70 text-xs lg:text-sm">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before/After */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="inter-font text-red-400 text-xs uppercase tracking-wider mb-2 font-semibold">Before</p>
                  <p className="inter-font text-gfx-white/80 text-sm">{currentTestimonial.beforeAfter.before}</p>
                </div>
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <p className="inter-font text-green-400 text-xs uppercase tracking-wider mb-2 font-semibold">After</p>
                  <p className="inter-font text-gfx-white/80 text-sm">{currentTestimonial.beforeAfter.after}</p>
                </div>
              </div>

              {/* Project Duration */}
              <div className="flex items-center justify-between pt-6 border-t border-gfx-white/10">
                <div className="flex items-center gap-2">
                  <span className="inter-font text-gfx-white/60 text-sm">Project Duration:</span>
                  <span className="inter-font text-gfx-teal font-semibold">{currentTestimonial.projectDuration}</span>
                </div>
                <button className="inter-font text-gfx-teal hover:text-gfx-blue font-semibold text-sm flex items-center gap-2 transition-colors">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="nav-button absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-gfx-white z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="nav-button absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-gfx-white z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="info-card rounded-2xl p-6 text-center">
            <div className="rajdhani-font text-gfx-teal text-4xl lg:text-5xl font-bold mb-2">98%</div>
            <div className="inter-font text-gfx-white/80 text-sm">Client Satisfaction</div>
          </div>
          <div className="info-card rounded-2xl p-6 text-center">
            <div className="rajdhani-font text-gfx-teal text-4xl lg:text-5xl font-bold mb-2">300+</div>
            <div className="inter-font text-gfx-white/80 text-sm">Projects Delivered</div>
          </div>
          <div className="info-card rounded-2xl p-6 text-center">
            <div className="rajdhani-font text-gfx-teal text-4xl lg:text-5xl font-bold mb-2">4.9★</div>
            <div className="inter-font text-gfx-white/80 text-sm">Average Rating</div>
          </div>
          <div className="info-card rounded-2xl p-6 text-center">
            <div className="rajdhani-font text-gfx-teal text-4xl lg:text-5xl font-bold mb-2">5 Years</div>
            <div className="inter-font text-gfx-white/80 text-sm">In Business</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="inter-font text-gfx-white/80 text-lg mb-6">
            Ready to be our next success story?
          </p>
          <button className="relative overflow-hidden bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-white inter-font font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-gfx-teal/50 group border border-gfx-teal/30">
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project Today
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;