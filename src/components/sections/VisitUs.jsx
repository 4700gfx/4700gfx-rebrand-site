import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Calendar,
  Navigation,
  Coffee,
  Wifi,
  Car,
  Info
} from 'lucide-react';

const VisitUs = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM', status: 'open' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM', status: 'open' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM', status: 'open' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM', status: 'open' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM', status: 'open' },
    { day: 'Saturday', hours: 'By Appointment', status: 'appointment' },
    { day: 'Sunday', hours: 'Closed', status: 'closed' },
  ];

  const amenities = [
    { icon: Coffee, label: 'Complimentary Coffee' },
    { icon: Wifi, label: 'High-Speed WiFi' },
    { icon: Car, label: 'Free Parking' },
    { icon: Calendar, label: 'Meeting Rooms' },
  ];

  // Get current day
  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

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

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(0.95);
            opacity: 1;
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

        .map-container {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.08) 0%, rgba(45, 52, 54, 0.15) 100%);
          border: 1px solid rgba(0, 186, 242, 0.2);
          position: relative;
          overflow: hidden;
        }

        .map-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.1), transparent);
          pointer-events: none;
        }

        .hours-row {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .hours-row:hover {
          background: rgba(0, 186, 242, 0.08);
        }

        .hours-row.current {
          background: linear-gradient(135deg, rgba(0, 186, 242, 0.15), rgba(0, 153, 204, 0.1));
          border-left: 3px solid #00BAF2;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-open {
          background: rgba(34, 197, 94, 0.2);
          color: #22C55E;
          border: 1px solid rgba(34, 197, 94, 0.4);
        }

        .status-appointment {
          background: rgba(251, 191, 36, 0.2);
          color: #FBBF24;
          border: 1px solid rgba(251, 191, 36, 0.4);
        }

        .status-closed {
          background: rgba(239, 68, 68, 0.2);
          color: #EF4444;
          border: 1px solid rgba(239, 68, 68, 0.4);
        }

        .amenity-card {
          background: rgba(0, 186, 242, 0.05);
          border: 1px solid rgba(0, 186, 242, 0.15);
          transition: all 0.3s;
        }

        .amenity-card:hover {
          background: rgba(0, 186, 242, 0.1);
          border-color: rgba(0, 186, 242, 0.3);
          transform: translateY(-2px);
        }

        .contact-link {
          transition: all 0.3s;
          position: relative;
        }

        .contact-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00BAF2, #0099CC);
          transition: width 0.3s;
        }

        .contact-link:hover {
          color: #00BAF2;
        }

        .contact-link:hover::after {
          width: 100%;
        }

        .location-marker {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #00BAF2, #0099CC);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0, 186, 242, 0.5);
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .location-marker-icon {
          transform: rotate(45deg);
        }
      `}</style>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gfx-teal/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gfx-blue/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-[85%] max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-gfx-teal" />
            <span className="rajdhani-font text-gfx-teal font-bold text-sm uppercase tracking-wider">
              Come Visit Us
            </span>
          </div>
          
          <h2 className="inter-font text-gfx-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Let's Meet{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal">
                In Person
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-gfx-teal via-gfx-blue to-gfx-teal rounded-full"></div>
            </span>
          </h2>
          <p className="inter-font text-gfx-white/80 text-lg lg:text-xl max-w-3xl mx-auto">
            We'd love to discuss your project over coffee. Schedule a visit to our Hollywood studio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Map Section */}
          <div className="animate-fade-in-up delay-100">
            <div className="map-container rounded-3xl overflow-hidden h-[500px] relative">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230178.0127716992!2d-80.30966579999999!3d26.011422400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad36f342019d%3A0x7d8bc35036b31b9!2sHollywood%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>

              {/* Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="info-card rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="location-marker flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white location-marker-icon" />
                    </div>
                    <div className="flex-1">
                      <h3 className="rajdhani-font text-gfx-white text-xl font-bold mb-2">
                        4700 GFX Studios
                      </h3>
                      <p className="inter-font text-gfx-white/80 text-sm mb-3">
                        Hollywood, Florida, United States
                      </p>
                      <a
                        href="https://maps.google.com/?q=Hollywood,FL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 inter-font text-gfx-teal hover:text-gfx-blue font-semibold text-sm transition-colors"
                      >
                        <Navigation className="w-4 h-4" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Info Section */}
          <div className="space-y-6 animate-fade-in-up delay-200">
            {/* Business Hours Card */}
            <div className="info-card rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gfx-teal/20 rounded-xl">
                  <Clock className="w-6 h-6 text-gfx-teal" />
                </div>
                <h3 className="rajdhani-font text-gfx-white text-2xl font-bold">
                  Business Hours
                </h3>
              </div>

              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className={`hours-row rounded-lg p-4 ${
                      schedule.day === currentDay ? 'current' : ''
                    }`}
                    onMouseEnter={() => setSelectedDay(schedule.day)}
                    onMouseLeave={() => setSelectedDay(null)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="inter-font text-gfx-white font-semibold">
                        {schedule.day}
                        {schedule.day === currentDay && (
                          <span className="ml-2 text-gfx-teal text-xs">(Today)</span>
                        )}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="inter-font text-gfx-white/80 text-sm">
                          {schedule.hours}
                        </span>
                        <span className={`status-badge status-${schedule.status}`}>
                          {schedule.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gfx-teal/10 rounded-xl border border-gfx-teal/20">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-gfx-teal flex-shrink-0 mt-0.5" />
                  <p className="inter-font text-gfx-white/80 text-sm leading-relaxed">
                    We recommend scheduling appointments in advance to ensure availability. 
                    Walk-ins are welcome during business hours, subject to availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
          </div>
        </div>

        {/* Amenities Section */}
        <div className="animate-fade-in-up delay-300">
          <div className="text-center mb-8">
            <h3 className="rajdhani-font text-gfx-white text-3xl font-bold mb-3">
              Studio Amenities
            </h3>
            <p className="inter-font text-gfx-white/70 text-base">
              Everything you need for a productive and comfortable visit
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="amenity-card rounded-2xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gfx-teal/20 rounded-2xl mb-4">
                  <amenity.icon className="w-8 h-8 text-gfx-teal" />
                </div>
                <p className="inter-font text-gfx-white font-semibold text-sm">
                  {amenity.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up delay-400">
          <p className="inter-font text-gfx-white/80 text-lg mb-6">
            Ready to start your project? Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="relative overflow-hidden bg-gradient-to-r from-gfx-teal to-gfx-blue hover:from-gfx-blue hover:to-gfx-teal text-white inter-font font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-gfx-teal/50 group border border-gfx-teal/30">
              <span className="relative z-10 flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            <a
              href="tel:+15551234567"
              className="inter-font text-gfx-teal hover:text-gfx-blue font-bold px-10 py-4 rounded-xl border-2 border-gfx-teal/40 hover:border-gfx-teal transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;