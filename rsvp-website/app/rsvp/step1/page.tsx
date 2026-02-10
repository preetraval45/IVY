'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RSVPStep1() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (name.trim().length < 2) {
      setError('Please enter your full name (at least 2 characters)');
      return;
    }
    sessionStorage.setItem('rsvp_name', name.trim());
    router.push('/rsvp/step2');
  };

  React.useEffect(() => {
    const savedName = sessionStorage.getItem('rsvp_name');
    if (savedName) setName(savedName);
  }, []);

  return (
    <div className="min-h-screen poster-bg flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl">

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <span className="text-sm font-semibold text-textPrimary">Step 1 of 4</span>
          </div>
          <div className="elegant-progress max-w-md mx-auto">
            <div className="elegant-progress-fill" style={{width: '25%'}}></div>
          </div>
        </div>

        {/* Main Card - Bigger with proper spacing */}
        <div className="elegant-card soft-shadow p-8 sm:p-12 fade-in-up">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-5xl mb-6">✨</div>
            <h1 className="text-4xl sm:text-5xl font-script text-softRose mb-4" style={{fontWeight: 300}}>
              What's your name?
            </h1>
            <p className="text-lg text-textSecondary">
              Let us know who's joining the celebration 🎉
            </p>
          </div>

          {/* Input Field */}
          <div className="mb-10 max-w-xl mx-auto">
            <label className="block text-center text-sm font-semibold text-textPrimary mb-4 uppercase tracking-wide">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleNext();
              }}
              placeholder="Enter your full name"
              className="elegant-input text-lg py-4"
              autoFocus
            />

            {error && (
              <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-center font-medium">
                {error}
              </div>
            )}
          </div>

          {/* Buttons - Bigger and properly spaced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="w-full sm:w-auto">
              <button className="w-full sm:w-48 px-8 py-4 text-textPrimary font-semibold rounded-full border-2 border-softRose/30 hover:border-softRose bg-white hover:bg-softRose/5 transition-all duration-300">
                ← Back
              </button>
            </Link>

            <button
              onClick={handleNext}
              disabled={!name.trim()}
              className={`w-full sm:w-64 elegant-button text-lg py-4 transition-all duration-300 ${
                !name.trim() ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Continue →
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-textMuted mt-6">
          🔒 Your information is secure and private
        </p>
      </div>
    </div>
  );
}
