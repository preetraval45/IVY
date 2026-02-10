'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen poster-bg">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Elegant Header */}
        <header className="text-center mb-12 fade-in-up">
          <div className="inline-block px-6 py-2 mb-6 bg-softRose/10 rounded-full border border-softRose/20">
            <p className="text-sm font-elegant text-textSecondary tracking-wider">You're Invited to Celebrate</p>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-script text-softRose mb-4 gentle-float" style={{fontWeight: 300}}>
            Ivy's Sweet 16
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-elegant text-textSecondary mb-8">
            A Pretty in Pink Celebration
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-base sm:text-lg text-textPrimary">
            <div className="flex items-center gap-3 elegant-card px-5 py-3">
              <span className="text-xl sm:text-2xl">📅</span>
              <span className="font-medium text-sm sm:text-base">Sunday, February 15, 2026</span>
            </div>
            <div className="flex items-center gap-3 elegant-card px-5 py-3">
              <span className="text-xl sm:text-2xl">🕐</span>
              <span className="font-medium text-sm sm:text-base">2:30 - 6:30 PM</span>
            </div>
          </div>
        </header>

        <div className="elegant-divider"></div>

        {/* Main Content: Poster LEFT, Details RIGHT */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT: Poster with more padding */}
            <div className="fade-in order-2 lg:order-1">
              <div className="elegant-card p-8 sm:p-10 lg:p-12 soft-shadow sticky top-8">
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/poster.png"
                    alt="Ivy's Sweet 16 Celebration"
                    fill
                    className="object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Event Details & RSVP with more spacing */}
            <div className="space-y-8 fade-in-up order-1 lg:order-2">

              {/* Venue */}
              <div className="elegant-card hover:scale-[1.02] transition-transform duration-300 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-softRose to-dustyRose rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-elegant text-textPrimary mb-3">Venue</h3>
                    <p className="text-xl font-semibold text-softRose mb-2">Club House</p>
                    <p className="text-lg text-textSecondary">5616 Sage Hills DR</p>
                    <p className="text-lg text-textSecondary">Charlotte, NC 28277</p>
                  </div>
                </div>
              </div>

              {/* Dress Code */}
              <div className="elegant-card hover:scale-[1.02] transition-transform duration-300 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-softRose to-dustyRose rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl">👗</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-elegant text-textPrimary mb-4">Dress Code</h3>

                    <div className="space-y-4 mb-4">
                      <div className="bg-dustyRose/10 rounded-xl p-4 border border-dustyRose/20">
                        <p className="font-semibold text-textPrimary text-base mb-1">Birthday Girl</p>
                        <p className="text-textSecondary flex items-center gap-2">
                          <span>🍷</span>
                          <span>Red Wine Color</span>
                        </p>
                      </div>

                      <div className="bg-blush/10 rounded-xl p-4 border border-blush/20">
                        <p className="font-semibold text-textPrimary mb-3 text-base">Guests - Pastels:</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <div className="w-10 h-10 rounded-full bg-pink-200 border-2 border-pink-300 shadow-sm"></div>
                          <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-blue-300 shadow-sm"></div>
                          <div className="w-10 h-10 rounded-full bg-purple-200 border-2 border-purple-300 shadow-sm"></div>
                          <div className="w-10 h-10 rounded-full bg-yellow-200 border-2 border-yellow-300 shadow-sm"></div>
                          <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-green-300 shadow-sm"></div>
                        </div>
                        <p className="text-sm text-textMuted">Pink • Blue • Purple • Yellow • Mint</p>
                      </div>
                    </div>

                    <p className="text-sm text-textMuted italic">Wear what makes you feel beautiful ✨</p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="elegant-card hover:scale-[1.02] transition-transform duration-300 p-8 bg-gradient-to-br from-softRose/10 to-dustyRose/10">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 shrink-0 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-elegant text-textPrimary mb-4">What to Expect</h3>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-textSecondary text-lg">
                        <span className="text-2xl">🍽️</span>
                        <span className="font-medium">Delicious Dinner</span>
                      </div>
                      <div className="flex items-center gap-3 text-textSecondary text-lg">
                        <span className="text-2xl">💃</span>
                        <span className="font-medium">Dancing</span>
                      </div>
                      <div className="flex items-center gap-3 text-textSecondary text-lg">
                        <span className="text-2xl">📸</span>
                        <span className="font-medium">Photo Booth</span>
                      </div>
                      <div className="flex items-center gap-3 text-textSecondary text-lg">
                        <span className="text-2xl">🎊</span>
                        <span className="font-medium">Surprises</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RSVP Button with more spacing */}
              <div className="pt-6">
                <Link href="/rsvp/step1" className="block">
                  <button className="elegant-button text-xl px-10 py-6 font-elegant w-full text-center shadow-2xl hover:shadow-3xl">
                    RSVP Now - Save My Spot! 🎊
                  </button>
                </Link>
                <p className="text-center text-textSecondary mt-5 text-base">
                  Please RSVP by <span className="font-bold text-softRose text-lg">February 13, 2026</span>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-softRose/20 fade-in">
          <p className="text-textSecondary mb-2 text-base">
            Questions? Contact us at{' '}
            <a href="mailto:party@ivysweet16.com" className="text-softRose hover:text-dustyRose font-semibold underline text-lg">
              party@ivysweet16.com
            </a>
          </p>
          <p className="text-textMuted text-sm">
            We can't wait to celebrate with you! 💕
          </p>
        </footer>
      </main>
    </div>
  );
}
