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
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-[#FFFAF8] via-[#FDEBE8] to-[#FDE2E4] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blush/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-babyPink/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        <Card variant="gradient" className="shadow-2xl backdrop-blur-sm">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-textDark">Step 3 of 4</span>
              <span className="text-sm text-textDark/70 font-medium">75% Complete</span>
            </div>
            <div className="w-full bg-champagne rounded-full h-3 shadow-inner">
              <div className="bg-gradient-to-r from-blush to-deepPink h-3 rounded-full w-3/4 transition-all duration-500 shadow-lg"></div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl animate-bounce">✿</span>
              <span className="text-2xl animate-bounce" style={{animationDelay: '0.1s'}}>❀</span>
              <span className="text-3xl animate-bounce" style={{animationDelay: '0.2s'}}>✿</span>
            </div>
          </div>

          <div className="mb-10 text-center">
            <h1 className="text-5xl md:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-blush via-deepPink to-blush mb-4 leading-tight">
              Contact Info
            </h1>
            <p className="text-lg text-textDark/70">
              Optional • For event updates and reminders
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📧</div>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                label="Email Address"
                className="text-lg pl-14"
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">📱</div>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                label="Phone Number"
                className="text-lg pl-14"
              />
            </div>
          </div>

          <div className="flex justify-between items-center gap-4">
            <Link href="/rsvp/step2">
              <Button variant="outline" size="md" className="hover:scale-105 transition-transform">
                ← Back
              </Button>
            </Link>
            <Button
              variant="primary"
              size="lg"
              onClick={handleNext}
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
