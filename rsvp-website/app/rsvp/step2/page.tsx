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
    <div className="min-h-screen poster-bg flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl">

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <span className="text-sm font-semibold text-textPrimary">Step 2 of 4</span>
          </div>
          <div className="elegant-progress max-w-md mx-auto">
            <div className="elegant-progress-fill" style={{width: '50%'}}></div>
          </div>
        </div>

        {/* Main Card - Bigger */}
        <div className="elegant-card soft-shadow p-8 sm:p-12 fade-in-up">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-5xl mb-6">👥</div>
            <h1 className="text-4xl sm:text-5xl font-script text-softRose mb-4" style={{fontWeight: 300}}>
              How many guests?
            </h1>
            <p className="text-lg text-textSecondary">
              Including yourself • Maximum 10 guests 🎉
            </p>
          </div>

          {/* Guest Selection Grid */}
          <div className="mb-10 max-w-2xl mx-auto">
            <div className="grid grid-cols-5 gap-3 sm:gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setGuests(num)}
                  className={`relative h-20 sm:h-24 rounded-2xl font-bold text-2xl sm:text-3xl transition-all duration-300 ${
                    guests === num
                      ? 'bg-gradient-to-br from-softRose to-dustyRose text-white shadow-xl scale-110'
                      : 'bg-white border-2 border-softRose/30 text-textPrimary hover:border-softRose hover:scale-105 shadow-md'
                  }`}
                >
                  {guests === num && (
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center text-sm text-softRose shadow-lg">
                      ✓
                    </div>
                  )}
                  {num}
                </button>
              ))}
            </div>

            {/* Selected Count */}
            <div className="text-center bg-softRose/10 rounded-2xl p-8 border-2 border-softRose/20">
              <p className="text-base text-textSecondary mb-2 font-medium">Selected Party Size</p>
              <p className="text-6xl font-bold text-softRose mb-2">{guests}</p>
              <p className="text-xl font-semibold text-textPrimary">
                {guests === 1 ? 'Guest' : 'Guests'}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/rsvp/step1" className="w-full sm:w-auto">
              <button className="w-full sm:w-48 px-8 py-4 text-textPrimary font-semibold rounded-full border-2 border-softRose/30 hover:border-softRose bg-white hover:bg-softRose/5 transition-all duration-300">
                ← Back
              </button>
            </Link>

            <button
              onClick={handleNext}
              className="w-full sm:w-64 elegant-button text-lg py-4"
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
