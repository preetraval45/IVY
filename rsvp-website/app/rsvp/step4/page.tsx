'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RSVPStep4() {
  const router = useRouter();
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
    const savedMessage = sessionStorage.getItem('rsvp_message');
    if (savedMessage) setMessage(savedMessage);
  }, []);

  return (
    <div className="min-h-screen poster-bg flex items-center justify-center p-6 sm:p-8 lg:p-12">
      <div className="w-full max-w-2xl">

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <span className="text-sm font-semibold text-textPrimary">Step 4 of 4 - Final Step! 🎉</span>
          </div>
          <div className="elegant-progress max-w-md mx-auto">
            <div className="elegant-progress-fill" style={{width: '100%'}}></div>
          </div>
        </div>

        {/* Main Card */}
        <div className="elegant-card soft-shadow p-10 sm:p-12 lg:p-14 fade-in-up">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-5xl mb-6">💌</div>
            <h1 className="text-4xl sm:text-5xl font-script text-softRose mb-4" style={{fontWeight: 300}}>
              Almost Done!
            </h1>
            <p className="text-lg text-textSecondary">
              Leave a sweet message for Ivy 💕
            </p>
          </div>

          {/* Message Field */}
          <div className="mb-10 max-w-xl mx-auto">
            <label className="block text-center text-sm font-semibold text-textPrimary mb-4 uppercase tracking-wide">
              Birthday Message (Optional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your best wishes, memories, or excitement for the celebration..."
              rows={6}
              className="elegant-input text-lg py-4 resize-none"
            />
            <p className="mt-3 text-xs text-center text-textMuted">
              💡 Your sweet words will make her day even more special!
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-8 p-5 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-center font-medium max-w-xl mx-auto">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/rsvp/step3" className="w-full sm:w-auto">
              <button
                disabled={isSubmitting}
                className="w-full sm:w-48 px-8 py-4 text-textPrimary font-semibold rounded-full border-2 border-softRose/30 hover:border-softRose bg-white hover:bg-softRose/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Back
              </button>
            </Link>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full sm:w-64 elegant-button text-lg py-4 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit RSVP 🎊'
              )}
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-textMuted mt-6">
          ✨ You're one click away from joining the celebration!
        </p>
      </div>
    </div>
  );
}
