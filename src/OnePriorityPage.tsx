import React, { useEffect, useRef, useState } from 'react';
import { Heart, Stethoscope, Shield, Award, MapPin, ArrowRight, Phone, Mail, Car, Pill, Smile, Eye, Activity, Leaf, Sparkles, Ear, Footprints, Users } from 'lucide-react';
import logo2 from './assets/logo2.png';

const services = [
  { icon: Stethoscope, name: "Medical Doctors", description: "Comprehensive primary care and specialized medical services with experienced physicians", color: "from-amber-400 to-yellow-500" },
  { icon: Pill, name: "Pharmacy", description: "Full-service pharmacy with prescription medications and health consultations", color: "from-green-400 to-green-600" },
  { icon: Smile, name: "Dental Care", description: "Complete dental services from routine cleanings to advanced procedures", color: "from-teal-400 to-teal-600" },
  { icon: Eye, name: "Optometry", description: "Eye exams, vision correction, and comprehensive eye health services", color: "from-purple-400 to-purple-600" },
  { icon: Activity, name: "Physiotherapy", description: "Rehabilitation and wellness programs for optimal physical health recovery", color: "from-orange-400 to-orange-600" },
  { icon: Leaf, name: "Natural Health", description: "Holistic and alternative healthcare approaches for wellness", color: "from-emerald-400 to-emerald-600" },
  { icon: Sparkles, name: "Medical Aesthetics", description: "Professional cosmetic treatments and skin rejuvenation services", color: "from-pink-400 to-pink-600" },
  { icon: Ear, name: "Hearing Clinics", description: "Comprehensive hearing assessments and hearing aid services", color: "from-indigo-400 to-indigo-600" },
  { icon: Footprints, name: "Podiatry", description: "Specialized foot and ankle care from certified foot doctors", color: "from-amber-400 to-amber-600" },
  { icon: Users, name: "Specialists", description: "Access to various medical specialists for specialized care needs", color: "from-red-400 to-red-600" }
];

