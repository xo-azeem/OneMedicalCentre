import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Car, Calendar, ArrowRight, Phone, Mail, Clock, Building, Navigation, Sparkles } from 'lucide-react';
import logo2 from './assets/logo2.png';
import qrCode from './assets/qr.png';
import DigitalPulse from "./DigitalPulse";

export default function OnePlacePage() {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [locationVisible, setLocationVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [locationAnimationTriggered, setLocationAnimationTriggered] = useState(false);
  const [featuresAnimationTriggered, setFeaturesAnimationTriggered] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const locationSectionRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const mapSectionRef = useRef<HTMLDivElement>(null);

  // Enhanced hero animation with smoother timing (from test.tsx)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroContentRef.current && heroContentRef.current.children && !heroAnimated) {
        const heroChildren = Array.from(heroContentRef.current.children) as HTMLElement[];
        if (heroChildren.length > 0) {
          heroChildren.forEach((child, index) => {
            (child as HTMLElement).style.opacity = '0';
            (child as HTMLElement).style.transform = 'translateY(60px) scale(0.95)';
            (child as HTMLElement).style.filter = 'blur(2px)';
            setTimeout(() => {
              (child as HTMLElement).style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              (child as HTMLElement).style.opacity = '1';
              (child as HTMLElement).style.transform = 'translateY(0px) scale(1)';
              (child as HTMLElement).style.filter = 'blur(0px)';
            }, 300 + (index * 200));
          });
          setHeroAnimated(true);
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [heroAnimated]);

  // Location section animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !locationAnimationTriggered) {
            setLocationVisible(true);
            setLocationAnimationTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (locationSectionRef.current) {
      observer.observe(locationSectionRef.current);
    }
    return () => observer.disconnect();
  }, [locationAnimationTriggered]);

  // Features section animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !featuresAnimationTriggered) {
            setFeaturesVisible(true);
            setFeaturesAnimationTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (featuresSectionRef.current) {
      observer.observe(featuresSectionRef.current);
    }
    return () => observer.disconnect();
  }, [featuresAnimationTriggered]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMapVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (mapSectionRef.current) {
      observer.observe(mapSectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleBookAppointment = () => {
    window.open('https://mdplusmedical.inputhealth.com/ebooking#new', '_blank');
  };

  return (
    <div className="min-h-screen bg-theme-primary dark:bg-black overflow-x-hidden">
      {/* Theme-aware margin area above hero for all screens */}
      <div className="w-full" style={{height: '44px', background: 'var(--bg-primary)'}}></div>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-text {
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 30%,
            rgba(255, 215, 0, 0.3) 40%,
            rgba(255, 215, 0, 0.8) 50%,
            rgba(255, 215, 0, 1) 60%,
            rgba(255, 215, 0, 0.8) 70%,
            rgba(255, 215, 0, 0.3) 80%,
            transparent 90%,
            transparent 100%
          );
          background-size: 300% 100%;
          animation: shimmer 2.5s ease-in-out infinite;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
        }
        .shimmer-text::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #fbbf24, #f59e0b, #d97706);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          z-index: -1;
        }
      `}</style>
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-theme-primary dark:bg-black py-20 sm:py-28 min-h-[80vh] flex items-center mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-theme-primary dark:bg-black"></div>
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#ffd700]/30 rounded-full transition-all duration-[2000ms] delay-300 animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#ffd700]/20 rounded-full transition-all duration-[2200ms] delay-500 animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-[#ffd700]/10 rounded-full transition-all duration-[2400ms] delay-700 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#ffd700]/10 rounded-full transition-all duration-[2600ms] delay-1100 animate-ping"></div>
        
        {/* Hero Section Glitter Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="glitter-star absolute top-[15%] left-[10%] w-1 h-1 bg-[#ffd700] rounded-full opacity-80"></div>
          <div className="glitter-star absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-[#daa520] rounded-full opacity-70"></div>
          <div className="glitter-star absolute top-[40%] left-[20%] w-1 h-1 bg-[#f0e68c] rounded-full opacity-90"></div>
          <div className="glitter-star absolute top-[60%] right-[25%] w-1.5 h-1.5 bg-[#ffd700] rounded-full opacity-85"></div>
          <div className="glitter-star absolute bottom-[20%] left-[15%] w-1 h-1 bg-[#daa520] rounded-full opacity-75"></div>
          <div className="glitter-star absolute bottom-[35%] right-[10%] w-1.5 h-1.5 bg-[#f0e68c] rounded-full opacity-80"></div>
          <div className="glitter-star absolute top-[30%] left-[45%] w-1 h-1 bg-[#ffd700] rounded-full opacity-70"></div>
          <div className="glitter-star absolute top-[70%] right-[40%] w-1.5 h-1.5 bg-[#daa520] rounded-full opacity-90"></div>
          <div className="glitter-star absolute top-[50%] left-[8%] w-1 h-1 bg-[#f0e68c] rounded-full opacity-85"></div>
          <div className="glitter-star absolute bottom-[45%] right-[8%] w-1.5 h-1.5 bg-[#ffd700] rounded-full opacity-75"></div>
          <div className="glitter-star absolute top-[80%] left-[30%] w-1 h-1 bg-[#daa520] rounded-full opacity-80"></div>
          <div className="glitter-star absolute top-[10%] right-[30%] w-1.5 h-1.5 bg-[#f0e68c] rounded-full opacity-85"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroContentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Right Content - Logo with Main Page Hero Style */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 order-1 lg:order-2">
              <div className="relative flex items-center justify-center mb-4">
                {/* Multi-layered glowing circles */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center shadow-2xl border border-yellow-400/30 animate-glow backdrop-blur-sm">
                  <div className="w-52 h-52 sm:w-72 sm:h-72 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-full flex items-center justify-center">
                    <div className="w-36 h-36 sm:w-56 sm:h-56 bg-yellow-100/10 rounded-full flex items-center justify-center">
                      <img src={logo2} alt="One Medical Centre Logo" className="w-28 h-28 sm:w-40 sm:h-40 object-contain" />
                    </div>
                  </div>
                </div>
                {/* Floating Lucide icons around the logo */}
                <MapPin className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-8 text-yellow-400 drop-shadow-lg animate-float-slow" />
                <Car className="absolute top-1/2 -right-10 -translate-y-1/2 w-8 h-8 text-yellow-400 drop-shadow-lg animate-float-medium" />
                <Phone className="absolute -top-2 -left-10 w-7 h-7 text-yellow-400 drop-shadow-lg animate-float-medium" />
                <Mail className="absolute -bottom-2 -right-8 w-7 h-7 text-yellow-400 drop-shadow-lg animate-float-slow" />
                <Calendar className="absolute -bottom-2 -left-8 w-8 h-8 text-yellow-400 drop-shadow-lg animate-float-fast" />

                {/* Shimmer and glow keyframes */}
                <style>{`

                @keyframes glitter-twinkle {
                  0%, 100% { 
                    opacity: 0; 
                    transform: scale(0.5) rotate(0deg);
                    box-shadow: 0 0 0 transparent;
                  }
                  50% { 
                    opacity: 1; 
                    transform: scale(1) rotate(180deg);
                    box-shadow: 0 0 8px currentColor;
                  }
                }
                .glitter-star {
                  animation: glitter-twinkle 3s infinite;
                }
                .glitter-star:nth-child(1) { animation-delay: 0s; }
                .glitter-star:nth-child(2) { animation-delay: 0.3s; }
                .glitter-star:nth-child(3) { animation-delay: 0.6s; }
                .glitter-star:nth-child(4) { animation-delay: 0.9s; }
                .glitter-star:nth-child(5) { animation-delay: 1.2s; }
                .glitter-star:nth-child(6) { animation-delay: 1.5s; }
                .glitter-star:nth-child(7) { animation-delay: 1.8s; }
                .glitter-star:nth-child(8) { animation-delay: 2.1s; }
                .glitter-star:nth-child(9) { animation-delay: 2.4s; }
                .glitter-star:nth-child(10) { animation-delay: 2.7s; }
                .glitter-star:nth-child(11) { animation-delay: 3s; }
                .glitter-star:nth-child(12) { animation-delay: 0.15s; }

                  @keyframes float-slow { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
                  @keyframes float-medium { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(-2deg); } }
                  @keyframes float-fast { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(1deg); } }
                  @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(250, 204, 21, 0.3); } 50% { box-shadow: 0 0 30px rgba(250, 204, 21, 0.5); } }
                  .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
                  .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
                  .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
                  .animate-glow { animation: glow 3s ease-in-out infinite; }
                `}</style>
              </div>
            </div>
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1 w-full text-center lg:text-left">
              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                <div className="inline-flex items-center space-x-2 bg-theme-primary text-[#d4af37] px-4 py-2 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 transition-all duration-300">
                  <Sparkles className="h-4 w-4" />
                  <span>One Place</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-theme-primary leading-tight">
                  All in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#daa520]">One Place</span>
                </h2>
                <div className="flex justify-center lg:justify-start text-center lg:text-left">
                  <div className="w-[460px] h-1 bg-gradient-to-r from-[#ffd700] via-[#d4af37] to-[#b8860b] rounded-full opacity-70 animate-pulse"></div>
                </div>
                <div className="bg-gradient-to-r from-[#d4af37] to-[#ffd700] bg-clip-text text-transparent">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                    Everything you need for your health, <span className="underline decoration-[#d4af37]/70 font-black">all together</span> in one location.
                  </h3>
                </div>
                <p className="text-lg sm:text-xl text-theme-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium mt-2 mb-2">
                  Medical, Dental, Pharmacy, Wellness & More — All Under One Roof for Your Convenience.
                </p>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start pt-4">
                <button
                  className="group px-8 py-4 bg-gradient-to-r from-[#daa520] to-[#d4af37] text-white font-semibold rounded-2xl transition-all duration-300 hover:from-[#d4af37] hover:to-[#ffd700] hover:shadow-2xl hover:shadow-[#ffd700]/30 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#daa520]/50 transform-gpu"
                  onClick={handleBookAppointment}
                  aria-label="Book Appointment"
                >
                  <span className="flex items-center space-x-3">
                    <span>Book Appointment</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                                  <a
                   href="tel:+16476602591"
                   className="px-8 py-4 border-2 border-[#daa520] bg-theme-primary text-[#b8860b] font-semibold rounded-2xl transition-all duration-300 hover:bg-[#fff8dc] dark:hover:bg-black hover:text-[#daa520] hover:border-[#ffd700] hover:shadow-xl hover:shadow-[#ffd700]/30 focus:outline-none focus:ring-4 focus:ring-[#daa520]/50 text-center transform-gpu hover:-translate-y-1 shadow-lg shadow-[#ffd700]/20"
                   tabIndex={0}
                  >
                   Call Now
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DigitalPulse/>

      {/* Location Details Section */}
      <section ref={locationSectionRef} className="py-20 sm:py-24 bg-theme-primary dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-theme-primary dark:bg-black"></div>
        
        {/* Animated floating elements */}
        <div className={`absolute top-10 left-10 w-2 h-2 bg-[#d4af37] rounded-full transition-all duration-[1500ms] delay-300 ${locationVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute top-20 right-20 w-3 h-3 bg-[#d4af37]/20 rounded-full transition-all duration-[1500ms] delay-500 ${locationVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 left-20 w-4 h-4 bg-[#d4af37]/10 rounded-full transition-all duration-[1500ms] delay-700 ${locationVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            locationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-theme-primary/10 text-[#d4af37] px-6 py-3 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 mb-6">
              <Building className="h-4 w-4" />
              <span>Our Location</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-primary mb-6">
              Easy to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#daa520]">Find & Access</span>
            </h3>
            <p className="text-lg text-theme-secondary max-w-2xl mx-auto leading-relaxed">
              Our modern medical facility is conveniently located for patients throughout the GTA, 
              with excellent transit connections and ample parking options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Address Card */}
            <div className={`transition-all duration-1000 ease-out transform ${
              locationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-theme-primary/95 to-[#d4af37]/80 rounded-3xl p-8 shadow-xl border border-[#daa520]/60 hover:border-[#ffd700]/60 hover:shadow-2xl hover:shadow-[#ffd700]/20 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-[#fffacd] dark:bg-[#b8860b] rounded-xl p-3 transition-all duration-300">
                    <MapPin className="h-8 w-8 text-[#daa520] dark:text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-theme-primary mb-2">Our Address</h4>
                    <p className="text-theme-secondary text-lg leading-relaxed">
                      50 Burnhamthorpe Rd West<br />
                      Unit 102<br />
                      Mississauga, ON
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-theme-secondary">
                    <Navigation className="h-5 w-5 text-[#d4af37]" />
                    <span>Directly across from Square One Shopping Centre</span>
                  </div>
                  <div className="flex items-center space-x-3 text-theme-secondary">
                    <Car className="h-5 w-5 text-[#d4af37]" />
                    <span>Unlimited underground & above-ground parking</span>
                  </div>
                  <div className="flex items-center space-x-3 text-theme-secondary">
                    <Clock className="h-5 w-5 text-[#d4af37]" />
                    <span>Easy access via major highways and public transit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-1000 ease-out transform ${
              locationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-theme-primary mb-8">Get In Touch</h4>
                <div className="space-y-4">
                  <a
                    href="tel:+16476602591"
                    className="flex items-center space-x-4 bg-theme-primary dark:bg-black backdrop-blur-sm px-6 py-4 rounded-xl border border-[#daa520] text-theme-secondary hover:text-[#b8860b] dark:hover:text-[#ffd700] hover:bg-[#fffaf0] dark:hover:bg-black hover:border-[#ffd700] dark:hover:border-[#ffd700] hover:shadow-2xl hover:shadow-[#ffd700]/20 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="bg-[#fffacd] dark:bg-[#b8860b] rounded-xl p-3 transition-all duration-300">
                      <Phone className="h-6 w-6 text-[#d4af37] dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-theme-secondary">Call us at</p>
                      <p className="text-lg font-semibold text-theme-primary">+647 660 2591</p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:onemedicalmississauga@gmail.com"
                    className="flex items-center space-x-4 bg-theme-primary dark:bg-black backdrop-blur-sm px-6 py-4 rounded-xl border border-[#daa520] text-theme-secondary hover:text-[#b8860b] dark:hover:text-[#ffd700] hover:bg-[#fffaf0] dark:hover:bg-black hover:border-[#ffd700] dark:hover:border-[#ffd700] hover:shadow-2xl hover:shadow-[#ffd700]/20 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="bg-[#fffacd] dark:bg-[#b8860b] rounded-xl p-3 transition-all duration-300">
                      <Mail className="h-6 w-6 text-[#d4af37] dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-theme-secondary">Email us at</p>
                      <p className="text-lg font-semibold text-theme-primary">onemedicalmississauga@gmail.com</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://onemedicalcentre.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 bg-theme-primary dark:bg-black backdrop-blur-sm px-6 py-4 rounded-xl border border-[#daa520] text-theme-secondary hover:text-[#b8860b] dark:hover:text-[#ffd700] hover:bg-[#fffaf0] dark:hover:bg-black hover:border-[#ffd700] dark:hover:border-[#ffd700] hover:shadow-2xl hover:shadow-[#ffd700]/20 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="bg-[#fffacd] dark:bg-[#b8860b] rounded-xl p-3 transition-all duration-300">
                      <Calendar className="h-6 w-6 text-[#d4af37] dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-theme-secondary">Book online at</p>
                      <p className="text-lg font-semibold text-theme-primary">onemedicalcentre.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps + QR Code Section */}
      <section
        ref={mapSectionRef}
        className="relative py-12 sm:py-16 bg-theme-primary dark:bg-black flex justify-center items-center overflow-hidden"
      >
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-[#ffd700] rounded-full animate-pulse animate-float-slow opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-[#ffd700]/20 rounded-full animate-pulse delay-700 opacity-50 animate-float-medium"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-[#ffd700]/10 rounded-full animate-pulse delay-1000 animate-float-fast"></div>
                
        <div className={`w-full max-w-4xl px-4 transition-all duration-1000 ease-out transform ${mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative flex flex-col items-center">
                
                          {/* Floating Pin Icon */}
              <div className="relative mb-4 z-20">
                <div className="bg-theme-primary dark:bg-black p-4 rounded-full shadow-2xl animate-bounce border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300">
                  <MapPin className="w-8 h-8 text-[#daa520] dark:text-[#ffd700]" />
                </div>
              </div>
                
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary dark:text-theme-secondary mb-4 text-center drop-shadow-lg">
              Our Location on Google Maps
            </h2>
                
            {/* Google Map Iframe */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-theme-primary/40 mb-4 bg-theme-primary dark:bg-theme-secondary">
              <iframe
                src="https://www.google.com/maps?q=50+Burnhamthorpe+Rd+W,+Mississauga,+ON+L5B+3C2,+Canada&output=embed"
                title="One Medical Centre Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
                
            {/* Google Maps Button */}
            <a
              href="https://maps.app.goo.gl/NfnrniFAtQGAVzx49"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-theme-primary dark:bg-black text-[#b8860b] dark:text-[#ffd700] font-semibold rounded-xl border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] hover:text-[#daa520] dark:hover:text-[#ffd700] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#daa520]/50 text-base tracking-wide mb-4"
            >
              Open in Google Maps
            </a>
                
            {/* QR Code */}
            <div className="text-center">
              <p className="text-theme-secondary dark:text-theme-primary mb-2 text-xs sm:text-sm">Scan the QR code to open location directly on your phone</p>
              <div className="p-3 bg-theme-primary dark:bg-black backdrop-blur-sm border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 rounded-2xl inline-block">
                <img
                  src={qrCode}
                  alt="Google Maps QR Code"
                  className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresSectionRef} className="py-20 sm:py-24 bg-theme-primary dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-theme-primary dark:bg-black"></div>
        
        {/* Animated floating elements */}
        <div className={`absolute top-20 left-10 w-3 h-3 bg-[#ffd700]/20 rounded-full transition-all duration-[1500ms] delay-300 ${featuresVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute top-40 right-20 w-2 h-2 bg-[#ffd700]/30 rounded-full transition-all duration-[1500ms] delay-500 ${featuresVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 left-20 w-4 h-4 bg-[#ffd700]/10 rounded-full transition-all duration-[1500ms] delay-700 ${featuresVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-theme-primary/10 text-[#d4af37] px-6 py-3 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Why Choose Our Location</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-primary dark:text-theme-secondary mb-6">
              Designed for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#daa520]">Convenience</span>
            </h3>
            <p className="text-lg text-theme-secondary max-w-2xl mx-auto leading-relaxed">
              Every aspect of our location has been carefully chosen to provide you with the most convenient and comfortable healthcare experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: MapPin, 
                title: "Prime Location", 
                description: "Located directly across from Square One Shopping Centre, making it easy to combine your healthcare visit with other errands.",
                delay: 200
              },
              { 
                icon: Car, 
                title: "Unlimited Parking", 
                description: "Never worry about finding parking with our unlimited underground and above-ground parking options.",
                delay: 400
              },
              { 
                icon: Navigation, 
                title: "Easy Access", 
                description: "Conveniently accessible via major highways and public transit, serving patients throughout the GTA.",
                delay: 600
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className={`text-center group flex flex-col h-full transition-all duration-1000 ease-out transform ${
                    featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${feature.delay}ms` }}
                >
                  <div className="bg-gradient-to-br from-theme-primary/95 to-[#fff8dc]/80 group-hover:from-theme-primary group-hover:to-[#fffacd] transition-all duration-500 p-8 rounded-3xl shadow-xl border border-[#daa520]/60 group-hover:border-[#ffd700]/60 group-hover:shadow-2xl group-hover:shadow-[#ffd700]/20 group-hover:-translate-y-4 group-hover:scale-[1.02] flex flex-col items-center min-h-[320px] min-w-0 w-full max-w-full">
                    <div className="bg-[#fffacd] dark:bg-[#b8860b] p-4 rounded-2xl w-fit mx-auto mb-6">
                      <Icon className="h-8 w-8 text-[#daa520] dark:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-theme-primary mb-3 group-hover:text-[#b8860b] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-theme-secondary leading-relaxed group-hover:text-theme-primary transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}