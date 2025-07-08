import React from 'react';
import { MapPin, Car, Calendar } from 'lucide-react';

export default function OnePlacePage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center py-16 sm:py-24">
      <section
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-yellow-400/20 shadow-2xl p-6 sm:p-10 md:p-12 lg:p-16 text-center transition-all duration-300 hover:shadow-yellow-400/20 focus-within:shadow-yellow-400/30 group"
        tabIndex={0}
      >
        <div className="inline-flex items-center space-x-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-base sm:text-lg font-medium border border-yellow-400/20 mb-6">
          <MapPin className="h-5 w-5" />
          <span>One Place</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Clinic</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Centrally located across from Square One shopping centre, with unlimited underground and above-ground parking for your convenience.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-1 md:gap-3 text-yellow-400 w-full md:w-auto">
            <MapPin className="h-7 w-7 md:h-8 md:w-8 mb-1 md:mb-0" />
            <span className="text-base sm:text-lg md:text-xl text-center md:text-left font-semibold">50 Burnhamthorpe Rd West, Unit 102, Mississauga</span>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-1 md:gap-3 text-gray-300 w-full md:w-auto">
            <Car className="h-7 w-7 md:h-8 md:w-8 mb-1 md:mb-0 text-yellow-400" />
            <span className="text-sm sm:text-base md:text-lg text-center md:text-left">Unlimited underground & above-ground parking</span>
          </div>
        </div>
        <a
          href="https://onemedicalcentre.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:from-yellow-300 hover:to-yellow-400 hover:shadow-xl hover:shadow-yellow-400/25 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-2"
        >
          <Calendar className="h-5 w-5" />
          <span>Book Online: onemedicalcentre.com</span>
        </a>
      </section>
    </div>
  );
} 