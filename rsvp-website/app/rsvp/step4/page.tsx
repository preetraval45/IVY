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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4 sm:p-6">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm font-bold text-rose-900">Step 4 of 4 - Final Step! 🎉</span>
          </div>
          <div className="h-2 sm:h-3 bg-white/60 rounded-full overflow-hidden shadow-inner max-w-md mx-auto">
            <div className="h-full w-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 rounded-full transition-all duration-500 shadow-lg animate-pulse"></div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] shadow-2xl p-8 sm:p-12 border-4 border-pink-200">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-6">
              <span className="text-4xl sm:text-5xl animate-bounce">🎉</span>
              <span className="text-3xl sm:text-4xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
              <span className="text-4xl sm:text-5xl animate-bounce" style={{animationDelay: '0.2s'}}>✨</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 mb-4 leading-tight">
              Almost Done!
            </h1>
            <p className="text-base sm:text-lg text-rose-700">
              Leave a sweet message for Ivy 💌
            </p>
          </div>

          {/* Message Field */}
          <div className="mb-10 sm:mb-12 max-w-xl mx-auto">
            <label className="block text-center text-sm font-bold text-rose-900 mb-4 uppercase tracking-wide">
              Special Birthday Message (Optional)
            </label>
            <div className="relative">
              <span className="absolute left-4 sm:left-6 top-6 text-2xl sm:text-3xl">💌</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Leave a sweet birthday message for Ivy..."
                rows={6}
                className="w-full pl-14 sm:pl-16 pr-4 sm:pr-6 py-5 sm:py-6 text-base sm:text-lg rounded-2xl sm:rounded-3xl border-3 border-pink-300 focus:border-rose-500 bg-white focus:bg-pink-50/30 outline-none transition-all duration-300 resize-none shadow-lg focus:shadow-2xl"
              />
            </div>
            <p className="mt-3 text-xs sm:text-sm text-center text-rose-600 font-medium">
              💡 Share your best wishes, memories, or excitement for the celebration!
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-8 p-4 sm:p-5 bg-red-50 border-3 border-red-300 rounded-2xl sm:rounded-3xl animate-shake max-w-xl mx-auto shadow-lg">
              <p className="text-red-700 text-center font-bold text-sm sm:text-base">{error}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/rsvp/step3" className="w-full sm:w-auto">
              <button
                disabled={isSubmitting}
                className="w-full sm:w-48 px-8 py-4 sm:py-5 text-rose-900 font-bold text-lg rounded-2xl sm:rounded-3xl border-3 border-pink-300 hover:border-rose-400 bg-white hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Back
              </button>
            </Link>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full sm:w-64 px-8 py-4 sm:py-5 font-black text-lg sm:text-xl rounded-2xl sm:rounded-3xl transition-all duration-300 transform shadow-2xl
                ${isSubmitting
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-600 via-rose-600 to-fuchsia-600 text-white hover:shadow-3xl hover:scale-105 hover:-translate-y-1'
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Submit RSVP
                  <span className="text-2xl">🎊</span>
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-rose-700 mt-6 sm:mt-8 px-4 font-medium">
          ✨ You're one click away from joining the celebration!
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
