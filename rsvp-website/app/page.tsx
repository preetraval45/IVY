import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EC] to-[#FFD6E0]">
      {/* Symmetric Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E8A0BF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F4C2C2] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#C75B7A] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative z-10 container mx-auto px-6 py-16">
        {/* Hero Section - Perfectly Centered */}
        <section className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-8 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-[#C75B7A] shadow-lg">
              You're Invited to a Special Celebration 💕
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-script text-transparent bg-clip-text bg-gradient-to-r from-[#E8A0BF] via-[#C75B7A] to-[#E8A0BF] mb-6 animate-fade-in leading-tight">
            Ivy's Sweet 16
          </h1>

          <p className="text-3xl md:text-4xl text-[#8B5A6B] font-elegant mb-8">
            A Pretty in Pink Celebration
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl text-[#8B5A6B]">
            <span className="flex items-center gap-3">
              <span className="text-3xl">📅</span>
              Sunday, February 15, 2026
            </span>
            <span className="hidden md:inline text-2xl">•</span>
            <span className="flex items-center gap-3">
              <span className="text-3xl">🕐</span>
              2:30 - 6:30 PM
            </span>
          </div>
        </section>

        {/* Poster Section - Centered */}
        <section className="mb-16 flex justify-center">
          <div className="group relative max-w-md w-full">
            {/* Glow Effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#E8A0BF] via-[#F4C2C2] to-[#C75B7A] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Poster Container */}
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl transform transition-all duration-500 hover:scale-105">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden">
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
        </section>

        {/* Event Details Grid - Symmetric 3-Column Layout */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Venue Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 text-center">
              <div className="bg-gradient-to-br from-[#E8A0BF] to-[#C75B7A] w-20 h-20 mx-auto mb-6 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-4xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-[#523040] mb-4">Venue</h3>
              <p className="text-xl font-semibold text-[#C75B7A] mb-2">Club House</p>
              <p className="text-[#8B5A6B]">5616 Sage Hills DR</p>
              <p className="text-[#8B5A6B]">Charlotte, NC 28277</p>
            </div>

            {/* Dress Code Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 text-center">
              <div className="bg-gradient-to-br from-[#E8A0BF] to-[#C75B7A] w-20 h-20 mx-auto mb-6 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-4xl">👗</span>
              </div>
              <h3 className="text-2xl font-bold text-[#523040] mb-4">Dress Code</h3>
              <p className="text-base mb-3">
                <span className="font-semibold text-[#8B1538]">Birthday Girl:</span>
                <br />Red Wine Color 🍷
              </p>
              <p className="text-base mb-3">
                <span className="font-semibold text-[#C75B7A]">Guests:</span>
                <br />Pretty in Pink or Pastels
              </p>
              <p className="text-sm text-[#8B5A6B] italic">
                Wear what makes you feel beautiful! ✨
              </p>
            </div>

            {/* What to Expect Card */}
            <div className="bg-gradient-to-br from-[#E8A0BF] to-[#C75B7A] rounded-3xl p-8 shadow-xl text-white text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-4xl">🎉</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">🍽️</span>
                  <span className="text-base font-medium">Dinner</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">💃</span>
                  <span className="text-base font-medium">Dancing</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">📸</span>
                  <span className="text-base font-medium">Photo Booth</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">🎊</span>
                  <span className="text-base font-medium">Surprises</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Centered */}
        <section className="max-w-xl mx-auto text-center">
          <Link href="/rsvp/step1">
            <button className="w-full bg-gradient-to-r from-[#E8A0BF] via-[#C75B7A] to-[#E8A0BF] text-white font-bold py-6 px-12 rounded-2xl text-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
              RSVP Now - Save My Spot! 🎊
            </button>
          </Link>

          <p className="mt-6 text-sm text-[#8B5A6B]">
            Please RSVP by <span className="font-bold text-[#C75B7A]">February 13, 2026</span>
          </p>
        </section>

        {/* Footer - Centered */}
        <footer className="mt-20 text-center border-t border-[#E8A0BF]/30 pt-12">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#8B5A6B] mb-2">
              Questions? Contact us at{' '}
              <a href="mailto:party@ivysweet16.com" className="text-[#C75B7A] hover:underline font-semibold">
                party@ivysweet16.com
              </a>
            </p>
            <p className="text-sm text-[#8B5A6B]/70">
              We can't wait to celebrate with you! 💕
            </p>
          </div>
        </footer>
      </main>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
