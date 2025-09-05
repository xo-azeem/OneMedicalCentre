import { useEffect, useRef, useState } from 'react';
import { useLayoutEffect } from 'react';
import { MapPin, Car, ArrowRight, Phone, Mail, Clock, Building, Navigation, Sparkles } from 'lucide-react';
import logo from './assets/logo.png';
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

  // Enhanced hero animation with smoother timing (from OneTeamPage)
  useEffect(() => {
    if (heroContentRef.current && heroContentRef.current.children && !heroAnimated) {
      const heroChildren = Array.from(heroContentRef.current.children) as HTMLElement[];
      if (heroChildren.length > 0) {
        heroChildren.forEach(child => {
          (child as HTMLElement).style.opacity = '0';
          (child as HTMLElement).style.transform = 'translateY(60px) scale(0.95)';
        });
        heroChildren.forEach((child, index) => {
          setTimeout(() => {
            (child as HTMLElement).style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            (child as HTMLElement).style.opacity = '1';
            (child as HTMLElement).style.transform = 'translateY(0px) scale(1)';
          }, 300 + (index * 200));
        });
        setHeroAnimated(true);
      }
    }
  }, [heroAnimated]);

  useLayoutEffect(() => {
    // setHeroVisible(true); // This line is removed as per the new_code
  }, []);

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

  // Add StarShine component from OneTeamPage
  const StarShine = ({ className, delay }: { className: string; delay: number }) => (
    <div className={`pointer-events-none absolute z-20 ${className}`}>
      <div className="star-shine" style={{ animationDelay: `${delay}s` }}>
        <div className="star-ray ray-1"></div>
        <div className="star-ray ray-2"></div>
        <div className="star-ray ray-3"></div>
        <div className="star-ray ray-4"></div>
        <div className="star-center"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Margin area above hero for all screens */}
      <div className="w-full" style={{height: '44px', background: '#000'}}></div>
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
      <section ref={heroRef} className="relative bg-black py-20 sm:py-28 min-h-[80vh] flex items-center mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        {/* Floating decorative elements */}
        {/* <div className="absolute top-20 left-10 w-4 h-4 bg-[#ffd700]/30 rounded-full transition-all duration-[2000ms] delay-300 animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#ffd700]/20 rounded-full transition-all duration-[2200ms] delay-500 animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-[#ffd700]/10 rounded-full transition-all duration-[2400ms] delay-700 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#ffd700]/10 rounded-full transition-all duration-[2600ms] delay-1100 animate-ping"></div>*/}
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroContentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Right Content - Logo with Main Page Hero Style */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 order-1 lg:order-2">
              <div className="relative group">
                {/* Square Container with Border (copied from OneTeamPage) */}
                <div className="w-80 sm:w-80 lg:w-[28rem] h-80 sm:h-80 lg:h-[28rem] border-2 border-[#d4af37]/50 rounded-lg shadow-lg transition-all duration-300 group-hover:border-[#d4af37]/70 group-hover:shadow-xl group-hover:shadow-[#d4af37]/20 bg-gradient-to-br from-transparent via-[#fffbe6]/5 to-transparent">
                  {/* Inner container for all effects and logo */}
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                    
                    {/* Star shine effects */}
                    <StarShine className="random-star-1" delay={0} />
                    <StarShine className="random-star-2" delay={1.8} />
                    <StarShine className="random-star-3" delay={0.9} />
                    <StarShine className="random-star-4" delay={2.2} />
                    <StarShine className="random-star-5" delay={2.8} />
                    <StarShine className="random-star-6" delay={3.2} />

                    <style>{`
                    .random-star-1{top:15%;left:25%;filter:blur(4px);}
                    .random-star-2{top:70%;left:18%;filter:blur(4px);}
                    .random-star-3{top:45%;left:77%;filter:blur(4px);}
                    .random-star-4{top:19%;left:65%;filter:blur(4px);}
                    .random-star-5{top:76%;left:45%;filter:blur(4px);}
                    .random-star-6{top:35%;left:10%;filter:blur(4px);}
                    @media (max-width:768px){
                    .random-star-1{top:23%;left:20%;filter:blur(3px);}
                    .random-star-2{top:65%;left:17%;filter:blur(3px);}
                    .random-star-3{top:55%;left:73%;filter:blur(3px);}
                    .random-star-4{top:22%;left:70%;filter:blur(3px);}
                    .random-star-5{display:none;top:78%;left:42%;filter:blur(3px);}
                    .random-star-6{display:none;top:38%;left:12%;filter:blur(3px);}
                    }
                    @media (max-width:1024px) and (min-width:769px){
                    .random-star-1{top:14%;left:23%;filter:blur(3.5px);}
                    .random-star-2{top:68%;left:16%;filter:blur(3.5px);}
                    .random-star-3{top:43%;left:81%;filter:blur(3.5px);}
                    .random-star-4{top:14%;left:66%;filter:blur(3.5px);}
                    .random-star-5{top:81%;left:43%;filter:blur(3.5px);}
                    .random-star-6{display:none;top:36%;left:9%;filter:blur(3.5px);}
                    }
                    @keyframes bg-pulse{0%,100%{filter:blur(32px) brightness(1);opacity:0.7;}50%{filter:blur(48px) brightness(1.15);opacity:1;}}
                    .animate-bg-pulse{animation:bg-pulse 6s infinite ease-in-out;}
                    @keyframes glisten-spot2{0%{left:-10%;top:80%;opacity:0.05;transform:scale(0.5);}40%{opacity:0.4;transform:scale(0.7);}60%{left:60%;top:40%;opacity:0.7;transform:scale(1);}80%{opacity:0.3;transform:scale(0.7);}100%{left:120%;top:10%;opacity:0.01;transform:scale(0.4);}}
                    .animate-glisten-spot2{animation:glisten-spot2 4.5s infinite cubic-bezier(0.4,0,0.2,1) 1.2s;}
                    @keyframes glisten-spot3{0%{left:0%;top:50%;opacity:0.08;transform:scale(0.7);}25%{opacity:0.3;transform:scale(0.9);}55%{left:50%;top:10%;opacity:0.6;transform:scale(1.2);}80%{opacity:0.2;transform:scale(0.8);}100%{left:100%;top:-10%;opacity:0.01;transform:scale(0.5);}}
                    .animate-glisten-spot3{animation:glisten-spot3 5.2s infinite cubic-bezier(0.4,0,0.2,1) 2.1s;}
                    .bg-gradient-radial{background:radial-gradient(circle,var(--tw-gradient-stops));}
                    @keyframes star-shine{0%,100%{opacity:0;}50%{opacity:1;}}
                    .star-shine{position:relative;width:30px;height:30px;display:flex;align-items:center;justify-content:center;animation:star-shine 3s infinite ease-in-out;}
                    @media (min-width:640px){.star-shine{width:40px;height:40px;}}
                    @media (min-width:1024px){.star-shine{width:50px;height:50px;}}
                    .star-ray{position:absolute;left:50%;top:50%;width:8px;height:24px;background:linear-gradient(180deg,#fffbe6 0%,#fffbe6 15%,#d4af37 35%,#d4af37 60%,rgba(255,215,0,0.35) 90%,transparent 100%);clip-path:polygon(50% 0%,92% 100%,8% 100%);opacity:0.99;transform-origin:50% 100%;box-shadow:0 0 32px 12px #fffbe6,0 0 64px 24px #d4af37,0 0 48px 12px #fffbe6,0 0 96px 32px #d4af37,0 0 24px 6px #fffbe6;}
                    @media (min-width:640px){.star-ray{width:10px;height:30px;box-shadow:0 0 40px 14px #fffbe6,0 0 80px 28px #d4af37,0 0 56px 14px #fffbe6,0 0 112px 40px #d4af37,0 0 28px 7px #fffbe6;}}
                    @media (min-width:1024px){.star-ray{width:12px;height:38px;box-shadow:0 0 48px 16px #fffbe6,0 0 96px 32px #d4af37,0 0 64px 16px #fffbe6,0 0 128px 48px #d4af37,0 0 32px 8px #fffbe6;}}
                    .star-ray.ray-1::before,.star-ray.ray-2::before,.star-ray.ray-3::before,.star-ray.ray-4::before{content:'';position:absolute;left:50%;top:0;width:12px;height:12px;background:radial-gradient(circle,#fffbe6 0%,#ffd700 60%,transparent 100%);transform:translate(-50%,-40%);z-index:1;filter:blur(1.5px);opacity:0.7;pointer-events:none;}
                    @media (min-width:640px){.star-ray.ray-1::before,.star-ray.ray-2::before,.star-ray.ray-3::before,.star-ray.ray-4::before{width:15px;height:15px;filter:blur(1.8px);}}
                    @media (min-width:1024px){.star-ray.ray-1::before,.star-ray.ray-2::before,.star-ray.ray-3::before,.star-ray.ray-4::before{width:18px;height:18px;filter:blur(2px);}}
                    .star-ray.ray-1{transform:translate(-50%,-100%) rotate(0deg);}
                    .star-ray.ray-2{transform:translate(-50%,-100%) rotate(90deg);}
                    .star-ray.ray-3{transform:translate(-50%,-100%) rotate(180deg);}
                    .star-ray.ray-4{transform:translate(-50%,-100%) rotate(270deg);}
                    .star-center{position:absolute;left:50%;top:50%;width:10px;height:10px;background:radial-gradient(circle,#fffbe6 0%,#ffd700 70%,#daa520 100%);border-radius:50%;box-shadow:0 0 12px 3px #fffbe6,0 0 24px 6px #daa520,0 0 36px 9px rgba(255,215,0,0.2);opacity:1;transform:translate(-50%,-50%);z-index:2;}
                    @media (min-width:640px){.star-center{width:13px;height:13px;box-shadow:0 0 14px 3.5px #fffbe6,0 0 28px 7px #daa520,0 0 42px 10.5px rgba(255,215,0,0.2);}}
                    @media (min-width:1024px){.star-center{width:16px;height:16px;box-shadow:0 0 16px 4px #fffbe6,0 0 32px 8px #daa520,0 0 48px 12px rgba(255,215,0,0.2);}}
                    `}</style>

                    {/* Animated background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-[#fffbe6]/20 via-[#daa520]/30 to-[#daa520]/20 blur-2xl animate-bg-pulse" />
                    </div>
                    {/* Glisten spots */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute w-20 h-20 left-[-10%] top-[80%] bg-gradient-radial from-[#d4af37]/70 via-white/30 to-white/0 rounded-full blur-xl opacity-50 animate-glisten-spot2" />
                      <div className="absolute w-24 h-24 left-0 top-[50%] bg-gradient-radial from-[#d4af37]/60 via-[#d4af37]/30 to-white/0 rounded-full blur-xl opacity-60 animate-glisten-spot3" />
                    </div>
                    {/* Logo */}
                    <img 
                      src={logo} 
                      alt="One Medical Centre Hero Logo" 
                      className="relative z-10 w-56 sm:w-72 lg:w-[22rem] h-56 sm:h-72 lg:h-[22rem] object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-2xl" 
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1 w-full text-center lg:text-left">
              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
                <div className="inline-flex items-center space-x-2 bg-black text-[#d4af37] px-4 py-2 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 transition-all duration-300">
                  <Sparkles className="h-4 w-4" />
                  <span>One Place</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
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
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium mt-2 mb-2">
                  Family Doctors, Medical Specialists, Pharmacy & More — All Under One Roof for Your Convenience.
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
                   className="px-8 py-4 border-2 border-[#daa520] bg-black text-[#b8860b] font-semibold rounded-2xl transition-all duration-300 hover:bg-[#fff8dc] dark:hover:bg-black hover:text-[#daa520] hover:border-[#ffd700] hover:shadow-xl hover:shadow-[#ffd700]/30 focus:outline-none focus:ring-4 focus:ring-[#daa520]/50 text-center transform-gpu hover:-translate-y-1 shadow-lg shadow-[#ffd700]/20"
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
      <section ref={locationSectionRef} className="py-20 sm:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        
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
        `}</style>

        {/* Animated floating elements */}
        <div className={`absolute top-10 left-10 w-2 h-2 bg-[#d4af37] rounded-full transition-all duration-[1500ms] delay-300 ${locationVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute top-20 right-20 w-3 h-3 bg-[#d4af37]/20 rounded-full transition-all duration-[1500ms] delay-500 ${locationVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 left-20 w-4 h-4 bg-[#d4af37]/10 rounded-full transition-all duration-[1500ms] delay-700 ${locationVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            locationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-black/10 text-[#d4af37] px-6 py-3 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 mb-6">
              <Building className="h-4 w-4" />
              <span>Our Location</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Easy to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#daa520]">Find & Access</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our modern medical facility is conveniently located for patients throughout the GTA, 
              with excellent transit connections and ample parking options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Address Card */}
            <div className={`transition-all duration-1000 ease-out transform ${
              locationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-black/95 to-[#d4af37]/80 rounded-3xl p-8 shadow-xl border border-[#daa520]/60 hover:border-[#ffd700]/60 hover:shadow-2xl hover:shadow-[#ffd700]/20 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-[#fffacd] dark:bg-[#b8860b] rounded-xl p-3 transition-all duration-300">
                    <MapPin className="h-8 w-8 text-[#daa520] dark:text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Our Address</h4>
                    <p className="text-gray-300 leading-relaxed">
                      50 Burnhamthorpe Rd West<br />
                      Unit 102<br />
                      Mississauga, ON
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Navigation className="h-5 w-5 text-[#d4af37]" />
                    <span>Directly across from Square One Shopping Centre</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Car className="h-5 w-5 text-[#d4af37]" />
                    <span>Unlimited underground & above-ground parking</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
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
                <h4 className="text-2xl font-bold text-white mb-8">Get In Touch</h4>
                <div className="space-y-4">
                  <a
                    href="tel:+16476602591"
                    className="flex items-center space-x-4 bg-black backdrop-blur-sm px-6 py-4 rounded-xl border border-[#daa520] text-gray-300 hover:text-[#b8860b] dark:hover:text-[#ffd700] hover:bg-[#fffaf0] dark:hover:bg-black hover:border-[#ffd700] dark:hover:border-[#ffd700] hover:shadow-2xl hover:shadow-[#ffd700]/20 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="bg-[#fffacd] dark:bg-[#b8860b] rounded-xl p-3 transition-all duration-300">
                      <Phone className="h-6 w-6 text-[#d4af37] dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Call us at</p>
                      <p className="text-lg font-semibold text-white">+647 660 2591</p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:onemedicalmississauga@gmail.com"
                    className="flex items-center space-x-4 bg-black backdrop-blur-sm px-6 py-4 rounded-xl border border-[#daa520] text-gray-300 hover:text-[#b8860b] dark:hover:text-[#ffd700] hover:bg-[#fffaf0] dark:hover:bg-black hover:border-[#ffd700] dark:hover:border-[#ffd700] hover:shadow-2xl hover:shadow-[#ffd700]/20 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="bg-[#fffacd] dark:bg-[#b8860b] rounded-xl p-3 transition-all duration-300">
                      <Mail className="h-6 w-6 text-[#d4af37] dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Email us at</p>
                      <p className="text-lg font-semibold text-white">onemedicalmississauga@gmail.com</p>
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
        className="relative py-12 sm:py-16 bg-black flex justify-center items-center overflow-hidden"
      >

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

      
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-[#ffd700] rounded-full animate-pulse animate-float-slow opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-[#ffd700]/20 rounded-full animate-pulse delay-700 opacity-50 animate-float-medium"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-[#ffd700]/10 rounded-full animate-pulse delay-1000 animate-float-fast"></div>
                
        <div className={`w-full max-w-4xl px-4 transition-all duration-1000 ease-out transform ${mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative flex flex-col items-center">
                
                          {/* Floating Pin Icon */}
              <div className="relative mb-4 z-20">
                <div className="bg-black p-4 rounded-full shadow-2xl animate-bounce border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300">
                  <MapPin className="w-8 h-8 text-[#daa520] dark:text-[#ffd700]" />
                </div>
              </div>
                
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4 text-center drop-shadow-lg">
              Our Location on Google Maps
            </h2>
                
            {/* Google Map Iframe */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-black/40 mb-4 bg-black dark:bg-white">
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
              className="inline-block px-8 py-3 bg-black text-[#b8860b] dark:text-[#ffd700] font-semibold rounded-xl border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] hover:text-[#daa520] dark:hover:text-[#ffd700] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#daa520]/50 text-base tracking-wide mb-4"
            >
              Open in Google Maps
            </a>
                
            {/* QR Code */}
            <div className="text-center">
              <p className="text-gray-300 mb-2 text-xs sm:text-sm">Scan the QR code to open location directly on your phone</p>
              <div className="p-3 bg-black backdrop-blur-sm border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 rounded-2xl inline-block">
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
      <section ref={featuresSectionRef} className="py-20 sm:py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        
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

        {/* Animated floating elements */}
        <div className={`absolute top-20 left-10 w-3 h-3 bg-[#ffd700]/20 rounded-full transition-all duration-[1500ms] delay-300 ${featuresVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute top-40 right-20 w-2 h-2 bg-[#ffd700]/30 rounded-full transition-all duration-[1500ms] delay-500 ${featuresVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 left-20 w-4 h-4 bg-[#ffd700]/10 rounded-full transition-all duration-[1500ms] delay-700 ${featuresVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-black/10 text-[#d4af37] px-6 py-3 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Why Choose Our Location</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Designed for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#daa520]">Convenience</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
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
                  <div className="bg-gradient-to-br group-hover:from-[#daa520]/10 group-hover:to-[#ffd700]/10 transition-all duration-500 p-8 rounded-3xl shadow-xl border border-[#daa520]/60 group-hover:border-[#ffd700]/60 group-hover:shadow-2xl group-hover:shadow-[#ffd700]/20 group-hover:-translate-y-4 group-hover:scale-[1.02] flex flex-col items-center min-h-[320px] min-w-0 w-full max-w-full">
                    <div className="bg-[#fffacd] dark:bg-[#b8860b] p-4 rounded-2xl w-fit mx-auto mb-6">
                      <Icon className="h-8 w-8 text-[#daa520] dark:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#b8860b] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
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