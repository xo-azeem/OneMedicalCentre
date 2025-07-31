import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin, ArrowRight, Phone, Mail, Car, UserCheck, Shield, Stethoscope, Heart, Eye, Pill} from 'lucide-react';
import logo from './assets/logo.png';
import pdfFile from './assets/OneMedicalCentre.pdf';
import doctorsImg from './assets/doctors.png';
import { motion } from 'framer-motion';

export default function OptimizedMedicalPage() {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [doctorsVisible, setDoctorsVisible] = useState(false);
  const [doctorsAnimationTriggered, setDoctorsAnimationTriggered] = useState(false);
  const [doctorsCardsVisible, setDoctorsCardsVisible] = useState(false);
  
  const heroRef = useRef(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const doctorsSectionRef = useRef(null);
  const doctorsCardsRef = useRef(null);

  // Optimized hero animation
  const animateHeroContent = useCallback(() => {
    if ((heroContentRef.current as HTMLDivElement)?.children && !heroAnimated) {
      const heroChildren = Array.from((heroContentRef.current as HTMLDivElement).children);
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

  // Optimized intersection observer
  const createIntersectionObserver = useCallback((callback: IntersectionObserverCallback, threshold = 0.3) => {
    return new IntersectionObserver(callback, { threshold });
  }, []);

  useEffect(() => {
    animateHeroContent();
  }, [animateHeroContent]);

  // Doctors section observer
  useEffect(() => {
    const observer = createIntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !doctorsAnimationTriggered) {
            setDoctorsVisible(true);
            setDoctorsAnimationTriggered(true);
            observer.disconnect();
          }
        });
      },
      0.3
    );

    if (doctorsSectionRef.current) {
      observer.observe(doctorsSectionRef.current);
    }

    return () => observer.disconnect();
  }, [doctorsAnimationTriggered, createIntersectionObserver]);

  // Doctors cards observer
  useEffect(() => {
    const timer = setTimeout(() => {
      setDoctorsCardsVisible(true);
    }, 400); // 400ms delay for smooth entrance
    return () => clearTimeout(timer);
  }, []);

  const handleBookAppointment = useCallback(() => {
    window.open('https://mdplusmedical.inputhealth.com/ebooking#new', '_blank');
  }, []);

  // Star shine component for reusability
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
    <div className="min-h-screen bg-theme-primary">
      {/* Margin area above hero for all screens */}
      <div className="w-full" style={{height: '44px', background: '#000'}}></div>
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative bg-black pt-20 sm:pt-24 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 min-h-screen flex items-center overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#ffd700]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#daa520]/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#f5deb3]/10 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div ref={heroContentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Logo Section */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">

                {/* Square Container with Border */}
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
                
            {/* Content Section */}
            <div className="space-y-8 lg:space-y-6 text-center lg:text-left order-2 lg:order-1">

              {/* Location Badge */}
              <div className="lg:mt-[5%] inline-flex items-center space-x-2 bg-black text-[#d4af37] px-4 py-2 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 transition-all duration-300">
                  <MapPin className="h-4 w-4" />
                  <span>Located in Mississauga</span>
              </div>
              
              {/* Main Headlines */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow" style={{ textShadow: '0 1px 2px #daa520' }}>
                  ONE MEDICAL CENTRE
                </h1>
                <div className="flex justify-center lg:justify-start">
                  <div className="w-80 sm:w-96 md:w-[32rem] h-1 bg-gradient-to-r from-[#ffd700] via-[#d4af37] to-[#b8860b] rounded-full opacity-70 animate-pulse" />
                </div>
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
                  Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#daa520]">Complete Healthcare</span> Destination
                </h2>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                  Just steps from Square One, our modern facility brings you medical care, pharmacy, eye care, physiotherapy, and wellness solutions for all your health concerns in one convenient location.
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
                  className="px-8 py-4 border-2 border-[#daa520] bg-black text-[#b8860b] font-semibold rounded-2xl transition-all duration-300 hover:text-[#daa520] hover:border-[#ffd700] hover:shadow-xl hover:shadow-[#ffd700]/30 focus:outline-none focus:ring-4 focus:ring-[#daa520]/50 text-center transform-gpu hover:-translate-y-1 shadow-lg shadow-[#ffd700]/20"
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
                  className="flex items-center space-x-3 bg-theme-primary dark:bg-black px-4 py-4 rounded-xl border-2 border-[#daa520] text-gray-300 text-sm hover:text-[#b8860b] dark:hover:text-[#ffd700] hover:bg-[#fffaf0] dark:hover:bg-black hover:border-[#ffd700] dark:hover:border-[#ffd700] hover:shadow-lg hover:shadow-[#ffd700]/30 focus:outline-none focus:ring-2 focus:ring-[#daa520] transition-all duration-300 transform-gpu hover:-translate-y-1 shadow-lg shadow-[#ffd700]/20"
                  aria-label="Call +647 660 2591"
                >
                  <div className="p-2 bg-[#fffacd] dark:bg-[#b8860b] rounded-lg">
                    <Phone className="h-4 w-4 text-[#daa520] dark:text-white" />
                  </div>
                  <span className="font-medium">+647 660 2591</span>
                </a>
                <a
                  href="mailto:onemedicalmississauga@gmail.com"
                  className="flex items-center space-x-3 bg-theme-primary dark:bg-black px-4 py-4 rounded-xl border-2 border-[#daa520] text-gray-300 text-sm hover:text-[#b8860b] dark:hover:text-[#ffd700] hover:bg-[#fffaf0] dark:hover:bg-black hover:border-[#ffd700] dark:hover:border-[#ffd700] hover:shadow-lg hover:shadow-[#ffd700]/30 focus:outline-none focus:ring-2 focus:ring-[#daa520] transition-all duration-300 transform-gpu hover:-translate-y-1 shadow-lg shadow-[#ffd700]/20"
                  aria-label="Email Us"
                >
                  <div className="p-2 bg-[#fffacd] dark:bg-[#b8860b] rounded-lg">
                    <Mail className="h-4 w-4 text-[#daa520] dark:text-white" />
                  </div>
                  <span className="font-medium">Email Us</span>
                </a>
                <div className="flex items-center space-x-3 bg-theme-primary dark:bg-black px-4 py-4 rounded-xl border-2 border-[#daa520] text-gray-300 text-sm hover:text-[#b8860b] dark:hover:text-[#ffd700] hover:bg-[#fffaf0] dark:hover:bg-black hover:border-[#ffd700] dark:hover:border-[#ffd700] hover:shadow-lg hover:shadow-[#ffd700]/30 focus:outline-none focus:ring-2 focus:ring-[#daa520] transition-all duration-300 transform-gpu hover:-translate-y-1 shadow-lg shadow-[#ffd700]/20">
                  <div className="p-2 bg-[#fffacd] dark:bg-[#b8860b] rounded-lg">
                    <Car className="h-5 w-5 text-[#daa520] dark:text-white" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">Free Parking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section
        ref={doctorsSectionRef}
        className="relative bg-theme-primary pt-8 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10 overflow-hidden border-t-2 border-[#d4af37]/20"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-2 h-2 bg-[#daa520] rounded-full blur-sm"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Doctors Section Header and Description - moved above image */}
          <div className={`text-center mb-10 sm:mb-14 transition-all duration-400 ease-out transform ${doctorsCardsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className={`inline-flex items-center space-x-3 bg-theme-primary text-[#d4af37] px-8 py-4 rounded-full text-sm font-bold border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 mb-8 ${doctorsCardsVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-4 rotate-3'}`}>
              <Stethoscope className="h-5 w-5 text-[#d4af37]" />
              <span className="tracking-wide">Our Medical Experts</span>
            </div>
            <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight transition-all duration-300 ${doctorsCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#ffd700] bg-clip-text text-transparent">
                  Expert Doctors
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#daa520]/20 via-[#ffd700]/20 to-[#daa520]/20 blur-xl opacity-60 animate-pulse"></div>
              </span>
            </h3>
            {/* <p className={`text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-200 ${doctorsCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our team of <span className="text-[#b8860b] font-semibold">experienced healthcare professionals</span> is dedicated to providing you with the highest quality medical care, 
              combining expertise and a <span className="text-[#b8860b] font-semibold">compassionate patient-centered approach.</span>
            </p> */}
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-200">
              Our specialists are here to provide you with expert, compassionate care across a range of medical fields.
            </p>
          </div>
          {/* Full Width Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={doctorsVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative mb-6 md:mb-8"
          >
            {/* Animated Corner Elements - moved outside image container */}
            <motion.div
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-12 h-12 border-2 border-[#daa520] rounded-full opacity-70 z-20"
            />
            <motion.div
              animate={{ rotate: [360, 0], scale: [1, 0.8, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-[#ffd700] rounded-full opacity-50 z-20"
            />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-[#d4af37]/30 bg-black">
              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <img
                  src={doctorsImg}
                  alt="Our Medical Team"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-center rounded-3xl border-2 border-[#d4af37]/30 bg-black"
                  style={{ imageRendering: 'auto', background: '#18181b' }}
                  loading="lazy"
                  decoding="async"
                  onError={e => { e.currentTarget.src = 'https://via.placeholder.com/1200x600?text=Our+Medical+Team'; }}
                />
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl"></div>
              </motion.div>
              
              {/* Medical Excellence Badge - Top Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={doctorsVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="absolute top-3 left-3 sm:top-6 sm:left-6 md:top-8 md:left-8"
              >
                <div className="bg-white/95 backdrop-blur-lg rounded-xl md:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-xl border border-[#daa520]/30">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#b8860b]" />
                    </motion.div>
                    <div className="min-w-0">
                      <span className="text-[#b8860b] font-bold text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
                        Medical Excellence
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* One Team Badge - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={doctorsVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8"
              >
                <div className="bg-gradient-to-r from-[#daa520] to-[#ffd700] rounded-xl md:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-2xl">
                  <div className="flex items-center justify-center">
                    <span className="text-slate-900 font-extrabold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wide whitespace-nowrap drop-shadow-sm">
                      One Team
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Features List Section - Centered Below Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={doctorsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto mt-4 mb-6 sm:mt-6 sm:mb-8"
          >
            {/* Features List - Responsive Grid Layout
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
              {[
                { icon: Shield, text: "Board-certified specialists", delay: 1.6 },
                { icon: Clock, text: "24/7 emergency care", delay: 1.8 },
                { icon: Award, text: "Award-winning patient care", delay: 2.0 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={doctorsVisible ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.9 }}
                  transition={{
                    duration: 0.8,
                    delay: item.delay,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                    boxShadow: "0 8px 32px 0 rgba(218, 165, 32, 0.2)",
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="flex items-center gap-3 sm:gap-4 text-white/90 w-full max-w-[280px] px-3 py-2 sm:px-5 sm:py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-200 hover:bg-white/8 hover:border-[#daa520]/30"
                >
                  <div className="flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-[#daa520] to-[#ffd700] rounded-full flex items-center justify-center shadow-lg">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-900" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold leading-snug text-center lg:text-left flex-1">{item.text}</span>
                </motion.div>
              ))}
            </div> */}

            {/* Call to Action */}
            <div className="mt-12 max-w-2xl mx-auto text-center px-4 sm:px-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Ready to Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#daa520] to-[#ffd700]">Healthcare Team?</span>
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto leading-relaxed font-medium">
                Schedule your appointment today and experience the difference of personalized, comprehensive healthcare in our
                <span className="text-[#d4af37] font-semibold"> state-of-the-art facility.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#daa520] to-[#ffd700] text-slate-900 font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#daa520]/50 overflow-hidden shadow-xl shadow-[#ffd700]/20 hover:shadow-[#ffd700]/30 text-base sm:text-lg md:text-xl"
                  onClick={handleBookAppointment}
                  aria-label="Book Your Appointment"
                >
                  <span className="flex items-center space-x-3">
                    <span>Book Appointment</span>
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </button>
                <a
                  href="tel:+16476602591"
                  className="group relative px-8 py-4 bg-transparent text-white font-bold rounded-2xl border-2 border-white/20 hover:border-[#ffd700] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 overflow-hidden shadow-lg shadow-[#ffd700]/10 hover:shadow-[#ffd700]/30 text-base sm:text-lg md:text-xl"
                  aria-label="Call Now"
                >
                  <span className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span>Call Now</span>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-6 xs:py-10 sm:py-12 md:py-14 bg-theme-primary relative overflow-hidden">
        
        {/* Dynamic Background Layers */}
        <div className="absolute inset-0 bg-theme-primary"></div>
        
        {/* Enhanced Floating Elements with Dynamic Animations */}
        <div className={`absolute top-16 left-12 w-4 h-4 bg-[#d4af37]/60 rounded-full transition-all duration-[2500ms] delay-200 ${doctorsCardsVisible ? 'opacity-100 animate-ping scale-110' : 'opacity-0 scale-0'}`}></div>
        {/* <div className={`absolute top-32 right-24 w-3 h-3 bg-[#ffd700]/70 rounded-full transition-all duration-[2300ms] delay-400 ${doctorsCardsVisible ? 'opacity-100 animate-bounce scale-125' : 'opacity-0 scale-0'}`}></div> */}
        <div className={`absolute bottom-24 left-16 w-5 h-5 bg-[#d4af37]/50 rounded-full transition-all duration-[2700ms] delay-600 ${doctorsCardsVisible ? 'opacity-100 animate-pulse scale-105' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-1/2 left-1/4 w-2 h-2 bg-[#d4af37]/80 rounded-full transition-all duration-[2100ms] delay-800 ${doctorsCardsVisible ? 'opacity-100 animate-spin' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-1/3 right-1/3 w-3 h-3 bg-[#d4af37]/40 rounded-full transition-all duration-[2400ms] delay-1000 ${doctorsCardsVisible ? 'opacity-100 animate-pulse' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-1/3 right-12 w-4 h-4 bg-[#d4af37]/60 rounded-full transition-all duration-[2600ms] delay-1200 ${doctorsCardsVisible ? 'opacity-100 animate-ping' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute top-20 left-1/2 w-2 h-2 bg-[#ffd700]/70 rounded-full transition-all duration-[2200ms] delay-1400 ${doctorsCardsVisible ? 'opacity-100 animate-bounce' : 'opacity-0 scale-0'}`}></div>
        <div className={`absolute bottom-16 right-1/4 w-3 h-3 bg-[#d4af37]/50 rounded-full transition-all duration-[2800ms] delay-1600 ${doctorsCardsVisible ? 'opacity-100 animate-pulse' : 'opacity-0 scale-0'}`}></div>
        
        {/* Dynamic Light Rays with Staggered Reveal */}
        <div className={`absolute top-0 left-1/5 w-0.5 h-32 bg-gradient-to-b from-[#daa520]/30 to-transparent transition-all duration-[3000ms] delay-300 ${doctorsCardsVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
        <div className={`absolute top-0 right-1/4 w-0.5 h-24 bg-gradient-to-b from-[#ffd700]/25 to-transparent transition-all duration-[3200ms] delay-600 ${doctorsCardsVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
        <div className={`absolute bottom-0 left-1/3 w-0.5 h-28 bg-gradient-to-t from-[#daa520]/20 to-transparent transition-all duration-[3400ms] delay-900 ${doctorsCardsVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
        <div className={`absolute top-0 right-1/6 w-0.5 h-20 bg-gradient-to-b from-[#ffd700]/35 to-transparent transition-all duration-[3100ms] delay-1100 ${doctorsCardsVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
      </section>

      {/* Enhanced Doctors Cards Section */}
      <section ref={doctorsCardsRef} className="py-8 xs:py-10 sm:py-14 md:py-16 bg-theme-primary relative overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header with Layered Animation */}
          <div className={`text-center mb-6 mt-0 sm:mt-1`}>
            <h4 className="text-4xl mb-5 sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2 leading-tight">
              Meet our{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#ffd700] bg-clip-text text-transparent">
                  Team
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#daa520]/20 via-[#ffd700]/20 to-[#daa520]/20 blur-xl opacity-60 animate-pulse"></div>
              </span>
            </h4>
            {/* <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-200">
              Our specialists are here to provide you with expert, compassionate care across a range of medical fields.
            </p> */}
            <p className={`text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-200 ${doctorsCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our team of <span className="text-[#b8860b] font-semibold">experienced healthcare professionals</span> is dedicated to providing you with the highest quality medical care, 
              combining expertise and a <span className="text-[#b8860b] font-semibold">compassionate patient-centered approach.</span>
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
                  className={`group transition-all duration-[1500ms] ease-out transform ${doctorsCardsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
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
                      <h4 className="text-1xl font-bold text-white mb-3 group-hover:text-[#b8860b] transition-all duration-500 group-hover:scale-105">
                        {doctor.name}
                      </h4>
                      <div className="bg-theme-primary dark:bg-black text-[#d4af37] dark:text-[#ffd700] px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300">
                        {doctor.specialty}
                      </div>
                      <p className="text-gray-300 leading-relaxed min-h-[100px] group-hover:text-theme-primary transition-all duration-500 text-base flex-grow">
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