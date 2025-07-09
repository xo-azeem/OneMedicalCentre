import React, { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowRight, Phone, Mail, Car, Stethoscope, Users, Award, Heart } from 'lucide-react';
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
            filter: 'brightness(0.3) blur(0px)',
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
    </div>
  );
}