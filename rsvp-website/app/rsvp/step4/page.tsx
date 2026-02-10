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
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EC] to-[#FFD6E0] flex items-center justify-center p-6">
      {/* Symmetric Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blush rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-babyPink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress Bar - Centered */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm font-semibold text-textDark">Step 4 of 4</span>
          </div>
          <div className="h-3 bg-white/50 rounded-full overflow-hidden shadow-inner max-w-md mx-auto">
            <div className="h-full w-full bg-gradient-to-r from-blush to-deepPink rounded-full transition-all duration-500 shadow-lg"></div>
          </div>
        </div>

        {/* Main Card - Perfectly Centered */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/50">
          {/* Header - Centered */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <span className="text-5xl animate-bounce">🎉</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
              <span className="text-5xl animate-bounce" style={{animationDelay: '0.2s'}}>✨</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-blush via-deepPink to-blush mb-4 leading-tight">
              Almost Done!
            </h1>
            <p className="text-lg text-textMedium">
              Leave a sweet message for Ivy 💌
            </p>
          </div>

          {/* Message Field - Centered */}
          <div className="mb-12 max-w-xl mx-auto">
            <div className="space-y-3">
              <label className="block text-center text-sm font-semibold text-textDark uppercase tracking-wide">
                Special Birthday Message (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-6 top-6 text-3xl">💌</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a sweet birthday message..."
                  rows={6}
                  className="w-full pl-16 pr-6 py-6 text-lg rounded-2xl border-2 border-babyPink focus:border-deepPink bg-white/50 focus:bg-white outline-none transition-all duration-300 resize-none shadow-lg focus:shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-8 p-4 bg-red-50 border-2 border-red-200 rounded-2xl animate-shake max-w-xl mx-auto">
              <p className="text-red-600 text-center font-medium">{error}</p>
            </div>
          )}

          {/* Buttons - Symmetric Layout */}
          <div className="flex items-center justify-center gap-6">
            <Link href="/rsvp/step3" className="w-48">
              <button
                disabled={isSubmitting}
                className="w-full px-8 py-5 text-textDark font-semibold rounded-2xl border-2 border-dustyRose/50 hover:border-dustyRose bg-white hover:bg-dustyRose/10 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Back
              </button>
            </Link>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-48 px-8 py-5 font-bold rounded-2xl text-lg transition-all duration-300 transform
                ${isSubmitting
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blush via-deepPink to-blush text-white shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-1'
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

        {/* Footer Note - Centered */}
        <p className="text-center text-sm text-textMedium mt-8">
          This message is optional - click Submit to finish! ✨
        </p>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
      `}</style>
    </div>
  );
}
