'use client';

import React from 'react';
import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-6">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-12 md:p-16 text-center border-4 border-pink-200">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full shadow-2xl animate-bounce-slow">
              <span className="text-7xl text-white">✓</span>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-7xl md:text-8xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-6 leading-tight">
            Thank You!
          </h1>

          <h2 className="text-3xl md:text-4xl text-rose-900 font-bold mb-8">
            Your RSVP Has Been Received 🎉
          </h2>

          {/* Confirmation Message */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 mb-10 border-2 border-pink-200">
            <p className="text-xl text-rose-800 mb-4 font-semibold">
              We're so excited to celebrate with you!
            </p>
            <p className="text-lg text-rose-700">
              You should receive a confirmation email shortly.
            </p>
          </div>

          {/* Event Details */}
          <div className="bg-white rounded-3xl p-10 mb-10 border-4 border-rose-200 shadow-xl">
            <h3 className="text-3xl font-bold text-rose-900 mb-6">📅 Save the Date</h3>

            <div className="space-y-4 text-lg">
              <p className="text-2xl font-bold text-pink-600">
                Sunday, February 15, 2026
              </p>
              <p className="text-xl text-rose-700 font-semibold">
                2:30 PM - 6:30 PM
              </p>

              <div className="pt-6 border-t-2 border-pink-200">
                <p className="text-2xl font-bold text-rose-900 mb-3">📍 Venue</p>
                <p className="text-xl font-semibold text-pink-600">Club House</p>
                <p className="text-lg text-rose-700">5616 Sage Hills DR</p>
                <p className="text-lg text-rose-700">Charlotte, NC 28277</p>
              </div>
            </div>
          </div>

          {/* Important Reminders */}
          <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 rounded-3xl p-10 mb-10 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-6">✨ Important Reminders</h3>
            <div className="space-y-4 text-left text-lg">
              <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <span className="text-3xl">🍷</span>
                <div>
                  <p className="font-bold">Birthday Girl:</p>
                  <p>Red Wine Color</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <span className="text-3xl">💕</span>
                <div>
                  <p className="font-bold">Guests:</p>
                  <p>Pretty in Pink or any pastel color</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <span className="text-3xl">🎉</span>
                <div>
                  <p className="font-bold">What to Expect:</p>
                  <p>Dinner, Dancing, Photo Booth & Surprises!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link href="/">
              <button className="w-full sm:w-64 bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white font-bold py-6 px-10 rounded-3xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                Back to Home
              </button>
            </Link>
            <a href="mailto:party@ivysweet16.com">
              <button className="w-full sm:w-64 bg-white text-pink-600 font-bold py-6 px-10 rounded-3xl text-xl border-4 border-pink-500 hover:bg-pink-50 shadow-xl transition-all duration-300 transform hover:scale-105">
                Contact Host
              </button>
            </a>
          </div>

          {/* Footer */}
          <p className="text-rose-700 text-base">
            Questions or need to update your RSVP?<br />
            Email us at{' '}
            <a href="mailto:party@ivysweet16.com" className="text-pink-600 font-bold hover:underline text-lg">
              party@ivysweet16.com
            </a>
          </p>
        </div>
      </div>

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
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
}
