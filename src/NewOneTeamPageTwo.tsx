import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin, ArrowRight, Phone, Mail, UserCheck, Shield, Stethoscope, Heart, Eye, Pill} from 'lucide-react';
import logo from './assets/logo.png';
import pdfFile from './assets/OneMedicalCentre.pdf';
import doctorsImg from './assets/doctors.png';
import { motion } from 'framer-motion';

// Add Cossette Titre font for elegant headings
const cossetteFont = {
  fontFamily: "'Cossette Titre', serif",
  fontWeight: 700,
  letterSpacing: '0.05em',
  lineHeight: '0.9'
};

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

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative bg-white pt-24 sm:pt-36 md:pt-32 lg:pt-28 xl:pt-24 pb-16 sm:pb-20 lg:pb-24 min-h-screen flex items-center overflow-hidden"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div ref={heroContentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Logo Section */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">
                {/* Elegant Container */}
                <div className="w-80 sm:w-80 lg:w-[28rem] h-80 sm:h-80 lg:h-[28rem] border border-gray-200 rounded-2xl shadow-lg transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-xl bg-white">
                  {/* Inner container */}
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white">
                    {/* Logo */}
                    <img 
                      src={logo} 
                      alt="One Medical Centre Hero Logo" 
                      className="relative z-10 w-56 sm:w-72 lg:w-[22rem] h-56 sm:h-72 lg:h-[22rem] object-contain transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                </div>
              </div>
            </div>
                
            {/* Content Section */}
            <div className="space-y-8 lg:space-y-6 text-center lg:text-left order-2 lg:order-1">

              {/* Location Badge */}
              <div className="lg:mt-[5%] inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <span>Located in Mississauga</span>
              </div>
              
              {/* Main Headlines */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl font-bold tracking-tight leading-tight text-[#F4CE6D]" style={cossetteFont}>
                  ONE MEDICAL CENTRE
                </h1>
                <div className="flex justify-center lg:justify-start">
                  <div className="w-80 sm:w-96 md:w-[34rem] h-1 bg-[#F4CE6D] rounded-full opacity-80" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-snug" style={cossetteFont}>
                <span className="text-gray-500 font-bold">Your</span> <span className="text-[#F4CE6D] font-bold">Complete Healthcare</span> <span className="text-gray-500 font-bold">Destination</span>
                </h2>
                <p className="text-xl sm:text-2xl text-gray-800 max-w-5xl mx-auto leading-relaxed transition-all duration-200 mb-0 text-justify" style={{ fontWeight: 400, letterSpacing: '0.02em'  }}>
                  Just steps from Square One, our modern facility brings you medical care, pharmacy, eye care, physiotherapy, and wellness solutions for all your health concerns in one convenient location.
                </p>
              </div>
                
              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-center lg:justify-start pt-4">
                <button
                  className="group w-full px-8 py-4 bg-[#F4CE6D] text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:bg-[#F4CE6D]/90 hover:shadow-xl hover:shadow-gray-400/30 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#F4CE6D]/50 transform-gpu shadow-lg"
                  onClick={handleBookAppointment}
                  aria-label="Book Appointment"
                >
                  <span className="flex items-center space-x-3 justify-center">
                    <span>Book Appointment</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <a
                  href={pdfFile}
                  className="w-full px-8 py-4 border-2 border-gray-300 bg-white text-gray-700 font-semibold text-lg rounded-2xl transition-all duration-300 hover:text-gray-900 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-400/30 focus:outline-none focus:ring-4 focus:ring-gray-300/50 text-center transform-gpu hover:-translate-y-1 shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="OneMedicalCentre.pdf"
                >
                  Learn More
                </a>
              </div>
                
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-0">
                <a
                  href="tel:+16476602591"
                  className="flex items-center justify-center space-x-3 bg-white px-8 py-3 rounded-2xl border-2 border-gray-300 text-gray-700 text-base hover:text-gray-900 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-400/30 focus:outline-none focus:ring-4 focus:ring-gray-300/50 transition-all duration-300 transform-gpu hover:-translate-y-1 shadow-lg"
                  aria-label="Call +647 660 2591"
                >
                  <div className="p-2">
                    <Phone className="h-6 w-6 text-gray-600" />
                  </div>
                  <span className="font-semibold">Contact Us</span>
                </a>
                <a
                  href="mailto:onemedicalmississauga@gmail.com"
                  className="flex items-center justify-center space-x-3 bg-white px-8 py-3 rounded-2xl border-2 border-gray-300 text-gray-700 text-base hover:text-gray-900 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-400/30 focus:outline-none focus:ring-4 focus:ring-gray-300/50 transition-all duration-300 transform-gpu hover:-translate-y-1 shadow-lg"
                  aria-label="Email Us"
                >
                  <div className="p-2">
                    <Mail className="h-6 w-6 text-gray-600" />
                  </div>
                  <span className="font-semibold">Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section
        ref={doctorsSectionRef}
        className="relative bg-gray-50 pt-8 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10 overflow-hidden border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Doctors Section Header and Description */}
          <div className={`text-center mb-5 sm:mb-14 transition-all duration-400 ease-out transform ${doctorsCardsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4CE6D] mb-6 leading-tight transition-all duration-300 ${doctorsCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={cossetteFont}>
              OUR{' '}
              <span className="relative inline-block">
                <span className="text-[#F4CE6D] font-bold">
                  EXPERT DOCTORS
                </span>
              </span>
            </h3>
            <h4 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4 tracking-tight" style={cossetteFont}>
              ONE TEAM
            </h4>
            <p className="text-xl sm:text-2xl text-gray-800 max-w-5xl mx-auto leading-relaxed transition-all duration-200 mb-0 text-justify" style={{ fontWeight: 400, letterSpacing: '0.02em' }}>
              Our specialists are here as <span className="text-gray-800 font-semibold">One Team</span> to provide you with expert, compassionate care across a range of medical fields. With certified physicians and allied health professionals under one roof, you benefit from <span className="font-bold" >integrated treatment plans</span>, <span className="font-bold">modern diagnostics</span>, and <span className="font-bold">personalized follow-up</span> designed around your goals.
            </p>
          </div>
          
          {/* One Team Heading */}
          <div className="text-center">
            <div className="w-24 h-1 bg-[#F4CE6D] rounded-full mx-auto opacity-80 mb-6"></div>
          </div>

          {/* Full Width Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={doctorsVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative mb-6 md:mb-8"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-white">
              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <img
                  src={doctorsImg}
                  alt="Our Medical Team"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-center rounded-3xl"
                  loading="lazy"
                  decoding="async"
                  onError={e => { e.currentTarget.src = 'https://via.placeholder.com/1200x600?text=Our+Medical+Team'; }}
                />
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl"></div>
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
            {/* Call to Action */}
            <div className="mt-12 max-w-5xl mx-auto text-center px-4 sm:px-0">
              <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#F4CE6D] mb-7 tracking-tight" style={cossetteFont}>
                READY TO MEET YOUR HEALTHCARE TEAM?
              </h3>
              <p 
                className="text-xl sm:text-2xl text-gray-800 max-w-5xl mx-auto leading-relaxed transition-all               duration-200 mb-5 text-justify" 
                style={{ fontWeight: 400, letterSpacing: '0.02em' }}
              >
                Schedule your appointment today and experience the difference of 
                <span className="font-semibold"> personalized and comprehensive healthcare</span> in our <span className="font-semibold"> state-of-the-art</span> facility. From routine check-ups to 
                advanced treatments, our dedicated team is here to provide you with the 
                highest quality of care in a comfortable and welcoming environment. 
                Take the first step towards better health and let us be your trusted partner 
                in every stage of your wellness journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="group relative px-8 py-4 bg-[#F4CE6D] text-white font-bold rounded-2xl transition-all duration-300 hover:bg-[#F4CE6D]/90 hover:shadow-xl hover:shadow-gray-400/30 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#F4CE6D]/50 overflow-hidden text-base sm:text-lg md:text-xl transform-gpu shadow-lg"
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
                  className="group relative px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border-2 border-gray-300 hover:text-gray-900 hover:border-gray-400 hover:shadow-xl hover:shadow-gray-400/30 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300/50 overflow-hidden text-base sm:text-lg md:text-xl transform-gpu hover:-translate-y-1 shadow-lg"
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

      {/* Enhanced Doctors Cards Section */}
      <section ref={doctorsCardsRef} className="py-8 xs:py-10 sm:py-14 md:py-16 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header with Layered Animation */}
          <div className={`mb-6 mt-0 sm:mt-1`}>
            <h4 className="text-4xl mb-5 sm:text-5xl lg:text-6xl font-bold text-[#F4CE6D] tracking-tight mb-2 leading-tight text-center" style={cossetteFont}>
              Meet our{' '}
              <span className="relative inline-block">
                <span className="text-[#F4CE6D] font-bold">
                  Team
                </span>
              </span>
            </h4>
            <div className="flex justify-center">
              <p className={`text-xl sm:text-2xl text-gray-800 max-w-4xl mt-3 mb-5 leading-relaxed transition-all duration-200 text-justify ml-5 mr-5 sm:ml-0 sm:mr-0 ${doctorsCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontWeight: 400, letterSpacing: '0.02em' }}>
              Our team of <span className="text-gray-800 font-semibold">experienced healthcare professionals</span> is dedicated to providing you with the highest quality medical care, 
              combining expertise and a <span className="text-gray-800 font-semibold"> patient-centered</span> approach.
              </p>
            </div>
          </div>
          
          {/* Enhanced Cards Grid with Premium Hover Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-16 md:mb-20 transition-all duration-300" style={{ fontWeight: 400, letterSpacing: '0.01em' }}>
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
                  <div className="relative bg-white group-hover:bg-gray-50 transition-all duration-700 p-8 rounded-3xl shadow-lg border border-gray-200 group-hover:border-gray-300 group-hover:shadow-2xl group-hover:shadow-gray-400/25 group-hover:-translate-y-4 group-hover:scale-[1.02] h-full overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                        <div className="relative group-hover:scale-110 transition-all duration-500 p-5 rounded-2xl w-fit mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-gray-400/30">
                          <div className="absolute inset-0 bg-[#F4CE6D] rounded-2xl"></div>
                          <div className="absolute inset-1 bg-white rounded-xl"></div>
                          <div className="relative p-3 w-full h-full flex items-center justify-center">
                            <Icon className="h-10 w-10 text-[#F4CE6D] group-hover:text-[#F4CE6D] group-hover:scale-110 transition-all duration-500" />
                          </div>
                        </div>
                      <h4 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-all duration-500 group-hover:scale-105">
                        {doctor.name}
                      </h4>
                      <div className="bg-[#DFDFDF] text-gray-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-gray-200 shadow-sm">
                        {doctor.specialty}
                      </div>
                      <p className="text-gray-800 leading-relaxed min-h-[100px] group-hover:text-gray-900 transition-all duration-500 text-base flex-grow">
                        {doctor.description}
                      </p>
                    </div>
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