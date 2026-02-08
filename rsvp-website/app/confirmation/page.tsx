'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto w-full">
        <Card variant="gradient" className="text-center shadow-2xl">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-r from-blush to-deepPink rounded-full animate-float">
              <span className="text-5xl text-white">✓</span>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="font-script text-5xl md:text-7xl text-transparent bg-clip-text bg-linear-to-r from-blush via-deepPink to-roseGold mb-4">
            Thank You!
          </h1>

          <h2 className="font-elegant text-2xl md:text-3xl text-textDark mb-6">
            Your RSVP Has Been Received
          </h2>

          {/* Confirmation Details */}
          <div className="bg-white/50 rounded-lg p-6 mb-8">
            <p className="text-textMedium text-lg mb-4">
              We're so excited to celebrate with you!
            </p>
            <p className="text-textMedium">
              You should receive a confirmation email shortly.
            </p>
          </div>

          {/* Decorative Flowers */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className="text-3xl text-blush opacity-70 animate-float" style={{ animationDelay: '0s' }}>✿</span>
            <span className="text-4xl text-deepPink opacity-80 animate-float" style={{ animationDelay: '0.2s' }}>❀</span>
            <span className="text-3xl text-dustyRose opacity-70 animate-float" style={{ animationDelay: '0.4s' }}>✿</span>
          </div>

          {/* Event Reminder */}
          <div className="border-t-2 border-blush pt-6 mb-8">
            <p className="font-elegant text-xl text-textDark mb-2">
              Save the Date
            </p>
            <p className="text-textMedium text-lg mb-1">
              February 13, 2026
            </p>
            <p className="text-textMedium">
              6:00 PM - 11:00 PM
            </p>
          </div>

          {/* Important Notes */}
          <div className="bg-champagne/30 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-textDark mb-3">
              Important Reminders
            </h3>
            <ul className="text-left text-textMedium space-y-2 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-deepPink">•</span>
                <span>Dress code: Pretty in Pink (shades of pink, rose, and blush)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-deepPink">•</span>
                <span>Location: Grand Ballroom, 123 Celebration Avenue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-deepPink">•</span>
                <span>Expect dinner, dancing, photo booth, and sweet surprises!</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" size="md">
                Back to Home
              </Button>
            </Link>
            <a href="mailto:party@ivysweet16.com">
              <Button variant="outline" size="md">
                Contact Host
              </Button>
            </a>
          </div>

          {/* Footer Message */}
          <p className="text-textLight text-sm mt-8">
            Questions or need to update your RSVP?<br />
            Email us at{' '}
            <a href="mailto:party@ivysweet16.com" className="text-deepPink hover:underline">
              party@ivysweet16.com
            </a>
          </p>
        </Card>
      </div>
    </main>
  );
}
