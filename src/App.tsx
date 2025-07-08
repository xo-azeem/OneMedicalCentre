import React, { useRef, useEffect, useState } from 'react';
import { Heart, MapPin, Phone, Clock, Car, Stethoscope, Pill, Smile, Eye, Activity, Leaf, Sparkles, Ear, Footprints, UserCheck, ArrowRight, Shield, Users, Award, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';
import pdfFile from './assets/OneMedicalCentre.pdf';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

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
  const navItems = [
    { key: '/', label: 'One Team' },
    { key: '/priority', label: 'One Priority' },
    { key: '/place', label: 'One Place' }
  ];
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
        <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <img src={logo2} alt="One Medical Centre Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white tracking-tight">One Medical Centre</h1>
                  <p className="text-sm font-medium text-yellow-400">Complete Healthcare Destination</p>
                </div>
              </div>
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.key}
                className="flex items-center space-x-2 px-4 py-2 font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-300 hover:text-yellow-400"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            ))}
              </nav>
              {/* Mobile Hamburger */}
              <button
                className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                aria-label="Open navigation menu"
                onClick={() => setMobileNavOpen(v => !v)}
              >
                <span className="sr-only">Open navigation menu</span>
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* Mobile Nav Drawer */}
            {mobileNavOpen && (
              <nav className="md:hidden absolute top-20 left-0 w-full bg-gray-900 border-b border-gray-800/50 z-50 flex flex-col items-center py-6 space-y-4 animate-fade-in" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.key}
                className="text-gray-300 hover:text-yellow-400 font-medium text-lg"
                onClick={() => setMobileNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
              </nav>
            )}
          </div>
        </header>
  );
}

// Footer Component
function Footer() {
                    return (
        <footer className="bg-gray-900 border-t border-gray-800/50 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                  <img src={logo} alt="One Medical Centre Logo" className="w-full h-full object-contain" />
                </div>
                  <div>
                    <h5 className="text-xl font-bold">One Medical Centre</h5>
                    <p className="text-gray-400 text-sm">Complete Healthcare Destination</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg max-w-md">
                  Your trusted healthcare partner in Mississauga, offering comprehensive medical services under one roof with a focus on quality care and patient satisfaction.
                </p>
              </div>
              <div>
                <h6 className="font-semibold mb-6 text-yellow-400 text-lg">Services</h6>
                <ul className="space-y-3 text-gray-400">
                  {['Medical Care', 'Dental Services', 'Eye Care', 'Physiotherapy', 'Pharmacy'].map((service, index) => (
                    <li key={index} className="hover:text-yellow-400 transition-colors cursor-pointer">{service}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h6 className="font-semibold mb-6 text-yellow-400 text-lg">Contact</h6>
                <ul className="space-y-3 text-gray-400">
              <li>50 Burnhamthorpe Rd W,</li>
              <li>Unit 102, Mississauga,</li>
                  <li>Free Parking Available</li>
                  <li className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-pointer">
                    <Phone className="h-4 w-4" /> +647 660 2591
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center text-gray-400">
              <p>&copy; 2024 One Medical Centre. All rights reserved. Your health is our priority.</p>
            </div>
          </div>
        </footer>
  );
}

function App() {
  return (
    <Router>
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