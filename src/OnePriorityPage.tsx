import React, { useEffect, useRef, useState } from 'react';
import { Heart, MapPin, ArrowRight, Phone, Mail, Car, Shield, Award } from 'lucide-react';
import logo2 from './assets/logo2.png';

const services = [
  { icon: Heart, name: "Medical Doctors", description: "Comprehensive primary care and specialized medical services with experienced physicians" },
  { icon: Heart, name: "Pharmacy", description: "Full-service pharmacy with prescription medications and health consultations" },
  { icon: Heart, name: "Dental Care", description: "Complete dental services from routine cleanings to advanced procedures" },
  { icon: Heart, name: "Optometry", description: "Eye exams, vision correction, and comprehensive eye health services" },
  { icon: Heart, name: "Physiotherapy", description: "Rehabilitation and wellness programs for optimal physical health recovery" },
  { icon: Heart, name: "Natural Health", description: "Holistic and alternative healthcare approaches for wellness" },
  { icon: Heart, name: "Medical Aesthetics", description: "Professional cosmetic treatments and skin rejuvenation services" },
  { icon: Heart, name: "Hearing Clinics", description: "Comprehensive hearing assessments and hearing aid services" },
  { icon: Heart, name: "Podiatry", description: "Specialized foot and ankle care from certified foot doctors" },
  { icon: Heart, name: "Specialists", description: "Access to various medical specialists for specialized care needs" }
];

export default function OnePriorityPage() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [heroAnimated, setHeroAnimated] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Tagline */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28 min-h-[80vh] flex items-center mb-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroContentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Right Content - Logo (show first on mobile) */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 order-1 lg:order-2">
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
            <div className="space-y-8 order-2 lg:order-1 w-full">
              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0 lg:text-left text-center">
                <div className="inline-flex items-center space-x-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/20">
                  <Heart className="h-4 w-4" />
                  <span>One Priority</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  Our Priority:
                </h2>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  <h3 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight">
                    Placing your <span className="underline decoration-yellow-400/50">TOTAL</span> health care needs above all.
                  </h3>
                </div>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We believe in comprehensive, patient-centered care that addresses not just your immediate health concerns, 
                  but your overall well-being. Our integrated approach ensures every aspect of your health is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Healthcare Services</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Comprehensive medical services designed to meet all your healthcare needs under one roof.
            </p>
          </div>
          
          {/* Services Carousel */}
          <div className="relative h-80 sm:h-96 flex items-center justify-center overflow-hidden">
            <div className="relative flex items-center justify-center w-full">
              {services.map((service, index) => {
                const Icon = service.icon;
                const offset = index - currentServiceIndex;
                
                // Calculate position and scale based on offset
                const getCardStyles = () => {
                  const baseTranslateX = offset * 300; // 300px spacing between cards
                  const absOffset = Math.abs(offset);
                  
                  if (offset === 0) {
                    // Center card
                    return {
                      transform: `translateX(${baseTranslateX}px) scale(1.1) translateY(-10px)`,
                      opacity: 1,
                      zIndex: 10,
                      width: '280px',
                      height: '320px'
                    };
                  } else if (absOffset === 1) {
                    // Adjacent cards
                    return {
                      transform: `translateX(${baseTranslateX}px) scale(0.9)`,
                      opacity: 0.7,
                      zIndex: 5,
                      width: '240px',
                      height: '280px'
                    };
                  } else if (absOffset === 2) {
                    // Second level cards
                    return {
                      transform: `translateX(${baseTranslateX}px) scale(0.75)`,
                      opacity: 0.4,
                      zIndex: 2,
                      width: '200px',
                      height: '240px'
                    };
                  } else {
                    // Hidden cards
                    return {
                      transform: `translateX(${baseTranslateX}px) scale(0.6)`,
                      opacity: 0,
                      zIndex: 0,
                      width: '160px',
                      height: '200px'
                    };
                  }
                };
                
                const cardStyles = getCardStyles();
                const isActive = offset === 0;
                
                return (
                  <div
                    key={index}
                    className={`absolute bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border transition-all duration-700 ease-out cursor-pointer flex flex-col items-center justify-center
                      ${isActive ? 'border-yellow-400/50 shadow-2xl shadow-yellow-400/20' :
                        Math.abs(offset) === 1 ? 'border-gray-700/50 shadow-lg' : 'border-gray-800/50'}`}
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
                    <div className="flex flex-col items-center text-center h-full justify-center space-y-4">
                      <div className={`${isActive ? 'bg-yellow-400/20 p-4' : 'bg-gray-700/50 p-3'} rounded-2xl transition-all duration-500`}>
                        <Icon className={`${isActive ? 'h-8 w-8' : 'h-6 w-6'} text-yellow-400 transition-all duration-500`} />
                      </div>
                      <div className="space-y-2">
                        <h4 className={`${isActive ? 'text-lg' : 'text-base'} font-semibold text-white transition-all duration-500`}>
                          {service.name}
                        </h4>
                        {isActive && (
                          <p className="text-gray-300 text-sm leading-relaxed max-w-xs px-2 transition-all duration-500">
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
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentServiceIndex 
                    ? 'bg-yellow-400 scale-125' 
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

      {/* Priority Values */}
      <section className="py-16 sm:py-20 bg-gray-800">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { icon: Shield, title: "Comprehensive Care", description: "We address all aspects of your health, from preventive care to complex medical conditions, ensuring nothing is overlooked." },
              { icon: Heart, title: "Patient-Centered", description: "Your health goals and concerns drive every decision we make, ensuring personalized care that fits your unique needs." },
              { icon: Award, title: "Excellence in Service", description: "We maintain the highest standards of medical care, continuously improving our services to exceed your expectations." }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 group-hover:from-yellow-400/20 group-hover:to-yellow-600/20 transition-all duration-300 p-6 rounded-2xl w-fit mx-auto mb-6 shadow-xl border border-gray-700/50 group-hover:border-yellow-400/30">
                    <Icon className="h-10 w-10 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
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