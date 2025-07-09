import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Car, Calendar, ArrowRight, Phone, Mail, Clock, Building, Navigation, Sparkles } from 'lucide-react';
import logo2 from './assets/logo2.png';

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
            (child as HTMLElement).style.transform = 'translateY(40px) scale(0.95)';
            (child as HTMLElement).style.filter = 'blur(2px)';
            setTimeout(() => {
              (child as HTMLElement).style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
              (child as HTMLElement).style.opacity = '1';
              (child as HTMLElement).style.transform = 'translateY(0px) scale(1)';
              (child as HTMLElement).style.filter = 'blur(0px)';
            }, 200 + (index * 150));
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
    window.open('https://onemedicalcentre.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
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
      <section ref={heroRef} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 sm:py-32 min-h-screen flex items-center justify-center overflow-hidden mt-16">
        {/* Enhanced CSS animations */}
        <style>{`
          @keyframes float-slow { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
          @keyframes float-medium { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(-2deg); } }
          @keyframes float-fast { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(1deg); } }
          @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(250, 204, 21, 0.3); } 50% { box-shadow: 0 0 30px rgba(250, 204, 21, 0.5); } }
          @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
          .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
          .animate-glow { animation: glow 3s ease-in-out infinite; }
          .animate-shimmer { background: linear-gradient(90deg, transparent, rgba(250, 204, 21, 0.1), transparent); background-size: 200% 100%; animation: shimmer 2s infinite; }
          .bg-gradient-radial { background: radial-gradient(circle at center, rgba(250, 204, 21, 0.1) 0%, transparent 70%); }
          .transition-smooth { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
          .transition-bounce { transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
        `}</style>

        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-radial"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>
        {/* Enhanced floating elements with better positioning */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-70 animate-float-slow"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-1000 opacity-50 animate-float-medium"></div>
        <div className="absolute bottom-1/3 left-20 w-4 h-4 bg-yellow-400/60 rounded-full animate-pulse delay-500 animate-float-fast"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-500/80 rounded-full animate-pulse delay-1500 animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-2000 opacity-60"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse delay-700 animate-float-medium"></div>

        {/* Central content */}
        <div ref={heroContentRef} className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 text-center">
          {/* Enhanced logo section */}
          <div className="relative flex items-center justify-center mb-12">
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center shadow-2xl border border-yellow-400/30 animate-glow backdrop-blur-sm">
              <div className="w-32 sm:w-44 h-32 sm:h-44 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-full flex items-center justify-center">
                <div className="w-24 sm:w-32 h-24 sm:h-32 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <img src={logo2} alt="One Medical Centre Logo" className="w-16 sm:w-24 h-16 sm:h-24 object-contain" />
                </div>
              </div>
            </div>
            {/* Enhanced floating icons with better distribution */}
            <MapPin className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-8 text-yellow-400 drop-shadow-lg animate-float-slow" />
            <Car className="absolute top-1/2 -right-10 -translate-y-1/2 w-8 h-8 text-yellow-400 drop-shadow-lg animate-float-medium" />
            <Calendar className="absolute -bottom-2 -left-8 w-8 h-8 text-yellow-400 drop-shadow-lg animate-float-fast" />
            <Phone className="absolute -top-2 -left-10 w-7 h-7 text-yellow-400 drop-shadow-lg animate-float-medium" />
            <Mail className="absolute -bottom-2 -right-8 w-7 h-7 text-yellow-400 drop-shadow-lg animate-float-slow" />
            <Building className="absolute top-1/2 -left-12 -translate-y-1/2 w-6 h-6 text-yellow-400/60 drop-shadow-lg animate-float-fast" />
          </div>
          {/* Enhanced headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Everything You Need,<br />
            <span className="shimmer-text" data-text="All in One Place">All in One Place</span>
          </h1>
          {/* Enhanced subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Medical, Dental, Pharmacy, Wellness &amp; More — All Under One Roof for Your Convenience.
          </p>
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="group px-12 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-2xl transition-bounce hover:from-yellow-300 hover:to-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 transform active:scale-95"
              onClick={handleBookAppointment}
              aria-label="Book Online Appointment"
            >
              <span className="flex items-center space-x-3">
                <Calendar className="h-6 w-6" />
                <span className="text-lg">Book Online</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            <a
              href="tel:+16476602591"
              className="group px-12 py-5 border-2 border-yellow-400/60 text-yellow-400 font-semibold rounded-2xl transition-bounce hover:bg-yellow-400/10 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 backdrop-blur-sm"
              tabIndex={0}
            >
              <span className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg">Call Now</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Location Details Section */}
      <section ref={locationSectionRef} className="py-20 sm:py-24 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>
        
        {/* Animated floating elements */}
        <div className={`absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full transition-all duration-[1500ms] delay-300 ${locationVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute top-20 right-20 w-3 h-3 bg-yellow-500/60 rounded-full transition-all duration-[1500ms] delay-500 ${locationVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 left-20 w-4 h-4 bg-yellow-400/40 rounded-full transition-all duration-[1500ms] delay-700 ${locationVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            locationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium border border-yellow-400/20 mb-6">
              <Building className="h-4 w-4" />
              <span>Our Location</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Easy to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Find & Access</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Our modern medical facility is conveniently located for patients throughout the GTA, 
              with excellent transit connections and ample parking options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Address Card */}
            <div className={`transition-all duration-1000 ease-out transform ${
              locationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 shadow-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:shadow-yellow-400/10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-4 shadow-xl">
                    <MapPin className="h-8 w-8 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Our Address</h4>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      50 Burnhamthorpe Rd West<br />
                      Unit 102<br />
                      Mississauga, ON
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Navigation className="h-5 w-5 text-yellow-400" />
                    <span>Directly across from Square One Shopping Centre</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Car className="h-5 w-5 text-yellow-400" />
                    <span>Unlimited underground & above-ground parking</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Clock className="h-5 w-5 text-yellow-400" />
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
                <h4 className="text-2xl font-bold text-white mb-8">Get In Touch</h4>
                <div className="space-y-4">
                  <a
                    href="tel:+16476602591"
                    className="flex items-center space-x-4 bg-gray-900/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-700/50 text-gray-300 hover:text-yellow-400 hover:border-yellow-400/50 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl p-3 group-hover:from-yellow-400/30 group-hover:to-yellow-600/30 transition-all duration-300">
                      <Phone className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call us at</p>
                      <p className="text-lg font-semibold">+647 660 2591</p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:onemedicalmississauga@gmail.com"
                    className="flex items-center space-x-4 bg-gray-900/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-700/50 text-gray-300 hover:text-yellow-400 hover:border-yellow-400/50 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl p-3 group-hover:from-yellow-400/30 group-hover:to-yellow-600/30 transition-all duration-300">
                      <Mail className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email us at</p>
                      <p className="text-lg font-semibold">onemedicalmississauga@gmail.com</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://onemedicalcentre.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 bg-gray-900/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-700/50 text-gray-300 hover:text-yellow-400 hover:border-yellow-400/50 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl p-3 group-hover:from-yellow-400/30 group-hover:to-yellow-600/30 transition-all duration-300">
                      <Calendar className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Book online at</p>
                      <p className="text-lg font-semibold">onemedicalcentre.com</p>
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
        className="relative py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center overflow-hidden"
      >
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse animate-float-slow opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-700 opacity-50 animate-float-medium"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-yellow-400/40 rounded-full animate-pulse delay-1000 animate-float-fast"></div>
                
        <div className={`w-full max-w-4xl px-4 transition-all duration-1000 ease-out transform ${mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative flex flex-col items-center">
                
            {/* Floating Pin Icon */}
            <div className="relative mb-4 z-20">
              <div className="bg-yellow-400 p-4 rounded-full shadow-2xl animate-bounce">
                <MapPin className="w-8 h-8 text-gray-900" />
              </div>
            </div>
                
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 text-center drop-shadow-lg">
              Our Location on Google Maps
            </h2>
                
            {/* Google Map Iframe */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-yellow-400/40 mb-4 bg-gray-800">
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
              className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base tracking-wide mb-4"
            >
              Open in Google Maps
            </a>
                
            {/* QR Code */}
            <div className="text-center">
              <p className="text-gray-300 mb-2 text-xs sm:text-sm">Scan the QR code to open location directly on your phone</p>
              <div className="p-3 bg-gray-800/50 backdrop-blur-sm border border-yellow-400/30 rounded-2xl shadow-md inline-block">
                <img
                  src="/src/assets/qr.png" // Replace this with actual path to your QR code
                  alt="Google Maps QR Code"
                  className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresSectionRef} className="py-20 sm:py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>
        
        {/* Animated floating elements */}
        <div className={`absolute top-20 left-10 w-3 h-3 bg-yellow-400/40 rounded-full transition-all duration-[1500ms] delay-300 ${featuresVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute top-40 right-20 w-2 h-2 bg-yellow-500/60 rounded-full transition-all duration-[1500ms] delay-500 ${featuresVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 left-20 w-4 h-4 bg-yellow-400/30 rounded-full transition-all duration-[1500ms] delay-700 ${featuresVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium border border-yellow-400/20 mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Why Choose Our Location</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Designed for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Convenience</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 group-hover:from-yellow-400/20 group-hover:to-yellow-600/20 transition-all duration-500 p-8 rounded-3xl shadow-xl border border-gray-700/50 group-hover:border-yellow-400/30 group-hover:shadow-2xl group-hover:shadow-yellow-400/10 group-hover:-translate-y-2 flex flex-col items-center min-h-[320px] min-w-0 w-full max-w-full">
                    <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 group-hover:from-yellow-400/30 group-hover:to-yellow-600/30 transition-all duration-300 p-4 rounded-2xl w-fit mx-auto mb-6">
                      <Icon className="h-8 w-8 text-yellow-400 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
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