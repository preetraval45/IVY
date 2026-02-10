'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RSVPStep1() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EC] to-[#FFD6E0] flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blush rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-babyPink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-textDark">Step 1 of 4</span>
            <span className="text-sm font-medium text-deepPink">25%</span>
          </div>
          <div className="h-3 bg-white/50 rounded-full overflow-hidden shadow-inner">
            <div className="h-full w-1/4 bg-gradient-to-r from-blush to-deepPink rounded-full transition-all duration-500 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
          {/* Decorative Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center gap-2 mb-6">
              <span className="text-4xl animate-bounce">✨</span>
              <span className="text-3xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>✨</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-script text-transparent bg-clip-text bg-gradient-to-r from-blush via-deepPink to-blush mb-4 leading-tight">
              What's your name?
            </h1>
            <p className="text-lg text-textMedium">
              Let us know who's joining the celebration! 🎉
            </p>
          </div>

          {/* Input Field */}
          <div className="mb-8">
            <div className={`relative transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleNext();
                }}
                placeholder="Enter your full name"
                className={`w-full px-6 py-5 text-xl text-center font-elegant rounded-2xl border-2 transition-all duration-300 outline-none
                  ${error
                    ? 'border-red-300 bg-red-50'
                    : isFocused
                      ? 'border-deepPink bg-white shadow-lg shadow-deepPink/20'
                      : 'border-babyPink bg-white/50 hover:border-blush'
                  }`}
                autoFocus
              />
              {name && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl animate-bounce">
                  ✓
                </div>
              )}
            </div>

            {error && (
              <p className="mt-3 text-sm text-red-500 text-center font-medium animate-shake">
                {error}
              </p>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex-1">
              <button className="w-full px-6 py-4 text-textDark font-semibold rounded-2xl border-2 border-dustyRose/30 hover:border-dustyRose bg-white hover:bg-dustyRose/5 transition-all duration-300 transform hover:scale-105">
                ← Back to Invitation
              </button>
            </Link>

            <button
              onClick={handleNext}
              disabled={!name.trim()}
              className={`flex-1 px-6 py-4 font-bold rounded-2xl text-lg transition-all duration-300 transform
                ${name.trim()
                  ? 'bg-gradient-to-r from-blush via-deepPink to-blush text-white shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
            >
              Continue →
            </button>
          </div>
        </div>

        {/* Helper Text */}
        <p className="text-center text-sm text-textMedium mt-6">
          Your information is secure and will only be used for this event 🔒
        </p>
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
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
      `}</style>
    </div>
  );
}