export default function OnePriorityPage() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [priorityValuesVisible, setPriorityValuesVisible] = useState(false);
  const [servicesAnimationTriggered, setServicesAnimationTriggered] = useState(false);
  const [priorityAnimationTriggered, setPriorityAnimationTriggered] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const priorityValuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      setCurrentServiceIndex(prev => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Hero animation
  useEffect(() => {
    if (heroContentRef.current && heroContentRef.current.children && !heroAnimated) {
      const heroChildren = Array.from(heroContentRef.current.children) as HTMLElement[];
      if (heroChildren.length > 0) {
        heroChildren.forEach(child => {
          child.style.opacity = '0';
          child.style.transform = 'translateY(60px) scale(0.95)';
        });
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

  // Services section animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !servicesAnimationTriggered) {
            setServicesVisible(true);
            setServicesAnimationTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (servicesSectionRef.current) {
      observer.observe(servicesSectionRef.current);
    }
    return () => observer.disconnect();
  }, [servicesAnimationTriggered]);

  // Priority values animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !priorityAnimationTriggered) {
            setPriorityValuesVisible(true);
            setPriorityAnimationTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (priorityValuesRef.current) {
      observer.observe(priorityValuesRef.current);
    }
    return () => observer.disconnect();
  }, [priorityAnimationTriggered]);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section with Tagline */}
      <section ref={heroRef} className="relative bg-white py-20 sm:py-28 min-h-[80vh] flex items-center mb-8 overflow-hidden mt-[44px] lg:mt-5">
        <div className="absolute inset-0 bg-white"></div>
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-amber-300/70 rounded-full transition-all duration-[2000ms] delay-300 animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-400/60 rounded-full transition-all duration-[2200ms] delay-500 animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-amber-200/50 rounded-full transition-all duration-[2400ms] delay-700 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-amber-400/40 rounded-full transition-all duration-[2600ms] delay-1100 animate-ping"></div>
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroContentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Right Content - Logo with Main Page Hero Style */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 order-1 lg:order-2">
              <div className="relative flex items-center justify-center mb-4">
                {/* Multi-layered glowing circles */}
                <div className="w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center shadow-2xl border border-yellow-400/30 animate-glow backdrop-blur-sm">
                  <div className="w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-full flex items-center justify-center">
                    <div className="w-28 h-28 sm:w-40 sm:h-40 bg-yellow-100/10 rounded-full flex items-center justify-center">
                      <img src={logo2} alt="One Medical Centre Logo" className="w-20 h-20 sm:w-32 sm:h-32 object-contain" />
                    </div>
                  </div>
                </div>
                {/* Floating Lucide icons around the logo */}
                <Heart className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-8 text-yellow-400 drop-shadow-lg animate-float-slow" />
                <MapPin className="absolute top-1/2 -right-10 -translate-y-1/2 w-8 h-8 text-yellow-400 drop-shadow-lg animate-float-medium" />
                <Phone className="absolute -top-2 -left-10 w-7 h-7 text-yellow-400 drop-shadow-lg animate-float-medium" />
                <Mail className="absolute -bottom-2 -right-8 w-7 h-7 text-yellow-400 drop-shadow-lg animate-float-slow" />
                <Car className="absolute -bottom-2 -left-8 w-8 h-8 text-yellow-400 drop-shadow-lg animate-float-fast" />
                {/* Minimal floating accents for subtle depth */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-200 border border-yellow-300 rounded-full opacity-50 blur-sm shadow-md"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-300 border border-yellow-200 rounded-full opacity-40 blur-sm shadow-sm"></div>
                {/* Shimmer and glow keyframes */}
                <style>{`
                  @keyframes float-slow { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
                  @keyframes float-medium { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(-2deg); } }
                  @keyframes float-fast { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(1deg); } }
                  @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(250, 204, 21, 0.3); } 50% { box-shadow: 0 0 30px rgba(250, 204, 21, 0.5); } }
                  .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
                  .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
                  .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
                  .animate-glow { animation: glow 3s ease-in-out infinite; }
                  @keyframes shimmer-light {
                    0% { opacity: 0.4; }
                    50% { opacity: 0.8; }
                    100% { opacity: 0.4; }
                  }
                  .animate-shimmer-light {
                    animation: shimmer-light 2.5s infinite linear;
                  }
                `}</style>
              </div>
            </div>
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1 w-full text-center lg:text-left">
              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                <div className="inline-flex items-center space-x-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium border border-yellow-200">
                  <Heart className="h-4 w-4" />
                  <span>One Priority</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Priority</span>
                </h2>
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                  <h3 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight">
                    Placing your <span className="underline decoration-yellow-600/50">TOTAL</span> health care needs above all.
                  </h3>
                </div>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We believe in comprehensive, patient-centered care that addresses not just your immediate health concerns, 
                  but your overall well-being. Our integrated approach ensures every aspect of your health is our priority.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button
                  className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:from-yellow-500 hover:to-yellow-600 hover:shadow-xl hover:shadow-yellow-400/25 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  aria-label="Book Appointment"
                >
                  <span className="flex items-center space-x-2">
                    <span>Book Appointment</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <a
                  href="#services"
                  className="px-8 py-4 border-2 border-yellow-600 text-yellow-600 font-semibold rounded-xl transition-all duration-300 hover:bg-yellow-50 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center"
                  tabIndex={0}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section ref={servicesSectionRef} id="services" className="py-24 sm:py-32 min-h-[90vh] flex items-center justify-center overflow-hidden relative">
        {/* Animated Background with Parallax Effect */}
        <div className="absolute inset-0 bg-white"></div>
        {/* Animated floating elements */}
        <div className={`absolute top-10 left-10 w-3 h-3 bg-amber-400/60 rounded-full transition-all duration-[1500ms] delay-300 ${servicesVisible ? 'opacity-100 animate-ping' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-20 right-20 w-4 h-4 bg-yellow-500/60 rounded-full transition-all duration-[1700ms] delay-500 ${servicesVisible ? 'opacity-100 animate-pulse' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-20 left-20 w-5 h-5 bg-amber-200/50 rounded-full transition-all duration-[1900ms] delay-700 ${servicesVisible ? 'opacity-100 animate-bounce' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-10 right-10 w-3 h-3 bg-amber-400/40 rounded-full transition-all duration-[2100ms] delay-900 ${servicesVisible ? 'opacity-100 animate-ping' : 'opacity-0 scale-0'}`}></div>
        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-yellow-50 text-yellow-600 px-6 py-3 rounded-full text-sm font-medium border border-yellow-200 mb-6">
              <Stethoscope className="h-4 w-4" />
              <span>Our Services</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-700">Healthcare Services</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Comprehensive medical services designed to meet all your healthcare needs under one roof.
            </p>
          </div>
          {/* Services Carousel with Enhanced Animation */}
          <div className={`relative h-72 sm:h-80 md:h-96 lg:h-[28rem] flex items-center justify-center overflow-visible px-2 sm:px-4 transition-all duration-1000 ease-out transform ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="relative flex items-center justify-center w-full">
              {services.map((service, index) => {
                const Icon = service.icon;
                const offset = index - currentServiceIndex;
                const absOffset = Math.abs(offset);
                // Responsive card spacing and sizing
                const getCardStyles = () => {
                  const baseSpacing = window.innerWidth < 480 ? 160 : 
                                     window.innerWidth < 768 ? 200 : 
                                     window.innerWidth < 1024 ? 240 : 290;
                  const baseTranslateX = offset * baseSpacing;
                  if (offset === 0) {
                    return {
                      transform: `translateX(${baseTranslateX}px) scale(1)`,
                      opacity: 1,
                      zIndex: 10,
                      width: window.innerWidth < 480 ? '280px' : 
                             window.innerWidth < 768 ? '300px' : 
                             window.innerWidth < 1024 ? '320px' : '340px',
                      height: window.innerWidth < 480 ? '300px' : 
                              window.innerWidth < 768 ? '320px' : 
                              window.innerWidth < 1024 ? '340px' : '360px',
                    };
                  } else if (absOffset === 1) {
                    return {
                      transform: `translateX(${baseTranslateX}px) scale(0.88)`,
                      opacity: 0.75,
                      zIndex: 5,
                      width: window.innerWidth < 480 ? '240px' : 
                             window.innerWidth < 768 ? '260px' : 
                             window.innerWidth < 1024 ? '280px' : '300px',
                      height: window.innerWidth < 480 ? '260px' : 
                              window.innerWidth < 768 ? '280px' : 
                              window.innerWidth < 1024 ? '300px' : '320px',
                    };
                  } else if (absOffset === 2) {
                    return {
                      transform: `translateX(${baseTranslateX}px) scale(0.75)`,
                      opacity: 0.4,
                      zIndex: 2,
                      width: window.innerWidth < 480 ? '200px' : 
                             window.innerWidth < 768 ? '220px' : 
                             window.innerWidth < 1024 ? '240px' : '260px',
                      height: window.innerWidth < 480 ? '220px' : 
                              window.innerWidth < 768 ? '240px' : 
                              window.innerWidth < 1024 ? '260px' : '280px',
                    };
                  } else {
                    return {
                      transform: `translateX(${baseTranslateX}px) scale(0.6)`,
                      opacity: 0,
                      zIndex: 0,
                      width: '180px',
                      height: '200px',
                    };
                  }
                };
                const cardStyles = getCardStyles();
                const isActive = offset === 0;
                return (
                  <div
                    key={index}
                    className={`absolute group rounded-3xl border transition-all duration-700 ease-out cursor-pointer backdrop-blur-sm shadow-xl
                      bg-gradient-to-br from-white/95 to-amber-50/80 border-gray-200/60
                      hover:border-amber-300/60 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-4 hover:scale-[1.02]
                      ${isActive ? '' : absOffset === 1 ? '' : absOffset === 2 ? '' : ''}
                    `}
                    style={{
                      transform: cardStyles.transform,
                      opacity: cardStyles.opacity,
                      zIndex: cardStyles.zIndex,
                      width: cardStyles.width,
                      height: cardStyles.height,
                      pointerEvents: cardStyles.opacity < 0.3 ? 'none' : 'auto',
                    }}
                    onClick={() => {
                      setCurrentServiceIndex(index);
                      setIsAutoScrolling(false);
                      setTimeout(() => setIsAutoScrolling(true), 8000);
                    }}
                  >
                    <div className={`flex flex-col items-center text-center h-full justify-center transition-all duration-500 ${
                      isActive ? 'p-6' : absOffset === 1 ? 'p-4' : 'p-3'
                    }`}>
                      <div className={`relative rounded-2xl transition-all duration-500 flex-shrink-0 mb-4 p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-lg`}>
                        <Icon className={`h-10 w-10 text-yellow-600`} />
                      </div>
                      <div className="space-y-3 flex-1 flex flex-col justify-center min-h-0">
                        <h4 className={`font-bold text-gray-900 transition-all duration-500 leading-tight ${
                          isActive ? 'text-xl' : absOffset === 1 ? 'text-lg' : 'text-base'
                        }`}>
                          {service.name}
                        </h4>
                        {isActive && (
                          <div className="relative">
                            <p className="text-gray-700 leading-relaxed transition-all duration-500 text-sm px-2 line-clamp-4">
                              {service.description}
                            </p>
                            {/* Divider: subtle neutral */}
                            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-100 to-yellow-100 mx-auto mt-3 rounded-full"></div>
                          </div>
                        )}
                        {absOffset === 1 && (
                          <p className="text-gray-500 leading-relaxed transition-all duration-500 text-xs px-1 opacity-75 line-clamp-3">
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
          {/* Navigation dots with animation */}
          <div className={`flex justify-center mt-8 space-x-2 transition-all duration-1000 ease-out transform ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentServiceIndex 
                    ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => {
                  setCurrentServiceIndex(index);
                  setIsAutoScrolling(false);
                  setTimeout(() => setIsAutoScrolling(true), 8000);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Priority Values Section */}
              <section ref={priorityValuesRef} className="py-24 sm:py-32 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-white"></div>
        <div className={`absolute top-20 left-10 w-4 h-4 bg-amber-400/40 rounded-full transition-all duration-[1500ms] delay-300 ${priorityValuesVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute top-40 right-20 w-3 h-3 bg-yellow-500/60 rounded-full transition-all duration-[1500ms] delay-500 ${priorityValuesVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 left-20 w-5 h-5 bg-amber-200/30 rounded-full transition-all duration-[1500ms] delay-700 ${priorityValuesVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            priorityValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-yellow-50 text-yellow-600 px-6 py-3 rounded-full text-sm font-medium border border-yellow-200 mb-6">
              <Heart className="h-4 w-4" />
              <span>Our Values</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-700">Different</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Our commitment to excellence drives everything we do, ensuring you receive the highest quality healthcare experience.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { 
                icon: Shield, 
                title: "Comprehensive Care", 
                description: "We address all aspects of your health, from preventive care to complex medical conditions, ensuring nothing is overlooked.",
                delay: 200
              },
              { 
                icon: Heart, 
                title: "Patient-Centered", 
                description: "Your health goals and concerns drive every decision we make, ensuring personalized care that fits your unique needs.",
                delay: 400
              },
              { 
                icon: Award, 
                title: "Excellence in Service", 
                description: "We maintain the highest standards of medical care, continuously improving our services to exceed your expectations.",
                delay: 600
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className={`text-center group transition-all duration-1000 ease-out transform ${
                    priorityValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${value.delay}ms` }}
                >
                  <div className="bg-gradient-to-br from-white to-amber-50 group-hover:from-yellow-500/10 group-hover:to-yellow-700/10 transition-all duration-500 p-6 rounded-2xl w-fit mx-auto mb-6 shadow-xl border border-stone-200 group-hover:border-yellow-500/30 group-hover:shadow-2xl group-hover:shadow-yellow-500/10 group-hover:-translate-y-2">
                    <Icon className="h-10 w-10 text-yellow-400 group-hover:scale-110 group-hover:text-yellow-300 transition-all duration-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}