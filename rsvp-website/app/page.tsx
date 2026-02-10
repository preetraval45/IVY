'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen poster-bg">
      <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-16">

        {/* Elegant Header */}
        <header className="text-center mb-16 fade-in-up">
          <div className="inline-block px-8 py-3 mb-8 bg-softRose/10 rounded-full border border-softRose/20">
            <p className="text-sm font-elegant text-textSecondary tracking-wider">You're Invited to Celebrate</p>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-script text-softRose mb-6 gentle-float" style={{fontWeight: 300}}>
            Ivy's Sweet 16
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-elegant text-textSecondary mb-10">
            A Pretty in Pink Celebration
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-base sm:text-lg text-textPrimary">
            <div className="flex items-center gap-4 elegant-card px-6 py-4">
              <span className="text-2xl">📅</span>
              <span className="font-medium">Sunday, February 15, 2026</span>
            </div>
            <div className="flex items-center gap-4 elegant-card px-6 py-4">
              <span className="text-2xl">🕐</span>
              <span className="font-medium">2:30 - 6:30 PM</span>
            </div>
          </div>
        </header>

        <div className="elegant-divider my-12"></div>

        {/* Main Content: Poster LEFT, Details RIGHT with better spacing */}
        <div className="max-w-7xl mx-auto mb-16 px-4">
          <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 xl:gap-20 items-start">

            {/* LEFT: Poster */}
            <div className="fade-in order-2 lg:order-1">
              <div className="elegant-card p-8 sm:p-10 lg:p-12 soft-shadow sticky top-8">
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-inner">
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

            {/* RIGHT: Event Details & RSVP */}
            <div className="space-y-8 fade-in-up order-1 lg:order-2">

              {/* Venue */}
              <div className="elegant-card hover:scale-[1.01] transition-transform duration-300 p-7">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-softRose to-dustyRose rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-elegant text-textPrimary mb-2">Venue</h3>
                    <p className="text-lg font-semibold text-softRose mb-1">Club House</p>
                    <p className="text-base text-textSecondary">5616 Sage Hills DR</p>
                    <p className="text-base text-textSecondary">Charlotte, NC 28277</p>
                  </div>
                </div>
              </div>

              {/* Dress Code */}
              <div className="elegant-card hover:scale-[1.01] transition-transform duration-300 p-7">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-softRose to-dustyRose rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">👗</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-elegant text-textPrimary mb-3">Dress Code</h3>

                    <div className="space-y-3 mb-3">
                      <div className="bg-dustyRose/10 rounded-xl p-3 border border-dustyRose/20">
                        <p className="font-semibold text-textPrimary text-sm mb-1">Birthday Girl</p>
                        <p className="text-textSecondary flex items-center gap-2 text-sm">
                          <span>🍷</span>
                          <span>Red Wine Color</span>
                        </p>
                      </div>

                      <div className="bg-blush/10 rounded-xl p-3 border border-blush/20">
                        <p className="font-semibold text-textPrimary mb-2 text-sm">Guests - Pastels:</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-pink-200 border border-pink-300 shadow-sm"></div>
                          <div className="w-8 h-8 rounded-full bg-blue-200 border border-blue-300 shadow-sm"></div>
                          <div className="w-8 h-8 rounded-full bg-purple-200 border border-purple-300 shadow-sm"></div>
                          <div className="w-8 h-8 rounded-full bg-yellow-200 border border-yellow-300 shadow-sm"></div>
                          <div className="w-8 h-8 rounded-full bg-green-200 border border-green-300 shadow-sm"></div>
                        </div>
                        <p className="text-xs text-textMuted font-medium">Pink • Blue • Purple • Yellow • Mint</p>
                      </div>
                    </div>

                    <p className="text-xs text-textMuted italic">Wear what makes you feel beautiful ✨</p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="elegant-card hover:scale-[1.01] transition-transform duration-300 p-7 bg-gradient-to-br from-softRose/5 to-dustyRose/5">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 shrink-0 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-elegant text-textPrimary mb-3">What to Expect</h3>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-textSecondary text-sm">
                        <span className="text-xl">🍽️</span>
                        <span className="font-medium">Delicious Dinner</span>
                      </div>
                      <div className="flex items-center gap-3 text-textSecondary text-sm">
                        <span className="text-xl">💃</span>
                        <span className="font-medium">Dancing</span>
                      </div>
                      <div className="flex items-center gap-3 text-textSecondary text-sm">
                        <span className="text-xl">📸</span>
                        <span className="font-medium">Photo Booth</span>
                      </div>
                      <div className="flex items-center gap-3 text-textSecondary text-sm">
                        <span className="text-xl">🎊</span>
                        <span className="font-medium">Surprises</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RSVP Button */}
              <div className="pt-6">
                <Link href="/rsvp/step1" className="block">
                  <button className="elegant-button text-lg px-8 py-5 font-elegant w-full text-center shadow-lg hover:shadow-xl">
                    RSVP Now - Save My Spot! 🎊
                  </button>
                </Link>
                <p className="text-center text-textSecondary mt-4 text-base">
                  Please RSVP by <span className="font-bold text-softRose text-lg">February 13, 2026</span>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-12 border-t border-softRose/20 fade-in">
          <p className="text-textSecondary mb-3 text-lg">
            Questions? Contact us at{' '}
            <a href="mailto:party@ivysweet16.com" className="text-softRose hover:text-dustyRose font-semibold underline text-xl">
              party@ivysweet16.com
            </a>
          </p>
          <p className="text-textMuted">
            We can't wait to celebrate with you! 💕
          </p>
        </footer>
      </main>
    </div>
  );
}
