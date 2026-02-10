'use client';

import React from 'react';
import Link from 'next/link';

export default function DetailsPage() {
  return (
    <div className="min-h-screen poster-bg">
      <main className="container mx-auto px-6 py-12">

        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-softRose/10 rounded-full text-xs font-semibold text-textSecondary border border-softRose/20">
              ✨ Complete Event Details ✨
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-script text-softRose mb-3 leading-tight" style={{fontWeight: 300}}>
            Ivy's Sweet 16
          </h1>

          <p className="text-lg sm:text-xl text-textSecondary font-elegant">
            Everything You Need to Know
          </p>
        </div>

        {/* Date & Time Card */}
        <section className="max-w-4xl mx-auto mb-8">
          <div className="elegant-card soft-shadow p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-script text-softRose mb-6 text-center" style={{fontWeight: 300}}>
              When & Where
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Date & Time */}
              <div className="elegant-card bg-softRose/5 p-5 border border-softRose/20">
                <div className="text-center">
                  <span className="text-3xl mb-3 block">📅</span>
                  <h3 className="text-base font-semibold text-textPrimary mb-3">Date & Time</h3>
                  <p className="text-lg font-semibold text-softRose mb-2">
                    Sunday, February 15, 2026
                  </p>
                  <p className="text-base text-textSecondary font-medium">
                    2:30 PM - 6:30 PM
                  </p>
                  <p className="text-xs text-textMuted mt-2 italic">
                    Please arrive on time! 🕐
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="elegant-card bg-softRose/5 p-5 border border-softRose/20">
                <div className="text-center">
                  <span className="text-3xl mb-3 block">📍</span>
                  <h3 className="text-base font-semibold text-textPrimary mb-3">Venue</h3>
                  <p className="text-lg font-semibold text-softRose mb-2">
                    Club House
                  </p>
                  <p className="text-sm text-textSecondary">5616 Sage Hills DR</p>
                  <p className="text-sm text-textSecondary mb-3">Charlotte, NC 28277</p>
                  <a
                    href="https://maps.google.com/?q=5616+Sage+Hills+DR+Charlotte+NC+28277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-gradient-to-br from-softRose to-dustyRose text-white font-medium text-xs rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dress Code Card */}
        <section className="max-w-4xl mx-auto mb-8">
          <div className="elegant-card soft-shadow bg-gradient-to-br from-softRose/10 to-dustyRose/10 p-6 sm:p-8 border border-softRose/20">
            <h2 className="text-2xl sm:text-3xl font-script text-softRose mb-6 text-center" style={{fontWeight: 300}}>
              Dress Code
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Birthday Girl */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-softRose/30">
                <div className="text-center">
                  <span className="text-3xl mb-3 block">🍷</span>
                  <h3 className="text-lg font-semibold text-textPrimary mb-2">Birthday Girl</h3>
                  <p className="text-xl font-bold text-softRose mb-1">Red Wine Color</p>
                  <p className="text-xs text-textMuted">
                    The star of the show! ⭐
                  </p>
                </div>
              </div>

              {/* Guests */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-softRose/30">
                <div className="text-center">
                  <span className="text-3xl mb-3 block">💕</span>
                  <h3 className="text-lg font-semibold text-textPrimary mb-2">Guests</h3>
                  <p className="text-xl font-bold text-softRose mb-1">Pretty in Pink</p>
                  <p className="text-sm text-textSecondary mb-1">
                    or any Pastel Color
                  </p>
                  <p className="text-xs text-textMuted italic">
                    Wear what makes you feel beautiful! ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Grid */}
        <section className="max-w-4xl mx-auto mb-8">
          <div className="elegant-card soft-shadow p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-script text-softRose mb-6 text-center" style={{fontWeight: 300}}>
              What to Expect
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Dinner */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-softRose to-dustyRose w-16 h-16 mx-auto mb-3 rounded-xl shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-sm font-semibold text-textPrimary mb-1">Delicious Food</h3>
                <p className="text-xs text-textMuted">
                  Gourmet dinner & sweet treats
                </p>
              </div>

              {/* Dancing */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-dustyRose to-softRose w-16 h-16 mx-auto mb-3 rounded-xl shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💃</span>
                </div>
                <h3 className="text-sm font-semibold text-textPrimary mb-1">Music & Dancing</h3>
                <p className="text-xs text-textMuted">
                  DJ spinning all your favorites
                </p>
              </div>

              {/* Photo Booth */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-softRose to-blush w-16 h-16 mx-auto mb-3 rounded-xl shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="text-sm font-semibold text-textPrimary mb-1">Photo Booth</h3>
                <p className="text-xs text-textMuted">
                  Capture memories with props
                </p>
              </div>

              {/* Surprises */}
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blush to-dustyRose w-16 h-16 mx-auto mb-3 rounded-xl shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎊</span>
                </div>
                <h3 className="text-sm font-semibold text-textPrimary mb-1">Surprises</h3>
                <p className="text-xs text-textMuted">
                  Special moments & memories
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="max-w-3xl mx-auto mb-8">
          <div className="elegant-card bg-softRose/5 p-6 border border-softRose/20 shadow-md">
            <h3 className="text-lg font-elegant text-textPrimary mb-4 text-center">📝 Important Notes</h3>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li className="flex items-start gap-3">
                <span className="text-lg">✓</span>
                <span>Please RSVP by <strong className="text-softRose">February 13, 2026</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">✓</span>
                <span>Maximum <strong className="text-softRose">10 guests</strong> per RSVP</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">✓</span>
                <span>Let us know about any <strong className="text-softRose">dietary restrictions</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">✓</span>
                <span>Arrive on time to enjoy the full celebration!</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Link href="/" className="flex-1">
              <button className="w-full px-6 py-3 text-textPrimary font-semibold text-sm rounded-full border-2 border-softRose/30 hover:border-softRose bg-white hover:bg-softRose/5 shadow-md transition-all duration-300">
                ← Back to Home
              </button>
            </Link>

            <Link href="/rsvp/step1" className="flex-1">
              <button className="w-full elegant-button text-sm px-6 py-3 shadow-lg hover:shadow-xl">
                RSVP Now 🎊
              </button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-textMuted text-xs">
            Questions? Contact us at{' '}
            <a href="mailto:party@ivysweet16.com" className="text-softRose hover:text-dustyRose font-semibold underline">
              party@ivysweet16.com
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
