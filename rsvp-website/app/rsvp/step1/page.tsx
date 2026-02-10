'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function RSVPStep1() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    if (name.trim().length < 2) {
      setError('Please enter your full name (at least 2 characters)');
      return;
    }

    sessionStorage.setItem('rsvp_name', name.trim());
    router.push('/rsvp/step2');
  };

  React.useEffect(() => {
    const savedName = sessionStorage.getItem('rsvp_name');
    if (savedName) setName(savedName);
  }, []);

  return (
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-[#FFFAF8] via-[#FDEBE8] to-[#FDE2E4] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#E8A0BF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#F4C2C2]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        <Card variant="gradient" className="shadow-2xl backdrop-blur-sm">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-[#523040]">Step 1 of 4</span>
              <span className="text-sm text-[#523040]/70 font-medium">25% Complete</span>
            </div>
            <div className="w-full bg-[#F5E6CC] rounded-full h-3 shadow-inner">
              <div className="bg-gradient-to-r from-[#E8A0BF] to-[#C75B7A] h-3 rounded-full w-1/4 transition-all duration-500 shadow-lg"></div>
            </div>
          </div>

          {/* Decorative Top */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl animate-bounce">✿</span>
              <span className="text-2xl animate-bounce" style={{animationDelay: '0.1s'}}>❀</span>
              <span className="text-3xl animate-bounce" style={{animationDelay: '0.2s'}}>✿</span>
            </div>
          </div>

          {/* Question */}
          <div className="mb-10 text-center">
            <h1 className="text-5xl md:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-[#E8A0BF] via-[#C75B7A] to-[#E8A0BF] mb-4 leading-tight">
              What's your name?
            </h1>
            <p className="text-lg text-[#523040]/70">
              Let us know who's joining the celebration
            </p>
          </div>

          {/* Input */}
          <div className="mb-10">
            <Input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              placeholder="Enter your full name"
              error={error}
              className="text-xl py-4 text-center font-elegant"
              autoFocus
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleNext();
              }}
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center gap-4">
            <Link href="/details">
              <Button variant="outline" size="md" className="hover:scale-105 transition-transform">
                ← Back
              </Button>
            </Link>
            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
              disabled={!name.trim()}
              className="px-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Continue →
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
