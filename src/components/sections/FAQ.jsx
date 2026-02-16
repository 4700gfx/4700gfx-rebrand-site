import React, { useState } from 'react';
import { ChevronDown, Search, MessageCircle, Mail, Phone, Clock } from 'lucide-react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestion, setOpenQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Questions', icon: '📚' },
    { id: 'pricing', name: 'Pricing & Payments', icon: '💳' },
    { id: 'process', name: 'Our Process', icon: '⚙️' },
    { id: 'technical', name: 'Technical', icon: '💻' },
    { id: 'support', name: 'Support', icon: '🤝' },
  ];

  const faqs = [
    {
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers (ACH), and wire transfers for larger projects. All payments are processed securely through Stripe. For payment plans, we offer flexible options on GROWTH and SCALE packages.'
    },
    {
      category: 'pricing',
      question: 'Are there any hidden fees or ongoing costs?',
      answer: 'Absolutely not! The price you see is the price you pay. All our packages include everything listed with no surprise charges. After your free maintenance period ends, optional maintenance is $100-150/month depending on your package. You\'re never locked in—you own all the code and can maintain it yourself or hire anyone you want.'
    },
    {
      category: 'pricing',
      question: 'Can I upgrade my package later?',
      answer: 'Yes! You can upgrade at any time during or after your project. If you upgrade during development, you\'ll only pay the difference. After launch, we\'ll credit what you\'ve already paid toward the upgraded package. We want to grow with your business!'
    },
    {
      category: 'process',
      question: 'What is the typical project timeline?',
      answer: 'Timelines vary by package: LAUNCH (2-4 weeks), ELEVATE (4-6 weeks), GROWTH (6-8 weeks), and SCALE (8-10 weeks). These are from project kickoff to launch. Rush services are available for an additional fee if you need faster delivery. We\'ve never missed a deadline!'
    },
    {
      category: 'process',
      question: 'How involved do I need to be in the process?',
      answer: 'We make it easy! You\'ll need to be available for: initial kickoff call (1 hour), design review meetings (2-3 throughout project), content approval, and final review before launch. We handle all the heavy lifting—you focus on running your business while we build your digital presence.'
    },
    {
      category: 'process',
      question: 'What happens after my website launches?',
      answer: 'Every package includes free maintenance for 1-6 months (depending on package). This covers bug fixes, minor updates, and support. We also provide training documentation and video tutorials. After the free period, optional maintenance starts at $100/month. We\'re always here to support your growth!'
    },
    {
      category: 'technical',
      question: 'Do I own the website and all the code?',
      answer: 'Yes, 100%! Upon final payment, you receive full ownership of all code, designs, and assets. No licensing fees, no restrictions. You can host it anywhere, modify it yourself, or hire another developer. We believe in complete transparency and ownership for our clients.'
    },
    {
      category: 'technical',
      question: 'Will my website be mobile-friendly?',
      answer: 'Absolutely! Every website we create is fully responsive and mobile-first. With 60%+ of traffic coming from mobile devices, we design for smartphones first, then scale up to tablets and desktops. All sites are tested on real devices before launch to ensure perfect performance everywhere.'
    },
    {
      category: 'support',
      question: 'What kind of support do you offer after launch?',
      answer: 'All packages include free maintenance for 1-6 months covering bug fixes, security updates, and minor tweaks. Support response times vary by package: Standard (48hr), Priority (24hr), VIP (4hr). After free maintenance, optional plans start at $100/month with same response times.'
    },
    {
      category: 'support',
      question: 'What if I need changes or updates after my free maintenance period?',
      answer: 'You have three options: 1) Subscribe to our maintenance plan ($100-150/month), 2) Pay hourly for individual updates ($75-125/hr depending on complexity), or 3) Make changes yourself since you own all the code. We\'re flexible and work with what makes sense for your business!'
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

        .faq-card {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.08) 0%, rgba(45, 52, 54, 0.15) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 186, 242, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-card:hover {
          border-color: rgba(0, 186, 242, 0.5);
          box-shadow: 0 8px 24px rgba(0, 186, 242, 0.2);
        }

        .faq-card.active {
          border-color: rgba(0, 186, 242, 0.6);
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.12) 0%, rgba(45, 52, 54, 0.2) 100%);
        }

        .category-btn {
          background: rgba(0, 186, 242, 0.1);
          border: 1px solid rgba(0, 186, 242, 0.2);
          transition: all 0.3s;
        }

        .category-btn:hover {
          background: rgba(0, 186, 242, 0.2);
          border-color: rgba(0, 186, 242, 0.4);
          transform: translateY(-2px);
        }

        .category-btn.active {
          background: linear-gradient(135deg, #00BAF2, #0099CC);
          border-color: #00BAF2;
          box-shadow: 0 4px 16px rgba(0, 186, 242, 0.4);
        }

        .search-input {
          background: rgba(0, 186, 242, 0.05);
          border: 1px solid rgba(0, 186, 242, 0.2);
          transition: all 0.3s;
        }

        .search-input:focus {
          outline: none;
          border-color: rgba(0, 186, 242, 0.6);
          background: rgba(0, 186, 242, 0.1);
          box-shadow: 0 0 0 3px rgba(0, 186, 242, 0.1);
        }

        .answer-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .answer-content.open {
          max-height: 500px;
        }

        .contact-card {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.1) 0%, rgba(45, 52, 54, 0.2) 100%);
          border: 1px solid rgba(0, 186, 242, 0.3);
          transition: all 0.3s;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 186, 242, 0.3);
          border-color: rgba(0, 186, 242, 0.5);
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gfx-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gfx-blue/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-[85%] max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="inter-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Frequently Asked{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal">
                Questions
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal rounded-full"></div>
            </span>
          </h2>
          <p className="inter-font text-gfx-white/80 text-lg lg:text-xl max-w-3xl mx-auto">
            Everything you need to know about working with 4700 GFX Studios
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-fade-in-up delay-100">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gfx-teal/60" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full search-input rounded-xl pl-12 pr-6 py-4 text-gfx-white inter-font"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up delay-200">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-btn rounded-full px-6 py-3 inter-font font-semibold text-sm flex items-center gap-2 ${
                activeCategory === category.id ? 'active text-white' : 'text-gfx-white/80'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16 animate-fade-in-up delay-300">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="inter-font text-gfx-white/60 text-lg">
                No questions found. Try adjusting your search or category filter.
              </p>
            </div>
          ) : (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className={`faq-card rounded-2xl overflow-hidden ${openQuestion === index ? 'active' : ''}`}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-gfx-teal/5 transition-colors"
                >
                  <span className="inter-font text-gfx-white font-semibold text-lg flex-1">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gfx-teal flex-shrink-0 transition-transform duration-300 ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`answer-content ${openQuestion === index ? 'open' : ''}`}>
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-gfx-teal/30 to-transparent mb-4"></div>
                    <p className="inter-font text-gfx-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Still Have Questions Section */}
        <div className="text-center mb-12">
          <h3 className="rajdhani-font text-gfx-white text-3xl lg:text-4xl font-bold mb-8">
            Still Have Questions?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Chat */}
            <div className="contact-card rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gfx-teal/20 rounded-full mb-4">
                <MessageCircle className="w-8 h-8 text-gfx-teal" />
              </div>
              <h4 className="rajdhani-font text-gfx-white text-xl font-bold mb-2">
                Live Chat
              </h4>
              <p className="inter-font text-gfx-white/70 text-sm mb-4">
                Chat with our team in real-time
              </p>
              <button className="inter-font text-gfx-teal hover:text-gfx-blue font-semibold text-sm transition-colors">
                Start Chat →
              </button>
            </div>

            {/* Email */}
            <div className="contact-card rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gfx-teal/20 rounded-full mb-4">
                <Mail className="w-8 h-8 text-gfx-teal" />
              </div>
              <h4 className="rajdhani-font text-gfx-white text-xl font-bold mb-2">
                Email Us
              </h4>
              <p className="inter-font text-gfx-white/70 text-sm mb-4">
                Get a detailed response within 24hrs
              </p>
              <a 
                href="mailto:hello@4700gfx.com"
                className="inter-font text-gfx-teal hover:text-gfx-blue font-semibold text-sm transition-colors"
              >
                hello@4700gfx.com
              </a>
            </div>

            {/* Phone */}
            <div className="contact-card rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gfx-teal/20 rounded-full mb-4">
                <Phone className="w-8 h-8 text-gfx-teal" />
              </div>
              <h4 className="rajdhani-font text-gfx-white text-xl font-bold mb-2">
                Call Us
              </h4>
              <p className="inter-font text-gfx-white/70 text-sm mb-4">
                Speak with a specialist today
              </p>
              <a 
                href="tel:+15551234567"
                className="inter-font text-gfx-teal hover:text-gfx-blue font-semibold text-sm transition-colors"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;