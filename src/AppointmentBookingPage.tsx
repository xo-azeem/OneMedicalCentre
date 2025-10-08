import { useEffect, useRef, useState } from 'react';
import { 
  Stethoscope, Heart, Eye, Pill, Dumbbell, Ear, Footprints, Users, Shield, Award, 
  Calendar, Clock, Phone, Mail, Activity, Brain, Bone, Baby, UserRound, UserCircle, 
  Hand, Biohazard, Flower, Globe, X
} from 'lucide-react';
import logo from './assets/logo.png';

// Services data with icons, doctor names, descriptions and booking URLs
const services = [
  { 
    icon: Stethoscope, name: "Family Doctor", shortName: "Family Dr.", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Comprehensive primary care", 
    doctorName: "",
    detailedDescription: "Choose from our team of experienced family physicians. We offer both male and female doctors to provide personalized healthcare that meets your comfort and preference needs.",
    subServices: [
      { 
        name: "Male Doctor", 
        url: "https://ocean.cognisantmd.com/online-booking/e4b57b4b-cdc3-409f-a127-7be2f6027590", //"https://mdplusmedical.inputhealth.com/ebooking#new",
        doctorName: "Dr. Kashif Surahio",
        description: "Dr. Kashif Surahio is our male Family doctor accepting new patients. Please click below to book an appointment for yourself or Family. You can also book meet and greet (family doctor registration appointments)."
      },
      { 
        name: "Female Doctor", 
        url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking",
        doctorName: "Dr. Zaeinab Hssunei",
        description: "Dr. Zaeinab Hssunei is our female family doctor accepting new patients. Please click below to book an appointment for yourself or family. You can also book meet and greet (family doctor registration appointments)."
      }
    ]
  },
  { 
    icon: Shield, name: "Internal Medicine", shortName: "Internal Med.", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Internal medicine specialists",
    doctorName: "Dr. Morcos Fahmy",
    detailedDescription: "Dr. Morcos Fahmy is our internal medicine physician specialized in medical issues such as hypertension, diabetes and all conditions that affect adults. Please click below to book a direct appointment."
  },
  { 
    icon: Biohazard, name: "Infectious Disease", shortName: "Infection Dis.", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Infectious disease treatment",
    doctorName: "Dr. Christina Gearges",
    detailedDescription: "Dr. Christina Gearges specializes in infectious diseases. From minor viral infections and ailments to treating more complex infections she can assess, diagnose and treat. You can book an appointment below with Dr. Gearges."
  },
  { 
    icon: Globe, name: "Travel Clinic", shortName: "Travel", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Travel health services",
    doctorName: "Dr. Morcos Fahmy",
    detailedDescription: "Dr. Morcos Fahmy is our travel medicine specialist for ages 18 and up. If you are planning a vacation or a trip to the middle middle east, far east or anywhere out of country book an initial assessment with Dr. Fahmy covered by your Ontario health card.  After the assessment Dr. Fahmy will recommend the vaccines you may need. Additional fees will apply to the vaccination process that are not covered by the Ontario Health Card. To book the initial OHIP covered assessment, please book from the link below."
  },
  { 
    icon: Activity, name: "Diabetes Clinic", shortName: "Diabetes", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Diabetes management",
    doctorName: "Dr. Kashif Surahio",
    detailedDescription: "Dr. Kashif Surahio is our physician who will provide the initial diabetes assessment by doing a physical exam including bloodwork and review of your medical history and medications. After the initial assessment, Dr. Surahio will work with the diabetes team in the clinic which includes endocrinology, cardiology, dietitians, diabetic educators, and ophthalmologists to provide total diabetes care in one location. Please click below to book your initial diabetes evaluation."
  },
  { 
    icon: Heart, name: "Heart Health", shortName: "Heart", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Cardiovascular care",
    doctorName: "Dr. Zaeinab Hssunaei",
    detailedDescription: "Dr. Zaeinab Hssunaei is our physician doing initial assessment of your cardiovascular health by doing some initial heart tests and blood tests. After the initial assessment she will work with the cardiologists and cardiac diagnostics team to provide total medical care for your heart and cardiovascular system. Click below to book."
  },
  { 
    icon: Bone, name: "Pain / Injury", shortName: "Pain", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Pain and injury treatment",
    doctorName: "Dr. Faheem Naeem",
    detailedDescription: "Dr. Faheem Naeem is our physician who will examine you with regards to any injury from motor vehicle accidents, work place, sports, or other accidents. He also provides examinations for chronic pain conditions. After the initial assessment he will work with our team of physiotherapists, rheumatologists and our joint injection clinic in order to best manage your injury or pain related symptoms. Please click below to book."
  },
  { 
    icon: Flower, name: "Allergy Clinic", shortName: "Allergy", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Allergy testing and treatment",
    doctorName: "Dr. Faheem Naeem",
    detailedDescription: "Dr. Faheem Naeem provides examinations for allergies as well as chronic immunological conditions. When necessary, he will work in conjunction with our allergy and immunology specialist to treat more complex conditions. Please click below to book."
  },
  { 
    icon: Dumbbell, name: "Weight Loss Clinic", shortName: "Weight", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Weight management programs",
    doctorName: "Dr. Zaeinab Hssunaei",
    detailedDescription: "Dr. Zaeinab Hssunaei will do an initial assessment for weight management including checking initial weight, BMI, and relevant blood tests. She would work in conjunction with our weight management team which includes endocrinology, dietitians and fitness coaches to come up with the best and most effective weight loss plan for you. Please book your OHIP covered weight loss assessment below."
  },
  { 
    icon: Brain, name: "Mental Health", shortName: "Mental Health", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Mental health services",
    doctorName: "Dr. Zaeinab Hssunaei",
    detailedDescription: "The initial assessment for mental health related concerns is done by Dr. Zaeinab Hssunaei. This is an ohip covered consultation to assess your concerns as well as any hormonal imbalances that could be a contributing factor. She will work with our Psychotherapy team to facilitate counseling as needed. Counseling sessions would be not covered by OHIP but may be covered by third party benefits. Please book your initial OHIP covered assessment below."
  },
  { 
    icon: Baby, name: "Paediatrics", shortName: "Kids Clinic", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Children's healthcare",
    doctorName: "Dr. Kashif Surahio",
    detailedDescription: "Dr. Kashif Surahio is our family physician accepting all paediatrics patients. He will provide general health assessments, paediatrics vaccines and deal with all health concerns. For more complex conditions he will work with our paediatrics specialists. Please book below to book a paediatrics appointment."
  },
  { 
    icon: UserRound, 
    name: "Senior's Care", 
    shortName: "Senior", 
    url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", 
    description: "Geriatric services",
    doctorName: "Dr. Christina Gearges",
    detailedDescription: "Specialized healthcare services for seniors with flexible options. Choose between in-person consultations for comprehensive care or virtual appointments for convenient access to our geriatric specialists.",
    subServices: [
      { 
        name: "In-Clinic", 
        url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking",
        doctorName: "Dr. Christina Gearges",
        description: "Dr. Christina Gearges as a specialist in internal medicine is highly trained to see geriatric patients and treat complex health conditions. Please book below to book an inclinic appointment."
      },
      { 
        name: "Virtual", 
        url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking",
        doctorName: "Dr. Christina Gearges",
        description: "Dr. Christina Gearges as a specialist in internal medicine is highly trained to see geriatric patients and treat complex health conditions. Sometimes coming into the clinic is difficult so with a caregiver present you can book an ohip covered virtual video call. Medication home delivery and home delivery of medical devices and assistive living products is also provided by our clinic as needed. Please click below to book a virtual video or phone call."
      }
    ]
  },
  { 
    icon: UserCircle, name: "Men's Health", shortName: "Men's", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Men's health services",
    doctorName: "Dr. Kashif Surahio",
    detailedDescription: "Dr. Kashif Surahio will see you for examinations related to men's health issues that can range from sexual function,  urology issues. male aging, and all other concerns. He will work with our men's health clinic to recommend specialized anti aging, urology and laser therapies when necessary.  Please click below to book your initial ohip covered assessment."
  },
  { 
    icon: Users, name: "Women's Health", shortName: "Women's", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Women's health services",
    doctorName: "Dr. Christina Gearges",
    detailedDescription: "Dr. Christina Gearges will see you for specific female issues ranging from pelvic health, reproductive health, menstrual cycle problems, overall female anti aging and any other concerns. For more complex cases she will work in conjunction with our Gynecology specialist.  Please book below to book."
  },
  { 
    icon: Award, name: "Laser / Botox", shortName: "Laser", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Cosmetic treatments",
    doctorName: "Dr. Kashif Surahio",
    detailedDescription: "Dr. Kashif Surahio will do your initial dermatologic evaluation. After the assessment he can treat many conditions such as acne as well as skin tag and wart removals, biopsies and minor surgeries. For anti aging cases he can refer along to our beauty clinic for laser and botox after the initial assessment. Please book your initial ohip covered skin assessment below."
  },
  { 
    icon: Clock, name: "Sleep Clinic", shortName: "Sleep", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Sleep disorder treatment",
    doctorName: "Dr. Morcos Fahmy",
    detailedDescription: "Dr. Morcos Fahmy is a specialist in internal medicine and will see you for an initial sleep consultation to analyze your sleep concerns. He can do baseline bood tests to check for hormonal imbalances that may be affecting sleep as well as perform sleep apnea screening. Treatments may include nutritionsl healing, medications and sleep products such as CPAP machines. Please click below to book your sleep assessment."
  },
  { 
    icon: Ear, name: "Hearing Clinic", shortName: "Hearing", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Hearing assessment and care",
    doctorName: "Dr. Faheem Naeem",
    detailedDescription: "Dr. Faheem Naeem will do an initial assessment of your ears and evaluate any hearing problems you may be experiences. When hearing aids may be acquired he will work with our hearing clinic who can provide free hearing tests and addictive devices such as hearing aids. Please click below to book your initial hearing and ear assessment."
  },
  { 
    icon: Eye, name: "Vision Clinic", shortName: "Vision", url: "https://onevisioncenter.ca/book-eye-exam", description: "Eye care and vision services",
    doctorName: "",
    detailedDescription: "Our comprehesive vision team of opticians, optometrists and ophthalmologists can take care of all your vision related and eye health related concerns. Book below to book an initial optometric eye exam. The optometrist will work in conjunction with the ophthalmologist in the clinic when needed. Please click below to book."
  },
  { 
    icon: Hand, name: "Massage Therapy", shortName: "Massage", url: "https://crystalcarewellness.noterro.com/", description: "Therapeutic massage",
    doctorName: "",
    detailedDescription: "The massage therapist in our clinic will give you access to booking directly for registered massage therapy appointments. These may be covered through third party benefits. Please click below to book."
  },
  { 
    icon: Footprints, name: "Foot Clinic", shortName: "Feet", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Chiropody and foot care",
    doctorName: "Dr. Morcos Fahmy",
    detailedDescription: "Dr. Morcos Fahmy will evaluate any medical concerns related to your feet including infections, skin or nail discoloration, diabetic foot conditions and foot pain or injury. When necessary, he will work in conjunction with our chiropodist to provide fittings for orthotics and orthopedic products covered by most third party benefits. Book your initial ohip covered foot assessment below"
  },
  { 
    icon: Dumbbell, name: "Physiotherapy", shortName: "Physio", url: "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking", description: "Physical therapy and rehabilitation",
    doctorName: "Dr. Faheem Naeem",
    detailedDescription: "Dr. Faheem Naeem will conduct an initial examination for any health concerns that may require physiotherapy. This assessment may include reviewing X-ray and ultrasound results or prescribing pain medication, if needed, to support the physiotherapist in developing a comprehensive treatment plan. Subsequent physiotherapy visits may be covered by third-party benefits. Please use the link below to book your OHIP-covered initial assessment."
  },
  { 
    icon: Pill, name: "Pharmacy", shortName: "Pharmacy", url: "https://www.facebook.com/share/19oZLbZJto/?mibextid=wwXIfr", description: "Prescription and pharmacy services",
    doctorName: "Dr. Pharmacy Team",
    detailedDescription: "Michael at one health pharmacy will provide personalized service for you and your family.  One health pharmacy works with all your coverages, will price match on Over the counter items and is happy to provide home delivery service.  Please have your prescription faxed to 289-720-2871 or click the link to book a free video or phone call with the Pharmacy for any questions."
  }
];

