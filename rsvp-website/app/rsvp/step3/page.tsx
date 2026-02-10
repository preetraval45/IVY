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
            <span className="text-sm font-bold text-rose-900">Step 3 of 4</span>
          </div>
          <div className="h-2 sm:h-3 bg-white/60 rounded-full overflow-hidden shadow-inner max-w-md mx-auto">
            <div className="h-full w-3/4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-500 shadow-lg"></div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] shadow-2xl p-8 sm:p-12 border-4 border-pink-200">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-6">
              <span className="text-4xl sm:text-5xl animate-bounce">📧</span>
              <span className="text-3xl sm:text-4xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
              <span className="text-4xl sm:text-5xl animate-bounce" style={{animationDelay: '0.2s'}}>📱</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-4 leading-tight">
              Stay Connected
            </h1>
            <p className="text-base sm:text-lg text-rose-700">
              Optional - For event updates and reminders ✨
            </p>
          </div>

          {/* Input Fields */}
          <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12 max-w-xl mx-auto">
            {/* Email Field */}
            <div>
              <label className="block text-center text-sm font-bold text-rose-900 mb-4 uppercase tracking-wide">
                Email Address (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl">📧</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-14 sm:pl-16 pr-4 sm:pr-6 py-5 sm:py-6 text-base sm:text-lg text-center rounded-2xl sm:rounded-3xl border-3 border-pink-300 focus:border-rose-500 bg-white focus:bg-pink-50/30 outline-none transition-all duration-300 shadow-lg focus:shadow-2xl"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-center text-sm font-bold text-rose-900 mb-4 uppercase tracking-wide">
                Phone Number (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl">📱</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full pl-14 sm:pl-16 pr-4 sm:pr-6 py-5 sm:py-6 text-base sm:text-lg text-center rounded-2xl sm:rounded-3xl border-3 border-pink-300 focus:border-rose-500 bg-white focus:bg-pink-50/30 outline-none transition-all duration-300 shadow-lg focus:shadow-2xl"
                />
              </div>
            </div>

            {/* Info Note */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center border-2 border-pink-200 shadow-md">
              <p className="text-sm sm:text-base text-rose-700 font-medium">
                💡 We'll only use this to send event updates and reminders
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/rsvp/step2" className="w-full sm:w-auto">
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

        {/* Footer Note */}
        <p className="text-center text-sm text-rose-700 mt-6 sm:mt-8 px-4 font-medium">
          ⏭️ You can skip this step if you prefer - it's completely optional!
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
