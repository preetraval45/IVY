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
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EC] to-[#FFD6E0] flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blush rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-babyPink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-3xl relative z-10">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-textDark">Step 2 of 4</span>
            <span className="text-sm font-medium text-deepPink">50%</span>
          </div>
          <div className="h-3 bg-white/50 rounded-full overflow-hidden shadow-inner">
            <div className="h-full w-1/2 bg-gradient-to-r from-blush to-deepPink rounded-full transition-all duration-500 shadow-lg"></div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-2 mb-6">
              <span className="text-4xl animate-bounce">👥</span>
              <span className="text-3xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>👥</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-script text-transparent bg-clip-text bg-gradient-to-r from-blush via-deepPink to-blush mb-4 leading-tight">
              How many guests?
            </h1>
            <p className="text-lg text-textMedium">
              Including yourself • Maximum 10 guests 🎉
            </p>
          </div>

          <div className="mb-10">
            <div className="grid grid-cols-5 gap-3 md:gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setGuests(num)}
                  className={`relative h-20 md:h-24 rounded-2xl font-bold text-2xl md:text-3xl transition-all duration-300
                    ${guests === num
                      ? 'bg-gradient-to-br from-blush to-deepPink text-white shadow-2xl scale-110 z-10'
                      : 'bg-white/80 border-2 border-babyPink text-textDark hover:border-blush hover:scale-105 shadow-md hover:shadow-xl'
                    }`}
                >
                  {guests === num && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs">
                      ✓
                    </div>
                  )}
                  {num}
                </button>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-blush/10 to-deepPink/10 rounded-2xl p-6">
              <p className="text-lg text-textDark mb-2">Selected Party Size</p>
              <p className="text-4xl font-bold text-deepPink">
                {guests} {guests === 1 ? 'Guest' : 'Guests'}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <Link href="/rsvp/step1" className="flex-1">
              <button className="w-full px-6 py-4 text-textDark font-semibold rounded-2xl border-2 border-dustyRose/30 hover:border-dustyRose bg-white hover:bg-dustyRose/5 transition-all duration-300 transform hover:scale-105">
                ← Back
              </button>
            </Link>

            <button
              onClick={handleNext}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-blush via-deepPink to-blush text-white font-bold rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
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
