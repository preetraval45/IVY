import React from 'react';
import Link from 'next/link';
import { FloralHeader } from '@/components/FloralHeader';
import { Countdown } from '@/components/Countdown';
import { PartyDetails } from '@/components/PartyDetails';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function DetailsPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#FFFAF8] via-[#FDEBE8] to-[#FDE2E4]">
      <div className="max-w-5xl mx-auto">
        {/* Decorative Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#E8A0BF]"></div>
            <span className="text-[#C75B7A] text-sm font-medium tracking-widest uppercase">Event Details</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#E8A0BF]"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-[#E8A0BF] via-[#C75B7A] to-[#E8A0BF]">
            Ivy's Sweet 16
          </h1>
        </div>

        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <FloralHeader />
        </div>

        {/* Countdown */}
        <div className="mb-12 animate-fade-in" style={{animationDelay: '0.1s'}}>
          <Countdown />
        </div>

        {/* Party Details */}
        <div className="mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <PartyDetails />
        </div>

        {/* Important Notes Card */}
        <Card variant="gradient" className="mb-12 shadow-xl animate-fade-in" style={{animationDelay: '0.3s'}}>
          <h3 className="text-2xl font-script text-[#C75B7A] mb-6 text-center">What to Expect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="text-4xl">🍽️</div>
              <h4 className="font-semibold text-[#523040]">Delicious Food</h4>
              <p className="text-sm text-[#523040]/70">Gourmet dinner & sweet treats</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">💃</div>
              <h4 className="font-semibold text-[#523040]">Music & Dancing</h4>
              <p className="text-sm text-[#523040]/70">DJ spinning all your favorites</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">📸</div>
              <h4 className="font-semibold text-[#523040]">Photo Booth</h4>
              <p className="text-sm text-[#523040]/70">Capture memories with props</p>
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Link href="/">
            <Button variant="outline" size="md" className="hover:scale-105 transition-transform">
              ← Back to Home
            </Button>
          </Link>
          <Link href="/rsvp/step1">
            <Button
              variant="primary"
              size="lg"
              className="text-lg px-10 shadow-2xl hover:shadow-[0_15px_40px_rgba(232,160,191,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              RSVP Now →
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
