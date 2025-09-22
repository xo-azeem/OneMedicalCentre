import { useEffect, useRef, useState } from 'react';
import { Stethoscope, Heart, Eye, Pill, Dumbbell, Ear, Footprints, Users,Shield,Award,Calendar,Clock,Phone,Mail,Activity,Brain,Bone,Baby,UserRound, UserCircle, Hand, Biohazard, Flower, Globe } from 'lucide-react';
import logo from './assets/logo.png';

// 22 services with icons and booking URLs including Family Doctor with sub-options

const services = [
  { 
    icon: Stethoscope, name: "Family Doctor", shortName: "Family Dr.", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Comprehensive primary care", 
    subServices: [
      { name: "Male Doctor", url: "https://mdplusmedical.inputhealth.com/ebooking#new" },
      { name: "Female Doctor", url: "https://mdplusmedical.inputhealth.com/ebooking#new" }
    ]
  },
  { icon: Shield, name: "Internal Medicine", shortName: "Internal Med.", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Internal medicine specialists" },
  { icon: Biohazard, name: "Infectious Disease", shortName: "Infection Dis.", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Infectious disease treatment" },
  { icon: Globe, name: "Travel Clinic", shortName: "Travel", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Travel health services" },
  { icon: Activity, name: "Diabetes Clinic", shortName: "Diabetes", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Diabetes management" },
  { icon: Heart, name: "Heart Health", shortName: "Heart", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Cardiovascular care" },
  { icon: Bone, name: "Pain / Injury", shortName: "Pain", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Pain and injury treatment" },
  { icon: Flower, name: "Allergy Clinic", shortName: "Allergy", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Allergy testing and treatment" },
  { icon: Dumbbell, name: "Weight Loss Clinic", shortName: "Weight", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Weight management programs" },
  { icon: Brain, name: "Mental Health", shortName: "Mental Health", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Mental health services" },
  { icon: Baby, name: "Pediatrics", shortName: "Kids Clinic", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Children's healthcare" },
  { 
    icon: UserRound, 
    name: "Senior Care", 
    shortName: "Senior", 
    url: "https://mdplusmedical.inputhealth.com/ebooking#new", 
    description: "Critical care services",
    subServices: [
      { name: "In-Person", url: "https://mdplusmedical.inputhealth.com/ebooking#new" },
      { name: "Virtual", url: "https://mdplusmedical.inputhealth.com/ebooking#new" }
    ]
  },
  { icon: UserCircle, name: "Men's Health", shortName: "Men's", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Men's health services" },
  { icon: Users, name: "Women's Health", shortName: "Women's", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Women's health services" },
  { icon: Award, name: "Laser Botox", shortName: "Laser", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Cosmetic treatments" },
  { icon: Clock, name: "Sleep Clinic", shortName: "Sleep", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Sleep disorder treatment" },
  { icon: Ear, name: "Hearing Clinic", shortName: "Hearing", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Hearing assessment and care" },
  { icon: Eye, name: "Vision Clinic", shortName: "Vision", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Eye care and vision services" },
  { icon: Hand, name: "Massage Therapy", shortName: "Massage", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Therapeutic massage" },
  { icon: Footprints, name: "Foot Clinic", shortName: "Feet", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Podiatry and foot care" },
  { icon: Dumbbell, name: "Physiotherapy", shortName: "Physio", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Physical therapy and rehabilitation" },
  { icon: Pill, name: "Pharmacy", shortName: "Pharmacy", url: "https://mdplusmedical.inputhealth.com/ebooking#new", description: "Prescription and pharmacy services" }
];

export default function AppointmentBookingPage() {
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [servicesAnimationTriggered, setServicesAnimationTriggered] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [showFamilySubServices, setShowFamilySubServices] = useState(false);
  const [showSeniorCareSubServices, setShowSeniorCareSubServices] = useState(false);
  const [showFamilySubServicesMobile, setShowFamilySubServicesMobile] = useState(false);
  const [showSeniorCareSubServicesMobile, setShowSeniorCareSubServicesMobile] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);

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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleServiceClick = (url: string) => {
    window.open(url, '_blank');
  };


  // Calculate position for circular layout
  const getCircularPosition = (index: number, total: number, radius: number) => {
    const angle = (2 * Math.PI * index) / total - Math.PI / 2; // Start from top
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Margin area above hero for all screens */}
      <div className="w-full" style={{height: '44px', background: '#f8f9fa'}}></div>
      
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative bg-white pt-20 sm:pt-24 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 min-h-screen flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#ffd700]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#daa520]/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#f5deb3]/10 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div ref={heroContentRef} className="text-center">
             
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white text-[#daa520] px-4 py-2 rounded-full text-sm font-medium border-2 border-[#daa520] shadow-lg shadow-gray-400/30 hover:shadow-xl hover:shadow-gray-500/30 transition-all duration-300 mb-8">
              <Calendar className="h-4 w-4 text-gray-700" />
              <span className="text-gray-700">Book Your Appointment</span>
            </div>
            
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src={logo} 
                alt="One Medical Centre Logo" 
                className="w-56 sm:w-72 lg:w-[22rem] h-56 sm:h-72 lg:h-[22rem] object-contain drop-shadow-2xl" 
              />
            </div>

            {/* Main Headlines */}
            <div className="space-y-4 mb-12">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow text-[#daa520]" style={{ textShadow: '0 1px 1px #daa520' }}>
                BOOK APPOINTMENT
              </h1>
              <div className="flex justify-center">
                <div className="w-80 sm:w-96 md:w-[32rem] h-1 bg-gradient-to-r from-[#ffd700] via-[#d4af37] to-[#b8860b] rounded-full opacity-70 animate-pulse" />
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent leading-snug">
                Choose Your <span className="text-[#daa520] font-bold">Healthcare Service</span>
              </h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium text-center">
                Select from our comprehensive range of medical services and book your appointment with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesSectionRef} 
        className="py-20 sm:py-24 bg-gray-50 relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gray-50"></div>
        
        {/* Glisten Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="glisten-spot absolute top-[15%] left-[10%] w-20 h-20 bg-gradient-radial from-[#d4af37]/70 via-white/30 to-white/0 rounded-full blur-xl opacity-50 animate-glisten-spot2"></div>
          <div className="glisten-spot absolute top-[50%] left-0 w-24 h-24 bg-gradient-radial from-[#d4af37]/60 via-[#d4af37]/30 to-white/0 rounded-full blur-xl opacity-60 animate-glisten-spot3"></div>
        </div>

        <style>{`
        @keyframes glisten-spot2{0%{left:-10%;top:80%;opacity:0.05;transform:scale(0.5);}40%{opacity:0.4;transform:scale(0.7);}60%{left:60%;top:40%;opacity:0.7;transform:scale(1);}80%{opacity:0.3;transform:scale(0.7);}100%{left:120%;top:10%;opacity:0.01;transform:scale(0.4);}}
        .animate-glisten-spot2{animation:glisten-spot2 4.5s infinite cubic-bezier(0.4,0,0.2,1) 1.2s;}
        @keyframes glisten-spot3{0%{left:0%;top:50%;opacity:0.08;transform:scale(0.7);}25%{opacity:0.3;transform:scale(0.9);}55%{left:50%;top:10%;opacity:0.6;transform:scale(1.2);}80%{opacity:0.2;transform:scale(0.8);}100%{left:100%;top:-10%;opacity:0.01;transform:scale(0.5);}}
        .animate-glisten-spot3{animation:glisten-spot3 5.2s infinite cubic-bezier(0.4,0,0.2,1) 2.1s;}
        .bg-gradient-radial{background:radial-gradient(circle,var(--tw-gradient-stops));}
        `}</style>
        

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6">
              Our <span className="text-[#daa520] font-bold">Medical Services</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Choose from our comprehensive range of healthcare services. Click on any service to book your appointment.
            </p>
          </div>

          {/* Instruction text for desktop */}
          <div className={`text-center mb-4 transition-all duration-1000 ease-out transform ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '100ms' }}>
            <p className="text-lg text-gray-600 font-medium">
              <span className="text-[#daa520] font-semibold">Click an icon</span> you want to book for
            </p>
          </div>
            
          {/* Desktop Circular Layout */}
          <div className="hidden lg:block">
            {/* Instruction text for desktop */}
            {/* <div className={`text-center mb-8 transition-all duration-1000 ease-out transform ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '100ms' }}>
              <p className="text-lg text-gray-600 font-medium">
                <span className="text-[#daa520] font-semibold">Click an icon</span> you want to book for
              </p>
            </div> */}
            
            <div className={`relative w-full h-[800px] flex items-center justify-center transition-all duration-1000 ease-out transform ${
              servicesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} style={{ transitionDelay: '200ms' }}>
              
              {/* Central Logo */}
              <div className="relative z-10 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="One Medical Centre Logo" 
                  className="w-56 sm:w-72 lg:w-[22rem] h-56 sm:h-72 lg:h-[22rem] object-contain drop-shadow-2xl" 
                />
              </div>

              {/* Circular Service Links */}
              {services.map((service, index) => {
                const Icon = service.icon;
                const radius = 335; // Distance from center
                 const position = getCircularPosition(index, services.length, radius);
                 const isHovered = hoveredService === index;
                 const isFamilyDoctor = service.name === "Family Doctor";
                 const isSeniorCare = service.name === "Senior Care";
                
                return (
                  <div key={index}>
                    {/* Main Service Button with Hover Area */}
                    <div
                      className="absolute group cursor-pointer"
                      style={{
                        left: `calc(50% + ${position.x}px)`,
                        top: `calc(50% + ${position.y}px)`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: isHovered ? 20 : 10
                      }}
                       onMouseEnter={() => {
                         if (hoverTimeout) {
                           clearTimeout(hoverTimeout);
                           setHoverTimeout(null);
                         }
                         setHoveredService(index);
                         if (isFamilyDoctor) setShowFamilySubServices(true);
                         if (isSeniorCare) setShowSeniorCareSubServices(true);
                       }}
                       onMouseLeave={() => {
                         const timeout = setTimeout(() => {
                           setHoveredService(null);
                           if (isFamilyDoctor) setShowFamilySubServices(false);
                           if (isSeniorCare) setShowSeniorCareSubServices(false);
                         }, 200); // 200ms delay
                         setHoverTimeout(timeout);
                       }}
                       onClick={() => !isFamilyDoctor && !isSeniorCare && handleServiceClick(service.url)}
                    >
                       {/* Service Button */}
                       <div className="relative w-24 h-24 bg-white border-2 border-[#daa520] rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#daa520]/20 hover:border-[#daa520] hover:scale-110 transition-all duration-500 ease-out flex flex-col items-center justify-center">
                         <Icon className="h-7 w-7 text-[#daa520] group-hover:text-[#b8860b] transition-all duration-500 ease-out" />
                         <span className="text-xs font-semibold text-gray-700 mt-1 group-hover:text-[#daa520] transition-all duration-500 ease-out text-center leading-tight px-2 group-hover:scale-105">
                           {service.name}
                         </span>
                       </div>

                       {/* Tooltip for non-family doctor and non-senior care services */}
                       {isHovered && !isFamilyDoctor && !isSeniorCare && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-2xl whitespace-nowrap z-30 animate-in slide-in-from-bottom-2 fade-in duration-300">
                          <div className="text-center">
                            <div className="font-semibold">{service.name}</div>
                            <div className="text-xs text-gray-300">{service.description}</div>
                          </div>
                          {/* Arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                        </div>
                       )}

                       {/* Family Doctor Sub-Services - Below the icon */}
                       {isFamilyDoctor && showFamilySubServices && service.subServices && (
                        <div 
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white border-2 border-[#daa520] rounded-lg shadow-2xl shadow-[#daa520]/20 p-2 whitespace-nowrap z-30 animate-in slide-in-from-top-2 fade-in duration-300"
                          onMouseEnter={() => {
                            if (hoverTimeout) {
                              clearTimeout(hoverTimeout);
                              setHoverTimeout(null);
                            }
                          }}
                          onMouseLeave={() => {
                            const timeout = setTimeout(() => {
                              setHoveredService(null);
                              setShowFamilySubServices(false);
                            }, 200);
                            setHoverTimeout(timeout);
                          }}
                        >
                          <div className="text-center mb-2">
                            <div className="font-semibold text-gray-800">{service.name}</div>
                            <div className="text-xs text-gray-600">{service.description}</div>
                          </div>
                          <div className="space-y-2">
                            {service.subServices.map((subService, subIndex) => (
                              <button
                                key={subIndex}
                                onClick={() => handleServiceClick(subService.url)}
                                className="block w-full px-4 py-2 text-sm bg-gradient-to-r from-[#daa520] to-[#d4af37] text-white rounded-md hover:from-[#d4af37] hover:to-[#ffd700] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out transform"
                              >
                                {subService.name}
                              </button>
                            ))}
                          </div>
                          {/* Arrow pointing up */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
                        </div>
                       )}

                       {/* Senior Care Sub-Services - Above the icon */}
                       {isSeniorCare && showSeniorCareSubServices && service.subServices && (
                        <div 
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-white border-2 border-[#daa520] rounded-lg shadow-2xl shadow-[#daa520]/20 p-2 whitespace-nowrap z-30 animate-in slide-in-from-bottom-2 fade-in duration-300"
                          onMouseEnter={() => {
                            if (hoverTimeout) {
                              clearTimeout(hoverTimeout);
                              setHoverTimeout(null);
                            }
                          }}
                          onMouseLeave={() => {
                            const timeout = setTimeout(() => {
                              setHoveredService(null);
                              setShowSeniorCareSubServices(false);
                            }, 200);
                            setHoverTimeout(timeout);
                          }}
                        >
                          <div className="text-center mb-2">
                            <div className="font-semibold text-gray-800">{service.name}</div>
                            <div className="text-xs text-gray-600">{service.description}</div>
                          </div>
                          <div className="space-y-2">
                            {service.subServices.map((subService, subIndex) => (
                              <button
                                key={subIndex}
                                onClick={() => handleServiceClick(subService.url)}
                                className="block w-full px-4 py-2 text-sm bg-gradient-to-r from-[#daa520] to-[#d4af37] text-white rounded-md hover:from-[#d4af37] hover:to-[#ffd700] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out transform"
                              >
                                {subService.name}
                              </button>
                            ))}
                          </div>
                          {/* Arrow pointing down */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                        </div>
                       )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet Grid Layout */}
          <div className="lg:hidden">
            <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 ease-out transform ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: '200ms' }}>
              {services.map((service, index) => {
                 const Icon = service.icon;
                 const isFamilyDoctor = service.name === "Family Doctor";
                 const isSeniorCare = service.name === "Senior Care";
                
                return (
                  <div key={index} className="relative">
                    <div
                      className="group bg-white border-2 border-[#daa520] rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:shadow-gray-700/30 hover:border-[#ffd700] hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        if (isFamilyDoctor) {
                          setShowFamilySubServicesMobile(!showFamilySubServicesMobile);
                        } else if (isSeniorCare) {
                          setShowSeniorCareSubServicesMobile(!showSeniorCareSubServicesMobile);
                        } else {
                          handleServiceClick(service.url);
                        }
                      }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="relative p-3 rounded-xl w-fit mx-auto mb-3 shadow-lg group-hover:shadow-xl group-hover:shadow-gray-400/30">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] via-[#daa520] to-[#ffd700] rounded-xl"></div>
                          <div className="absolute inset-1 bg-white rounded-lg"></div>
                          <div className="relative p-2 w-full h-full flex items-center justify-center">
                            <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-gray-500 group-hover:text-[#daa520] group-hover:scale-110 transition-all duration-500" />
                          </div>
                        </div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 group-hover:text-[#b8860b] transition-colors duration-300">
                          {service.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Family Doctor Sub-Services for Mobile */}
                    {isFamilyDoctor && showFamilySubServicesMobile && service.subServices && (
                      <div className="mt-2 space-y-2">
                        {service.subServices.map((subService, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => handleServiceClick(subService.url)}
                            className="w-full px-3 py-2 text-sm bg-gradient-to-r from-[#daa520] to-[#d4af37] text-white rounded-lg hover:from-[#d4af37] hover:to-[#ffd700] transition-all duration-300 shadow-md hover:shadow-lg"
                          >
                            {subService.name}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Senior Care Sub-Services for Mobile */}
                    {isSeniorCare && showSeniorCareSubServicesMobile && service.subServices && (
                      <div className="mt-2 space-y-2">
                        {service.subServices.map((subService, subIndex) => (
                          <button
                            key={subIndex}
                            onClick={() => handleServiceClick(subService.url)}
                            className="w-full px-3 py-2 text-sm bg-gradient-to-r from-[#daa520] to-[#d4af37] text-white rounded-lg hover:from-[#d4af37] hover:to-[#ffd700] transition-all duration-300 shadow-md hover:shadow-lg"
                          >
                            {subService.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Page Links and Contact Information */}
          <div className={`mt-8 sm:mt-12 lg:mt-8 text-center transition-all duration-1000 ease-out transform ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="max-w-2xl mx-auto">
              {/* Page Links */}
              <div className="mb-8">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <a href="/" className="text-xl font-bold text-gray-800 hover:text-[#daa520] transition-colors duration-300">
                    One Team
                  </a>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-[#daa520] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#daa520] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#daa520] rounded-full"></div>
                  </div>
                  <a href="/priority" className="text-xl font-bold text-gray-800 hover:text-[#daa520] transition-colors duration-300">
                    One Priority
                  </a>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-[#daa520] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#daa520] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#daa520] rounded-full"></div>
                  </div>
                  <a href="/place" className="text-xl font-bold text-gray-800 hover:text-[#daa520] transition-colors duration-300">
                    One Place
                  </a>
                </div>
              </div>

              {/* Call Button */}
              <div className="mb-6">
                <a
                  href="tel:+16476602591"
                  className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[#daa520] to-[#d4af37] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:from-[#d4af37] hover:to-[#ffd700] hover:shadow-xl hover:-translate-y-1 text-lg"
                >
                  <Phone className="h-6 w-6" />
                  <span>Call Us</span>
                </a>
              </div>

              {/* 24hr Booking Line Text */}
              <p className="text-gray-600 font-medium mb-6">
                24 hr booking line
              </p>

              {/* Email Button */}
              <div>
                <a
                  href="mailto:onemedicalmississauga@gmail.com"
                  className="inline-flex items-center justify-center space-x-3 border-2 border-[#daa520] text-gray-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:text-[#daa520] hover:shadow-xl hover:-translate-y-1 text-lg"
                >
                  <Mail className="h-6 w-6" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}