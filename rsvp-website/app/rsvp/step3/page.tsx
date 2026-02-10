'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RSVPStep3() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    sessionStorage.setItem('rsvp_email', email.trim());
    sessionStorage.setItem('rsvp_phone', phone.trim());
    router.push('/rsvp/step4');
  };

  React.useEffect(() => {
    const savedEmail = sessionStorage.getItem('rsvp_email');
    const savedPhone = sessionStorage.getItem('rsvp_phone');
    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EC] to-[#FFD6E0] flex items-center justify-center p-6">
      {/* Symmetric Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blush rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-babyPink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress Bar - Centered */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm font-semibold text-textDark">Step 3 of 4</span>
          </div>
          <div className="h-3 bg-white/50 rounded-full overflow-hidden shadow-inner max-w-md mx-auto">
            <div className="h-full w-3/4 bg-gradient-to-r from-blush to-deepPink rounded-full transition-all duration-500 shadow-lg"></div>
          </div>
        </div>

        {/* Main Card - Perfectly Centered */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/50">
          {/* Header - Centered */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <span className="text-5xl animate-bounce">📧</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
              <span className="text-5xl animate-bounce" style={{animationDelay: '0.2s'}}>📱</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-blush via-deepPink to-blush mb-4 leading-tight">
              Stay Connected
            </h1>
            <p className="text-lg text-textMedium">
              Optional - For event updates and reminders ✨
            </p>
          </div>

          {/* Input Fields - Centered */}
          <div className="space-y-8 mb-12 max-w-xl mx-auto">
            {/* Email Field */}
            <div className="space-y-3">
              <label className="block text-center text-sm font-semibold text-textDark uppercase tracking-wide">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl">📧</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-16 pr-6 py-6 text-lg text-center rounded-2xl border-2 border-babyPink focus:border-deepPink bg-white/50 focus:bg-white outline-none transition-all duration-300 shadow-lg focus:shadow-xl"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-3">
              <label className="block text-center text-sm font-semibold text-textDark uppercase tracking-wide">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl">📱</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full pl-16 pr-6 py-6 text-lg text-center rounded-2xl border-2 border-babyPink focus:border-deepPink bg-white/50 focus:bg-white outline-none transition-all duration-300 shadow-lg focus:shadow-xl"
                />
              </div>
            </div>

            {/* Info Note */}
            <div className="bg-blush/10 rounded-2xl p-6 text-center">
              <p className="text-sm text-textMedium">
                💡 We'll only use this to send event updates and reminders
              </p>
            </div>
          </div>

          {/* Buttons - Symmetric Layout */}
          <div className="flex items-center justify-center gap-6">
            <Link href="/rsvp/step2" className="w-48">
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

        {/* Footer Note - Centered */}
        <p className="text-center text-sm text-textMedium mt-8">
          Skip this step if you prefer - it's completely optional! ⏭️
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
      `}</style>
    </div>
  );
}
