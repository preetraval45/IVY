'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <div className="inline-block mb-6 sm:mb-8 animate-fade-in">
            <span className="px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm sm:text-base font-bold shadow-2xl">
              💕 You're Invited to a Special Celebration 💕
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-6 sm:mb-8 animate-fade-in leading-tight drop-shadow-lg px-4">
            Ivy's Sweet 16
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-800 font-elegant mb-8 sm:mb-10 animate-fade-in px-4">
            A Pretty in Pink Celebration
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base sm:text-xl md:text-2xl text-rose-700 font-semibold mb-12 sm:mb-16 px-4">
            <span className="flex items-center gap-3 sm:gap-4 bg-white/80 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg">
              <span className="text-2xl sm:text-3xl md:text-4xl">📅</span>
              <span className="text-sm sm:text-base md:text-xl">Sunday, February 15, 2026</span>
            </span>
            <span className="flex items-center gap-3 sm:gap-4 bg-white/80 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg">
              <span className="text-2xl sm:text-3xl md:text-4xl">🕐</span>
              <span className="text-sm sm:text-base md:text-xl">2:30 - 6:30 PM</span>
            </span>
          </div>
        </section>

        {/* Poster */}
        <section className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="max-w-md mx-auto">
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 rounded-3xl sm:rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-6 shadow-2xl transform transition-all duration-500 hover:scale-105">
                <div className="relative aspect-[2/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                  <Image
                    src="/poster.png"
                    alt="Ivy's Sweet 16 Party Poster"
                    fill
                    className="object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Grid */}
        <section className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 sm:gap-10">
            {/* Venue Card */}
            <div className="group bg-white rounded-3xl sm:rounded-[2rem] p-6 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-pink-200">
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 rounded-2xl sm:rounded-[1.5rem] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-4xl sm:text-5xl">📍</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-rose-900 mb-4 sm:mb-6 text-center">Venue</h3>
              <p className="text-xl sm:text-2xl font-bold text-pink-600 mb-2 sm:mb-3 text-center">Club House</p>
              <p className="text-base sm:text-xl text-rose-700 text-center">5616 Sage Hills DR</p>
              <p className="text-base sm:text-xl text-rose-700 text-center">Charlotte, NC 28277</p>
            </div>

            {/* Dress Code Card */}
            <div className="group bg-white rounded-3xl sm:rounded-[2rem] p-6 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-rose-200">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 rounded-2xl sm:rounded-[1.5rem] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-4xl sm:text-5xl">👗</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-rose-900 mb-4 sm:mb-6 text-center">Dress Code</h3>
              <div className="space-y-4 text-center">
                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-4 border-2 border-red-200">
                  <p className="text-base sm:text-lg font-bold text-red-700">
                    Birthday Girl
                  </p>
                  <p className="text-sm sm:text-base text-red-600 mt-1">🍷 Red Wine Color</p>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 border-2 border-pink-200">
                  <p className="text-base sm:text-lg font-bold text-pink-600 mb-3">
                    Guests - Pastel Colors:
                  </p>

                  {/* Color Swatches */}
                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-200 border-2 border-pink-300 shadow-md" title="Baby Pink"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-200 border-2 border-blue-300 shadow-md" title="Pastel Blue"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-200 border-2 border-purple-300 shadow-md" title="Pastel Purple"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-200 border-2 border-yellow-300 shadow-md" title="Pastel Yellow"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-200 border-2 border-green-300 shadow-md" title="Pastel Mint"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-200 border-2 border-orange-300 shadow-md" title="Pastel Peach"></div>
                  </div>

                  <p className="text-xs sm:text-sm text-rose-600">
                    Pink • Blue • Purple • Yellow • Mint • Peach
                  </p>
                </div>

                <p className="text-sm sm:text-base text-rose-600 italic font-medium mt-3">
                  Wear what makes you feel beautiful! ✨
                </p>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="group bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 rounded-3xl sm:rounded-[2rem] p-6 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 bg-white rounded-2xl sm:rounded-[1.5rem] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-4xl sm:text-5xl">🎉</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center drop-shadow-lg">What to Expect</h3>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center justify-center gap-3 sm:gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
                  <span className="text-2xl sm:text-3xl">🍽️</span>
                  <span className="text-lg sm:text-xl font-bold text-white">Dinner</span>
                </div>
                <div className="flex items-center justify-center gap-3 sm:gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
                  <span className="text-2xl sm:text-3xl">💃</span>
                  <span className="text-lg sm:text-xl font-bold text-white">Dancing</span>
                </div>
                <div className="flex items-center justify-center gap-3 sm:gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
                  <span className="text-2xl sm:text-3xl">📸</span>
                  <span className="text-lg sm:text-xl font-bold text-white">Photo Booth</span>
                </div>
                <div className="flex items-center justify-center gap-3 sm:gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
                  <span className="text-2xl sm:text-3xl">🎊</span>
                  <span className="text-lg sm:text-xl font-bold text-white">Surprises</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
          <div className="max-w-2xl mx-auto text-center">
            <Link href="/rsvp/step1">
              <button className="group relative w-full bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white font-black py-6 sm:py-8 px-8 sm:px-16 rounded-3xl sm:rounded-[2rem] text-xl sm:text-2xl md:text-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-4">
                  RSVP Now - Save My Spot!
                  <span className="text-3xl sm:text-4xl">🎊</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </Link>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-rose-700 font-semibold px-4">
              Please RSVP by <span className="font-black text-pink-600 text-lg sm:text-xl">February 13, 2026</span>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center border-t-4 border-pink-200">
          <div className="max-w-2xl mx-auto">
            <p className="text-rose-700 mb-3 text-base sm:text-lg">
              Questions? Contact us at{' '}
              <a href="mailto:party@ivysweet16.com" className="text-pink-600 hover:text-rose-600 font-bold underline text-lg sm:text-xl">
                party@ivysweet16.com
              </a>
            </p>
            <p className="text-sm sm:text-base text-rose-600 font-medium">
              We can't wait to celebrate with you! 💕
            </p>
          </div>
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
