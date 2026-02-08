'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function RSVPStep2() {
  const router = useRouter();
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState('');

  const handleNext = () => {
    if (guests < 1 || guests > 10) {
      setError('Please select between 1 and 10 guests');
      return;
    }

    sessionStorage.setItem('rsvp_guests', guests.toString());
    router.push('/rsvp/step3');
  };

  React.useEffect(() => {
    const savedGuests = sessionStorage.getItem('rsvp_guests');
    if (savedGuests) setGuests(parseInt(savedGuests));
  }, []);

  return (
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <Card variant="gradient" className="shadow-2xl">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-textDark">Step 2 of 4</span>
              <span className="text-sm text-textLight">50% Complete</span>
            </div>
            <div className="w-full bg-[#F5E6CC] rounded-full h-2">
              <div className="bg-gradient-to-r from-blush to-deepPink h-2 rounded-full w-1/2 transition-all duration-300"></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-script text-deepPink mb-4 text-center">
              How many guests?
            </h1>
            <p className="text-textLight text-center">
              Including yourself (max 10 guests)
            </p>
          </div>

          {/* Number Selection */}
          <div className="mb-8">
            <div className="grid grid-cols-5 gap-3 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => {
                    setGuests(num);
                    setError('');
                  }}
                  className={`
                    h-16 rounded-xl font-bold text-xl transition-all duration-200
                    ${guests === num
                      ? 'bg-gradient-to-r from-blush to-deepPink text-white shadow-lg scale-110'
                      : 'bg-white border-2 border-babyPink text-textDark hover:border-blush hover:scale-105'
                    }
                  `}
                >
                  {num}
                </button>
              ))}
            </div>
            {error && <p className="text-sm text-[#C75B7A] text-center">{error}</p>}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center gap-4">
            <Link href="/rsvp/step1">
              <Button variant="outline" size="md">
                ← Back
              </Button>
            </Link>
            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
            >
              Next →
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
