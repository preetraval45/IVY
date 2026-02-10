'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFE8EC] to-[#FFD6E0] flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blush rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-babyPink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-textDark">Step 4 of 4</span>
            <span className="text-sm font-medium text-deepPink">100%</span>
          </div>
          <div className="h-3 bg-white/50 rounded-full overflow-hidden shadow-inner">
            <div className="h-full w-full bg-gradient-to-r from-blush to-deepPink rounded-full transition-all duration-500 shadow-lg"></div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-2 mb-6">
              <span className="text-4xl animate-bounce">🎉</span>
              <span className="text-3xl animate-bounce" style={{animationDelay: '0.1s'}}>💕</span>
              <span className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>✨</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-script text-transparent bg-clip-text bg-gradient-to-r from-blush via-deepPink to-blush mb-4 leading-tight">
              Almost Done!
            </h1>
            <p className="text-lg text-textMedium">
              Any special requests or dietary needs? 🍽️
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="relative">
              <label className="block text-sm font-semibold text-textDark mb-2">
                Dietary Restrictions
              </label>
              <div className="relative">
                <span className="absolute left-4 top-5 text-2xl">🥗</span>
                <input
                  type="text"
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  placeholder="Vegetarian, Gluten-free, Allergies, etc."
                  className="w-full pl-14 pr-4 py-4 text-lg rounded-2xl border-2 border-babyPink focus:border-deepPink bg-white/50 focus:bg-white outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-textDark mb-2">
                Special Message for Ivy
              </label>
              <div className="relative">
                <span className="absolute left-4 top-5 text-2xl">💌</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a sweet birthday message..."
                  rows={4}
                  className="w-full pl-14 pr-4 py-4 text-lg rounded-2xl border-2 border-babyPink focus:border-deepPink bg-white/50 focus:bg-white outline-none transition-all duration-300 resize-none"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl animate-shake">
              <p className="text-red-600 text-center font-medium">{error}</p>
            </div>
          )}

          <div className="flex items-center justify-between gap-4">
            <Link href="/rsvp/step3" className="flex-1">
              <button
                disabled={isSubmitting}
                className="w-full px-6 py-4 text-textDark font-semibold rounded-2xl border-2 border-dustyRose/30 hover:border-dustyRose bg-white hover:bg-dustyRose/5 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                ← Back
              </button>
            </Link>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`flex-1 px-6 py-4 font-bold rounded-2xl text-lg transition-all duration-300 transform
                ${isSubmitting
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blush via-deepPink to-blush text-white shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5'
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Submitting...
                </span>
              ) : (
                'Submit RSVP 🎊'
              )}
            </button>
          </div>
        </div>
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
