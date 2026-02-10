import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EC] to-[#FFD6E0]">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8A0BF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4C2C2] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#C75B7A] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Centered Title */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-[#C75B7A] shadow-lg">
                  You're Invited to a Special Celebration 💕
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-script text-transparent bg-clip-text bg-gradient-to-r from-[#E8A0BF] via-[#C75B7A] to-[#E8A0BF] mb-6 animate-fade-in leading-tight">
                Ivy's Sweet 16
              </h1>
              <p className="text-2xl md:text-3xl text-[#8B5A6B] font-elegant mb-4">
                A Pretty in Pink Celebration
              </p>
              <div className="flex items-center justify-center gap-4 text-lg text-[#8B5A6B]">
                <span className="flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  Sunday, February 15, 2026
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-2">
                  <span className="text-2xl">🕐</span>
                  2:30 - 6:30 PM
                </span>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Poster Card */}
              <div className="order-2 lg:order-1">
                <div className="group relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#E8A0BF] via-[#F4C2C2] to-[#C75B7A] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                  {/* Poster Container */}
                  <div className="relative bg-white rounded-3xl p-3 shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
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
              </div>

              {/* Event Details Card */}
              <div className="order-1 lg:order-2 space-y-6">
                {/* Location Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-[#E8A0BF] to-[#C75B7A] p-4 rounded-2xl shadow-lg">
                      <span className="text-3xl">📍</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#523040] mb-2">Venue</h3>
                      <p className="text-lg font-semibold text-[#C75B7A]">Club House</p>
                      <p className="text-[#8B5A6B]">5616 Sage Hills DR</p>
                      <p className="text-[#8B5A6B]">Charlotte, NC 28277</p>
                    </div>
                  </div>
                </div>

                {/* Dress Code Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-[#E8A0BF] to-[#C75B7A] p-4 rounded-2xl shadow-lg">
                      <span className="text-3xl">👗</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#523040] mb-3">Dress Code</h3>
                      <div className="space-y-2">
                        <p className="text-base">
                          <span className="font-semibold text-[#8B1538]">Birthday Girl:</span> Red Wine Color 🍷
                        </p>
                        <p className="text-base">
                          <span className="font-semibold text-[#C75B7A]">Guests:</span> Pretty in Pink or any pastel color
                        </p>
                        <p className="text-sm text-[#8B5A6B] italic">
                          Wear what makes you feel beautiful! ✨
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-gradient-to-br from-[#E8A0BF] to-[#C75B7A] rounded-3xl p-8 shadow-xl text-white">
                  <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🍽️</span>
                      <span className="text-sm font-medium">Dinner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">💃</span>
                      <span className="text-sm font-medium">Dancing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📸</span>
                      <span className="text-sm font-medium">Photo Booth</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎉</span>
                      <span className="text-sm font-medium">Surprises</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href="/rsvp/step1" className="block">
                  <button className="w-full bg-gradient-to-r from-[#E8A0BF] via-[#C75B7A] to-[#E8A0BF] text-white font-bold py-6 px-8 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-[1.02]">
                    RSVP Now - Save My Spot! 🎊
                  </button>
                </Link>

                {/* Deadline Notice */}
                <p className="text-center text-sm text-[#8B5A6B]">
                  Please RSVP by <span className="font-bold text-[#C75B7A]">February 13, 2026</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 text-center border-t border-[#E8A0BF]/30">
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
