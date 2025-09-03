import {useState } from 'react';
import { Phone } from 'lucide-react';
import logo from './assets/logo.png';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import OneTeamPage from './OneTeamPage';
import OnePriorityPage from './OnePriorityPage';
import OnePlacePage from './OnePlacePage';
import NewOneTeamPage from './NewOneTeamPage';

const font = {
  fontWeight: 900,
  letterSpacing: '0.05em',
  lineHeight: '0.9'
};

function Header() {
  const location = useLocation();
  const navItems = [
    { key: '/', label: 'One Team' },
    { key: '/priority', label: 'One Priority' },
    { key: '/place', label: 'One Place' },
    { key: '/newoneteam', label: 'Theme 1' },
  ];
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[98vw] sm:w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw] flex justify-center">
      <div className="w-full flex flex-col">
        <div className="mx-auto w-full flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 bg-white border-2 border-[#daa520] shadow-xl shadow-[#ffd700]/20 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 flex items-center space-x-4">
            <Link to="/" className="group w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white border border-white transition-all duration-300 hover:scale-110">
              <img src={logo} alt="Logo" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <Link to="/" className="block cursor-pointer group">
              <h1 className="text-xl sm:text-3xl font-black text-[#daa520] tracking-tight group-hover:from-[#daa520] group-hover:via-[#ffd700] group-hover:to-[#f0e68c] transition-all duration-300" style={font}>
                One Medical Centre
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-[#b8860b]/80 group-hover:text-[#daa520] transition-colors duration-300">
                Your Complete Healthcare Destination
              </p>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.key;
              return (
                <Link
                  key={item.key}
                  to={item.key}
                  className={`group relative px-5 py-2.5 font-semibold text-base transition-all duration-300 rounded-xl hover:shadow-md hover:scale-105 active:scale-95 z-20 ${
                    isActive
                      ? 'text-[#b8860b] bg-white shadow-md border border-[#fffacd] dark:border-[#daa520]'
                      : 'text-[#b8860b] hover:text-[#daa520] hover:bg-[#fff8dc] dark:hover:bg-white'
                  }`}
                >
                  <span className="relative z-30 pointer-events-none">{item.label}</span>
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#daa520] to-[#ffd700] transition-all duration-300 rounded-full pointer-events-none ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center space-x-2">
            <button
              className="md:hidden p-3 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#daa520]/30 bg-white hover:bg-white border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 hover:scale-105 cursor-pointer z-20"
              onClick={() => setMobileNavOpen(v => !v)}
            >
              <span className="sr-only">Open navigation menu</span>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#b8860b] bg transition-transform duration-300 hover:rotate-90">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <nav className="md:hidden mt-3 mx-auto w-full bg-white border-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 hover:shadow-xl hover:shadow-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-300 rounded-3xl flex flex-col items-center py-6 space-y-1 animate-fade-in relative overflow-hidden z-40">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.key;
              return (
                <Link
                  key={item.key}
                  to={item.key}
                  className={`group relative font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 w-5/6 text-center hover:shadow-lg hover:scale-105 active:scale-95 z-50 ${
                    isActive
                      ? 'text-[#b8860b] bg-white shadow-lg border-2 border-[#daa520]'
                      : 'text-[#b8860b] hover:text-[#daa520] hover:bg-[#daa520]/10'
                  }`}
                  onClick={() => setMobileNavOpen(false)}
                  style={{ animationDelay: `${index * 100}ms`, animation: 'slideInUp 0.6s ease-out forwards' }}
                >
                  <span className="relative z-60 pointer-events-none">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t-2 border-[#daa520] shadow-lg shadow-[#ffd700]/20 text-theme-secondary py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Link to="/" className="group w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white border border-2 border-white transition-all duration-300 hover:scale-110">
              <img src={logo} alt="Logo" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <Link to="/" className="block cursor-pointer group">
              <h1 className="text-xl sm:text-3xl font-black text-[#daa520] tracking-tight group-hover:from-[#daa520] group-hover:via-[#ffd700] group-hover:to-[#f0e68c] transition-all duration-300" style={font}>
                One Medical Centre
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-[#b8860b]/80 group-hover:text-[#daa520] transition-colors duration-300">
                Your Complete Healthcare Destination
              </p>
            </Link>
            </div>
            <p className="leading-relaxed text-sm sm:text-base md:text-lg max-w-md text-black">
              Your trusted healthcare partner in Mississauga, offering comprehensive medical services under one roof with a focus on quality care and patient satisfaction.
            </p>
          </div>
          <div>
            <h6 className="font-semibold mb-6 text-[#b8860b] text-lg">Services</h6>
            <ul className="space-y-3">
              {['Medical Care', 'Wellness Services', 'Eye Care', 'Physiotherapy', 'Pharmacy'].map((service, index) => (
                <li key={index} className="text-black hover:text-[#daa520] cursor-pointer transition-colors">{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-6 text-[#b8860b] text-lg">Contact</h6>
            <ul className="space-y-3 text-black">
              <li>50 Burnhamthorpe Rd W,</li>
              <li>Unit 102, Mississauga,</li>
              <li>Free Parking Available</li>
              <li className="flex items-center gap-2 text-black hover:text-[#daa520] transition-colors cursor-pointer">
                <Phone className="h-4 w-4" /> +647 660 2591
              </li>
            </ul>
          </div>
        </div>

        {/* Theme toggle removed */}

        <div className="border-t-2 border-[#daa520] mt-16 sm:mt-20 pt-8 sm:pt-10 text-center text-black">
          <p>© 2024 One Medical Centre. All rights reserved. Your health is our priority.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  // Always apply dark mode
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark');
  }
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<OneTeamPage />} />
          <Route path="/priority" element={<OnePriorityPage />} />
          <Route path="/place" element={<OnePlacePage />} />
          <Route path="/newoneteam" element={<NewOneTeamPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
