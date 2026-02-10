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

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-script text-softRose mb-4 gentle-float" style={{fontWeight: 300}}>
            Ivy's Sweet 16
          </h1>

          <p className="text-2xl sm:text-3xl font-elegant text-textSecondary mb-8">
            A Pretty in Pink Celebration
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-lg text-textPrimary">
            <div className="flex items-center gap-3 elegant-card px-6 py-3">
              <span className="text-2xl">📅</span>
              <span className="font-medium">Sunday, February 15, 2026</span>
            </div>
            <div className="flex items-center gap-3 elegant-card px-6 py-3">
              <span className="text-2xl">🕐</span>
              <span className="font-medium">2:30 - 6:30 PM</span>
            </div>
          </div>
        </header>

        <div className="elegant-divider"></div>

        {/* Poster Section */}
        <section className="max-w-xl mx-auto mb-16 fade-in">
          <div className="elegant-card text-center p-8 soft-shadow">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-6">
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
        </section>

        {/* Event Details - Elegant Grid */}
        <section className="max-w-6xl mx-auto mb-16 fade-in-up">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Venue */}
            <div className="elegant-card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-softRose to-dustyRose rounded-full flex items-center justify-center">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-elegant text-textPrimary mb-4">Venue</h3>
              <p className="text-lg font-semibold text-softRose mb-2">Club House</p>
              <p className="text-textSecondary">5616 Sage Hills DR</p>
              <p className="text-textSecondary">Charlotte, NC 28277</p>
            </div>

            {/* Dress Code */}
            <div className="elegant-card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-softRose to-dustyRose rounded-full flex items-center justify-center">
                <span className="text-3xl">👗</span>
              </div>
              <h3 className="text-xl font-elegant text-textPrimary mb-4">Dress Code</h3>

              <div className="space-y-3 mb-4">
                <div className="bg-dustyRose/10 rounded-xl p-3 border border-dustyRose/20">
                  <p className="text-sm font-semibold text-textPrimary">Birthday Girl</p>
                  <p className="text-sm text-textSecondary">🍷 Red Wine Color</p>
                </div>

                <div className="bg-blush/10 rounded-xl p-3 border border-blush/20">
                  <p className="text-sm font-semibold text-textPrimary mb-2">Guests - Pastels:</p>
                  <div className="flex justify-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-pink-200 border-2 border-pink-300"></div>
                    <div className="w-7 h-7 rounded-full bg-blue-200 border-2 border-blue-300"></div>
                    <div className="w-7 h-7 rounded-full bg-purple-200 border-2 border-purple-300"></div>
                    <div className="w-7 h-7 rounded-full bg-yellow-200 border-2 border-yellow-300"></div>
                    <div className="w-7 h-7 rounded-full bg-green-200 border-2 border-green-300"></div>
                  </div>
                  <p className="text-xs text-textMuted">Pink • Blue • Purple • Yellow • Mint</p>
                </div>
              </div>

              <p className="text-sm text-textMuted italic">Wear what makes you feel beautiful ✨</p>
            </div>

            {/* What to Expect */}
            <div className="elegant-card text-center hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-softRose/10 to-dustyRose/10">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-xl font-elegant text-textPrimary mb-4">What to Expect</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 text-textSecondary">
                  <span className="text-xl">🍽️</span>
                  <span className="font-medium">Delicious Dinner</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-textSecondary">
                  <span className="text-xl">💃</span>
                  <span className="font-medium">Dancing</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-textSecondary">
                  <span className="text-xl">📸</span>
                  <span className="font-medium">Photo Booth</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-textSecondary">
                  <span className="text-xl">🎊</span>
                  <span className="font-medium">Surprises</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-2xl mx-auto text-center mb-16 fade-in-up">
          <Link href="/rsvp/step1">
            <button className="elegant-button text-lg px-12 py-4 font-elegant mb-4 w-full sm:w-auto">
              RSVP Now - Save My Spot 🎊
            </button>
          </Link>
          <p className="text-textSecondary">
            Please RSVP by <span className="font-bold text-softRose">February 13, 2026</span>
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-softRose/20">
          <p className="text-textSecondary mb-2">
            Questions? Contact us at{' '}
            <a href="mailto:party@ivysweet16.com" className="text-softRose hover:text-dustyRose font-semibold underline">
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
