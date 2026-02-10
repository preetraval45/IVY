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
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EC] to-[#FFD6E0] flex items-center justify-center p-6">
      {/* Symmetric Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blush rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-babyPink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-3xl relative z-10">
        {/* Progress Bar - Centered */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm font-semibold text-textDark">Step 2 of 4</span>
          </div>
          <div className="h-3 bg-white/50 rounded-full overflow-hidden shadow-inner max-w-md mx-auto">
            <div className="h-full w-1/2 bg-gradient-to-r from-blush to-deepPink rounded-full transition-all duration-500 shadow-lg"></div>
          </div>
        </div>

        {/* Main Card - Perfectly Centered */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/50">
          {/* Header - Centered */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <span className="text-5xl animate-bounce">👥</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
              <span className="text-5xl animate-bounce" style={{animationDelay: '0.2s'}}>👥</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-blush via-deepPink to-blush mb-4 leading-tight">
              How many guests?
            </h1>
            <p className="text-lg text-textMedium">
              Including yourself • Maximum 10 guests 🎉
            </p>
          </div>

          {/* Guest Selection Grid - Perfectly Centered */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="grid grid-cols-5 gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setGuests(num)}
                  className={`relative h-24 rounded-2xl font-bold text-3xl transition-all duration-300
                    ${guests === num
                      ? 'bg-gradient-to-br from-blush to-deepPink text-white shadow-2xl scale-110 z-10'
                      : 'bg-white border-2 border-babyPink text-textDark hover:border-deepPink hover:scale-105 shadow-md hover:shadow-xl'
                    }`}
                >
                  {guests === num && (
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-sm text-deepPink">
                      ✓
                    </div>
                  )}
                  {num}
                </button>
              ))}
            </div>

            {/* Selected Count Display - Centered */}
            <div className="text-center bg-gradient-to-r from-blush/10 to-deepPink/10 rounded-2xl p-8">
              <p className="text-lg text-textDark mb-2">Selected Party Size</p>
              <p className="text-5xl font-bold text-deepPink">
                {guests} {guests === 1 ? 'Guest' : 'Guests'}
              </p>
            </div>
          </div>

          {/* Buttons - Symmetric Layout */}
          <div className="flex items-center justify-center gap-6">
            <Link href="/rsvp/step1" className="w-48">
              <button className="w-full px-8 py-5 text-textDark font-semibold rounded-2xl border-2 border-dustyRose/50 hover:border-dustyRose bg-white hover:bg-dustyRose/10 transition-all duration-300 transform hover:scale-105">
                ← Back
              </button>
            </Link>

            <button
              onClick={handleNext}
              className="w-48 px-8 py-5 bg-gradient-to-r from-blush via-deepPink to-blush text-white font-bold rounded-2xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
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
