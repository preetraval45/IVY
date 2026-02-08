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
      // Retrieve all form data from sessionStorage
      const formData = {
        guest_name: sessionStorage.getItem('rsvp_name') || '',
        number_of_guests: parseInt(sessionStorage.getItem('rsvp_guests') || '1'),
        email: sessionStorage.getItem('rsvp_email') || '',
        phone: sessionStorage.getItem('rsvp_phone') || '',
        dietary_restrictions: dietary.trim(),
        message: message.trim(),
      };

      // Submit to API
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Clear sessionStorage
        sessionStorage.clear();
        // Redirect to confirmation
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
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <Card variant="gradient" className="shadow-2xl">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-textDark">Step 4 of 4</span>
              <span className="text-sm text-textLight">100% Complete</span>
            </div>
            <div className="w-full bg-[#F5E6CC] rounded-full h-2">
              <div className="bg-gradient-to-r from-blush to-deepPink h-2 rounded-full w-full transition-all duration-300"></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-script text-deepPink mb-4 text-center">
              Almost Done!
            </h1>
            <p className="text-textLight text-center">
              Any dietary restrictions or special requests?
            </p>
          </div>

          {/* Inputs */}
          <div className="space-y-6 mb-8">
            <Input
              type="text"
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
              placeholder="e.g., Vegetarian, Gluten-free, Allergies (optional)"
              label="Dietary Restrictions"
              className="text-lg"
            />

            <Input
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Any special message for Ivy? (optional)"
              label="Message"
              className="text-lg"
            />
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <p className="text-red-600 text-center">{error}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center gap-4">
            <Link href="/rsvp/step3">
              <Button variant="outline" size="md" disabled={isSubmitting}>
                ← Back
              </Button>
            </Link>
            <Button
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Submit RSVP
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
