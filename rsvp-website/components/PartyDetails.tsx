'use client';

import React from 'react';
import { Card } from './ui/Card';

export const PartyDetails: React.FC = () => {
  return (
    <Card variant="gradient" className="max-w-2xl mx-auto mb-8 animate-fade-in">
      <div className="text-center">
        <h2 className="font-elegant text-3xl md:text-4xl text-textDark mb-6">
          Party Details
        </h2>

        <div className="space-y-6 text-textMedium">
          {/* Date & Time */}
          <div className="flex items-start gap-4">
            <span className="text-3xl text-deepPink">📅</span>
            <div className="text-left flex-1">
              <h3 className="font-semibold text-lg text-textDark mb-1">Date & Time</h3>
              <p className="text-base">Friday, February 13, 2026</p>
              <p className="text-base">6:00 PM - 11:00 PM</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <span className="text-3xl text-deepPink">📍</span>
            <div className="text-left flex-1">
              <h3 className="font-semibold text-lg text-textDark mb-1">Location</h3>
              <p className="text-base">Grand Ballroom</p>
              <p className="text-base">123 Celebration Avenue</p>
              <p className="text-base">Sweet City, SC 12345</p>
            </div>
          </div>

          {/* Dress Code */}
          <div className="flex items-start gap-4">
            <span className="text-3xl text-deepPink">👗</span>
            <div className="text-left flex-1">
              <h3 className="font-semibold text-lg text-textDark mb-1">Dress Code</h3>
              <p className="text-base">Pretty in Pink</p>
              <p className="text-sm text-textLight">Shades of pink, rose, and blush encouraged!</p>
            </div>
          </div>

          {/* Special Notes */}
          <div className="flex items-start gap-4">
            <span className="text-3xl text-deepPink">✨</span>
            <div className="text-left flex-1">
              <h3 className="font-semibold text-lg text-textDark mb-1">What to Expect</h3>
              <p className="text-base">Dinner, Dancing, Photo Booth & Sweet Surprises!</p>
            </div>
          </div>
        </div>

        {/* RSVP Deadline */}
        <div className="mt-8 pt-6 border-t-2 border-blush">
          <p className="text-sm text-textLight">
            Please RSVP by <span className="font-semibold text-deepPink">February 6, 2026</span>
          </p>
        </div>
      </div>
    </Card>
  );
};
