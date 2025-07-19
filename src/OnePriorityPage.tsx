import { useEffect, useRef, useState } from 'react';
import { Heart, Stethoscope, Shield, Award, ArrowRight, Pill, ShoppingBag, Eye, Dumbbell, UserCheck, Sparkles, Ear, Footprints, Users } from 'lucide-react';
import logo from './assets/logo.png';
import pdfFile from './assets/OneMedicalCentre.pdf';
import DigitalPulse from "./DigitalPulse";

const services = [
  { icon: Stethoscope, name: "Medical Doctors", description: "Comprehensive primary care and specialized medical services with experienced physicians", color: "from-amber-400 to-yellow-500" },
  { icon: Pill, name: "Pharmacy", description: "Full-service pharmacy with prescription medications and health consultations", color: "from-green-400 to-green-600" },
  { icon: ShoppingBag, name: "Medical Products", description: "Including CPAP masks and sleep products", color: "from-teal-400 to-teal-600" },
  { icon: Eye, name: "Optometry", description: "Eye exams, vision correction, and comprehensive eye health services", color: "from-purple-400 to-purple-600" },
  { icon: Dumbbell, name: "Physiotherapy", description: "Rehabilitation and wellness programs for optimal physical health recovery", color: "from-orange-400 to-orange-600" },
  { icon: UserCheck, name: "Men's Health", description: "Specialized care in urology and anti-aging treatments tailored for men", color: "from-emerald-400 to-emerald-600" },
  { icon: Sparkles, name: "Medical Aesthetics", description: "Professional cosmetic treatments and skin rejuvenation services", color: "from-pink-400 to-pink-600" },
  { icon: Ear, name: "Hearing Clinic", description: "Comprehensive hearing assessments and hearing aid services", color: "from-indigo-400 to-indigo-600" },
  { icon: Footprints, name: "Chiropody", description: "Expert foot and ankle care, including assessment, treatment, and prevention of foot disorders", color: "from-amber-400 to-amber-600" },
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
    <div className="min-h-screen bg-black relative">
      {/* Margin area above hero for all screens */}
      <div className="w-full" style={{height: '44px', background: '#000'}}></div>
      {/* Hero Section with Tagline */}
      <section ref={heroRef} className="relative bg-black py-20 sm:py-28 min-h-[80vh] flex items-center mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        {/* Floating decorative elements */}
        {/* <div className="absolute top-20 left-10 w-4 h-4 bg-[#d4af37]/30 rounded-full transition-all duration-[2000ms] delay-300 animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#d4af37]/20 rounded-full transition-all duration-[2200ms] delay-500 animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-[#d4af37]/10 rounded-full transition-all duration-[2400ms] delay-700 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#d4af37]/10 rounded-full transition-all duration-[2600ms] delay-1100 animate-ping"></div> */}

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
                    <StarShine className="random-star-2" delay={1.2} />
                    <StarShine className="random-star-3" delay={2.1} />
                    <StarShine className="random-star-4" delay={0.7} />
                    <StarShine className="random-star-5" delay={1.8} />
                    <StarShine className="random-star-6" delay={3.2} />
                    <style>{`
                    .random-star-1 { top: 15%; left: 25%; filter: blur(4px); }
                    .random-star-2 { top: 70%; left: 18%; filter: blur(4px); }
                    .random-star-3 { top: 45%; left: 77%; filter: blur(4px); }
                    .random-star-4 { top: 19%; left: 65%; filter: blur(4px); }
                    .random-star-5 { top: 76%; left: 45%; filter: blur(4px); }
                    .random-star-6 { top: 35%; left: 10%; filter: blur(4px); }
                    @keyframes bg-pulse { 0%, 100% { filter: blur(32px) brightness(1); opacity: 0.7; } 50% { filter: blur(48px) brightness(1.15); opacity: 1; } }
                    .animate-bg-pulse { animation: bg-pulse 6s infinite ease-in-out; }
                    @keyframes glisten-spot2 { 0% { left: -10%; top: 80%; opacity: 0.05; transform: scale(0.5); } 40% { opacity: 0.4; transform: scale(0.7); } 60% { left: 60%; top: 40%; opacity: 0.7; transform: scale(1); } 80% { opacity: 0.3; transform: scale(0.7); } 100% { left: 120%; top: 10%; opacity: 0.01; transform: scale(0.4); } }
                    .animate-glisten-spot2 { animation: glisten-spot2 4.5s infinite cubic-bezier(0.4,0,0.2,1) 1.2s; }
                    @keyframes glisten-spot3 { 0% { left: 0%; top: 50%; opacity: 0.08; transform: scale(0.7); } 25% { opacity: 0.3; transform: scale(0.9); } 55% { left: 50%; top: 10%; opacity: 0.6; transform: scale(1.2); } 80% { opacity: 0.2; transform: scale(0.8); } 100% { left: 100%; top: -10%; opacity: 0.01; transform: scale(0.5); } }
                    .animate-glisten-spot3 { animation: glisten-spot3 5.2s infinite cubic-bezier(0.4,0,0.2,1) 2.1s; }
                    .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-stops)); }
                    @keyframes star-shine { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
                    .star-shine { position: relative; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; animation: star-shine 3s infinite ease-in-out; }
                    @media (min-width: 640px) { .star-shine { width: 40px; height: 40px; } }
                    @media (min-width: 1024px) { .star-shine { width: 50px; height: 50px; } }
                    .star-ray { position: absolute; left: 50%; top: 50%; width: 8px; height: 24px; background: linear-gradient(180deg, #fffbe6 0%, #fffbe6 15%, #d4af37 35%, #d4af37 60%, rgba(255, 215, 0, 0.35) 90%, transparent 100%); clip-path: polygon(50% 0%, 92% 100%, 8% 100%); opacity: 0.99; transform-origin: 50% 100%; box-shadow: 0 0 32px 12px #fffbe6, 0 0 64px 24px #d4af37, 0 0 48px 12px #fffbe6, 0 0 96px 32px #d4af37, 0 0 24px 6px #fffbe6; }
                    @media (min-width: 640px) { .star-ray { width: 10px; height: 30px; box-shadow: 0 0 40px 14px #fffbe6, 0 0 80px 28px #d4af37, 0 0 56px 14px #fffbe6, 0 0 112px 40px #d4af37, 0 0 28px 7px #fffbe6; } }
                    @media (min-width: 1024px) { .star-ray { width: 12px; height: 38px; box-shadow: 0 0 48px 16px #fffbe6, 0 0 96px 32px #d4af37, 0 0 64px 16px #fffbe6, 0 0 128px 48px #d4af37, 0 0 32px 8px #fffbe6; } }
                    .star-ray.ray-1::before, .star-ray.ray-2::before, .star-ray.ray-3::before, .star-ray.ray-4::before { content: ''; position: absolute; left: 50%; top: 0; width: 12px; height: 12px; background: radial-gradient(circle, #fffbe6 0%, #ffd700 60%, transparent 100%); transform: translate(-50%, -40%); z-index: 1; filter: blur(1.5px); opacity: 0.7; pointer-events: none; }
                    @media (min-width: 640px) { .star-ray.ray-1::before, .star-ray.ray-2::before, .star-ray.ray-3::before, .star-ray.ray-4::before { width: 15px; height: 15px; filter: blur(1.8px); } }
                    @media (min-width: 1024px) { .star-ray.ray-1::before, .star-ray.ray-2::before, .star-ray.ray-3::before, .star-ray.ray-4::before { width: 18px; height: 18px; filter: blur(2px); } }
                    .star-ray.ray-1 { transform: translate(-50%, -100%) rotate(0deg); }
                    .star-ray.ray-2 { transform: translate(-50%, -100%) rotate(90deg); }
                    .star-ray.ray-3 { transform: translate(-50%, -100%) rotate(180deg); }
                    .star-ray.ray-4 { transform: translate(-50%, -100%) rotate(270deg); }
                    .star-center { position: absolute; left: 50%; top: 50%; width: 10px; height: 10px; background: radial-gradient(circle, #fffbe6 0%, #ffd700 70%, #daa520 100%); border-radius: 50%; box-shadow: 0 0 12px 3px #fffbe6, 0 0 24px 6px #daa520, 0 0 36px 9px rgba(255, 215, 0, 0.2); opacity: 1; transform: translate(-50%, -50%); z-index: 2; }
                    @media (min-width: 640px) { .star-center { width: 13px; height: 13px; box-shadow: 0 0 14px 3.5px #fffbe6, 0 0 28px 7px #daa520, 0 0 42px 10.5px rgba(255, 215, 0, 0.2); } }
                    @media (min-width: 1024px) { .star-center { width: 16px; height: 16px; box-shadow: 0 0 16px 4px #fffbe6, 0 0 32px 8px #daa520, 0 0 48px 12px rgba(255, 215, 0, 0.2); } }
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
                {/* Heart Badge */}
                <div className="lg:mt-[5%] inline-flex items-center space-x-2 bg-black text-[#d4af37] px-4 py-2 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 transition-all duration-300">
                    <Heart className="h-4 w-4" />
                  <span>One Priority</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#daa520]">Priority</span>
                </h2>
                <div className="flex justify-center lg:justify-start text-center lg:text-left">
                  <div className="w-88 h-1 bg-gradient-to-r from-[#ffd700] via-[#daa520] to-[#b8860b] rounded-full opacity-70 animate-pulse"></div>
                </div>
                <div className="bg-gradient-to-r from-[#daa520] to-[#ffd700] bg-clip-text text-transparent">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                    Placing your <span className="underline decoration-[#ffd700]/50">TOTAL</span> health care needs above all.
                  </h3>
                </div>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We believe in comprehensive, patient-centered care that addresses not just your immediate health concerns, 
                  but your overall well-being. Our integrated approach ensures every aspect of your health is our priority.
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
                  className="px-8 py-4 border-2 border-[#daa520] bg-black text-[#b8860b] font-semibold rounded-2xl transition-all duration-300 hover:bg-[#fff8dc] dark:hover:bg-black hover:text-[#daa520] hover:border-[#ffd700] hover:shadow-xl hover:shadow-[#ffd700]/30 focus:outline-none focus:ring-4 focus:ring-[#daa520]/50 text-center transform-gpu hover:-translate-y-1 shadow-lg shadow-[#ffd700]/20"
                  tabIndex={0}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="OneMedicalCentre.pdf"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DigitalPulse />

      {/* Services Section */}
      <section ref={servicesSectionRef} id="services" className="py-24 sm:py-32 min-h-[90vh] flex items-center justify-center overflow-hidden relative bg-black">
        {/* Animated Background with Parallax Effect */}
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
          }`}</style>

        {/* Animated floating elements */}
        <div className={`absolute top-10 left-10 w-3 h-3 bg-[#d4af37]/30 rounded-full transition-all duration-[1500ms] delay-300 ${servicesVisible ? 'opacity-100 animate-ping' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-20 right-20 w-4 h-4 bg-[#d4af37]/20 rounded-full transition-all duration-[1700ms] delay-500 ${servicesVisible ? 'opacity-100 animate-pulse' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-20 left-20 w-5 h-5 bg-[#d4af37]/10 rounded-full transition-all duration-[1900ms] delay-700 ${servicesVisible ? 'opacity-100 animate-bounce' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-10 right-10 w-3 h-3 bg-[#d4af37]/10 rounded-full transition-all duration-[2100ms] delay-900 ${servicesVisible ? 'opacity-100 animate-ping' : 'opacity-0 scale-0'}`}></div>
        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-black text-[#d4af37] px-6 py-3 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 mb-6">
              <Stethoscope className="h-4 w-4" />
              <span>Our Services</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#daa520]">Healthcare Services</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
                    className={`absolute group rounded-3xl border-2 transition-all duration-700 ease-out cursor-pointer backdrop-blur-sm shadow-xl
                      bg-black border-[#daa520] shadow-[#ffd700]/30
                      hover:border-[#ffd700] hover:shadow-2xl hover:shadow-[#ffd700]/40 hover:-translate-y-4 hover:scale-[1.02]
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
                      <div className={`relative rounded-2xl transition-all duration-500 flex-shrink-0 mb-4 p-4 bg-gradient-to-br from-[#fffacd] to-[#fff8dc] dark:from-[#b8860b]/30 dark:to-[#daa520]/20 shadow-lg`}>
                        <Icon className={`h-10 w-10 text-[#daa520] dark:text-[#ffd700]`} />
                      </div>
                      <div className="space-y-3 flex-1 flex flex-col justify-center min-h-0">
                        <h4 className={`font-bold transition-all duration-500 leading-tight ${
                          isActive ? 'text-xl text-white' : absOffset === 1 ? 'text-lg text-white' : 'text-base text-gray-300'
                        }`}>
                          {service.name}
                        </h4>
                        {isActive && (
                          <div className="relative">
                            <p className="text-gray-300 leading-relaxed transition-all duration-500 text-sm px-2 line-clamp-4">
                              {service.description}
                            </p>
                            {/* Divider: subtle gold */}
                            <div className="w-12 h-0.5 bg-gradient-to-r from-[#fffacd] to-[#ffd700] mx-auto mt-3 rounded-full"></div>
                          </div>
                        )}
                        {absOffset === 1 && (
                          <p className="text-gray-300 opacity-75 leading-relaxed transition-all duration-500 text-xs px-1 line-clamp-3">
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
      <section ref={priorityValuesRef} className="py-24 sm:py-32 bg-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-black"></div>
        <div className={`absolute top-20 left-10 w-4 h-4 bg-amber-400/40 rounded-full transition-all duration-[1500ms] delay-300 ${priorityValuesVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute top-40 right-20 w-3 h-3 bg-yellow-500/60 rounded-full transition-all duration-[1500ms] delay-500 ${priorityValuesVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-20 left-20 w-5 h-5 bg-amber-200/30 rounded-full transition-all duration-[1500ms] delay-700 ${priorityValuesVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            priorityValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-black text-[#d4af37] px-6 py-3 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 mb-6">
              <Heart className="h-4 w-4" />
              <span>Our Values</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#daa520]">Different</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
                  <div className="bg-gradient-to-br group-hover:from-[#daa520]/10 group-hover:to-[#ffd700]/10 transition-all duration-500 p-6 rounded-2xl w-fit mx-auto mb-6 shadow-xl border border-[#daa520] group-hover:border-[#ffd700]/30 group-hover:shadow-2xl group-hover:shadow-[#ffd700]/10 group-hover:-translate-y-2">
                    <Icon className="h-10 w-10 text-[#daa520] group-hover:scale-110 group-hover:text-[#ffd700] transition-all duration-300" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#b8860b] transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
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