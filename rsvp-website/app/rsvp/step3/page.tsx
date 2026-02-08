'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function RSVPStep3() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    sessionStorage.setItem('rsvp_email', email.trim());
    sessionStorage.setItem('rsvp_phone', phone.trim());
    router.push('/rsvp/step4');
  };

  React.useEffect(() => {
    const savedEmail = sessionStorage.getItem('rsvp_email');
    const savedPhone = sessionStorage.getItem('rsvp_phone');
    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
  }, []);

  return (
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <Card variant="gradient" className="shadow-2xl">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-textDark">Step 3 of 4</span>
              <span className="text-sm text-textLight">75% Complete</span>
            </div>
            <div className="w-full bg-[#F5E6CC] rounded-full h-2">
              <div className="bg-gradient-to-r from-blush to-deepPink h-2 rounded-full w-3/4 transition-all duration-300"></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-script text-deepPink mb-4 text-center">
              Contact Information
            </h1>
            <p className="text-textLight text-center">
              Optional - So we can send you updates
            </p>
          </div>

          {/* Inputs */}
          <div className="space-y-6 mb-8">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address (optional)"
              label="Email"
              className="text-lg"
            />

            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number (optional)"
              label="Phone"
              className="text-lg"
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center gap-4">
            <Link href="/rsvp/step2">
              <Button variant="outline" size="md">
                ← Back
              </Button>
            </Link>
            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
            >
              Next →
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
