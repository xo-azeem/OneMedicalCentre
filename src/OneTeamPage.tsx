import React, { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowRight, Phone, Mail, Car, Stethoscope, Heart, Eye, Pill, Activity, Leaf, Sparkles, Ear, Footprints, Users } from 'lucide-react';
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
    window.open('#', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div ref={heroContentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Right Content - Logo */}
            <div className="flex justify-center lg:justify-end mt-12 lg:mt-0 order-1 lg:order-2">
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
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/20">
                  <MapPin className="h-4 w-4" />
                  <span>Located in Mississauga</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Complete Healthcare</span> Destination
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Located across from Square One Shopping Centre, our integrated medical facility brings together specialists, 
                  pharmacy, dental care, and wellness services under one roof for your convenience.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:from-yellow-300 hover:to-yellow-400 hover:shadow-xl hover:shadow-yellow-400/25 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onClick={handleBookAppointment}
                  aria-label="Book Appointment"
                >
                  <span className="flex items-center space-x-2">
                    <span>Book Appointment</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <a
                  href={pdfFile}
                  className="px-8 py-4 border-2 border-yellow-400/50 text-yellow-400 font-semibold rounded-xl transition-all duration-300 hover:bg-yellow-400/10 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center"
                  tabIndex={0}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                <a
                  href="tel:+16476602591"
                  className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700/50 text-gray-300 text-sm hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  aria-label="Call +647 660 2591"
                >
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span>+647 660 2591</span>
                </a>
                <a
                  href="mailto:onemedicalmississauga@gmail.com"
                  className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700/50 text-gray-300 text-sm hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  aria-label="Email Us"
                >
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span>Email Us</span>
                </a>
                <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700/50">
                  <Car className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300 text-sm">Free Parking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Doctors Section */}
      <section
        ref={doctorsSectionRef}
        className="relative py-24 sm:py-32 min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background with Parallax Effect */}
        <div
          className={`absolute inset-0 w-full h-full bg-center bg-cover transition-all duration-[2000ms] ease-out transform ${
            doctorsVisible ? 'scale-105 opacity-100' : 'scale-110 opacity-80'
          }`}
          style={{ 
            backgroundImage: `url(${doctorsImg})`, 
            filter: 'brightness(1) contrast(1.1)',
            backgroundAttachment: 'fixed'
          }}
          aria-hidden="true"
        ></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 via-transparent to-yellow-900/20"></div>
        
        {/* Floating Elements */}
        <div className={`absolute top-20 left-10 w-3 h-3 bg-yellow-400 rounded-full transition-all duration-[1500ms] delay-500 ${doctorsVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute top-40 right-20 w-2 h-2 bg-yellow-500 rounded-full transition-all duration-[1500ms] delay-700 ${doctorsVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-32 left-20 w-4 h-4 bg-yellow-400/60 rounded-full transition-all duration-[1500ms] delay-900 ${doctorsVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        
        {/* Main Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            doctorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium border border-yellow-400/20 mb-6">
              <Stethoscope className="h-4 w-4" />
              <span>Our Medical Team</span>
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Dedicated Doctors</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our team of experienced and compassionate healthcare professionals is committed to providing 
              personalized, world-class medical care for you and your family.
            </p>
          </div>

          {/* Call to Action */}
          <div className={`text-center transition-all duration-1000 ease-out transform ${
            doctorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '800ms' }}>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
              <h4 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Meet Your Healthcare Team?
              </h4>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule your appointment today and experience the difference of personalized, 
                comprehensive healthcare in our state-of-the-art facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="group px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:from-yellow-300 hover:to-yellow-400 hover:shadow-xl hover:shadow-yellow-400/25 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onClick={handleBookAppointment}
                  aria-label="Book Your Appointment"
                >
                  <span className="flex items-center space-x-2">
                    <span>Book Your Appointment</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <a
                  href="tel:+16476602591"
                  className="flex items-center space-x-3 px-8 py-4 border-2 border-yellow-400/50 text-yellow-400 font-semibold rounded-xl transition-all duration-300 hover:bg-yellow-400/10 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  aria-label="Call Now"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Doctors Cards Section */}
      <section ref={doctorsCardsRef} className="py-20 sm:py-24 bg-gray-800 relative overflow-hidden">
        {/* Dynamic Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/15 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/5 via-transparent to-yellow-900/5"></div>
              
        {/* Enhanced Floating Elements with Staggered Animation */}
        <div className={`absolute top-10 left-10 w-3 h-3 bg-yellow-400/60 rounded-full transition-all duration-[2000ms] delay-300 ${doctorsCardsVisible ? 'opacity-100 animate-pulse scale-110' : 'opacity-0 scale-50'}`}></div>
        <div className={`absolute top-40 right-20 w-2 h-2 bg-yellow-500/80 rounded-full transition-all duration-[2000ms] delay-500 ${doctorsCardsVisible ? 'opacity-100 animate-pulse scale-125' : 'opacity-0 scale-50'}`}></div>
        <div className={`absolute bottom-20 left-20 w-4 h-4 bg-yellow-400/40 rounded-full transition-all duration-[2000ms] delay-700 ${doctorsCardsVisible ? 'opacity-100 animate-pulse scale-105' : 'opacity-0 scale-50'}`}></div>
        <div className={`absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-300/60 rounded-full transition-all duration-[2000ms] delay-900 ${doctorsCardsVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-500/30 rounded-full transition-all duration-[2000ms] delay-1100 ${doctorsCardsVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-1/3 right-10 w-3 h-3 bg-yellow-400/50 rounded-full transition-all duration-[2000ms] delay-1300 ${doctorsCardsVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>
              
        {/* Animated Light Rays */}
        <div className={`absolute top-0 left-1/4 w-0.5 h-20 bg-gradient-to-b from-yellow-400/20 to-transparent transition-all duration-[2500ms] delay-400 ${doctorsCardsVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
        <div className={`absolute top-0 right-1/3 w-0.5 h-16 bg-gradient-to-b from-yellow-500/15 to-transparent transition-all duration-[2500ms] delay-800 ${doctorsCardsVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
        <div className={`absolute bottom-0 left-1/3 w-0.5 h-24 bg-gradient-to-t from-yellow-400/10 to-transparent transition-all duration-[2500ms] delay-1200 ${doctorsCardsVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
              
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header with Smooth Reveal */}
          <div className={`text-center mb-16 transition-all duration-1200 ease-out transform ${
            doctorsCardsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium border border-yellow-400/20 mb-6 backdrop-blur-sm">
              <Stethoscope className="h-4 w-4" />
              <span>Our Medical Experts</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 animate-pulse">Expert Doctors</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our team of experienced healthcare professionals is dedicated to providing you with the highest quality medical care, 
              combining expertise with compassionate patient-centered approach.
            </p>
          </div>
          
          {/* Enhanced Cards Grid with Improved Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                specialty: "Family Medicine",
                description: "Comprehensive primary care with over 15 years of experience in family medicine and preventive healthcare.",
                icon: Stethoscope,
                delay: 200
              },
              {
                name: "Dr. Michael Chen",
                specialty: "Cardiology",
                description: "Specialized in cardiovascular health with expertise in heart disease prevention and treatment.",
                icon: Heart,
                delay: 400
              },
              {
                name: "Dr. Emily Rodriguez",
                specialty: "Dental Care",
                description: "Comprehensive dental services including cosmetic dentistry and oral health maintenance.",
                icon: Sparkles,
                delay: 600
              },
              {
                name: "Dr. David Thompson",
                specialty: "Optometry",
                description: "Eye care specialist providing vision correction and comprehensive eye health services.",
                icon: Eye,
                delay: 800
              },
              {
                name: "Dr. Lisa Park",
                specialty: "Pharmacy",
                description: "Clinical pharmacist with expertise in medication management and health consultations.",
                icon: Pill,
                delay: 1000
              },
              {
                name: "Dr. James Wilson",
                specialty: "Physiotherapy",
                description: "Rehabilitation specialist helping patients recover mobility and physical function.",
                icon: Activity,
                delay: 1200
              },
              {
                name: "Dr. Maria Santos",
                specialty: "Natural Health",
                description: "Holistic healthcare practitioner focusing on natural remedies and wellness approaches.",
                icon: Leaf,
                delay: 1400
              },
              {
                name: "Dr. Robert Kim",
                specialty: "Hearing Specialist",
                description: "Audiologist providing comprehensive hearing assessments and hearing aid services.",
                icon: Ear,
                delay: 1600
              }
            ].map((doctor, index) => {
              const Icon = doctor.icon;
              return (
                <div
                  key={index}
                  className={`group transition-all duration-1200 ease-out transform ${
                    doctorsCardsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
                  }`}
                  style={{ transitionDelay: `${doctor.delay}ms` }}
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 group-hover:from-yellow-400/20 group-hover:to-yellow-600/20 transition-all duration-700 p-6 rounded-2xl shadow-xl border border-gray-700/50 group-hover:border-yellow-400/40 group-hover:shadow-2xl group-hover:shadow-yellow-400/15 group-hover:-translate-y-3 group-hover:scale-105 h-full overflow-hidden">
                    
                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:via-yellow-400/20 group-hover:to-yellow-400/10 transition-all duration-700 rounded-2xl"></div>
                    
                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                      <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 group-hover:from-yellow-400/40 group-hover:to-yellow-600/40 transition-all duration-500 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-8 w-8 text-yellow-400 group-hover:scale-125 group-hover:text-yellow-300 transition-all duration-500" />
                      </div>
                      
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-500 group-hover:scale-105">
                        {doctor.name}
                      </h4>
                      
                      <p className="text-yellow-400 font-medium mb-3 text-sm group-hover:text-yellow-300 transition-colors duration-300">
                        {doctor.specialty}
                      </p>
                      
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500 text-sm group-hover:scale-102">
                        {doctor.description}
                      </p>
                      
                      {/* Floating Indicator */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400/0 group-hover:bg-yellow-400/80 rounded-full transition-all duration-500 group-hover:animate-pulse"></div>
                    </div>
                    
                    {/* Subtle Animation Lines */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent group-hover:via-yellow-400/60 transition-all duration-700"></div>
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-yellow-400/20 to-transparent group-hover:via-yellow-400/60 transition-all duration-700"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Enhanced Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1200 ease-out transform ${
            doctorsCardsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`} style={{ transitionDelay: '1800ms' }}>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto hover:border-yellow-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-400/10">
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Experience Excellence?
              </h4>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Schedule your appointment today and discover personalized healthcare at its finest.
              </p>
              <button
                className="group px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:from-yellow-300 hover:to-yellow-400 hover:shadow-xl hover:shadow-yellow-400/25 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                onClick={handleBookAppointment}
                aria-label="Book Your Appointment Now"
              >
                <span className="flex items-center space-x-2">
                  <span>Book Your Appointment</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}