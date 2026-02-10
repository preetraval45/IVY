'use client';

import React from 'react';
import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen poster-bg flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-2xl w-full">
        <div className="elegant-card soft-shadow p-8 sm:p-10 text-center fade-in-up">

          {/* Success Icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-softRose to-dustyRose rounded-full shadow-lg gentle-float">
              <span className="text-4xl text-white">✓</span>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl sm:text-5xl font-script text-softRose mb-4 leading-tight" style={{fontWeight: 300}}>
            Thank You!
          </h1>

          <h2 className="text-xl sm:text-2xl text-textPrimary font-semibold mb-6">
            Your RSVP Has Been Received 🎉
          </h2>

          {/* Confirmation Message */}
          <div className="elegant-card bg-softRose/5 p-5 mb-6 border border-softRose/20">
            <p className="text-base text-textSecondary mb-2 font-medium">
              We're so excited to celebrate with you!
            </p>
            <p className="text-sm text-textMuted">
              You should receive a confirmation email shortly.
            </p>
          </div>

          {/* Event Details */}
          <div className="elegant-card p-6 mb-6 border border-softRose/20">
            <h3 className="text-xl font-elegant text-textPrimary mb-4">📅 Save the Date</h3>

            <div className="space-y-2 text-sm">
              <p className="text-lg font-semibold text-softRose">
                Sunday, February 15, 2026
              </p>
              <p className="text-base text-textSecondary font-medium">
                2:30 PM - 6:30 PM
              </p>

              <div className="pt-4 border-t border-softRose/20 mt-4">
                <p className="text-base font-semibold text-textPrimary mb-2">📍 Venue</p>
                <p className="text-base font-medium text-softRose">Club House</p>
                <p className="text-sm text-textSecondary">5616 Sage Hills DR</p>
                <p className="text-sm text-textSecondary">Charlotte, NC 28277</p>
              </div>
            </div>
          </div>

          {/* Important Reminders */}
          <div className="elegant-card bg-gradient-to-br from-softRose/10 to-dustyRose/10 p-6 mb-6 border border-softRose/20">
            <h3 className="text-lg font-elegant text-textPrimary mb-4">✨ Important Reminders</h3>
            <div className="space-y-3 text-left text-sm">
              <div className="flex items-start gap-3 bg-white/50 backdrop-blur-sm rounded-xl p-3">
                <span className="text-xl">🍷</span>
                <div>
                  <p className="font-semibold text-textPrimary text-xs">Birthday Girl:</p>
                  <p className="text-textSecondary text-xs">Red Wine Color</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/50 backdrop-blur-sm rounded-xl p-3">
                <span className="text-xl">💕</span>
                <div>
                  <p className="font-semibold text-textPrimary text-xs">Guests:</p>
                  <p className="text-textSecondary text-xs">Pretty in Pink or any pastel color</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/50 backdrop-blur-sm rounded-xl p-3">
                <span className="text-xl">🎉</span>
                <div>
                  <p className="font-semibold text-textPrimary text-xs">What to Expect:</p>
                  <p className="text-textSecondary text-xs">Dinner, Dancing, Photo Booth & Surprises!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/" className="flex-1">
              <button className="w-full elegant-button text-sm px-6 py-3">
                Back to Home
              </button>
            </Link>
            <a href="mailto:party@ivysweet16.com" className="flex-1">
              <button className="w-full px-6 py-3 text-softRose font-semibold rounded-full border-2 border-softRose/30 hover:border-softRose bg-white hover:bg-softRose/5 transition-all duration-300 text-sm">
                Contact Host
              </button>
            </a>
          </div>

          {/* Footer */}
          <p className="text-textMuted text-xs">
            Questions or need to update your RSVP?<br />
            Email us at{' '}
            <a href="mailto:party@ivysweet16.com" className="text-softRose font-semibold hover:underline">
              party@ivysweet16.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
