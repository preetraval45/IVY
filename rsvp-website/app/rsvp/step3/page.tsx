'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
    <div className="min-h-screen poster-bg flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl">

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <span className="text-sm font-semibold text-textPrimary">Step 3 of 4</span>
          </div>
          <div className="elegant-progress max-w-md mx-auto">
            <div className="elegant-progress-fill" style={{width: '75%'}}></div>
          </div>
        </div>

        {/* Main Card */}
        <div className="elegant-card soft-shadow p-8 sm:p-12 fade-in-up">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-5xl mb-6">📧</div>
            <h1 className="text-4xl sm:text-5xl font-script text-softRose mb-4" style={{fontWeight: 300}}>
              Stay Connected
            </h1>
            <p className="text-lg text-textSecondary">
              Optional - For event updates and reminders ✨
            </p>
          </div>

          {/* Input Fields */}
          <div className="space-y-6 mb-10 max-w-xl mx-auto">
            <div>
              <label className="block text-center text-sm font-semibold text-textPrimary mb-4 uppercase tracking-wide">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="elegant-input text-lg py-4"
              />
            </div>

            <div>
              <label className="block text-center text-sm font-semibold text-textPrimary mb-4 uppercase tracking-wide">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="elegant-input text-lg py-4"
              />
            </div>

            <div className="bg-softRose/10 rounded-2xl p-5 text-center border-2 border-softRose/20">
              <p className="text-sm text-textSecondary font-medium">
                💡 We'll only use this to send event updates and reminders
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/rsvp/step2" className="w-full sm:w-auto">
              <button className="w-full sm:w-48 px-8 py-4 text-textPrimary font-semibold rounded-full border-2 border-softRose/30 hover:border-softRose bg-white hover:bg-softRose/5 transition-all duration-300">
                ← Back
              </button>
            </Link>

            <button
              onClick={handleNext}
              className="w-full sm:w-64 elegant-button text-lg py-4"
            >
              Continue →
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-textMuted mt-6">
          ⏭️ You can skip this step - it's completely optional!
        </p>
      </div>
    </div>
  );
}
