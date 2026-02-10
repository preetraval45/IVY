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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4 sm:p-6">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm font-bold text-rose-900">Step 1 of 4</span>
          </div>
          <div className="h-2 sm:h-3 bg-white/60 rounded-full overflow-hidden shadow-inner max-w-md mx-auto">
            <div className="h-full w-1/4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-500 shadow-lg"></div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] shadow-2xl p-8 sm:p-12 border-4 border-pink-200">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-6">
              <span className="text-4xl sm:text-5xl animate-bounce">✨</span>
              <span className="text-3xl sm:text-4xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
              <span className="text-4xl sm:text-5xl animate-bounce" style={{animationDelay: '0.2s'}}>✨</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-4 leading-tight">
              What's your name?
            </h1>
            <p className="text-base sm:text-lg text-rose-700">
              Let us know who's joining the celebration! 🎉
            </p>
          </div>

          {/* Input Field */}
          <div className="mb-10 sm:mb-12 max-w-xl mx-auto">
            <label className="block text-center text-sm font-bold text-rose-900 mb-4 uppercase tracking-wide">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl">👤</span>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleNext();
                }}
                placeholder="Enter your full name"
                className={`w-full pl-14 sm:pl-16 pr-4 sm:pr-6 py-5 sm:py-6 text-lg sm:text-xl text-center font-medium rounded-2xl sm:rounded-3xl border-3 transition-all duration-300 outline-none
                  ${error
                    ? 'border-red-400 bg-red-50 text-red-700'
                    : 'border-pink-300 focus:border-rose-500 bg-white focus:bg-pink-50/30 shadow-lg focus:shadow-2xl'
                  }`}
                autoFocus
              />
              {name && !error && (
                <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl text-green-500 animate-bounce">
                  ✓
                </div>
              )}
            </div>

            {error && (
              <p className="mt-4 text-sm font-bold text-red-600 text-center animate-shake bg-red-50 rounded-2xl p-3 border-2 border-red-200">
                {error}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/" className="w-full sm:w-auto">
              <button className="w-full sm:w-48 px-8 py-4 sm:py-5 text-rose-900 font-bold text-lg rounded-2xl sm:rounded-3xl border-3 border-pink-300 hover:border-rose-400 bg-white hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                ← Back
              </button>
            </Link>

            <button
              onClick={handleNext}
              disabled={!name.trim()}
              className={`w-full sm:w-64 px-8 py-4 sm:py-5 font-black text-lg sm:text-xl rounded-2xl sm:rounded-3xl transition-all duration-300 transform shadow-2xl
                ${name.trim()
                  ? 'bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white hover:shadow-3xl hover:scale-105 hover:-translate-y-1'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
            >
              Continue →
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-rose-700 mt-6 sm:mt-8 px-4">
          🔒 Your information is secure and will only be used for this event
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
