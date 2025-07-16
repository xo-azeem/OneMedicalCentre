import { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowRight, Phone, Mail, Car, UserCheck, Shield, Stethoscope, Heart, Eye, Pill} from 'lucide-react';
import logo2 from './assets/logo2.png';
import pdfFile from './assets/OneMedicalCentre.pdf';
import doctorsImg from './assets/doctors.png';

export default function OneTeamPage() {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const doctorsSectionRef = useRef<HTMLDivElement>(null);
  const [doctorsVisible, setDoctorsVisible] = useState(false);
  const [doctorsAnimationTriggered, setDoctorsAnimationTriggered] = useState(false);
  const [doctorsCardsVisible, setDoctorsCardsVisible] = useState(false);
  const doctorsCardsRef = useRef<HTMLDivElement>(null);


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

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !doctorsAnimationTriggered) {
            setDoctorsVisible(true);
            setDoctorsAnimationTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (doctorsSectionRef.current) {
      observer.observe(doctorsSectionRef.current);
    }
    return () => observer.disconnect();
  }, [doctorsAnimationTriggered]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDoctorsCardsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (doctorsCardsRef.current) {
      observer.observe(doctorsCardsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleBookAppointment = () => {
    window.open('https://mdplusmedical.inputhealth.com/ebooking#new', '_blank');
  };

  return (
    <div className="min-h-screen bg-theme-primary">
      {/* Theme-aware margin area above hero for all screens */}
      <div className="w-full" style={{height: '44px', background: 'var(--bg-primary)'}}></div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-theme-primary pt-28 sm:pt-32 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 min-h-screen flex items-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-theme-primary"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#ffd700]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#daa520]/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#f5deb3]/10 rounded-full blur-2xl"></div>
        </div>

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div ref={heroContentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Logo Section - Right Side */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">
                {/* Main logo container with enhanced styling */}
                <div className="w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 relative flex items-center justify-center mx-auto">
                  {/* Subtler, thinner outer golden ring with glitter */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4af37] via-[#d4af37] to-[#b8860b] shadow-2xl shadow-[#ffd700]/60 border-2 border-[#ffd700] shadow-[#ffd700]/50 overflow-visible">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-[#ffd700]/50 to-transparent opacity-60 animate-shimmer-light"></div>
                    
                    {/* 4-Ray Star Shine Effects */}
                    <div className="pointer-events-none absolute z-30 top-0 right-0 xs:top-0 xs:right-0 sm:top-1 sm:right-2 md:top-1 md:right-2 lg:top-0 lg:right-8">
                      <div className="star-shine">
                        <div className="star-ray ray-1"></div>
                        <div className="star-ray ray-2"></div>
                        <div className="star-ray ray-3"></div>
                        <div className="star-ray ray-4"></div>
                        <div className="star-center"></div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute z-30 top-[68%] left-[11%] sm:top-[70%] sm:left-[11%] md:top-[72%] md:left-[14%] lg:top-[74%] lg:left-[14%]">
                      <div className="star-shine" style={{ animationDelay: '1s' }}>
                        <div className="star-ray ray-1"></div>
                        <div className="star-ray ray-2"></div>
                        <div className="star-ray ray-3"></div>
                        <div className="star-ray ray-4"></div>
                        <div className="star-center"></div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute z-30 top-0 right-0 xs:top-0 xs:right-0 sm:top-1 sm:right-2 md:top-1 md:right-2 lg:top-0 lg:right-8">
                      <div className="star-shine" style={{ animationDelay: '2s' }}>
                        <div className="star-ray ray-1"></div>
                        <div className="star-ray ray-2"></div>
                        <div className="star-ray ray-3"></div>
                        <div className="star-ray ray-4"></div>
                        <div className="star-center"></div>
                      </div>
                    </div>
                  </div>

                  {/* Inner circle with logo */}
                  <div className="relative w-40 sm:w-52 lg:w-60 h-40 sm:h-52 lg:h-60 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-lg border border-[#daa520] backdrop-blur-sm">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black"></div>
                    <img src={logo2} alt="One Medical Centre Hero Logo" className="relative z-10 w-28 sm:w-36 lg:w-44 h-28 sm:h-36 lg:h-44 object-contain transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </div>

                {/* Enhanced animations styles */}
                <style>{`
                  @keyframes star-shine {
                    0%, 100% {
                      opacity: 0;
                    }
                    50% {
                      opacity: 1;
                    }
                  }

                  .star-shine {
                    position: relative;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: star-shine 3s infinite ease-in-out;
                  }

                  .star-ray {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 12px;
                    height: 38px;
                    background: linear-gradient(180deg, #fffbe6 0%, #fffbe6 15%, #d4af37 35%, #d4af37 60%, rgba(255, 215, 0, 0.35) 90%, transparent 100%);
                    clip-path: polygon(50% 0%, 92% 100%, 8% 100%);
                    opacity: 0.99;
                    transform-origin: center bottom;
                    box-shadow:
                      0 0 48px 16px #fffbe6,
                      0 0 96px 32px #d4af37,
                      0 0 64px 16px #fffbe6,
                      0 0 128px 48px #d4af37,
                      0 0 32px 8px #fffbe6;
                  }
                  .star-ray.ray-1::before,
                  .star-ray.ray-2::before,
                  .star-ray.ray-3::before,
                  .star-ray.ray-4::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    width: 18px;
                    height: 18px;
                    background: radial-gradient(circle, #fffbe6 0%, #ffd700 60%, transparent 100%);
                    transform: translate(-50%, -40%);
                    z-index: 1;
                    filter: blur(2px);
                    opacity: 0.7;
                    pointer-events: none;
                  }

                  .star-ray.ray-1 { 
                    transform: translate(-50%, -50%) rotate(0deg); 
                  }
                  .star-ray.ray-2 { 
                    transform: translate(-50%, -50%) rotate(90deg); 
                  }
                  .star-ray.ray-3 { 
                    transform: translate(-50%, -50%) rotate(180deg); 
                  }
                  .star-ray.ray-4 { 
                    transform: translate(-50%, -50%) rotate(270deg); 
                  }

                  .star-center {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 16px;
                    height: 16px;
                    background: radial-gradient(circle, #fffbe6 0%, #ffd700 70%, #daa520 100%);
                    border-radius: 50%;
                    box-shadow: 
                      0 0 16px 4px #fffbe6,
                      0 0 32px 8px #ffd700,
                      0 0 48px 12px rgba(255, 215, 0, 0.2);
                    opacity: 1;
                    transform: translate(-50%, 50%);
                  }

                  @keyframes shimmer-light {
                    0% { opacity: 0.3; transform: rotate(0deg); }
                    50% { opacity: 0.7; transform: rotate(180deg); }
                    100% { opacity: 0.3; transform: rotate(360deg); }
                  }
                  .animate-shimmer-light {
                    animation: shimmer-light 4s infinite linear;
                  }
                  
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
              </div>
            </div>
                
            {/* Content Section - Left Side */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
                
              {/* Location Badge */}
              <div className="inline-flex items-center space-x-2 bg-theme-primary text-[#b8860b] px-5 py-3 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 lg:mt-7">
                <MapPin className="h-4 w-4" />
                <span>Located in Mississauga</span>
              </div>
                
              {/* Main Headlines */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#ffd700] drop-shadow-2xl leading-tight whitespace-nowrap">
                  ONE MEDICAL CENTRE
                </h1>
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-theme-primary leading-snug">
                  Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#daa520]">Complete Healthcare</span> Destination
                </h2>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-theme-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                  Just steps from Square One, our modern facility brings you family doctors, specialists, pharmacy, dental, physio, vision, skin, foot, hearing, and wellness care — all under one roof.
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
                  href={pdfFile}
                  className="px-8 py-4 border-2 border-[#daa520] bg-theme-primary text-[#b8860b] font-semibold rounded-2xl transition-all duration-300 hover:bg-[#fff8dc] dark:hover:bg-black hover:text-[#daa520] hover:border-[#ffd700] hover:shadow-xl hover:shadow-[#ffd700]/30 focus:outline-none focus:ring-4 focus:ring-[#daa520]/50 text-center transform-gpu hover:-translate-y-1 shadow-lg shadow-[#ffd700]/20"
                  tabIndex={0}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="OneMedicalCentre.pdf"
                >
                  Learn More
                </a>
              </div>
                
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6">
                <a
                  href="tel:+16476602591"
                  className="flex items-center space-x-3 bg-theme-primary dark:bg-black px-4 py-4 rounded-xl border-2 border-[#daa520] text-theme-secondary text-sm hover:text-[#b8860b] dark:hover:text-[#ffd700] hover:bg-[#fffaf0] dark:hover:bg-black hover:border-[#ffd700] dark:hover:border-[#ffd700] hover:shadow-lg hover:shadow-[#ffd700]/30 focus:outline-none focus:ring-2 focus:ring-[#daa520] transition-all duration-300 transform-gpu hover:-translate-y-1 shadow-lg shadow-[#ffd700]/20"
                  aria-label="Call +647 660 2591"
                >
                  <div className="p-2 bg-[#fffacd] dark:bg-[#b8860b] rounded-lg">
                    <Phone className="h-4 w-4 text-[#daa520] dark:text-white" />
                  </div>
                  <span className="font-medium">+647 660 2591</span>
                </a>
                <a
                  href="mailto:onemedicalmississauga@gmail.com"
                  className="flex items-center space-x-3 bg-theme-primary dark:bg-black px-4 py-4 rounded-xl border-2 border-[#daa520] text-theme-secondary text-sm hover:text-[#b8860b] dark:hover:text-[#ffd700] hover:bg-[#fffaf0] dark:hover:bg-black hover:border-[#ffd700] dark:hover:border-[#ffd700] hover:shadow-lg hover:shadow-[#ffd700]/30 focus:outline-none focus:ring-2 focus:ring-[#daa520] transition-all duration-300 transform-gpu hover:-translate-y-1 shadow-lg shadow-[#ffd700]/20"
                  aria-label="Email Us"
                >
                  <div className="p-2 bg-[#fffacd] dark:bg-[#b8860b] rounded-lg">
                    <Mail className="h-4 w-4 text-[#daa520] dark:text-white" />
                  </div>
                  <span className="font-medium">Email Us</span>
                </a>
                <div className="flex items-center space-x-3 bg-theme-primary dark:bg-black px-4 py-4 rounded-xl border-2 border-[#daa520] text-theme-secondary text-sm hover:text-[#b8860b] dark:hover:text-[#ffd700] hover:bg-[#fffaf0] dark:hover:bg-black hover:border-[#ffd700] dark:hover:border-[#ffd700] hover:shadow-lg hover:shadow-[#ffd700]/30 focus:outline-none focus:ring-2 focus:ring-[#daa520] transition-all duration-300 transform-gpu hover:-translate-y-1 shadow-lg shadow-[#ffd700]/20">
                  <div className="p-2 bg-[#fffacd] dark:bg-[#b8860b] rounded-lg">
                    <Car className="h-5 w-5 text-[#daa520] dark:text-white" />
                  </div>
                  <span className="text-theme-secondary text-sm font-medium">Free Parking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Doctors Section */}
      <section
        ref={doctorsSectionRef}
        className="relative py-16 xs:py-20 sm:py-28 md:py-32 min-h-[90vh] flex items-center justify-center overflow-hidden bg-theme-primary"
      >
        {/* Animated Background with Parallax Effect */}
        <div
          className={`absolute inset-0 w-full h-full bg-center bg-cover transition-all duration-300 ease-out transform ${
            doctorsVisible ? 'scale-105 opacity-100' : 'scale-110 opacity-80'
          }`}
          style={{ 
            backgroundImage: `url(${doctorsImg})`, 
            filter: 'brightness(0.75) contrast(1.3) saturate(1.1)',
            backgroundAttachment: 'fixed'
          }}
          aria-hidden="true"
        ></div>
        
        {/* Dynamic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30"></div>
        
        {/* Enhanced Floating Elements with Staggered Animation */}
        <div className={`absolute top-20 left-10 w-4 h-4 bg-[#daa520]/70 rounded-full transition-all duration-[2000ms] delay-300 ${doctorsVisible ? 'opacity-100 animate-ping' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-40 right-20 w-3 h-3 bg-[#ffd700]/60 rounded-full transition-all duration-[2200ms] delay-500 ${doctorsVisible ? 'opacity-100 animate-pulse' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-32 left-20 w-5 h-5 bg-[#f5deb3]/50 rounded-full transition-all duration-[2400ms] delay-700 ${doctorsVisible ? 'opacity-100 animate-bounce' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-60 right-40 w-2 h-2 bg-[#daa520]/80 rounded-full transition-all duration-[1800ms] delay-900 ${doctorsVisible ? 'opacity-100 animate-pulse' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-20 right-16 w-3 h-3 bg-[#ffd700]/40 rounded-full transition-all duration-[2600ms] delay-1100 ${doctorsVisible ? 'opacity-100 animate-ping' : 'opacity-0 scale-0'}`}></div>
        
        {/* Subtle Light Rays */}
        <div className={`absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#daa520]/20 to-transparent transition-all duration-[2000ms] delay-400 ${doctorsVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#f0e68c]/15 to-transparent transition-all duration-[2200ms] delay-600 ${doctorsVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Main Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-2 xs:px-4 sm:px-8">
          <div className={`transition-all duration-300 ease-out transform ${
            doctorsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
          }`}>
            <div className="bg-theme-primary/15 dark:bg-slate-800/20 backdrop-blur-xl border border-[#daa520] shadow-2xl shadow-slate-900/30 rounded-3xl p-10 sm:p-8 flex flex-col items-center text-center gap-8 relative overflow-hidden">
              
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/5 via-transparent to-[#ffd700]/5 rounded-3xl"></div>
              
              {/* Badge with Enhanced Animation */}
              <div className={`inline-flex items-center space-x-3 bg-gradient-to-r from-[#fffacd]/80 to-[#fff8dc]/80 text-[#b8860b] px-6 py-3 rounded-full text-sm font-semibold border border-[#daa520]/60 shadow-lg backdrop-blur-sm transition-all duration-[800ms] delay-200 ${doctorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <Stethoscope className="h-5 w-5 text-[#b8860b]" />
                <span className="tracking-wide ">Our Medical Team</span>
              </div>
              
              {/* Main Heading with Enhanced Typography */}
              <h3 className={`text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 transition-all duration-[1000ms] delay-400 ${doctorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Meet Our{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#daa520] via-[#ffd700] to-[#daa520] bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                    Dedicated Doctors
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#daa520]/30 via-[#ffd700]/30 to-[#daa520]/30 blur-xl opacity-70 animate-pulse"></div>
                </span>
              </h3>
              
              {/* Description with Better Readability */}
              <p className={`text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-4 font-light transition-all duration-[1000ms] delay-600 ${doctorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Our team of experienced and compassionate healthcare professionals is committed to providing 
                <span className="text-[#f0e68c] font-medium"> personalized, world-class medical care</span> for you and your family.
              </p>
              
              {/* Decorative Divider */}
              <div className={`w-24 h-0.5 bg-gradient-to-r from-transparent via-[#daa520]/60 to-transparent my-4 transition-all duration-[800ms] delay-800 ${doctorsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
              
              {/* Secondary Heading */}
              <h4 className={`text-3xl sm:text-4xl font-bold text-white mt-4 mb-3 transition-all duration-[1000ms] delay-1000 ${doctorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Ready to Meet Your{' '}
                <span className="text-[#daa520]">Healthcare Team?</span>
              </h4>
              
              {/* Secondary Description */}
              <p className={`text-lg sm:text-xl text-white mb-6 max-w-2xl mx-auto leading-relaxed transition-all duration-[1000ms] delay-1200 ${doctorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Schedule your appointment today and experience the difference of personalized, comprehensive healthcare in our 
                <span className="text-[#d4af37] font-medium"> state-of-the-art facility.</span>
              </p>
              
              {/* Enhanced Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 transition-all duration-[1000ms] delay-1400 ${doctorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <button
                  className="group relative px-10 py-4 bg-gradient-to-r from-[#daa520] to-[#ffd700] text-slate-900 font-bold rounded-xl transition-all duration-300 hover:from-[#ffd700] hover:to-[#f0e68c] hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#daa520]/50 transform active:scale-95 overflow-hidden"
                  onClick={handleBookAppointment}
                  aria-label="Book Your Appointment"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center space-x-3">
                    <span className="text-lg">Book Appointment</span>
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
                
                <a
                  href="tel:+16476602591"
                  className="group relative px-10 py-4 bg-gradient-to-r from-slate-700/80 to-slate-800/80 text-white font-bold rounded-xl transition-all duration-300 hover:from-slate-600/80 hover:to-slate-700/80 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-slate-400/50 backdrop-blur-sm border border-slate-500/30 transform active:scale-95 overflow-hidden"
                  aria-label="Call Now"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center space-x-3">
                    <Phone className="h-6 w-6 group-hover:animate-pulse" />
                    <span className="text-lg">Call Now</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Doctors Cards Section */}
      <section ref={doctorsCardsRef} className="py-16 xs:py-20 sm:py-28 md:py-32 bg-theme-primary relative overflow-hidden">
        {/* Dynamic Background Layers */}
        <div className="absolute inset-0 bg-theme-primary"></div>
        
        {/* Enhanced Floating Elements with Dynamic Animations */}
        <div className={`absolute top-16 left-12 w-4 h-4 bg-[#daa520]/60 rounded-full transition-all duration-[2500ms] delay-200 ${doctorsCardsVisible ? 'opacity-100 animate-ping scale-110' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-32 right-24 w-3 h-3 bg-[#ffd700]/70 rounded-full transition-all duration-[2300ms] delay-400 ${doctorsCardsVisible ? 'opacity-100 animate-bounce scale-125' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-24 left-16 w-5 h-5 bg-[#f5deb3]/50 rounded-full transition-all duration-[2700ms] delay-600 ${doctorsCardsVisible ? 'opacity-100 animate-pulse scale-105' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-1/2 left-1/4 w-2 h-2 bg-[#daa520]/80 rounded-full transition-all duration-[2100ms] delay-800 ${doctorsCardsVisible ? 'opacity-100 animate-spin' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-1/3 right-1/3 w-3 h-3 bg-[#ffd700]/40 rounded-full transition-all duration-[2400ms] delay-1000 ${doctorsCardsVisible ? 'opacity-100 animate-pulse' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-1/3 right-12 w-4 h-4 bg-[#daa520]/60 rounded-full transition-all duration-[2600ms] delay-1200 ${doctorsCardsVisible ? 'opacity-100 animate-ping' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-20 left-1/2 w-2 h-2 bg-[#ffd700]/70 rounded-full transition-all duration-[2200ms] delay-1400 ${doctorsCardsVisible ? 'opacity-100 animate-bounce' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-16 right-1/4 w-3 h-3 bg-[#f5deb3]/50 rounded-full transition-all duration-[2800ms] delay-1600 ${doctorsCardsVisible ? 'opacity-100 animate-pulse' : 'opacity-0 scale-0'}`}></div>
        
        {/* Dynamic Light Rays with Staggered Reveal */}
        <div className={`absolute top-0 left-1/5 w-0.5 h-32 bg-gradient-to-b from-[#daa520]/30 to-transparent transition-all duration-[3000ms] delay-300 ${doctorsCardsVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
        <div className={`absolute top-0 right-1/4 w-0.5 h-24 bg-gradient-to-b from-[#ffd700]/25 to-transparent transition-all duration-[3200ms] delay-600 ${doctorsCardsVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
        <div className={`absolute bottom-0 left-1/3 w-0.5 h-28 bg-gradient-to-t from-[#daa520]/20 to-transparent transition-all duration-[3400ms] delay-900 ${doctorsCardsVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
        <div className={`absolute top-0 right-1/6 w-0.5 h-20 bg-gradient-to-b from-[#ffd700]/35 to-transparent transition-all duration-[3100ms] delay-1100 ${doctorsCardsVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header with Layered Animation */}
          <div className={`text-center mb-20 transition-all duration-400 ease-out transform ${
            doctorsCardsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
          }`}>
            <div className={`inline-flex items-center space-x-3 bg-theme-primary text-[#d4af37] px-8 py-4 rounded-full text-sm font-bold border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 mb-8 ${doctorsCardsVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-4 rotate-3'}`}>
              <Stethoscope className="h-5 w-5 text-[#d4af37]" />
              <span className="tracking-wide">Our Medical Experts</span>
            </div>
            <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-theme-primary mb-8 leading-tight transition-all duration-300 ${doctorsCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Meet Our{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#ffd700] bg-clip-text text-transparent">
                  Expert Doctors
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#daa520]/20 via-[#ffd700]/20 to-[#daa520]/20 blur-xl opacity-60 animate-pulse"></div>
              </span>
            </h3>
            <p className={`text-xl sm:text-2xl text-theme-secondary max-w-4xl mx-auto leading-relaxed transition-all duration-200 ${doctorsCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our team of <span className="text-[#b8860b] font-semibold">experienced healthcare professionals</span> is dedicated to providing you with the highest quality medical care, 
              combining expertise with <span className="text-[#b8860b] font-semibold">compassionate patient-centered approach.</span>
            </p>
          </div>
          
          {/* Enhanced Cards Grid with Premium Hover Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-16 md:mb-20 transition-all duration-300">
            {[
              {
                name: "Dr. Kashif Surahio",
                specialty: "Family Medicine",
                description: "Experienced in primary care and long-term patient relationships, focusing on overall health and wellness.",
                icon: Stethoscope,
                delay: 200,
              },
              {
                name: "Dr. Alexander Shayan",
                specialty: "Walk-In Doctor",
                description: "Available for urgent consultations, offering accessible care with efficiency and professionalism.",
                icon: UserCheck,
                delay: 300,
              },
              {
                name: "Dr. Faheem Naeem",
                specialty: "Walk-In Doctor",
                description: "Provides patient-centered, timely care for acute medical needs and minor health concerns.",
                icon: UserCheck,
                delay: 400,
              },
              {
                name: "Dr. Morcos Fahmy",
                specialty: "Internal Medicine & Infectious Disease",
                description: "Specializes in complex internal conditions and the prevention and treatment of infectious diseases.",
                icon: Shield,
                delay: 500,
              },
              {
                name: "Dr. Christina Gearges",
                specialty: "Internal Medicine & Infectious Disease",
                description: "Expert in managing chronic conditions and diagnosing infectious diseases with a holistic approach.",
                icon: Shield,
                delay: 600,
              },
              {
                name: "Dr. Wahdat Hamidi",
                specialty: "Optometrist",
                description: "Focused on vision care, eye exams, and tailored solutions for long-term eye health.",
                icon: Eye,
                delay: 700,
              },
              {
                name: "Dr. Osama Garani",
                specialty: "Cardiologist",
                description: "Dedicated to heart health, specializing in diagnostics, prevention, and cardiovascular care.",
                icon: Heart,
                delay: 800,
              },
              {
                name: "Dr. Michael Sobhy",
                specialty: "Pharmacy",
                description: "Trusted pharmacist offering expert medication guidance and health consultations.",
                icon: Pill,
                delay: 900,
              }
            ].map((doctor, index) => {
              const Icon = doctor.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-[1500ms] ease-out transform ${
                    doctorsCardsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'
                  }`}
                  style={{ transitionDelay: `${doctor.delay}ms` }}
                >
                  <div className="relative bg-gradient-to-br from-theme-primary/95 to-[#fff8dc]/80 group-hover:from-theme-primary group-hover:to-[#fffacd] transition-all duration-700 p-8 rounded-3xl shadow-xl border border-[#daa520] group-hover:border-[#ffd700] group-hover:shadow-2xl group-hover:shadow-[#ffd700]/20 group-hover:-translate-y-4 group-hover:scale-[1.02] h-full overflow-hidden backdrop-blur-sm">
                    {/* Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#daa520]/0 via-[#ffd700]/0 to-[#daa520]/0 group-hover:from-[#daa520]/10 group-hover:via-[#ffd700]/15 group-hover:to-[#daa520]/10 transition-all duration-700 rounded-3xl"></div>
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#daa520]/0 to-transparent group-hover:from-[#daa520]/20 transition-all duration-500 rounded-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-[#ffd700]/0 to-transparent group-hover:from-[#ffd700]/15 transition-all duration-500 rounded-3xl"></div>

                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                      <div className="bg-gradient-to-br from-[#daa520] to-[#ffd700] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 p-5 rounded-2xl w-fit mx-auto mb-6 shadow-lg group-hover:shadow-xl">
                        <Icon className="h-10 w-10 text-white group-hover:scale-110 transition-all duration-500" />
                      </div>
                      <h4 className="text-1xl font-bold text-theme-primary mb-3 group-hover:text-[#b8860b] transition-all duration-500 group-hover:scale-105">
                        {doctor.name}
                      </h4>
                      <div className="bg-theme-primary dark:bg-black text-[#d4af37] dark:text-[#ffd700] px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300">
                        {doctor.specialty}
                      </div>
                      <p className="text-theme-secondary leading-relaxed min-h-[100px] group-hover:text-theme-primary transition-all duration-500 text-base flex-grow">
                        {doctor.description}
                      </p>
                
                      {/* Floating Dots */}
                      <div className="absolute -top-3 -right-3 w-4 h-4 bg-[#daa520]/0 group-hover:bg-[#daa520]/90 rounded-full transition-all duration-500 group-hover:animate-pulse"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#ffd700]/0 group-hover:bg-[#ffd700]/70 rounded-full transition-all duration-700 group-hover:animate-bounce"></div>
                    </div>
                
                    {/* Animated Border Lines */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#daa520]/0 to-transparent group-hover:via-[#daa520]/70 transition-all duration-700 rounded-t-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[#ffd700]/0 to-transparent group-hover:via-[#ffd700]/70 transition-all duration-700 rounded-b-3xl"></div>
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#daa520]/0 to-transparent group-hover:via-[#daa520]/50 transition-all duration-700 rounded-l-3xl"></div>
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#ffd700]/0 to-transparent group-hover:via-[#ffd700]/50 transition-all duration-700 rounded-r-3xl"></div>
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