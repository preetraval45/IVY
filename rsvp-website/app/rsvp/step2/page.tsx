'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

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
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-[#FFFAF8] via-[#FDEBE8] to-[#FDE2E4] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#E8A0BF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#F4C2C2]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <Card variant="gradient" className="shadow-2xl backdrop-blur-sm">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-[#523040]">Step 2 of 4</span>
              <span className="text-sm text-[#523040]/70 font-medium">50% Complete</span>
            </div>
            <div className="w-full bg-[#F5E6CC] rounded-full h-3 shadow-inner">
              <div className="bg-gradient-to-r from-[#E8A0BF] to-[#C75B7A] h-3 rounded-full w-1/2 transition-all duration-500 shadow-lg"></div>
            </div>
          </div>

          {/* Decorative Top */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl animate-bounce">✿</span>
              <span className="text-2xl animate-bounce" style={{animationDelay: '0.1s'}}>❀</span>
              <span className="text-3xl animate-bounce" style={{animationDelay: '0.2s'}}>✿</span>
            </div>
          </div>

          {/* Question */}
          <div className="mb-10 text-center">
            <h1 className="text-5xl md:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-[#E8A0BF] via-[#C75B7A] to-[#E8A0BF] mb-4 leading-tight">
              How many guests?
            </h1>
            <p className="text-lg text-[#523040]/70">
              Including yourself • Maximum 10 guests
            </p>
          </div>

          {/* Number Selection */}
          <div className="mb-10">
            <div className="grid grid-cols-5 gap-3 md:gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setGuests(num)}
                  className={`
                    h-20 rounded-2xl font-bold text-2xl transition-all duration-300 relative overflow-hidden
                    ${guests === num
                      ? 'bg-gradient-to-br from-[#E8A0BF] to-[#C75B7A] text-white shadow-2xl scale-110 z-10'
                      : 'bg-white border-2 border-[#F4C2C2] text-[#523040] hover:border-[#E8A0BF] hover:scale-105 shadow-lg'
                    }
                  `}
                >
                  {guests === num && (
                    <div className="absolute inset-0 bg-white/20 animate-ping"></div>
                  )}
                  <span className="relative z-10">{num}</span>
                </button>
              ))}
            </div>

            {/* Selected guests display */}
            <div className="mt-8 text-center">
              <p className="text-lg text-[#523040]/80">
                Selected: <span className="font-bold text-[#C75B7A] text-2xl">{guests}</span> {guests === 1 ? 'guest' : 'guests'}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center gap-4">
            <Link href="/rsvp/step1">
              <Button variant="outline" size="md" className="hover:scale-105 transition-transform">
                ← Back
              </Button>
            </Link>
            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
              className="px-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Continue →
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
