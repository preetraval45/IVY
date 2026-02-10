'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RSVPStep2() {
  const router = useRouter();
  const [guests, setGuests] = useState(1);

  const handleNext = () => {
    sessionStorage.setItem('rsvp_guests', guests.toString());
    router.push('/rsvp/step3');
  };

  React.useEffect(() => {
    const savedGuests = sessionStorage.getItem('rsvp_guests');
    if (savedGuests) setGuests(parseInt(savedGuests));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4 sm:p-6">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-3xl relative z-10">
        {/* Progress Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm font-bold text-rose-900">Step 2 of 4</span>
          </div>
          <div className="h-2 sm:h-3 bg-white/60 rounded-full overflow-hidden shadow-inner max-w-md mx-auto">
            <div className="h-full w-2/4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-500 shadow-lg"></div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] shadow-2xl p-8 sm:p-12 border-4 border-pink-200">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-6">
              <span className="text-4xl sm:text-5xl animate-bounce">👥</span>
              <span className="text-3xl sm:text-4xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
              <span className="text-4xl sm:text-5xl animate-bounce" style={{animationDelay: '0.2s'}}>👥</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-4 leading-tight">
              How many guests?
            </h1>
            <p className="text-base sm:text-lg text-rose-700">
              Including yourself • Maximum 10 guests 🎉
            </p>
          </div>

          {/* Guest Selection Grid */}
          <div className="mb-10 sm:mb-12 max-w-2xl mx-auto">
            <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setGuests(num)}
                  className={`relative h-16 sm:h-24 rounded-2xl sm:rounded-3xl font-black text-2xl sm:text-3xl transition-all duration-300
                    ${guests === num
                      ? 'bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-2xl scale-110 z-10'
                      : 'bg-white border-3 border-pink-200 text-rose-900 hover:border-rose-400 hover:scale-105 shadow-md hover:shadow-xl'
                    }`}
                >
                  {guests === num && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center text-sm text-rose-600 shadow-lg font-black">
                      ✓
                    </div>
                  )}
                  {num}
                </button>
              ))}
            </div>

            {/* Selected Count Display */}
            <div className="text-center bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-6 sm:p-8 border-3 border-pink-200 shadow-lg">
              <p className="text-base sm:text-lg text-rose-800 font-bold mb-2">Selected Party Size</p>
              <p className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                {guests}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-rose-700 mt-2">
                {guests === 1 ? 'Guest' : 'Guests'}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/rsvp/step1" className="w-full sm:w-auto">
              <button className="w-full sm:w-48 px-8 py-4 sm:py-5 text-rose-900 font-bold text-lg rounded-2xl sm:rounded-3xl border-3 border-pink-300 hover:border-rose-400 bg-white hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                ← Back
              </button>
            </Link>

            <button
              onClick={handleNext}
              className="w-full sm:w-64 px-8 py-4 sm:py-5 bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white font-black text-lg sm:text-xl rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Continue →
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
