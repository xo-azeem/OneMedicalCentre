import React, { useRef, useEffect, useState } from 'react';
import { Heart, MapPin, Phone, Clock, Car, Stethoscope, Pill, Smile, Eye, Activity, Leaf, Sparkles, Ear, Footprints, UserCheck, ArrowRight, Shield, Users, Award, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';
import pdfFile from './assets/OneMedicalCentre.pdf';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// Simple Error Boundary
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: any }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, info: any) {
    // You can log error here
  }
  render() {
    if (this.state.hasError) {
      return <div style={{ color: 'red', padding: 32 }}><h2>Something went wrong.</h2><pre>{String(this.state.error)}</pre></div>;
    }
    return this.props.children;
  }
}

// Import or define the three page components (to be created)
import OneTeamPage from './OneTeamPage';
import OnePriorityPage from './OnePriorityPage';
import OnePlacePage from './OnePlacePage';

// Header Component
function Header() {
  const location = useLocation();
  const navItems = [
    { key: '/', label: 'One Team' },
    { key: '/priority', label: 'One Priority' },
    { key: '/place', label: 'One Place' }
  ];
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[98vw] sm:w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw] flex justify-center">
      <div className="w-full flex flex-col">
        <div className="mx-auto w-full flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-yellow-50 via-white to-yellow-100/90 border border-yellow-200/60 shadow-xl rounded-3xl relative overflow-hidden">
          {/* Glassy yellow/white background for all modes */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/60 via-white/80 to-yellow-100/60 rounded-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex items-center space-x-4">
            {/* Enhanced Logo */}
            <Link 
              to="/" 
              className="group w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden bg-gradient-to-br from-yellow-100/80 to-yellow-200/60 border border-yellow-300/40 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-yellow-200/90 hover:to-yellow-300/70 hover:border-yellow-400/60 cursor-pointer z-20"
              style={{ pointerEvents: 'auto' }}
            >
              <img 
                src={logo2} 
                alt="One Medical Centre Logo" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 pointer-events-none" 
              />
            </Link>
            
            {/* Enhanced Brand Text */}
            <Link to="/" className="hidden sm:block cursor-pointer group">
              <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-800 tracking-tight drop-shadow-sm group-hover:from-yellow-600 group-hover:via-yellow-500 group-hover:to-yellow-700 transition-all duration-300">
                One Medical Centre
              </h1>
              <p className="text-sm font-semibold text-yellow-700/80 tracking-wide group-hover:text-yellow-600 transition-colors duration-300">
                Complete Healthcare Destination
              </p>
            </Link>
          </div>
          
          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = location.pathname === item.key;
              return (
                <Link
                  key={item.key}
                  to={item.key}
                  className={`group relative px-5 py-2.5 font-semibold text-base transition-all duration-300 rounded-xl hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer z-20 ${
                    isActive 
                      ? 'text-yellow-700 bg-yellow-100/80 shadow-md' 
                      : 'text-yellow-800 hover:text-yellow-700 hover:bg-yellow-50/60'
                  }`}
                  style={{ pointerEvents: 'auto' }}
                >
                  <span className="relative z-30 pointer-events-none">{item.label}</span>
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/0 via-yellow-100/80 to-yellow-100/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  {/* Active indicator */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 transition-all duration-300 rounded-full pointer-events-none ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </Link>
              );
            })}
          </nav>
          
          {/* Enhanced Mobile Hamburger */}
          <button
            className="md:hidden p-3 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/30 bg-gradient-to-br from-yellow-50/80 to-yellow-100/60 hover:from-yellow-100/90 hover:to-yellow-200/70 border border-yellow-200/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer z-20"
            aria-label="Open navigation menu"
            onClick={() => setMobileNavOpen(v => !v)}
            style={{ pointerEvents: 'auto' }}
          >
            <span className="sr-only">Open navigation menu</span>
            <svg 
              width="24" 
              height="24" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="text-yellow-800 transition-transform duration-300 hover:rotate-90 pointer-events-none"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
          
        {/* Enhanced Mobile Navigation Drawer */}
        {mobileNavOpen && (
          <nav className="md:hidden mt-3 mx-auto w-full bg-gradient-to-br from-yellow-50 via-white to-yellow-100/90 border border-yellow-200/60 shadow-xl rounded-3xl flex flex-col items-center py-6 space-y-1 animate-fade-in relative overflow-hidden z-40" aria-label="Mobile Navigation">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/60 via-white/80 to-yellow-100/60 rounded-3xl pointer-events-none"></div>
            
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.key;
              return (
                <Link
                  key={item.key}
                  to={item.key}
                  className={`group relative font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 w-5/6 text-center hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer z-50 ${
                    isActive 
                      ? 'text-yellow-700 bg-gradient-to-r from-yellow-100/80 to-yellow-200/60 shadow-lg' 
                      : 'text-yellow-800 hover:text-yellow-700 hover:bg-gradient-to-r hover:from-yellow-50/60 hover:to-yellow-100/60'
                  }`}
                  onClick={() => setMobileNavOpen(false)}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideInUp 0.6s ease-out forwards',
                    pointerEvents: 'auto'
                  }}
                >
                  <span className="relative z-60 pointer-events-none">{item.label}</span>
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 via-yellow-200/60 to-yellow-200/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Link>
              );
            })}
          </nav>
        )}
      </div>
      
      {/* Enhanced Styles */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        
        /* Text shadow for better readability */
        .text-shadow-light {
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
        }
        
        .text-shadow-dark {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }
        
        /* Glass morphism backdrop */
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        /* Smooth transitions for all interactive elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Ensure all clickable elements work properly */
        a, button {
          position: relative;
          z-index: 10;
        }
        
        /* Prevent decorative elements from blocking clicks */
        .pointer-events-none {
          pointer-events: none;
        }
      `}</style>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-700 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden bg-white">
                <img src={logo} alt="One Medical Centre Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-slate-800">One Medical Centre</h5>
                <p className="text-slate-500 text-sm">Complete Healthcare Destination</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg max-w-md">
              Your trusted healthcare partner in Mississauga, offering comprehensive medical services under one roof with a focus on quality care and patient satisfaction.
            </p>
          </div>
          <div>
            <h6 className="font-semibold mb-6 text-amber-700 text-lg">Services</h6>
            <ul className="space-y-3 text-slate-600">
              {['Medical Care', 'Dental Services', 'Eye Care', 'Physiotherapy', 'Pharmacy'].map((service, index) => (
                <li key={index} className="hover:text-amber-600 transition-colors cursor-pointer">{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-6 text-amber-700 text-lg">Contact</h6>
            <ul className="space-y-3 text-slate-600">
              <li>50 Burnhamthorpe Rd W,</li>
              <li>Unit 102, Mississauga,</li>
              <li>Free Parking Available</li>
              <li className="flex items-center gap-2 hover:text-amber-600 transition-colors cursor-pointer">
                <Phone className="h-4 w-4" /> +647 660 2591
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-16 sm:mt-20 pt-8 sm:pt-10 text-center text-slate-500">
          <p>&copy; 2024 One Medical Centre. All rights reserved. Your health is our priority.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Header with navigation links */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<OneTeamPage />} />
          <Route path="/priority" element={<OnePriorityPage />} />
          <Route path="/place" element={<OnePlacePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;