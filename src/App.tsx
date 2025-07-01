import React, { useRef, useEffect, useState } from 'react';
import { Heart, MapPin, Phone, Clock, Car, Stethoscope, Pill, Smile, Eye, Activity, Leaf, Sparkles, Ear, Footprints, UserCheck, ArrowRight, Shield, Users, Award, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';
import pdfFile from './assets/OneMedicalCentre.pdf';

// Simple Error Boundary
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: any }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, info: any) {
    // You can log error here
  }
  render() {
    if (this.state.hasError) {
      return <div style={{ color: 'red', padding: 32 }}><h2>Something went wrong.</h2><pre>{String(this.state.error)}</pre></div>;
    }
    return this.props.children;
  }
}

function App() {
  const services = [
    { icon: Stethoscope, name: "Medical Doctors", description: "Comprehensive primary care and specialized medical services with experienced physicians" },
    { icon: Pill, name: "Pharmacy", description: "Full-service pharmacy with prescription medications and health consultations" },
    { icon: Smile, name: "Dental Care", description: "Complete dental services from routine cleanings to advanced procedures" },
    { icon: Eye, name: "Optometry", description: "Eye exams, vision correction, and comprehensive eye health services" },
    { icon: Activity, name: "Physiotherapy", description: "Rehabilitation and wellness programs for optimal physical health recovery" },
    { icon: Leaf, name: "Natural Health", description: "Holistic and alternative healthcare approaches for wellness" },
    { icon: Sparkles, name: "Medical Aesthetics", description: "Professional cosmetic treatments and skin rejuvenation services" },
    { icon: Ear, name: "Hearing Clinics", description: "Comprehensive hearing assessments and hearing aid services" },
    { icon: Footprints, name: "Podiatry", description: "Specialized foot and ankle care from certified foot doctors" },
    { icon: UserCheck, name: "Specialists", description: "Access to various medical specialists for specialized care needs" }
  ];

  const features = [
    { icon: Shield, title: "Trusted Care", description: "Licensed healthcare professionals with years of experience providing quality medical care" },
    { icon: Users, title: "Comprehensive Team", description: "Multi-disciplinary approach connecting all aspects of your health and wellness" },
    { icon: Award, title: "Quality Service", description: "Committed to providing exceptional patient care and outstanding health outcomes" }
  ];

  const heroRef = useRef(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const servicesContainerRef = useRef<HTMLDivElement>(null);
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  // Auto-scroll services
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const interval = setInterval(() => {
      setCurrentServiceIndex(prev => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, services.length]);

  // Hero Animation - only run once
  useEffect(() => {
    if (heroContentRef.current && heroContentRef.current.children && !heroAnimated) {
      const heroChildren = Array.from(heroContentRef.current.children) as HTMLElement[];
      if (heroChildren.length > 0) {
        // Set initial state
        heroChildren.forEach(child => {
          child.style.opacity = '0';
          child.style.transform = 'translateY(60px) scale(0.95)';
        });

        // Animate in
        heroChildren.forEach((child, index) => {
          setTimeout(() => {
            child.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            child.style.opacity = '1';
            child.style.transform = 'translateY(0px) scale(1)';
          }, 300 + (index * 200));
        });

        setHeroAnimated(true);
      }
    }
  }, [heroAnimated]);

  // Services animation
  useEffect(() => {
    const validCards = serviceCardsRef.current.filter(Boolean) as HTMLElement[];
    if (validCards.length > 0) {
      validCards.forEach((card, index) => {
        const isActive = index === currentServiceIndex;
        card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.transform = `scale(${isActive ? 1.05 : 0.9}) translateY(${isActive ? -20 : 0}px)`;
        card.style.opacity = isActive ? '1' : '0.6';
        card.style.zIndex = isActive ? '10' : '1';
      });
    }
  }, [currentServiceIndex]);

  // Scroll to contact section
  const handleBookAppointment = () => {
    setMobileNavOpen(false);
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-900 overflow-x-hidden">
        {/* Header */}
        <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                  <img src={logo} alt="One Medical Centre Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white tracking-tight">One Medical Centre</h1>
                  <p className="text-sm font-medium text-yellow-400">Complete Healthcare Destination</p>
                </div>
              </div>
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
                <a href="#services" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded" tabIndex={0}>Services</a>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded" tabIndex={0}>About</a>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded" tabIndex={0}>Contact</a>
              </nav>
              {/* Mobile Hamburger */}
              <button
                className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                aria-label="Open navigation menu"
                onClick={() => setMobileNavOpen(v => !v)}
              >
                <span className="sr-only">Open navigation menu</span>
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* Mobile Nav Drawer */}
            {mobileNavOpen && (
              <nav className="md:hidden absolute top-20 left-0 w-full bg-gray-900 border-b border-gray-800/50 z-50 flex flex-col items-center py-6 space-y-4 animate-fade-in" aria-label="Mobile Navigation">
                <a href="#services" className="text-gray-300 hover:text-yellow-400 font-medium text-lg" onClick={() => setMobileNavOpen(false)}>Services</a>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 font-medium text-lg" onClick={() => setMobileNavOpen(false)}>About</a>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400 font-medium text-lg" onClick={() => setMobileNavOpen(false)}>Contact</a>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section ref={heroRef} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28 min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div ref={heroContentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Right Content - Logo (show first on mobile) */}
              <div className="flex justify-center lg:justify-end mt-12 lg:mt-0 order-1 lg:order-2">
                <div className="relative">
                  <div className="w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-400/30 mx-auto">
                    <div className="w-40 sm:w-56 h-40 sm:h-56 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                      <img src={logo2} alt="One Medical Centre Hero Logo" className="w-28 sm:w-40 h-28 sm:h-40 object-contain" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
              {/* Left Content (show second on mobile) */}
              <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/20">
                    <MapPin className="h-4 w-4" />
                    <span>Located in Mississauga</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Complete Healthcare</span> Destination
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Located across from Square One Shopping Centre, our integrated medical facility brings together specialists, 
                    pharmacy, dental care, and wellness services under one roof for your convenience.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:from-yellow-300 hover:to-yellow-400 hover:shadow-xl hover:shadow-yellow-400/25 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    onClick={handleBookAppointment}
                    aria-label="Book Appointment"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Book Appointment</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <a
                    href={pdfFile}
                    className="px-8 py-4 border-2 border-yellow-400/50 text-yellow-400 font-semibold rounded-xl transition-all duration-300 hover:bg-yellow-400/10 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center"
                    tabIndex={0}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                  <a
                    href="tel:+16476602591"
                    className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700/50 text-gray-300 text-sm hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    aria-label="Call +647 660 2591"
                  >
                    <Phone className="h-5 w-5 text-yellow-400" />
                    <span>+647 660 2591</span>
                  </a>
                  <a
                    href="mailto:onemedicalmississauga@gmail.com"
                    className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700/50 text-gray-300 text-sm hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    aria-label="Email Us"
                  >
                    <Mail className="h-5 w-5 text-yellow-400" />
                    <span>Email Us</span>
                  </a>
                  <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700/50">
                    <Car className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Free Parking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 sm:py-24 bg-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-20">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Healthcare Services</span>
              </h3>
              <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our integrated approach brings together multiple healthcare disciplines under one roof, 
                providing seamless and coordinated care for all your health needs.
              </p>
            </div>
            {/* Services Cards */}
            <div ref={servicesContainerRef} className="relative h-80 sm:h-96 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-full">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = index === currentServiceIndex;
                  const offset = index - currentServiceIndex;
                  
                  // Calculate position and styling based on offset from active card
                  const getCardStyles = () => {
                    if (offset === 0) {
                      // Active card - center
                      return {
                        transform: 'translateX(0) scale(1.05) translateY(-20px)',
                        opacity: 1,
                        zIndex: 10,
                        width: '20rem',
                        height: '20rem'
                      };
                    } else if (Math.abs(offset) === 1) {
                      // Adjacent cards
                      return {
                        transform: `translateX(${offset > 0 ? '280px' : '-280px'}) scale(0.9)`,
                        opacity: 0.6,
                        zIndex: 5,
                        width: '16rem',
                        height: '16rem'
                      };
                    } else if (Math.abs(offset) === 2) {
                      // Far cards
                      return {
                        transform: `translateX(${offset > 0 ? '480px' : '-480px'}) scale(0.75)`,
                        opacity: 0.3,
                        zIndex: 1,
                        width: '14rem',
                        height: '14rem'
                      };
                    } else {
                      // Hidden cards
                      return {
                        transform: `translateX(${offset > 0 ? '600px' : '-600px'}) scale(0.6)`,
                        opacity: 0,
                        zIndex: 0,
                        width: '12rem',
                        height: '12rem'
                      };
                    }
                  };

                  const cardStyles = getCardStyles();

                  return (
                    <div
                      key={index}
                      ref={el => serviceCardsRef.current[index] = el}
                      className={`absolute bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border transition-all duration-700 cursor-pointer flex flex-col items-center
                        ${isActive ? 'border-yellow-400/50 shadow-2xl shadow-yellow-400/20' :
                          Math.abs(offset) === 1 ? 'border-gray-700/50' : 'border-gray-800/50'}
                      `}
                      style={{
                        transform: cardStyles.transform,
                        opacity: cardStyles.opacity,
                        zIndex: cardStyles.zIndex,
                        width: cardStyles.width,
                        height: cardStyles.height,
                        pointerEvents: cardStyles.opacity < 0.5 ? 'none' : 'auto',
                      }}
                      onClick={() => {
                        setCurrentServiceIndex(index);
                        setIsAutoScrolling(false);
                        setTimeout(() => setIsAutoScrolling(true), 10000);
                      }}
                    >
                      <div className="flex flex-col items-center text-center h-full justify-center space-y-6">
                        <div className={`${isActive ? 'bg-yellow-400/20 p-4' : 'bg-gray-700/50 p-3'} rounded-2xl transition-all duration-500`}>
                          <Icon className={`${isActive ? 'h-8 w-8' : 'h-6 w-6'} text-yellow-400 transition-all duration-500`} />
                        </div>
                        <div className="space-y-3">
                          <h4 className={`${isActive ? 'text-xl' : 'text-lg'} font-semibold text-white transition-all duration-500`}>
                            {service.name}
                          </h4>
                          {isActive && (
                            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                              {service.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id='about' className="py-20 sm:py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 group-hover:from-yellow-400/20 group-hover:to-yellow-600/20 transition-all duration-300 p-6 rounded-2xl w-fit mx-auto mb-8 shadow-xl border border-gray-700/50 group-hover:border-yellow-400/30">
                      <Icon className="h-10 w-10 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-lg max-w-sm mx-auto">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactSectionRef} className="py-20 sm:py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-white">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                  Visit Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Today</span>
                </h3>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
                  Conveniently located across from Square One Shopping Centre with ample free parking available for all patients.
                </p>
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { icon: MapPin, title: "Address", detail: "Across from Square One Shopping Centre, Mississauga, ON" },
                    { icon: Phone, title: "Phone", detail: "+647 660 2591", link: "tel:+16476602591" },
                    { icon: Mail, title: "Email", detail: "onemedicalmississauga@gmail.com", link: "mailto:onemedicalmississauga@gmail.com" },
                    { icon: Car, title: "Parking", detail: "Unlimited underground & above ground parking" }
                  ].map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 sm:space-x-6 group">
                        <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 group-hover:from-yellow-400/30 group-hover:to-yellow-600/30 p-3 sm:p-4 rounded-xl transition-all duration-300 border border-yellow-400/20">
                          <Icon className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-base sm:text-lg text-yellow-400 mb-1">{contact.title}</p>
                          {contact.link ? (
                            <a
                              href={contact.link}
                              className="text-gray-300 text-base sm:text-lg leading-relaxed hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                              aria-label={contact.title}
                            >
                              {contact.detail}
                            </a>
                          ) : (
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{contact.detail}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 sm:p-12 rounded-3xl border border-gray-700/50 shadow-2xl mt-12 lg:mt-0">
                <h4 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">Ready to Get Started?</h4>
                <div className="space-y-4 sm:space-y-6">
                  <a
                    href="tel:+16476602591"
                    className="w-full block px-8 py-4 border-2 border-yellow-400/50 text-yellow-400 font-semibold rounded-xl transition-all duration-300 hover:bg-yellow-400/10 hover:border-yellow-400 text-center focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    aria-label="Call Us Now"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800/50 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src={logo} alt="One Medical Centre Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">One Medical Centre</h5>
                    <p className="text-gray-400 text-sm">Complete Healthcare Destination</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg max-w-md">
                  Your trusted healthcare partner in Mississauga, offering comprehensive medical services under one roof with a focus on quality care and patient satisfaction.
                </p>
              </div>
              
              <div>
                <h6 className="font-semibold mb-6 text-yellow-400 text-lg">Services</h6>
                <ul className="space-y-3 text-gray-400">
                  {['Medical Care', 'Dental Services', 'Eye Care', 'Physiotherapy', 'Pharmacy'].map((service, index) => (
                    <li key={index} className="hover:text-yellow-400 transition-colors cursor-pointer">{service}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h6 className="font-semibold mb-6 text-yellow-400 text-lg">Contact</h6>
                <ul className="space-y-3 text-gray-400">
                  <li>Mississauga, ON</li>
                  <li>Across from Square One</li>
                  <li>Free Parking Available</li>
                  <li className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-pointer">
                    <Phone className="h-4 w-4" /> +647 660 2591
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center text-gray-400">
              <p>&copy; 2024 One Medical Centre. All rights reserved. Your health is our priority.</p>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;