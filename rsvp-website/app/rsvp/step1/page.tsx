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

    // Store in sessionStorage for multi-step form
    sessionStorage.setItem('rsvp_name', name.trim());
    router.push('/rsvp/step2');
  };

  React.useEffect(() => {
    // Pre-fill if already entered
    const savedName = sessionStorage.getItem('rsvp_name');
    if (savedName) setName(savedName);
  }, []);

  return (
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <Card variant="gradient" className="shadow-2xl">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-textDark">Step 1 of 4</span>
              <span className="text-sm text-textLight">25% Complete</span>
            </div>
            <div className="w-full bg-[#F5E6CC] rounded-full h-2">
              <div className="bg-gradient-to-r from-blush to-deepPink h-2 rounded-full w-1/4 transition-all duration-300"></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-script text-deepPink mb-4 text-center">
              What's your name?
            </h1>
            <p className="text-textLight text-center">
              Let us know who's joining the celebration
            </p>
          </div>

          {/* Input */}
          <div className="mb-8">
            <Input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              placeholder="Enter your full name"
              error={error}
              className="text-lg py-4"
              autoFocus
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleNext();
              }}
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center gap-4">
            <Link href="/details">
              <Button variant="outline" size="md">
                ← Back
              </Button>
            </Link>
            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
              disabled={!name.trim()}
            >
              Next →
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
