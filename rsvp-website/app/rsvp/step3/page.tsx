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
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EC] to-[#FFD6E0] flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blush rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-babyPink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-textDark">Step 3 of 4</span>
            <span className="text-sm font-medium text-deepPink">75%</span>
          </div>
          <div className="h-3 bg-white/50 rounded-full overflow-hidden shadow-inner">
            <div className="h-full w-3/4 bg-gradient-to-r from-blush to-deepPink rounded-full transition-all duration-500 shadow-lg"></div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-2 mb-6">
              <span className="text-4xl animate-bounce">📧</span>
              <span className="text-3xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>📱</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-script text-transparent bg-clip-text bg-gradient-to-r from-blush via-deepPink to-blush mb-4 leading-tight">
              Stay Connected
            </h1>
            <p className="text-lg text-textMedium">
              Optional - For event updates and reminders ✨
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="relative">
              <label className="block text-sm font-semibold text-textDark mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📧</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-14 pr-4 py-4 text-lg rounded-2xl border-2 border-babyPink focus:border-deepPink bg-white/50 focus:bg-white outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-textDark mb-2">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📱</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full pl-14 pr-4 py-4 text-lg rounded-2xl border-2 border-babyPink focus:border-deepPink bg-white/50 focus:bg-white outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="bg-blush/10 rounded-2xl p-4 text-center">
              <p className="text-sm text-textMedium">
                💡 We'll only use this to send event updates and reminders
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <Link href="/rsvp/step2" className="flex-1">
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

        <p className="text-center text-sm text-textMedium mt-6">
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
