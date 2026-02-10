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
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="inline-block mb-8 animate-fade-in">
            <span className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-base font-bold shadow-2xl">
              💕 You're Invited to a Special Celebration 💕
            </span>
          </div>

          <h1 className="text-8xl md:text-9xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-8 animate-fade-in leading-tight drop-shadow-lg">
            Ivy's Sweet 16
          </h1>

          <p className="text-4xl md:text-5xl text-rose-800 font-elegant mb-10 animate-fade-in">
            A Pretty in Pink Celebration
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-2xl text-rose-700 font-semibold mb-16">
            <span className="flex items-center gap-4 bg-white/80 px-8 py-4 rounded-full shadow-lg">
              <span className="text-4xl">📅</span>
              Sunday, February 15, 2026
            </span>
            <span className="flex items-center gap-4 bg-white/80 px-8 py-4 rounded-full shadow-lg">
              <span className="text-4xl">🕐</span>
              2:30 - 6:30 PM
            </span>
          </div>
        </section>

        {/* Poster */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-[2.5rem] p-6 shadow-2xl transform transition-all duration-500 hover:scale-105">
                <div className="relative aspect-[2/3] rounded-3xl overflow-hidden">
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
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            {/* Venue Card */}
            <div className="group bg-white rounded-[2rem] p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-pink-200">
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 w-24 h-24 mx-auto mb-8 rounded-[1.5rem] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-5xl">📍</span>
              </div>
              <h3 className="text-3xl font-bold text-rose-900 mb-6 text-center">Venue</h3>
              <p className="text-2xl font-bold text-pink-600 mb-3 text-center">Club House</p>
              <p className="text-xl text-rose-700 text-center">5616 Sage Hills DR</p>
              <p className="text-xl text-rose-700 text-center">Charlotte, NC 28277</p>
            </div>

            {/* Dress Code Card */}
            <div className="group bg-white rounded-[2rem] p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-rose-200">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-24 h-24 mx-auto mb-8 rounded-[1.5rem] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-5xl">👗</span>
              </div>
              <h3 className="text-3xl font-bold text-rose-900 mb-6 text-center">Dress Code</h3>
              <div className="space-y-4 text-center">
                <p className="text-lg font-bold text-red-700">
                  Birthday Girl:<br />Red Wine Color 🍷
                </p>
                <p className="text-lg font-bold text-pink-600">
                  Guests:<br />Pretty in Pink or Pastels
                </p>
                <p className="text-base text-rose-600 italic font-medium">
                  Wear what makes you feel beautiful! ✨
                </p>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="group bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 rounded-[2rem] p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-24 h-24 mx-auto mb-8 bg-white rounded-[1.5rem] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-5xl">🎉</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">What to Expect</h3>
              <div className="space-y-5">
                <div className="flex items-center justify-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <span className="text-3xl">🍽️</span>
                  <span className="text-xl font-bold text-white">Dinner</span>
                </div>
                <div className="flex items-center justify-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <span className="text-3xl">💃</span>
                  <span className="text-xl font-bold text-white">Dancing</span>
                </div>
                <div className="flex items-center justify-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <span className="text-3xl">📸</span>
                  <span className="text-xl font-bold text-white">Photo Booth</span>
                </div>
                <div className="flex items-center justify-center gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <span className="text-3xl">🎊</span>
                  <span className="text-xl font-bold text-white">Surprises</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-2xl mx-auto text-center">
            <Link href="/rsvp/step1">
              <button className="group relative w-full bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white font-black py-8 px-16 rounded-[2rem] text-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-4">
                  RSVP Now - Save My Spot!
                  <span className="text-4xl">🎊</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </Link>

            <p className="mt-8 text-lg text-rose-700 font-semibold">
              Please RSVP by <span className="font-black text-pink-600 text-xl">February 13, 2026</span>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-16 text-center border-t-4 border-pink-200">
          <div className="max-w-2xl mx-auto">
            <p className="text-rose-700 mb-3 text-lg">
              Questions? Contact us at{' '}
              <a href="mailto:party@ivysweet16.com" className="text-pink-600 hover:text-rose-600 font-bold underline text-xl">
                party@ivysweet16.com
              </a>
            </p>
            <p className="text-base text-rose-600 font-medium">
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