// Types and Interfaces
interface SubService {
  name: string;
  url: string;
  doctorName: string;
  description: string;
}

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  shortName: string;
  url: string;
  description: string;
  doctorName: string;
  detailedDescription: string;
  subServices?: SubService[];
}

interface ServicePopupCardProps {
  service: Service;
  isVisible: boolean;
  onClose: () => void;
  position: { x: number; y: number };
}

// ServicePopupCard Component
function ServicePopupCard({ service, isVisible, onClose }: ServicePopupCardProps) {
  const Icon = service.icon;
  
  const handleBookingClick = (url: string) => {
    window.open(url, '_blank');
    onClose();
  };
  
  // Check if it's mobile (lg breakpoint and below)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isMobile ? '' : `transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`
      }`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
      {/* Popup Card */}
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl border-2 border-[#daa520] max-w-md w-full mx-4 ${
          isMobile ? '' : `transform transition-all duration-500 ease-out ${
            isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
          }`
        }`}
        onClick={(e) => e.stopPropagation()}
        style={isMobile ? {} : {
          animation: isVisible ? 'popupSlideIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 z-10"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-[#daa520] to-[#ffd700] shadow-lg">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
              {service.doctorName && (
                <p className="text-sm text-[#daa520] font-semibold">{service.doctorName}</p>
              )}
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            {service.detailedDescription}
          </p>

          {/* Sub-services for Family Doctor and Senior's Care */}
          {service.subServices && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Available Options:</h4>
              <div className="space-y-3">
                {service.subServices.map((subService, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 hover:border-[#daa520] transition-colors duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-gray-800">{subService.name}</h5>
                      <span className="text-xs text-[#daa520] font-medium">{subService.doctorName}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 text-justify">{subService.description}</p>
                    <button
                      onClick={() => handleBookingClick(subService.url)}
                      className="w-full px-4 py-2 text-sm bg-gradient-to-r from-[#daa520] to-[#d4af37] text-white rounded-lg hover:from-[#d4af37] hover:to-[#ffd700] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Book {subService.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Booking Button - Only show if no sub-services */}
          {!service.subServices && (
            <button
              onClick={() => handleBookingClick(service.url)}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#daa520] to-[#d4af37] text-white font-semibold rounded-xl hover:from-[#d4af37] hover:to-[#ffd700] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes popupSlideIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Main Component
export default function AppointmentBookingPage() {
  // State management
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [servicesAnimationTriggered, setServicesAnimationTriggered] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
  const [popupService, setPopupService] = useState<Service | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  // Refs
  const heroContentRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  // Effects
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
          if (entry.isIntersecting && !servicesAnimationTriggered) {
            setServicesVisible(true);
            setServicesAnimationTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px 0px' }
    );
    if (servicesSectionRef.current) {
      observer.observe(servicesSectionRef.current);
    }
    return () => observer.disconnect();
  }, [servicesAnimationTriggered]);

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);


  // Event handlers
  const handleServiceIconClick = (service: Service, event: React.MouseEvent) => {
    event.stopPropagation();
    setPopupService(service);
    setPopupPosition({ x: event.clientX, y: event.clientY });
  };

  const closePopup = () => {
    setPopupService(null);
  };


  // Utility functions
  const getCircularPosition = (index: number, total: number, radius: number) => {
    const angle = (2 * Math.PI * index) / total - Math.PI / 2; // Start from top
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top margin */}
      <div className="w-full" style={{height: '44px', background: '#f8f9fa'}}></div>
      


      {/* Services Section */}
      <section 
        ref={servicesSectionRef} 
        className="py-20 sm:py-24 bg-gray-50 relative overflow-hidden min-h-screen flex items-center"
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
        @keyframes bounce-slow{0%,20%,50%,80%,100%{transform:translateY(0);}40%{transform:translateY(-8px);}60%{transform:translateY(-4px);}}
        .animate-bounce-slow{animation:bounce-slow 2s infinite;}
        `}</style>
        

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Content */}
          <div ref={heroContentRef} className="text-center mb-16">
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
                ONE MEDICAL BOOKING
              </h1>
              <div className="flex justify-center">
                <div className="w-80 sm:w-96 md:w-[32rem] h-1 bg-gradient-to-r from-[#ffd700] via-[#d4af37] to-[#b8860b] rounded-full opacity-70 animate-pulse" />
              </div>
              {/* <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent leading-snug">
                Choose Your <span className="text-[#daa520] font-bold">Healthcare Service</span>
              </h2> */}
            </div>
          </div>

          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-300 ease-out transform ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6">
              Our <span className="text-[#daa520] font-bold">Medical Services</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Browse our specialized medical departments and click on any service to view details and book your appointment.
            </p>
          </div>

          {/* Instruction text for desktop */}
          <div className={`text-center mb-4 transition-all duration-300 ease-out transform ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`} style={{ transitionDelay: '150ms' }}>
            <p className="text-lg text-gray-600 font-medium">
              <span className="text-[#daa520] font-semibold">Click an icon</span> you want to book for
            </p>
          </div>
            
          {/* Desktop Circular Layout */}
          <div className="hidden lg:block">
            <div className={`relative w-full h-[800px] flex items-center justify-center transition-all duration-400 ease-out transform ${
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
                       }}
                       onMouseLeave={() => {
                         const timeout = setTimeout(() => {
                           setHoveredService(null);
                         }, 150); // Reduced delay for smoother transitions
                         setHoverTimeout(timeout);
                       }}
                       onClick={(e) => handleServiceIconClick(service, e)}
                    >
                       {/* Service Button */}
                       <div className="relative w-24 h-24 bg-white border-2 border-[#daa520] rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#daa520]/20 hover:border-[#daa520] hover:scale-110 transition-all duration-500 ease-out flex flex-col items-center justify-center">
                         <Icon className="h-7 w-7 text-[#daa520] group-hover:text-[#b8860b] transition-all duration-500 ease-out" />
                         <span className="text-xs font-semibold text-gray-700 mt-1 group-hover:text-[#daa520] transition-all duration-500 ease-out text-center leading-tight px-2 group-hover:scale-105">
                           {service.name}
                         </span>
                       </div>

                       {/* Hover Tooltip for all services */}
                       {isHovered && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-2xl whitespace-nowrap z-30 transition-all duration-300 ease-out opacity-100 translate-y-0">
                          <div className="text-center">
                            <div className="font-semibold">{service.name}</div>
                            <div className="text-xs text-gray-300">{service.description}</div>
                          </div>
                          {/* Arrow pointing down toward icon */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
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
            <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-400 ease-out ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '250ms' }}>
              {services.map((service, index) => {
                 const Icon = service.icon;
                
                return (
                  <div key={index} className="relative">
                    <div
                      className="group bg-white border-2 border-[#daa520] rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:shadow-gray-700/30 hover:border-[#ffd700] hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer"
                      onClick={(e) => handleServiceIconClick(service, e)}
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* Page Links and Contact Information */}
          <div className={`mt-8 sm:mt-12 lg:mt-8 text-center transition-all duration-400 ease-out ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`} style={{ transitionDelay: '300ms' }}>
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

      {/* Service Popup Card */}
      {popupService && (
        <ServicePopupCard
          service={popupService}
          isVisible={!!popupService}
          onClose={closePopup}
          position={popupPosition}
        />
      )}
    </div>
  );
}