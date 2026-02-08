import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#FFFAF8] via-[#FDEBE8] to-[#FDE2E4] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#E8A0BF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#F4C2C2]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#C75B7A]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Poster */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E8A0BF] via-[#F4C2C2] to-[#C75B7A] rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative aspect-[2/3] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 group-hover:border-white transition-all duration-300 group-hover:shadow-[0_20px_60px_rgba(232,160,191,0.4)]">
              <Image
                src="/poster.png"
                alt="Ivy's Sweet 16 Birthday Party"
                fill
                className="object-contain bg-white"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center md:text-left space-y-8">
            {/* Decorative Top */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#E8A0BF]"></div>
              <span className="text-[#C75B7A] text-sm font-medium tracking-wider uppercase">Sweet Sixteen</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#E8A0BF]"></div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-script text-transparent bg-clip-text bg-gradient-to-r from-[#E8A0BF] via-[#C75B7A] to-[#E8A0BF] leading-tight">
                You're Invited!
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#E8A0BF] to-[#C75B7A] rounded-full mx-auto md:mx-0"></div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-[#523040] font-elegant">
                Join us for an unforgettable
              </p>
              <p className="text-2xl md:text-3xl font-script text-[#C75B7A]">
                Pretty in Pink Celebration
              </p>
            </div>

            {/* Event Highlights */}
            <div className="space-y-3 text-[#523040]/80">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-2xl">🎂</span>
                <span className="text-lg">Sunday, February 15th, 2026</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-2xl">🕐</span>
                <span className="text-lg">2:30 PM - 6:30 PM</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-2xl">✨</span>
                <span className="text-lg">An afternoon of elegance & fun</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link href="/details">
                <Button
                  variant="primary"
                  size="lg"
                  className="text-lg px-10 py-4 shadow-2xl hover:shadow-[0_15px_40px_rgba(232,160,191,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Details & RSVP →
                </Button>
              </Link>
            </div>

            {/* Bottom Decoration */}
            <div className="flex items-center gap-4 justify-center md:justify-start pt-4 opacity-60">
              <span className="text-3xl text-[#E8A0BF] animate-bounce" style={{animationDelay: '0s'}}>✿</span>
              <span className="text-2xl text-[#F4C2C2] animate-bounce" style={{animationDelay: '0.2s'}}>❀</span>
              <span className="text-3xl text-[#C75B7A] animate-bounce" style={{animationDelay: '0.4s'}}>✿</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
