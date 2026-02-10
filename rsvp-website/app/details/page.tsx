'use client';

import React from 'react';
import Link from 'next/link';

export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm font-bold shadow-xl">
              ✨ Complete Event Details ✨
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-6 animate-fade-in leading-tight drop-shadow-lg">
            Ivy's Sweet 16
          </h1>

          <p className="text-3xl md:text-4xl text-rose-800 font-elegant mb-8 animate-fade-in">
            Everything You Need to Know
          </p>
        </div>

        {/* Date & Time Card */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-12 border-4 border-pink-200">
            <h2 className="text-5xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mb-10 text-center">
              When & Where
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Date & Time */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border-2 border-pink-200">
                <div className="text-center">
                  <span className="text-6xl mb-6 block">📅</span>
                  <h3 className="text-2xl font-bold text-rose-900 mb-4">Date & Time</h3>
                  <p className="text-3xl font-bold text-pink-600 mb-3">
                    Sunday, February 15, 2026
                  </p>
                  <p className="text-2xl text-rose-700 font-semibold">
                    2:30 PM - 6:30 PM
                  </p>
                  <p className="text-lg text-rose-600 mt-4 italic">
                    Please arrive on time! 🕐
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border-2 border-pink-200">
                <div className="text-center">
                  <span className="text-6xl mb-6 block">📍</span>
                  <h3 className="text-2xl font-bold text-rose-900 mb-4">Venue</h3>
                  <p className="text-3xl font-bold text-pink-600 mb-3">
                    Club House
                  </p>
                  <p className="text-xl text-rose-700 mb-2">5616 Sage Hills DR</p>
                  <p className="text-xl text-rose-700 mb-4">Charlotte, NC 28277</p>
                  <a
                    href="https://maps.google.com/?q=5616+Sage+Hills+DR+Charlotte+NC+28277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dress Code Card */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 rounded-[2.5rem] shadow-2xl p-12">
            <h2 className="text-5xl font-script text-white mb-10 text-center drop-shadow-lg">
              Dress Code
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Birthday Girl */}
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30">
                <div className="text-center">
                  <span className="text-6xl mb-6 block">🍷</span>
                  <h3 className="text-3xl font-bold text-white mb-4">Birthday Girl</h3>
                  <p className="text-4xl font-bold text-white mb-2">Red Wine Color</p>
                  <p className="text-xl text-white/90">
                    The star of the show! ⭐
                  </p>
                </div>
              </div>

              {/* Guests */}
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30">
                <div className="text-center">
                  <span className="text-6xl mb-6 block">💕</span>
                  <h3 className="text-3xl font-bold text-white mb-4">Guests</h3>
                  <p className="text-4xl font-bold text-white mb-2">Pretty in Pink</p>
                  <p className="text-xl text-white/90 mb-3">
                    or any Pastel Color
                  </p>
                  <p className="text-lg text-white/80 italic">
                    Wear what makes you feel beautiful! ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Grid */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-12 border-4 border-rose-200">
            <h2 className="text-5xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mb-10 text-center">
              What to Expect
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Dinner */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 w-24 h-24 mx-auto mb-6 rounded-[1.5rem] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <span className="text-5xl">🍽️</span>
                </div>
                <h3 className="text-2xl font-bold text-rose-900 mb-3">Delicious Food</h3>
                <p className="text-lg text-rose-700">
                  Gourmet dinner & sweet treats
                </p>
              </div>

              {/* Dancing */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-24 h-24 mx-auto mb-6 rounded-[1.5rem] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <span className="text-5xl">💃</span>
                </div>
                <h3 className="text-2xl font-bold text-rose-900 mb-3">Music & Dancing</h3>
                <p className="text-lg text-rose-700">
                  DJ spinning all your favorites
                </p>
              </div>

              {/* Photo Booth */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-fuchsia-500 to-rose-600 w-24 h-24 mx-auto mb-6 rounded-[1.5rem] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <span className="text-5xl">📸</span>
                </div>
                <h3 className="text-2xl font-bold text-rose-900 mb-3">Photo Booth</h3>
                <p className="text-lg text-rose-700">
                  Capture memories with props
                </p>
              </div>

              {/* Surprises */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-pink-600 to-fuchsia-600 w-24 h-24 mx-auto mb-6 rounded-[1.5rem] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <span className="text-5xl">🎊</span>
                </div>
                <h3 className="text-2xl font-bold text-rose-900 mb-3">Surprises</h3>
                <p className="text-lg text-rose-700">
                  Special moments & memories
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-[2rem] p-10 border-2 border-pink-200 shadow-xl">
            <h3 className="text-3xl font-bold text-rose-900 mb-6 text-center">📝 Important Notes</h3>
            <ul className="space-y-4 text-lg text-rose-800">
              <li className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <span>Please RSVP by <strong className="text-pink-600">February 13, 2026</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <span>Maximum <strong className="text-pink-600">10 guests</strong> per RSVP</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <span>Let us know about any <strong className="text-pink-600">dietary restrictions</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">✓</span>
                <span>Arrive on time to enjoy the full celebration!</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/" className="flex-1 max-w-md">
              <button className="w-full px-10 py-6 text-rose-900 font-bold text-xl rounded-[2rem] border-4 border-pink-500 bg-white hover:bg-pink-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                ← Back to Home
              </button>
            </Link>

            <Link href="/rsvp/step1" className="flex-1 max-w-md">
              <button className="w-full bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white font-black py-6 px-10 rounded-[2rem] text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <span className="flex items-center justify-center gap-3">
                  RSVP Now
                  <span className="text-3xl">🎊</span>
                </span>
              </button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-rose-700 text-lg">
            Questions? Contact us at{' '}
            <a href="mailto:party@ivysweet16.com" className="text-pink-600 hover:text-rose-600 font-bold underline text-xl">
              party@ivysweet16.com
            </a>
          </p>
        </footer>
      </main>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -60px) scale(1.15); }
          50% { transform: translate(-30px, 30px) scale(0.85); }
          75% { transform: translate(60px, 60px) scale(1.1); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
      `}</style>
    </div>
  );
}
