import { 
  Stethoscope, Heart, Eye, Pill, Dumbbell, Ear, Footprints, Users, Shield, Award, 
  Calendar, Clock, Phone, Mail, Activity, Brain, Bone, Baby, UserRound, UserCircle, 
  Hand, Biohazard, Flower, Globe
} from 'lucide-react';

// Common booking URL
const OCEAN_BOOKING_URL = "https://ocean.cognisantmd.com/intake/patients.html?linkRef=e4b57b4b-cdc3-409f-a127-7be2f6027590#/online-booking";
const OCEAN_DIRECT_URL = "https://ocean.cognisantmd.com/online-booking/e4b57b4b-cdc3-409f-a127-7be2f6027590";

// Types
export interface SubService {
  name: string;
  url: string;
  doctorName: string;
  description: string;
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  shortName: string;
  url: string;
  description: string;
  doctorName: string;
  detailedDescription: string;
  subServices?: SubService[];
}

export const services: Service[] = [
  { 
    icon: Stethoscope, name: "Family Doctor", shortName: "Family Dr.", url: OCEAN_BOOKING_URL, description: "Comprehensive primary care", 
    doctorName: "",
    detailedDescription: "Choose from our team of experienced physicians. We offer a male Family doctor and a female Internal medicine doctor to provide personalized Healthcare.",
    subServices: [
      { 
        name: "Male Doctor", 
        url: OCEAN_DIRECT_URL,
        doctorName: "Dr. Kashif Surahio",
        description: "Dr. Kashif Surahio is our male Family doctor accepting new patients. Please click below to book an appointment for yourself or Family. You can also book meet and greet (family doctor registration appointments)."
      },
      { 
        name: "Female Doctor", 
        url: OCEAN_BOOKING_URL,
        doctorName: "Dr. Christina Gearges",
        description: "Dr. Christina Gearges is our female doctor who sees adult patients over the age of 18 for urgent issues as well as general medical conditions. Please click below to book an appointment"
      }
    ]
  },
  { 
    icon: Shield, name: "Internal Medicine", shortName: "Internal Med.", url: OCEAN_BOOKING_URL, description: "Internal medicine specialists",
    doctorName: "Dr. Morcos Fahmy",
    detailedDescription: "Dr. Morcos Fahmy is our internal medicine physician specialized in medical issues such as hypertension, diabetes and all conditions that affect adults. Please click below to book a direct appointment."
  },
  { 
    icon: Biohazard, name: "Infectious Disease", shortName: "Infection Dis.", url: OCEAN_BOOKING_URL, description: "Infectious disease treatment",
    doctorName: "Dr. Christina Gearges",
    detailedDescription: "Dr. Christina Gearges specializes in infectious diseases. From minor viral infections and ailments to treating more complex infections she can assess, diagnose and treat. You can book an appointment below with Dr. Gearges."
  },
  { 
    icon: Globe, name: "Travel Clinic", shortName: "Travel", url: OCEAN_BOOKING_URL, description: "Travel health services",
    doctorName: "Dr. Morcos Fahmy",
    detailedDescription: "Dr. Morcos Fahmy is our travel medicine specialist for ages 18 and up. If you are planning a vacation or a trip to the middle middle east, far east or anywhere out of country book an initial assessment with Dr. Fahmy covered by your Ontario health card.  After the assessment Dr. Fahmy will recommend the vaccines you may need. Additional fees will apply to the vaccination process that are not covered by the Ontario Health Card. To book the initial OHIP covered assessment, please book from the link below."
  },
  { 
    icon: Activity, name: "Diabetes Clinic", shortName: "Diabetes", url: OCEAN_BOOKING_URL, description: "Diabetes management",
    doctorName: "Dr. Kashif Surahio",
    detailedDescription: "Dr. Kashif Surahio is our physician who will provide the initial diabetes assessment by doing a physical exam including bloodwork and review of your medical history and medications. After the initial assessment, Dr. Surahio will work with the diabetes team in the clinic which includes endocrinology, cardiology, dietitians, diabetic educators, and ophthalmologists to provide total diabetes care in one location. Please click below to book your initial diabetes evaluation."
  },
  { 
    icon: Heart, name: "Heart Health", shortName: "Heart", url: OCEAN_BOOKING_URL, description: "Cardiovascular care",
    doctorName: "Dr. Christina Gearges",
    detailedDescription: "Dr. Christina Gearges is our physician doing initial assessment of your cardiovascular health by doing some initial heart tests and blood tests. After the initial assessment she will work with the cardiologists and cardiac diagnostics team to provide total medical care for your heart and cardiovascular system. Click below to book."
  },
  { 
    icon: Bone, name: "Pain / Injury", shortName: "Pain", url: OCEAN_BOOKING_URL, description: "Pain and injury treatment",
    doctorName: "Dr. Faheem Naeem",
    detailedDescription: "Dr. Faheem Naeem is our physician who will examine you with regards to any injury from motor vehicle accidents, work place, sports, or other accidents. He also provides examinations for chronic pain conditions. After the initial assessment he will work with our team of physiotherapists, rheumatologists and our joint injection clinic in order to best manage your injury or pain related symptoms. Please click below to book."
  },
  { 
    icon: Flower, name: "Allergy Clinic", shortName: "Allergy", url: OCEAN_BOOKING_URL, description: "Allergy testing and treatment",
    doctorName: "Dr. Faheem Naeem",
    detailedDescription: "Dr. Faheem Naeem provides examinations for allergies as well as chronic immunological conditions. When necessary, he will work in conjunction with our allergy and immunology specialist to treat more complex conditions. Please click below to book."
  },
  { 
    icon: Dumbbell, name: "Weight / Nutrition", shortName: "Weight", url: OCEAN_BOOKING_URL, description: "Weight Management and Nutritional Balance",
    doctorName: "Dr. Christina Gearges",
    detailedDescription: "Dr. Christina Gearges will do an initial assessment for weight management including checking initial weight, BMI, and relevant blood tests. She would work in conjunction with our weight management team which includes endocrinology, dietitians and fitness coaches to come up with the best and most effective weight loss plan for you. Please book your OHIP covered weight loss assessment below."
  },
  { 
    icon: Brain, name: "Mental Health", shortName: "Mental Health", url: OCEAN_BOOKING_URL, description: "Mental health services",
    doctorName: "Dr. Christina Gearges",
    detailedDescription: "The initial assessment for mental health related concerns is done by Dr. Christina Gearges. This is an ohip covered consultation to assess your concerns as well as any hormonal imbalances that could be a contributing factor. She will work with our Psychotherapy team to facilitate counseling as needed. Counseling sessions would be not covered by OHIP but may be covered by third party benefits. Please book your initial OHIP covered assessment below."
  },
  { 
    icon: Baby, name: "Paediatrics", shortName: "Kids Clinic", url: OCEAN_BOOKING_URL, description: "Children's healthcare",
    doctorName: "Dr. Kashif Surahio",
    detailedDescription: "Dr. Kashif Surahio is our family physician accepting all paediatrics patients. He will provide general health assessments, paediatrics vaccines and deal with all health concerns. For more complex conditions he will work with our paediatrics specialists. Please book below to book a paediatrics appointment."
  },
  { 
    icon: UserRound, 
    name: "Senior's Care", 
    shortName: "Senior", 
    url: OCEAN_BOOKING_URL, 
    description: "Geriatric services",
    doctorName: "Dr. Christina Gearges",
    detailedDescription: "Specialized healthcare services for seniors with flexible options. Choose between in-person consultations for comprehensive care or virtual appointments for convenient access to our geriatric specialists.",
    subServices: [
      { 
        name: "In-Clinic", 
        url: OCEAN_BOOKING_URL,
        doctorName: "Dr. Christina Gearges",
        description: "Dr. Christina Gearges as a specialist in internal medicine is highly trained to see geriatric patients and treat complex health conditions. Please book below to book an inclinic appointment."
      },
      { 
        name: "Virtual", 
        url: OCEAN_BOOKING_URL,
        doctorName: "Dr. Christina Gearges",
        description: "Dr. Christina Gearges as a specialist in internal medicine is highly trained to see geriatric patients and treat complex health conditions. Sometimes coming into the clinic is difficult so with a caregiver present you can book an ohip covered virtual video call. Medication home delivery and home delivery of medical devices and assistive living products is also provided by our clinic as needed. Please click below to book a virtual video or phone call."
      }
    ]
  },
  { 
    icon: UserCircle, name: "Men's Health", shortName: "Men's", url: OCEAN_BOOKING_URL, description: "Men's health services",
    doctorName: "Dr. Kashif Surahio",
    detailedDescription: "Dr. Kashif Surahio will see you for examinations related to men's health issues that can range from sexual function,  urology issues. male aging, and all other concerns. He will work with our men's health clinic to recommend specialized anti aging, urology and laser therapies when necessary.  Please click below to book your initial ohip covered assessment."
  },
  { 
    icon: Users, name: "Women's Health", shortName: "Women's", url: OCEAN_BOOKING_URL, description: "Women's health services",
    doctorName: "Dr. Christina Gearges",
    detailedDescription: "Dr. Christina Gearges will see you for specific female issues ranging from pelvic health, reproductive health, menstrual cycle problems, overall female anti aging and any other concerns. For more complex cases she will work in conjunction with our Gynecology specialist.  Please book below to book."
  },
  { 
    icon: Award, name: "Skin Clinic", shortName: "Skin Clinic", url: OCEAN_BOOKING_URL, description: "Medical & Cosmetic treatments",
    doctorName: "Dr. Kashif Surahio",
    detailedDescription: "Dr. Kashif Surahio will do your initial dermatologic evaluation. After the assessment he can treat many conditions such as acne as well as skin tag and wart removals, biopsies and minor surgeries. For anti aging cases he can refer along to our beauty clinic for laser and botox after the initial assessment. Please book your initial ohip covered skin assessment below."
  },
  { 
    icon: Clock, name: "Sleep Clinic", shortName: "Sleep", url: OCEAN_BOOKING_URL, description: "Sleep disorder treatment",
    doctorName: "Dr. Morcos Fahmy",
    detailedDescription: "Dr. Morcos Fahmy is a specialist in internal medicine and will see you for an initial sleep consultation to analyze your sleep concerns. He can do baseline bood tests to check for hormonal imbalances that may be affecting sleep as well as perform sleep apnea screening. Treatments may include nutritionsl healing, medications and sleep products such as CPAP machines. Please click below to book your sleep assessment."
  },
  { 
    icon: Ear, name: "Hearing Clinic", shortName: "Hearing", url: OCEAN_BOOKING_URL, description: "Hearing assessment and care",
    doctorName: "Dr. Faheem Naeem",
    detailedDescription: "Dr. Faheem Naeem will do an initial assessment of your ears and evaluate any hearing problems you may be experiences. When hearing aids may be acquired he will work with our hearing clinic who can provide free hearing tests and addictive devices such as hearing aids. Please click below to book your initial hearing and ear assessment."
  },
  { 
    icon: Eye, name: "Vision Clinic", shortName: "Vision", url: "https://onevisioncenter.ca/", description: "Eye care and vision services",
    doctorName: "",
    detailedDescription: "Our comprehesive vision team of opticians, optometrists and ophthalmologists can take care of all your vision related and eye health related concerns. Book below to book an initial optometric eye exam. The optometrist will work in conjunction with the ophthalmologist in the clinic when needed. Please click below to book."
  },
  { 
    icon: Hand, name: "Massage Therapy", shortName: "Massage", url: "https://crystalcarewellness.noterro.com/", description: "Therapeutic massage",
    doctorName: "",
    detailedDescription: "The massage therapist in our clinic will give you access to booking directly for registered massage therapy appointments. These may be covered through third party benefits. Please click below to book."
  },
  { 
    icon: Footprints, name: "Foot Clinic", shortName: "Feet", url: OCEAN_BOOKING_URL, description: "Chiropody and foot care",
    doctorName: "Dr. Morcos Fahmy",
    detailedDescription: "Dr. Morcos Fahmy will evaluate any medical concerns related to your feet including infections, skin or nail discoloration, diabetic foot conditions and foot pain or injury. When necessary, he will work in conjunction with our chiropodist to provide fittings for orthotics and orthopedic products covered by most third party benefits. Book your initial ohip covered foot assessment below"
  },
  { 
    icon: Dumbbell, name: "Physiotherapy", shortName: "Physio", url: OCEAN_BOOKING_URL, description: "Physical therapy and rehabilitation",
    doctorName: "Dr. Faheem Naeem",
    detailedDescription: "Dr. Faheem Naeem will conduct an initial examination for any health concerns that may require physiotherapy. This assessment may include reviewing X-ray and ultrasound results or prescribing pain medication, if needed, to support the physiotherapist in developing a comprehensive treatment plan. Subsequent physiotherapy visits may be covered by third-party benefits. Please use the link below to book your OHIP-covered initial assessment."
  },
  { 
    icon: Pill, name: "Pharmacy", shortName: "Pharmacy", url: "https://www.facebook.com/share/19oZLbZJto/?mibextid=wwXIfr", description: "Prescription and pharmacy services",
    doctorName: "Dr. Pharmacy Team",
    detailedDescription: "Michael at one health pharmacy will provide personalized service for you and your family.  One health pharmacy works with all your coverages, will price match on Over the counter items and is happy to provide home delivery service.  Please have your prescription faxed to 289-720-2871 or click the link to book a free video or phone call with the Pharmacy for any questions."
  }
];

