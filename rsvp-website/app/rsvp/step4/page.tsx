'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function RSVPStep4() {
  const router = useRouter();
  const [dietary, setDietary] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');

    try {
      const formData = {
        guest_name: sessionStorage.getItem('rsvp_name') || '',
        number_of_guests: parseInt(sessionStorage.getItem('rsvp_guests') || '1'),
        email: sessionStorage.getItem('rsvp_email') || '',
        phone: sessionStorage.getItem('rsvp_phone') || '',
        dietary_restrictions: dietary.trim(),
        message: message.trim(),
      };

      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        sessionStorage.clear();
        router.push('/confirmation');
      } else {
        setError(result.error || 'Failed to submit RSVP. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    const savedDietary = sessionStorage.getItem('rsvp_dietary');
    const savedMessage = sessionStorage.getItem('rsvp_message');
    if (savedDietary) setDietary(savedDietary);
    if (savedMessage) setMessage(savedMessage);
  }, []);

  return (
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-[#FFFAF8] via-[#FDEBE8] to-[#FDE2E4] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blush/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-babyPink/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        <Card variant="gradient" className="shadow-2xl backdrop-blur-sm">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-textDark">Step 4 of 4</span>
              <span className="text-sm text-textDark/70 font-medium">100% Complete</span>
            </div>
            <div className="w-full bg-champagne rounded-full h-3 shadow-inner">
              <div className="bg-gradient-to-r from-blush to-deepPink h-3 rounded-full w-full transition-all duration-500 shadow-lg"></div>
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
              Almost Done!
            </h1>
            <p className="text-lg text-textDark/70">
              Any special requests or dietary needs?
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="relative">
              <div className="absolute left-4 top-6 text-2xl">🥗</div>
              <Input
                type="text"
                value={dietary}
                onChange={(e) => setDietary(e.target.value)}
                placeholder="Vegetarian, Gluten-free, Allergies, etc."
                label="Dietary Restrictions"
                className="text-lg pl-14"
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-6 text-2xl">💌</div>
              <Input
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Leave a sweet message for Ivy..."
                label="Special Message"
                className="text-lg pl-14"
              />
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg animate-shake">
              <p className="text-red-600 text-center font-medium">{error}</p>
            </div>
          )}

          <div className="flex justify-between items-center gap-4">
            <Link href="/rsvp/step3">
              <Button variant="outline" size="md" disabled={isSubmitting} className="hover:scale-105 transition-transform">
                ← Back
              </Button>
            </Link>
            <Button
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              isLoading={isSubmitting}
              disabled={isSubmitting}
              className="px-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {isSubmitting ? 'Submitting...' : 'Submit RSVP ✨'}
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
